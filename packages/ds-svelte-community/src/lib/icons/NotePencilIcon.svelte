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
		d="M16.97 2.97a2.871 2.871 0 1 1 4.06 4.06l-1.5 1.5-4.333 4.333a1.75 1.75 0 0 1-.684.423l-4.276 1.425a.75.75 0 0 1-.949-.948l1.426-4.276c.086-.258.23-.492.423-.684l4.33-4.33.003-.003.003-.003zM16 6.06l-3.803 3.803a.25.25 0 0 0-.06.098l-.951 2.853 2.853-.95a.25.25 0 0 0 .098-.061L17.939 8zm3 .88L17.06 5l.97-.97a1.371 1.371 0 0 1 1.94 1.94zM3.25 5c0-.966.784-1.75 1.75-1.75h7a.75.75 0 0 1 0 1.5H5a.25.25 0 0 0-.25.25v14c0 .138.112.25.25.25h14a.25.25 0 0 0 .25-.25v-7a.75.75 0 0 1 1.5 0v7A1.75 1.75 0 0 1 19 20.75H5A1.75 1.75 0 0 1 3.25 19z"
		clip-rule="evenodd"
	/>
</svg>
