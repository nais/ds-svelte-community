<script lang="ts">
	import type { Snippet } from "svelte";

	type Props = {
		/**
		 * Title of the icon, used for accessibility
		 */
		title?: string;

		children?: Snippet;

		[key: string]: unknown;
	};

	let { title, children, ...restProps }: Props = $props();

	const id = $props.id();
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
	{...restProps}
>
	{#if title}
		<title {id}>{title}</title>
	{/if}
	{#if children}
		{@render children()}
	{/if}
	<path
		fill="currentColor"
		fill-rule="evenodd"
		d="M4.47 4.207a.75.75 0 0 1 1.06 0l1.505 1.505C8.443 4.603 10.216 4.25 12 4.25c1.654 0 3.545.54 4.93 1.497l1.54-1.54a.75.75 0 1 1 1.06 1.06l-1.486 1.487c.29.35.535.737.743 1.15a.24.24 0 0 1-.22.346H5.518a.242.242 0 0 1-.22-.349c.201-.4.43-.776.688-1.117L4.47 5.268a.75.75 0 0 1 0-1.06M19.503 9.94a.246.246 0 0 0-.24-.19H13a.25.25 0 0 0-.25.25v9.46c0 .145.122.26.265.247 1.426-.125 2.81-.536 3.947-1.422l1.508 1.507a.75.75 0 1 0 1.06-1.06l-1.51-1.51c.957-1.228 1.552-2.873 1.696-4.472H21a.75.75 0 0 0 0-1.5h-1.286c-.039-.417-.108-.86-.211-1.31m-8.253 9.516c0 .145-.123.26-.267.246-1.413-.135-2.806-.568-3.937-1.425L5.53 19.792a.75.75 0 0 1-1.06-1.06l1.502-1.503c-.988-1.233-1.556-2.863-1.69-4.479H3a.75.75 0 0 1 0-1.5h1.295a10 10 0 0 1 .248-1.316.246.246 0 0 1 .24-.184H11a.25.25 0 0 1 .25.25z"
		clip-rule="evenodd"
	/>
</svg>
