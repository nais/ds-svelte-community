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
		d="M12.979 2.269c-3.905-.601-7.427 2.42-7.427 6.372a.75.75 0 1 0 1.5 0 4.947 4.947 0 1 1 9.693 1.395l-2.197 7.468a3.826 3.826 0 0 1-7.496-1.08.75.75 0 0 0-1.5 0 5.326 5.326 0 0 0 10.435 1.503l2.197-7.467c1.1-3.743-1.35-7.598-5.205-8.191m-.362 3.607a3.417 3.417 0 0 0-4.065 3.355v1.77c0 .413.336.75.75.75a1.25 1.25 0 1 1 0 2.5.75.75 0 0 0 0 1.5 2.75 2.75 0 0 0 .75-5.397V9.23a1.917 1.917 0 1 1 3.767.506l-.292 1.065a.75.75 0 0 0 1.447.396l.291-1.065a3.417 3.417 0 0 0-2.648-4.257"
		clip-rule="evenodd"
	/>
</svg>
