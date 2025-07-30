import type { HTMLElements } from "$lib/components/utils/elements";
import type { ResponsiveProp, SpacingScale } from "$lib/components/utils/types";
import type { Snippet } from "svelte";

export interface BasePrimitiveProps {
	/**
	 * Padding around children.
	 * Accepts a [spacing token](https://aksel.nav.no/grunnleggende/darkside/design-tokens#space)
	 * or an object of spacing tokens for different breakpoints.
	 * @example
	 * padding='space-16'
	 * padding={{xs: 'space-8', sm: 'space-12', md: 'space-16', lg: 'space-20', xl: 'space-24'}}
	 */
	padding?: ResponsiveProp<SpacingScale>;
	/**
	 * Horizontal padding around children.
	 * Accepts a [spacing token](https://aksel.nav.no/grunnleggende/darkside/design-tokens#space)
	 * or an object of spacing tokens for different breakpoints.
	 * @example
	 * paddingInline='space-16'
	 * paddingInline='space-16 space-20'
	 * paddingInline={{xs: '0 space-8', sm: 'space-12', md: 'space-16 space-20', lg: 'space-20', xl: 'space-24'}}
	 */
	paddingInline?: ResponsiveProp<SpacingScale | `${SpacingScale} ${SpacingScale}`>;
	/**
	 * Vertical padding around children.
	 * Accepts a [spacing token](https://aksel.nav.no/grunnleggende/darkside/design-tokens#space)
	 * or an object of spacing tokens for different breakpoints.
	 * @example
	 * paddingBlock='space-16'
	 * paddingBlock='space-16 space-20'
	 * paddingBlock={{xs: '0 space-8', sm: 'space-12', md: 'space-16 space-20', lg: 'space-20', xl: 'space-24'}}
	 */
	paddingBlock?: ResponsiveProp<SpacingScale | `${SpacingScale} ${SpacingScale}`>;
	/**
	 * Margin around element.
	 * Accepts a [spacing token](https://aksel.nav.no/grunnleggende/darkside/design-tokens#space)
	 * or an object of spacing tokens for different breakpoints.
	 * @example
	 * margin='space-16'
	 * margin={{xs: '0', sm: 'space-12', md: 'space-16', lg: 'space-20', xl: 'space-24'}}
	 */
	margin?: ResponsiveProp<SpacingScale>;
	/**
	 * Horizontal margin around element.
	 * Accepts a [spacing token](https://aksel.nav.no/grunnleggende/darkside/design-tokens#space)
	 * or an object of spacing tokens for different breakpoints.
	 * @example
	 * marginInline='space-16'
	 * marginInline='space-16 space-20'
	 * marginInline={{xs: '0 space-8', sm: 'space-12', md: 'space-16 space-20', lg: 'space-20', xl: 'space-24'}}
	 */
	marginInline?: ResponsiveProp<
		| SpacingScale
		| `${SpacingScale} ${SpacingScale}`
		| "auto"
		| `auto ${SpacingScale}`
		| `${SpacingScale} auto`
	>;
	/**
	 * Vertical margin around element.
	 * Accepts a [spacing token](https://aksel.nav.no/grunnleggende/darkside/design-tokens#space)
	 * or an object of spacing tokens for different breakpoints.
	 * @example
	 * marginBlock='space-16'
	 * marginBlock='space-16 space-20'
	 * marginBlock={{xs: '0 space-8', sm: 'space-12', md: 'space-16 space-20', lg: 'space-20', xl: 'space-24'}}
	 */
	marginBlock?: ResponsiveProp<
		| SpacingScale
		| `${SpacingScale} ${SpacingScale}`
		| "auto"
		| `auto ${SpacingScale}`
		| `${SpacingScale} auto`
	>;
	/**
	 * CSS `width`
	 */
	width?: ResponsiveProp<string>;
	/**
	 * CSS `min-width`
	 */
	minWidth?: ResponsiveProp<string>;
	/**
	 * CSS `max-width`
	 */
	maxWidth?: ResponsiveProp<string>;
	/**
	 * CSS `height`
	 */
	height?: ResponsiveProp<string>;
	/**
	 * CSS `min-height`
	 */
	minHeight?: ResponsiveProp<string>;
	/**
	 * CSS `max-height`
	 */
	maxHeight?: ResponsiveProp<string>;
	/**
	 * CSS `position`
	 */
	position?: ResponsiveProp<"static" | "relative" | "absolute" | "fixed" | "sticky">;
	/**
	 * CSS `inset`.
	 * Accepts a [spacing token](https://aksel.nav.no/grunnleggende/darkside/design-tokens#space)
	 * or an object of spacing tokens for different breakpoints.
	 * @example
	 * inset='space-16'
	 * inset='space-16 space-20'
	 * inset={{xs: '0 space-8', sm: 'space-12', md: 'space-16 space-20', lg: 'space-20', xl: 'space-24'}}
	 */
	inset?: ResponsiveProp<SpacingScale | `${SpacingScale} ${SpacingScale}`>;
	/**
	 * CSS `top`
	 * Accepts a [spacing token](https://aksel.nav.no/grunnleggende/darkside/design-tokens#space)
	 * or an object of spacing tokens for different breakpoints.
	 * @example
	 * top='space-16'
	 * top={{xs: 'space-8', sm: 'space-12', md: 'space-16', lg: 'space-20', xl: 'space-24'}}
	 */
	top?: ResponsiveProp<SpacingScale>;
	/**
	 * CSS `right`
	 * Accepts a [spacing token](https://aksel.nav.no/grunnleggende/darkside/design-tokens#space)
	 * or an object of spacing tokens for different breakpoints.
	 * @example
	 * right='space-16'
	 * right={{xs: 'space-8', sm: 'space-12', md: 'space-16', lg: 'space-20', xl: 'space-24'}}
	 */
	right?: ResponsiveProp<SpacingScale>;
	/**
	 * CSS `bottom`
	 * Accepts a [spacing token](https://aksel.nav.no/grunnleggende/darkside/design-tokens#space)
	 * or an object of spacing tokens for different breakpoints.
	 * @example
	 * bottom='space-16'
	 * bottom={{xs: 'space-8', sm: 'space-12', md: 'space-16', lg: 'space-20', xl: 'space-24'}}
	 */
	bottom?: ResponsiveProp<SpacingScale>;
	/**
	 * CSS `left`
	 * Accepts a [spacing token](https://aksel.nav.no/grunnleggende/darkside/design-tokens#space)
	 * or an object of spacing tokens for different breakpoints.
	 * @example
	 * left='space-16'
	 * left={{xs: 'space-8', sm: 'space-12', md: 'space-16', lg: 'space-20', xl: 'space-24'}}
	 */
	left?: ResponsiveProp<SpacingScale>;
	/**
	 * CSS `overflow`
	 */
	overflow?: ResponsiveProp<"visible" | "hidden" | "clip" | "scroll" | "auto">;
	/**
	 * CSS `overflow-x`
	 */
	overflowX?: ResponsiveProp<"visible" | "hidden" | "clip" | "scroll" | "auto">;
	/**
	 * CSS `overflow-y`
	 */
	overflowY?: ResponsiveProp<"visible" | "hidden" | "clip" | "scroll" | "auto">;
	/**
	 * CSS `flex-basis`
	 */
	flexBasis?: ResponsiveProp<string>;
	/**
	 * CSS `flex-shrink`
	 */
	flexShrink?: ResponsiveProp<string>;
	/**
	 * CSS `flex-grow`
	 */
	flexGrow?: ResponsiveProp<string>;
	/**
	 * CSS `grid-column`
	 */
	gridColumn?: ResponsiveProp<string>;

	as?: HTMLElements;
	children?: Snippet;

	[key: string]: unknown;
}
