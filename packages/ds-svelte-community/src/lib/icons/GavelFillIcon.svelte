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
		d="M11.53 3.47a.75.75 0 0 0-1.06 0l-.707.707a1.75 1.75 0 0 0-.513 1.237v.673a.25.25 0 0 1-.073.176L6.262 9.187a.25.25 0 0 1-.177.073H5.41a1.75 1.75 0 0 0-1.23.507l-.709.7a.75.75 0 0 0-.002 1.063l4.5 4.5a.75.75 0 0 0 1.06 0l.707-.707a1.75 1.75 0 0 0 .513-1.237v-.672a.25.25 0 0 1 .073-.177l.927-.926 7.22 7.22a.75.75 0 1 0 1.06-1.061l-7.22-7.22.927-.927a.25.25 0 0 1 .177-.073h.672c.464 0 .909-.184 1.237-.513l.707-.707a.75.75 0 0 0 0-1.06z"
		clip-rule="evenodd"
	/>
</svg>
