<script lang="ts" module>
	import type { AccordionItemProps } from "./type";
	type TestItem = AccordionItemProps & { content: string; heading: string };

	export type TestProps = {
		items: TestItem[];
	};
</script>

<script lang="ts">
	import Accordion from "./Accordion.svelte";
	import AccordionItem from "./AccordionItem.svelte";

	let { items }: TestProps = $props();
</script>

<Accordion>
	{#each items as item (item)}
		<AccordionItem
			open={item.open}
			defaultOpen={item.defaultOpen}
			onOpenChange={item.onOpenChange}
			heading={item.heading}
		>
			{item.content}
		</AccordionItem>
	{/each}
</Accordion>
