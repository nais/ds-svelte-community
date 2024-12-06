<script lang="ts">
	import List from "./List.svelte";
	import ListItem from "./ListItem.svelte";
	import type { ListItemProps, ListProps } from "./types";

	let {
		list = {},
		items = {},
	}: {
		list?: Omit<ListProps, "children">;
		items?: Omit<ListItemProps, "children">;
	} = $props();
</script>

<List {...list}>
	<ListItem {...items}>Item 1</ListItem>
	<ListItem {...items}>Item 2</ListItem>
	<ListItem {...items}>Item 3</ListItem>
</List>
