import type { HTMLAttributes } from "svelte/elements";

interface ProgressBarPropsBase extends Omit<HTMLAttributes<HTMLDivElement>, "role"> {
	/**
	 * Element reference.
	 */
	ref?: HTMLDivElement;
	/**
	 * Changes height.
	 * @default "medium"
	 */
	size?: "large" | "medium" | "small";
	/**
	 * Current progress. If set, the `simulated` prop overrides `value`.
	 */
	value?: number;
	/**
	 * Maximum progress.
	 * @default 100
	 */
	valueMax?: number;
	/**
	 * Visually simulates loading.
	 * ProgressBar grows with a preset animation for set number of seconds,
	 * then shows an indeterminate animation on timeout.
	 */
	simulated?: {
		/**
		 * Duration in seconds.
		 */
		seconds: number;
		/**
		 * Callback function when progress is indeterminate.
		 */
		onTimeout: () => void;
	};
}

export type ProgressBarProps = ProgressBarPropsBase &
	(
		| {
				"aria-hidden": true;
		  }
		| {
				"aria-labelledby": string;
				"aria-label"?: never;
		  }
		| {
				"aria-label": string;
				"aria-labelledby"?: never;
		  }
	);
