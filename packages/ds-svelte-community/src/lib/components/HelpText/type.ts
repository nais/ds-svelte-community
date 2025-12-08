import type { Snippet } from "svelte";
import type { ClassValue, HTMLButtonAttributes } from "svelte/elements";
import type { PopoverProps } from "../Popover/type";

export interface HelpTextProps
	extends Pick<PopoverProps, "strategy" | "placement">, HTMLButtonAttributes {
	/**
	 * Adds a title-tooltip with the given text
	 */
	title: string;
	/**
	 * Adds a class to the wrapper element
	 */
	wrapperClass?: ClassValue;

	/**
	 * Help content
	 */
	children: Snippet;
}
