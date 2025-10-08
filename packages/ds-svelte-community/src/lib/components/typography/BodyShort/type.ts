import type { Snippet } from "svelte";
import type { PolymorphicPropsWithDefault } from "../polymorphic";
import type { TypoProps } from "../typo_shared";

export interface BodyShortSpecificProps extends TypoProps {
	/**
	 * medium: 18px, small: 16px
	 */
	size?: "large" | "medium" | "small";

	children: Snippet;
}

export type BodyShortProps = PolymorphicPropsWithDefault<"p", BodyShortSpecificProps>;
