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
		d="M12.375 2.35a.75.75 0 0 0-.75 0L7.742 4.592a1.572 1.572 0 0 0-.03.017L3.85 6.84a.747.747 0 0 0-.394.69v8.97a.75.75 0 0 0 .375.65l3.88 2.24a.842.842 0 0 0 .035.02l3.862 2.23a.746.746 0 0 0 .756.016l.011-.006 7.794-4.5a.75.75 0 0 0 .375-.65v-9a.75.75 0 0 0-.375-.65l-7.794-4.5ZM11.25 12.433 4.956 8.8v2.771l.058.03 3.464 2a.75.75 0 0 1 .375.65v4.067L11.25 19.7v-7.268Zm1.5 0V19.7l2.397-1.384V14.25a.75.75 0 0 1 .375-.65l3.464-2a.752.752 0 0 1 .058-.03V8.8l-6.294 3.634ZM18.294 7.5l-2.397-1.384-3.522 2.034a.75.75 0 0 1-.75 0L8.103 6.116 5.706 7.5 12 11.134 18.294 7.5ZM12 6.634l2.397-1.384L12 3.866 9.603 5.25 12 6.634Zm4.647 10.817 2.398-1.384v-2.768l-2.398 1.384v2.768Zm-9.294-2.768-2.397-1.384v2.768l2.397 1.384v-2.768Z"
		clip-rule="evenodd"
	/>
</svg>
