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
		d="M5 3.25A1.75 1.75 0 0 0 3.25 5v14c0 .966.784 1.75 1.75 1.75h3.5a.75.75 0 0 0 0-1.5H5a.25.25 0 0 1-.25-.25V5A.25.25 0 0 1 5 4.75h3.5a.75.75 0 0 0 0-1.5H5Zm9.97 3.72a.75.75 0 0 1 1.06 0l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 1 1-1.06-1.06l3.22-3.22H8.5a.75.75 0 0 1 0-1.5h9.69l-3.22-3.22a.75.75 0 0 1 0-1.06Z"
		clip-rule="evenodd"
	/>
</svg>
