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
		d="M3 4.25a.75.75 0 0 0-.75.75v3c0 .414.336.75.75.75h18a.75.75 0 0 0 .75-.75V5a.75.75 0 0 0-.75-.75H3ZM3.25 10a.25.25 0 0 1 .25-.25h17a.25.25 0 0 1 .25.25v6a.75.75 0 0 1-.75.75h-4.023l.524 1.954a.75.75 0 1 1-1.449.388l-.627-2.342h-4.85l-.627 2.342a.75.75 0 0 1-1.449-.388l.524-1.954H4a.75.75 0 0 1-.75-.75v-6Z"
		clip-rule="evenodd"
	/>
</svg>
