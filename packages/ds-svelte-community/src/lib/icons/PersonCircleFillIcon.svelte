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
		d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12M12 7.25a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5M8.25 9.5a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0m8.861 8.8a.24.24 0 0 1-.087.245 8 8 0 0 1-.933.621c-.159.09-.354-.023-.38-.203a3.75 3.75 0 0 0-7.422 0c-.027.18-.221.294-.38.203a8 8 0 0 1-.933-.621.24.24 0 0 1-.087-.244 5.25 5.25 0 0 1 10.222 0"
		clip-rule="evenodd"
	/>
</svg>
