<script lang="ts">
	import XMarkIcon from "$lib/icons/XMarkIcon.svelte";
	import { createEventDispatcher } from "svelte";
	import { classes, omit } from "../helpers";
	import type { RemovableProps, variants } from "./type";

	type $$Props = RemovableProps;

	/**
	 * Chip-variants
	 * @default "action"
	 */
	export let variant: (typeof variants)[number] = "action";
	/**
	 * Replaces label read for screen-readers
	 * @default "slett"
	 */
	export let removeLabel = "slett";

	/**
	 * The content of the chip
	 */
	export let value: string;

	const dispatch = createEventDispatcher<{
		delete: void;
	}>();
</script>

<button
	type="button"
	{...omit($$restProps, "class")}
	class={classes(
		$$restProps,
		"navds-chips__chip",
		"navds-chips__removable",
		`navds-chips__removable--${variant}`,
	)}
	class:navds-chips--icon-right={true}
	aria-label={`${value} ${removeLabel}`}
	on:click|preventDefault={(e) => {
		// Called when the user clicks the remove button
		dispatch("delete");
		if ($$restProps && $$restProps.onClick) {
			$$restProps.onClick(e);
		}
	}}
>
	<!-- Content of the ToggleChip. Falls back to `value` prop if no content. -->
	<span class="navds-chips__chip-text"><slot>{value}</slot></span>
	<span class="navds-chips__removable-icon">
		<XMarkIcon aria-hidden />
	</span>
</button>
