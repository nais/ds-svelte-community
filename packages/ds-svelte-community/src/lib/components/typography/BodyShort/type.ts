import type { Snippet } from "svelte";
import type { SvelteHTMLElements } from "svelte/elements";
import type { TypoProps } from "../typo_shared";

export interface BodyShortProps extends TypoProps {
	/**
	 * medium: 18px, small: 16px
	 */
	size?: "large" | "medium" | "small";
	/**
	 * Tag to use for the body
	 */
	as?: keyof SvelteHTMLElements;
	children: Snippet;
	[key: string]: unknown;
}
