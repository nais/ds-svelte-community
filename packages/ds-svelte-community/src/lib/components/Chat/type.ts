import type { Snippet } from "svelte";
import type { HTMLAttributes } from "svelte/elements";

export const chatVariants = ["subtle", "info", "neutral"] as const;
export const chatPositions = ["left", "right"] as const;
export const chatSizes = ["medium", "small"] as const;

export type ChatVariant = (typeof chatVariants)[number];
export type ChatPosition = (typeof chatPositions)[number];
export type ChatSize = (typeof chatSizes)[number];

export interface ChatProps extends HTMLAttributes<HTMLDivElement> {
	/**
	 * Children of type `<ChatBubble />`.
	 */
	children: Snippet;
	/**
	 * Name/sender on first bubble.
	 */
	name?: string;
	/**
	 * Timestamp on first bubble.
	 */
	timestamp?: string;
	/**
	 * We recommend using an SVG or plain text initials as avatar.
	 *
	 * **Hidden for screen readers.**
	 */
	avatar?: Snippet | string;
	/**
	 * Changes background color on avatar and bubbles.
	 * Avoid using the same background as the surface behind Chat.
	 * @default "neutral"
	 */
	variant?: ChatVariant;
	/**
	 * Positions avatar and bubbles.
	 * @default "left"
	 */
	position?: ChatPosition;
	/**
	 * Horizontal position of toptext.
	 * @default Same as position
	 */
	toptextPosition?: ChatPosition;
	/**
	 * Affects padding and font size in bubbles.
	 * @default "medium"
	 */
	size?: ChatSize;
	/**
	 * The heading level for the toptext.
	 * @default "3"
	 */
	toptextHeadingLevel?: "2" | "3" | "4" | "5" | "6";

	/**
	 * Overriding Chat color is not supported.
	 */
	"data-color"?: never;
}

export interface ChatBubbleProps extends HTMLAttributes<HTMLDivElement> {
	/**
	 * Bubble text.
	 */
	children: Snippet;
	/**
	 * Name/sender on bubble.
	 */
	name?: string;
	/**
	 * Timestamp for sent message.
	 */
	timestamp?: string;
	/**
	 * Overrides horizontal position of toptext.
	 */
	toptextPosition?: ChatPosition;
	/**
	 * The heading level for the toptext.
	 * @default "3"
	 */
	toptextHeadingLevel?: "2" | "3" | "4" | "5" | "6";
}

export interface ChatContext {
	/**
	 * The size of the chat bubbles.
	 */
	readonly size: ChatSize;
	/**
	 * The heading level for the toptext.
	 */
	readonly toptextHeadingLevel: "2" | "3" | "4" | "5" | "6";
	/**
	 * Get name for a bubble (only first bubble gets the name from Chat).
	 */
	getName(): string | undefined;
	/**
	 * Get timestamp for a bubble (only first bubble gets the timestamp from Chat).
	 */
	getTimestamp(): string | undefined;
}
