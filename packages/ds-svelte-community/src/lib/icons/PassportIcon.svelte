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
		d="M4.25 3A.75.75 0 0 1 5 2.25h12A2.75 2.75 0 0 1 19.75 5v14A2.75 2.75 0 0 1 17 21.75H5a.75.75 0 0 1-.75-.75V3Zm1.5.75v16.5H17c.69 0 1.25-.56 1.25-1.25V5c0-.69-.56-1.25-1.25-1.25H5.75Zm3.22 3.22a.75.75 0 0 1 .53-.22h5a.75.75 0 0 1 .75.75V11c0 .592-.248 1.092-.546 1.48a4.668 4.668 0 0 1-1.024.947 7.657 7.657 0 0 1-1.361.753l-.028.011-.008.003-.003.002L12 13.5l-.279.696h-.001l-.003-.002-.008-.003-.027-.011a5.506 5.506 0 0 1-.408-.189 7.657 7.657 0 0 1-.954-.564 4.669 4.669 0 0 1-1.024-.946c-.299-.389-.546-.89-.546-1.481V7.5c0-.198.079-.39.22-.53Zm2.751 7.226L12 13.5c.278.696.28.696.28.696a.753.753 0 0 1-.559 0ZM10.25 8.25V11c0 .158.065.345.235.566.171.223.418.438.695.632.274.192.552.345.765.451l.055.028.055-.027c.213-.107.491-.26.765-.452.277-.194.524-.41.695-.632.17-.22.235-.408.235-.566V8.25h-3.5Zm-.75 8a.75.75 0 0 0 0 1.5h5a.75.75 0 0 0 0-1.5h-5Z"
		clip-rule="evenodd"
	/>
</svg>
