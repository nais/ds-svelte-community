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
		d="M7.125 3.556a.75.75 0 0 1 1.025.275l3 5.196a.75.75 0 0 1-1.3.75l-3-5.196a.75.75 0 0 1 .275-1.025M3 12.75h6a.75.75 0 0 0 0-1.5H3a.75.75 0 0 0 0 1.5m18-1.5h-6a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5m-6.85 2.973a.75.75 0 0 0-1.3.75l3 5.196a.75.75 0 0 0 1.3-.75zm2.725-10.667a.75.75 0 0 1 .274 1.025l-3 5.196a.75.75 0 1 1-1.298-.75l3-5.196a.75.75 0 0 1 1.024-.275M11.15 14.973a.75.75 0 0 0-1.3-.75l-3 5.196a.75.75 0 0 0 1.3.75z"
		clip-rule="evenodd"
	/>
</svg>
