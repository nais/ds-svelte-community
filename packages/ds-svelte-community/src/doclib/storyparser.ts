import MagicString from "magic-string";
import type { ComponentProps } from "svelte";
import { parse, type AST } from "svelte/compiler";
import { Project } from "ts-morph";
import { walk } from "zimmerframe";
import { format, removeAttrs } from "./printer";
import type Renderer from "./Renderer.svelte";
import { type SnippetBlock } from "./svelte_legacy_types";

type CompiledStory = {
	name?: string;
	source: string;
	snippet: string;
	locked: boolean;
	preview?: ComponentProps<typeof Renderer>["preview"];
};

export enum LogLevel {
	none,
	error,
	warn,
	all,
}

export class StoryParser {
	private libReplacement: string;
	private code: string = "";
	private magicString: MagicString = new MagicString("");
	private logLevel: LogLevel = LogLevel.error;
	private projectCache: Project | null = null;

	constructor(libReplacement: string, logLevel: LogLevel = LogLevel.error) {
		this.libReplacement = libReplacement;
		this.logLevel = logLevel;
	}

	private getProject(): Project {
		if (!this.projectCache) {
			this.projectCache = new Project({
				compilerOptions: {
					lib: ["esnext"],
					noEmit: true,
					allowJs: true,
					sourceMap: true,
				},
			});
		}
		return this.projectCache;
	}

	async compile(code: string, id: string) {
		const ast = parse(code, {
			filename: id,
			modern: true,
		});

		this.code = code;
		this.magicString = new MagicString(code);

		const stories: AST.Component[] = [];
		let doc: AST.Component;
		walk(ast.fragment as AST.SvelteNode, null, {
			Component(node, { next }) {
				if (node.name == "Story" && node.fragment.nodes.length > 0) {
					stories.push(node);
				}
				if (node.name == "Doc") {
					doc = node;
				}
				next();
			},
		});

		if (stories.length === 0) {
			return null;
		}

		const ts = code.slice(ast.instance!.start, ast.instance!.end);
		const compiled: CompiledStory[] = [];
		const attrStories: string[] = [];
		let index = 0;
		for (const story of stories) {
			const ret = await this.parseStory(story, ts);
			if (!ret) {
				continue;
			}
			compiled.push(ret);

			let storyName = "Default";
			const nn = story.attributes.find((a) => a.type === "Attribute" && a.name === "name");
			if (nn) {
				// @ts-expect-error we know it's there
				storyName = nn.value[0].data as unknown as string;
			}

			const snippetName = `docSnippet${index++}`;
			attrStories.push(
				`{name: "${storyName}", source: "${btoa(ret.source)}", snippet: ${snippetName}, locked: ${ret.locked}, props: ${JSON.stringify(ret.props)}, lockedProps: ${JSON.stringify(ret.lockedProps)}, preview: ${JSON.stringify(ret.preview)}}`,
			);

			const snippet = `{#snippet ${snippetName}({docProps}: { docProps: { [key: string]: unknown } })}\n${ret.snippet}\n{/snippet}\n`;
			this.magicString.prependLeft(doc!.start, snippet);
		}
		return { doc: doc!, compiled, attrStories };
	}

	async parse(code: string, id: string) {
		const res = await this.compile(code, id);
		if (!res) {
			return res;
		}

		const { doc, attrStories } = res;

		// compiled.forEach((story, i) => {
		// 	const snippetName = `docSnippet${i}`;

		// 	let snippetContent = story.snippet;
		// 	let props: { key: string; value: string }[] = [];
		// 	let lockedProps: string[] = [];
		// 	if (!story.locked) {
		// 		const res = parseDocSnippet(snippetContent);
		// 		if (res) {
		// 			snippetContent =
		// 				snippetContent.slice(0, res.propsIndex) +
		// 				" {...docProps}" +
		// 				snippetContent.slice(res.propsIndex);
		// 			props = res.props;
		// 			lockedProps = res.lockedProps;
		// 		}
		// 	}

		// 	const snippet = `{#snippet ${snippetName}({docProps})}\n${snippetContent}\n{/snippet}\n`;
		// 	attr.push(
		// 		`{name: "${story.name || "Default"}", source: "${btoa(story.source)}", snippet: ${snippetName}, locked: ${story.locked}, props: ${JSON.stringify(props)}, lockedProps: ${JSON.stringify(lockedProps)}}`,
		// 	);
		// 	s.prependLeft(doc.start, snippet);
		// });

		const attrStr = " stories={[" + attrStories.join(", ") + "]}";
		this.magicString.appendRight(doc!.start + ("<" + doc!.name).length, attrStr);

		return {
			code: this.magicString.toString(),
			map: this.magicString.generateMap({ hires: true }),
		};
	}

