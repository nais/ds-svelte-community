import type { Snippet } from "svelte";
import type { HTMLTextareaAttributes } from "svelte/elements";

export const sizes = ["medium", "small"] as const;

export interface TextareaProps extends Omit<HTMLTextareaAttributes, "size"> {
	/**
	 * Controlled value.
	 */
	value?: string;
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
	 * Override internal id.
	 */
	id?: string;
	/**
	 * Label for textarea element.
	 */
	label: string | Snippet;
	/**
	 * Description for textarea element.
	 */
	description?: string | Snippet;
	/**
	 * Maximum number of character rows to display.
	 */
	maxRows?: number;
	/**
	 * Minimum number of character rows to display when empty.
	 */
	minRows?: number;
	/**
	 * Enables resizing of field.
	 */
	resize?: boolean | "vertical" | "horizontal";
	/**
	 * i18n translations for counter text.
	 */
	i18n?: {
		/** @default "characters left" */
		counterLeft?: string;
		/** @default "characters too many" */
		counterTooMuch?: string;
	};
}
