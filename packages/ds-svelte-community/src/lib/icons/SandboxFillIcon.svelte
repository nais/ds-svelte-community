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
		d="M12.375 2.35a.75.75 0 0 0-.75 0L8.46 4.178a.238.238 0 0 0 .005.414l.014.008 3.397 1.962a.25.25 0 0 0 .25 0L15.522 4.6l.014-.008a.238.238 0 0 0 .005-.414zm5.173 2.987a.25.25 0 0 0-.245-.003l-1.038.57-3.89 2.245a.75.75 0 0 1-.75 0l-3.89-2.245-1.095-.601a.13.13 0 0 0-.125-.002L4.58 6.418a.25.25 0 0 0 0 .433l7.295 4.21a.25.25 0 0 0 .25 0l7.294-4.21.026-.015a.228.228 0 0 0 .008-.4zm2.997 3.03a.25.25 0 0 0-.367-.222l-.022.012-7.281 4.204a.25.25 0 0 0-.125.216V21a.25.25 0 0 0 .375.217l1.897-1.095a.25.25 0 0 0 .125-.217V14.25a.75.75 0 0 1 .375-.65l3.46-1.997 1.44-.854a.25.25 0 0 0 .122-.215zm0 4.492a.25.25 0 0 0-.378-.215l-.43.255-2.965 1.712a.25.25 0 0 0-.125.216v3.923a.25.25 0 0 0 .375.217l3.148-1.817a.75.75 0 0 0 .374-.65zm-9.67 8.357A.25.25 0 0 0 11.25 21v-8.423a.25.25 0 0 0-.125-.216L3.831 8.15a.25.25 0 0 0-.375.216v2.167c0 .089.047.17.123.216l1.439.853 3.46 1.998a.75.75 0 0 1 .375.649v5.655a.25.25 0 0 0 .125.216zm-3.897-2.25a.25.25 0 0 0 .375-.216v-3.923a.25.25 0 0 0-.125-.216l-2.972-1.716-.422-.25a.25.25 0 0 0-.378.215v3.64a.75.75 0 0 0 .375.65z"
		clip-rule="evenodd"
	/>
</svg>
