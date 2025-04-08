<script lang="ts">
	import doc from "$lib/components/ExpansionCard/ExpansionCard.svelte?doc";

	import Doc from "$doclib/Doc.svelte";
	import Story from "$doclib/Story.svelte";
	import { ExpansionCard } from "$lib";
</script>

<Doc {doc}>
	<Story>
		<ExpansionCard header="Some title">Extended description</ExpansionCard>
	</Story>
</Doc>
