import type {
	BorderRadiusScale,
	ResponsiveProp,
	SpaceDelimitedAttribute,
} from "$lib/components/utils/types";
import type {
	AkselColoredBorderToken,
	AkselColoredStatelessBackgroundToken,
	AkselRootBackgroundToken,
	AkselRootBorderToken,
	AkselShadowToken,
} from "@navikt/ds-tokens/types";
import type { BasePrimitiveProps } from "../base/type";

export interface BoxSpecificProps {
	/**
	 * CSS `background-color` property.
	 * Accepts a [background color token](https://aksel.nav.no/grunnleggende/darkside/design-tokens#backgroundColor).
	 * @see {@link StaticDefaultBgKeys} and {@link StaticBgKeys}
	 */
	background?: AkselRootBackgroundToken | AkselColoredStatelessBackgroundToken;

	/**
	 * CSS `border-color` property.
	 * Accepts a [border color token](https://aksel.nav.no/grunnleggende/darkside/design-tokens#borderColor).
	 * @see {@link BorderColorKeys} and {@link BorderColorWithRoleKeys}
	 */
	borderColor?: Exclude<AkselRootBorderToken, "focus"> | AkselColoredBorderToken;

	/**
	 * CSS `border-radius` property.
	 * Accepts a [radius token](https://aksel.nav.no/grunnleggende/darkside/design-tokens#radius)
	 * or an object of radius tokens for different breakpoints.
	 * @example
	 * borderRadius='full'
	 * borderRadius='0 full 12 2'
	 * borderRadius={{xs: '2 12', sm: '0', md: '12', lg: 'full'}}
	 * @see {@link BorderRadiusKeys}
	 */
	borderRadius?: ResponsiveProp<SpaceDelimitedAttribute<BorderRadiusScale | "0">>;

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
	 * @see {@link AkselShadowToken}
	 */
	shadow?: AkselShadowToken;
}

export type BoxProps = BasePrimitiveProps & BoxSpecificProps;
