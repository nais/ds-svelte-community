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
		d="M5.75 20.25V3.75h12.5V9.5a.75.75 0 0 0 1.5 0v-6c0-.69-.56-1.25-1.25-1.25h-13c-.69 0-1.25.56-1.25 1.25v17c0 .69.56 1.25 1.25 1.25H7a.75.75 0 0 0 0-1.5zm7.25-13a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 0-1.5zm-2.05-1.1a.75.75 0 0 1 .15 1.05l-1.5 2a.75.75 0 0 1-1.13.08l-1-1a.75.75 0 0 1 1.06-1.06l.389.388L9.9 6.3a.75.75 0 0 1 1.05-.15m-.95 5.1a.75.75 0 0 0-.75.75v9c0 .414.336.75.75.75h9a.75.75 0 0 0 .75-.75v-7.5a.75.75 0 0 0-.22-.53l-1.5-1.5a.75.75 0 0 0-.53-.22zm8.25 2.56-1.06-1.06h-.44V14a.75.75 0 0 1-.75.75h-3a.75.75 0 0 1-.75-.75v-1.25h-1.5v7.5h1V17a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 .75.75v3.25h1zm-2.5 6.44h-2.5v-2.5h2.5zm-.5-7.5v.5h-1.5v-.5z"
		clip-rule="evenodd"
	/>
</svg>
