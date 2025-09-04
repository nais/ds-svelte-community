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
		d="M10 13.25a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-.75.75H4a.75.75 0 0 1-.75-.75v-6a.75.75 0 0 1 .75-.75zm10 0a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-.75.75h-6a.75.75 0 0 1-.75-.75v-6a.75.75 0 0 1 .75-.75zm-10-10a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-.75.75H4a.75.75 0 0 1-.75-.75V4A.75.75 0 0 1 4 3.25zm10 0a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-.75.75h-6a.75.75 0 0 1-.75-.75V4a.75.75 0 0 1 .75-.75z"
	/>
</svg>
