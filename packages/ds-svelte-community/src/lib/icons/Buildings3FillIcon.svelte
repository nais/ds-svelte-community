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
		d="M7 2.25a.75.75 0 0 0-.75.75v18c0 .414.336.75.75.75h10a.75.75 0 0 0 .75-.75V3a.75.75 0 0 0-.75-.75zm3.75 4.25a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0zM13 5.75a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75m-2.25 6.75a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0zm2.25-.75a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75m-8.5-2.5a.25.25 0 0 1 .25.25v12a.25.25 0 0 1-.25.25H3a.75.75 0 0 1-.75-.75V10A.75.75 0 0 1 3 9.25zm15 12.5a.25.25 0 0 1-.25-.25v-12a.25.25 0 0 1 .25-.25H21a.75.75 0 0 1 .75.75v11a.75.75 0 0 1-.75.75z"
		clip-rule="evenodd"
	/>
</svg>
