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
		d="M18.25 2.5a.75.75 0 0 0-1.5 0v.882c0 .97.548 1.855 1.415 2.289.358.18.585.546.585.947V7.5a.75.75 0 0 0 1.5 0v-.882a2.56 2.56 0 0 0-1.415-2.289 1.059 1.059 0 0 1-.585-.947V2.5ZM17 9.25a.25.25 0 0 1 .25.25v5a.25.25 0 0 1-.25.25H3.016a.75.75 0 0 1-.75-.75v-4a.75.75 0 0 1 .75-.75H17Zm2 5.5a.25.25 0 0 1-.25-.25v-5a.25.25 0 0 1 .25-.25h1c.966 0 1.75.784 1.75 1.75v2A1.75 1.75 0 0 1 20 14.75h-1Z"
		clip-rule="evenodd"
	/>
</svg>
