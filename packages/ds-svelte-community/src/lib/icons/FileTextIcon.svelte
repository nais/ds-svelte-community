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
		d="M6.5 3.25c-.69 0-1.25.56-1.25 1.25v15c0 .69.56 1.25 1.25 1.25h11c.69 0 1.25-.56 1.25-1.25V8a.75.75 0 0 0-.22-.53l-4-4a.75.75 0 0 0-.53-.22zm6.75 4.25c0 .69.56 1.25 1.25 1.25h2.75v10.5H6.75V4.75h6.5zm2.94-.25-1.44-1.44v1.44zM8.25 13a.75.75 0 0 1 .75-.75h3.5a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75M9 15.25a.75.75 0 0 0 0 1.5h5.5a.75.75 0 0 0 0-1.5z"
		clip-rule="evenodd"
	/>
</svg>
