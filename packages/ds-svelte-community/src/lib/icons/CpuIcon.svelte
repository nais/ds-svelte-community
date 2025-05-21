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
		d="M12 2.25a.75.75 0 0 1 .75.75v1.25h1.5V3a.75.75 0 0 1 1.5 0v1.25H17A2.75 2.75 0 0 1 19.75 7v1.25H21a.75.75 0 0 1 0 1.5h-1.25v1.5H21a.75.75 0 0 1 0 1.5h-1.25v1.5H21a.75.75 0 0 1 0 1.5h-1.25V17A2.75 2.75 0 0 1 17 19.75h-1.25V21a.75.75 0 0 1-1.5 0v-1.25h-1.5V21a.75.75 0 0 1-1.5 0v-1.25h-1.5V21a.75.75 0 0 1-1.5 0v-1.25H7A2.75 2.75 0 0 1 4.25 17v-1.25H3a.75.75 0 0 1 0-1.5h1.25v-1.5H3a.75.75 0 0 1 0-1.5h1.25v-1.5H3a.75.75 0 0 1 0-1.5h1.25V7A2.75 2.75 0 0 1 7 4.25h1.25V3a.75.75 0 0 1 1.5 0v1.25h1.5V3a.75.75 0 0 1 .75-.75M5.75 9v8c0 .69.56 1.25 1.25 1.25h10c.69 0 1.25-.56 1.25-1.25V7c0-.69-.56-1.25-1.25-1.25H7c-.69 0-1.25.56-1.25 1.25zM8 7.25a.75.75 0 0 0-.75.75v8c0 .414.336.75.75.75h8a.75.75 0 0 0 .75-.75V8a.75.75 0 0 0-.75-.75zm.75 8v-6.5h6.5v6.5z"
		clip-rule="evenodd"
	/>
</svg>
