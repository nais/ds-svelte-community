<script lang="ts">
	import { classes, omit } from "../helpers";
	import BodyShort from "../typography/BodyShort/BodyShort.svelte";
	import { getTableContext, type TableDataCellProps } from "./type.svelte";

	let { align, children, ...restProps }: TableDataCellProps = $props();

	const ctx = getTableContext();
</script>

<BodyShort
	{...omit(restProps)}
	as="td"
	class={classes(restProps, "navds-table__data-cell", {
		[`navds-table__data-cell--align-${align}`]: !!align,
	})}
	size={ctx.size}
>
	{@render children?.()}
</BodyShort>
