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
		d="M9.5 2.25a.75.75 0 0 0-.75.75v2.5c0 .414.336.75.75.75h5a.75.75 0 0 0 .75-.75V3a.75.75 0 0 0-.75-.75zm-2 2H6a.75.75 0 0 0-.75.75v16c0 .414.336.75.75.75h12a.75.75 0 0 0 .75-.75V5a.75.75 0 0 0-.75-.75h-1.5a.25.25 0 0 0-.25.25v2a.75.75 0 0 1-.75.75h-7a.75.75 0 0 1-.75-.75v-2a.25.25 0 0 0-.25-.25M8.25 11a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75M9 13.25a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5zM8.25 17a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75"
		clip-rule="evenodd"
	/>
</svg>
