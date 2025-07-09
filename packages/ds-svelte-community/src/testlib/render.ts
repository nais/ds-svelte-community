import { ThemeContext, themeContextKey } from "$lib/components/Theme/Theme.svelte";
import { mount, type Component, type ComponentProps, type Snippet } from "svelte";
import { someRandomTextSnippet } from "./TextSnippet.svelte";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function render<TComponent extends Component<any>>(
	component: TComponent,
	props?: ComponentProps<TComponent>,
) {
	const div = document.createElement("div");

	mount(component, {
		target: div,
		props,
		intro: false,
		context: new Map([[themeContextKey, new ThemeContext("light")]]),
	});
	return {
		container: div,
	};
}

const convertedSnippet = someRandomTextSnippet as Snippet;
const someRandomText = "SomeRandomText";
export { someRandomText, convertedSnippet as someRandomTextSnippet };
