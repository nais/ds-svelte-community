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
		d="M4 3.25a.75.75 0 0 0-.75.75v6c0 .414.336.75.75.75h6a.75.75 0 0 0 .75-.75V4a.75.75 0 0 0-.75-.75zm.75 6v-4.5h4.5v4.5zm9.25-6a.75.75 0 0 0-.75.75v6c0 .414.336.75.75.75h6a.75.75 0 0 0 .75-.75V4a.75.75 0 0 0-.75-.75zm.75 6v-4.5h4.5v4.5zM3.25 14a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-.75.75H4a.75.75 0 0 1-.75-.75zm1.5.75v4.5h4.5v-4.5zm9.25-1.5a.75.75 0 0 0-.75.75v2c0 .414.336.75.75.75h2a.75.75 0 0 0 .75-.75v-2a.75.75 0 0 0-.75-.75zm3.25.75a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-.75.75h-2a.75.75 0 0 1-.75-.75zM14 17.25a.75.75 0 0 0-.75.75v2c0 .414.336.75.75.75h2a.75.75 0 0 0 .75-.75v-2a.75.75 0 0 0-.75-.75z"
		clip-rule="evenodd"
	/>
</svg>
