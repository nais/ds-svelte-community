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
		d="M7.25 4.968a2.75 2.75 0 0 1 5.5 0c.212-.143.44-.284.667-.4.294-.152.688-.318 1.083-.318a2.25 2.25 0 0 1 0 4.5c-.395 0-.789-.166-1.083-.318a7 7 0 0 1-.667-.4V5v4.398l5.484 1.22a3.75 3.75 0 0 1 2.848 4.473l-1.35 6.072a.75.75 0 0 1-.732.587H8a.75.75 0 0 1-.6-.3l-4.974-6.632a2.722 2.722 0 0 1 3.948-3.7l.876.751V8.032a7 7 0 0 1-.667.4c-.295.152-.688.318-1.083.318a2.25 2.25 0 0 1 0-4.5c.395 0 .788.166 1.083.318.228.117.455.257.667.4M12 7a.25.25 0 0 1-.25.25h-3.5A.25.25 0 0 1 8 7V6a.25.25 0 0 1 .25-.25h3.5A.25.25 0 0 1 12 6zm-5.377-.641q.099.07.191.141l-.191.141c-.246.177-.499.34-.726.458a2 2 0 0 1-.286.124.5.5 0 0 1-.111.027.75.75 0 1 1 0-1.5c.004 0 .04.003.111.027q.116.037.286.124c.227.117.48.281.726.458m6.754.282-.191-.141.191-.141a6 6 0 0 1 .726-.458q.17-.087.286-.124a.5.5 0 0 1 .111-.027.75.75 0 1 1 0 1.5.5.5 0 0 1-.111-.027 2 2 0 0 1-.286-.124 6 6 0 0 1-.726-.458"
		clip-rule="evenodd"
	/>
</svg>
