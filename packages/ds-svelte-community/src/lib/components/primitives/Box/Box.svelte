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

	let {
		borderRadius,
		borderWidth,
		background,
		borderColor,
		shadow,
		as = "div",
		children,
		...restProps
	}: BoxProps = $props();

	const styles = $derived(
		combineStyles(restProps, {
			"--__axc-box-background": background ? `var(--ax-bg-${background})` : undefined,
			"--__axc-box-shadow": shadow ? `var(--ax-shadow-${shadow})` : undefined,
			"--__axc-box-border-color": borderColor ? `var(--ax-border-${borderColor})` : undefined,
			"--__axc-box-border-width": borderWidth
				? borderWidth
						.split(" ")
						.map((x) => `${x}px`)
						.join(" ")
				: undefined,
			...getResponsiveProps("box", "radius", "radius", borderRadius, false, ["0"]),
		}),
	);
</script>

<BasePrimitive
	{as}
	{...omit(restProps, "class", "style")}
	class={[
		restProps.class,
		"aksel-box",
		{
			"aksel-box-border-width": !!borderWidth,
			"aksel-box-bg": !!background,
			"aksel-box-border-color": !!borderColor,
			"aksel-box-radius": !!borderRadius,
			"aksel-box-shadow": !!shadow,
		},
	]}
	style={styles ? styles : undefined}
	{children}
/>
