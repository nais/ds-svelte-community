<script lang="ts">
	import { ArrowDownIcon } from "$lib/icons";
	import ArrowsUpDownIcon from "$lib/icons/ArrowsUpDownIcon.svelte";
	import ArrowUpIcon from "$lib/icons/ArrowUpIcon.svelte";
	import { classes, omit } from "../helpers";
	import { getTableContext, type TableHeaderCellProps } from "./type.svelte";

	let {
		align,
		sortKey = "",
		sortable = false,
		children,
		...restProps
	}: TableHeaderCellProps = $props();

	const ctx = getTableContext();

	if (sortable && !sortKey) {
		throw new Error("HeaderCell: sortable is true, but sortKey is not set");
	}

	const onclick = () => {
		if (sortable && sortKey && ctx.changeSort) {
			ctx.changeSort(sortKey);
		}
	};
</script>

<th
	{...omit(restProps, "class")}
	class={classes([
		restProps.class,
		"navds-table__header-cell",
		"navds-label",
		{
			[`navds-table__header-cell--align-${align}`]: !!align,
			"navds-label--small": ctx.size == "small",
		},
	])}
	aria-sort={sortable ? (ctx.sort?.orderBy === sortKey ? ctx.sort.direction : "none") : undefined}
>
	{#if sortable}
		<button
			type="button"
			class={classes("navds-table__sort-button")}
			onclick={sortable && sortKey ? () => onclick() : undefined}
		>
			{@render children?.()}
			{#if ctx.sort?.orderBy == sortKey}
				{#if ctx.sort.direction == "ascending"}
					<ArrowUpIcon aria-hidden="true" />
				{:else}
					<ArrowDownIcon aria-hidden="true" />
				{/if}
			{:else}
				<ArrowsUpDownIcon aria-hidden="true" />
			{/if}
		</button>
	{:else}
		{@render children?.()}
	{/if}
</th>
