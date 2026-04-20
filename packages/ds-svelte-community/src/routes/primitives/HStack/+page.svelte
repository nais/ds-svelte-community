<script lang="ts">
	import doc from "$lib/components/primitives/Stack/HStack.svelte?doc";

	import Doc from "$doclib/Doc.svelte";
	import Story from "$doclib/Story.svelte";
	import { Box, Heading, HStack, Spacer, VStack } from "$lib";
	import Placeholder from "./Placeholder.svelte";
</script>

<Doc {doc}>
	<Story locked>
		<HStack gap="space-16">
			<Placeholder height="3rem" width="3rem" />
			<Placeholder height="3rem" width="3rem" />
			<Placeholder height="3rem" width="3rem" />
			<Placeholder height="3rem" width="3rem" />
		</HStack>
	</Story>

	<Story name="Wrap" locked>
		<Box maxWidth="385px" padding="space-8" background="neutral-moderate">
			<VStack gap="space-12">
				<div>
					<Heading size="xsmall">wrap=true (default)</Heading>
					<HStack gap="space-8">
						<Placeholder height="3rem" width="3rem" />
						<Placeholder height="3rem" width="3rem" />
						<Placeholder height="3rem" width="3rem" />
						<Placeholder height="3rem" width="3rem" />
						<Placeholder height="3rem" width="3rem" />
						<Placeholder height="3rem" width="3rem" />
						<Placeholder height="3rem" width="3rem" />
					</HStack>
				</div>

				<div>
					<Heading size="xsmall">wrap=false</Heading>
					<HStack gap="space-8" wrap={false}>
						<Placeholder height="3rem" width="3rem" />
						<Placeholder height="3rem" width="3rem" />
						<Placeholder height="3rem" width="3rem" />
						<Placeholder height="3rem" width="3rem" />
						<Placeholder height="3rem" width="3rem" />
						<Placeholder height="3rem" width="3rem" />
						<Placeholder height="3rem" width="3rem" />
					</HStack>
				</div>
			</VStack>
		</Box>
	</Story>

	<Story name="Align" locked>
		<VStack gap="space-48">
			<HStack gap="space-12" align="center">
				<Placeholder text="center" />
				<Placeholder />
				<Placeholder />
				<Placeholder />
			</HStack>
			<HStack gap="space-12" align="end">
				<Placeholder text="end" />
				<Placeholder />
				<Placeholder />
				<Placeholder />
			</HStack>
			<HStack gap="space-12" align="start">
				<Placeholder text="start" />
				<Placeholder />
				<Placeholder />
				<Placeholder />
			</HStack>
			<HStack gap="space-12" align="stretch">
				<Placeholder text="stretch" />
				<Placeholder />
				<Placeholder />
				<Placeholder />
			</HStack>
		</VStack>
	</Story>

	<Story name="Justify" locked>
		<Box background="neutral-moderate" width="18rem">
			<VStack gap="space-48">
				<HStack gap="space-12" justify="center">
					<Placeholder text="center" />
					<Placeholder />
					<Placeholder />
				</HStack>
				<HStack gap="space-12" justify="end">
					<Placeholder text="end" />
					<Placeholder />
					<Placeholder />
				</HStack>
				<HStack gap="space-12" justify="start">
					<Placeholder text="start" />
					<Placeholder />
					<Placeholder />
				</HStack>
				<HStack gap="space-12" justify="space-around">
					<Placeholder text="around" />
					<Placeholder />
					<Placeholder />
				</HStack>
				<HStack gap="space-12" justify="space-between">
					<Placeholder text="between" />
					<Placeholder />
					<Placeholder />
				</HStack>
				<HStack gap="space-12" justify="space-evenly">
					<Placeholder text="evenly" />
					<Placeholder />
					<Placeholder />
				</HStack>
			</VStack>
		</Box>
	</Story>

	<Story name="Responsive gap" locked>
		<HStack
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
		</HStack>
	</Story>

	<Story name="Spacer" locked>
		<Box background="neutral-moderate">
			<HStack gap="space-12" wrap={false}>
				<Placeholder height="2rem" width="2rem" />
				<Spacer />
				<Placeholder height="2rem" width="2rem" />
			</HStack>
		</Box>
	</Story>
</Doc>
