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
		d="M7.97 10.085A3.25 3.25 0 1 1 9.1 8.478l1.456.822 6.506-1.952a1.75 1.75 0 0 1 .79-.05l2.771.462a.75.75 0 0 1 .234 1.4l-5.336 2.89 5.326 2.785a.75.75 0 0 1-.224 1.405l-2.77.462a1.75 1.75 0 0 1-.791-.05l-6.46-1.938-1.5.813q.146.462.148.973a3.25 3.25 0 1 1-1.28-2.585 3.25 3.25 0 0 0 0-3.83M4.25 7.5a1.75 1.75 0 1 1 3.5 0 1.75 1.75 0 0 1-3.5 0m8.214 6.206 1.467-.795 4.24 2.217-.565.094a.25.25 0 0 1-.113-.007zM7.39 15.438l.018.023a1.75 1.75 0 1 1-.017-.023m2.493-2.04a4.8 4.8 0 0 0 .11-2.363l7.499-2.25a.25.25 0 0 1 .113-.007l.616.103z"
		clip-rule="evenodd"
	/>
</svg>
