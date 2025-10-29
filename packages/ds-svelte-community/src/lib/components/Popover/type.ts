import type { Snippet } from "svelte";
import type { ClassValue, HTMLAttributes } from "svelte/elements";

export const PopoverPlacement = [
	"top",
	"bottom",
	"right",
	"left",
	"top-start",
	"top-end",
	"bottom-start",
	"bottom-end",
	"right-start",
	"right-end",
	"left-start",
	"left-end",
] as const;

export interface PopoverProps extends HTMLAttributes<HTMLDivElement> {
	/**
	 * Element popover anchors to
	 */
	anchorEl: Element | undefined;
	/**
	 * Open state
	 */
	open: boolean;
	/**
	 * Orientation for popover
	 * @note Try to keep general usage to "top", "bottom", "left", "right"
	 * @default "top"
	 */
	placement?: (typeof PopoverPlacement)[number];
	/**
	 * Distance from anchor to popover
	 * @default 4
	 */
	offset?: number;
	/**
	 * Changes what CSS position property to use
	 * You want to use "fixed" if reference element is inside a fixed container, but popover is not
	 * @default "absolute"
	 */
	strategy?: "absolute" | "fixed";
	/**
	 * Changes placement of the floating element in order to keep it in view.
	 * @default true
	 */
	flip?: boolean;

	/**
	 * Class to add to the popover content
	 */
	contentClass?: ClassValue;

	/**
	 * Content
	 */
	children: Snippet;
}
