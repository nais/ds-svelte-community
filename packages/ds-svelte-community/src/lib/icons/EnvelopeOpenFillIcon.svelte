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
		d="M12.364 2.344a.75.75 0 0 0-.728 0L3.37 6.937a.235.235 0 0 0-.003.41l6.913 3.84a.5.5 0 0 0 .243.063h2.955a.5.5 0 0 0 .242-.063l6.917-3.843a.231.231 0 0 0 0-.404zm9.386 6.948a.5.5 0 0 0-.743-.437l-5.266 2.925a.5.5 0 0 0-.11.79l5.265 5.267a.5.5 0 0 0 .854-.354zM19.481 19.75a.5.5 0 0 0 .354-.854l-6-6a.5.5 0 0 0-.354-.146h-2.964a.5.5 0 0 0-.354.146l-6 6a.5.5 0 0 0 .354.854zM2.25 17.481a.5.5 0 0 0 .854.354l5.264-5.265a.5.5 0 0 0-.11-.79L2.627 8.65a.252.252 0 0 0-.377.219z"
		clip-rule="evenodd"
	/>
</svg>
