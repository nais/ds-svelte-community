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
		d="M4.25 3A.75.75 0 0 1 5 2.25h12A2.75 2.75 0 0 1 19.75 5v14A2.75 2.75 0 0 1 17 21.75H5a.75.75 0 0 1-.75-.75V3ZM9.5 6.75a.75.75 0 0 0-.75.75V11c0 .592.247 1.092.546 1.48a4.64 4.64 0 0 0 1.024.947 7.657 7.657 0 0 0 1.269.713.946.946 0 0 0 .822 0 7.657 7.657 0 0 0 1.269-.713c.348-.243.726-.56 1.024-.946.298-.389.546-.89.546-1.481V7.5a.75.75 0 0 0-.75-.75h-5Zm.75 4.25c0 .158.065.345.235.566.171.223.418.438.695.632.274.192.552.345.765.451l.055.028.055-.027c.213-.107.491-.26.765-.452.277-.194.524-.41.695-.632.17-.22.235-.408.235-.566V8.25h-3.5V11Zm-.75 5.25a.75.75 0 0 0 0 1.5h5a.75.75 0 0 0 0-1.5h-5Z"
		clip-rule="evenodd"
	/>
</svg>
