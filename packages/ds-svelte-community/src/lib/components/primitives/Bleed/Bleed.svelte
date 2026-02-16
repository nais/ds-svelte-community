<!--
@component
Simple primitive to add negative margin that lets content slide out of the parent's container.

This component does not support the `asChild` prop. This might limit the use of this component in some cases.

Read more about this component in the [Aksel documentation](https://aksel.nav.no/komponenter/primitives/bleed).
-->

<script lang="ts">
	import { omit } from "$lib/components/helpers";
	import { combineStyles, getResponsiveProps } from "$lib/components/utils/css";
	import type { BleedProps } from "./type";

	let {
		marginInline,
		marginBlock,
		reflectivePadding,
		as = "div",
		children,
		...restProps
	}: BleedProps = $props();

	let style = $derived.by(() => {
		const style = combineStyles(
			restProps,
			getResponsiveProps("bleed", "margin-inline", "space", marginInline, true),
			getResponsiveProps("bleed", "margin-block", "space", marginBlock, true),
		);
		if (!reflectivePadding) {
			return style;
		}

		return combineStyles(
			{ style },
			getResponsiveProps("bleed", "padding-inline", "space", marginInline, false),
			getResponsiveProps("bleed", "padding-block", "space", marginBlock, false),
		);
	});
</script>

<svelte:element
	this={as}
	{...omit(restProps, "class")}
	class={[
		restProps.class,
		"aksel-bleed",
		{
			"aksel-bleed--padding": reflectivePadding,
		},
	]}
	{style}>{@render children()}</svelte:element
>
