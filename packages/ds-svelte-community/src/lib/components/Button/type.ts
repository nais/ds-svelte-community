import type { Component, Snippet } from "svelte";
import type { HTMLAnchorAttributes, HTMLButtonAttributes } from "svelte/elements";

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
	size?: "medium" | "small" | "xsmall";

	/**
	 * Changes design and interaction-visuals.
	 */
	variant?:
		| "primary"
		| "primary-neutral"
		| "secondary"
		| "secondary-neutral"
		| "tertiary"
		| "tertiary-neutral"
		| "danger";

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
