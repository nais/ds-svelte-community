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
		d="M5.53 4.207a.75.75 0 0 0-1.06 1.06l1.516 1.517a7.601 7.601 0 0 0-.826 1.403 10.46 10.46 0 0 0-.865 3.063H3a.75.75 0 0 0 0 1.5h1.281c.135 1.616.703 3.246 1.69 4.48l-1.501 1.5a.75.75 0 1 0 1.06 1.061l1.516-1.515C8.448 19.339 10.253 19.75 12 19.75c1.774 0 3.555-.369 4.962-1.465l1.508 1.507a.75.75 0 1 0 1.06-1.06l-1.51-1.51c.957-1.228 1.552-2.873 1.696-4.472H21a.75.75 0 0 0 0-1.5h-1.286a9.89 9.89 0 0 0-.789-3.058 6.318 6.318 0 0 0-.88-1.438l1.485-1.486a.75.75 0 0 0-1.06-1.06l-1.54 1.54C15.545 4.79 13.654 4.25 12 4.25c-1.784 0-3.557.353-4.965 1.462L5.53 4.207Zm1.994 12.507C6.402 15.616 5.75 13.8 5.75 12c0-.62.144-1.438.409-2.25h5.091v8.47c-1.47-.119-2.798-.6-3.726-1.506Zm5.226 1.51c1.498-.109 2.787-.56 3.717-1.501 1.088-1.1 1.783-2.976 1.783-4.723 0-.644-.112-1.458-.346-2.25H12.75v8.474Zm4.518-9.974a3.902 3.902 0 0 0-.763-.936C15.425 6.364 13.594 5.75 12 5.75c-1.838 0-3.382.417-4.463 1.524a4.907 4.907 0 0 0-.724.976h10.455Z"
		clip-rule="evenodd"
	/>
</svg>
