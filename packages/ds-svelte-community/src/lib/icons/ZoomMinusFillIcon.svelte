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
		d="M3.25 10.5a7.25 7.25 0 1 1 12.88 4.568l5.412 5.412a.75.75 0 0 1-1.061 1.06l-5.412-5.41A7.25 7.25 0 0 1 3.25 10.5m3 0A.75.75 0 0 1 7 9.75h7a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75"
		clip-rule="evenodd"
	/>
</svg>
