import type { Component, Snippet } from "svelte";
import type { HTMLDialogAttributes } from "svelte/elements";

export const sizes = ["small", "medium"] as const;

export interface ModalHeaderProps {
	/**
	 * Optional label shown above the heading.
	 */
	label?: string;
	/**
	 * Icon component displayed before the heading.
	 */
	icon?: Component;
	/**
	 * Main heading text.
	 */
	heading: string;
	/**
	 * Heading size.
	 * @default "medium"
	 */
	size?: "medium" | "small";
	/**
	 * Removes close-button (X) when false.
	 * @default true
	 */
	closeButton?: boolean;
}

export interface ModalProps extends HTMLDialogAttributes {
	/**
	 * Set open to `true` to open the dialog. Set to `false` to close it.
	 * Recommended to use with `bind:open`.
	 */
	open: boolean;

	/**
	 * Set to `true` to make the dialog modal.
	 */
	isModal?: boolean;
	/**
	 * Removes close-button(X) when false.
	 * Only used when `header` is a string or snippet.
	 */
	closeButton?: boolean;
	/**
	 * Set width of dialog. By default will fit content up to 700px.
	 */
	width?: (typeof sizes)[number] | number | `${number}${string}`;
	/**
	 * Text for close-icon.
	 * @default "Close"
	 */
	closeIconText?: string;

	/**
	 * Header content. Can be:
	 * - A string (rendered as a Heading)
	 * - A Snippet (rendered directly)
	 * - An object with `heading`, optional `label`, `icon`, `size`, and `closeButton`
	 */
	header?: ModalHeaderProps | Snippet | string;

	/**
	 * Body content.
	 */
	children: Snippet;

	/**
	 * Footer content.
	 */
	footer?: Snippet;

	/**
	 * Whether to close when clicking on the backdrop.
	 * @default true
	 */
	closeOnBackdropClick?: boolean;

	/**
	 * Where to place the modal in the viewport.
	 * @default "center"
	 */
	placement?: "top" | "center";

	/**
	 * Called when the user tries to close the modal.
	 * Return `false` to prevent closing.
	 */
	onBeforeClose?: () => boolean;
}
