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
		d="M6 19.25a.75.75 0 0 1-.75-.75v-5.75H4a.75.75 0 0 1 0-1.5h1.25V5.5A.75.75 0 0 1 6 4.75h4a.75.75 0 0 1 .75.75v5.75h2.5V8.5a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 .75.75v2.75H20a.75.75 0 0 1 0 1.5h-1.25v2.75a.75.75 0 0 1-.75.75h-4a.75.75 0 0 1-.75-.75v-2.75h-2.5v5.75a.75.75 0 0 1-.75.75zm8.75-6.5v2h2.5v-2zm2.5-1.5v-2h-2.5v2zm-10.5 6.5v-5h2.5v5zm2.5-11.5v5h-2.5v-5z"
		clip-rule="evenodd"
	/>
</svg>
