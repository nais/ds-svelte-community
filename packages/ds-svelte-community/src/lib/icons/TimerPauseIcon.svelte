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
		d="M10 1.25a.75.75 0 0 0 0 1.5h1.25v1.532a8.75 8.75 0 1 0 1.5 0V2.75H14a.75.75 0 0 0 0-1.5zM4.75 13a7.25 7.25 0 1 1 14.5 0 7.25 7.25 0 0 1-14.5 0m14.144-9.723a.75.75 0 0 0-1.06 1.061l2.828 2.828a.75.75 0 1 0 1.06-1.06zM9.25 15.5a.75.75 0 0 0 1.5 0v-5a.75.75 0 0 0-1.5 0zm4.75.75a.75.75 0 0 1-.75-.75v-5a.75.75 0 0 1 1.5 0v5a.75.75 0 0 1-.75.75"
		clip-rule="evenodd"
	/>
</svg>
