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
		d="m14 11.06 4.422 4.422h-1.654a.75.75 0 0 0 0 1.5h3.535a.75.75 0 0 0 .75-.75v-3.535a.75.75 0 1 0-1.5 0v1.796L14.53 9.47a.75.75 0 0 0-1.06 0L10 12.94 4.53 7.47a.75.75 0 0 0-1.06 1.06l6 6a.75.75 0 0 0 1.06 0z"
	/>
</svg>
