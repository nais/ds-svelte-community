<script lang="ts">
	import Select from "./Select.svelte";
	import type { SelectProps } from "./type";

	let {
		description,
		...props
	}: Omit<SelectProps, "children" | "description"> & { description?: boolean } = $props();
</script>

{#if description}
	<Select {...props}>
		{#snippet description()}
			Choose your country of residence
		{/snippet}
		<option value="">Choose country</option>
		<option value="norway">Norway</option>
		<option value="sweden">Sweden</option>
		<option value="denmark">Denmark</option>
	</Select>
{:else}
	<Select {...props}>
		<option value="">Choose country</option>
		<option value="norway">Norway</option>
		<option value="sweden">Sweden</option>
		<option value="denmark">Denmark</option>
	</Select>
{/if}
