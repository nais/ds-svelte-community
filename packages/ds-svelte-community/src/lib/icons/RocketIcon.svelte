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
		d="M19.606 3.758A7.821 7.821 0 0 0 12.97 5.97l-1.78 1.78H6.5a.75.75 0 0 0-.53.22l-3 3a.75.75 0 0 0 .383 1.265l3.578.716c.782.156 1.5.484 2.114.943L7.47 15.47a.75.75 0 1 0 1.06 1.06l1.576-1.575c.459.614.787 1.332.943 2.114l.716 3.578a.75.75 0 0 0 1.265.383l3-3a.75.75 0 0 0 .22-.53v-4.69l1.78-1.78a7.821 7.821 0 0 0 2.212-6.636.75.75 0 0 0-.636-.636Zm-8.431 10.128a6.74 6.74 0 0 1 1.345 2.89l.44 2.203 1.79-1.79V12.5a.75.75 0 0 1 .22-.53l2-2a6.321 6.321 0 0 0 1.843-4.783A6.321 6.321 0 0 0 14.03 7.03l-2 2a.75.75 0 0 1-.53.22H6.81l-1.789 1.79 2.204.44a6.74 6.74 0 0 1 2.89 1.345l1.355-1.355a.75.75 0 1 1 1.06 1.06l-1.355 1.356Z"
		clip-rule="evenodd"
	/>
</svg>
