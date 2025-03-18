<script lang="ts">
	import { classes, omit } from "$lib/components/helpers";
	import { GetTheme } from "$lib/components/Theme/Theme.svelte";
	import { combineStyles, getResponsiveProps, getResponsiveValue } from "$lib/components/utils/css";
	import type { ResponsiveProp } from "$lib/components/utils/types";
	import type { HGridProps } from "./type";

	let { columns, gap, align, as = "div", children, ...restProps }: HGridProps = $props();

	const theme = GetTheme();
	const prefix = theme ? "ax" : "a";

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
	class={classes(restProps, "navds-hgrid", {
		"navds-hgrid-align": !!align,
		"navds-hgrid-gap": !!gap,
	})}
	style={combineStyles(
		restProps,
		getResponsiveProps(prefix, `hgrid`, "gap", "spacing", gap),
		getResponsiveValue(prefix, `hgrid`, "columns", formatGrid(columns)),
	)}
	style:--__ac-hgrid-align={prefix == "a" ? align : undefined}
	style:--__axc-hgrid-align={prefix == "ax" ? align : undefined}
>
	{@render children()}
</svelte:element>
