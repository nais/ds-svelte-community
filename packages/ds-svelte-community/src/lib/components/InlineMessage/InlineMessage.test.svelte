<script lang="ts">
	import InlineMessage from "./InlineMessage.svelte";
	import type { InlineMessageProps } from "./type";

	interface Props extends Omit<InlineMessageProps, "children"> {
		text: string;
	}

	let { text, ...restProps }: Props = $props();
</script>

<InlineMessage {...restProps}>{text}</InlineMessage>
