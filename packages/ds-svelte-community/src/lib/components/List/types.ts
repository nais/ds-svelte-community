import type { Component, Snippet } from "svelte";

export interface ListProps {
	children: Snippet;
	/**
	 * HTML list element to render.
	 */
	as?: "ul" | "ol";
	/**
	 * List heading title.
	 */
	title?: string | Snippet;
	/**
	 * List heading description.
	 */
	description?: string | Snippet;
	/**
	 * Allows setting a different HTML h-tag.
	 */
	headingTag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
	/**
	 * Changes margin-block on list and font size on items.
	 */
	size?: "small" | "medium" | "large";

	[key: string]: unknown;
}

export interface ListItemProps {
	/**
	 * List item content.
	 */
	children: Snippet;
	/**
	 * List item title.
	 */
	title?: string | Snippet;
	/**
	 * Icon to be used instead of bullet (unordered lists only).
	 */
	icon?: Snippet | Component;

	[key: string]: unknown;
}
