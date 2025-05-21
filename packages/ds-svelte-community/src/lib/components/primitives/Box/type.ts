import type { HTMLElements } from "$lib/components/utils/elements";
import type {
	ResponsiveProp,
	SpaceDelimitedAttribute,
	SpacingScale,
} from "$lib/components/utils/types";
import type {
	BorderColorKeys,
	BorderColorWithRoleKeys,
	ShadowKeys,
	StaticBgKeys,
	StaticDefaultBgKeys,
} from "@navikt/ds-tokens/types";
import { type BorderRadiusKeys } from "@navikt/ds-tokens/types";
import type { Snippet } from "svelte";
import type { HTMLAttributes } from "svelte/elements";
import type { BasePrimitiveProps } from "../base/type";

export interface BaseBoxProps extends HTMLAttributes<HTMLDivElement>, BasePrimitiveProps {
	/**
	 * CSS `background-color` property.
	 * Accepts a [background/surface color token](https://aksel.nav.no/grunnleggende/styling/design-tokens#afff774dad80).
	 * @see {@link StaticDefaultBgKeys} and {@link StaticBgKeys}
	 */
	background?: StaticDefaultBgKeys | StaticBgKeys;

	/**
	 * CSS `border-color` property.
	 * Accepts a [border color token](https://aksel.nav.no/grunnleggende/styling/design-tokens#adb1767e2f87).
	 * @see {@link BorderColorKeys} and {@link BorderColorWithRoleKeys}
	 */
	borderColor?: Exclude<BorderColorKeys, "focus"> | BorderColorWithRoleKeys;

	/**
	 * CSS `border-radius` property.
	 * Accepts a [radius token](https://aksel.nav.no/grunnleggende/styling/design-tokens#6d79c5605d31)
	 * or an object of radius tokens for different breakpoints.
	 * @example
	 * borderRadius='full'
	 * borderRadius='0 full 12 2'
	 * borderRadius={{xs: '2 12', sm: '0', md: '12', lg: 'full'}}
	 * @see {@link BorderRadiusKeys}
	 */
	borderRadius?: ResponsiveProp<SpaceDelimitedAttribute<BorderRadiusKeys | "0">>;

	/**
	 * CSS `border-width` property. If this is not set there will be no border.
	 * @example
	 * borderWidth='2'
	 * borderWidth='1 2 3 4'
	 */
	borderWidth?: SpaceDelimitedAttribute<"0" | "1" | "2" | "3" | "4" | "5">;

	/** Shadow on box. Accepts a shadow token.
	 * @example
	 * shadow='small'
	 * @see {@link ShadowKeys}
	 */
	shadow?: ShadowKeys;

	/** Spacing around children. Accepts a spacing token or an object of spacing tokens for different breakpoints.
	 * @example
	 * padding='4'
	 * padding={{xs: '2', sm: '3', md: '4', lg: '5', xl: '6'}}
	 */
	padding?: ResponsiveProp<SpacingScale>;

	/** Horizontal padding around children. Accepts a spacing token or an object of spacing tokens for different breakpoints.
	 * @example
	 * paddingInline='4'
	 * paddingInline='4 5'
	 * paddingInline={{xs: '0 32', sm: '3', md: '4 5', lg: '5', xl: '6'}}
	 */
	paddingInline?: ResponsiveProp<SpacingScale | `${SpacingScale} ${SpacingScale}`>;

	/** Vertical padding around children. Accepts a spacing token or an object of spacing tokens for different breakpoints.
	 * @example
	 * paddingBlock='4'
	 * paddingBlock='4 5'
	 * paddingBlock={{xs: '2', sm: '3', md: '4', lg: '5', xl: '6'}}
	 */
	paddingBlock?: ResponsiveProp<SpacingScale | `${SpacingScale} ${SpacingScale}`>;

	/**
	 * HTML element to render as.
	 */
	as?: HTMLElements;

	/**
	 * Content
	 */
	children: Snippet;

	[key: string]: unknown;
}

export type BoxProps = BaseBoxProps;
