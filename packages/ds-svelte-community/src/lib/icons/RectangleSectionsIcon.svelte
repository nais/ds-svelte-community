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
		d="M3.002 2.25a.75.75 0 0 0-.75.75v18c0 .414.336.75.75.75h17.996a.75.75 0 0 0 .75-.75V3a.75.75 0 0 0-.75-.75H3.002Zm9.748 12.772a.824.824 0 0 0 0-.044V9.75h7.498v10.5H12.75v-5.228Zm-8.998.728v4.5h7.498v-4.5H3.752Zm7.498-1.5H3.752V3.75h7.498v10.5Zm8.998-6H12.75v-4.5h7.498v4.5Z"
		clip-rule="evenodd"
	/>
</svg>
