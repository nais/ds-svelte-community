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
		d="M11.055 7.25c-2.272 0-4.205 1.859-4.39 4.476l-.748-.053.749.051c-.023.323-.099.688-.352.996-.254.31-.597.454-.914.534-.595.159-1.003.414-1.259.706-.249.286-.391.648-.391 1.106 0 .54.19.933.497 1.2.318.278.839.484 1.6.484H17.3c1.68 0 2.951-1.273 2.951-2.879 0-.784-.301-1.485-.862-1.995-.562-.511-1.436-.875-2.646-.875-.325 0-.674-.043-.995-.23-.33-.192-.53-.478-.672-.766v-.002c-.874-1.796-2.258-2.753-4.02-2.753M5.17 11.62c.233-3.297 2.725-5.87 5.886-5.87 2.435 0 4.29 1.38 5.368 3.597.042.085.07.118.08.129a.7.7 0 0 0 .239.025c1.515 0 2.77.46 3.656 1.266.887.807 1.352 1.917 1.352 3.104 0 2.46-1.968 4.379-4.451 4.379H5.848c-1.024 0-1.927-.278-2.586-.852-.67-.582-1.012-1.406-1.012-2.332 0-.798.259-1.517.762-2.093.497-.568 1.194-.954 2.007-1.17l.01-.003a1 1 0 0 0 .12-.038 1 1 0 0 0 .02-.14zM16.5 9.474h.001m.003.002.004.003z"
		clip-rule="evenodd"
	/>
</svg>
