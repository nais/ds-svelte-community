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
		d="M6.25 3A.75.75 0 0 1 7 2.25h10a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-.75.75H7A.75.75 0 0 1 6.25 7zm1.5.75v2.5h8.5v-2.5zM6.25 10A.75.75 0 0 1 7 9.25h10a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-.75.75H7a.75.75 0 0 1-.75-.75zm1.5.75v2.5h8.5v-2.5zM7 16.25a.75.75 0 0 0-.75.75v4c0 .414.336.75.75.75h10a.75.75 0 0 0 .75-.75v-4a.75.75 0 0 0-.75-.75zm.75 4v-2.5h8.5v2.5z"
		clip-rule="evenodd"
	/>
</svg>
