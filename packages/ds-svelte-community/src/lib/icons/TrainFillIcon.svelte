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
		d="M2.25 6A.75.75 0 0 1 3 5.25h10.8a7.95 7.95 0 0 1 7.95 7.95 2.55 2.55 0 0 1-2.55 2.55H3a.75.75 0 0 1-.75-.75zM14 6.755a.243.243 0 0 0-.25.245v4c0 .138.112.25.25.25h5.609a.24.24 0 0 0 .23-.323C18.921 8.5 16.587 6.855 14 6.755M3 17.25a.75.75 0 0 0 0 1.5h18a.75.75 0 0 0 0-1.5z"
		clip-rule="evenodd"
	/>
</svg>
