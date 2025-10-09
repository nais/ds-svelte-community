import type { Snippet } from "svelte";
import type { PolymorphicPropsWithConstrainedElements } from "../polymorphic";

export interface HeadingSpecificProps {
	/** Heading level
	 * @deprecated Use `as` prop instead
	 */
	level?: "1" | "2" | "3" | "4" | "5" | "6";
	/** Heading size */
	size?: "xlarge" | "large" | "medium" | "small" | "xsmall";
	/** Adds margin-bottom */
	spacing?: boolean;

	children: Snippet;
}

export type HeadingProps = PolymorphicPropsWithConstrainedElements<
	"h1",
	"h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span",
	HeadingSpecificProps
>;
