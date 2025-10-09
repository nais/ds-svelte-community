<script lang="ts">
	import type { HeadingProps } from "./type";

	let {
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		level = "1",
		size = "medium",
		spacing = false,
		as = "h1",
		children,
		...restProps
	}: HeadingProps = $props();
</script>

<svelte:element
	this={as}
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
