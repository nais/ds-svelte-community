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
		d="M16.53 7.03a.75.75 0 0 0-1.06-1.06l-5.5 5.5a.75.75 0 0 0 0 1.06l5.5 5.5a.75.75 0 1 0 1.06-1.06L11.56 12zm-4 0a.75.75 0 0 0-1.06-1.06l-5.5 5.5a.75.75 0 0 0 0 1.06l5.5 5.5a.75.75 0 1 0 1.06-1.06L7.56 12z"
		clip-rule="evenodd"
	/>
</svg>
