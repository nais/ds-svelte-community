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
		d="M14.25 3.75a.5.5 0 0 0-.5-.5H4a.75.75 0 0 0-.75.75v16c0 .414.336.75.75.75h9.75a.5.5 0 0 0 .5-.5zm1.5 16.5a.5.5 0 0 0 .5.5H20a.75.75 0 0 0 .75-.75V4a.75.75 0 0 0-.75-.75h-3.75a.5.5 0 0 0-.5.5z"
		clip-rule="evenodd"
	/>
</svg>
