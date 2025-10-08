import type { Component, Snippet } from "svelte";
import type { HTMLAttributes } from "svelte/elements";

export const variants = [
	"warning",
	"warning-filled",
	"warning-moderate",
	"error",
	"error-filled",
	"error-moderate",
	"info",
	"info-filled",
	"info-moderate",
	"success",
	"success-filled",
	"success-moderate",
	"neutral",
	"neutral-filled",
	"neutral-moderate",
	"alt1",
	"alt1-filled",
	"alt1-moderate",
	"alt2",
	"alt2-filled",
	"alt2-moderate",
	"alt3",
	"alt3-filled",
	"alt3-moderate",
	"meta-purple",
	"meta-purple-filled",
	"meta-purple-moderate",
	"meta-lime",
	"meta-lime-filled",
	"meta-lime-moderate",
] as const;

export const sizes = ["medium", "small", "xsmall"] as const;

export interface TagSpecificProps {
	/**
	 * Changes visual profile of tag.
	 */
	variant?: (typeof variants)[number];
	/**
	 * Changes font size.
	 */
	size?: (typeof sizes)[number];
	/**
	 * Tag content.
	 */
	children: Snippet | string;

	/**
	 * Icon
	 */
	icon?: Snippet | Component;
}

export interface TagProps
	extends TagSpecificProps,
		Omit<HTMLAttributes<HTMLElement>, keyof TagSpecificProps> {}
