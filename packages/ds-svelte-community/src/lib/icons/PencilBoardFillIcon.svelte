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
		d="M13.216 11.287a.25.25 0 0 1 .033-.11l2.764-4.818a.25.25 0 0 1 .342-.092l2.788 1.62a.25.25 0 0 1 .091.34L16.47 13.05a.25.25 0 0 1-.078.083l-3.003 1.995a.25.25 0 0 1-.387-.223zM17.05 5.05a.25.25 0 0 1-.091-.34l.444-.774a1.85 1.85 0 0 1 2.54-.685 1.88 1.88 0 0 1 .68 2.556l-.443.772a.25.25 0 0 1-.342.091zm-5.294 6.354a1.5 1.5 0 0 1 .197-.66l1.216-2.12a.25.25 0 0 0-.217-.374H9.5a.25.25 0 0 0-.25.25v12c0 .138.112.25.25.25H18A2.75 2.75 0 0 0 20.75 18v-7c0-.463-.114-.899-.316-1.281-.085-.16-.306-.15-.397.007l-2.459 4.287a1.5 1.5 0 0 1-.47.502l-3.265 2.17a1.49 1.49 0 0 1-1.574.046 1.51 1.51 0 0 1-.747-1.395zM7.5 8.25a.25.25 0 0 1 .25.25v5a.25.25 0 0 1-.25.25h-4a.25.25 0 0 1-.25-.25V11A2.75 2.75 0 0 1 6 8.25zM3.25 15.5V18A2.75 2.75 0 0 0 6 20.75h1.5a.25.25 0 0 0 .25-.25v-5a.25.25 0 0 0-.25-.25h-4a.25.25 0 0 0-.25.25"
		clip-rule="evenodd"
	/>
</svg>
