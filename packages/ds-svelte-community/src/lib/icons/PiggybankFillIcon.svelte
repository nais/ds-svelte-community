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
		d="M7.581 2.378a.75.75 0 0 1 .702-.073L11.07 3.44A10 10 0 0 1 13 3.25c4.735 0 8.75 3.379 8.75 7.75 0 2.77-1.613 5.143-4 6.508V20.5a.75.75 0 0 1-1.5 0v-2.305a9.7 9.7 0 0 1-3.25.555 9.7 9.7 0 0 1-3.25-.552V20.5a.75.75 0 0 1-1.5 0v-2.989c-1.203-.69-2.208-1.635-2.91-2.761H3a.75.75 0 0 1-.75-.75V8.5A.75.75 0 0 1 3 7.75h2.053A7.9 7.9 0 0 1 7.25 5.156V3a.75.75 0 0 1 .331-.622m8.084 6.293c-1.79-.895-3.54-.895-5.33 0a.75.75 0 0 1-.67-1.342c2.21-1.105 4.46-1.105 6.67 0a.75.75 0 0 1-.67 1.342"
		clip-rule="evenodd"
	/>
</svg>
