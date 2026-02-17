<script lang="ts">
	import doc from "$lib/components/primitives/Box/Box.svelte?doc";

	import Doc from "$doclib/Doc.svelte";
	import Story from "$doclib/Story.svelte";
	import { BodyLong, Box, VStack } from "$lib";
</script>

<Doc {doc}>
	<Story locked>
		<Box>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, ipsum!</Box>
	</Story>

	<Story name="Background" locked>
		<VStack gap="space-16">
			<Box padding="space-16" background="info-moderate">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, ipsum!
			</Box>
			<Box padding="space-16" background="default">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, ipsum!
			</Box>
			<Box padding="space-16" background="raised">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, ipsum!
			</Box>
		</VStack>
	</Story>

	<Story name="Padding" locked>
		<VStack gap="space-16">
			<Box padding="space-16" background="neutral-strong">
				<Box padding="space-8" background="neutral-moderate">Static padding</Box>
			</Box>
			<Box padding={{ xs: "space-8", md: "space-24" }} background="neutral-strong">
				<Box padding="space-8" background="neutral-moderate">Dynamic padding</Box>
			</Box>
		</VStack>
	</Story>

	<Story name="Padding inline" locked>
		<VStack gap="space-16">
			<Box paddingInline="space-16" background="neutral-strong">
				<Box padding="space-8" background="neutral-moderate">Padding inline</Box>
			</Box>
			<Box paddingInline="space-16 space-64" background="neutral-strong">
				<Box padding="space-8" background="neutral-moderate"
					>Different inlineStart and inlineEnd</Box
				>
			</Box>
			<Box paddingInline={{ xs: "space-16", md: "space-24 space-64" }} background="neutral-strong">
				<Box padding="space-8" background="neutral-moderate">Dynamic paddingInline</Box>
			</Box>
		</VStack>
	</Story>

	<Story name="Padding block" locked>
		<VStack gap="space-16">
			<Box paddingBlock="space-16" background="neutral-strong">
				<Box padding="space-8" background="neutral-moderate">Padding block</Box>
			</Box>
			<Box paddingBlock="space-16 space-64" background="neutral-strong">
				<Box padding="space-8" background="neutral-moderate">Different blockStart og blockEnd</Box>
			</Box>
			<Box paddingBlock={{ xs: "space-16", md: "space-24 space-64" }} background="neutral-strong">
				<Box padding="space-8" background="neutral-moderate">Dynamic paddingBlock</Box>
			</Box>
		</VStack>
	</Story>

	<Story name="Border width" locked>
		<VStack gap="space-16">
			<Box padding="space-16" borderWidth="2">border-width</Box>
			<Box padding="space-16" borderWidth="2 5">Flexible border-width</Box>
		</VStack>
	</Story>

	<Story name="Border color" locked>
		<VStack gap="space-16">
			<Box padding="space-16" borderWidth="4">Alt-3</Box>
			<Box padding="space-16" borderWidth="4">Info</Box>
			<Box padding="space-16" borderWidth="4">Success</Box>
		</VStack>
	</Story>

	<Story name="Border radius" locked>
		<VStack gap="space-16">
			<Box padding="space-16" borderWidth="2" borderRadius="12">border-radius</Box>
			<Box padding="space-16" borderWidth="2" borderRadius="12 12 0 0">Flexible border-radius</Box>
			<Box padding="space-16" borderWidth="2" borderRadius={{ md: "8" }}>Dynamic border-radius</Box>
		</VStack>
	</Story>

	<Story name="Shadow" locked>
		<VStack gap="space-32">
			<Box padding="space-16" borderRadius="8" shadow="dialog" background="neutral-moderate"
				>dialog</Box
			>
		</VStack>
	</Story>

	<Story name="Panel" locked>
		<Box
			padding="space-24"
			background="raised"
			borderRadius="12"
			borderColor="neutral"
			borderWidth="1"
		>
			<BodyLong spacing>
				If you are fully or partially unemployed or laid off, you may be entitled to financial
				support from NAV.
			</BodyLong>
			<BodyLong spacing>NAV can also give you advice and guidance in your situation.</BodyLong>
			<BodyLong spacing>
				If you do not receive unemployment benefit, you may be entitled to measure allowance. This
				is a daily rate you receive on the days you participate in a labor market initiative. A
				labor market measure can, for example, be a course, job club or job training.
			</BodyLong>
		</Box>
	</Story>
</Doc>
