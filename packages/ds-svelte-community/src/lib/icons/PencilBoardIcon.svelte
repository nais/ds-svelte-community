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
		d="M12.503 11.451a.75.75 0 0 1 .098-.33l3.94-6.87a2.486 2.486 0 0 1 3.41-.913 2.52 2.52 0 0 1 .919 3.429l-3.94 6.87a.75.75 0 0 1-.235.25l-3.266 2.17a.75.75 0 0 1-.787.024.76.76 0 0 1-.373-.698zm1.483.271-.134 2.25 1.868-1.242 2.594-4.522L16.58 7.2zm5.587-5.709-.513.894-1.734-1.008.513-.893a.996.996 0 0 1 1.366-.367c.479.279.644.894.368 1.374M6 8.25A2.75 2.75 0 0 0 3.25 11v7A2.75 2.75 0 0 0 6 20.75h12A2.75 2.75 0 0 0 20.75 18v-5.5a.75.75 0 0 0-1.5 0V18c0 .69-.56 1.25-1.25 1.25H9.75v-9.5h1.75a.75.75 0 0 0 0-1.5zm0 11c-.69 0-1.25-.56-1.25-1.25v-2.75h3.5v4zm0-9.5c-.69 0-1.25.56-1.25 1.25v2.75h3.5v-4z"
		clip-rule="evenodd"
	/>
</svg>
