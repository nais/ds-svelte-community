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
		d="M13.25 3.5a.25.25 0 0 0-.25-.25H6.5c-.69 0-1.25.56-1.25 1.25v6c0 .138.112.25.25.25h13a.25.25 0 0 0 .25-.25V9a.25.25 0 0 0-.25-.25h-4c-.69 0-1.25-.56-1.25-1.25z"
	/><path
		fill="currentColor"
		d="M14.75 4.293a.25.25 0 0 1 .427-.177l2.707 2.707a.25.25 0 0 1-.177.427H15a.25.25 0 0 1-.25-.25zm-7.744 11.9H7.7q.336 0 .532-.182a.65.65 0 0 0 .203-.497.63.63 0 0 0-.203-.49q-.196-.189-.532-.189h-.693z"
	/><path
		fill="currentColor"
		fill-rule="evenodd"
		d="M2.25 13a.75.75 0 0 1 .75-.75h18a.75.75 0 0 1 .75.75v7a.75.75 0 0 1-.75.75H3a.75.75 0 0 1-.75-.75zm3.706 6v-5.11H7.7q.54 0 .938.203.405.202.623.567.225.364.224.854 0 .483-.224.854-.225.364-.623.567a2.04 2.04 0 0 1-.938.203h-.693V19zm4.365 0v-5.11h1.225l1.323 3.955-.049-.595a36 36 0 0 1-.049-.679q-.014-.343-.014-.581v-2.1h.924V19h-1.225l-1.309-3.955q.021.225.042.532t.035.623q.021.315.021.56V19zm6.116.07q-.512 0-.896-.189a1.5 1.5 0 0 1-.602-.539 1.55 1.55 0 0 1-.21-.812v-2.17q0-.469.21-.812.216-.343.602-.532a1.95 1.95 0 0 1 .896-.196q.518 0 .896.196.384.189.595.532.216.344.217.812h-1.05q0-.308-.175-.469-.168-.16-.483-.161-.316 0-.49.161-.168.161-.168.469v2.17q0 .3.168.469.174.16.49.161.314 0 .483-.161.174-.168.175-.469v-.441h-.756V16.2h1.806v1.33q0 .462-.217.812a1.45 1.45 0 0 1-.595.539q-.378.189-.896.189"
		clip-rule="evenodd"
	/>
</svg>
