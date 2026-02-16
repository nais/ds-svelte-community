<script lang="ts" module>
	import type { ToggleGroupProps } from "./type.svelte";
	export type ToggleGroupTestProps = Omit<ToggleGroupProps, "children"> & {
		value: string;
		items: string[];
	};
</script>

<script lang="ts">
	import { ToggleGroup, ToggleGroupItem } from ".";

	let { value, items, ...restProps }: ToggleGroupTestProps = $props();
</script>

<ToggleGroup {value} {...restProps}>
	{#each items as item (item)}
		<ToggleGroupItem value={item}>{item}</ToggleGroupItem>
	{/each}
</ToggleGroup>
