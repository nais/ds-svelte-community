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
		d="M10.049 2.578a.75.75 0 1 0-1.449.389l.197.737a10.65 10.65 0 0 0-6.323 5.83c-.16.364-.19.77-.087 1.153l.427 1.594a.75.75 0 0 0 .918.53l2.415-.646a.75.75 0 0 0 .456-.35l.332-.575.575.332a.75.75 0 0 0 .57.075l2.656-.712 1.432 5.348c-3.962.317-5.77 2.865-6.579 4.004q-.106.151-.19.265a.75.75 0 0 0 .762 1.18l.012-.002.037-.008.145-.031.547-.112a61 61 0 0 1 1.863-.34c1.498-.248 3.323-.489 4.735-.489s3.237.241 4.735.49a61 61 0 0 1 2.555.482l.037.008.012.003a.75.75 0 0 0 .785-1.149c-1.041-1.562-3.535-4.064-7.906-4.314l-1.534-5.723 2.657-.712a.75.75 0 0 0 .455-.35l.332-.574.575.332a.75.75 0 0 0 .57.075l2.414-.647a.75.75 0 0 0 .53-.919l-.427-1.594a1.75 1.75 0 0 0-.651-.955 10.65 10.65 0 0 0-8.393-1.888z"
	/>
</svg>
