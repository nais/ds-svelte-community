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
		d="M6.97 9.03a.75.75 0 0 0 1.06 0l3.22-3.22v8.69a.75.75 0 0 0 1.5 0V5.81l3.22 3.22a.75.75 0 1 0 1.06-1.06l-4.5-4.5a.75.75 0 0 0-1.06 0l-4.5 4.5a.75.75 0 0 0 0 1.06M4.75 15.5a.75.75 0 0 0-1.5 0V19c0 .966.784 1.75 1.75 1.75h14A1.75 1.75 0 0 0 20.75 19v-3.5a.75.75 0 0 0-1.5 0V19a.25.25 0 0 1-.25.25H5a.25.25 0 0 1-.25-.25z"
		clip-rule="evenodd"
	/>
</svg>
