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
		d="M14.5 2.813a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5ZM9.788 3.981c.2-.047.36.166.285.358a4.75 4.75 0 0 0 7.703 5.164c.163-.156.45-.062.459.163.011.283.015.562.015.834v3c0 .809.424 1.92.92 2.915a18.097 18.097 0 0 0 .936 1.641l.014.022.004.006a.75.75 0 0 1-.624 1.166h-4.338a3.25 3.25 0 0 1-6.324 0H4.5a.75.75 0 0 1-.624-1.166l.004-.006.014-.022.06-.091c.05-.081.125-.2.215-.35.18-.301.42-.722.66-1.2.497-.994.921-2.106.921-2.915v-3c0-1.5.114-3.21 1.001-4.54.642-.964 1.625-1.646 3.037-1.979Zm.63 15.27h3.163A1.748 1.748 0 0 1 12 20.25a1.75 1.75 0 0 1-1.581-1Z"
		clip-rule="evenodd"
	/>
</svg>
