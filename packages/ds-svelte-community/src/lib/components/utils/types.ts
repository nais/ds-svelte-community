import type {
	AkselBorderRadiusToken,
	AkselBreakpointToken,
	AkselSpaceToken,
} from "@navikt/ds-tokens/types";

export type BreakpointsAlias = Extract<
	AkselBreakpointToken,
	"xs" | "sm" | "md" | "lg" | "xl" | "2xl"
>;

/**
 * Numeric spacing tokens from the legacy spacing scale.
 * These are still accepted at runtime and produce `var(--ax-{value})` CSS variable references.
 * Kept for backwards compatibility with existing usage.
 */
type NumericSpacingToken =
	| "0"
	| "05"
	| "1"
	| "1-alt"
	| "2"
	| "3"
	| "4"
	| "5"
	| "6"
	| "7"
	| "8"
	| "9"
	| "10"
	| "11"
	| "12"
	| "14"
	| "16"
	| "18"
	| "20"
	| "24"
	| "32";

export type SpacingScale = AkselSpaceToken | NumericSpacingToken;
export type BorderRadiusScale = AkselBorderRadiusToken;

export type SpaceDelimitedAttribute<T extends string> =
	| T
	| `${T} ${T}`
	| `${T} ${T} ${T}`
	| `${T} ${T} ${T} ${T}`;
type FixedResponsiveT<T> = {
	[Breakpoint in BreakpointsAlias]?: T;
};

export type ResponsiveProp<T> = T | FixedResponsiveT<T>;
