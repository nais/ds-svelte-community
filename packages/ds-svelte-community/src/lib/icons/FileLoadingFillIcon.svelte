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
		d="M13.25 7.5v-4a.25.25 0 0 0-.25-.25H6.5c-.69 0-1.25.56-1.25 1.25v15c0 .69.56 1.25 1.25 1.25h11c.69 0 1.25-.56 1.25-1.25V9a.25.25 0 0 0-.25-.25h-4c-.69 0-1.25-.56-1.25-1.25M15 7.25a.25.25 0 0 1-.25-.25V4.293a.25.25 0 0 1 .427-.177l2.707 2.707a.25.25 0 0 1-.177.427zM9.75 14a2.25 2.25 0 0 1 4.5 0 .75.75 0 0 0 1.5 0A3.751 3.751 0 1 0 12 17.75a.75.75 0 0 0 0-1.5A2.25 2.25 0 0 1 9.75 14"
		clip-rule="evenodd"
	/>
</svg>
