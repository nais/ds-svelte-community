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
		d="M12 2.25a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5m0 12A6.75 6.75 0 0 0 5.25 21a.75.75 0 0 0 .75.75h6.657c.214 0 .334-.255.213-.43A5 5 0 0 1 12 18.5c0-1.438.607-2.735 1.58-3.647.148-.14.098-.394-.1-.439A6.8 6.8 0 0 0 12 14.25m5 1a.75.75 0 0 1 .75.75v1.75h1.75a.75.75 0 0 1 0 1.5h-1.75V21a.75.75 0 0 1-1.5 0v-1.75H14.5a.75.75 0 0 1 0-1.5h1.75V16a.75.75 0 0 1 .75-.75"
		clip-rule="evenodd"
	/>
</svg>
