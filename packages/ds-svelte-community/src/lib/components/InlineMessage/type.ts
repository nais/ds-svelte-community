import type { Snippet } from "svelte";
import type { HTMLAttributes } from "svelte/elements";

export const inlineMessageStatuses = ["info", "success", "warning", "error"] as const;
export type InlineMessageStatus = (typeof inlineMessageStatuses)[number];

export const inlineMessageSizes = ["medium", "small"] as const;
export type InlineMessageSize = (typeof inlineMessageSizes)[number];

export interface InlineMessageProps extends Omit<HTMLAttributes<HTMLDivElement>, "children"> {
	/**
	 * InlineMessage status.
	 */
	status: InlineMessageStatus;

	/**
	 * InlineMessage size.
	 * @default "medium"
	 */
	size?: InlineMessageSize;

	/**
	 * InlineMessage content.
	 */
	children: Snippet;
}
