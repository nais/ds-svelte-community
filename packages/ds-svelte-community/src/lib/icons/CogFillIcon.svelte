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
		d="M9.814 2.823a.75.75 0 0 1 .73-.573h2.913a.75.75 0 0 1 .729.573l.459 1.89q.326.119.637.265l1.675-1.02a.75.75 0 0 1 .92.11l2.056 2.054a.75.75 0 0 1 .11.92l-1.02 1.676q.146.311.264.637l1.89.46a.75.75 0 0 1 .573.728v2.914a.75.75 0 0 1-.573.729l-1.89.459a8 8 0 0 1-.265.637l1.02 1.675a.75.75 0 0 1-.11.92l-2.054 2.056a.75.75 0 0 1-.92.11l-1.676-1.02q-.311.145-.637.264l-.46 1.89a.75.75 0 0 1-.728.573h-2.914a.75.75 0 0 1-.729-.573l-.459-1.89a8 8 0 0 1-.637-.264l-1.675 1.02a.75.75 0 0 1-.92-.11l-2.056-2.055a.75.75 0 0 1-.11-.92l1.02-1.676a8 8 0 0 1-.264-.637l-1.89-.46a.75.75 0 0 1-.573-.728v-2.914a.75.75 0 0 1 .573-.729l1.89-.459q.118-.326.265-.637l-1.02-1.675a.75.75 0 0 1 .11-.92l2.054-2.056a.75.75 0 0 1 .92-.11l1.676 1.02q.311-.146.637-.264zM12 10.25a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5"
		clip-rule="evenodd"
	/>
</svg>
