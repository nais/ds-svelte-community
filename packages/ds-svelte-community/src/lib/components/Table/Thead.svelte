<script lang="ts">
	import { omit } from "../helpers";
	import type { TableHeaderProps } from "./type.svelte";

	let { children, ...restProps }: TableHeaderProps = $props();
</script>

<thead {...omit(restProps, "class")} class={[restProps.class, "aksel-table__header"]}>
	{@render children()}
</thead>
