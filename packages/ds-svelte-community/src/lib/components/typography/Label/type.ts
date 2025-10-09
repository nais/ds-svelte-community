import type { Snippet } from "svelte";
import type { PolymorphicPropsWithDefault } from "../polymorphic";

export interface LabelSpecificProps {
	/**
	 * medium: 18px, small: 16px
	 */
	size?: "medium" | "small";
	/**
	 * Adds margin-bottom
	 */
	spacing?: boolean;

	/**
	 * Content
	 */
	children: Snippet;
}

export type LabelProps = PolymorphicPropsWithDefault<"label", LabelSpecificProps>;
