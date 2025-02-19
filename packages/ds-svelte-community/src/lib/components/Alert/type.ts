import type { Snippet } from "svelte";
import type { HTMLAttributes } from "svelte/elements";

export const variants = ["error", "warning", "info", "success"] as const;
export const sizes = ["medium", "small"] as const;

export interface AlertProps extends HTMLAttributes<HTMLDivElement> {
	/**
	 * Changes colors and icon usage when changed
	 */
	variant?: (typeof variants)[number];

	/**
	 * Changes padding and font-sizes
	 */
	size?: (typeof sizes)[number];

	/**
	 * Removes border-radius
	 */
	fullWidth?: boolean;

	/**
	 * Removes background from Alert
	 */
	inline?: boolean;

	/**
	 * Title attribute on the icon
	 */
	iconTitleText?: string;

	/**
	 * Alert content
	 */
	children: Snippet;

	/**
	 * Sets max-width on the content to 43.5rem.
	 */
	contentMaxWidth?: boolean;

	/**
	 * Adds a close-button (X).
	 *
	 * **Requires onClose to be set**.
	 */
	closeButton?: boolean;

	/**
	 * Icon text for screen readers used for the close button.
	 */
	closeButtonIconText?: string;

	/**
	 * Callback for alert wanting to close.
	 *
	 * **Requires closeButton to be true**.
	 */
	onclose?: () => void;
}
