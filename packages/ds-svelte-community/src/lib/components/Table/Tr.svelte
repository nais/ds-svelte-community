<script lang="ts">
	import { omit } from "../helpers";
	import type { TableRowProps } from "./type.svelte";

	let { selected = false, shadeOnHover = true, children, ...restProps }: TableRowProps = $props();
</script>

<tr
	{...omit(restProps, "class")}
	class={[
		restProps.class,
		"aksel-table__row",
		{
			"aksel-table__row--selected": selected,
			"aksel-table__row--shade-on-hover": shadeOnHover,
		},
	]}
>
	{@render children()}
</tr>
