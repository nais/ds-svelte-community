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
		d="M13 2.25a.25.25 0 0 1 .25.25v5c0 .69.56 1.25 1.25 1.25h5a.25.25 0 0 1 .25.25v7.5c0 .69-.56 1.25-1.25 1.25h-9c-.69 0-1.25-.56-1.25-1.25v-13c0-.69.56-1.25 1.25-1.25zm2.177.866a.25.25 0 0 0-.427.177V7c0 .138.112.25.25.25h3.707a.25.25 0 0 0 .177-.427zM6.75 6.5a.25.25 0 0 0-.25-.25h-1c-.69 0-1.25.56-1.25 1.25v13c0 .69.56 1.25 1.25 1.25h9c.69 0 1.25-.56 1.25-1.25v-1a.25.25 0 0 0-.25-.25h-6a2.75 2.75 0 0 1-2.75-2.75z"
		clip-rule="evenodd"
	/>
</svg>
