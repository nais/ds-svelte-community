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
		d="M10 1.25a.75.75 0 0 0 0 1.5h1.25v1.532a8.75 8.75 0 1 0 1.5 0V2.75H14a.75.75 0 0 0 0-1.5h-4ZM4.75 13a7.25 7.25 0 1 1 14.5 0 7.25 7.25 0 0 1-14.5 0Zm13.083-9.723a.75.75 0 0 1 1.061 0l2.829 2.829a.75.75 0 0 1-1.061 1.06l-2.829-2.828a.75.75 0 0 1 0-1.06ZM10.12 9.854a.75.75 0 0 1 .744-.01l4.5 2.5a.75.75 0 0 1 0 1.312l-4.5 2.5A.75.75 0 0 1 9.75 15.5v-5a.75.75 0 0 1 .37-.646Zm1.13 4.371L13.456 13l-2.206-1.225v2.45Z"
		clip-rule="evenodd"
	/>
</svg>
