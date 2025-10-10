import type { Snippet } from "svelte";
import type { HTMLAttributes } from "svelte/elements";

export const sizes = ["large", "medium", "small"] as const;

export interface AccordionProps extends HTMLAttributes<HTMLDivElement> {
	/**
	 * The size of the accordion.
	 */
	size?: (typeof sizes)[number];

	/**
	 * Whether to indent content or not
	 */
	indent?: boolean;

	/**
	 * List of AccordionItem components.
	 */
	children: Snippet;
}

export interface AccordionItemProps extends HTMLAttributes<HTMLDivElement> {
	/**
	 * Whether the accordion item is open or not.
	 */
	open?: boolean;

	/**
	 * Heading of the accordion item.
	 */
	heading?: string | Snippet;

	/**
	 * Aria text
	 */
	showMoreText?: string;

	/**
	 * Content
	 */
	children: Snippet;
}

export type AccordionContext = {
	size: AccordionProps["size"];
};
