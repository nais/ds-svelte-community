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
		d="M7.7 14.835c.224 0 .401.063.532.189a.625.625 0 0 1 .203.49.647.647 0 0 1-.203.497c-.13.121-.308.182-.532.182h-.693v-1.358H7.7Zm4.302.035c.215 0 .388.06.518.182a.62.62 0 0 1 .196.476v1.827c0 .2-.065.362-.196.483a.731.731 0 0 1-.518.182h-.609v-3.15h.61Z"
	/><path
		fill="currentColor"
		fill-rule="evenodd"
		d="M5.25 4.5c0-.69.56-1.25 1.25-1.25H14a.75.75 0 0 1 .53.22l4 4c.141.14.22.331.22.53v4.25H21a.75.75 0 0 1 .75.75v7a.75.75 0 0 1-.75.75H3a.75.75 0 0 1-.75-.75v-7a.75.75 0 0 1 .75-.75h2.25V4.5Zm9.25 4.25c-.69 0-1.25-.56-1.25-1.25V4.75h-6.5v7.5h10.5v-3.5H14.5Zm.25-2.94 1.44 1.44h-1.44V5.81Zm-6.112 8.283a2.044 2.044 0 0 0-.938-.203H5.957V19h1.05v-1.862H7.7c.36 0 .672-.068.938-.203a1.52 1.52 0 0 0 .623-.567 1.62 1.62 0 0 0 .224-.854 1.6 1.6 0 0 0-.224-.854 1.47 1.47 0 0 0-.623-.567Zm4.288 0a1.984 1.984 0 0 0-.924-.203h-1.659V19h1.66c.354 0 .662-.068.923-.203a1.51 1.51 0 0 0 .616-.581c.15-.247.224-.534.224-.861v-1.827a1.61 1.61 0 0 0-.224-.861 1.466 1.466 0 0 0-.616-.574ZM14.8 19v-5.11h3.29v.98h-2.254v1.134h2.072v.98H15.85V19H14.8Z"
		clip-rule="evenodd"
	/>
</svg>
