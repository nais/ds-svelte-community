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
		d="M3.25 4A.75.75 0 0 1 4 3.25h16a.75.75 0 0 1 .75.75v16a.75.75 0 0 1-.75.75H4a.75.75 0 0 1-.75-.75zm1.5.75v14.5h14.5V4.75zM15 7.25a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5M12.25 8.5a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0M15 11.75a3 3 0 0 0-2.478 1.241c-.53.716-.772 1.632-.772 2.509V18a.75.75 0 0 0 1.5 0v-2.5c0-.623.175-1.207.478-1.616.286-.387.695-.634 1.272-.634s.986.247 1.272.634c.303.409.478.993.478 1.616V18a.75.75 0 0 0 1.5 0v-2.5c0-.877-.242-1.793-.772-2.509A3 3 0 0 0 15 11.75m-6.03 3.72-.22.22V13.5a.75.75 0 0 0-1.5 0v2.19l-.22-.22a.75.75 0 0 0-1.06 1.06l1.5 1.5a.75.75 0 0 0 1.06 0l1.5-1.5a.75.75 0 1 0-1.06-1.06M8 5.75a.75.75 0 0 1 .53.22l1.5 1.5a.75.75 0 1 1-1.06 1.06l-.22-.22v2.19a.75.75 0 0 1-1.5 0V8.31l-.22.22a.75.75 0 0 1-1.06-1.06l1.5-1.5A.75.75 0 0 1 8 5.75"
		clip-rule="evenodd"
	/>
</svg>
