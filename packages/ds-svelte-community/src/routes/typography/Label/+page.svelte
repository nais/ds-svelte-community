<script lang="ts">
	import doc from "$lib/components/typography/Label/Label.svelte?doc";

	import Doc from "$doclib/Doc.svelte";
	import Story from "$doclib/Story.svelte";
	import { Label, VStack } from "$lib";
</script>

<Doc {doc} preview={{ width: "60%" }}>
	<Story>
		<Label>Please provide the reason you waited more than 6 months to apply for reimbursement</Label
		>
	</Story>

	<Story name="Sizes">
		{@const exampleText =
			"Please provide the reason you waited more than 6 months to apply for reimbursement"}
		<VStack gap="space-20">
			<Label>Medium (18px): {exampleText}</Label>
			<Label size="small">Small (16px): {exampleText}</Label>
		</VStack>
	</Story>

	<Story name="Spacing">
		<Label spacing>Label with spacing below</Label>
		<Label>Next label</Label>
	</Story>

	<Story name="Override tag">
		<Label as="span">This is now a span!</Label>
	</Story>

	<Story name="Visually hidden">
		<Label visuallyHidden>This label is only available to screen readers</Label>
		<span>(The label above is only visible to screen readers.)</span>
	</Story>
</Doc>
