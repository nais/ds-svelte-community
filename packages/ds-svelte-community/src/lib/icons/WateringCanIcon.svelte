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
		d="M9.74 6.786c-.001-.146.005-.34.03-.566.055-.483.202-1.14.584-1.788.387-.658 1.003-1.285 1.953-1.704.94-.415 2.166-.608 3.755-.475 1.614.134 2.766.615 3.536 1.355.773.744 1.075 1.667 1.15 2.515.072.838-.074 1.635-.227 2.204-.073.274-.15.503-.213.67.284.609.442 1.288.442 2.003v8.5c0 .69-.56 1.25-1.25 1.25h-9c-.69 0-1.25-.56-1.25-1.25v-3.228l-4.705-5.646-1.62-.648a1.25 1.25 0 0 1-.42-2.044l1.929-1.928a1.25 1.25 0 0 1 2.044.42l.637 1.592L9.25 9.543V8c0-.471.187-.9.49-1.214m9.439.685c.07-.38.11-.801.074-1.219-.052-.59-.25-1.135-.695-1.563-.449-.432-1.234-.826-2.62-.942-1.411-.117-2.373.065-3.026.353-.644.284-1.028.688-1.266 1.093-.212.36-.317.738-.367 1.057H16c1.223 0 2.337.462 3.179 1.22M5.226 7.335 3.835 8.726l1.341.537.587-.587zm5.524 8.394-4.508-5.41.63-.631 3.878 2.77V8a.25.25 0 0 1 .25-.25h5A3.25 3.25 0 0 1 19.25 11v8.25h-8.5z"
		clip-rule="evenodd"
	/>
</svg>
