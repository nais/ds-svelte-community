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
		d="M7.75 3.75V7.5a.75.75 0 0 1-1.5 0v-4c0-.69.56-1.25 1.25-1.25h9c.69 0 1.25.56 1.25 1.25v7a.75.75 0 0 1-1.5 0V3.75zm-1.75 7a.25.25 0 0 0-.25.25v9.25h12.5v-6.5H12a.75.75 0 0 1-.75-.75v-2a.25.25 0 0 0-.25-.25zM4.25 11c0-.966.784-1.75 1.75-1.75h5c.966 0 1.75.784 1.75 1.75v1.25h5.75c.69 0 1.25.56 1.25 1.25v7c0 .69-.56 1.25-1.25 1.25h-13c-.69 0-1.25-.56-1.25-1.25zM10 4.75a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5z"
		clip-rule="evenodd"
	/>
</svg>
