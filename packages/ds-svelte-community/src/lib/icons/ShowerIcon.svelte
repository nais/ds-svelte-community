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
		d="M4 3.25a.75.75 0 0 0 0 1.5h6.5a1.75 1.75 0 0 1 1.738 1.543A6.75 6.75 0 0 0 6.25 13c0 .414.336.75.75.75h12a.75.75 0 0 0 .75-.75 6.75 6.75 0 0 0-6.007-6.71A3.25 3.25 0 0 0 10.5 3.25zm9 4.5a5.25 5.25 0 0 1 5.197 4.5H7.803A5.25 5.25 0 0 1 13 7.75m-4 7a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0v-1a.75.75 0 0 1 .75-.75M9.75 19a.75.75 0 0 0-1.5 0v1a.75.75 0 0 0 1.5 0zM13 14.75a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0v-1a.75.75 0 0 1 .75-.75m.75 4.25a.75.75 0 0 0-1.5 0v1a.75.75 0 0 0 1.5 0zM17 14.75a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0v-1a.75.75 0 0 1 .75-.75m.75 4.25a.75.75 0 0 0-1.5 0v1a.75.75 0 0 0 1.5 0z"
		clip-rule="evenodd"
	/>
</svg>
