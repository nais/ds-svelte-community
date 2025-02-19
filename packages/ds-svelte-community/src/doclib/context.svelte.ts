import type { Doc } from "@nais/vite-plugin-svelte-docs";
import { getContext, setContext, type Snippet } from "svelte";

const ctxKey = Symbol("doc-context");

export type Story = {
	name: string;
	source: string;
};

export type Arguments = { [key: string]: unknown };

export type Template = Snippet<[Arguments]>;

export class Context {
	values = $state({});
	story: Story | undefined = $state(undefined);
	stories: Story[] = $state([]);

	private _templates: Map<string, Template>;
	private _name: string;

	constructor(doc: Doc) {
		this._templates = new Map();
		this._name = doc.name;
	}

	get name() {
		return this._name;
	}

	setStory(name: string, source: string) {
		if (this.story) {
			this.story = { name, source };
		}
		this.stories.push({ name, source });
	}

	setSnippet(name: string, snippet: Template) {
		this._templates.set(name, snippet);
		console.log("setSnippet", name, snippet);
	}
}

export function setDocContext(context: Context) {
	return setContext(ctxKey, context);
}

export function getDocContext(): Context {
	return getContext(ctxKey);
}
