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
		d="M20.41 7.21a.75.75 0 0 0-.82-1.255l-6.532 4.275-3.006-1.967a.75.75 0 0 0-.822 0l-5.64 3.692a.75.75 0 0 0 .82 1.255l5.23-3.423 3.007 1.967a.75.75 0 0 0 .822 0L20.41 7.21Zm0 4.835a.75.75 0 0 0-.82-1.255l-6.532 4.275-3.006-1.967a.75.75 0 0 0-.822 0L3.59 16.79a.75.75 0 1 0 .82 1.255l5.23-3.424 3.007 1.968a.75.75 0 0 0 .822 0l6.942-4.544Z"
		clip-rule="evenodd"
	/>
</svg>
