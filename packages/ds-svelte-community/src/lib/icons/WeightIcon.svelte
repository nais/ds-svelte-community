<script lang="ts" context="module">
	import newUniqueId from "$lib/components/local-unique-id";
	import type { SVGAttributes } from "svelte/elements";
</script>

<script lang="ts">
	/**
	 * Title of the icon, used for accessibility
	 */
	export let title = "";

	type $$Props = SVGAttributes<SVGElement> & {
		title?: string;
	};

	const id = newUniqueId();
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
	{...$$restProps}
>
	{#if title}
		<title {id}>{title}</title>
	{/if}
	<slot />
	<path
		fill="currentColor"
		fill-rule="evenodd"
		d="M7 6.75a.75.75 0 0 1 .75.75v3.75h8.5V7.5a.75.75 0 0 1 1.5 0v9a.75.75 0 0 1-1.5 0v-3.75h-8.5v3.75a.75.75 0 0 1-1.5 0v-9A.75.75 0 0 1 7 6.75ZM19.75 9a.75.75 0 0 0-1.5 0v6a.75.75 0 0 0 1.5 0v-2.25H21a.75.75 0 0 0 0-1.5h-1.25V9ZM5 8.25a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0v-2.25H3a.75.75 0 0 1 0-1.5h1.25V9A.75.75 0 0 1 5 8.25Z"
		clip-rule="evenodd"
	/>
</svg>
