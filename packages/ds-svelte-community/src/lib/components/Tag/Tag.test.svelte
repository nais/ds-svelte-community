<script lang="ts">
	import Tag from "./Tag.svelte";
	import type { TagProps } from "./type";

	let props: Omit<TagProps, "children"> = $props();
</script>

<Tag {...props}>Tag content</Tag>
