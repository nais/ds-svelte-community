<script lang="ts">
	import doc from "$lib/components/List/List.svelte?doc";
	import itemDoc from "$lib/components/List/ListItem.svelte?doc";

	import Doc from "$doclib/Doc.svelte";
	import Story from "$doclib/Story.svelte";
	import { List, ListItem } from "$lib";
	import {
		ChevronUpCircleIcon,
		ChevronUpDoubleCircleIcon,
		ExclamationmarkTriangleIcon,
	} from "$lib/icons";
</script>

<Doc {doc} extraChildrenDoc={[itemDoc]}>
	<Story>
		<List>
			<ListItem>Item 1</ListItem>
			<ListItem>Item 2</ListItem>
			<ListItem>Item 3</ListItem>
		</List>
	</Story>

	<Story name="With title">
		<List>
			<ListItem>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut nisl aliquam, congue odio
				finibus, convallis tortor.
			</ListItem>
			<ListItem>
				Vestibulum vel rutrum eros, vel accumsan justo. Aliquam maximus eleifend nibh eget
				vulputate. Nunc odio risus, ultricies ac felis et, placerat rutrum dui.
			</ListItem>
			<ListItem>
				Proin nec nunc nec nunc ultricies ultricies. Nullam nec nunc nec nunc ultricies ultricies.
			</ListItem>
		</List>
	</Story>

	<Story name="List item title">
		<List>
			<ListItem title="Item 1">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut nisl aliquam, congue odio
				finibus, convallis tortor.
			</ListItem>
			<ListItem title="Item 2">
				Vestibulum vel rutrum eros, vel accumsan justo. Aliquam maximus eleifend nibh eget
				vulputate. Nunc odio risus, ultricies ac felis et, placerat rutrum dui.
			</ListItem>
			<ListItem title="Item 3">
				Proin nec nunc nec nunc ultricies ultricies. Nullam nec nunc nec nunc ultricies ultricies.
			</ListItem>
		</List>
	</Story>

	<Story name="List item icons">
		<List>
			<ListItem title="Item 1" icon={ExclamationmarkTriangleIcon}>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut nisl aliquam, congue odio
				finibus, convallis tortor.
			</ListItem>
			<ListItem title="Item 2" icon={ChevronUpDoubleCircleIcon}>
				Vestibulum vel rutrum eros, vel accumsan justo. Aliquam maximus eleifend nibh eget
				vulputate. Nunc odio risus, ultricies ac felis et, placerat rutrum dui.
			</ListItem>
			<ListItem title="Item 3" icon={ChevronUpCircleIcon}>
				Proin nec nunc nec nunc ultricies ultricies. Nullam nec nunc nec nunc ultricies ultricies.
			</ListItem>
		</List>
	</Story>
</Doc>
