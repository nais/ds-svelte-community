<script lang="ts" module>
	export const experimental = true;
</script>

<script lang="ts">
	import ChevronRightIcon from "$lib/icons/ChevronRightIcon.svelte";
	import { type Snippet } from "svelte";
	import newUniqueId from "../local-unique-id";
	import ActionMenuMarker from "./ActionMenuMarker.svelte";
	import { createFloatingActions, isPolyfilled } from "./floating_wrapper";

	interface Props {
		/**
		 * The trigger for the action menu. Can be a string or a snippet.
		 */
		trigger: string | Snippet;
		/**
		 * The content of the action menu.
		 */
		children: Snippet;
	}
	let { trigger, children }: Props = $props();

	const id = "ds-ams-" + newUniqueId();

	const [floatingRef, floatingContent] = createFloatingActions({
		placement: "right-start",
	});

	let el: HTMLButtonElement | null = $state(null);
	let open = $state(false);
</script>

<button
	bind:this={el}
	use:floatingRef
	role="menuitem"
	aria-haspopup="menu"
	class="navds-action-menu__item navds-action-menu__sub-trigger"
	style="user-select: none; anchor-name: --{id};"
	data-state={open ? "open" : "closed"}
	aria-expanded={open}
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
	use:floatingContent
	{id}
	role="menu"
	popover="auto"
	dir="ltr"
	class="navds-action-menu__content"
	style={isPolyfilled
		? undefined
		: `position-anchor: --${id}; --__ac-action-menu-content-transform-origin: var(--ac-floating-transform-origin); --__ac-action-menu-content-available-height: var(--ac-floating-available-height); `}
	ontoggle={(e) => {
		open = e.newState == "open";
	}}
>
	<div class="navds-action-menu__content-inner">
		{@render children()}
	</div>
</div>

<style>
	.navds-action-menu__item {
		width: 100%;
		box-sizing: border-box;

		&:hover {
			outline: none;
			background-color: var(--a-surface-action-subtle-hover);
			color: var(--a-text-default);
		}
	}

	.navds-action-menu__content {
		margin: 0;
		border: 0;
		outline: none;
		pointer-events: auto;
		position-area: right span-bottom;
		position: absolute;
		position-try-fallbacks:
			left span-bottom,
			right span-top,
			left span-top,
			bottom,
			top;
	}
</style>
