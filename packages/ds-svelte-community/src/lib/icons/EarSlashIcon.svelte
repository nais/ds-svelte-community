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
		d="M5.552 8.64c0-3.95 3.522-6.972 7.427-6.371a6.4 6.4 0 0 1 4.028 2.311.75.75 0 1 1-1.166.944 4.9 4.9 0 0 0-3.09-1.773 4.947 4.947 0 0 0-5.7 4.89.75.75 0 1 1-1.5 0m7.065-2.764a3.417 3.417 0 0 0-4.065 3.355v1.77c0 .413.336.75.75.75.212 0 .41.051.582.143a.75.75 0 0 0 .701-1.327 2.7 2.7 0 0 0-.533-.213V9.23a1.917 1.917 0 0 1 3.362-1.26.75.75 0 1 0 1.131-.985 3.4 3.4 0 0 0-1.928-1.11m5.222 5.756a.75.75 0 0 0-1.44-.423l-1.85 6.295a3.826 3.826 0 0 1-5.808 2.094.75.75 0 0 0-.839 1.244 5.326 5.326 0 0 0 8.085-2.915zM20.53 5.53a.75.75 0 0 0-1.06-1.06l-15 15a.75.75 0 1 0 1.06 1.06z"
		clip-rule="evenodd"
	/>
</svg>
