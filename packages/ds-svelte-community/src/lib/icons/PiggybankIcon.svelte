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
		d="M8.283 2.305A.75.75 0 0 0 7.25 3v2.156A7.9 7.9 0 0 0 5.053 7.75H3a.75.75 0 0 0-.75.75V14c0 .414.336.75.75.75h2.34c.702 1.126 1.707 2.072 2.91 2.761V20.5a.75.75 0 0 0 1.5 0v-2.302a9.7 9.7 0 0 0 3.25.552c1.14 0 2.24-.196 3.25-.555V20.5a.75.75 0 0 0 1.5 0v-2.992c2.387-1.365 4-3.737 4-6.508 0-4.371-4.015-7.75-8.75-7.75-.662 0-1.309.065-1.93.19zm.467 1.81 1.967.8a.75.75 0 0 0 .448.037A8.4 8.4 0 0 1 13 4.75c4.101 0 7.25 2.89 7.25 6.25s-3.149 6.25-7.25 6.25c-2.943 0-5.43-1.508-6.571-3.608a.75.75 0 0 0-.66-.392H3.75v-4h1.775a.75.75 0 0 0 .688-.45c.452-1.035 1.22-1.951 2.218-2.65.2-.141.319-.37.319-.615zm1.585 4.556c1.79-.895 3.54-.895 5.33 0a.75.75 0 1 0 .67-1.342c-2.21-1.105-4.46-1.105-6.67 0a.75.75 0 0 0 .67 1.342"
		clip-rule="evenodd"
	/>
</svg>
