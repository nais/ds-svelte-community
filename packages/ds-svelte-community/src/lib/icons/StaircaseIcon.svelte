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
		d="M16.25 6a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-3.25V10a.75.75 0 0 1-.75.75h-4.25V14a.75.75 0 0 1-.75.75H7.75V18a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h3.25V14a.75.75 0 0 1 .75-.75h4.25V10a.75.75 0 0 1 .75-.75h4.25z"
		clip-rule="evenodd"
	/>
</svg>
