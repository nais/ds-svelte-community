<script lang="ts">
	import doc from "$lib/components/InlineMessage/InlineMessage.svelte?doc";

	import Doc from "$doclib/Doc.svelte";
	import Story from "$doclib/Story.svelte";
	import { InlineMessage } from "$lib";
</script>

<Doc {doc}>
	<Story>
		<InlineMessage status="info">This is an informational message.</InlineMessage>
	</Story>

	<Story name="Success">
		<InlineMessage status="success">Your changes have been saved successfully.</InlineMessage>
	</Story>

	<Story name="Warning">
		<InlineMessage status="warning">Please review your input before continuing.</InlineMessage>
	</Story>

	<Story name="Error">
		<InlineMessage status="error">An error occurred while processing your request.</InlineMessage>
	</Story>

	<Story name="Small size">
		<div class="flex flex-col gap-2">
			<InlineMessage status="info" size="small">Small info message.</InlineMessage>
			<InlineMessage status="success" size="small">Small success message.</InlineMessage>
			<InlineMessage status="warning" size="small">Small warning message.</InlineMessage>
			<InlineMessage status="error" size="small">Small error message.</InlineMessage>
		</div>
	</Story>

	<Story name="All statuses">
		<div class="flex flex-col gap-2">
			<InlineMessage status="info">Information: This is helpful context.</InlineMessage>
			<InlineMessage status="success">Success: Operation completed.</InlineMessage>
			<InlineMessage status="warning">Warning: Proceed with caution.</InlineMessage>
			<InlineMessage status="error">Error: Something went wrong.</InlineMessage>
		</div>
	</Story>
</Doc>
