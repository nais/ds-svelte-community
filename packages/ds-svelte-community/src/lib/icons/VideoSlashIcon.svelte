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
		d="M2.97 5.47a.75.75 0 0 1 1.06 0l12 12a.75.75 0 1 1-1.06 1.06l-12-12a.75.75 0 0 1 0-1.06M3 9.75a.75.75 0 0 1 .75.75V17c0 .138.112.25.25.25h7.125a.75.75 0 0 1 0 1.5H4A1.75 1.75 0 0 1 2.25 17v-6.5A.75.75 0 0 1 3 9.75m12-3H7.875a.75.75 0 0 1 0-1.5H15c.966 0 1.75.784 1.75 1.75v1.573l4.021-1.287A.75.75 0 0 1 21.75 8v8a.75.75 0 0 1-.979.714l-4.983-1.594a.75.75 0 0 1-.538-.72V7a.25.25 0 0 0-.25-.25m1.75 3.398 3.5-1.12v5.945l-3.5-1.12z"
		clip-rule="evenodd"
	/>
</svg>
