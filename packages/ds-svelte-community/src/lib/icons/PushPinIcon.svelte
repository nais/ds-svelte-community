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
		d="M16.312 3.251a1.75 1.75 0 0 0-2.592.13l-3.584 4.38a.25.25 0 0 1-.137.085l-4.41 1.018c-1.339.309-1.815 1.97-.844 2.942L7.94 15l-4.47 4.47a.75.75 0 1 0 1.061 1.06L9 16.06l3.194 3.195c.972.972 2.633.495 2.942-.844L16.154 14a.25.25 0 0 1 .085-.137l4.38-3.584a1.75 1.75 0 0 0 .13-2.592zm-3.057 14.943a.25.25 0 0 0 .42-.12l1.017-4.41a1.75 1.75 0 0 1 .597-.96l4.38-3.585a.25.25 0 0 0 .02-.37L15.25 4.312a.25.25 0 0 0-.37.018l-3.584 4.38c-.246.3-.584.51-.961.598l-4.41 1.017a.25.25 0 0 0-.12.42z"
		clip-rule="evenodd"
	/>
</svg>
