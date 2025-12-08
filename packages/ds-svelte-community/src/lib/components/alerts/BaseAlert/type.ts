import type { Snippet } from "svelte";
import type { HTMLAttributes, HTMLButtonAttributes } from "svelte/elements";
import type { AkselColor } from "../../Theme/Theme.svelte";

export const baseAlertStatuses = ["announcement", "success", "warning", "error"] as const;
export type BaseAlertStatus = (typeof baseAlertStatuses)[number];

export const baseAlertSizes = ["medium", "small"] as const;
export type BaseAlertSize = (typeof baseAlertSizes)[number];

export const baseAlertTypes = ["moderate", "strong"] as const;
export type BaseAlertType = (typeof baseAlertTypes)[number];

export interface BaseAlertContext {
	size: BaseAlertSize;
	status: BaseAlertStatus;
	color: AkselColor;
	statusId: string;
}

export interface BaseAlertProps extends Omit<HTMLAttributes<HTMLElement>, "children"> {
	/**
	 * Alert status. Changes the icon and colors.
	 */
	status: BaseAlertStatus;

	/**
	 * Changes the size of the alert.
	 * @default "medium"
	 */
	size?: BaseAlertSize;

	/**
	 * Intensity of the alert.
	 * @default "strong"
	 */
	type?: BaseAlertType;

	/**
	 * Centers content and removes border-radius.
	 * @default false
	 */
	global?: boolean;

	/**
	 * Changes the HTML element used for the root element.
	 *
	 * **Testing**: When using `axe-core` for accessibility testing, `section` might warn about unique landmarks if you have multiple Alerts on page with the same status.
	 * In those cases, consider using `div` as the root element, or adding unique `aria-label` or `aria-labelledby` props.
	 * @default "section"
	 */
	as?: "section" | "div";

	/**
	 * Alert content.
	 */
	children: Snippet;
}

export interface BaseAlertHeaderProps extends Omit<HTMLAttributes<HTMLDivElement>, "children"> {
	/**
	 * Header content (typically Title and optionally CloseButton).
	 */
	children: Snippet;

	/**
	 * Custom icon to display in the header. If not provided, a default icon based on status is used.
	 */
	icon?: Snippet;
}

export interface BaseAlertTitleProps extends Omit<HTMLAttributes<HTMLHeadingElement>, "children"> {
	/**
	 * Changes the HTML element used for the title.
	 * @default "h2"
	 */
	as?: "h2" | "h3" | "h4" | "h5" | "h6" | "div";

	/**
	 * Title content.
	 */
	children: Snippet;
}

export interface BaseAlertContentProps extends Omit<HTMLAttributes<HTMLDivElement>, "children"> {
	/**
	 * Content of the alert.
	 */
	children: Snippet;
}

export interface BaseAlertCloseButtonProps extends HTMLButtonAttributes {
	/**
	 * Click handler for closing the alert.
	 */
	onclick?: (event: MouseEvent) => void;
}
