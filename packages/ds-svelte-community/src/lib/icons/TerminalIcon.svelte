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
		d="M2.25 5A.75.75 0 0 1 3 4.25h18a.75.75 0 0 1 .75.75v14a.75.75 0 0 1-.75.75H3a.75.75 0 0 1-.75-.75zm1.5.75v12.5h16.5V5.75zM11 16a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5h-6A.75.75 0 0 1 11 16M6.78 7.47a.75.75 0 0 0-1.06 1.06L9.19 12l-3.47 3.47a.75.75 0 1 0 1.06 1.06l4-4a.75.75 0 0 0 0-1.06z"
		clip-rule="evenodd"
	/>
</svg>
