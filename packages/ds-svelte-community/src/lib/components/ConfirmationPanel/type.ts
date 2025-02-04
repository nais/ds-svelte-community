import type { Snippet } from "svelte";
import type { HTMLAttributes } from "svelte/elements";

export const sizes = ["medium", "small"] as const;

export interface ConfirmationPanelProps extends HTMLAttributes<HTMLDivElement> {
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
	 * The value of the HTML element.
	 */
	value?: string;

	/**
	 * Override internal id.
	 */
	id?: string;

	/**
	 * Wether the checkbox is checked, can be used with `bind:checked`.
	 */
	checked?: boolean;

	/**
	 * Description
	 */
	children?: Snippet;

	/**
	 * Label text
	 */
	label: string | Snippet;
}
