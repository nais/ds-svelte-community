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
		d="M14.525 2.167c-.754-.12-1.61.093-2.525.826-.914-.732-1.768-.947-2.522-.829-.835.132-1.354.65-1.503.8l-.006.006-.006.006c-.149.149-.668.667-.8 1.502-.14.898.192 1.938 1.306 3.052l3 3a.75.75 0 0 0 1.061 0l3-3c1.116-1.116 1.445-2.158 1.303-3.055-.133-.836-.651-1.354-.797-1.5l-.011-.01c-.146-.147-.664-.665-1.5-.798m1.091 12.377a2.5 2.5 0 0 0-.057-.376c-.244-1.051-1.151-1.918-2.559-1.918h-3c-.095 0-.259-.045-.535-.178a8 8 0 0 1-.321-.164l-.084-.044a6 6 0 0 0-.456-.22c-.563-.238-1.386-.394-2.604-.394-1.754 0-2.753.755-3.268 1.614a3.5 3.5 0 0 0-.48 1.578l-.001-1.009c0-1.005-.001-1.517-.001 5.567 0 .323.207.61.513.712l3 1A.8.8 0 0 0 6 20.75h9.298a2.75 2.75 0 0 0 1.718-.603l3.843-3.073a2.38 2.38 0 0 0 .891-1.855c0-1.797-1.918-2.943-3.5-2.092l-1.533.825a.26.26 0 0 0-.131.27c.192 1.308-.342 2.81-1.747 3.578a3.8 3.8 0 0 1-1.839.45H9.75a.5.5 0 1 1 0-1H13c.51 0 .968-.114 1.36-.328.924-.505 1.328-1.473 1.256-2.379"
		clip-rule="evenodd"
	/>
</svg>
