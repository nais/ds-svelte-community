<!--
@component
Tables are used to organize and display data in an efficient way. They can be simple with few rows and columns, but they can also be rich with interactive components such as links, buttons, checkboxes and dropdown lists.

Read more about this component in the [Aksel documentation](https://aksel.nav.no/komponenter/core/table).

The component names differ from `@navikt/ds-react` to align with the HTML standard.
-->

<script lang="ts">
	import { setContext } from "svelte";
	import { omit } from "../helpers";
	import { TableContext, contextKey, type TableProps } from "./type.svelte";

	let {
		size = "medium",
		zebraStripes = false,
		sort,
		children,
		onsortchange,
		...restProps
	}: TableProps = $props();

	const ctx = new TableContext();

	$effect(() => {
		ctx.size = size;
		ctx.zebraStripes = zebraStripes;
		ctx.changeSort = onsortchange;
		ctx.sort = sort;
	});

	setContext<TableContext>(contextKey, ctx);
</script>

<table
	{...omit(restProps, "class")}
	class={[
		restProps.class,
		"aksel-table",
		`aksel-table--${size}`,
		{
			"aksel-table--zebra-stripes": zebraStripes,
		},
	]}
>
	{@render children()}
</table>
