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
		d="M5 3.25a.75.75 0 0 0 0 1.5c7.87 0 14.25 6.38 14.25 14.25a.75.75 0 0 0 1.5 0c0-8.698-7.052-15.75-15.75-15.75ZM4.25 9A.75.75 0 0 1 5 8.25c5.937 0 10.75 4.813 10.75 10.75a.75.75 0 0 1-1.5 0A9.25 9.25 0 0 0 5 9.75.75.75 0 0 1 4.25 9ZM5 13.25a.75.75 0 0 0 0 1.5A4.25 4.25 0 0 1 9.25 19a.75.75 0 0 0 1.5 0A5.75 5.75 0 0 0 5 13.25Zm0 4.25a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z"
		clip-rule="evenodd"
	/>
</svg>
