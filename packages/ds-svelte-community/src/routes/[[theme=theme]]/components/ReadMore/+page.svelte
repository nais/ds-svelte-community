<script lang="ts">
	import doc from "$lib/components/ReadMore/ReadMore.svelte?doc";

	import Doc from "$doclib/Doc.svelte";
	import Story from "$doclib/Story.svelte";
	import { ReadMore } from "$lib";
	import Alert from "$lib/components/Alert/Alert.svelte";
</script>

<Doc
	{doc}
	preview={{
		width: "400px",
	}}
>
	{#snippet extraDescription()}
		<Alert variant="warning">
			Keyboard interaction is incomplete. Missing <kbd>esc</kbd> to close popover.
		</Alert>
	{/snippet}
	<Story>
		<ReadMore header="This is considered a health restriction.">
			By health limitations we mean disability, illness, allergies that prevent you from working or
			other reasons that must be taken into account when finding new work. You must state what
			applies to you and document the health reasons you refer to.
		</ReadMore>
	</Story>
</Doc>
