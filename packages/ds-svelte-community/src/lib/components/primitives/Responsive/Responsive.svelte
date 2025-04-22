<script lang="ts">
	import { omit } from "$lib/components/helpers";
	import type { ResponsiveProps } from "./type";

	let { as = "div", above, below, variant, children, ...restProps }: ResponsiveProps = $props();

	let aboveProp = $derived(variant === "show" ? above : below);
	let belowProp = $derived(variant === "show" ? below : above);
</script>

<svelte:element
	this={as}
	{...omit(restProps, "class")}
	class={[
		restProps.class,
		"aksel-responsive",
		{
			[`aksel-responsive__above--${aboveProp}`]: !!aboveProp,
			[`aksel-responsive__below--${belowProp}`]: !!belowProp,
		},
	]}
>
	{@render children()}
</svelte:element>
