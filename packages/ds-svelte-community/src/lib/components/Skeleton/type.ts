import type { Snippet } from "svelte";
import type { HTMLAttributes } from "svelte/elements";

export const variants = ["circle", "rectangle", "rounded", "text"] as const;

export interface SkeletonProps extends HTMLAttributes<HTMLDivElement | HTMLSpanElement> {
	/**
	 * Changes the shape of the skeleton.
	 * @default "text"
	 */
	variant?: "circle" | "rectangle" | "rounded" | "text";

	/**
	 * Changes the HTML element used for the skeleton.
	 * @default "div"
	 */
	as?: "div" | "span";

	/**
	 * When not inferring height from children, you must specify height.
	 */
	height?: string;

	/**
	 * When not inferring width from children, you must specify width.
	 */
	width?: string;

	/**
	 * Fit the skeleton to the size of the children.
	 */
	children?: Snippet;

	[key: string]: unknown;
}
