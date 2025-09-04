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
		d="M18 3.25A2.75 2.75 0 0 1 20.75 6v9A2.75 2.75 0 0 1 18 17.75H9.208l-4.822 2.894A.75.75 0 0 1 3.25 20V6A2.75 2.75 0 0 1 6 3.25zM11.995 6.5a.75.75 0 0 0-.75.75v2.495H8.75a.75.75 0 0 0 0 1.5h2.495v2.505a.75.75 0 0 0 1.5 0v-2.505h2.505a.75.75 0 0 0 0-1.5h-2.505V7.25a.75.75 0 0 0-.75-.75"
	/>
</svg>
