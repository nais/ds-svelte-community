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
		d="M11.47 2.485a.75.75 0 0 1 1.06 1.06L9.878 6.198 12.53 8.85a.75.75 0 0 1-1.06 1.06L8.295 6.735a.76.76 0 0 1 0-1.075z"
	/><path
		fill="currentColor"
		d="M3.75 13.484q0-.512.062-1.01a.75.75 0 0 1 1.488.182q-.05.407-.05.828a6.75 6.75 0 1 0 4.963-6.51.75.75 0 0 1-.397-1.448 8.25 8.25 0 1 1-6.066 7.958"
	/>
</svg>
