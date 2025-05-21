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
		d="M12 2.25a.75.75 0 0 1 .75.75v2h1.5V3a.75.75 0 0 1 1.5 0v2H17a2 2 0 0 1 2 2v1.25h2a.75.75 0 0 1 0 1.5h-2v1.5h2a.75.75 0 0 1 0 1.5h-2v1.5h2a.75.75 0 0 1 0 1.5h-2V17a2 2 0 0 1-2 2h-1.25v2a.75.75 0 0 1-1.5 0v-2h-1.5v2a.75.75 0 0 1-1.5 0v-2h-1.5v2a.75.75 0 0 1-1.5 0v-2H7a2 2 0 0 1-2-2v-1.25H3a.75.75 0 0 1 0-1.5h2v-1.5H3a.75.75 0 0 1 0-1.5h2v-1.5H3a.75.75 0 0 1 0-1.5h2V7a2 2 0 0 1 2-2h1.25V3a.75.75 0 0 1 1.5 0v2h1.5V3a.75.75 0 0 1 .75-.75m-4 5a.75.75 0 0 0-.75.75v8c0 .414.336.75.75.75h8a.75.75 0 0 0 .75-.75V8a.75.75 0 0 0-.75-.75zm.75 8v-6.5h6.5v6.5z"
		clip-rule="evenodd"
	/>
</svg>
