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
		d="M8 4.75a.25.25 0 0 0-.25.25v13.19l3.72-3.72a.75.75 0 0 1 1.06 0l3.72 3.72V5a.25.25 0 0 0-.25-.25zM6.25 5c0-.966.784-1.75 1.75-1.75h8c.966 0 1.75.784 1.75 1.75v15a.75.75 0 0 1-1.28.53L12 16.06l-4.47 4.47A.75.75 0 0 1 6.25 20z"
		clip-rule="evenodd"
	/>
</svg>
