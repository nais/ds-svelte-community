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
		d="M19.75 4.02a.766.766 0 0 0-.927-.75l-.366.08a30.818 30.818 0 0 1-12.914 0l-.367-.08a.766.766 0 0 0-.926.75V13a7.75 7.75 0 0 0 15.5 0V4.02Zm-14 .903c4.127.814 8.373.814 12.5 0V13a6.25 6.25 0 1 1-12.5 0V4.923Zm4 4.577a2.25 2.25 0 1 1 4.5 0v.75h.25c.69 0 1.25.56 1.25 1.25V15a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v-3.5c0-.69.56-1.25 1.25-1.25h.25V9.5Zm3 0v.75h-1.5V9.5a.75.75 0 0 1 1.5 0Zm-3 2.25v2.5h4.5v-2.5h-4.5Z"
		clip-rule="evenodd"
	/>
</svg>
