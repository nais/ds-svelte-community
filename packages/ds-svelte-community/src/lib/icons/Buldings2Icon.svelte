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
		d="M10.25 3a.75.75 0 0 1 .75-.75h10a.75.75 0 0 1 .75.75v18a.75.75 0 0 1-.75.75H3a.75.75 0 0 1-.75-.75v-8a.75.75 0 0 1 .75-.75h7.25V3Zm3.5 10a.75.75 0 0 0-.75-.75h-1.25v-8.5h8.5v16.5h-6.5V13Zm-1.5.75v6.5h-8.5v-6.5h8.5Zm6.5-8.25a.75.75 0 0 0-1.5 0v1a.75.75 0 0 0 1.5 0v-1ZM5.5 15.25a.75.75 0 0 0 0 1.5h1a.75.75 0 0 0 0-1.5h-1Zm2.25.75a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75Zm11-6.5a.75.75 0 0 0-1.5 0v1a.75.75 0 0 0 1.5 0v-1ZM18 12.75a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0v-1a.75.75 0 0 1 .75-.75Z"
		clip-rule="evenodd"
	/>
</svg>
