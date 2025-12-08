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
		d="M17.5 9.75a.75.75 0 0 1 .75.75v3c0 .809.424 1.92.921 2.915a18 18 0 0 0 .876 1.55l.06.09.014.023.003.005.001.001a.751.751 0 0 1-.625 1.166h-4.339a3.25 3.25 0 0 1-6.41-.75.75.75 0 0 1 .75-.75h8.679a19 19 0 0 1-.35-.665c-.504-1.006-1.08-2.394-1.08-3.585v-3a.75.75 0 0 1 .75-.75m.774-4.585a.75.75 0 0 1 1.061 1.06L5.03 20.53a.75.75 0 0 1-1.06-1.06zM10.422 19.25a1.75 1.75 0 0 0 3.158 0zm1.58-17.5a.75.75 0 0 1 .75.75v1.275c1.224.077 2.215.346 3.005.797a.75.75 0 0 1-.744 1.302c-.65-.371-1.603-.624-3.012-.624-2.345 0-3.436.694-4 1.541-.614.92-.75 2.21-.75 3.709v3c0 .273-.03.55-.078.821a.75.75 0 0 1-1.477-.265q.055-.307.055-.556v-3c0-1.5.114-3.21 1.001-4.541.844-1.265 2.277-2.044 4.5-2.185V2.5a.75.75 0 0 1 .75-.75"
	/>
</svg>
