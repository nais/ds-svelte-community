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
		d="M9.25 2a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-1.25v1.532a8.75 8.75 0 1 1-1.5 0V2.75H10A.75.75 0 0 1 9.25 2ZM12 5.75a7.25 7.25 0 1 0 0 14.5 7.25 7.25 0 0 0 0-14.5Zm6.894-2.473a.75.75 0 1 0-1.061 1.061l2.828 2.828a.75.75 0 1 0 1.061-1.06l-2.828-2.829ZM5.75 13a6.25 6.25 0 1 1 12.5 0 6.25 6.25 0 0 1-12.5 0Zm4.37-3.146a.75.75 0 0 1 .744-.01l4.5 2.5a.75.75 0 0 1 0 1.312l-4.5 2.5A.75.75 0 0 1 9.75 15.5v-5a.75.75 0 0 1 .37-.646Z"
		clip-rule="evenodd"
	/>
</svg>
