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
		d="M3.75 6a1.25 1.25 0 1 1 2.5 0v2a.75.75 0 0 0 1.5 0V6a2.75 2.75 0 0 0-5.5 0v12c0 .966.784 1.75 1.75 1.75h5.5A1.75 1.75 0 0 0 11.25 18v-4.25h1.5V18c0 .966.784 1.75 1.75 1.75H20A1.75 1.75 0 0 0 21.75 18V6a2.75 2.75 0 1 0-5.5 0v2a.75.75 0 0 0 1.5 0V6a1.25 1.25 0 1 1 2.5 0v6.25H3.75V6ZM9.5 18.25a.25.25 0 0 0 .25-.25v-4.25h-6V18c0 .138.112.25.25.25h5.5Zm10.5 0a.25.25 0 0 0 .25-.25v-4.25h-6V18c0 .138.112.25.25.25H20Z"
		clip-rule="evenodd"
	/>
</svg>
