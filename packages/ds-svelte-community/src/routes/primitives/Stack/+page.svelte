<script lang="ts">
	import doc from "$lib/components/primitives/Stack/Stack.svelte?doc";

	import Doc from "$doclib/Doc.svelte";
	import Story from "$doclib/Story.svelte";
	import { Stack } from "$lib";
	import Placeholder from "../HStack/Placeholder.svelte";
</script>

<Doc {doc}>
	<Story locked>
		<Stack gap="space-16" direction="row">
			<Placeholder height="3rem" width="3rem" />
			<Placeholder height="3rem" width="3rem" />
			<Placeholder height="3rem" width="3rem" />
			<Placeholder height="3rem" width="3rem" />
		</Stack>
	</Story>

	<Story name="Column" locked>
		<Stack gap="space-16" direction="column">
			<Placeholder height="3rem" width="3rem" />
			<Placeholder height="3rem" width="3rem" />
			<Placeholder height="3rem" width="3rem" />
			<Placeholder height="3rem" width="3rem" />
		</Stack>
	</Story>

	<Story name="Responsive direction" locked>
		<Stack
			gap="space-16"
			direction={{ xs: "column", md: "row" }}
			align={{ xs: "center", md: "start" }}
		>
			<Placeholder height="3rem" width="3rem" />
			<Placeholder height="2rem" width="3rem" />
			<Placeholder height="3rem" width="3rem" />
			<Placeholder height="2rem" width="3rem" />
		</Stack>
	</Story>

	<Story name="Responsive gap" locked>
		<Stack
			direction="row"
			gap={{
				xs: "space-8",
				sm: "space-24",
				md: "space-40",
				lg: "space-56",
				xl: "space-72",
			}}
		>
			<Placeholder height="3rem" width="3rem" />
			<Placeholder height="3rem" width="3rem" />
			<Placeholder height="3rem" width="3rem" />
			<Placeholder height="3rem" width="3rem" />
		</Stack>
	</Story>
</Doc>
