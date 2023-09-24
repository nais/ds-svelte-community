import { parse, walk } from "svelte/compiler";
import type { Ast, Script, Style, TemplateNode } from "svelte/types/compiler/interfaces";

type ContentType = "script" | "style" | "markup";

interface WalkAndReplaceOptions {
	type: ContentType;
	content: string;
	filename: string;
}

const OFFSET = {
	script: "<script>",
	style: "<style>",
	markup: "",
};

const clampContent = (type: ContentType, content: string) => {
	switch (type) {
		case "script":
			return `<script>${content}</script>`;
		case "style":
			return `<style>${content}</style>`;
		default:
			return content;
	}
};

type GetAst = (type: ContentType, ast: Ast) => TemplateNode | Style | Script | undefined;

const getAst: GetAst = (type, ast) => {
	switch (type) {
		case "script":
			return ast.instance;
		case "style":
			return ast.css;
		case "markup":
			return ast.html;
		default:
			return undefined;
	}
};

interface NodeMeta {
	start: number;
	end: number;
}

interface NodeElement extends NodeMeta {
	type: "Element";
	name: string;
	attributes: Array<
		NodeMeta & {
			type: "Attribute";
			name: string;
			value: true | [{ type?: "Text"; raw: string }];
		}
	>;
	children: Array<NodeText | NodeElement>;
}

export interface NodeText {
	type?: "Text";
	raw: string;
}

interface NodeImportDeclaration extends NodeMeta {
	type: "ImportDeclaration";
	source: { value: string };
	specifiers: Array<{
		local: { name: string };
		imported: { name: string };
	}>;
}

interface NodeIdentifier extends NodeMeta {
	type: "Identifier";
	name: string;
}

interface NodeDeclaration extends NodeMeta {
	type: "Declaration";
	property: string;
	value: NodeMeta & {
		children: NodeChildString[];
	};
}

interface NodeRule extends NodeMeta {
	type: "Rule";
	prelude: NodeMeta & {
		type: "SelectorList";
		children: Array<
			NodeMeta & {
				type: "Selector";
				name: "div";
			}
		>;
	};
	block: NodeMeta & {
		children: NodeDeclaration[];
	};
}

interface NodeAtRule extends NodeMeta {
	type: "Atrule";
	name: string;
	prelude: NodeMeta & {
		type: string;
		children: Array<{
			type: "MediaQueryList";
			children: Array<{
				type: "MediaQuery";
				children: Array<
					| {
							type: "WhiteSpace";
					  }
					| {
							type: "Identifier";
							name: string; // "and" | "lg" | "321px"
					  }
				>;
			}>;
		}>;
	};
	block: NodeMeta & {
		type: "Block";
	};
}

interface NodeFunction extends NodeMeta {
	type: "Function";
	name: string; // "rgba" | "rem" | "em" | "px";
	children: Array<{
		type: "HexColor" | "Operator" | "Number" | "Dimension";
		value: string;
	}>;
}

export interface NodeChildString extends NodeMeta {
	type?: string;
	value: string;
}

export type Node =
	| NodeElement
	| NodeImportDeclaration
	| NodeIdentifier
	| NodeDeclaration
	| NodeRule
	| NodeAtRule
	| NodeFunction;
export function walkAndReplace(
	options: WalkAndReplaceOptions,
	replaceWith: (
		enter: { node: Node; parentNode: Node },
		replaceContent: (node: Node, replaceWith: string, replacee?: string) => void,
		getContent: (node: NodeMeta) => string,
	) => void,
) {
	let content = options.content;

	const ast = parse(clampContent(options.type, content), {
		filename: options.filename,
	});

	let cursor = -1 * OFFSET[options.type].length;

	function replaceContent(node: Node, replaceWith: string, replacee?: string) {
		const replaced = replacee ?? content.slice(node.start + cursor, node.end + cursor);
		content = content.replace(replaced, replaceWith);
		cursor += replaceWith.length - replaced.length;
	}

	function getContent(node: NodeMeta) {
		return content.slice(node.start + cursor, node.end + cursor);
	}

	walk(getAst(options.type, ast) as never, {
		enter(node: unknown, parentNode: unknown) {
			replaceWith.apply(this, [
				{ node: node as Node, parentNode: parentNode as Node },
				replaceContent,
				getContent,
			]);
		},
	});

	return content;
}
