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
		d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75a9.72 9.72 0 0 0 6.878-2.84l-.004.005.041-.042-.004.004A9.72 9.72 0 0 0 21.75 12 9.75 9.75 0 0 0 12 2.25m6.179 14.867a.245.245 0 0 1 .013.335q-.347.393-.74.739a.245.245 0 0 1-.334-.013L5.822 6.882a.245.245 0 0 1-.013-.335 8 8 0 0 1 .739-.739.245.245 0 0 1 .334.013z"
		clip-rule="evenodd"
	/>
</svg>
