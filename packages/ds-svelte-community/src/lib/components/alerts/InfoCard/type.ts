import type { Snippet } from "svelte";
import type { AkselColor } from "../../Theme/Theme.svelte";
import type {
	BaseAlertContentProps,
	BaseAlertHeaderProps,
	BaseAlertProps,
	BaseAlertTitleProps,
} from "../BaseAlert/type";

export const infoCardSizes = ["medium", "small"] as const;
export type InfoCardSize = (typeof infoCardSizes)[number];

// InfoCard uses BaseAlert with type="moderate", global=false, no status
// It has a data-color prop instead of status
export interface InfoCardProps extends Omit<BaseAlertProps, "global" | "type" | "status"> {
	/**
	 * Changes the HTML element used for the root element.
	 *
	 * **When using `section`, provide either `aria-label` or `aria-labelledby` for better accessibility.**
	 * `axe-core` might warn about unique landmarks if you have multiple InfoCards on page with the same label.
	 * In those cases consider updating to unique `aria-label` or `aria-labelledby` props.
	 * @default "div"
	 */
	as?: "div" | "section";

	/**
	 * Sets the color theme of the InfoCard.
	 * @default "info"
	 */
	"data-color"?: AkselColor;

	/**
	 * InfoCard content.
	 */
	children: Snippet;
}

// InfoCardHeader includes the icon prop (unlike GlobalAlert/LocalAlert which auto-determine from status)
export type InfoCardHeaderProps = BaseAlertHeaderProps;

export type InfoCardTitleProps = BaseAlertTitleProps;

export type InfoCardContentProps = BaseAlertContentProps;
