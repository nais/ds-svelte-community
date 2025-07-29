<script lang="ts">
	import doc from "$lib/components/typography/BodyShort/BodyShort.svelte?doc";

	import Doc from "$doclib/Doc.svelte";
	import Story from "$doclib/Story.svelte";
	import { BodyShort } from "$lib";
</script>

<Doc {doc} preview={{ width: "60%" }}>
	<Story>
		<BodyShort>Lorem ipsum dolor sit amet.</BodyShort>
	</Story>
</Doc>
