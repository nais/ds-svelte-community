import type { Snippet } from "svelte";
import type { HTMLAttributes } from "svelte/elements";
import type { AkselColor } from "../Theme/Theme.svelte";

export const sizes = ["large", "medium", "small"] as const;
export type AccordionSize = (typeof sizes)[number];

export interface AccordionProps extends HTMLAttributes<HTMLDivElement> {
	/**
	 * The size of the accordion.
	 * @default "medium"
	 */
	size?: AccordionSize;

	/**
	 * Whether to indent content or not.
	 * @default true
	 */
	indent?: boolean;

	/**
	 * Overrides inherited color.
	 *
	 * We recommend only using `accent` and `neutral`.
	 */
	"data-color"?: Extract<AkselColor, "accent" | "neutral">;

	/**
	 * Changes the HTML element used for the root element.
	 * @default "div"
	 */
	as?: "div" | "section";

	/**
	 * List of AccordionItem components.
	 */
	children: Snippet;
}

export interface AccordionItemProps extends HTMLAttributes<HTMLDivElement> {
	/**
	 * Controlled open-state.
	 *
	 * Using this removes automatic control of open-state.
	 */
	open?: boolean;

	/**
	 * The open state when initially rendered. Use when you do not need to control the open state.
	 * @default false
	 */
	defaultOpen?: boolean;

	/**
	 * Callback for current open-state.
	 */
	onOpenChange?: (open: boolean) => void;

	/**
	 * Temporary compatibility for the previous Svelte API.
	 * Prefer using `<AccordionHeader>` instead.
	 */
	heading?: string | Snippet;

	/**
	 * Content in Accordion.Item.
	 *
	 * Prefer including one Accordion.Header and one Accordion.Content.
	 */
	children: Snippet;
}

export interface AccordionContext {
	readonly size: AccordionSize;
	readonly color?: AccordionProps["data-color"];
	readonly mounted: boolean;
}
