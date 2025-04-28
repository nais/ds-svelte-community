<script lang="ts">
	import { omit } from "$lib/components/helpers";
	import { combineStyles, getResponsiveProps, getResponsiveValue } from "$lib/components/utils/css";
	import type { ResponsiveProp } from "$lib/components/utils/types";
	import type { HGridProps } from "./type";

	let { columns, gap, align, as = "div", children, ...restProps }: HGridProps = $props();

	function formatGrid(props?: ResponsiveProp<number | string>): ResponsiveProp<number | string> {
		if (!props) {
			return {};
		}

		if (typeof props === "string" || typeof props === "number") {
			return getColumnValue(props);
		}

		return Object.fromEntries(
			Object.entries(props).map(([breakpointToken, columnValue]) => [
				breakpointToken,
				getColumnValue(columnValue),
			]),
		);
	}

	function getColumnValue(prop: number | string) {
		if (typeof prop === "number") {
			return `repeat(${prop}, minmax(0, 1fr))`;
		}

		return prop;
	}
</script>

<svelte:element
	this={as}
	{...omit(restProps, "class")}
	class={[
		restProps.class,
		"aksel-hgrid",
		{
			"aksel-hgrid-align": !!align,
			"aksel-hgrid-gap": !!gap,
		},
	]}
	style={combineStyles(
		restProps,
		getResponsiveProps(`hgrid`, "gap", "spacing", gap),
		getResponsiveValue(`hgrid`, "columns", formatGrid(columns)),
	)}
	style:--__axc-hgrid-align={align}
>
	{@render children()}
</svelte:element>
