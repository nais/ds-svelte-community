<script lang="ts" module>
	import type { AccordionItemProps } from "./type";
	type TestItem = AccordionItemProps & { content: string };

	export type TestProps = {
		items: TestItem[];
	};
</script>

<script lang="ts">
	import { omit } from "../helpers";
	import Accordion from "./Accordion.svelte";
	import AccordionItem from "./AccordionItem.svelte";

	let { items }: TestProps = $props();
</script>

<Accordion>
	{#each items as item (item)}
		<AccordionItem {...omit(item, "content")}>{item.content}</AccordionItem>
	{/each}
</Accordion>
