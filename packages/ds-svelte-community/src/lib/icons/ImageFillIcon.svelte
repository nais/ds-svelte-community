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
		d="M2.25 6c0-.966.784-1.75 1.75-1.75h16c.966 0 1.75.784 1.75 1.75v12A1.75 1.75 0 0 1 20 19.75H4A1.75 1.75 0 0 1 2.25 18zM8 8.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5M5.25 10a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0m12.892 7.861a.25.25 0 0 1-.208.389h-1.202a.25.25 0 0 1-.208-.111l-2.316-3.475a.25.25 0 0 0-.416 0l-2.316 3.475a.25.25 0 0 1-.209.111h-1.201a.25.25 0 0 1-.208-.389l3.518-5.277a.75.75 0 0 1 1.248 0z"
		clip-rule="evenodd"
	/>
</svg>
