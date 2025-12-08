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
		d="M12 13.5c1.159 0 2.097.363 2.74.72a5.6 5.6 0 0 1 .953.668l.059.054.018.017.01.01.052.057a.75.75 0 0 1-1.056 1.056l-.053-.049h-.002l-.002-.003-.028-.025a4 4 0 0 0-.68-.475A4.14 4.14 0 0 0 12 15c-.841 0-1.528.262-2.01.53a4 4 0 0 0-.681.475l-.028.025-.002.001v.002l-.055.049A.75.75 0 0 1 8.22 14.97l.01-.011.018-.017.059-.054q.073-.067.205-.172a5.6 5.6 0 0 1 .749-.496A5.64 5.64 0 0 1 12 13.5M9.5 9a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3m5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3"
	/><path
		fill="currentColor"
		fill-rule="evenodd"
		d="M12 .5a1.5 1.5 0 0 1 .75 2.798V5h5.5a.75.75 0 0 1 .75.75v3.5h2.24a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-.75.75H19v3.5a.75.75 0 0 1-.75.75H5.75a.75.75 0 0 1-.75-.75v-3.5H2.75A.75.75 0 0 1 2 14v-4a.75.75 0 0 1 .75-.75H5v-3.5A.75.75 0 0 1 5.75 5h5.5V3.298A1.498 1.498 0 0 1 12 .5m-5.5 17h11v-11h-11zm-3-4.25H5v-2.5H3.5zm15.5 0h1.49v-2.5H19z"
		clip-rule="evenodd"
	/>
</svg>
