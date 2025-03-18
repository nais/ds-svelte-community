<script lang="ts">
	import { classes, omit } from "$lib/components/helpers";
	import { GetTheme } from "$lib/components/Theme/Theme.svelte";
	import { combineStyles, getResponsiveProps, getResponsiveValue } from "$lib/components/utils/css";
	import BasePrimitive from "../base/BasePrimitive.svelte";
	import type { FullStackProps } from "./type";

	let {
		justify,
		align,
		wrap = true,
		gap,
		direction = "row",
		as = "div",
		...restProps
	}: FullStackProps = $props();

	const theme = GetTheme();
	const prefix = theme ? "ax" : "a";
</script>

<BasePrimitive
	{as}
	{...omit(restProps, "class", "style")}
	class={classes(restProps, "navds-stack", {
		"navds-vstack": direction === "column",
		"navds-hstack": direction === "row",
		"navds-stack-gap": !!gap,
		"navds-stack-align": !!align,
		"navds-stack-justify": !!justify,
		"navds-stack-direction": !!direction,
		"navds-stack-wrap": wrap,
	})}
	style={combineStyles(
		restProps,
		getResponsiveProps(prefix, "stack", "gap", "spacing", gap),
		getResponsiveValue(prefix, "stack", "direction", direction),
		getResponsiveValue(prefix, "stack", "align", align),
		getResponsiveValue(prefix, "stack", "justify", justify),
	)}
/>
