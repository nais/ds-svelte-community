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
		d="M9.8 5a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0m3.5 4a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 .75.75v7a.75.75 0 0 1-.75.75H14.8V21a.75.75 0 0 1-1.5 0zm-4.193.411a1.75 1.75 0 0 1 1.648-1.161h.295a.75.75 0 0 1 .75.75v12a.75.75 0 0 1-1.5 0v-4.25H7.55a.75.75 0 0 1-.706-1.002z"
		clip-rule="evenodd"
	/>
</svg>
