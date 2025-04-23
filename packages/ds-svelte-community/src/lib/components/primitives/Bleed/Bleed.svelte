<!--
@component
Simple primitive to add negative margin that lets content slide out of the parent's container.

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
			getResponsiveProps("bleed", "margin-inline", "spacing", marginInline, true, [
				"0",
				"full",
				"px",
			]),
			getResponsiveProps("bleed", "margin-block", "spacing", marginBlock, true, ["0", "px"]),
		);
		if (!reflectivePadding) {
			return style;
		}

		return combineStyles(
			{ style },
			getResponsiveProps("bleed", "padding-inline", "spacing", marginInline, false, [
				"0",
				"full",
				"px",
			]),
			getResponsiveProps("bleed", "padding-block", "spacing", marginBlock, false, ["0", "px"]),
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
