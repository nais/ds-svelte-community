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
		d="M12 2.75A3.75 3.75 0 0 0 8.25 6.5v5a3.75 3.75 0 1 0 7.5 0v-5A3.75 3.75 0 0 0 12 2.75ZM9.75 6.5a2.25 2.25 0 0 1 4.5 0v5a2.25 2.25 0 0 1-4.5 0v-5Zm-2 4a.75.75 0 0 0-1.5 0v1a5.75 5.75 0 0 0 4.905 5.688v2.562h-1.25a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5h-1.25v-2.537A5.751 5.751 0 0 0 17.75 11.5v-1a.75.75 0 0 0-1.5 0v1a4.25 4.25 0 0 1-8.5 0v-1Z"
		clip-rule="evenodd"
	/>
</svg>
