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
		d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12m14.03 4.28a.75.75 0 0 1-1.06 0l-3.792-3.791a.75.75 0 0 1 0-1.061l3.792-3.792a.75.75 0 1 1 1.06 1.061l-3.261 3.261 3.261 3.262a.75.75 0 0 1 0 1.06M9.75 8.25a.75.75 0 0 0-1.5 0v7.583a.75.75 0 0 0 1.5 0z"
		clip-rule="evenodd"
	/>
</svg>
