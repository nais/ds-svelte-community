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
		d="M10.75 4.5a.25.25 0 0 1 .25-.25h2a.25.25 0 0 1 .25.25v.755A6 6 0 0 0 13 5.25h-2q-.126 0-.25.005zm-1.5 1.021V4.5c0-.966.784-1.75 1.75-1.75h2c.966 0 1.75.784 1.75 1.75v1.021c2.32.74 4 2.914 4 5.479v1.25H19A2.75 2.75 0 0 1 21.75 15v3A1.75 1.75 0 0 1 20 19.75h-1.25V20A1.75 1.75 0 0 1 17 21.75H7A1.75 1.75 0 0 1 5.25 20v-.25H4A1.75 1.75 0 0 1 2.25 18v-3A2.75 2.75 0 0 1 5 12.25h.25V11a5.75 5.75 0 0 1 4-5.479M19 13.75a.25.25 0 0 0-.25.25v4c0 .138.112.25.25.25h1a.25.25 0 0 0 .25-.25v-3c0-.69-.56-1.25-1.25-1.25M3.75 15c0-.69.56-1.25 1.25-1.25a.25.25 0 0 1 .25.25v4a.25.25 0 0 1-.25.25H4a.25.25 0 0 1-.25-.25zm5.5-5a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75m.75 3.25A1.75 1.75 0 0 0 8.25 15v2c0 .966.784 1.75 1.75 1.75h4A1.75 1.75 0 0 0 15.75 17v-2A1.75 1.75 0 0 0 14 13.25zM9.75 15a.25.25 0 0 1 .25-.25h4a.25.25 0 0 1 .25.25v2a.25.25 0 0 1-.25.25h-4a.25.25 0 0 1-.25-.25z"
		clip-rule="evenodd"
	/>
</svg>
