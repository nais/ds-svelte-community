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
		d="M2.614 9.357a.75.75 0 0 1 1.029.257l.003.005.02.033.093.139c.085.123.214.303.39.522.35.438.877 1.024 1.581 1.61C7.137 13.097 9.223 14.25 12 14.25s4.863-1.154 6.27-2.326a11.4 11.4 0 0 0 1.582-1.611 9 9 0 0 0 .481-.661l.02-.033.004-.005a.75.75 0 0 1 1.286.772L21 10c.643.386.642.387.642.387v.002l-.004.005-.01.015-.032.051-.118.179c-.103.15-.255.36-.455.61-.304.38-.722.856-1.256 1.353l.841 1.002a.75.75 0 1 1-1.149.965l-.847-1.01c-.577.423-1.24.83-1.987 1.176l.497 1.17a.75.75 0 1 1-1.38.587l-.518-1.22c-.758.233-1.582.394-2.474.453V17a.75.75 0 0 1-1.5 0v-1.275a11 11 0 0 1-2.475-.453l-.516 1.215a.75.75 0 1 1-1.38-.586l.494-1.166a11.7 11.7 0 0 1-1.987-1.178l-.845 1.007a.75.75 0 1 1-1.15-.964l.84-1c-.533-.496-.95-.97-1.254-1.35a11 11 0 0 1-.574-.79l-.032-.05-.01-.016-.002-.005-.001-.002-.001-.001a.75.75 0 0 1 .257-1.03"
	/>
</svg>
