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
		d="M15.825 4.324A.75.75 0 0 1 16.25 5v14a.75.75 0 0 1-1.219.586l-4.794-3.836H6.5a.75.75 0 0 1-.75-.75V9a.75.75 0 0 1 .75-.75h3.737l4.794-3.836a.75.75 0 0 1 .794-.09M14.75 6.56l-3.781 3.026a.75.75 0 0 1-.469.164H7.25v4.5h3.25a.75.75 0 0 1 .469.164l3.781 3.025z"
		clip-rule="evenodd"
	/>
</svg>
