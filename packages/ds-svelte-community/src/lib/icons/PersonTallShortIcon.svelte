<script lang="ts" context="module">
	import newUniqueId from "$lib/components/local-unique-id";
	import type { SVGAttributes } from "svelte/elements";
</script>

<script lang="ts">
	/**
	 * Title of the icon, used for accessibility
	 */
	export let title = "";

	type $$Props = SVGAttributes<SVGElement> & {
		title?: string;
	};

	const id = newUniqueId();
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
	{...$$restProps}
>
	{#if title}
		<title {id}>{title}</title>
	{/if}
	<slot />
	<path
		fill="currentColor"
		fill-rule="evenodd"
		d="M6.75 5.5a1.75 1.75 0 1 1 3.5 0 1.75 1.75 0 0 1-3.5 0ZM8.5 2.25a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5Zm6.75 10.25a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0Zm1.25-2.75a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5Zm-2.072 7.422c.478-.565 1.189-.922 2.072-.922s1.594.357 2.072.922c.465.548.678 1.253.678 1.928V21a.75.75 0 0 1-1.5 0v-1.9c0-.375-.12-.72-.322-.96-.189-.222-.478-.39-.928-.39-.45 0-.74.168-.928.39-.202.24-.322.585-.322.96V21a.75.75 0 0 1-1.5 0v-1.9c0-.675.213-1.38.678-1.928ZM8.5 10.25c-1.204 0-2.161.459-2.81 1.19-.638.716-.94 1.65-.94 2.56v7a.75.75 0 0 0 1.5 0v-7c0-.59.198-1.156.56-1.564.351-.395.894-.686 1.69-.686.796 0 1.339.291 1.69.686.362.408.56.974.56 1.564v7a.75.75 0 0 0 1.5 0v-7c0-.91-.302-1.844-.94-2.56-.649-.731-1.606-1.19-2.81-1.19Z"
		clip-rule="evenodd"
	/>
</svg>
