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
		d="M8.667 3.25c-1.38 0-2.417 1.178-2.417 2.528v12.444c0 1.35 1.037 2.528 2.417 2.528h6.666c1.38 0 2.417-1.178 2.417-2.528V5.778c0-1.35-1.037-2.528-2.417-2.528zM12 16.75a.75.75 0 0 0 0 1.5h.01a.75.75 0 0 0 0-1.5z"
		clip-rule="evenodd"
	/>
</svg>
