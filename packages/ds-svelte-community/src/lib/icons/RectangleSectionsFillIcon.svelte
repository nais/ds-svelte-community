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
		d="M11.25 2.75a.5.5 0 0 0-.5-.5H3.002a.75.75 0 0 0-.75.75v10.75a.5.5 0 0 0 .5.5h7.998a.5.5 0 0 0 .5-.5v-11Zm-8.498 13a.5.5 0 0 0-.5.5V21c0 .414.336.75.75.75h7.748a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-.5-.5H2.752Zm9.998 5.5a.5.5 0 0 0 .5.5h7.748a.75.75 0 0 0 .75-.75V10.25a.5.5 0 0 0-.5-.5H13.25a.5.5 0 0 0-.5.5v11Zm8.498-13a.5.5 0 0 0 .5-.5V3a.75.75 0 0 0-.75-.75H13.25a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 .5.5h7.998Z"
		clip-rule="evenodd"
	/>
</svg>
