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
		d="M6.388 3.625a.75.75 0 0 0-.412 1.145l2.392 3.49-.255.073L5.795 6.69a.75.75 0 0 0-.64-.11l-1.923.552a.75.75 0 0 0-.33 1.245l3.07 3.146a5.75 5.75 0 0 0 5.7 1.51l8.665-2.483c.99-.284 1.231-1.577.41-2.199l-1.595-1.207a4.75 4.75 0 0 0-4.176-.779l-1.547.444-4.44-3.596a.75.75 0 0 0-.678-.138zm3.672 11.61c-.16.095-.155.326-.002.432q.481.336.874.776c.911 1.025 1.318 2.328 1.318 3.557v.014c-.001.16.13.3.29.289.462-.033.915-.053 1.323-.053 1.747 0 4.326.376 4.981.476.105.016.21.03.314.007A.75.75 0 0 0 19.75 20c0-2.914-2.336-5.75-6.25-5.75-1.363 0-2.532.45-3.44.986M4.19 17.44c.649-.73 1.606-1.189 2.81-1.189s2.161.459 2.81 1.19c.638.716.94 1.65.94 2.56a.75.75 0 0 1-.478.7c-.172.066-.361.024-.54-.021-.54-.138-1.79-.429-2.732-.429s-2.192.29-2.732.429c-.179.046-.368.087-.54.02a.75.75 0 0 1-.478-.7c0-.91.302-1.844.94-2.56"
		clip-rule="evenodd"
	/>
</svg>
