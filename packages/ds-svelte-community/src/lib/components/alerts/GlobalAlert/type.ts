import type {
	BaseAlertCloseButtonProps,
	BaseAlertContentProps,
	BaseAlertHeaderProps,
	BaseAlertProps,
	BaseAlertSize,
	BaseAlertStatus,
	BaseAlertTitleProps,
} from "../BaseAlert/type";

// Re-export base types with GlobalAlert naming
export type GlobalAlertStatus = BaseAlertStatus;
export type GlobalAlertSize = BaseAlertSize;

// Re-export the constants for backwards compatibility
export {
	baseAlertSizes as globalAlertSizes,
	baseAlertStatuses as globalAlertStatuses,
} from "../BaseAlert/type";

// GlobalAlert uses BaseAlert with global=true and type="strong", so omit those props
// Status is required for GlobalAlert (unlike BaseAlert where it's optional for InfoCard)
export type GlobalAlertProps = Omit<BaseAlertProps, "global" | "type" | "status" | "data-color"> & {
	/**
	 * Alert status. Changes the icon and colors.
	 */
	status: BaseAlertStatus;

	/**
	 * Centers the alert content.
	 * @default true
	 */
	centered?: boolean;
};

// Subcomponent props are the same as BaseAlert, but Header omits "icon" (auto-determined by status)
export type GlobalAlertHeaderProps = Omit<BaseAlertHeaderProps, "icon">;

export type GlobalAlertTitleProps = BaseAlertTitleProps;

export type GlobalAlertContentProps = BaseAlertContentProps;

export type GlobalAlertCloseButtonProps = BaseAlertCloseButtonProps;

// Re-export context type
export type { BaseAlertContext as GlobalAlertContext } from "../BaseAlert/type";
