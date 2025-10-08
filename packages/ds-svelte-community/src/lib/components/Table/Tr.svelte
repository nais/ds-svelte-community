<script lang="ts">
	import { omit } from "../helpers";
	import { isElementInteractiveTarget } from "./helpers";
	import type { TableRowProps } from "./type.svelte";

	let {
		selected = false,
		shadeOnHover = true,
		children,
		onRowClick,
		...restProps
	}: TableRowProps = $props();

	const handleRowClick = (
		event: MouseEvent & { currentTarget: EventTarget & HTMLTableRowElement },
	) => {
		if (!onRowClick) {
			return;
		}
		if (isElementInteractiveTarget(event.target as HTMLElement)) {
			return;
		}
		onRowClick(event);
	};
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
	onclick={handleRowClick}
	data-interactive={!!onRowClick}
>
	{@render children()}
</tr>
