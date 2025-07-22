import { ThemeContext, themeContextKey } from "$lib/components/Theme/Theme.svelte";
import { SvelteComponent, type Component, type ComponentProps, type Snippet } from "svelte";
import { render as svelteRender } from "svelte/server";
import { someRandomTextSnippet } from "./TextSnippet.svelte";

export type RenderResult = ReturnType<typeof render>;

export function render<
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	TComponent extends SvelteComponent<any> | Component<any>,
	Props extends ComponentProps<TComponent> = ComponentProps<TComponent>,
>(component: TComponent, props?: Props) {
	const rendered = svelteRender(component as never, {
		props: props as never,
		context: new Map([[themeContextKey, new ThemeContext("light")]]),
	});

	return rendered;
}

const convertedSnippet = someRandomTextSnippet as Snippet;
const someRandomText = "SomeRandomText";
export { someRandomText, convertedSnippet as someRandomTextSnippet };
