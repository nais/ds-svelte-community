import type { Snippet } from "svelte";
import type { HTMLAttributes } from "svelte/elements";

export const sizes = ["small", "medium"] as const;

export interface GuidePanelProps extends HTMLAttributes<HTMLDivElement> {
	/**
	 * Render illustration above content. Will be true on mobile (< 480px) if not set.
	 */
	poster?: boolean;

	/**
	 * Custom illustration
	 */
	illustration?: Snippet;

	/**
	 * Override the default illustration's accessible label.
	 * Only used when no custom `illustration` snippet is provided.
	 * @default "Illustration"
	 */
	illustrationLabel?: string;

	/**
	 * Content
	 */
	children: Snippet;
}
