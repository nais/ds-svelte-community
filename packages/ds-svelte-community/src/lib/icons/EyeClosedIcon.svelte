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
		d="M2.614 9.357a.75.75 0 0 1 1.029.257l.003.005.02.033.093.139c.085.123.214.303.39.522.35.438.877 1.024 1.581 1.61C7.137 13.097 9.223 14.25 12 14.25c2.777 0 4.863-1.154 6.27-2.326a11.348 11.348 0 0 0 1.582-1.611 8.92 8.92 0 0 0 .481-.661.259.259 0 0 0 .02-.033l.004-.005a.75.75 0 0 1 1.286.772L21 10c.643.386.642.387.642.387v.002l-.004.005-.01.015-.032.051a10.417 10.417 0 0 1-.573.79c-.304.38-.722.855-1.256 1.352l.841 1.002a.75.75 0 1 1-1.149.965l-.847-1.01c-.577.423-1.24.83-1.987 1.176l.497 1.17a.75.75 0 1 1-1.38.587l-.518-1.22c-.758.233-1.582.394-2.474.453V17a.75.75 0 0 1-1.5 0v-1.275a10.87 10.87 0 0 1-2.475-.453l-.516 1.215a.75.75 0 1 1-1.38-.586l.494-1.166a11.706 11.706 0 0 1-1.987-1.178l-.845 1.007a.75.75 0 1 1-1.15-.964l.84-1c-.533-.496-.95-.97-1.254-1.35a10.451 10.451 0 0 1-.574-.79 3.725 3.725 0 0 1-.032-.05l-.01-.016-.002-.005-.001-.002-.001-.001a.75.75 0 0 1 .257-1.03Z"
	/>
</svg>
