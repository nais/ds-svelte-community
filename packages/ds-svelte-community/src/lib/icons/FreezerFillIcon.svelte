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
		d="M5.25 3A.75.75 0 0 1 6 2.25h12a.75.75 0 0 1 .75.75v18a.75.75 0 0 1-.75.75H6a.75.75 0 0 1-.75-.75v-6.5a.25.25 0 0 1 .25-.25H7a.75.75 0 0 0 .75-.75v-3A.75.75 0 0 0 7 9.75H5.5a.25.25 0 0 1-.25-.25zm.25 9.75a.25.25 0 0 1-.25-.25v-1a.25.25 0 0 1 .25-.25H6a.25.25 0 0 1 .25.25v1a.25.25 0 0 1-.25.25zm7.5-8.5a.75.75 0 0 1 .75.75v.701l.607-.35a.75.75 0 0 1 .75 1.298L14.5 7l.607.351a.75.75 0 0 1-.75 1.3L13.75 8.3V9a.75.75 0 0 1-1.5 0v-.7l-.607.35a.75.75 0 1 1-.75-1.3L11.5 7l-.607-.35a.75.75 0 0 1 .75-1.3l.607.35V5a.75.75 0 0 1 .75-.75"
		clip-rule="evenodd"
	/>
</svg>
