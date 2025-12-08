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
export type GlobalAlertProps = Omit<BaseAlertProps, "global" | "type">;

// Subcomponent props are the same as BaseAlert, but Header omits "icon" (auto-determined by status)
export type GlobalAlertHeaderProps = Omit<BaseAlertHeaderProps, "icon">;

export type GlobalAlertTitleProps = BaseAlertTitleProps;

export type GlobalAlertContentProps = BaseAlertContentProps;

export type GlobalAlertCloseButtonProps = BaseAlertCloseButtonProps;

// Re-export context type
export type { BaseAlertContext as GlobalAlertContext } from "../BaseAlert/type";
