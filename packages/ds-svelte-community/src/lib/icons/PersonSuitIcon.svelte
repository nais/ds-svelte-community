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
		d="M8.25 7.5a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0M12 2.25a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5M9.125 14.832a.75.75 0 0 0-1.117-.475 7.75 7.75 0 0 0-3.74 6.116l-.018.5a.75.75 0 1 0 1.5.054l.017-.486a6.25 6.25 0 0 1 2.149-4.272l1.009 4.399a.75.75 0 0 0 1.462-.336zm6.867-.475a.75.75 0 0 0-1.117.475l-1.262 5.5a.75.75 0 1 0 1.462.336l1.009-4.4q.173.15.335.313a6.25 6.25 0 0 1 1.814 3.96l.017.486a.75.75 0 1 0 1.5-.054l-.018-.5-.002-.026a7.75 7.75 0 0 0-3.738-6.09M12 16.75a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0v-3a.75.75 0 0 1 .75-.75m.75-1.75a.75.75 0 0 0-1.5 0v.5a.75.75 0 0 0 1.5 0z"
		clip-rule="evenodd"
	/>
</svg>
