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
		d="M4 3.25a.75.75 0 0 0-.53 1.28l16 16a.75.75 0 0 0 1.28-.53V4a.75.75 0 0 0-.75-.75zm15.25 14.94L5.81 4.75h13.44zM14.333 7.582a.75.75 0 0 0-.53 1.28l1 1a.75.75 0 0 0 1.28-.53v-1a.75.75 0 0 0-.75-.75z"
		clip-rule="evenodd"
	/>
</svg>
