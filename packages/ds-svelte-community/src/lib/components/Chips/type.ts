import type { Snippet } from "svelte";
import type { HTMLAnchorAttributes, HTMLAttributes, HTMLButtonAttributes } from "svelte/elements";

export const sizes = ["medium", "small"] as const;
export const variants = ["action", "neutral"] as const;

export interface ChipsProps extends HTMLAttributes<HTMLUListElement> {
	size?: (typeof sizes)[number];

	/**
	 * List of chips. Wrap `RemovableChip` and `ToggleChip` with `<li>`
	 */
	children: Snippet;
}

interface BaseToggleProps {
	/**
	 * Toggles aria-pressed and visual-changes
	 */
	selected?: boolean;

	/**
	 * The content of the chip
	 */
	value: string;

	/**
	 * Chip-variants
	 */
	variant?: (typeof variants)[number];

	/**
	 * Toggles display of checkmark on selected
	 */
	checkmark?: boolean;

	/**
	 * Custom content, will use `value` if not provided
	 */
	children?: Snippet;
}

interface ButtonToggleProps extends BaseToggleProps, Omit<HTMLButtonAttributes, "value"> {
	as?: "button";
}

interface AnchorToggleProps extends BaseToggleProps, HTMLAnchorAttributes {
	as: "a";
}

export type ToggleChipProps = ButtonToggleProps | AnchorToggleProps;

export interface RemovableChipProps extends HTMLButtonAttributes {
	/**
	 * Chip-variants
	 */
	variant?: (typeof variants)[number];

	/**
	 * Replaces label read for screen-readers
	 */
	removeLabel?: string;

	/**
	 * The content of the chip
	 */
	value: string;

	/**
	 * Custom content, will use `value` if not provided
	 */
	children?: Snippet;

	/**
	 * Called when the user clicks the remove button
	 */
	ondelete?: () => void;
}
