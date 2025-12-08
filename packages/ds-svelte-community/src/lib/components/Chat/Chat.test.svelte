<script lang="ts">
	import Chat from "./Chat.svelte";
	import ChatBubble from "./ChatBubble.svelte";
	import type { ChatProps } from "./type";

	interface Props extends Omit<ChatProps, "children" | "avatar"> {
		bubbles: string[];
		avatar?: string;
	}

	let { bubbles, avatar, ...restProps }: Props = $props();
</script>

<Chat {...restProps} {avatar}>
	{#each bubbles as bubble, i (i)}
		<ChatBubble>{bubble}</ChatBubble>
	{/each}
</Chat>
