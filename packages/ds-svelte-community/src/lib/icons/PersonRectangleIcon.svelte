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
		d="M5.75 3.75v16.5h12.5V3.75zm-1.5-.25c0-.69.56-1.25 1.25-1.25h13c.69 0 1.25.56 1.25 1.25v17c0 .69-.56 1.25-1.25 1.25h-13c-.69 0-1.25-.56-1.25-1.25zM12 7.25a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5M8.25 9.5a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0m1.805 7.055a2.75 2.75 0 0 1 4.667 1.552.75.75 0 1 0 1.484-.214 4.25 4.25 0 0 0-8.413 0 .75.75 0 0 0 1.485.214 2.75 2.75 0 0 1 .777-1.552"
		clip-rule="evenodd"
	/>
</svg>
