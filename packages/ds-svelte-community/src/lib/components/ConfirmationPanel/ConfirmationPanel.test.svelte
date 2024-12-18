<script lang="ts">
	import ConfirmationPanel from "./ConfirmationPanel.svelte";
	import type { ConfirmationPanelProps } from "./type";

	let props: Omit<Omit<ConfirmationPanelProps, "label">, "children"> = $props();
</script>

<ConfirmationPanel {...props}>
	{#snippet label()}
		Label fragment
	{/snippet}

	Confirmation body
</ConfirmationPanel>
