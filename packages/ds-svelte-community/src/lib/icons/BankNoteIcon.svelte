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
		d="M3 5.25a.75.75 0 0 0-.75.75v12c0 .414.336.75.75.75h18a.75.75 0 0 0 .75-.75V6a.75.75 0 0 0-.75-.75zm.75 4.425A3.75 3.75 0 0 0 6.675 6.75h10.65a3.76 3.76 0 0 0 2.925 2.925v4.65a3.76 3.76 0 0 0-2.925 2.925H6.675a3.76 3.76 0 0 0-2.925-2.925zM5.122 6.75A2.26 2.26 0 0 1 3.75 8.122V6.75zm0 10.5a2.26 2.26 0 0 0-1.372-1.372v1.372zm13.756 0a2.26 2.26 0 0 1 1.372-1.372v1.372zm0-10.5c.226.64.733 1.146 1.372 1.372V6.75zM10.25 12c0-1.376.906-2.25 1.75-2.25s1.75.874 1.75 2.25c0 1.377-.906 2.25-1.75 2.25s-1.75-.873-1.75-2.25M12 8.25c-1.917 0-3.25 1.813-3.25 3.75s1.333 3.75 3.25 3.75 3.25-1.813 3.25-3.75S13.917 8.25 12 8.25"
		clip-rule="evenodd"
	/>
</svg>
