import { getContext, type Snippet } from "svelte";
import type { HTMLAttributes, HTMLButtonAttributes } from "svelte/elements";
import type { AkselColor } from "../Theme/Theme.svelte";

export interface ToggleGroupContext {
	readonly value: string;
	readonly size: "medium" | "small";
	setValue(value: string): void;
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
	 * @deprecated Use `data-color` prop instead.
	 * Changes design and interaction-visuals.
	 */
	variant?: (typeof variants)[number];
	/**
	 * Overrides inherited color.
	 *
	 * We recommend only using `accent` and `neutral`.
	 */
	"data-color"?: AkselColor;
	/**
	 * Stretch each button to fill available space in container.
	 * @default false
	 */
	fill?: boolean;
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
