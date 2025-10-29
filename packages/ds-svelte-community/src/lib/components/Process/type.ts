import type { Snippet } from "svelte";
import type { HTMLLiAttributes, HTMLOlAttributes } from "svelte/elements";

export interface ProcessProps extends Omit<HTMLOlAttributes, "children"> {
	/**
	 * ProcessEvent elements as children.
	 */
	children: Snippet;
	/**
	 * Hides the "active"-text when the event is active.
	 * @default false
	 */
	hideStatusText?: boolean;
	/**
	 * Component reference for binding.
	 */
	ref?: HTMLOListElement;
}

export interface ProcessEventProps extends Omit<HTMLLiAttributes, "children"> {
	/**
	 * Rich content to display under the title and timestamp if provided.
	 */
	children?: Snippet;
	/**
	 * Hide the content section of the event.
	 */
	hideContent?: boolean;
	/**
	 * Step title.
	 */
	title?: string;
	/**
	 * Timestamp or date to display for event.
	 */
	timestamp?: string;
	/**
	 * Icon or number to display inside the bullet.
	 */
	bullet?: Snippet;
	/**
	 * Current event status.
	 * @default "uncompleted"
	 */
	status?: "active" | "completed" | "uncompleted";
	/**
	 * Component reference for binding.
	 */
	ref?: HTMLLIElement;
}
