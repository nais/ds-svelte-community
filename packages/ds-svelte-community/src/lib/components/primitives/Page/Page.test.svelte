<script lang="ts">
	import Page from "./Page.svelte";
	import PageBlock from "./PageBlock.svelte";

	import type { PageProps } from "./type";

	type $$Props = PageProps;
</script>

<Page {...$$props}>
	<PageBlock gutters width="lg">Header</PageBlock>
	<PageBlock gutters width="lg">Content</PageBlock>
	<svelte:fragment slot="footer">
		<PageBlock as="footer">Footer</PageBlock>
	</svelte:fragment>
</Page>
