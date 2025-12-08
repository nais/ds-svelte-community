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
		d="M17.826 9.854a.243.243 0 0 1 .418.164q.006.243.006.482v3c0 .809.424 1.92.921 2.915a18 18 0 0 0 .876 1.55l.058.09.015.023.004.006a.75.75 0 0 1-.624 1.166h-4.338a3.25 3.25 0 0 1-6.324 0 .168.168 0 0 1-.12-.287zm.448-4.689a.75.75 0 0 1 1.061 1.06L5.03 20.53a.75.75 0 0 1-1.06-1.06zM10.42 19.25a1.75 1.75 0 0 0 1.581 1 1.75 1.75 0 0 0 1.581-1zM12 1.75a.75.75 0 0 1 .75.75v1.272c1.435.091 2.54.45 3.37 1.034.122.085.132.26.026.365L5.877 15.44c-.202.201-.56-.053-.46-.32.197-.528.333-1.075.333-1.621v-3c0-1.501.114-3.21 1.001-4.541.844-1.266 2.277-2.046 4.5-2.187V2.5a.75.75 0 0 1 .75-.75"
	/>
</svg>
