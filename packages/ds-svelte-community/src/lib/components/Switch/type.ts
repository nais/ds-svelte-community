import type { Snippet } from "svelte";
import type { HTMLInputAttributes } from "svelte/elements";

export interface SwitchProps extends Omit<HTMLInputAttributes, "size"> {
	/**
	 * If enabled shows the label and description for screen readers only.
	 */
	hideLabel?: boolean;
	/**
	 * Toggles loading state with loader-component on switch.
	 */
	loading?: boolean;
	/**
	 * Positions switch on left/right side of label.
	 * @default "left"
	 */
	position?: "left" | "right";
	/**
	 * Adds a description to extend labeling of Switch.
	 */
	description?: string;
	/**
	 * Changes font-size, padding and gaps.
	 */
	size?: "medium" | "small";
	/**
	 * Disables element.
	 * @note Avoid using if possible for accessibility purposes.
	 */
	disabled?: boolean;
	/**
	 * Checked state.
	 */
	checked?: boolean;

	/**
	 * Label for switch.
	 */
	children: Snippet;
}
