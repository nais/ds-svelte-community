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
		d="M20 6.25a.75.75 0 0 1 .75.75v10a.75.75 0 0 1-1.5 0V7a.75.75 0 0 1 .75-.75m-9.343.083a.75.75 0 0 1 .779.057l7 5a.75.75 0 0 1 0 1.22l-7 5A.75.75 0 0 1 10.25 17v-2a.75.75 0 0 1 1.5 0v.543L16.71 12l-4.96-3.543V9a.75.75 0 0 1-1.5 0V7a.75.75 0 0 1 .407-.667m-6.221.057A.75.75 0 0 0 3.25 7v10a.75.75 0 0 0 1.186.61l7-5a.75.75 0 0 0 0-1.22zM9.71 12l-4.96 3.543V8.457z"
		clip-rule="evenodd"
	/>
</svg>