	private log(...args: unknown[]) {
		if (this.logLevel >= LogLevel.all) {
			console.log(...args);
		}
	}

	private warn(...args: unknown[]) {
		if (this.logLevel >= LogLevel.warn) {
			console.warn(...args);
		}
	}

	private error(...args: unknown[]) {
		if (this.logLevel >= LogLevel.error) {
			console.error(...args);
		}
	}

	private async parseStory(story: AST.Component, script: string) {
		const { source, snippet } = await this.formatStory(script, story);

		if (source === "") {
			this.error("Failed to format story", story);
			return null;
		}

		const nn = story.attributes.find((a) => a.type === "Attribute" && a.name === "name");
		let name: string | undefined;
		if (nn) {
			// @ts-expect-error we know it's there
			name = nn.value[0].data as unknown as string;
		}

		const locked =
			story.attributes.find((a) => a.type === "Attribute" && a.name === "locked") !== undefined;

		if (locked) {
			this.log("Locked story", name);
			return {
				name,
				source,
				snippet,
				locked,
				props: [],
				lockedProps: [],
			};
		}
		const res = this.parseDocSnippet(snippet);
		if (!res) {
			this.warn("Failed to parse doc snippet");
			return null;
		}

		let snippetContent = snippet;
		snippetContent =
			snippetContent.slice(0, res.propsIndex) +
			" {...docProps}" +
			snippetContent.slice(res.propsIndex);

		this.magicString.remove(story.start, story.end);
		return {
			name,
			source: await removeAttrs(
				source,
				res.props.map((p) => p.key),
			),
			snippet: snippetContent,
			locked,
			props: res.props,
			lockedProps: res.lockedProps,
			preview: this.parsePreview(story),
		};
	}

	private async formatStory(script: string, story: AST.Component) {
		// Get a fresh project instance - still much better than creating it every time during development
		const project = this.getProject();

		// Use a simpler, unique filename strategy
		const fileName = `story_${Math.random().toString(36).substr(2, 12)}.ts`;

		// Make sure we don't have file conflicts
		const existingFile = project.getSourceFile(fileName);
		if (existingFile) {
			project.removeSourceFile(existingFile);
		}

		const sourceFile = project.createSourceFile(fileName, script);

		const split = "export default 1457387;";
		sourceFile.insertText(sourceFile.getEnd(), "\n\n" + split + "\n\n");

		walk(story.fragment as AST.SvelteNode, null, {
			ExpressionTag: (node, { next }) => {
				sourceFile.insertText(sourceFile.getEnd(), this.code.slice(node.start, node.end) + "\n");
				next();
			},
			Component: (node, { next }) => {
				if (node.name === "Story") {
					next();
					return;
				}
				sourceFile.insertText(sourceFile.getEnd(), "new " + node.name + "()\n");
				next();
			},
		});

		// Remove unused code and imports
		let lastWidth: number;
		do {
			lastWidth = sourceFile.getFullWidth();
			sourceFile.fixUnusedIdentifiers();
		} while (lastWidth !== sourceFile.getFullWidth());

		const ts = sourceFile.getText().split(split)[0].replaceAll("$lib", this.libReplacement);

		const contentStart = story.fragment.nodes[0].start;
		const contentEnd = story.fragment.nodes.at(-1)!.end;
		const snippet = this.code.slice(contentStart, contentEnd);
		let contentSnippet = snippet;
		story.fragment.nodes.forEach((child) => {
			if (child.type !== "SnippetBlock") {
				return;
			}
			const snippetBlock = child as unknown as SnippetBlock;
			// docSnippet = code.slice(snippetBlock.start, snippetBlock.end).indexOf("docProps") !== -1;
			contentSnippet = this.code.slice(
				//@ts-expect-error we know it's there
				snippetBlock.children[0].start,
				//@ts-expect-error we know it's there
				snippetBlock.children[snippetBlock.children.length - 1].end,
			);
		});

		const content = `${ts}\n\n${contentSnippet}`;

		// Clean up the temporary source file to prevent memory leaks
		project.removeSourceFile(sourceFile);

		return {
			source: await format(content),
			snippet: snippet,
		};
	}

