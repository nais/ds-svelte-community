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
		d="M21.03 3.97a.75.75 0 0 1 0 1.06l-5.565 5.565-.021.021-4.828 4.828-.02.021L5.03 21.03a.75.75 0 0 1-1.06-1.06l3.288-3.29a12.2 12.2 0 0 1-3.417-2.46 12 12 0 0 1-1.099-1.273 9 9 0 0 1-.28-.398l-.105-.163a.75.75 0 0 1 0-.772q.079-.13.165-.253c.103-.15.255-.36.455-.61.4-.5.996-1.164 1.793-1.827C6.363 7.596 8.777 6.25 12 6.25c1.804 0 3.36.423 4.659 1.03l3.31-3.31a.75.75 0 0 1 1.061 0m-6.234 5.173a.24.24 0 0 0-.007-.35 4.247 4.247 0 0 0-5.794.202 4.25 4.25 0 0 0-.202 5.794.24.24 0 0 0 .35.007l.708-.708a.27.27 0 0 0 .011-.358 2.75 2.75 0 0 1 3.868-3.868.27.27 0 0 0 .358-.01zm4.734.327a.75.75 0 0 1 0 1.06l-7 7a.75.75 0 1 1-1.06-1.06l7-7a.75.75 0 0 1 1.06 0m1.5 2.5a.75.75 0 0 1 0 1.06l-3 3a.75.75 0 1 1-1.06-1.06l3-3a.75.75 0 0 1 1.06 0"
		clip-rule="evenodd"
	/>
</svg>
