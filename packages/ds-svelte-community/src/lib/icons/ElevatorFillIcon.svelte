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
		d="M3.25 4A.75.75 0 0 1 4 3.25h16a.75.75 0 0 1 .75.75v16a.75.75 0 0 1-.75.75H4a.75.75 0 0 1-.75-.75V4ZM8 18.25a.75.75 0 0 0 .53-.22l1.5-1.5a.75.75 0 1 0-1.06-1.06l-.22.22V13.5a.75.75 0 0 0-1.5 0v2.19l-.22-.22a.75.75 0 0 0-1.06 1.06l1.5 1.5c.14.141.331.22.53.22Zm.53-12.28a.75.75 0 0 0-1.06 0l-1.5 1.5a.75.75 0 0 0 1.06 1.06l.22-.22v2.19a.75.75 0 0 0 1.5 0V8.31l.22.22a.75.75 0 1 0 1.06-1.06l-1.5-1.5ZM15 7.25a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5ZM12.25 8.5a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0ZM15 11.75a3 3 0 0 0-2.478 1.241c-.53.716-.772 1.632-.772 2.509V18a.75.75 0 0 0 1.5 0v-2.5c0-.623.175-1.207.478-1.616.286-.387.695-.634 1.272-.634.577 0 .986.247 1.272.634.303.409.478.993.478 1.616V18a.75.75 0 0 0 1.5 0v-2.5c0-.877-.242-1.793-.772-2.509A3 3 0 0 0 15 11.75Z"
		clip-rule="evenodd"
	/>
</svg>
