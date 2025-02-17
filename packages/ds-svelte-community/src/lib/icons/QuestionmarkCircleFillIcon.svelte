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
		d="M12 21.75c5.385 0 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25 2.25 6.615 2.25 12s4.365 9.75 9.75 9.75m0-14a1.75 1.75 0 0 0-1.75 1.75.75.75 0 0 1-1.5 0A3.25 3.25 0 0 1 12 6.25h.136a3.114 3.114 0 0 1 1.945 5.545l-.441.354A2.37 2.37 0 0 0 12.75 14a.75.75 0 0 1-1.5 0 3.87 3.87 0 0 1 1.453-3.023l.441-.353a1.614 1.614 0 0 0-1.008-2.874zm-.95 9.15a.95.95 0 1 1 1.9 0 .95.95 0 0 1-1.9 0"
		clip-rule="evenodd"
	/>
</svg>
