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
		d="M12.031 11.587a.25.25 0 0 1 .033-.11l2.985-5.17a.25.25 0 0 1 .341-.092l3.032 1.75a.25.25 0 0 1 .091.341l-2.985 5.17a.25.25 0 0 1-.079.084l-3.265 2.156a.25.25 0 0 1-.387-.223zm4.11-6.671a.25.25 0 0 1-.092-.342l.486-.84a2 2 0 1 1 3.464 2l-.486.84a.25.25 0 0 1-.341.092zm-5.604 6.522a1.5 1.5 0 0 1 .198-.66l4.13-7.153a.25.25 0 0 0-.216-.375H5.5c-.69 0-1.25.56-1.25 1.25v16c0 .69.56 1.25 1.25 1.25h12c.69 0 1.25-.56 1.25-1.25v-8.67c0-.257-.339-.347-.466-.126l-1.486 2.574a1.5 1.5 0 0 1-.473.501l-3.732 2.465a1.5 1.5 0 0 1-2.324-1.342z"
		clip-rule="evenodd"
	/>
</svg>
