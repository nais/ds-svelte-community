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
		d="M8 2.25A1.75 1.75 0 0 0 6.25 4v12c0 .966.784 1.75 1.75 1.75h12A1.75 1.75 0 0 0 21.75 16V4A1.75 1.75 0 0 0 20 2.25H8ZM7.75 4A.25.25 0 0 1 8 3.75h12a.25.25 0 0 1 .25.25v12a.25.25 0 0 1-.25.25H8a.25.25 0 0 1-.25-.25V4Zm-4 4A.25.25 0 0 1 4 7.75h.5a.75.75 0 0 0 0-1.5H4A1.75 1.75 0 0 0 2.25 8v12c0 .966.784 1.75 1.75 1.75h12A1.75 1.75 0 0 0 17.75 20v-.5a.75.75 0 0 0-1.5 0v.5a.25.25 0 0 1-.25.25H4a.25.25 0 0 1-.25-.25V8Z"
		clip-rule="evenodd"
	/>
</svg>
