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
		d="M16.47 11.03a.75.75 0 0 0 1.06 0l3.5-3.5a.75.75 0 0 0 0-1.06l-3.5-3.5a.75.75 0 1 0-1.06 1.06l2.22 2.22H9.5a.75.75 0 1 0 0 1.5h9.19l-2.22 2.22a.75.75 0 0 0 0 1.06m-10 10a.75.75 0 1 0 1.06-1.06l-2.22-2.22h9.19a.75.75 0 1 0 0-1.5H5.31l2.22-2.22a.75.75 0 1 0-1.06-1.06l-3.5 3.5a.75.75 0 0 0 0 1.06z"
	/>
</svg>
