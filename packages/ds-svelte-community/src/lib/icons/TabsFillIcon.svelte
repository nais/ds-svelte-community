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
		d="M8 2.25A1.75 1.75 0 0 0 6.25 4v12c0 .966.784 1.75 1.75 1.75h12A1.75 1.75 0 0 0 21.75 16V4A1.75 1.75 0 0 0 20 2.25zM4.75 16A3.25 3.25 0 0 0 8 19.25h9.25a.5.5 0 0 1 .5.5V20A1.75 1.75 0 0 1 16 21.75H4A1.75 1.75 0 0 1 2.25 20V8c0-.966.784-1.75 1.75-1.75h.25a.5.5 0 0 1 .5.5z"
		clip-rule="evenodd"
	/>
</svg>
