<script lang="ts">
	import doc from "$lib/components/primitives/Stack/VStack.svelte?doc";

	import Doc from "$doclib/Doc.svelte";
	import Story from "$doclib/Story.svelte";
	import { Box, HStack, VStack } from "$lib";
	import Placeholder from "../HStack/Placeholder.svelte";
</script>

<Doc {doc}>
	<Story locked>
		<VStack gap="space-16">
			<Placeholder height="3rem" width="3rem" />
			<Placeholder height="3rem" width="3rem" />
			<Placeholder height="3rem" width="3rem" />
			<Placeholder height="3rem" width="3rem" />
		</VStack>
	</Story>

	<Story name="Align" locked>
		<HStack gap="space-48">
			<VStack gap="space-12" align="center">
				<Placeholder text="center" />
				<Placeholder />
				<Placeholder />
				<Placeholder />
			</VStack>
			<VStack gap="space-12" align="end">
				<Placeholder text="end" />
				<Placeholder />
				<Placeholder />
				<Placeholder />
			</VStack>
			<VStack gap="space-12" align="start">
				<Placeholder text="start" />
				<Placeholder />
				<Placeholder />
				<Placeholder />
			</VStack>
			<VStack gap="space-12" align="stretch">
				<Placeholder text="stretch" />
				<Placeholder />
				<Placeholder />
				<Placeholder />
			</VStack>
		</HStack>
	</Story>

	<Story name="Justify" locked>
		<Box style="display: flex;" height="18rem" background="neutral-moderate">
			<HStack gap="space-8" wrap={false}>
				<VStack justify="center" gap="space-4">
					<Placeholder text="center" />
					<Placeholder />
					<Placeholder />
				</VStack>
				<VStack justify="end" gap="space-4">
					<Placeholder text="end" />
					<Placeholder />
					<Placeholder />
				</VStack>
				<VStack justify="start" gap="space-4">
					<Placeholder text="start" />
					<Placeholder />
					<Placeholder />
				</VStack>
				<VStack justify="space-around">
					<Placeholder text="around" />
					<Placeholder />
					<Placeholder />
				</VStack>
				<VStack justify="space-between">
					<Placeholder text="between" />
					<Placeholder />
					<Placeholder />
				</VStack>
				<VStack justify="space-evenly">
					<Placeholder text="evenly" />
					<Placeholder />
					<Placeholder />
				</VStack>
			</HStack>
		</Box>
	</Story>

	<Story name="Responsive gap" locked>
		<VStack
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
		</VStack>
	</Story>
</Doc>
