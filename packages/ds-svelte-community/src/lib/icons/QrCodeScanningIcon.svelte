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
		d="M19.25 4.75V8a.75.75 0 0 0 1.5 0V4a.75.75 0 0 0-.75-.75h-4a.75.75 0 0 0 0 1.5zM4.75 16v3.25H8a.75.75 0 0 1 0 1.5H4a.75.75 0 0 1-.75-.75v-4a.75.75 0 0 1 1.5 0m14.5 0v3.25H16a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 .75-.75v-4a.75.75 0 0 0-1.5 0M4.75 8V4.75H8a.75.75 0 0 0 0-1.5H4a.75.75 0 0 0-.75.75v4a.75.75 0 0 0 1.5 0m1-1.5a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-.75.75h-4a.75.75 0 0 1-.75-.75zm1.5.75v2.5h2.5v-2.5zm6.25-1.5a.75.75 0 0 0-.75.75v4c0 .414.336.75.75.75h4a.75.75 0 0 0 .75-.75v-4a.75.75 0 0 0-.75-.75zm.75 4v-2.5h2.5v2.5zm-8.5 3.75a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-.75.75h-4a.75.75 0 0 1-.75-.75zm1.5.75v2.5h2.5v-2.5zm6.25-1.5a.75.75 0 0 0-.75.75v1c0 .414.336.75.75.75h1a.75.75 0 0 0 .75-.75v-1a.75.75 0 0 0-.75-.75zm-.75 3.75a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-.75.75h-1a.75.75 0 0 1-.75-.75zm3.75-3.75a.75.75 0 0 0-.75.75v1c0 .414.336.75.75.75h1a.75.75 0 0 0 .75-.75v-1a.75.75 0 0 0-.75-.75z"
		clip-rule="evenodd"
	/>
</svg>
