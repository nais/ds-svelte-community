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
		d="M2.25 6A.75.75 0 0 1 3 5.25h18a.75.75 0 0 1 .75.75v3a.25.25 0 0 1-.25.25h-19A.25.25 0 0 1 2.25 9zm0 5a.25.25 0 0 1 .25-.25h19a.25.25 0 0 1 .25.25v7a.75.75 0 0 1-.75.75H3a.75.75 0 0 1-.75-.75zM6 14.25a.75.75 0 0 0 0 1.5h2a.75.75 0 0 0 0-1.5z"
		clip-rule="evenodd"
	/>
</svg>
