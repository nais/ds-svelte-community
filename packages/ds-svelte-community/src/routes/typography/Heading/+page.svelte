<script lang="ts">
	import doc from "$lib/components/typography/Heading/Heading.svelte?doc";

	import Doc from "$doclib/Doc.svelte";
	import Story from "$doclib/Story.svelte";
	import { BodyLong, Heading, VStack } from "$lib";
</script>

<Doc {doc} preview={{ width: "60%" }}>
	<Story>
		<Heading size="large">This is a heading</Heading>
	</Story>

	<Story name="Sizes">
		<VStack gap="space-16">
			<Heading size="xlarge">This is a heading in xlarge (Desktop: 40px, Mobile: 32px)</Heading>
			<Heading size="large">This is a heading in large (Desktop: 32px, Mobile: 28px)</Heading>
			<Heading size="medium">This is a heading in medium (24px)</Heading>
			<Heading size="small">This is a heading in small (20px)</Heading>
			<Heading size="xsmall">This is a heading in xsmall (18px)</Heading>
		</VStack>
	</Story>

	<Story name="Spacing">
		<div>
			<Heading size="medium" spacing>Minimum amount to apply</Heading>
			<BodyLong>Expenses must be over 1,880 kroner to be eligible.</BodyLong>
		</div>
	</Story>

	<Story name="Level">
		<Heading as="h3" size="medium">This is an &lt;h3&gt;</Heading>
	</Story>

	<Story name="Override tag">
		<Heading size="medium" as="span">This is now a span!</Heading>
	</Story>
</Doc>
