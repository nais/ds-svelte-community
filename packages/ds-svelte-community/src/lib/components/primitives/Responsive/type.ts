import type { BreakpointsAlias } from "$lib/components/utils/types";
import type { Snippet } from "svelte";
import type { HTMLAttributes } from "svelte/elements";

export interface ResponsiveProps extends BaseResponsiveProps {
	variant: "show" | "hide";
}

export interface BaseResponsiveProps extends HTMLAttributes<HTMLElement> {
	/**
	 * @example
	 * above='md'
	 */
	above?: Exclude<BreakpointsAlias, "xs">;
	/**
	 * @example
	 * below='md'
	 */
	below?: Exclude<BreakpointsAlias, "xs">;

	/**
	 * HTML element to render as.
	 */
	as?: "div" | "span";

	/**
	 * Content
	 */
	children: Snippet;
}
