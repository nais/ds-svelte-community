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
		d="M6.25 3.5c0-.69.56-1.25 1.25-1.25h9c.69 0 1.25.56 1.25 1.25v7a.25.25 0 0 1-.25.25h-3.028a.265.265 0 0 1-.257-.23A3.25 3.25 0 0 0 11 7.75H6.5a.25.25 0 0 1-.25-.25zM10 4.75a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5zm-4 4.5A1.75 1.75 0 0 0 4.25 11v9.5c0 .69.56 1.25 1.25 1.25h13c.69 0 1.25-.56 1.25-1.25v-7c0-.69-.56-1.25-1.25-1.25h-5.75V11A1.75 1.75 0 0 0 11 9.25z"
		clip-rule="evenodd"
	/>
</svg>
