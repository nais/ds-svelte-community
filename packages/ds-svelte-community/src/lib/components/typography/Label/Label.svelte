<script lang="ts">
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
	class={[
		restProps.class,
		"aksel-label",
		{
			"aksel-label--small": size == "small",
			"aksel-typo--spacing": spacing,
		},
	]}
>
	{@render children()}
</svelte:element>
