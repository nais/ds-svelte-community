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
		d="M20.75 4a.75.75 0 0 1-.75.75H4a.75.75 0 0 1 0-1.5h16a.75.75 0 0 1 .75.75M10 6.25a.75.75 0 0 1 .75.75v13a.75.75 0 0 1-.75.75H6a.75.75 0 0 1-.75-.75V7A.75.75 0 0 1 6 6.25zm8.75.75a.75.75 0 0 0-.75-.75h-4a.75.75 0 0 0-.75.75v7c0 .414.336.75.75.75h4a.75.75 0 0 0 .75-.75z"
		clip-rule="evenodd"
	/>
</svg>
