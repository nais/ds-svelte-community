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
		<VStack gap="4">
			<Box padding="4" background="info-moderate">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, ipsum!
			</Box>
			<Box padding="4" background="default">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, ipsum!
			</Box>
			<Box padding="4" background="raised">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, ipsum!
			</Box>
		</VStack>
	</Story>

	<Story name="Padding" locked>
		<VStack gap="4">
			<Box padding="4" background="neutral-strong">
				<Box padding="2" background="neutral-moderate">Static padding</Box>
			</Box>
			<Box padding={{ xs: "2", md: "6" }} background="neutral-strong">
				<Box padding="2" background="neutral-moderate">Dynamic padding</Box>
			</Box>
		</VStack>
	</Story>

	<Story name="Padding inline" locked>
		<VStack gap="4">
			<Box paddingInline="4" background="neutral-strong">
				<Box padding="2" background="neutral-moderate">Padding inline</Box>
			</Box>
			<Box paddingInline="4 16" background="neutral-strong">
				<Box padding="2" background="neutral-moderate">Different inlineStart and inlineEnd</Box>
			</Box>
			<Box paddingInline={{ xs: "4", md: "6 16" }} background="neutral-strong">
				<Box padding="2" background="neutral-moderate">Dynamic paddingInline</Box>
			</Box>
		</VStack>
	</Story>

	<Story name="Padding block" locked>
		<VStack gap="4">
			<Box paddingBlock="4" background="neutral-strong">
				<Box padding="2" background="neutral-moderate">Padding block</Box>
			</Box>
			<Box paddingBlock="4 16" background="neutral-strong">
				<Box padding="2" background="neutral-moderate">Different blockStart og blockEnd</Box>
			</Box>
			<Box paddingBlock={{ xs: "4", md: "6 16" }} background="neutral-strong">
				<Box padding="2" background="neutral-moderate">Dynamic paddingBlock</Box>
			</Box>
		</VStack>
	</Story>

	<Story name="Border width" locked>
		<VStack gap="4">
			<Box padding="4" borderWidth="2">border-width</Box>
			<Box padding="4" borderWidth="2 5">Flexible border-width</Box>
		</VStack>
	</Story>

	<Story name="Border color" locked>
		<VStack gap="4">
			<Box padding="4" borderWidth="4">Alt-3</Box>
			<Box padding="4" borderWidth="4">Info</Box>
			<Box padding="4" borderWidth="4">Success</Box>
		</VStack>
	</Story>

	<Story name="Border radius" locked>
		<VStack gap="4">
			<Box padding="4" borderWidth="2" borderRadius="12">border-radius</Box>
			<Box padding="4" borderWidth="2" borderRadius="12 12 0 0">Flexible border-radius</Box>
			<Box padding="4" borderWidth="2" borderRadius={{ md: "8" }}>Dynamic border-radius</Box>
		</VStack>
	</Story>

	<Story name="Shadow" locked>
		<VStack gap="8">
			<Box padding="4" borderRadius="8" shadow="dialog" background="neutral-moderate">dialog</Box>
		</VStack>
	</Story>

	<Story name="Panel" locked>
		<Box padding="6" background="raised" borderRadius="12" borderColor="neutral" borderWidth="1">
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
