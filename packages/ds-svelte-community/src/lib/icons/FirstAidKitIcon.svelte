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
		d="M4 6.25A1.75 1.75 0 0 0 2.25 8v10c0 .966.784 1.75 1.75 1.75h16A1.75 1.75 0 0 0 21.75 18V8A1.75 1.75 0 0 0 20 6.25h-3.75V5a1.75 1.75 0 0 0-1.75-1.75h-5A1.75 1.75 0 0 0 7.75 5v1.25zm5.5-1.5a.25.25 0 0 0-.25.25v1.25h5.5V5a.25.25 0 0 0-.25-.25zm-5.5 3a.25.25 0 0 0-.25.25v10c0 .138.112.25.25.25h16a.25.25 0 0 0 .25-.25V8a.25.25 0 0 0-.25-.25zm8 2a.75.75 0 0 1 .75.75v1.75h1.75a.75.75 0 0 1 0 1.5h-1.75v1.75a.75.75 0 0 1-1.5 0v-1.75H9.5a.75.75 0 0 1 0-1.5h1.75V10.5a.75.75 0 0 1 .75-.75"
		clip-rule="evenodd"
	/>
</svg>
