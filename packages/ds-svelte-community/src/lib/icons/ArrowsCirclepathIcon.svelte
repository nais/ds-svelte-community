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
		d="M12 3.75a8.24 8.24 0 0 0-6.746 3.5H8a.75.75 0 0 1 0 1.5H3.5A.75.75 0 0 1 2.75 8V3.5a.75.75 0 0 1 1.5 0v2.583A9.74 9.74 0 0 1 12 2.25 9.75 9.75 0 0 1 21.75 12a.75.75 0 0 1-1.5 0A8.25 8.25 0 0 0 12 3.75m-9 7.5a.75.75 0 0 1 .75.75 8.25 8.25 0 0 0 14.996 4.75H16a.75.75 0 0 1 0-1.5h4.5a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0v-2.583A9.74 9.74 0 0 1 12 21.75 9.75 9.75 0 0 1 2.25 12a.75.75 0 0 1 .75-.75"
		clip-rule="evenodd"
	/>
</svg>
