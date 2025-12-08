<!--
	@component
	Chat is a component for communicating a dialog between two or more parties.

	Read more about this component in the [Aksel documentation](https://aksel.nav.no/komponenter/core/chat).
-->

<script lang="ts" module>
	import { getContext, setContext } from "svelte";
	import type { AkselColor } from "../Theme/Theme.svelte";
	import type { ChatContext, ChatVariant } from "./type";

	const contextKey = Symbol("ChatContext");

	export function GetChatContext(): ChatContext | undefined {
		return getContext<ChatContext>(contextKey);
	}

	function variantToColor(variant: ChatVariant): AkselColor {
		switch (variant) {
			case "neutral":
				return "neutral";
			case "subtle":
				return "neutral";
			case "info":
				return "info";
			default:
				return "neutral";
		}
	}
</script>

<script lang="ts">
	import { omit } from "../helpers";
	import BodyLong from "../typography/BodyLong/BodyLong.svelte";
	import type { ChatProps } from "./type";

	let {
		children,
		name,
		timestamp,
		avatar,
		position = "left",
		variant = "neutral",
		toptextPosition,
		size = "medium",
		toptextHeadingLevel = "3",
		...restProps
	}: ChatProps = $props();

	// eslint-disable-next-line svelte/prefer-writable-derived -- bubbleIndex needs to be mutable during render
	let bubbleIndex = $state(0);

	class Context implements ChatContext {
		size = $derived(size);
		toptextHeadingLevel = $derived(toptextHeadingLevel);

		getName(): string | undefined {
			if (name && bubbleIndex === 0) {
				bubbleIndex++;
				return name;
			}
			bubbleIndex++;
			return undefined;
		}

		getTimestamp(): string | undefined {
			// This is called after getName, so check if we just incremented from 0 to 1
			if (timestamp && bubbleIndex === 1) {
				return timestamp;
			}
			return undefined;
		}
	}

	const ctx = new Context();
	setContext<ChatContext>(contextKey, ctx);

	// Reset bubble index before each render
	$effect.pre(() => {
		bubbleIndex = 0;
	});
</script>

<div
	{...omit(restProps, "class")}
	class={[
		restProps.class,
		"aksel-chat",
		`aksel-chat--${position}`,
		`aksel-chat--top-text-${toptextPosition ?? position}`,
		`aksel-chat--${size}`,
		`aksel-chat--${variant}`,
	]}
	data-color={variantToColor(variant)}
	data-variant={variant}
>
	{#if avatar}
		<div class="aksel-chat__avatar" aria-hidden="true">
			{#if typeof avatar === "string"}
				{avatar}
			{:else}
				{@render avatar()}
			{/if}
		</div>
	{/if}
	<BodyLong as="div" {size} class="aksel-chat__bubble-wrapper">
		{@render children()}
	</BodyLong>
</div>
