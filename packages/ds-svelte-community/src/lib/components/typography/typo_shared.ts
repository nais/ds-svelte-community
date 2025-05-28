import type { HTMLAttributes } from "svelte/elements";

export interface TypoProps extends HTMLAttributes<HTMLElement> {
	/**
	 * Truncate text overflow with ellipsis.
	 */
	truncate?: boolean;
	/**
	 * Adjusts font-weight.
	 */
	weight?: "regular" | "semibold";
	/**
	 * Adjust text-align.
	 */
	align?: "start" | "center" | "end";
	/**
	 * Visually hide text. Text will still be accessible for screen readers.
	 */
	visuallyHidden?: boolean;
	/**
	 * Adds spacing below text.
	 */
	spacing?: boolean;
	/**
	 * Adjusts color.
	 */
	textColor?: "default" | "subtle";
}

export const typoClasses = (props: TypoProps & { uppercase?: boolean }) => {
	return {
		"aksel-typo--spacing": !!props.spacing,
		"aksel-typo--truncate": !!props.truncate,
		"aksel-typo--semibold": props.weight === "semibold",
		[`aksel-typo--align-${props.align}`]: !!props.align,
		[`aksel-typo--color-${props.textColor}`]: !!props.textColor,
		"aksel-typo--visually-hidden": !!props.visuallyHidden,
		"aksel-typo--uppercase": !!props.uppercase,
	};
};

export const withoutTypoData = (props: Record<string, unknown>) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const { truncate, weight, align, visuallyHidden, spacing, textColor, uppercase, ...rest } = props;
	return rest;
};
