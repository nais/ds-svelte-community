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
		d="M7 6.25a.75.75 0 0 0-.75.75v10c0 .414.336.75.75.75h3a.75.75 0 0 0 .75-.75V7a.75.75 0 0 0-.75-.75zm.75 10v-8.5h1.5v8.5zm6.25-10a.75.75 0 0 0-.75.75v10c0 .414.336.75.75.75h3a.75.75 0 0 0 .75-.75V7a.75.75 0 0 0-.75-.75zm.75 10v-8.5h1.5v8.5z"
		clip-rule="evenodd"
	/>
</svg>
