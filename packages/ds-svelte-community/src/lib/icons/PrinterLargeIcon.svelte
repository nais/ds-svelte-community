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
		d="M6.33 2.665a.75.75 0 0 1 1.005-.336l7.842 3.921H16a.75.75 0 0 1 .75.75v5.599l1.834-1.223a.75.75 0 1 1 .832 1.248l-2.666 1.777V15.6l1.834-1.223a.75.75 0 1 1 .832 1.248l-2.666 1.777V20a.75.75 0 0 1-.75.75H5a.75.75 0 0 1-.75-.75V7A.75.75 0 0 1 5 6.25h6.823L6.665 3.67a.75.75 0 0 1-.336-1.005Zm8.685 5.085H5.75v11.5h9.5V7.75h-.235ZM8 16.25a.75.75 0 0 0 0 1.5h5a.75.75 0 0 0 0-1.5H8Z"
		clip-rule="evenodd"
	/>
</svg>
