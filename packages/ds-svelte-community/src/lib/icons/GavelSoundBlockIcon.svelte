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
		d="M11 3.25a.75.75 0 0 1 .53.22l4.5 4.5a.75.75 0 0 1 0 1.06l-.707.707a1.75 1.75 0 0 1-1.237.513h-.672a.25.25 0 0 0-.177.073l-.926.927 7.22 7.22a.75.75 0 1 1-1.061 1.06l-7.22-7.22-.927.927a.25.25 0 0 0-.073.177v.672c0 .464-.184.909-.513 1.237l-.707.707a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 0 1 .002-1.063l.708-.7a1.75 1.75 0 0 1 1.231-.507h.674a.25.25 0 0 0 .177-.073l2.915-2.924a.25.25 0 0 0 .073-.176v-.673c0-.464.184-.909.513-1.237l.707-.707a.75.75 0 0 1 .53-.22m0 1.81-.177.177a.25.25 0 0 0-.073.177v.673q0 .27-.08.522l2.22 2.221a1.8 1.8 0 0 1 .524-.08h.672a.25.25 0 0 0 .177-.073l.176-.177zM7.815 9.755 9.75 7.812l1.94 1.938-1.94 1.94zm-1.198.924a1.8 1.8 0 0 1-.532.082H5.41a.25.25 0 0 0-.176.073l-.172.17L8.5 14.439l.177-.176a.25.25 0 0 0 .073-.177v-.672q0-.27.08-.523zM5 16.75a1.75 1.75 0 0 0-1.75 1.75V20c0 .414.336.75.75.75h10a.75.75 0 0 0 .75-.75v-1.5A1.75 1.75 0 0 0 13 16.75zm-.25 1.75a.25.25 0 0 1 .25-.25h8a.25.25 0 0 1 .25.25v.75h-8.5z"
		clip-rule="evenodd"
	/>
</svg>
