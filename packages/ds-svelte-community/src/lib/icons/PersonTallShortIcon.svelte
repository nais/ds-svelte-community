<script lang="ts">
	import type { Snippet } from "svelte";

	type Props = {
		/**
		 * Title of the icon, used for accessibility
		 */
		title?: string;

		children?: Snippet;

		[key: string]: unknown;
	};

	let { title, children, ...restProps }: Props = $props();

	const id = $props.id();
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	width="1em"
	height="1em"
	fill="none"
	focusable="false"
	role="img"
	viewBox="0 0 24 24"
	aria-labelledby={title ? id : undefined}
	{...restProps}
>
	{#if title}
		<title {id}>{title}</title>
	{/if}
	{#if children}
		{@render children()}
	{/if}
	<path
		fill="currentColor"
		fill-rule="evenodd"
		d="M6.75 5.5a1.75 1.75 0 1 1 3.5 0 1.75 1.75 0 0 1-3.5 0M8.5 2.25a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5m6.75 10.25a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0m1.25-2.75a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5m-2.072 7.422c.478-.565 1.189-.922 2.072-.922s1.594.357 2.072.922c.465.548.678 1.253.678 1.928V21a.75.75 0 0 1-1.5 0v-1.9c0-.375-.12-.72-.322-.96-.189-.222-.478-.39-.928-.39s-.74.168-.928.39c-.202.24-.322.585-.322.96V21a.75.75 0 0 1-1.5 0v-1.9c0-.675.213-1.38.678-1.928M8.5 10.25c-1.204 0-2.161.459-2.81 1.19-.638.716-.94 1.65-.94 2.56v7a.75.75 0 0 0 1.5 0v-7c0-.59.198-1.156.56-1.564.351-.395.894-.686 1.69-.686s1.339.291 1.69.686c.362.408.56.974.56 1.564v7a.75.75 0 0 0 1.5 0v-7c0-.91-.302-1.844-.94-2.56-.649-.731-1.606-1.19-2.81-1.19"
		clip-rule="evenodd"
	/>
</svg>
