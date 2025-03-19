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
		d="M4 4a.75.75 0 0 1 .75.75v6.5h2a.75.75 0 0 1 0 1.5h-2v6.5a.75.75 0 0 1-1.5 0V4.75A.75.75 0 0 1 4 4m5.25 7.25a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5zm3.25.75a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75m4.75-.75a.75.75 0 0 0 0 1.5h2v6.5a.75.75 0 0 0 1.5 0V4.75a.75.75 0 0 0-1.5 0v6.5z"
		clip-rule="evenodd"
	/>
</svg>
