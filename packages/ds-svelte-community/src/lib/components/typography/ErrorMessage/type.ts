import type { Snippet } from "svelte";
import type { HTMLAttributes } from "svelte/elements";

export interface ErrorMessageProps extends HTMLAttributes<HTMLParagraphElement> {
	/**
	 * The size of the body
	 * medium: 18px, small: 16px
	 */
	size?: "medium" | "small";
	/** Adds margin-bottom */
	spacing?: boolean;
	/** Tag to use for the body */
	as?: "p" | "span";

	showIcon?: boolean;

	children: Snippet;
}
