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
		d="M9.25 2a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-1.25v1.532a8.75 8.75 0 1 1-1.5 0V2.75H10A.75.75 0 0 1 9.25 2M12 5.75a7.25 7.25 0 1 0 0 14.5 7.25 7.25 0 0 0 0-14.5m6.894-2.473a.75.75 0 1 0-1.061 1.061l2.828 2.828a.75.75 0 1 0 1.061-1.06zM5.75 13a6.25 6.25 0 1 1 12.5 0 6.25 6.25 0 0 1-12.5 0m4.37-3.146a.75.75 0 0 1 .744-.01l4.5 2.5a.75.75 0 0 1 0 1.312l-4.5 2.5A.75.75 0 0 1 9.75 15.5v-5a.75.75 0 0 1 .37-.646"
		clip-rule="evenodd"
	/>
</svg>
