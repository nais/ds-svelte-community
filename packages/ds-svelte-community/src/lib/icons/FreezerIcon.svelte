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
		d="M5.25 3A.75.75 0 0 1 6 2.25h12a.75.75 0 0 1 .75.75v18a.75.75 0 0 1-.75.75H6a.75.75 0 0 1-.75-.75zM8 14.25a.75.75 0 0 0 .75-.75v-3A.75.75 0 0 0 8 9.75H6.75v-6h10.5v16.5H6.75v-6zm-.75-3h-.5v1.5h.5zm6.5-5.75a.75.75 0 0 0-1.5 0v.7l-.607-.35a.75.75 0 1 0-.75 1.3l.607.35-.607.35a.75.75 0 1 0 .75 1.3l.607-.35v.7a.75.75 0 0 0 1.5 0v-.701l.607.35a.75.75 0 1 0 .75-1.299L14.5 7.5l.607-.35a.75.75 0 0 0-.75-1.3l-.607.351z"
		clip-rule="evenodd"
	/>
</svg>
