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
		d="M7 5.919a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5m-2.75 1.25a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0M16 6.919a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5m-4.75 3.25a4.75 4.75 0 1 1 9.5 0 4.75 4.75 0 0 1-9.5 0m-6.5 5a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0M7 11.419a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5"
		clip-rule="evenodd"
	/>
</svg>
