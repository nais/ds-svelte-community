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
		d="M4.75 5c0-.69.56-1.25 1.25-1.25h12c.69 0 1.25.56 1.25 1.25v14c0 .69-.56 1.25-1.25 1.25H6c-.69 0-1.25-.56-1.25-1.25zM6 2.25A2.75 2.75 0 0 0 3.25 5v14A2.75 2.75 0 0 0 6 21.75h12A2.75 2.75 0 0 0 20.75 19V5A2.75 2.75 0 0 0 18 2.25zm4.5 2.5a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5z"
		clip-rule="evenodd"
	/>
</svg>
