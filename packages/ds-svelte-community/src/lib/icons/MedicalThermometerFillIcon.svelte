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
		d="M18.237 3.177a1.75 1.75 0 0 0-2.474 0L8.348 10.59a3.75 3.75 0 0 0-1.098 2.652v2.446l-1.28 1.28a.75.75 0 1 0 1.06 1.061l1.28-1.28h2.447a3.75 3.75 0 0 0 2.652-1.098l7.414-7.414a1.75 1.75 0 0 0 0-2.475zM17.03 8.03a.75.75 0 0 0-1.06-1.06l-3 3a.75.75 0 1 0 1.06 1.06zm-12 12a.75.75 0 1 0-1.06-1.06l-1 1a.75.75 0 1 0 1.06 1.06z"
		clip-rule="evenodd"
	/>
</svg>
