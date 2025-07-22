<script lang="ts">
	import { RemovableChip, ToggleChip } from ".";
	import Chips from "./Chips.svelte";
	import type { ChipsProps, RemovableChipProps } from "./type";

	interface Props_1 {
		values: string[];
		toggle?: boolean;
		size?: ChipsProps["size"];
		variant?: RemovableChipProps["variant"];
		selected?: string;
		as?: "a";
	}

	let { values, toggle, size, variant, selected, as }: Props_1 = $props();
</script>

<Chips {size}>
	{#each values as value (value)}
		<li>
			{#if toggle}
				<ToggleChip selected={value == selected} {value} {as}>{value}</ToggleChip>
			{:else}
				<RemovableChip {variant} {value}>{value}</RemovableChip>
			{/if}
		</li>
	{/each}
</Chips>
