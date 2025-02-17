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
		d="M12 3.75a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12m8.8 4.9a.95.95 0 1 1 1.9 0 .95.95 0 0 1-1.9 0m-.8-7.4c0-.966.784-1.75 1.75-1.75h.136a1.614 1.614 0 0 1 1.008 2.874l-.441.353A3.87 3.87 0 0 0 11.25 14a.75.75 0 0 0 1.5 0c0-.72.327-1.402.89-1.851l.441-.354a3.114 3.114 0 0 0-1.945-5.545H12A3.25 3.25 0 0 0 8.75 9.5a.75.75 0 0 0 1.5 0"
		clip-rule="evenodd"
	/>
</svg>