	private parseDocSnippet(snippet: string):
		| {
				propsIndex: number;
				props: { key: string; value: string }[];
				lockedProps: string[];
		  }
		| false {
		const ast = parse(snippet, {
			filename: "docSnippet.svelte",
			modern: true,
		});

		const frag = ast.fragment;
		let comp: AST.Component | undefined = undefined;
		for (const node of frag.nodes) {
			switch (node.type) {
				case "Text": {
					if (node.data.trim() === "") {
						break;
					}
					this.warn("Unexpected text node", node.data);
					return false;
				}
				case "Component": {
					if (comp !== undefined) {
						return false;
					}
					comp = node;
					break;
				}
				// default:
				// 	this.log("Unexpected node", node.type);
				// 	return false;
			}
		}

		if (comp === undefined) {
			this.warn("No component found");
			return false;
		}

		const props: { key: string; value: string }[] = [];
		const lockedProps: string[] = [];
		let propsIndex = comp.start + ("<" + comp?.name).length;

		if (comp.attributes && comp.attributes.length > 0) {
			propsIndex = comp.attributes[comp.attributes.length - 1].end;
		}

		for (const attr of comp.attributes) {
			if (attr.type !== "Attribute") {
				if (attr.type === "BindDirective") {
					lockedProps.push(attr.name);
					continue;
				}
				this.warn("Unexpected attribute", attr.type);
				return false;
			}

			if (attr.value === true) {
				props.push({ key: attr.name, value: "true" });
			} else if (
				Array.isArray(attr.value) &&
				attr.value.length === 1 &&
				attr.value[0].type === "Text"
			) {
				const value = attr.value[0];
				props.push({ key: attr.name, value: JSON.stringify(value.data) });
			} else {
				lockedProps.push(attr.name);
			}
			// if (attr.value.length !== 1) {
			// 	return false;
			// }
			// const value = attr.value[0];
			// if (value.type !== "Text") {
			// 	return false;
			// }
			// props.push({ key: attr.name, value: value.data });
		}

		return { propsIndex, props, lockedProps };
	}

	parsePreview(story: AST.Component): ComponentProps<typeof Renderer>["preview"] {
		const preview = story.attributes.find((a) => a.type === "Attribute" && a.name === "preview");
		if (!preview) {
			return undefined;
		}

		if (preview.type !== "Attribute") {
			this.warn("Preview attribute is not an Attribute", preview);
			return undefined;
		}

		if (typeof preview.value === "boolean") {
			this.warn("Preview attribute is a boolean, expected an object", preview);
			return undefined;
		}

		if (Array.isArray(preview.value)) {
			this.warn("Preview attribute is an array, expected an object", preview);
			return undefined;
		}

		if (preview.value.type !== "ExpressionTag") {
			this.warn("Preview attribute is not an ExpressionTag", preview);
			return undefined;
		}

		if (preview.value.expression.type !== "ObjectExpression") {
			this.warn("Preview attribute is not an ObjectExpression", preview);
			return undefined;
		}

		const previewProps: Record<string, unknown> = {};
		for (const prop of preview.value.expression.properties) {
			if (prop.type !== "Property") {
				this.warn("Preview property is not a Property", prop);
				return undefined;
			}
			if (prop.key.type !== "Identifier") {
				this.warn("Preview property key is not an Identifier", prop.key);
				return undefined;
			}

			let val: unknown;
			switch (prop.value.type) {
				case "Literal":
					val = prop.value.value;
					break;
				default:
					this.warn("Preview property value is not a Literal", prop.value);
					return undefined;
			}

			previewProps[prop.key.name] = val;
		}

		return previewProps;
	}
}
