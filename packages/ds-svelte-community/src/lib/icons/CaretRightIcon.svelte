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
		d="M9.713 18.193a.75.75 0 0 1-.463-.693v-11a.75.75 0 0 1 1.28-.53l5.5 5.5a.75.75 0 0 1 0 1.06l-5.5 5.5a.75.75 0 0 1-.817.163m1.037-2.504L14.44 12l-3.69-3.69z"
		clip-rule="evenodd"
	/>
</svg>
