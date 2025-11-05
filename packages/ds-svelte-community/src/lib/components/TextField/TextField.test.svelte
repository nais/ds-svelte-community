<script lang="ts">
	import TextField from "./TextField.svelte";
	import type { TextFieldProps } from "./type";

	let props: Omit<Omit<Omit<TextFieldProps, "children">, "label">, "description"> = $props();
</script>

<TextField {...props} type="time">
	{#snippet label()}Some label{/snippet}
	{#snippet description()}Some longer description{/snippet}
</TextField>
