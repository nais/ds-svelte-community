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
		d="M15.264 4.254a.257.257 0 0 0 .328-.159l.074-.223c.429-1.285-.69-2.515-1.98-2.31-.672.106-1.324.188-1.686.188-.363 0-1.014-.082-1.687-.189-1.29-.204-2.408 1.026-1.98 2.31l.075.225a.257.257 0 0 0 .328.158c.981-.34 2.073-.504 3.264-.504s2.283.164 3.264.504M12 5.25c-1.739 0-3.116.393-4.183 1.13-1.068.735-1.758 1.767-2.204 2.925-.817 2.12-.86 4.8-.863 7.204-.127.065-.27.145-.416.242-.42.28-1.084.85-1.084 1.749 0 .77.388 1.324.72 1.655a3 3 0 0 0 .666.5c.113.06.236.095.364.095h14a.75.75 0 0 0 .335-.08h.003a2 2 0 0 0 .234-.14 3 3 0 0 0 .458-.375c.332-.331.72-.886.72-1.655 0-.898-.664-1.469-1.084-1.749a4 4 0 0 0-.416-.242c-.002-2.404-.046-5.085-.863-7.204-.446-1.158-1.136-2.19-2.204-2.926C15.116 5.643 13.74 5.25 12 5.25"
		clip-rule="evenodd"
	/>
</svg>
