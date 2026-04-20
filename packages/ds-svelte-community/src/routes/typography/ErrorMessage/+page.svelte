<script lang="ts">
	import doc from "$lib/components/typography/ErrorMessage/ErrorMessage.svelte?doc";

	import Doc from "$doclib/Doc.svelte";
	import Story from "$doclib/Story.svelte";
	import { ErrorMessage, VStack } from "$lib";
</script>

<Doc {doc} preview={{ width: "60%" }}>
	<Story>
		<ErrorMessage>You must fill in the text field before submitting.</ErrorMessage>
	</Story>

	<Story name="Sizes">
		{@const exampleText = "You must fill in the text field before submitting."}
		<VStack gap="space-20">
			<ErrorMessage>Medium (18px): {exampleText}</ErrorMessage>
			<ErrorMessage size="small">Small (16px): {exampleText}</ErrorMessage>
		</VStack>
	</Story>

	<Story name="Show icon">
		{@const exampleText = "You must fill in the text field before submitting."}
		<VStack gap="space-20">
			<ErrorMessage showIcon>{exampleText}</ErrorMessage>
			<ErrorMessage showIcon size="small">{exampleText}</ErrorMessage>
		</VStack>
	</Story>

	<Story name="Spacing">
		<ErrorMessage spacing>Error message with spacing below</ErrorMessage>
		<ErrorMessage>Next error message</ErrorMessage>
	</Story>
</Doc>
