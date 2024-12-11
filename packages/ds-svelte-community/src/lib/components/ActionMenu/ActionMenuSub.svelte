<script lang="ts" module>
	export const docBeta = true;
</script>

<script lang="ts">
	import ChevronRightIcon from "$lib/icons/ChevronRightIcon.svelte";
	import type { Snippet } from "svelte";
	import newUniqueId from "../local-unique-id";
	import ActionMenuMarker from "./ActionMenuMarker.svelte";

	interface Props {
		align?: "start" | "end";
		trigger: string | Snippet;
		children: Snippet;
	}
	let { align = "start", trigger, children }: Props = $props();

	const id = "ds-ams-" + newUniqueId();
</script>

<!-- <div
	role="menuitem"
	tabindex="-1"
	id="r10"
	aria-haspopup="menu"
	aria-expanded="true"
	aria-controls="rv"
	data-state="open"
	class="navds-action-menu__item navds-action-menu__sub-trigger"
	data-submenu-trigger="true"
	data-index="2"
	style="user-select: none;"
>
	Tildel saksbehandler
	<div
		aria-hidden="true"
		class="navds-action-menu__marker-icon navds-action-menu__marker navds-action-menu__marker--right"
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="1em"
			height="1em"
			fill="none"
			viewBox="0 0 24 24"
			focusable="false"
			role="img"
			aria-hidden="true"
			><path
				fill="currentColor"
				fill-rule="evenodd"
				d="M9.47 5.97a.75.75 0 0 1 1.06 0l5.5 5.5a.75.75 0 0 1 0 1.06l-5.5 5.5a.75.75 0 1 1-1.06-1.06L14.44 12 9.47 7.03a.75.75 0 0 1 0-1.06"
				clip-rule="evenodd"
			></path></svg
		>
	</div>
</div> -->
<button
	role="menuitem"
	tabindex="-1"
	aria-haspopup="menu"
	class="navds-action-menu__item navds-action-menu__sub-trigger"
	data-submenu-trigger="true"
	data-index="2"
	style="user-select: none; anchor-name: --{id};"
	popovertarget={id}
>
	{#if typeof trigger === "string"}
		{trigger}
	{:else}
		{@render trigger()}
	{/if}

	<ActionMenuMarker placement="right" class="navds-action-menu__marker-icon">
		<ChevronRightIcon />
	</ActionMenuMarker>
</button>

<div
	{id}
	role="menu"
	popover="auto"
	dir="ltr"
	class="navds-action-menu__content"
	style="position-anchor: --{id}; --__ac-action-menu-content-transform-origin: var(--ac-floating-transform-origin); --__ac-action-menu-content-available-height: var(--ac-floating-available-height); "
>
	<div class="navds-action-menu__content-inner">
		{@render children()}
	</div>
</div>

<style>
	button {
		background: none;
		border: unset;
		width: 100%;
	}
	.navds-action-menu__content {
		margin: 0;
		border: 0;
		outline: none;
		pointer-events: auto;
		position-area: end;
		position: absolute;
		position-try-fallbacks: end, start, bottom, top;
	}
</style>
