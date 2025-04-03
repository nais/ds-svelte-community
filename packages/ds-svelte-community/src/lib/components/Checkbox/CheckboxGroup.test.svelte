<script lang="ts">
	import { Checkbox, CheckboxGroup } from "$lib";
	import type { CheckboxGroupProps, CheckboxProps } from "./type";

	let {
		wrapper,
		items,
	}: { wrapper: Omit<CheckboxGroupProps, "children">; items: CheckboxProps[] } = $props();
</script>

<CheckboxGroup {...wrapper}>
	{#each items as item (item)}
		<Checkbox {...item} />
	{/each}
</CheckboxGroup>
