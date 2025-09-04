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
		d="M16.973 2.25c1.24 0 2.327.83 2.653 2.026l1.908 7a2.75 2.75 0 0 1-2.652 3.474H13.54l.793 2.38a2.75 2.75 0 0 1-2.608 3.62H10.5a.75.75 0 0 1-.624-.334L6.099 14.75H3a.75.75 0 0 1-.75-.75V4A.75.75 0 0 1 3 3.25h3.426l4.926-.985a1 1 0 0 1 .148-.015z"
	/>
</svg>
