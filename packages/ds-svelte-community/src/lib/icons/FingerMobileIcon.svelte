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
		d="M6.75 5c0-.69.56-1.25 1.25-1.25h8c.69 0 1.25.56 1.25 1.25v8.305a.75.75 0 0 0 1.5 0V5A2.75 2.75 0 0 0 16 2.25H8A2.75 2.75 0 0 0 5.25 5v14A2.75 2.75 0 0 0 8 21.75a.75.75 0 0 0 0-1.5c-.69 0-1.25-.56-1.25-1.25zm4 .5a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75m1.987 6.25a.513.513 0 0 0-.513.513V17a.75.75 0 0 1-1.284.527l-1.153-1.168a.411.411 0 0 0-.635.517l2.25 3.374h5.54l.708-2.36a1.25 1.25 0 0 0-.952-1.585l-2.845-.57A.75.75 0 0 1 13.25 15v-2.737a.513.513 0 0 0-.513-.513m-2.013.513a2.013 2.013 0 1 1 4.026 0v2.122l2.242.449a2.75 2.75 0 0 1 2.095 3.486l-.869 2.895a.75.75 0 0 1-.718.535H11a.75.75 0 0 1-.624-.334l-2.472-3.708a1.911 1.911 0 0 1 2.82-2.524z"
		clip-rule="evenodd"
	/>
</svg>
