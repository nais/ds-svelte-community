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
		d="M13.525 4.25H19a.75.75 0 0 1 .75.75v14a.75.75 0 0 1-.75.75H5a.75.75 0 0 1-.75-.75V5A.75.75 0 0 1 5 4.25h5.475l.026-.041c.281-.422.78-.709 1.499-.709s1.218.287 1.499.709zM8.25 10.625a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0m4.5 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0m2.961 4.612a.75.75 0 0 1-.948.475c-1.854-.618-3.66-.622-5.526 0a.75.75 0 0 1-.474-1.423c2.174-.725 4.313-.72 6.474 0a.75.75 0 0 1 .474.948"
		clip-rule="evenodd"
	/>
</svg>
