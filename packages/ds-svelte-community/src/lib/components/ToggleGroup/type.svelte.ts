import { getContext, type Snippet } from "svelte";
import type { HTMLAttributes, HTMLButtonAttributes } from "svelte/elements";

export class ToggleGroupContext {
	value: string = $state("");
	size: "medium" | "small" = $state("medium");
	setValue: (value: string) => void = () => {};
}

export const contextKey = Symbol("ToggleGroupContext");

export function getToggleGroupContext() {
	const ctx = getContext<ToggleGroupContext>(contextKey);
	if (!ctx) {
		throw new Error("ToggleGroupContext not found");
	}
	return ctx;
}

export const sizes = ["medium", "small"] as const;
export const variants = ["action", "neutral"] as const;

export interface ToggleGroupProps extends Omit<HTMLAttributes<HTMLDivElement>, "onchange"> {
	/**
	 * Controlled selected value.
	 */
	value: string;
	/**
	 * Changes padding and font-size.
	 */
	size?: (typeof sizes)[number];
	/**
	 * Label describing ToggleGroup.
	 */
	label?: string;
	/**
	 * Changes design and interaction-visuals.
	 */
	variant?: (typeof variants)[number];
	/**
	 * List of ToggleGroupItem.
	 */
	children: Snippet;

	/**
	 * Callback when value changes.
	 */
	onchange?: (value: string) => void;
}

export interface ToggleGroupItemProps extends HTMLButtonAttributes {
	/**
	 * Value of this tab.
	 */
	value: string;

	/**
	 * Label of this tab.
	 */
	children: Snippet;
}
