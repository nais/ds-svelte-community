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
		d="M12.55 3.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5M9.8 5a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0m3.5 4a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 .75.75v7.106a.75.75 0 0 1-.75.75H14.8V21a.75.75 0 0 1-1.5 0v-4.894a.75.75 0 0 1 .75-.75h1.25V9.75h-1.25A.75.75 0 0 1 13.3 9m-2.78.916a.25.25 0 0 1 .235-.166h.295a.75.75 0 0 0 0-1.5h-.295c-.74 0-1.4.465-1.648 1.161l-2.263 6.337a.75.75 0 0 0 .706 1.002h2.75V21a.75.75 0 0 0 1.5 0v-5a.75.75 0 0 0-.75-.75H8.614z"
		clip-rule="evenodd"
	/>
</svg>
