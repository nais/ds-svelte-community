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
		d="M5.953 3.486A.75.75 0 0 1 6.5 3.25h11a.75.75 0 0 1 .749.797l-.883 14.125a2.75 2.75 0 0 1-2.745 2.578H9.38a2.75 2.75 0 0 1-2.745-2.578L5.751 4.047a.75.75 0 0 1 .202-.56M7.298 4.75l.157 2.5h9.09l.157-2.5z"
		clip-rule="evenodd"
	/>
</svg>
