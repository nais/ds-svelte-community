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
		d="M4.25 4c0-.966.784-1.75 1.75-1.75h12c.966 0 1.75.784 1.75 1.75v16A1.75 1.75 0 0 1 18 21.75H6A1.75 1.75 0 0 1 4.25 20zM6 3.75a.25.25 0 0 0-.25.25v16c0 .138.112.25.25.25h12a.25.25 0 0 0 .25-.25V4a.25.25 0 0 0-.25-.25zM8 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0m1 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-1 4a1 1 0 1 1 2 0 1 1 0 0 1-2 0m4-7a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-1 4a1 1 0 1 1 2 0 1 1 0 0 1-2 0m1 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2m2-5a1 1 0 1 1 2 0 1 1 0 0 1-2 0m1 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-1 4a1 1 0 1 1 2 0 1 1 0 0 1-2 0M8.5 6.25a.75.75 0 0 0 0 1.5h7a.75.75 0 0 0 0-1.5z"
		clip-rule="evenodd"
	/>
</svg>
