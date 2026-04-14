import type { Snippet } from "svelte";
import type { ClassValue } from "svelte/elements";

export const placements = ["top", "right", "bottom", "left"] as const;

export interface TooltipProps {
	/**
	 * Open state for controlled tooltip.
	 */
	open?: boolean;

	/**
	 * Tells tooltip to start in open state.
	 * Use sparingly since hover/focus on other elements will close it.
	 *
	 * `open` prop overwrites this.
	 */
	defaultOpen?: boolean;

	/**
	 * Change handler for open state.
	 */
	onOpenChange?: (open: boolean) => void;

	/**
	 * Orientation for tooltip.
	 * @default "top"
	 */
	placement?: (typeof placements)[number];

	/**
	 * Toggles rendering of arrow.
	 * @default true
	 */
	arrow?: boolean;

	/**
	 * Distance from anchor to tooltip.
	 * @default 8px with arrow, 4px without arrow
	 */
	offset?: number;

	/**
	 * Text-content inside tooltip.
	 */
	content: string;

	/**
	 * Sets max allowed character length.
	 * @default 80
	 */
	maxChar?: number;

	/**
	 * Adds a delay in milliseconds before opening tooltip.
	 * @default 150
	 */
	delay?: number;

	/**
	 * List of Keyboard-keys for shortcuts.
	 * Can be a flat array of keys (e.g. `["Ctrl", "C"]`) or
	 * an array of key groups for multiple shortcuts (e.g. `[["Ctrl", "C"], ["Cmd", "C"]]`).
	 */
	keys?: string[] | [string[], string[]];

	/**
	 * When false, Tooltip labels the element, and child-elements content will be ignored by screen-readers.
	 * When true, content is added as additional information to the child element.
	 * @default false
	 */
	describesChild?: boolean;

	/**
	 * Overrides auto-generated tooltip id.
	 */
	id?: string;

	/**
	 * Separator text between key shortcut groups (e.g. "or").
	 * @default "or"
	 */
	shortcutSeparator?: string;

	class?: ClassValue;

	/**
	 * Content to which the tooltip will activate.
	 */
	children: Snippet;
}
