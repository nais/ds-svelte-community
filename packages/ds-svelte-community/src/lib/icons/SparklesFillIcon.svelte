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
		d="M13 1.75a.75.75 0 0 1 .68.433l.52 1.116 1.117.521a.75.75 0 0 1 0 1.36l-1.116.52-.521 1.117a.75.75 0 0 1-1.36 0l-.52-1.116-1.117-.521a.75.75 0 0 1 0-1.36l1.116-.52.521-1.117A.75.75 0 0 1 13 1.75Zm-6 2.5a.75.75 0 0 1 .68.433l1.157 2.48 2.48 1.157a.75.75 0 0 1 0 1.36l-2.48 1.157-1.157 2.48a.75.75 0 0 1-1.36 0l-1.157-2.48-2.48-1.157a.75.75 0 0 1 0-1.36l2.48-1.157 1.157-2.48A.75.75 0 0 1 7 4.25Zm8.68 4.433a.75.75 0 0 0-1.36 0l-1.793 3.844-3.844 1.793a.75.75 0 0 0 0 1.36l3.844 1.794 1.793 3.843a.75.75 0 0 0 1.36 0l1.794-3.843 3.843-1.794a.75.75 0 0 0 0-1.36l-3.843-1.793-1.794-3.844Z"
		clip-rule="evenodd"
	/>
</svg>
