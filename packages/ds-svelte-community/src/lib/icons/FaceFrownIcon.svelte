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
		d="M12 3.75a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12m6.5-3.25a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m6.5 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m.12 8.657a.75.75 0 1 0 1.26-.814C15.6 15 13.762 14.25 12 14.25s-3.6.749-4.63 2.343a.75.75 0 1 0 1.26.814c.692-1.072 1.993-1.657 3.37-1.657s2.678.585 3.37 1.657"
		clip-rule="evenodd"
	/>
</svg>
