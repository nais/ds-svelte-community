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
		d="M3 4.25a.75.75 0 0 0-.75.75v3c0 .414.336.75.75.75h.25V16c0 .414.336.75.75.75h4.023l-.524 1.954a.75.75 0 1 0 1.449.388l.627-2.342h4.85l.627 2.342a.75.75 0 0 0 1.449-.388l-.524-1.954H20a.75.75 0 0 0 .75-.75V8.75H21a.75.75 0 0 0 .75-.75V5a.75.75 0 0 0-.75-.75zm5.983 11H19.25v-6.5H4.75v6.5zm11.267-8v-1.5H3.75v1.5z"
		clip-rule="evenodd"
	/>
</svg>
