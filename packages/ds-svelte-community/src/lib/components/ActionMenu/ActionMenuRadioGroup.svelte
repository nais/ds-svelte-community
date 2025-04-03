<script lang="ts">
	import type { Snippet } from "svelte";
	import { classes } from "../helpers";
	import { ActionMenuRadioGroupContext, setRadioGroupContext } from "./context.svelte";

	interface Props {
		/**
		 * Label for the radio group.
		 */
		label: string;
		/**
		 * The value of the radio group.
		 */
		value: unknown;
		/**
		 * Content of the radio group.
		 */
		children: Snippet;
	}

	let { label, value = $bindable(), children }: Props = $props();

	const ctx = new ActionMenuRadioGroupContext();
	ctx.currentValue = value;
	setRadioGroupContext(ctx);

	$effect(() => {
		value = ctx.currentValue;
	});
</script>

<div role="group">
	<div class={classes("navds-action-menu__label")}>
		{label}
	</div>

	{@render children()}
</div>
