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
		d="M14.25 3.75a.5.5 0 0 0-.5-.5h-3.5a.5.5 0 0 0-.5.5v16.5a.5.5 0 0 0 .5.5h3.5a.5.5 0 0 0 .5-.5zm1.5 16.5a.5.5 0 0 0 .5.5H20a.75.75 0 0 0 .75-.75V4a.75.75 0 0 0-.75-.75h-3.75a.5.5 0 0 0-.5.5zM4 3.25h3.75a.5.5 0 0 1 .5.5v16.5a.5.5 0 0 1-.5.5H4a.75.75 0 0 1-.75-.75V4A.75.75 0 0 1 4 3.25"
		clip-rule="evenodd"
	/>
</svg>
