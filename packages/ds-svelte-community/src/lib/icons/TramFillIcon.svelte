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
		d="M2.25 6A.75.75 0 0 1 3 5.25h15.778a.75.75 0 0 1 .728.57l2.222 9a.75.75 0 0 1-.728.93H3a.75.75 0 0 1-.75-.75zM15 6.75a.25.25 0 0 0-.25.25v4c0 .138.112.25.25.25h3.982a.25.25 0 0 0 .243-.31l-.988-4a.25.25 0 0 0-.242-.19zM3 17.25a.75.75 0 0 0 0 1.5h18a.75.75 0 0 0 0-1.5z"
		clip-rule="evenodd"
	/>
</svg>
