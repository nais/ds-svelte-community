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
		d="M4.75 8a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0M8 3.25a4.75 4.75 0 1 0 0 9.5 4.75 4.75 0 0 0 0-9.5M17.25 6a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0M18 3.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5M8 5.25a.75.75 0 0 1 .75.75v1.69l.78.78a.75.75 0 0 1-1.06 1.06l-1-1A.75.75 0 0 1 7.25 8V6A.75.75 0 0 1 8 5.25m10.721 4.456a.75.75 0 1 0-1.442-.412l-.822 2.876a.25.25 0 0 1-.205.18l-2.858.408a.75.75 0 0 0 .212 1.485l2.858-.409a1.75 1.75 0 0 0 1.435-1.251zm-6.335 4.65a.75.75 0 0 1 .257 1.03l-3 5a.75.75 0 1 1-1.286-.772l3-5a.75.75 0 0 1 1.029-.257m8.296-5.084a.75.75 0 0 1 .546.91l-1.122 4.485a2.75 2.75 0 0 1-2.668 2.083h-.688V20a.75.75 0 0 1-1.5 0v-3.25H14a.75.75 0 0 1 0-1.5h3.438a1.25 1.25 0 0 0 1.213-.947l1.121-4.485a.75.75 0 0 1 .91-.546"
		clip-rule="evenodd"
	/>
</svg>
