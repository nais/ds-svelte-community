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
		d="M6.25 3A.75.75 0 0 1 7 2.25h10a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-.75.75h-.25v1H18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-.75.75H6a.75.75 0 0 1-.75-.75V8.5A.75.75 0 0 1 6 7.75h1.25v-1H7A.75.75 0 0 1 6.25 6V3Zm10 .75v1.5h-8.5v-1.5h8.5Zm-1 4v-1h-6.5v1h6.5Zm-8.5 12.5v-11h10.5v11H6.75Zm3.75-9.5a.75.75 0 0 0-.75.75v1.25H8.5a.75.75 0 0 0-.75.75v3c0 .414.336.75.75.75h1.25v1.25c0 .414.336.75.75.75h3a.75.75 0 0 0 .75-.75v-1.25h1.25a.75.75 0 0 0 .75-.75v-3a.75.75 0 0 0-.75-.75h-1.25V11.5a.75.75 0 0 0-.75-.75h-3Zm.75 2.75v-1.25h1.5v1.25c0 .414.336.75.75.75h1.25v1.5H13.5a.75.75 0 0 0-.75.75v1.25h-1.5V16.5a.75.75 0 0 0-.75-.75H9.25v-1.5h1.25a.75.75 0 0 0 .75-.75Z"
		clip-rule="evenodd"
	/>
</svg>
