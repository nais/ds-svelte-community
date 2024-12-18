import type { Snippet } from "svelte";
import type { HTMLButtonAttributes } from "svelte/elements";
import type { PopoverProps } from "../Popover/type";

export interface HelpTextProps
	extends Pick<PopoverProps, "strategy" | "placement">,
		HTMLButtonAttributes {
	/**
	 * Adds a title-tooltip with the given text
	 */
	title: string;
	/**
	 * Adds a class to the wrapper element
	 */
	wrapperClass?: string;

	/**
	 * Help content
	 */
	children: Snippet;
}
