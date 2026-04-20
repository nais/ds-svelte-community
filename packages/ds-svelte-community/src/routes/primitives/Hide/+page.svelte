<script lang="ts">
	import doc from "$lib/components/primitives/Responsive/Hide.svelte?doc";

	import Doc from "$doclib/Doc.svelte";
	import Story from "$doclib/Story.svelte";
	import { Box, HGrid, Hide } from "$lib";
</script>

<Doc {doc}>
	<Story locked>
		<HGrid columns={2} gap="space-16">
			<Box padding="space-16" background="neutral-moderate">Always visible</Box>
			<Hide below="md">
				<Box padding="space-16" background="neutral-strong">I disappear on mobile (below md)</Box>
			</Hide>
		</HGrid>
	</Story>

	<Story name="Hide above" locked>
		<HGrid columns={2} gap="space-16">
			<Box padding="space-16" background="neutral-moderate">Always visible</Box>
			<Hide above="md">
				<Box padding="space-16" background="neutral-strong">I disappear on desktop (above md)</Box>
			</Hide>
		</HGrid>
	</Story>
</Doc>
