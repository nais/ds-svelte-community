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
		d="M21.03 5.03a.75.75 0 0 0-1.06-1.06l-16 16a.75.75 0 1 0 1.06 1.06l16-16Zm-9.999 12.68c-.206-.018-.291-.267-.145-.413l8.198-8.198a.247.247 0 0 1 .336-.013 12.832 12.832 0 0 1 1.603 1.665 10.417 10.417 0 0 1 .574.79l.046.074a.751.751 0 0 1 0 .772l-.046.075a10.384 10.384 0 0 1-.573.79 12.95 12.95 0 0 1-1.794 1.825c-1.593 1.328-4.007 2.674-7.23 2.674-.331 0-.654-.014-.969-.041Zm3.685-11.124a.242.242 0 0 1 .108.409l-.993.993a.26.26 0 0 1-.279.055 4.25 4.25 0 0 0-5.51 5.51.26.26 0 0 1-.055.279l-1.94 1.94a.246.246 0 0 1-.314.032 12.844 12.844 0 0 1-2.756-2.553 10.413 10.413 0 0 1-.606-.84.771.771 0 0 1-.014-.796l.047-.074a10.456 10.456 0 0 1 .573-.79c.4-.5.997-1.163 1.793-1.826C6.363 7.596 8.778 6.25 12 6.25c.98 0 1.886.125 2.716.335ZM12.05 9.25c.2.004.277.24.135.383l-2.552 2.552c-.142.142-.379.066-.383-.135V12a2.75 2.75 0 0 1 2.8-2.75Z"
		clip-rule="evenodd"
	/>
</svg>
