<script lang="ts">
	import doc from "$lib/components/typography/Detail/Detail.svelte?doc";

	import Doc from "$doclib/Doc.svelte";
	import Story from "$doclib/Story.svelte";
	import { Detail } from "$lib";
</script>

<Doc {doc} preview={{ width: "60%" }}>
	<Story>
		<Detail>Lorem ipsum dolor sit amet.</Detail>
	</Story>
</Doc>
