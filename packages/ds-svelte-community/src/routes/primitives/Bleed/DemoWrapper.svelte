<script lang="ts">
	import { Box } from "$lib";
	import type { Snippet } from "svelte";

	let {
		children,
	}: {
		children: Snippet;
	} = $props();
</script>

<Box padding="5" borderRadius="8" background="meta-purple-strong">
	<Box padding="5" borderRadius="4" background="default">
		{@render children()}
	</Box>
</Box>
