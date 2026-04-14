<script lang="ts">
	import { omit } from "../helpers";
	import { getTabsContext, type TabPanelProps } from "./type.svelte";

	let { value, lazy = true, children, ...restProps }: TabPanelProps = $props();

	const ctx = getTabsContext();
</script>

<div
	{...omit(restProps, "class", "role", "tabindex", "hidden", "data-state")}
	role="tabpanel"
	tabindex="0"
	class={[restProps.class, "aksel-tabs__tabpanel"]}
	data-state={ctx.value == value ? "active" : "inactive"}
	hidden={ctx.value != value ? true : undefined}
	id={ctx.idFor("panel", value)}
	aria-labelledby={ctx.idFor("tab", value)}
>
	{#if !lazy || ctx.value == value}
		{@render children()}
	{/if}
</div>
