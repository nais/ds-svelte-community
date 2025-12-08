import type { Snippet } from "svelte";
import type { HTMLAttributes, HTMLButtonAttributes } from "svelte/elements";
import type { AkselColor } from "../Theme/Theme.svelte";

export const globalAlertStatuses = ["announcement", "success", "warning", "error"] as const;
export type GlobalAlertStatus = (typeof globalAlertStatuses)[number];

export const globalAlertSizes = ["medium", "small"] as const;
export type GlobalAlertSize = (typeof globalAlertSizes)[number];

export interface GlobalAlertContext {
	size: GlobalAlertSize;
	status: GlobalAlertStatus;
	color: AkselColor;
	statusId: string;
}

export interface GlobalAlertProps extends Omit<HTMLAttributes<HTMLElement>, "children"> {
	/**
	 * Alert status. Changes the icon and colors.
	 */
	status: GlobalAlertStatus;

	/**
	 * Changes the size of the alert.
	 * @default "medium"
	 */
	size?: GlobalAlertSize;

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

export interface GlobalAlertHeaderProps extends Omit<HTMLAttributes<HTMLDivElement>, "children"> {
	/**
	 * Header content (typically GlobalAlertTitle and optionally GlobalAlertCloseButton).
	 */
	children: Snippet;
}

export interface GlobalAlertTitleProps extends Omit<
	HTMLAttributes<HTMLHeadingElement>,
	"children"
> {
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

export interface GlobalAlertContentProps extends Omit<HTMLAttributes<HTMLDivElement>, "children"> {
	/**
	 * Content of the alert.
	 */
	children: Snippet;
}

export interface GlobalAlertCloseButtonProps extends HTMLButtonAttributes {
	/**
	 * Click handler for closing the alert.
	 */
	onclick?: (event: MouseEvent) => void;
}
