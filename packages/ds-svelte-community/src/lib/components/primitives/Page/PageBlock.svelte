<script lang="ts">
	import { omit } from "$lib/components/helpers";
	import type { PageBlockProps } from "./type";

	let {
		as = "div",
		width = undefined,
		gutters = false,
		children,
		...restProps
	}: PageBlockProps = $props();
</script>

<svelte:element
	this={as}
	{...omit(restProps, "class")}
	class={[
		restProps.class,
		"aksel-pageblock",
		{
			[`aksel-pageblock--${width}`]: !!width,
			"aksel-pageblock--gutters": !!gutters,
		},
	]}
>
	{@render children()}
</svelte:element>
