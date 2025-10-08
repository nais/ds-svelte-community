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
		d="M5.579 6.872a3.1 3.1 0 0 1 3.598-.014c1.545 1.093 2.43 2.996 1.79 4.97l-.56 1.729c-.435 1.337-.426 2.713-.158 4.154a3.129 3.129 0 1 1-6.187.241l.154-1.445a4.5 4.5 0 0 0-.136-1.658l-.578-2.104a5.45 5.45 0 0 1 2.077-5.873m9.306-4.014a3.1 3.1 0 0 1 3.597.014 5.45 5.45 0 0 1 2.077 5.873l-.578 2.104a4.5 4.5 0 0 0-.135 1.658L20 13.952a3.13 3.13 0 1 1-6.188-.241c.269-1.441.277-2.817-.157-4.154l-.56-1.73c-.64-1.973.244-3.876 1.79-4.969"
	/>
</svg>
