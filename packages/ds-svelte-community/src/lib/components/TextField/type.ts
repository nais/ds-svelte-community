import type { Snippet } from "svelte";
import type { HTMLInputAttributes } from "svelte/elements";

export const sizes = ["medium", "small"] as const;

export interface TextFieldProps extends Omit<HTMLInputAttributes, "size"> {
	/**
	 * Controlled value.
	 */
	value?: unknown;
	/**
	 * Exposes the HTML size attribute.
	 */
	htmlSize?: number;
	/**
	 * If enabled shows the label and description for screen readers only.
	 */
	hideLabel?: boolean;
	/**
	 * Error message for element.
	 */
	error?: string;
	/**
	 * Override internal errorId.
	 */
	errorId?: string;
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
	 * Override internal id.
	 */
	id?: string;
	/**
	 * Type of form control. Picking the correct type helps user fill inn their required information.
	 */
	type?: Exclude<HTMLInputAttributes["type"], "object">;

	/**
	 * Label for input element.
	 */
	label: string | Snippet;

	/**
	 * Description for input element.
	 */
	description?: string | Snippet;
}
