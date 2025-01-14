import type { HTMLElements } from "$lib/components/utils/elements";
import type { BackgroundColorToken } from "$lib/components/utils/types";
import type { Snippet } from "svelte";
import type { HTMLAttributes } from "svelte/elements";
export const widths = ["text", "md", "lg", "xl", "2xl"] as const;

export interface PageProps extends HTMLAttributes<HTMLElement> {
	/**
	 * Overrides html-tag
	 */
	as?: "div" | "body";
	/**
	 * Background color. Accepts a color token.
	 */
	background?: BackgroundColorToken;
	/**
	 * Places footer below page-fold
	 */
	footerPosition?: "belowFold";
	/**
	 * Adds a standardised padding of 4rem between content and footer
	 */
	contentBlockPadding?: "end" | "none";

	/**
	 * Content
	 */
	children: Snippet;

	/**
	 * Footer content
	 */
	footer?: Snippet;
}

export interface PageBlockProps extends HTMLAttributes<HTMLElement> {
	/**
	 * Predefined max-width
	 * @example
	 * text: 576px + dynamic gutters
	 * md:   768px
	 * lg:   1024px
	 * xl:   1280px
	 * 2xl:  1440px
	 */
	width?: (typeof widths)[number];
	/**
	 * Adds a standardised responsive padding-inline
	 * @example
	 * 3rem on > md
	 * 1rem on < md
	 */
	gutters?: boolean;

	as?: HTMLElements;

	/**
	 * Content
	 */
	children: Snippet;
}
