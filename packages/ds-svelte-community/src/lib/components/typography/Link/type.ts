import type { HTMLElements } from "$lib/components/utils/elements";
import type { Snippet } from "svelte";
import type { HTMLAnchorAttributes } from "svelte/elements";

export const variants = ["action", "neutral", "subtle"] as const;

export interface LinkProps extends HTMLAnchorAttributes {
	href: string;

	/**
	 * Variant of the component to use.
	 */
	variant?: (typeof variants)[number];
	/**
	 * Inverts when the underline appears. If this is false,
	 * the underline does not appear by default, but does appear when the link is hovered.
	 * This makes it more suitable for use when inlined in text.
	 */
	underline?: boolean;

	/**
	 * Renders link with `display: inline` for better wrapping in text.
	 */
	inlineText?: boolean;

	as?: HTMLElements;

	children: Snippet;
}
