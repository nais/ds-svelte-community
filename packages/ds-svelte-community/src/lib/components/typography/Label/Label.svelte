<script lang="ts">
	import { classes } from "../../helpers";
	import type { LabelProps } from "./type";

	let {
		size = "medium",
		spacing = false,
		as = "label",
		children,
		...restProps
	}: LabelProps = $props();
</script>

<svelte:element
	this={as}
	{...restProps}
	class={classes([
		restProps.class,
		"navds-label",
		{
			"navds-label--small": size == "small",
			"navds-typo--spacing": spacing,
		},
	])}
>
	{@render children()}
</svelte:element>
