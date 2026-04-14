import { type Snippet } from "svelte";
import type { HTMLAttributes } from "svelte/elements";

export const sizes = ["small", "medium"] as const;

export interface FieldsetProps extends HTMLAttributes<HTMLFieldSetElement> {
	/**
	 * If enabled shows the legend and description for screen readers only
	 */
	hideLegend?: boolean;

	/**
	 * Error message for element
	 */
	error?: string;

	/**
	 * Override internal errorId
	 */
	errorId?: string;

	/**
	 * Changes font-size, padding and gaps
	 */
	size?: (typeof sizes)[number];
	/**
	 * Disables element
	 * @note Avoid using if possible for accessibility purposes
	 */
	disabled?: boolean;

	/**
	 * Read-only state.
	 * @note Avoid using if possible for accessibility purposes
	 */
	readonly?: boolean;

	/**
	 * Override internal id
	 */
	id?: string;

	legend: string | Snippet;

	children: Snippet;

	description?: string | Snippet;
}
