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
		d="M5.5 4.25A1.75 1.75 0 0 0 3.75 6v9c0 .966.784 1.75 1.75 1.75h13A1.75 1.75 0 0 0 20.25 15V6a1.75 1.75 0 0 0-1.75-1.75zm-2.5 14a.75.75 0 0 0 0 1.5h18a.75.75 0 0 0 0-1.5z"
		clip-rule="evenodd"
	/>
</svg>
