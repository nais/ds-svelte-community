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
		d="M12 .5a1.5 1.5 0 0 1 .75 2.798V5h5.5a.75.75 0 0 1 .75.75v3.5h2.24a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-.75.75H19v3.5a.75.75 0 0 1-.75.75H5.75a.75.75 0 0 1-.75-.75v-3.5H2.75A.75.75 0 0 1 2 14v-4a.75.75 0 0 1 .75-.75H5v-3.5A.75.75 0 0 1 5.75 5h5.5V3.298A1.498 1.498 0 0 1 12 .5M9 14a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5zm-5.5-.75H5v-2.5H3.5zm15.5 0h1.49v-2.5H19zM9.5 9a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m5 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3"
		clip-rule="evenodd"
	/>
</svg>
