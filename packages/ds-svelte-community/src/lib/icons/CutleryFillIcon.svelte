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
		d="M20.439 3.392A.75.75 0 0 1 20.75 4v16a.75.75 0 0 1-1.5 0v-6.25H19A2.75 2.75 0 0 1 16.25 11V7.883a4.75 4.75 0 0 1 3.248-4.506l.265-.089a.75.75 0 0 1 .675.104M4 3.25a.75.75 0 0 1 .75.75v3.25a.25.25 0 0 0 .5 0V4a.75.75 0 0 1 1.5 0v3.25a.25.25 0 0 0 .5 0V4a.75.75 0 0 1 1.5 0v5a2.75 2.75 0 0 1-2 2.646V20a.75.75 0 0 1-1.5 0v-8.353A2.75 2.75 0 0 1 3.25 9V4A.75.75 0 0 1 4 3.25m6.515 1.428c.38-.728 1.015-1.428 1.985-1.428.957 0 1.596.667 1.983 1.4.39.736.629 1.707.76 2.742.133.814.149 1.84-.205 2.705a2.63 2.63 0 0 1-.916 1.181q-.388.271-.872.388V20a.75.75 0 0 1-1.5 0v-8.334a2.5 2.5 0 0 1-.872-.388 2.63 2.63 0 0 1-.916-1.181c-.354-.866-.338-1.893-.204-2.707.13-1.002.37-1.97.757-2.712"
		clip-rule="evenodd"
	/>
</svg>
