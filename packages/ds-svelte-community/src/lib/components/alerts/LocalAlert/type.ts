import type {
	BaseAlertCloseButtonProps,
	BaseAlertContentProps,
	BaseAlertHeaderProps,
	BaseAlertProps,
	BaseAlertSize,
	BaseAlertStatus,
	BaseAlertTitleProps,
} from "../BaseAlert/type";

// Re-export base types with LocalAlert naming
export type LocalAlertStatus = BaseAlertStatus;
export type LocalAlertSize = BaseAlertSize;

// Re-export the constants for backwards compatibility
export {
	baseAlertSizes as localAlertSizes,
	baseAlertStatuses as localAlertStatuses,
} from "../BaseAlert/type";

// LocalAlert uses BaseAlert with global=false and type="strong", so omit those props
// Status is required for LocalAlert (unlike BaseAlert where it's optional for InfoCard)
export type LocalAlertProps = Omit<BaseAlertProps, "global" | "type" | "status" | "data-color"> & {
	/**
	 * Alert status. Changes the icon and colors.
	 */
	status: BaseAlertStatus;
};

// Subcomponent props are the same as BaseAlert, but Header omits "icon" (auto-determined by status)
export type LocalAlertHeaderProps = Omit<BaseAlertHeaderProps, "icon">;

export type LocalAlertTitleProps = BaseAlertTitleProps;

export type LocalAlertContentProps = BaseAlertContentProps;

export type LocalAlertCloseButtonProps = BaseAlertCloseButtonProps;

// Re-export context type
export type { BaseAlertContext as LocalAlertContext } from "../BaseAlert/type";
