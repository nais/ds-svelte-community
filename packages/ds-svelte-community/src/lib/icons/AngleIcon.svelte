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
		d="M15.53 6.53a.75.75 0 0 0-1.06-1.06l-5.188 5.178a.8.8 0 0 0-.13.13L4.47 15.452a.75.75 0 0 0 .53 1.28h14a.75.75 0 0 0 0-1.5h-6.58a7.45 7.45 0 0 0-1.64-3.96zm-5.818 5.808-2.9 2.894h4.098a5.96 5.96 0 0 0-1.198-2.894"
		clip-rule="evenodd"
	/>
</svg>
