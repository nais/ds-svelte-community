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
		d="M14.97 4.47a3.198 3.198 0 0 1 4.562.001c1.26 1.27 1.268 3.368-.002 4.637l-.577.578a.5.5 0 0 1-.707 0l-3.893-3.893a.5.5 0 0 1 0-.707l.617-.617Zm2.215 6.276a.5.5 0 0 1 0 .708l-6.155 6.154a.75.75 0 0 1-.38.204l-4.5.922a.75.75 0 0 1-.882-.897l1-4.5a.75.75 0 0 1 .202-.367l6.115-6.116a.5.5 0 0 1 .707 0l3.893 3.892ZM3.5 20.25a.75.75 0 0 0 0 1.5h17a.75.75 0 0 0 0-1.5h-17Z"
		clip-rule="evenodd"
	/>
</svg>
