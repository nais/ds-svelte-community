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
		d="M4.25 3.5c0-.69.56-1.25 1.25-1.25h13c.69 0 1.25.56 1.25 1.25v7.318a.25.25 0 0 1-.427.177l-.409-.41A2 2 0 0 0 17.5 10H10a2 2 0 0 0-2 2v9c0 .135.013.267.039.395.035.174-.087.355-.265.355H5.5c-.69 0-1.25-.56-1.25-1.25v-17ZM12.37 7a.75.75 0 0 1 .75-.75h2.5a.75.75 0 1 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75Zm-1.15-.55a.75.75 0 1 0-1.2-.9l-.81 1.078a.25.25 0 0 1-.377.026L8.65 6.47a.75.75 0 0 0-1.06 1.06l1 1a.75.75 0 0 0 1.13-.08l1.5-2ZM12 11.5h-2a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h1.5a.25.25 0 0 0 .25-.25V17a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 .75.75v4.25c0 .138.112.25.25.25H19a.5.5 0 0 0 .5-.5v-7.5a.5.5 0 0 0-.146-.354l-1.5-1.5a.5.5 0 0 0-.354-.146H17a.25.25 0 0 0-.25.25v1.75a.75.75 0 0 1-.75.75h-3a.75.75 0 0 1-.75-.75v-1.75a.25.25 0 0 0-.25-.25Zm1.5 10a.25.25 0 0 1-.25-.25V18a.25.25 0 0 1 .25-.25h2a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.25.25h-2Zm.5-10a.25.25 0 0 0-.25.25v.75c0 .138.112.25.25.25h1a.25.25 0 0 0 .25-.25v-.75a.25.25 0 0 0-.25-.25h-1Z"
		clip-rule="evenodd"
	/>
</svg>
