<script lang="ts">
	import { omit } from "$lib/components/helpers";
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
		children,
		...restProps
	}: FullStackProps = $props();
</script>

<BasePrimitive
	{as}
	{children}
	{...omit(restProps, "class", "style")}
	class={[
		restProps.class,
		"aksel-stack",
		{
			"aksel-vstack": direction === "column",
			"aksel-hstack": direction === "row",
			"aksel-stack-gap": !!gap,
			"aksel-stack-align": !!align,
			"aksel-stack-justify": !!justify,
			"aksel-stack-direction": !!direction,
			"aksel-stack-wrap": wrap,
		},
	]}
	style={combineStyles(
		restProps,
		getResponsiveProps("stack", "gap", "space", gap),
		getResponsiveValue("stack", "direction", direction),
		getResponsiveValue("stack", "align", align),
		getResponsiveValue("stack", "justify", justify),
	)}
/>
