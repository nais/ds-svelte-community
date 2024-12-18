<script lang="ts">
	import { classes, omit } from "../helpers";
	import type { TableHeaderProps } from "./type.svelte";

	let { children, ...restProps }: TableHeaderProps = $props();
</script>

<thead {...omit(restProps, "class")} class={classes(restProps, "navds-table__header")}>
	{@render children()}
</thead>
