import type { Snippet } from "svelte";
import type { FieldsetProps } from "../Fieldset/type";
import type { HTMLInputAttributes } from "svelte/elements";

export interface RadioGroupProps<T = unknown>
	extends Omit<FieldsetProps, "onchange" | "errorPropagation" | "nativeReadOnly"> {
	/**
	 * Collection of `<Radio />`-elements
	 */
	children: Snippet;
	/**
	 * Override internal name
	 */
	name?: string;
	/**
	 * Controlled state for Radio
	 */
	value?: T;
	/**
	 * Returns current checked Radio in group
	 */
	onchange?: (value: T) => void;

	size?: "small" | "medium";
}

export interface RadioProps<T = unknown> extends Omit<HTMLInputAttributes, "size" | "value"> {
	/**
	 * Radio label.
	 */
	children: Snippet;
	/**
	 * Radio value.
	 */
	value: T;
	/**
	 * Adds a description to extend the labeling.
	 */
	description?: string;
}
