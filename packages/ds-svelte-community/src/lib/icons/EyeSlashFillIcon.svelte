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
		d="M21.03 5.03a.75.75 0 0 0-1.06-1.06l-16 16a.75.75 0 1 0 1.06 1.06zm-9.999 12.68c-.206-.018-.291-.267-.145-.413l8.198-8.198a.247.247 0 0 1 .336-.013 13 13 0 0 1 1.603 1.665 10 10 0 0 1 .574.79l.046.074a.75.75 0 0 1 0 .772l-.046.075-.119.178c-.103.15-.255.36-.455.61-.4.5-.997 1.164-1.793 1.827-1.593 1.328-4.007 2.674-7.23 2.674q-.497 0-.969-.041m3.685-11.124a.242.242 0 0 1 .108.409l-.993.993a.26.26 0 0 1-.279.055 4.25 4.25 0 0 0-5.51 5.51.26.26 0 0 1-.055.279l-1.94 1.94a.246.246 0 0 1-.314.032 12.8 12.8 0 0 1-2.756-2.553 10 10 0 0 1-.606-.84.77.77 0 0 1-.014-.796l.047-.074q.041-.065.118-.179c.103-.15.255-.36.455-.61.4-.5.997-1.164 1.793-1.827C6.363 7.596 8.778 6.25 12 6.25c.98 0 1.886.125 2.716.335M12.05 9.25c.2.004.277.24.135.383l-2.552 2.552c-.142.142-.379.066-.383-.135V12a2.75 2.75 0 0 1 2.8-2.75"
		clip-rule="evenodd"
	/>
</svg>
