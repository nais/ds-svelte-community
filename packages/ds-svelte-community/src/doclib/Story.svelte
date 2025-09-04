<script lang="ts" module>
	import type { Snippet } from "svelte";

	export type StorySnippet = Snippet<[{ docProps: { [key: string]: unknown } }]>;
</script>

<script lang="ts">
	let props = $props();

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const used = (..._: unknown[]) => {};
	used(props);
</script>
