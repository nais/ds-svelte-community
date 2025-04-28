<!--
  @component

	Box is a layout component that is often used as a building block for other components. It sets padding, border, etc. with design tokens.

	Read more about this component in the [Aksel documentation](https://aksel.nav.no/komponenter/primitives/box).
-->

<script lang="ts">
	import { omit } from "$lib/components/helpers";
	import { combineStyles, getResponsiveProps } from "$lib/components/utils/css";
	import BasePrimitive from "../base/BasePrimitive.svelte";
	import type { BoxProps } from "./type";

	let { borderRadius, borderWidth, as = "div", children, ...restProps }: BoxProps = $props();
</script>

<BasePrimitive
	{as}
	{...omit(restProps, "class")}
	class={[
		restProps.class,
		"aksel-box",
		{
			"aksel-box-border-width": !!borderWidth,
			"aksel-box-border-radius": !!borderRadius,
		},
	]}
	style={combineStyles(
		restProps,
		getResponsiveProps("box", "border-radius", "border-radius", borderRadius, false, ["0"]),
		{
			[`--__axc-box-border-width`]: borderWidth
				? borderWidth
						.split(" ")
						.map((x) => `${x}px`)
						.join(" ")
				: null,
		},
	)}
	{children}
/>
