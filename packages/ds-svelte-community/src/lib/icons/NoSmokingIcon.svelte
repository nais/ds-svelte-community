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
		d="M18.25 2.5a.75.75 0 0 0-1.5 0v.882c0 .97.548 1.855 1.415 2.289.358.18.585.546.585.947V7.5a.75.75 0 0 0 1.5 0v-.882a2.56 2.56 0 0 0-1.415-2.289 1.06 1.06 0 0 1-.585-.947zM5.97 6.47a.75.75 0 0 1 1.06 0l10 10a.75.75 0 1 1-1.06 1.06l-10-10a.75.75 0 0 1 0-1.06M2.25 10A.75.75 0 0 1 3 9.25h2.5a.75.75 0 0 1 0 1.5H3.75v2.5H9.5a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75zm11.25-.75a.75.75 0 0 0 0 1.5h3.75v2.5H17a.75.75 0 0 0 0 1.5h3A1.75 1.75 0 0 0 21.75 13v-2A1.75 1.75 0 0 0 20 9.25zm5.25 4v-2.5H20a.25.25 0 0 1 .25.25v2a.25.25 0 0 1-.25.25z"
		clip-rule="evenodd"
	/>
</svg>
