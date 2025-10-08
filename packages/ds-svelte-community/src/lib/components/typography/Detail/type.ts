import type { Snippet } from "svelte";
import type { PolymorphicPropsWithDefault } from "../polymorphic";
import type { TypoProps } from "../typo_shared";

export interface DetailSpecificProps extends TypoProps {
	/**
	 * All caps
	 */
	uppercase?: boolean;

	children: Snippet;
}

export type DetailProps = PolymorphicPropsWithDefault<"p", DetailSpecificProps>;
