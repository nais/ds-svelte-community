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
		d="M13.25 3.5a.25.25 0 0 0-.25-.25H6.5c-.69 0-1.25.56-1.25 1.25v6c0 .138.112.25.25.25h13a.25.25 0 0 0 .25-.25V9a.25.25 0 0 0-.25-.25h-4c-.69 0-1.25-.56-1.25-1.25zM15 7.25a.25.25 0 0 1-.25-.25V4.293a.25.25 0 0 1 .427-.177l2.707 2.707a.25.25 0 0 1-.177.427zm-12 5a.75.75 0 0 0-.75.75v7c0 .414.336.75.75.75h18a.75.75 0 0 0 .75-.75v-7a.75.75 0 0 0-.75-.75zm4.7 1.64q.54 0 .938.203.405.203.623.567.224.364.224.854 0 .483-.224.854-.224.364-.623.567a2.04 2.04 0 0 1-.938.203h-.693V19h-1.05v-5.11zm4.302 0q.533 0 .924.203.4.203.616.574.224.365.224.86v1.828q0 .49-.224.86-.216.372-.616.582-.391.203-.924.203h-1.659v-5.11zm2.798 0V19h1.05v-2.016h2.058v-.98h-2.072V14.87h2.254v-.98zm-6.568 1.134q-.196-.19-.532-.19h-.693v1.359H7.7q.336 0 .532-.182a.65.65 0 0 0 .203-.497.63.63 0 0 0-.203-.49m4.288.028a.73.73 0 0 0-.518-.182h-.609v3.15h.61q.322 0 .517-.182a.63.63 0 0 0 .196-.483v-1.827a.62.62 0 0 0-.196-.476"
		clip-rule="evenodd"
	/>
</svg>
