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
		d="M9.629 4.005h1.359l1.867 3.107-1.072.644a.75.75 0 0 0 .157 1.357L17 10.739a.75.75 0 0 0 .968-.582l.94-5.231a.75.75 0 0 0-1.125-.776l-1.071.644-.867-1.443a1.75 1.75 0 0 0-1.501-.849l-4.716.003a1.75 1.75 0 0 0-1.476.812L7.247 4.74a.75.75 0 0 0 1.266.804l.905-1.424a.25.25 0 0 1 .21-.116m-1.734 3.94a.75.75 0 0 1 .387.484l1.302 5.153a.75.75 0 0 1-1.067.852l-1.114-.567-1.646 3.23.72 1.152a.25.25 0 0 0 .21.117l1.688.013a.75.75 0 1 1-.011 1.5l-1.688-.013a1.75 1.75 0 0 1-1.47-.821l-2.501-3.998a1.75 1.75 0 0 1-.076-1.723l.764-1.5-1.113-.568a.75.75 0 0 1 .061-1.364l4.935-1.975a.75.75 0 0 1 .62.028m11.77 3.385a.75.75 0 0 1 1.007.335l.754 1.51a1.75 1.75 0 0 1-.064 1.683L18.934 18.9a1.75 1.75 0 0 1-1.5.85H15.75V21a.75.75 0 0 1-1.244.564l-4-3.5a.75.75 0 0 1 0-1.128l4-3.5A.75.75 0 0 1 15.75 14v1.25h3.625l.7-1.165a.25.25 0 0 0 .009-.24l-.755-1.51a.75.75 0 0 1 .336-1.006"
		clip-rule="evenodd"
	/>
</svg>
