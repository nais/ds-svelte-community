<script lang="ts">
	import Select from "./Select.svelte";
	import type { SelectProps } from "./type";

	let props: Omit<SelectProps, "children"> = $props();
</script>

<Select {...props}>
	<option value="">Choose country</option>
	<option value="norway">Norway</option>
	<option value="sweden">Sweden</option>
	<option value="denmark">Denmark</option>
</Select>
