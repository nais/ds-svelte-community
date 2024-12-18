<script lang="ts">
	import { marked } from "marked";

	interface Props {
		/**
		 * The markdown content to render.
		 */
		content: string;
	}

	let { content }: Props = $props();

	let rendered = $derived(marked(content));
</script>

<!-- eslint-disable-next-line svelte/no-at-html-tags -->
{@html rendered}
