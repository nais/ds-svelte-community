<!--
	@component

	Lists are used to present content in a concise and clear manner, for example to summarize the main points of a text.
-->

<script lang="ts">
	import { omit } from "../helpers";
	import { BodyLong } from "../typography";
	import { SetListContext } from "./context";
	import type { ListProps } from "./types";

	let { as = "ul", size = "medium", children, ...restProps }: ListProps = $props();

	class Context {
		size: ListProps["size"] = $derived(size);
		type: ListProps["as"] = $derived(as);
	}

	let ctx = new Context();
	SetListContext(ctx);
</script>

<BodyLong
	as="div"
	{...omit(restProps, "class")}
	{size}
	class={[restProps.class, "aksel-list", `aksel-list--${size}`]}
>
	<svelte:element this={as} role="list">
		{@render children()}
	</svelte:element>
</BodyLong>
