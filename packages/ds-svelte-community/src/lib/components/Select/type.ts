import type { Snippet } from "svelte";
import type { HTMLSelectAttributes } from "svelte/elements";

/**
 * Changes font-size, padding and gaps
 */
export const sizes = ["medium", "small"] as const;

export interface SelectProps extends Omit<HTMLSelectAttributes, "size"> {
	/**
	 * Label for select.
	 */
	label?: string;
	/**
	 * If enabled shows the label and description for screen readers only.
	 */
	hideLabel?: boolean;
	/**
	 * Sets inline-style on select wrapper.
	 */
	style?: string;
	/**
	 * Changes font-size, padding and gaps.
	 */
	size?: (typeof sizes)[number];
	/**
	 * Disables element.
	 * @note Avoid using if possible for accessibility purposes.
	 */
	disabled?: boolean;
	/**
	 * Error message for element.
	 */
	error?: string;
	/**
	 * Selected value.
	 */
	value?: string;

	/**
	 * List of `<option>` elements.
	 */
	children: Snippet;

	/**
	 * Extra description.
	 */
	description?: Snippet;

	[key: string]: unknown;
}
