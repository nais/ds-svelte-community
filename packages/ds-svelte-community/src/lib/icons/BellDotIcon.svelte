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
		d="M12.75 6.063a1.75 1.75 0 1 1 3.5 0 1.75 1.75 0 0 1-3.5 0m1.75-3.25a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5M9.877 4.676a.75.75 0 0 1-.42.975c-.977.388-1.505 1.03-1.81 1.836-.32.845-.397 1.877-.397 3.013v3c0 1.191-.576 2.58-1.08 3.585q-.178.358-.349.665H18.18a19 19 0 0 1-.35-.665c-.503-1.006-1.079-2.394-1.079-3.585v-3a.75.75 0 0 1 1.5 0v3c0 .809.424 1.92.92 2.915a18 18 0 0 0 .936 1.641l.014.022.004.005a.752.752 0 0 1-.624 1.167h-4.338a3.25 3.25 0 0 1-6.324 0H4.5a.75.75 0 0 1-.624-1.166l.004-.006.014-.022.06-.091c.05-.081.125-.2.215-.35.18-.301.42-.722.66-1.2.497-.994.921-2.106.921-2.915v-3c0-1.163.07-2.429.494-3.545.438-1.156 1.25-2.138 2.659-2.698a.75.75 0 0 1 .974.42m.542 14.574h3.162a1.75 1.75 0 0 1-1.581 1 1.75 1.75 0 0 1-1.581-1"
		clip-rule="evenodd"
	/>
</svg>
