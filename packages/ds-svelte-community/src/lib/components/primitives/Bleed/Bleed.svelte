<!--
@component
Simple primitive to add negative margin that lets content slide out of the parent's container.

Read more about this component in the [Aksel documentation](https://aksel.nav.no/komponenter/primitives/bleed).
-->

<script lang="ts">
	import { classes, omit } from "$lib/components/helpers";
	import { GetTheme } from "$lib/components/Theme/Theme.svelte";
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

	const theme = GetTheme();
	const prefix = theme ? "ax" : "a";
</script>

<svelte:element
	this={as}
	{...omit(restProps, "class")}
	class={classes([
		restProps.class,
		"navds-bleed",
		{
			"navds-bleed--padding": reflectivePadding,
		},
	])}
	style={combineStyles(
		restProps,
		getResponsiveProps(prefix, "bleed", "margin-inline", "spacing", marginInline, true, [
			"0",
			"full",
			"px",
		]),
		getResponsiveProps(prefix, "bleed", "margin-block", "spacing", marginBlock, true, ["0", "px"]),
		reflectivePadding
			? getResponsiveProps(prefix, "bleed", "padding-inline", "spacing", marginInline, false, [
					"0",
					"full",
					"px",
				])
			: {},
		reflectivePadding
			? getResponsiveProps(prefix, "bleed", "padding-block", "spacing", marginBlock, false, [
					"0",
					"px",
				])
			: {},
	)}>{@render children()}</svelte:element
>
