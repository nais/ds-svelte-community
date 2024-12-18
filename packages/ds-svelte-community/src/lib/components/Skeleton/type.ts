import type { Snippet } from "svelte";
import type { HTMLAttributes } from "svelte/elements";

export const variants = ["circle", "rectangle", "rounded", "text"] as const;

export interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
	/**
	 * Changes the shape of the skeleton.
	 */
	variant: "circle" | "rectangle" | "rounded" | "text";

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
