<script lang="ts">
	import doc from "$lib/components/primitives/Responsive/Show.svelte?doc";

	import Doc from "$doclib/Doc.svelte";
	import Story from "$doclib/Story.svelte";
	import { Box, Show, VStack } from "$lib";
</script>

<Doc {doc}>
	<Story locked>
		<VStack gap="space-16">
			<Show below="md">
				<Box padding="space-16" background="neutral-strong">Visible only on mobile (below md)</Box>
			</Show>
			<Show above="md">
				<Box padding="space-16" background="neutral-strong">Visible only on desktop (above md)</Box>
			</Show>
		</VStack>
	</Story>

	<Story name="Above" locked>
		<Show above="md">
			<Box padding="space-16" background="neutral-strong">I appear only on desktop (above md)</Box>
		</Show>
	</Story>

	<Story name="Below" locked>
		<Show below="md">
			<Box padding="space-16" background="neutral-strong">I appear only on mobile (below md)</Box>
		</Show>
	</Story>
</Doc>
