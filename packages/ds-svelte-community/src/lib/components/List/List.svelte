<!--
	@component

	Lists are used to present content in a concise and clear manner, for example to summarize the main points of a text.
-->

<script lang="ts" module>
	const headingSizeMap: Record<Exclude<ListProps["size"], undefined>, HeadingProps["size"]> = {
		small: "xsmall",
		medium: "small",
		large: "medium",
	};
</script>

<script lang="ts">
	import { omit } from "../helpers";
	import { BodyLong, BodyShort, Heading } from "../typography";
	import type { HeadingProps } from "../typography/Heading/type";
	import { SetListContext } from "./context";
	import type { ListProps } from "./types";

	let {
		title,
		as = "ul",
		description,
		headingTag = "h3",
		size = "medium",
		children,
		...restProps
	}: ListProps = $props();

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
	{#if title}
		{#if typeof title == "string"}
			<Heading size={headingSizeMap[size]} as={headingTag}>
				{title}
			</Heading>
		{:else}
			{@render title()}
		{/if}
	{/if}

	{#if description}
		{#if typeof description == "string"}
			<BodyShort {size}>{description}</BodyShort>
		{:else}
			{@render description()}
		{/if}
	{/if}

	<svelte:element this={as} role="list">
		{@render children()}
	</svelte:element>
</BodyLong>
