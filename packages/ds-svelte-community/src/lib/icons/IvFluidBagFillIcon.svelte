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
		d="M12 3.75c-.409 0-.772.196-1 .5h2a1.248 1.248 0 0 0-1-.5Zm0-1.5a2.75 2.75 0 0 0-2.646 2H7a.75.75 0 0 0-.75.75v14c0 .414.336.75.75.75h4.25V21a.75.75 0 0 0 1.5 0v-1.25H17a.75.75 0 0 0 .75-.75V5a.75.75 0 0 0-.75-.75h-2.354a2.751 2.751 0 0 0-2.646-2Zm0 6.5.646-.38a.75.75 0 0 0-1.292 0l-.007.01-.018.03-.065.114a36.296 36.296 0 0 0-.933 1.723 19.328 19.328 0 0 0-.716 1.558c-.186.47-.365 1.01-.365 1.445a2.75 2.75 0 1 0 5.5 0c0-.435-.18-.976-.365-1.445-.2-.504-.461-1.055-.716-1.558a37.404 37.404 0 0 0-.933-1.723l-.066-.113-.017-.03-.006-.01s0-.002-.647.379Zm-.331 2.175c.112-.222.224-.436.331-.635.107.199.219.413.331.635.245.484.484.989.66 1.432.188.478.259.776.259.893a1.25 1.25 0 1 1-2.5 0c0-.117.07-.415.26-.893.175-.443.414-.948.659-1.432Z"
		clip-rule="evenodd"
	/>
</svg>
