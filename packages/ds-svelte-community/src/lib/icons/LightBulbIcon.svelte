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
		d="M12 3.75c-1.495 0-2.812.54-3.747 1.505A5.382 5.382 0 0 0 6.75 9c0 .777.274 1.374.886 2.352.12.192.251.396.392.616.527.82 1.195 1.858 1.932 3.282h4.08c.737-1.424 1.405-2.462 1.932-3.282.141-.22.272-.424.392-.616.611-.978.886-1.575.886-2.352a5.382 5.382 0 0 0-1.503-3.745C14.812 4.29 13.495 3.75 12 3.75Zm-4.824.461C8.418 2.93 10.136 2.25 12 2.25c1.863 0 3.582.68 4.824 1.961A6.882 6.882 0 0 1 18.75 9c0 1.223-.476 2.126-1.114 3.148-.13.208-.269.424-.415.652-.575.894-1.27 1.975-2.05 3.535a.75.75 0 0 1-.671.415h-5a.75.75 0 0 1-.67-.415c-.781-1.56-1.476-2.64-2.05-3.535a62.528 62.528 0 0 1-.416-.652C5.726 11.126 5.25 10.223 5.25 9c0-1.852.732-3.557 1.926-4.789ZM10.5 19.25a.75.75 0 0 1 .75.75.95.95 0 0 0 .21.469c.143.179.319.281.54.281.221 0 .396-.102.54-.281a.95.95 0 0 0 .21-.469.75.75 0 0 1 1.5 0c0 .447-.201.983-.54 1.406-.357.446-.931.844-1.71.844-.779 0-1.354-.398-1.71-.844-.339-.423-.54-.959-.54-1.406a.75.75 0 0 1 .75-.75Zm-.5-2a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5h-4Z"
		clip-rule="evenodd"
	/>
</svg>
