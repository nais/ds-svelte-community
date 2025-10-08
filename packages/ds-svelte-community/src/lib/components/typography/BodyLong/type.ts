import type { Snippet } from "svelte";
import type { PolymorphicPropsWithDefault } from "../polymorphic";
import type { TypoProps } from "../typo_shared";

export interface BodyLongSpecificProps extends TypoProps {
	/**
	 * The size of the body
	 * medium: 18px, small: 16px
	 */
	size?: "large" | "medium" | "small";

	/**
	 * Adds margin-bottom
	 */
	spacing?: boolean;

	children: Snippet;
}

export type BodyLongProps = PolymorphicPropsWithDefault<"p", BodyLongSpecificProps>;
