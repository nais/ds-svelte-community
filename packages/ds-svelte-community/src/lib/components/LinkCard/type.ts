import type { Snippet } from "svelte";
import type { HTMLAttributes } from "svelte/elements";
import type { HTMLElements } from "../utils/elements";

export interface LinkCardProps extends HTMLAttributes<HTMLDivElement> {
	arrow?: boolean;
	/**
	 * Adjusts arrow position.
	 */
	arrowPosition?: "baseline" | "center";
	/**
	 * Changes padding and typo sizes.
	 */
	size?: "small" | "medium";

	as?: HTMLElements;

	children: Snippet;
}
