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
		d="M5.25 4.5c0-.69.56-1.25 1.25-1.25H14a.75.75 0 0 1 .53.22l4 4c.141.14.22.331.22.53v2.25a.75.75 0 0 1-1.5 0v-1.5H14.5c-.69 0-1.25-.56-1.25-1.25V4.75h-6.5v14.5h10.5v-1.5a.75.75 0 0 1 1.5 0v1.75c0 .69-.56 1.25-1.25 1.25h-11c-.69 0-1.25-.56-1.25-1.25zm9.5 1.31 1.44 1.44h-1.44zm-.53 11.97a.75.75 0 0 1 0-1.06l1.97-1.97H9.75a.75.75 0 0 1 0-1.5h6.44l-1.97-1.97a.75.75 0 1 1 1.06-1.06l3.25 3.25a.75.75 0 0 1 .22.523v.014a.75.75 0 0 1-.22.523l-3.25 3.25a.75.75 0 0 1-1.06 0"
		clip-rule="evenodd"
	/>
</svg>
