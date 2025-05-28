<script lang="ts">
	import type { HeadingProps } from "./type";

	let {
		level = "1",
		size = "medium",
		spacing = false,
		as,
		children,
		...restProps
	}: HeadingProps = $props();
</script>

<svelte:element
	this={as ? as : "h" + level}
	{...restProps}
	class={[
		restProps.class,
		"aksel-heading",
		`aksel-heading--${size}`,
		{
			"aksel-typo--spacing": spacing,
		},
	]}
>
	{@render children()}
</svelte:element>
