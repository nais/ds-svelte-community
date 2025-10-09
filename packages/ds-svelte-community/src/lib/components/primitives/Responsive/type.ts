import type { BreakpointsAlias } from "$lib/components/utils/types";
import type { Snippet } from "svelte";
import type { PolymorphicPropsWithDefault } from "../../typography/polymorphic";

export interface ResponsiveSpecificProps {
	variant: "show" | "hide";
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
	 * Content
	 */
	children: Snippet;
}

export type ResponsiveProps = PolymorphicPropsWithDefault<"div", ResponsiveSpecificProps>;

// Legacy type for backward compatibility
export type BaseResponsiveProps = Omit<ResponsiveSpecificProps, "variant">;
export type BaseResponsivePropsWithAs = PolymorphicPropsWithDefault<"div", BaseResponsiveProps>;
