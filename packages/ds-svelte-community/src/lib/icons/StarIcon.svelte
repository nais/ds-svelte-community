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
		d="M12 2.25a.75.75 0 0 1 .672.418l2.765 5.601 6.181.899a.75.75 0 0 1 .416 1.279l-4.473 4.36 1.056 6.156a.75.75 0 0 1-1.088.791L12 18.847l-5.529 2.907a.75.75 0 0 1-1.088-.79l1.056-6.157-4.473-4.36a.75.75 0 0 1 .416-1.28l6.181-.898 2.764-5.6A.75.75 0 0 1 12 2.25m0 2.445L9.734 9.287a.75.75 0 0 1-.565.41l-5.068.737 3.667 3.574a.75.75 0 0 1 .216.664l-.866 5.047 4.533-2.383a.75.75 0 0 1 .698 0l4.533 2.383-.866-5.047a.75.75 0 0 1 .216-.664l3.667-3.574-5.068-.737a.75.75 0 0 1-.565-.41z"
		clip-rule="evenodd"
	/>
</svg>
