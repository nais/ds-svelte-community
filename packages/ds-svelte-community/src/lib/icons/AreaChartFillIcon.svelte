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
		d="M3.483 4.426A.75.75 0 0 0 2.25 5v10.197c0 .172.191.274.334.179a.745.745 0 0 1 .024-.015l4.412-2.71a.75.75 0 0 1 .859.052l2.221 1.764a.25.25 0 0 0 .268.028l10.278-5.156.978-.56a.25.25 0 0 0 .126-.217V6a.75.75 0 0 0-1.067-.681l-10.287 4.735a.25.25 0 0 1-.265-.036L3.483 4.426Zm18.267 6.44a.25.25 0 0 0-.374-.217l-.004.002a.723.723 0 0 1-.036.02L10.47 16.12a.75.75 0 0 1-.803-.082l-2.173-1.726a.25.25 0 0 0-.286-.017l-3.804 2.336-1.043.695a.25.25 0 0 0-.111.208V19c0 .414.336.75.75.75h18a.75.75 0 0 0 .75-.75v-8.134Z"
		clip-rule="evenodd"
	/>
</svg>
