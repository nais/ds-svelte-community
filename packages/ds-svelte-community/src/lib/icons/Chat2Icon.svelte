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
		d="M4.75 5A.25.25 0 0 1 5 4.75h11a.25.25 0 0 1 .25.25v.5a.75.75 0 0 0 1.5 0V5A1.75 1.75 0 0 0 16 3.25H5A1.75 1.75 0 0 0 3.25 5v10a.75.75 0 0 0 1.085.67l1.502-.75a.75.75 0 0 0-.671-1.341l-.416.207zM9 8.75a.25.25 0 0 0-.25.25v8c0 .138.112.25.25.25h7a.75.75 0 0 1 .335.08l2.915 1.457V9a.25.25 0 0 0-.25-.25zM7.25 9c0-.966.784-1.75 1.75-1.75h10c.966 0 1.75.784 1.75 1.75v11a.75.75 0 0 1-1.085.67l-3.842-1.92H9A1.75 1.75 0 0 1 7.25 17zm3 4a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 0 1.5H11a.75.75 0 0 1-.75-.75m3.75-.75a.75.75 0 0 0 0 1.5h.01a.75.75 0 0 0 0-1.5zm2.25.75a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 0 1.5H17a.75.75 0 0 1-.75-.75"
		clip-rule="evenodd"
	/>
</svg>
