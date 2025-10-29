import type { Snippet } from "svelte";
import type { HTMLAnchorAttributes, HTMLAttributes } from "svelte/elements";

export interface LinkCardProps extends HTMLAttributes<HTMLDivElement> {
	/**
	 * @default true
	 */
	arrow?: boolean;
	/**
	 * Adjusts arrow position.
	 * @default "baseline"
	 */
	arrowPosition?: "baseline" | "center";
	/**
	 * Changes padding and typo sizes.
	 * @default "medium"
	 */
	size?: "small" | "medium";

	children: Snippet;

	ref?: HTMLDivElement;
}

export interface LinkCardTitleProps extends HTMLAttributes<HTMLHeadingElement> {
	/**
	 * Heading tag. Use "span" if you want a non header defining card
	 * (eg. you have a lot of them all at once, such as in a grid)
	 * @default "span"
	 */
	as?: "span" | "h2" | "h3" | "h4" | "h5" | "h6";

	children: Snippet;

	ref?: HTMLHeadingElement;
}

export interface LinkCardAnchorProps extends HTMLAnchorAttributes {
	children: Snippet;

	ref?: HTMLAnchorElement;
}

export interface LinkCardDescriptionProps extends HTMLAttributes<HTMLDivElement> {
	children: Snippet;

	ref?: HTMLDivElement;
}

export interface LinkCardFooterProps extends HTMLAttributes<HTMLDivElement> {
	children: Snippet;

	ref?: HTMLDivElement;
}

export interface LinkCardIconProps extends HTMLAttributes<HTMLDivElement> {
	children: Snippet;

	ref?: HTMLDivElement;
}

export interface LinkCardImageProps extends HTMLAttributes<HTMLDivElement> {
	/**
	 * The aspect-ratio CSS property allows you to define the desired width-to-height ratio of an element's box.
	 * This means that even if the parent container or viewport size changes, the browser will adjust the element's dimensions to maintain the specified width-to-height ratio.
	 */
	aspectRatio?: string;

	children: Snippet;

	ref?: HTMLDivElement;
}
