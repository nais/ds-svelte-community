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
		d="M8.25 4A.75.75 0 0 1 9 3.25h6a.75.75 0 0 1 .75.75v4.25H20a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-.75.75h-4.25V20a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v-4.25H4a.75.75 0 0 1-.75-.75V9A.75.75 0 0 1 4 8.25h4.25zm1.5.75V9a.75.75 0 0 1-.75.75H4.75v4.5H9a.75.75 0 0 1 .75.75v4.25h4.5V15a.75.75 0 0 1 .75-.75h4.25v-4.5H15a.75.75 0 0 1-.75-.75V4.75z"
		clip-rule="evenodd"
	/>
</svg>
