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
		d="M16.03 7.97a.75.75 0 0 0-1.28.53v7a.75.75 0 0 0 1.28.53l3.5-3.5a.75.75 0 0 0 0-1.06zM17.94 12l-1.69 1.69v-3.38zM9.25 8.5a.75.75 0 0 0-1.28-.53l-3.5 3.5a.75.75 0 0 0 0 1.06l3.5 3.5a.75.75 0 0 0 1.28-.53zm-1.5 5.19L6.06 12l1.69-1.69z"
		clip-rule="evenodd"
	/>
</svg>
