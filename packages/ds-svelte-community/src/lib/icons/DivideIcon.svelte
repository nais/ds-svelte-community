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
		d="M10.5 8a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0m0 8a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0M6 11.25a.75.75 0 0 0 0 1.5h12a.75.75 0 0 0 0-1.5z"
		clip-rule="evenodd"
	/>
</svg>
