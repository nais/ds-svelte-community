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
		d="M11.823 4.399C10.47 3.045 8.46 2.789 6.72 3.463a.75.75 0 0 0-.26 1.23l1.76 1.76c.083.082.092.2.038.284-.173.274-.424.642-.652.87-.227.227-.595.478-.869.651a.229.229 0 0 1-.284-.037l-1.76-1.76a.75.75 0 0 0-1.23.259c-.674 1.74-.419 3.75.936 5.103C5.624 13.05 7.387 13.375 9 12.925l6.021 6.595c.814.891 2.2 1.21 3.298.468.316-.213.656-.468.928-.74.272-.272.527-.612.74-.928.74-1.098.423-2.484-.468-3.298l-6.595-6.021c.45-1.614.124-3.376-1.102-4.602Zm5.088 11.84a.75.75 0 0 0 0 1.5h.01a.75.75 0 0 0 0-1.5h-.01Z"
		clip-rule="evenodd"
	/>
</svg>
