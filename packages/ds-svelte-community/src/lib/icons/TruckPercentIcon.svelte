<script lang="ts" module>
	import newUniqueId from "$lib/components/local-unique-id";
</script>

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

	const id = newUniqueId();
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
		d="M2.25 5.5c0-.69.56-1.25 1.25-1.25h11c.69 0 1.25.56 1.25 1.25v1.75h2.912c.51 0 .97.311 1.16.786l1.928 4.82V16.5c0 .69-.56 1.25-1.25 1.25h-.75a2.5 2.5 0 0 1-5 0h-5a2.5 2.5 0 0 1-5 0H3.5c-.69 0-1.25-.56-1.25-1.25zm7 10.75a2.5 2.5 0 0 0-2-1c-.818 0-1.544.393-2 1h-1.5V5.75h10.5v10.5zm6.5-.5a2.496 2.496 0 0 1 3.5.5h1v-3.106L18.492 8.75H15.75zm.5 2a1 1 0 1 1 2 0 1 1 0 0 1-2 0m-9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-1.28-3.78a.75.75 0 1 0 1.06 1.06l5-5a.75.75 0 0 0-1.06-1.06zM7 7.875a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25M9.875 13a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0"
		clip-rule="evenodd"
	/>
</svg>
