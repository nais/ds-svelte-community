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
		d="M6.25 4A.75.75 0 0 1 7 3.25h13a.75.75 0 0 1 .75.75v13A3.75 3.75 0 0 1 17 20.75H5.5a2.25 2.25 0 0 1-2.25-2.25V6A.75.75 0 0 1 4 5.25h2.25zm0 14.5a.75.75 0 0 1-1.5 0V6.75h1.5zm13-1.5A2.25 2.25 0 0 1 17 19.25H7.622q.126-.354.128-.75V4.75h11.5zm-10-9a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-.75.75h-7a.75.75 0 0 1-.75-.75zm1.5.75v2.5h5.5v-2.5zM9.25 16a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5h-7a.75.75 0 0 1-.75-.75"
		clip-rule="evenodd"
	/>
</svg>
