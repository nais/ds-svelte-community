import type { Snippet } from "svelte";
import type { SvelteHTMLElements } from "svelte/elements";
import type { TypoProps } from "../typo_shared";

export interface DetailProps extends TypoProps {
	/**
	 * All caps
	 */
	uppercase?: boolean;

	/**
	 * Tag to use for the body
	 */
	as?: keyof SvelteHTMLElements;
	children: Snippet;
	[key: string]: unknown;
}
