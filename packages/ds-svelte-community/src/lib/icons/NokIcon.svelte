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
		d="M3.304 8.276a.75.75 0 0 1 .844.346l2.102 3.604V9a.75.75 0 1 1 1.5 0v6a.75.75 0 0 1-1.398.378L4.25 11.774V15a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .554-.724ZM12 9.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM8.25 12a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0Zm12.73-3.576a.75.75 0 0 1 .096 1.056l-2.1 2.52 2.1 2.52a.75.75 0 0 1-1.152.96l-2.174-2.609V15a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 1.5 0v2.129l2.174-2.61a.75.75 0 0 1 1.056-.095Z"
		clip-rule="evenodd"
	/>
</svg>
