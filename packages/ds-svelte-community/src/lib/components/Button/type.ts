import type { Component, Snippet } from "svelte";
import type { HTMLAnchorAttributes, HTMLButtonAttributes } from "svelte/elements";

export const variants = [
	"primary",
	"primary-neutral",
	"secondary",
	"secondary-neutral",
	"tertiary",
	"tertiary-neutral",
	"danger",
] as const;

export const sizes = ["medium", "small", "xsmall"] as const;

interface BaseProps {
	/**
	 * Replaces button content with a Loader component, keeps width.
	 */
	loading?: boolean;

	/**
	 * **Avoid using if possible for accessibility purposes.**
	 *
	 * Prevent the user from interacting with the button: it cannot be pressed or focused.
	 */
	disabled?: boolean | null;

	/**
	 * Changes padding, height, and font-size.
	 */
	size?: (typeof sizes)[number];

	/**
	 * Changes design and interaction-visuals.
	 */
	variant?: (typeof variants)[number];

	/**
	 * Content of the button
	 */
	children?: Snippet;

	/**
	 * Button icon
	 */
	icon?: Snippet | Component;

	/**
	 * Button icon position
	 */
	iconPosition?: "left" | "right";

	/**
	 * Ref is the button element. Bind to this to obtain the button element.
	 */
	ref?: Element;
}

interface ButtonButtonProps extends BaseProps, HTMLButtonAttributes {
	as?: "button";
}
interface ButtonAnchorProps extends BaseProps, HTMLAnchorAttributes {
	/**
	 * Element to render
	 */
	as: "a";
	/**
	 * URL to navigate to. Required when `as` is set to `"a"`.
	 */
	href: string;
}

export type ButtonProps = ButtonButtonProps | ButtonAnchorProps;
