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
		d="M21 6.25a.75.75 0 0 1 0 1.5h-4.577l2.311 11.097a.75.75 0 0 1-1.468.306L15.5 10.68l-1.766 8.474a.75.75 0 0 1-1.468-.306L14.577 7.75H10a.75.75 0 0 1 0-1.5zm-18-2a.75.75 0 0 1 .75.75v6c0 .69.56 1.25 1.25 1.25h5a.75.75 0 1 1 0 1.5H8.96l1.267 5.068a.75.75 0 0 1-1.455.364L7.415 13.75h-2.33l-1.357 5.432a.75.75 0 0 1-1.456-.364l1.359-5.436A2.75 2.75 0 0 1 2.25 11V5A.75.75 0 0 1 3 4.25"
	/>
</svg>
