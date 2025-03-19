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
		d="M3.75 3.25a.75.75 0 0 0 0 1.5h16.5a.75.75 0 0 0 0-1.5zm8.936 3.695a.75.75 0 0 0-1.371 0l-4 9a.75.75 0 0 0 1.37.61L9.6 14.5h4.803l.913 2.055a.75.75 0 0 0 1.37-.61zM13.734 13 12 9.097 10.265 13zM3 20a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 20"
		clip-rule="evenodd"
	/>
</svg>
