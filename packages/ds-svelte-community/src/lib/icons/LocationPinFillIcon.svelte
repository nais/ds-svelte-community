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
		d="m12.757 21.257.466-.576c.39-.481.919-1.134 1.478-1.82 1.122-1.38 2.35-2.882 2.816-3.42 2.763-3.196 3.021-7.863-.037-10.921a7.75 7.75 0 0 0-10.96 0c-3.058 3.058-2.799 7.725-.037 10.92.466.539 1.694 2.04 2.817 3.42a1099 1099 0 0 1 1.943 2.397l.173.213v.001a.75.75 0 0 0 1.168 0zM12 6.25a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5"
		clip-rule="evenodd"
	/>
</svg>
