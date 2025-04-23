<script lang="ts">
	import { Box } from "$lib";
	import type { Snippet } from "svelte";

	let {
		children,
	}: {
		children: Snippet;
	} = $props();
</script>

<Box padding="5" borderRadius="large">
	<Box padding="5" borderRadius="medium">
		{@render children()}
	</Box>
</Box>
