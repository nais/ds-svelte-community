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
		d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12M14 9a1 1 0 1 0 0 2 1 1 0 0 0 0-2m2.5 1c0 .656-.253 1.254-.667 1.7a2.75 2.75 0 1 1-3.666 0A2.5 2.5 0 1 1 16.5 10m-3.75 3.75a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0m-3-5.25a.75.75 0 0 0-1.086-.67l-2 1a.75.75 0 1 0 .671 1.34l.915-.456V15.5a.75.75 0 0 0 1.5 0z"
		clip-rule="evenodd"
	/>
</svg>
