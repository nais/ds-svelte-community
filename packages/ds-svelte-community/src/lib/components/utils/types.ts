import type {
	BreakPointKeys,
	LegacyBgColorKeys,
	LegacyBorderColorKeys,
	LegacyShadowKeys,
	LegacySpacingKeys,
	LegacySurfaceColorKeys,
	SpaceKeys,
} from "@navikt/ds-tokens/types";

export type BackgroundColorToken = LegacyBgColorKeys;
export type SurfaceColorToken = LegacySurfaceColorKeys;
export type BorderColorToken = LegacyBorderColorKeys;
export type ShadowToken = LegacyShadowKeys;

export type BreakpointsAlias = Extract<BreakPointKeys, "xs" | "sm" | "md" | "lg" | "xl" | "2xl">;

export type SpacingScale = LegacySpacingKeys | SpaceKeys;

export type SpaceDelimitedAttribute<T extends string> =
	| T
	| `${T} ${T}`
	| `${T} ${T} ${T}`
	| `${T} ${T} ${T} ${T}`;

type FixedResponsiveT<T> = {
	[Breakpoint in BreakpointsAlias]?: T;
};

export type ResponsiveProp<T> = T | FixedResponsiveT<T>;
