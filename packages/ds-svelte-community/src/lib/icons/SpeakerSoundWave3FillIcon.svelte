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
		d="M12.75 5a.75.75 0 0 0-1.219-.586L6.738 8.25H3a.75.75 0 0 0-.75.75v6c0 .414.336.75.75.75h3.737l4.794 3.836A.75.75 0 0 0 12.75 19zm2.124 4.057a.75.75 0 1 0-1.06 1.061 2.65 2.65 0 0 1 .78 1.882c0 .735-.298 1.4-.78 1.882a.75.75 0 1 0 1.06 1.061A4.15 4.15 0 0 0 16.094 12a4.15 4.15 0 0 0-1.22-2.943m.836-1.832a.75.75 0 0 1 1.06 0A6.73 6.73 0 0 1 18.75 12a6.73 6.73 0 0 1-1.98 4.775.75.75 0 1 1-1.06-1.061A5.23 5.23 0 0 0 17.25 12c0-1.45-.587-2.763-1.54-3.714a.75.75 0 0 1 0-1.06m3.182-2.121a.75.75 0 0 0-1.06 1.06A8.22 8.22 0 0 1 20.25 12c0 2.28-.924 4.341-2.418 5.835a.75.75 0 0 0 1.06 1.061A9.72 9.72 0 0 0 21.75 12a9.72 9.72 0 0 0-2.858-6.896"
		clip-rule="evenodd"
	/>
</svg>
