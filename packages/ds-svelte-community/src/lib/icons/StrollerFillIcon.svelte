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
		d="M13.47 2.97a.75.75 0 0 1 .53-.22c2.018 0 3.74.242 4.95 1.15 1.269.952 1.8 2.486 1.8 4.6V9c0 1.557-.255 2.997-1.015 4.06-.796 1.115-2.05 1.69-3.735 1.69h-6c-1.685 0-2.94-.575-3.735-1.69C5.505 11.998 5.25 10.558 5.25 9V6.5A1.75 1.75 0 0 0 3.5 4.75a.75.75 0 0 1 0-1.5A3.25 3.25 0 0 1 6.75 6.5v.75h6.5V3.5a.75.75 0 0 1 .22-.53M6.75 18.5a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0m7 0a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0"
		clip-rule="evenodd"
	/>
</svg>
