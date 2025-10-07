import type { HTMLElements } from "$lib/components/utils/elements";
import type { Snippet } from "svelte";
import type { TypoProps } from "../typo_shared";

export interface BodyLongProps extends TypoProps {
	/**
	 * The size of the body
	 * medium: 18px, small: 16px
	 */
	size?: "large" | "medium" | "small";

	/**
	 * Adds margin-bottom
	 */
	spacing?: boolean;

	/**
	 * Tag to use for the body
	 */
	as?: HTMLElements;

	children: Snippet;
}
