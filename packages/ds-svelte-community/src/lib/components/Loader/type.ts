import type { SVGAttributes } from "svelte/elements";
import type { AkselColor } from "../Theme/Theme.svelte";

export interface LoaderProps extends SVGAttributes<SVGElement> {
	/**
	 * Changes Loader width/height
	 * 64px | 40px | 32px | 24px | 20px | 16px
	 */
	size?: "3xlarge" | "2xlarge" | "xlarge" | "large" | "medium" | "small" | "xsmall";
	/**
	 * Colored variants for Loader
	 */
	variant?: "neutral" | "interaction" | "inverted";
	/**
	 * Title prop on svg
	 */
	title?: string;
	/**
	 * Sets svg-background to transparent
	 */
	transparent?: boolean;
	/**
	 * Overrides loader-color
	 */
	"data-color"?: AkselColor;
}
