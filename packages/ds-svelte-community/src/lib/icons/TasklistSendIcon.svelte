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
		d="M5.75 20.25V3.75h12.5v9.75a.75.75 0 0 0 1.5 0v-10c0-.69-.56-1.25-1.25-1.25h-13c-.69 0-1.25.56-1.25 1.25v17c0 .69.56 1.25 1.25 1.25h1.742a.75.75 0 0 0 0-1.5zm5.2-14.1a.75.75 0 0 1 .15 1.05l-1.5 2a.75.75 0 0 1-1.13.08l-1-1a.75.75 0 0 1 1.06-1.06l.389.388L9.9 6.3a.75.75 0 0 1 1.05-.15M13 7.25a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 0-1.5zm-3.514 5.204a.75.75 0 0 1 .819-.14l9 4a.75.75 0 0 1 0 1.371l-9 4a.75.75 0 0 1-1.007-.948L10.699 17l-1.401-3.737a.75.75 0 0 1 .188-.809m1.845 1.958.689 1.838H14a.75.75 0 0 1 0 1.5h-1.98l-.69 1.838L17.154 17z"
		clip-rule="evenodd"
	/>
</svg>
