<!--
  @component

	Box is a layout component that is often used as a building block for other components. It sets padding, border, etc. with design tokens.

	Read more about this component in the [Aksel documentation](https://aksel.nav.no/komponenter/primitives/box).
-->

<script lang="ts">
	import { classes, omit } from "$lib/components/helpers";
	import { GetTheme } from "$lib/components/Theme/Theme.svelte";
	import { combineStyles, getResponsiveProps } from "$lib/components/utils/css";
	import BasePrimitive from "../base/BasePrimitive.svelte";
	import type { BoxProps } from "./type";

	let {
		background,
		borderColor,
		borderRadius,
		borderWidth,
		shadow,
		as = "div",
		children,
		...restProps
	}: BoxProps = $props();

	const theme = GetTheme();
	if (process.env.NODE_ENV !== "production" && theme && (background || borderColor || shadow)) {
		console.warn(
			`<Box /> with properties 'background', 'borderColor' or 'shadow' cannot be used with darkmode-support.`,
		);
	}

	const prefix = theme ? "ax" : "a";
</script>

<BasePrimitive
	{as}
	{...omit(restProps, "class")}
	class={classes([
		restProps.class,
		"navds-box",
		{
			"navds-box-bg": !!background,
			"navds-box-border-color": !!borderColor,
			"navds-box-border-width": !!borderWidth,
			"navds-box-border-radius": !!borderRadius,
			"navds-box-shadow": !!shadow,
		},
	])}
	style={combineStyles(restProps, {
		[`--__${prefix}c-box-background`]: background ? `var(--a-${background})` : undefined,
		[`--__${prefix}c-box-shadow`]: shadow ? `var(--a-shadow-${shadow})` : undefined,
		[`--__${prefix}c-box-border-color`]: borderColor ? `var(--a-${borderColor})` : undefined,
		[`--__${prefix}c-box-border-width`]: borderWidth
			? borderWidth
					.split(" ")
					.map((x) => `${x}px`)
					.join(" ")
			: undefined,
		...getResponsiveProps(prefix, "box", "radius", "radius", borderRadius, false, ["0"]),
	})}
	{children}
/>
