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
		d="M12 2.25a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5ZM7.75 13c0-1.987 1.912-3.75 4.25-3.75s4.25 1.763 4.25 3.75v8a.75.75 0 0 1-.75.75h-7c-1.207 0-2.18-.463-2.836-1.282-.636-.795-.914-1.854-.914-2.968 0-1.114.278-2.173.914-2.969.513-.64 1.222-1.064 2.086-1.217V13Zm.866 3.116a1.25 1.25 0 0 1 1.768 0l.116.116.116-.116a1.25 1.25 0 0 1 1.768 1.768L10.5 19.768l-1.884-1.884a1.25 1.25 0 0 1 0-1.768Z"
		clip-rule="evenodd"
	/>
</svg>
