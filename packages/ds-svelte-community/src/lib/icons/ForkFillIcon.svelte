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
		d="M10 3.25a.75.75 0 0 1 .75.75v3.25a.25.25 0 1 0 .5 0V4a.75.75 0 0 1 1.5 0v3.25a.25.25 0 1 0 .5 0V4a.75.75 0 0 1 1.5 0v5a2.75 2.75 0 0 1-2 2.646V20a.75.75 0 0 1-1.5 0v-8.353A2.75 2.75 0 0 1 9.25 9V4a.75.75 0 0 1 .75-.75"
	/>
</svg>
