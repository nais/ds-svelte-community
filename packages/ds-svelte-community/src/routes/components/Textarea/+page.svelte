<script lang="ts">
	import doc from "$lib/components/Textarea/Textarea.svelte?doc";

	import Doc from "$doclib/Doc.svelte";
	import Story from "$doclib/Story.svelte";
	import { Textarea } from "$lib";
</script>

<Doc {doc}>
	<Story>
		<Textarea label="Your feedback" />
	</Story>

	<Story name="With description">
		<Textarea
			label="Your feedback"
			description="Please provide detailed feedback about your experience"
		/>
	</Story>

	<Story name="With character counter">
		<Textarea label="Short summary" description="Maximum 200 characters" maxlength={200} />
	</Story>

	<Story name="With error">
		<Textarea label="Required field" error="This field is required" />
	</Story>

	<Story name="Small size">
		<Textarea label="Small textarea" size="small" />
	</Story>

	<Story name="Read only">
		<Textarea label="Read only field" readonly value="This content cannot be edited" />
	</Story>

	<Story name="Disabled">
		<Textarea label="Disabled field" disabled value="This field is disabled" />
	</Story>

	<Story name="With resize">
		<Textarea label="Resizable textarea" resize="vertical" />
	</Story>

	<Story name="Custom rows">
		<Textarea label="With min and max rows" minRows={2} maxRows={6} />
	</Story>

	<Story name="Using snippets">
		<Textarea>
			{#snippet label()}
				<strong>Custom label</strong>
			{/snippet}
			{#snippet description()}
				<em>Custom description with formatting</em>
			{/snippet}
		</Textarea>
	</Story>
</Doc>
