<script lang="ts">
	import Theme from "$lib/components/Theme/Theme.svelte";
	import type { ComponentProps, Snippet } from "svelte";

	let {
		children,
		props,
		theme,
	}: {
		children: Snippet<[{ docProps: Record<string, unknown> }]>;
		props: Record<string, unknown>;
		theme: ComponentProps<typeof Theme>["theme"];
	} = $props();
</script>

<Theme {theme}>
	{@render children({ docProps: props })}
</Theme>
