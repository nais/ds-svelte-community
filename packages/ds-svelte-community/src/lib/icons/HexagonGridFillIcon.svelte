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
		d="M13.317 8.219h-2.634L9.366 5.938l1.317-2.282h2.634l1.317 2.282zm0 12.124h-2.634l-1.317-2.28 1.317-2.282h2.634l1.317 2.281zm-2.634-6.062h2.634l1.317-2.28-1.317-2.282h-2.634L9.366 12zm7.883 3.03h-2.633l-1.317-2.28 1.316-2.281h2.634l1.317 2.28zm-2.633-6.061h2.633l1.317-2.281-1.317-2.281h-2.633l-1.317 2.28zm-7.866 6.062H5.433L4.116 15.03l1.317-2.281h2.634l1.317 2.28zM5.433 11.25h2.634l1.317-2.281-1.317-2.281H5.433l-1.317 2.28z"
		clip-rule="evenodd"
	/>
</svg>
