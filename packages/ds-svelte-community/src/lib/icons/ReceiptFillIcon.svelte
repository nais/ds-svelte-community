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
		d="M6.53 3.47A.75.75 0 0 0 5.25 4v16c0 .414.336.75.75.75h12a.75.75 0 0 0 .75-.75V4a.75.75 0 0 0-1.28-.53L16 4.94l-1.47-1.47a.75.75 0 0 0-1.06 0L12 4.94l-1.47-1.47a.75.75 0 0 0-1.06 0L8 4.94zM9.5 9.25a.75.75 0 0 0 0 1.5h5a.75.75 0 0 0 0-1.5zM8.75 13a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75m.75 2.25a.75.75 0 0 0 0 1.5h5a.75.75 0 0 0 0-1.5z"
		clip-rule="evenodd"
	/>
</svg>
