<script lang="ts">
	import doc from "$lib/components/primitives/HGrid/HGrid.svelte?doc";

	import Doc from "$doclib/Doc.svelte";
	import Story from "$doclib/Story.svelte";
	import { Box, HGrid } from "$lib";
	import Placeholder from "./Placeholder.svelte";
</script>

<Doc {doc}>
	<Story locked>
		<Box background="neutral-moderate">
			<HGrid gap="space-24" columns={3}>
				<Placeholder height="15rem" />
				<Placeholder height="15rem" />
				<Placeholder height="15rem" />
			</HGrid>
		</Box>
	</Story>

	<Story name="Columns variants" locked>
		<Box background="neutral-moderate">
			<HGrid gap="space-24" columns={{ xs: "repeat(auto-fit, minmax(10rem, 1fr))", md: 4 }}>
				<Placeholder height="15rem" />
				<Placeholder height="15rem" />
				<Placeholder height="15rem" />
				<Placeholder height="15rem" />
			</HGrid>
		</Box>
	</Story>

	<Story name="Responsive columns" locked>
		<Box background="neutral-moderate">
			<HGrid gap="space-24" columns={{ xs: 1, sm: 2, md: 4 }}>
				<Placeholder height="15rem" />
				<Placeholder height="15rem" />
				<Placeholder height="15rem" />
				<Placeholder height="15rem" />
			</HGrid>
		</Box>
	</Story>

	<Story name="Responsive gap" locked>
		<Box background="neutral-moderate">
			<HGrid gap={{ xs: "space-8", md: "space-32" }} columns={3}>
				<Placeholder height="15rem" />
				<Placeholder height="15rem" />
				<Placeholder height="15rem" />
				<Placeholder height="15rem" />
			</HGrid>
		</Box>
	</Story>

	<Story name="Align" locked>
		<HGrid gap="space-16" columns={2} align="start">
			<Placeholder height="10rem">Start</Placeholder>
			<Placeholder />
		</HGrid>
		<HGrid gap="space-16" columns={2} align="center">
			<Placeholder height="10rem">Center</Placeholder>
			<Placeholder />
		</HGrid>
		<HGrid gap="space-16" columns={2} align="end">
			<Placeholder height="10rem">End</Placeholder>
			<Placeholder />
		</HGrid>
	</Story>
</Doc>
