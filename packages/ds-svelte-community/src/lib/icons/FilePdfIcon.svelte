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
		d="M7.7 14.835q.336 0 .532.189a.63.63 0 0 1 .203.49.65.65 0 0 1-.203.497q-.196.182-.532.182h-.693v-1.358zm4.302.035q.323 0 .518.182a.62.62 0 0 1 .196.476v1.827q0 .3-.196.483a.73.73 0 0 1-.518.182h-.609v-3.15z"
	/><path
		fill="currentColor"
		fill-rule="evenodd"
		d="M5.25 4.5c0-.69.56-1.25 1.25-1.25H14a.75.75 0 0 1 .53.22l4 4c.141.14.22.331.22.53v4.25H21a.75.75 0 0 1 .75.75v7a.75.75 0 0 1-.75.75H3a.75.75 0 0 1-.75-.75v-7a.75.75 0 0 1 .75-.75h2.25zm9.25 4.25c-.69 0-1.25-.56-1.25-1.25V4.75h-6.5v7.5h10.5v-3.5zm.25-2.94 1.44 1.44h-1.44zm-6.112 8.283a2.04 2.04 0 0 0-.938-.203H5.957V19h1.05v-1.862H7.7q.54 0 .938-.203.4-.203.623-.567a1.6 1.6 0 0 0 .224-.854q0-.49-.224-.854a1.47 1.47 0 0 0-.623-.567m4.288 0a2 2 0 0 0-.924-.203h-1.659V19h1.66q.531 0 .923-.203.4-.21.616-.581.224-.37.224-.861v-1.827a1.6 1.6 0 0 0-.224-.861 1.47 1.47 0 0 0-.616-.574M14.8 19v-5.11h3.29v.98h-2.254v1.134h2.072v.98H15.85V19z"
		clip-rule="evenodd"
	/>
</svg>
