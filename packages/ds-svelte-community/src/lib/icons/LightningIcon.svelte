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
		d="M14.32 2.322a.75.75 0 0 1 .405.871l-1.638 6.143 4.483.417a.75.75 0 0 1 .54 1.183l-7.5 10.5a.75.75 0 0 1-1.335-.63l1.638-6.142-4.483-.417a.75.75 0 0 1-.54-1.183l7.5-10.5a.75.75 0 0 1 .93-.242M7.869 12.874l4.067.38a.75.75 0 0 1 .656.94l-.804 3.013 4.343-6.081-4.067-.38a.75.75 0 0 1-.655-.94l.803-3.013z"
		clip-rule="evenodd"
	/>
</svg>
