<script lang="ts">
	import { classes, omit } from "../helpers";
	import type { TableRowProps } from "./type.svelte";

	let { selected = false, shadeOnHover = true, children, ...restProps }: TableRowProps = $props();
</script>

<tr
	{...omit(restProps, "class")}
	class={classes([
		restProps.class,
		"navds-table__row",
		{
			"navds-table__row--selected": selected,
			"navds-table__row--shade-on-hover": shadeOnHover,
		},
	])}
>
	{@render children()}
</tr>
