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
		d="M4 5.25A1.75 1.75 0 0 0 2.25 7v10c0 .966.784 1.75 1.75 1.75h16A1.75 1.75 0 0 0 21.75 17V7A1.75 1.75 0 0 0 20 5.25H4ZM3.75 7A.25.25 0 0 1 4 6.75h16a.25.25 0 0 1 .25.25v10a.25.25 0 0 1-.25.25H4a.25.25 0 0 1-.25-.25V7Zm6.614 1.844A.75.75 0 0 0 9.25 9.5v5a.75.75 0 0 0 1.114.656l4.5-2.5a.75.75 0 0 0 0-1.312l-4.5-2.5ZM12.956 12l-2.206 1.225v-2.45L12.956 12Z"
		clip-rule="evenodd"
	/>
</svg>
