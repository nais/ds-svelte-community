import type { Snippet } from "svelte";
import type { PolymorphicPropsWithDefault } from "../polymorphic";

export interface ErrorMessageSpecificProps {
	/**
	 * The size of the body
	 * medium: 18px, small: 16px
	 */
	size?: "medium" | "small";
	/** Adds margin-bottom */
	spacing?: boolean;

	showIcon?: boolean;

	children: Snippet;
}

export type ErrorMessageProps = PolymorphicPropsWithDefault<"p", ErrorMessageSpecificProps>;
