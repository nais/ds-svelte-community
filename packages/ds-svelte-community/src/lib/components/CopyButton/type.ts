import type { Snippet } from "svelte";
import type { HTMLButtonAttributes } from "svelte/elements";

export const sizes = ["xsmall", "small", "medium"] as const;
export const variants = ["action", "neutral"] as const;

export interface CopyButtonProps extends HTMLButtonAttributes {
	size?: (typeof sizes)[number];
	variant?: (typeof variants)[number];

	/**
	 * Text to copy to clipboard.
	 */
	copyText: string;

	/**
	 *  Optional text in button.
	 */
	text?: string;

	/**
	 * Text shown when button is clicked.
	 * Only set if used with 'text'-prop.
	 */
	activeText?: string;

	/**
	 * Timeout duration in milliseconds.
	 */
	activeDuration?: number;

	/**
	 * Accessible label for icon (ignored if text is set).
	 */
	title?: string;

	/**
	 * Accessible label for icon in active-state (ignored if text is set).
	 */
	activeTitle?: string;

	/**
	 *  Called whenever the active-state changes
	 */
	activechanged?: (active: boolean) => void;

	/**
	 * Use custom icons. The snippet receives the active-state as argument.
	 * Should only return a single icon.
	 */
	icon?: Snippet<[boolean]>;
}
