<script lang="ts">
	import type { Snippet } from "svelte";
	import Button from "../Button/Button.svelte";
	import { omit } from "../helpers";

	let {
		selected = false,
		size = "medium",
		disabled = false,
		children,
		icon,
		iconPosition,
		...restProps
	}: {
		/**
		 * Sets selected styling if true
		 * @default false
		 */
		selected?: boolean;
		/**
		 * Changes padding, height and font-size
		 * @default medium
		 */
		size?: "medium" | "small" | "xsmall";
		/**
		 * Prevent the user from interacting with the button: it cannot be pressed or focused.
		 * @note Avoid using if possible for accessibility purposes
		 */
		disabled?: boolean;
		/**
		 * Content
		 */
		children?: Snippet;
		/**
		 * Left icon
		 */
		icon?: Snippet;

		/**
		 * Icon position
		 */
		iconPosition?: "left" | "right";

		[key: string]: unknown;
	} = $props();
</script>

<Button
	{...omit(restProps, "class")}
	variant="tertiary-neutral"
	aria-current={selected}
	data-pressed={selected}
	{disabled}
	{size}
	{icon}
	{iconPosition}
	{children}
	class={[
		restProps.class,
		"aksel-pagination__item",
		{
			"aksel-pagination__item--selected": selected,
		},
	]}
	type="button"
/>
