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
		d="M4 7.25a.75.75 0 0 0-.75.75v3a6.753 6.753 0 0 0 4.5 6.366V18c0 .414.336.75.75.75h7a.75.75 0 0 0 .75-.75v-.634A6.753 6.753 0 0 0 20.75 11V8a.75.75 0 0 0-.75-.75H4Z"
	/>
</svg>
