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
		d="M11.47 1.57a.75.75 0 0 1 1.06 0l9.9 9.9a.75.75 0 0 1 0 1.06l-9.9 9.9a.75.75 0 0 1-1.06 0l-9.9-9.9a.75.75 0 0 1 0-1.06zM3.16 12 12 20.839 20.838 12 12 3.161z"
		clip-rule="evenodd"
	/>
</svg>
