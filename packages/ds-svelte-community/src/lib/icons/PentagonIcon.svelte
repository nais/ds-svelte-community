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
		d="M11.56 1.892a.75.75 0 0 1 .88 0l9 6.5a.75.75 0 0 1 .271.845l-3.5 10.5a.75.75 0 0 1-.711.513h-11a.75.75 0 0 1-.712-.513l-3.5-10.5a.75.75 0 0 1 .273-.845zM3.887 9.285 7.04 18.75h9.918l3.155-9.465L12 3.425z"
		clip-rule="evenodd"
	/>
</svg>
