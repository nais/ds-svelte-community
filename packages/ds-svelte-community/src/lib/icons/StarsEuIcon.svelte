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
		d="M9.874 3.91a.1.1 0 0 1 .058-.182l1.437.003a.1.1 0 0 0 .095-.069l.44-1.367a.1.1 0 0 1 .191 0l.441 1.367a.1.1 0 0 0 .095.07l1.437-.004a.1.1 0 0 1 .058.181l-1.163.842a.1.1 0 0 0-.037.112l.447 1.365a.1.1 0 0 1-.154.112l-1.16-.847a.1.1 0 0 0-.118 0l-1.16.847a.1.1 0 0 1-.154-.112l.447-1.365a.1.1 0 0 0-.037-.112zm-7.5 7a.1.1 0 0 1 .058-.182l1.437.003a.1.1 0 0 0 .095-.069l.44-1.367a.1.1 0 0 1 .191 0l.441 1.367a.1.1 0 0 0 .095.07l1.437-.004a.1.1 0 0 1 .058.181l-1.163.842a.1.1 0 0 0-.037.112l.447 1.365a.1.1 0 0 1-.154.112l-1.16-.847a.1.1 0 0 0-.118 0l-1.16.847a.1.1 0 0 1-.154-.112l.447-1.365a.1.1 0 0 0-.037-.112zm15.058-.182a.1.1 0 0 0-.058.181l1.163.842a.1.1 0 0 1 .037.112l-.447 1.365a.1.1 0 0 0 .154.112l1.16-.847a.1.1 0 0 1 .118 0l1.16.847a.1.1 0 0 0 .154-.112l-.447-1.365a.1.1 0 0 1 .037-.112l1.163-.842a.1.1 0 0 0-.058-.18l-1.437.002a.1.1 0 0 1-.095-.069l-.44-1.367a.1.1 0 0 0-.191 0l-.441 1.367a.1.1 0 0 1-.095.07zM14.874 6.41a.1.1 0 0 1 .058-.18l1.437.002a.1.1 0 0 0 .095-.069l.44-1.367a.1.1 0 0 1 .191 0l.441 1.367a.1.1 0 0 0 .095.07l1.437-.004a.1.1 0 0 1 .058.181l-1.163.842a.1.1 0 0 0-.037.112l.447 1.365a.1.1 0 0 1-.154.112l-1.16-.847a.1.1 0 0 0-.118 0l-1.16.847a.1.1 0 0 1-.154-.112l.447-1.365a.1.1 0 0 0-.037-.112zm.058 9.82a.1.1 0 0 0-.058.18l1.163.842a.1.1 0 0 1 .037.112l-.447 1.365a.1.1 0 0 0 .154.112l1.16-.847a.1.1 0 0 1 .118 0l1.16.847a.1.1 0 0 0 .154-.112l-.447-1.365a.1.1 0 0 1 .037-.112l1.163-.842a.1.1 0 0 0-.058-.18l-1.437.002a.1.1 0 0 1-.095-.069l-.44-1.367a.1.1 0 0 0-.191 0l-.441 1.367a.1.1 0 0 1-.095.07zm-10.058.18a.1.1 0 0 1 .058-.18l1.437.002a.1.1 0 0 0 .095-.069l.44-1.367a.1.1 0 0 1 .191 0l.441 1.367a.1.1 0 0 0 .095.07l1.437-.004a.1.1 0 0 1 .058.181l-1.163.842a.1.1 0 0 0-.037.112l.447 1.365a.1.1 0 0 1-.154.112l-1.16-.847a.1.1 0 0 0-.118 0l-1.16.847a.1.1 0 0 1-.154-.112l.447-1.365a.1.1 0 0 0-.037-.112zm.058-10.18a.1.1 0 0 0-.058.18l1.163.842a.1.1 0 0 1 .037.112l-.447 1.365a.1.1 0 0 0 .154.112l1.16-.847a.1.1 0 0 1 .118 0l1.16.847a.1.1 0 0 0 .154-.112l-.447-1.365a.1.1 0 0 1 .037-.112l1.163-.842a.1.1 0 0 0-.058-.18H7.63a.1.1 0 0 1-.095-.069l-.44-1.367a.1.1 0 0 0-.191 0l-.441 1.367a.1.1 0 0 1-.095.07zm4.942 12.68a.1.1 0 0 1 .058-.18l1.437.002a.1.1 0 0 0 .095-.069l.44-1.367a.1.1 0 0 1 .191 0l.441 1.367a.1.1 0 0 0 .095.07l1.437-.004a.1.1 0 0 1 .058.181l-1.163.842a.1.1 0 0 0-.037.112l.447 1.365a.1.1 0 0 1-.154.112l-1.16-.847a.1.1 0 0 0-.118 0l-1.16.847a.1.1 0 0 1-.154-.112l.447-1.365a.1.1 0 0 0-.037-.112z"
		clip-rule="evenodd"
	/>
</svg>
