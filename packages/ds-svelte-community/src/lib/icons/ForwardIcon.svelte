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
		d="M5.364 6.344A.75.75 0 0 0 4.25 7v10a.75.75 0 0 0 1.114.656l9-5a.75.75 0 0 0 0-1.312zm.386 9.381v-7.45L12.456 12zm6.614-9.38A.75.75 0 0 0 11.25 7v1.5a.75.75 0 0 0 1.5 0v-.225L19.456 12l-6.706 3.725V15.5a.75.75 0 0 0-1.5 0V17a.75.75 0 0 0 1.114.656l9-5a.75.75 0 0 0 0-1.312z"
		clip-rule="evenodd"
	/>
</svg>
