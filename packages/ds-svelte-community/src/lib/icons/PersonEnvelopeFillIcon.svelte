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
		d="M12 2.25a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5m0 12A6.75 6.75 0 0 0 5.25 21a.75.75 0 0 0 .75.75h5.525c.172 0 .293-.172.262-.341A2.3 2.3 0 0 1 11.75 21v-4a2.25 2.25 0 0 1 1.002-1.872l.517-.345c.18-.12.132-.39-.08-.427A7 7 0 0 0 12 14.25m4.584.126a.75.75 0 0 1 .832 0l2.28 1.52a.25.25 0 0 1-.027.431l-2.557 1.278a.25.25 0 0 1-.224 0l-2.557-1.278a.25.25 0 0 1-.026-.432zm3.804 3.268a.25.25 0 0 1 .362.224V21a.75.75 0 0 1-.75.75h-6a.75.75 0 0 1-.75-.75v-3.132a.25.25 0 0 1 .362-.224l3.053 1.527a.75.75 0 0 0 .67 0z"
		clip-rule="evenodd"
	/>
</svg>
