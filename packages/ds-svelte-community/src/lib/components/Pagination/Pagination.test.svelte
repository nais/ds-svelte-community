<script lang="ts">
	import Pagination from "./Pagination.svelte";
	import type { PaginationProps } from "./type";

	let props: PaginationProps = $props();
</script>

<Pagination {...props}></Pagination>
