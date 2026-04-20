<script lang="ts">
	import { Box } from "$lib";

	let { height = "5rem", children }: { height?: string; children?: import("svelte").Snippet } =
		$props();
</script>

<Box
	background="neutral-strong"
	{height}
	style="display: grid; place-content: center; color: var(--ax-text-accent-contrast);"
>
	{#if children}
		{@render children()}
	{/if}
</Box>
