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
		d="M5.25 3A.75.75 0 0 1 6 2.25h12a.75.75 0 0 1 .75.75v18a.75.75 0 0 1-.75.75H6a.75.75 0 0 1-.75-.75v-6.5a.25.25 0 0 1 .25-.25H7a.75.75 0 0 0 .75-.75v-3A.75.75 0 0 0 7 9.75H5.5a.25.25 0 0 1-.25-.25zm.25 9.75a.25.25 0 0 1-.25-.25v-1a.25.25 0 0 1 .25-.25H6a.25.25 0 0 1 .25.25v1a.25.25 0 0 1-.25.25zm8.03-7.97L13 4.25l-.53.53a9 9 0 0 0-1.027 1.235c-.321.471-.693 1.136-.693 1.796a2.25 2.25 0 0 0 4.5 0c0-.66-.372-1.325-.693-1.796A9 9 0 0 0 13.53 4.78m-1.28 3.03c0-.168.128-.504.432-.95.1-.148.21-.292.318-.426.108.134.217.278.318.426.304.446.432.782.432.95a.75.75 0 0 1-1.5 0"
		clip-rule="evenodd"
	/>
</svg>
