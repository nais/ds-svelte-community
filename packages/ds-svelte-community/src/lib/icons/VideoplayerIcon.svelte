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
		d="M4 5.25A1.75 1.75 0 0 0 2.25 7v10c0 .966.784 1.75 1.75 1.75h16A1.75 1.75 0 0 0 21.75 17V7A1.75 1.75 0 0 0 20 5.25zM3.75 7A.25.25 0 0 1 4 6.75h16a.25.25 0 0 1 .25.25v10a.25.25 0 0 1-.25.25H4a.25.25 0 0 1-.25-.25zm6.614 1.844A.75.75 0 0 0 9.25 9.5v5a.75.75 0 0 0 1.114.656l4.5-2.5a.75.75 0 0 0 0-1.312zM12.956 12l-2.206 1.225v-2.45z"
		clip-rule="evenodd"
	/>
</svg>
