import { ThemeContext, themeContextKey } from "$lib/components/Theme/Theme.svelte";
import { SvelteComponent, type Component, type ComponentProps, type Snippet } from "svelte";
import { render as svelteRender } from "svelte/server";
import { someRandomTextSnippet } from "./TextSnippet.svelte";

export interface RenderOutput {
	/** HTML that goes into the `<head>` */
	head: string;
	/** HTML that goes somewhere into the `<body>` */
	body: string;
}

export type RenderResult = ReturnType<typeof render>;

export const themes = ["dark", "light"] as const;
export type RenderTheme = (typeof themes)[number];

export function render<
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	TComponent extends SvelteComponent<any> | Component<any>,
	Props extends ComponentProps<TComponent> = ComponentProps<TComponent>,
>(component: TComponent, props?: Props) {
	const returned: { [key in RenderTheme]?: RenderOutput } = {};

	for (const theme of themes) {
		const rendered = svelteRender(component as never, {
			props: props as never,
			context: new Map([[themeContextKey, new ThemeContext(theme)]]),
		});
		returned[theme] = rendered;
	}

	return returned;
}

const convertedSnippet = someRandomTextSnippet as Snippet;
const someRandomText = "SomeRandomText";
export { someRandomText, convertedSnippet as someRandomTextSnippet };
