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
		d="M9.04 4.558a4.75 4.75 0 0 1 8.248 4.716A1.75 1.75 0 0 1 18.75 11v9a.75.75 0 0 1-.75.75H6a.75.75 0 0 1-.75-.75v-9c0-.966.784-1.75 1.75-1.75h8.57l.399-.692a3.25 3.25 0 0 0-5.63-3.25l-.69 1.195a.75.75 0 1 1-1.299-.75zm7.036 6.192a1 1 0 0 1-.153 0H7a.25.25 0 0 0-.25.25v8.25h10.5V11a.25.25 0 0 0-.25-.25zM10.5 14.5a1.5 1.5 0 1 1 2.25 1.3V17a.75.75 0 0 1-1.5 0v-1.2a1.5 1.5 0 0 1-.75-1.3"
		clip-rule="evenodd"
	/>
</svg>
