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
		d="m15.172 10.52-2.416-.604c.02-.141.09-.31.245-.527.191-.268.456-.536.78-.859l.02-.02c.298-.298.648-.648.918-1.027.282-.395.53-.89.53-1.483 0-.92-.31-1.746-.906-2.343C13.746 3.06 12.92 2.75 12 2.75c-.92 0-1.746.31-2.343.907S8.75 5.08 8.75 6a.75.75 0 0 0 1.5 0c0-.58.19-1.004.468-1.282S11.42 4.25 12 4.25c.58 0 1.004.19 1.282.468s.468.702.468 1.282c0 .158-.064.35-.251.61-.192.269-.457.537-.78.86l-.02.02c-.298.298-.648.648-.919 1.027-.268.376-.506.843-.528 1.397l-2.424.606a.75.75 0 0 0-.799-.3l-1.939.484a3.75 3.75 0 0 0-2.84 3.638V20c0 .414.336.75.75.75h16a.75.75 0 0 0 .75-.75v-5.658a3.75 3.75 0 0 0-2.84-3.638l-1.94-.484a.75.75 0 0 0-.798.3Zm-5.67 1.378c.608.843 1.52 1.352 2.498 1.352.978 0 1.89-.51 2.499-1.352l-2.5-.625-2.498.625Zm-3.048.262 1.291-.323C8.51 13.53 10.097 14.75 12 14.75s3.491-1.22 4.255-2.913l1.29.323a2.25 2.25 0 0 1 1.705 2.182v4.908h-1.5V17a.75.75 0 0 0-1.5 0v2.25h-8.5V17a.75.75 0 0 0-1.5 0v2.25h-1.5v-4.908a2.25 2.25 0 0 1 1.704-2.182Z"
		clip-rule="evenodd"
	/>
</svg>
