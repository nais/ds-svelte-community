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
		d="m12.757 21.257.466-.576c.39-.481.919-1.134 1.478-1.82 1.122-1.38 2.35-2.882 2.816-3.42 2.763-3.196 3.021-7.863-.037-10.921a7.75 7.75 0 0 0-10.96 0c-3.058 3.058-2.799 7.725-.037 10.92.466.539 1.694 2.04 2.817 3.42a1099.337 1099.337 0 0 1 1.943 2.397l.173.213v.001a.75.75 0 0 0 1.168 0l.173-.214ZM12 6.25a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5Z"
		clip-rule="evenodd"
	/>
</svg>
