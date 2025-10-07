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
		d="M20 3.75c.966 0 1.75.784 1.75 1.75v14a.75.75 0 0 1-1.5 0v-1.25h-3.5v1.25a.75.75 0 0 1-1.5 0v-1.67a20 20 0 0 0 1.5-1.78v.7h3.5v-2h-2.606q.462-.73.86-1.5h1.746v-2h-.846q.17-.435.318-.88l.206-.62h.322v-2h-.709l-.768 2.303a19.1 19.1 0 0 1-7.87 10.08 1 1 0 0 1-.1.052l-.022.01-.067.02q-.042.013-.085.022l-.012.002a1 1 0 0 1-.117.011h-8l-.005-.001h-.009a.8.8 0 0 1-.276-.058.75.75 0 0 1-.37-.336l-.031-.063-.004-.01a.8.8 0 0 1-.055-.281.75.75 0 0 1 .438-.683l.028-.012a19.34 19.34 0 0 0 10.98-11.764l.054-.165V5.5a1.75 1.75 0 1 1 3.5 0v.75h1.5V5.5c0-.966.784-1.75 1.75-1.75m-5 1.5a.25.25 0 0 0-.25.25v.75h.5V5.5a.25.25 0 0 0-.25-.25m5 0a.25.25 0 0 0-.25.25v.75h.5V5.5a.25.25 0 0 0-.25-.25"
	/>
</svg>
