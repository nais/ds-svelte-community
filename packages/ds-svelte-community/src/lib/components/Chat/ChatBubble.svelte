<!--
	@component
	ChatBubble is a subcomponent of Chat for displaying individual message bubbles.

	Read more about this component in the [Aksel documentation](https://aksel.nav.no/komponenter/core/chat).
-->

<script lang="ts">
	import { omit } from "../helpers";
	import Detail from "../typography/Detail/Detail.svelte";
	import Heading from "../typography/Heading/Heading.svelte";
	import { GetChatContext } from "./Chat.svelte";
	import type { ChatBubbleProps } from "./type";

	let {
		children,
		name: nameProp,
		timestamp: timestampProp,
		toptextPosition,
		toptextHeadingLevel: toptextHeadingLevelProp,
		...restProps
	}: ChatBubbleProps = $props();

	const ctx = GetChatContext();

	// Get name and timestamp from context (only first bubble) or from props
	const contextName = ctx?.getName();
	const contextTimestamp = ctx?.getTimestamp();

	const name = $derived(nameProp ?? contextName);
	const timestamp = $derived(timestampProp ?? contextTimestamp);
	const toptextHeadingLevel = $derived(toptextHeadingLevelProp ?? ctx?.toptextHeadingLevel ?? "3");

	const headingAs = $derived(`h${toptextHeadingLevel}` as "h2" | "h3" | "h4" | "h5" | "h6");
</script>

<div {...omit(restProps, "class")} class={[restProps.class, "aksel-chat__bubble"]}>
	{#if timestamp || name}
		<Heading
			size="xsmall"
			as={headingAs}
			class={[
				"aksel-chat__top-text",
				{
					[`aksel-chat__top-text--${toptextPosition}`]: toptextPosition,
				},
			]}
		>
			{#if name}
				<Detail as="span">{name}</Detail>
			{/if}
			{#if name && timestamp}
				<Detail as="span" aria-hidden="true">•</Detail>
			{/if}
			{#if timestamp}
				<Detail as="span">{timestamp}</Detail>
			{/if}
		</Heading>
	{/if}
	{@render children()}
</div>
