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
		d="M14.32 2.322a.75.75 0 0 1 .405.871l-1.638 6.143 4.483.417a.75.75 0 0 1 .54 1.183l-7.5 10.5a.75.75 0 0 1-1.335-.63l1.638-6.142-4.483-.417a.75.75 0 0 1-.54-1.183l7.5-10.5a.75.75 0 0 1 .93-.242"
		clip-rule="evenodd"
	/>
</svg>
