<script lang="ts">
	import { Box } from "$lib";
	import type { SpacingScale } from "$lib/components/utils/types";

	let {
		text,
		padding = "space-8",
		height,
		width,
	}: {
		text?: string;
		padding?: SpacingScale;
		height?: string;
		width?: string;
	} = $props();
</script>

<Box
	background="neutral-strong"
	borderRadius="4"
	{padding}
	{height}
	{width}
	style="color: var(--ax-text-accent-contrast);"
>
	{text ?? ""}
</Box>
