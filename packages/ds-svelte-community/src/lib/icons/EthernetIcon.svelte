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
		d="M16.712 7.227a.75.75 0 0 1 1.061 0l4.243 4.243a.75.75 0 0 1 0 1.06l-4.243 4.243a.75.75 0 1 1-1.06-1.06L20.424 12l-3.713-3.712a.75.75 0 0 1 0-1.061m-9.424 0a.75.75 0 0 1 0 1.06L3.575 12l3.713 3.712a.75.75 0 0 1-1.061 1.061L1.984 12.53a.75.75 0 0 1 0-1.06l4.243-4.243a.75.75 0 0 1 1.06 0M12 10.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m2 1.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0m-5.5-1.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3"
		clip-rule="evenodd"
	/>
</svg>
