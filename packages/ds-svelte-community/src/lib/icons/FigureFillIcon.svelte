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
		d="M12 1.25a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5m7.742 6.943c.012-1.135-1.015-2.147-2.238-1.91a46 46 0 0 0-1.685.37c-1.295.302-2.446.57-3.806.547l-.034-.001c-1.36.024-2.51-.244-3.806-.546a45 45 0 0 0-1.685-.37c-1.224-.238-2.25.774-2.238 1.909.01.866.621 1.674 1.512 1.854 1.071.29 2.147.561 3.225.827-.035 1.147-.1 2.298-.298 3.43-.228 1.125-.64 2.195-1.072 3.318a54 54 0 0 0-.581 1.558c-.377 1.072.269 2.356 1.486 2.548.918.144 1.777-.422 2.064-1.258l.002-.002 1.408-4.147 1.408 4.147.001.003c.288.836 1.147 1.402 2.065 1.257 1.217-.191 1.863-1.476 1.486-2.547a54 54 0 0 0-.58-1.558c-.433-1.123-.845-2.194-1.073-3.318-.2-1.132-.264-2.283-.298-3.43 1.078-.266 2.153-.537 3.225-.827.89-.18 1.503-.988 1.512-1.854"
		clip-rule="evenodd"
	/>
</svg>
