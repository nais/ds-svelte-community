<script lang="ts">
	import { omit } from "../helpers";
	import type { BodyProps } from "./type.svelte";

	let { children, ...restProps }: BodyProps = $props();
</script>

<tbody {...omit(restProps, "class")} class={[restProps.class, "aksel-table__body"]}>
	<!-- Content -->
	{@render children()}
</tbody>
