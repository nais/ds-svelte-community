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
		d="M8.25 4c0 .414.336.75.75.75h.203v4.49L3.73 16.73a2.395 2.395 0 0 0-.12 2.701c.475.785 1.373 1.319 2.44 1.319h11.9c1.067 0 1.965-.534 2.44-1.319a2.395 2.395 0 0 0-.12-2.7l-5.473-7.492V4.75H15a.75.75 0 0 0 0-1.5H9a.75.75 0 0 0-.75.75Zm2.309 5.927a.75.75 0 0 0 .144-.443V4.75h2.594v4.734c0 .16.05.314.144.443l.967 1.323H9.592l.966-1.323ZM8.496 12.75l-3.554 4.866a.897.897 0 0 0-.05 1.038c.197.324.6.596 1.159.596h11.898c.558 0 .962-.272 1.16-.596a.897.897 0 0 0-.05-1.038l-3.555-4.866H8.496Z"
		clip-rule="evenodd"
	/>
</svg>
