<script lang="ts" module>
	import type { Snippet } from "svelte";

	export type StorySnippet = Snippet<[{ docProps: { [key: string]: unknown } }]>;
</script>

<script lang="ts">
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	let props = $props();
</script>
