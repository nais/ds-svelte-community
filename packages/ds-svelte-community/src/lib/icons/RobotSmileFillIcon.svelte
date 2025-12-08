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
		d="M12 .5a1.5 1.5 0 0 1 .75 2.798V5h5.5a.75.75 0 0 1 .75.75v3.5h2.24a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-.75.75H19v3.5a.75.75 0 0 1-.75.75H5.75a.75.75 0 0 1-.75-.75v-3.5H2.75A.75.75 0 0 1 2 14v-4a.75.75 0 0 1 .75-.75H5v-3.5A.75.75 0 0 1 5.75 5h5.5V3.298A1.498 1.498 0 0 1 12 .5M9.28 13.72a.75.75 0 0 0-1.06 1.06l.01.011.018.017.059.054a5.7 5.7 0 0 0 .954.668c.642.357 1.58.72 2.739.72a5.64 5.64 0 0 0 2.74-.72c.32-.178.574-.358.748-.496q.132-.105.205-.172.038-.032.059-.054l.018-.017.01-.01.052-.057a.75.75 0 0 0-1.056-1.056l-.056.052-.029.025a4 4 0 0 1-.68.475 4.14 4.14 0 0 1-2.011.53 4.14 4.14 0 0 1-2.01-.53 4 4 0 0 1-.681-.475zm5.442-.003-.001.002zM3.5 13.25H5v-2.5H3.5zm15.5 0h1.49v-2.5H19zM9.5 9a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m5 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3"
		clip-rule="evenodd"
	/>
</svg>
