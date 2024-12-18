import type { Snippet } from "svelte";
import type { HTMLAnchorAttributes, HTMLAttributes } from "svelte/elements";

export const sizes = ["medium", "small"] as const;
export const headingTags = ["h1", "h2", "h3", "h4", "h5", "h6"] as const;

export interface ErrorSummaryProps extends HTMLAttributes<HTMLDivElement> {
	/**
	 * Changes padding and font-sizes.
	 */
	size?: (typeof sizes)[number];
	/**
	 * Heading text.
	 */
	heading: string;
	/**
	 * Allows setting a different HTML h-tag.
	 */
	headingTag?: (typeof headingTags)[number];

	/**
	 * Error content
	 */
	children: Snippet;
}

export interface ErrorSummaryItemProps extends HTMLAnchorAttributes {
	/**
	 * Link to the element that has the error
	 */
	href: string;
	/**
	 * The error message
	 */
	children: Snippet;
}
