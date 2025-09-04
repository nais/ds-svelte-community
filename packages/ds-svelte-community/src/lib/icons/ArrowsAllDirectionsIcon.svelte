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
		d="M14.263 6.194 12 3.93 9.737 6.194a.8.8 0 1 1-1.131-1.131l2.828-2.829a.8.8 0 0 1 1.132 0l2.828 2.829a.8.8 0 1 1-1.131 1.13m3.543 8.07L20.07 12l-2.263-2.263a.8.8 0 1 1 1.131-1.131l2.829 2.829a.8.8 0 0 1 0 1.13l-2.829 2.829a.8.8 0 1 1-1.13-1.131m-3.545 3.543L12 20.07l-2.263-2.263a.8.8 0 1 0-1.131 1.131l2.828 2.829a.8.8 0 0 0 1.132 0l2.828-2.829a.8.8 0 1 0-1.131-1.13m-8.069-3.545L3.93 12l2.263-2.263a.8.8 0 1 0-1.131-1.131l-2.829 2.829a.8.8 0 0 0 0 1.13l2.829 2.829a.8.8 0 1 0 1.13-1.131"
	/><path fill="currentColor" d="M12.75 19.633a.75.75 0 0 1-1.5 0v-16a.75.75 0 0 1 1.5 0z" /><path
		fill="currentColor"
		d="M4.367 12.75a.75.75 0 0 1 0-1.5h16a.75.75 0 1 1 0 1.5z"
	/>
</svg>
