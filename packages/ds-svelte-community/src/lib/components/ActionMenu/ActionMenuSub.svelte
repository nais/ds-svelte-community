<script lang="ts" module>
	export const experimental = true;
</script>

<script lang="ts">
	import ChevronRightIcon from "$lib/icons/ChevronRightIcon.svelte";
	import { type Snippet } from "svelte";
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

	const uid = $props.id();
	const id = "ds-ams-" + uid;

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
	class="ds-svelte-action-menu__item aksel-action-menu__item aksel-action-menu__sub-trigger"
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

	<ActionMenuMarker placement="right" class="aksel-action-menu__marker-icon">
		<ChevronRightIcon />
	</ActionMenuMarker>
</button>

<div
	use:floatingContent
	{id}
	role="menu"
	popover="auto"
	dir="ltr"
	class="ds-svelte-action-menu__content aksel-action-menu__content"
	style={isPolyfilled
		? undefined
		: `position-anchor: --${id}; --__ac-action-menu-content-transform-origin: var(--ac-floating-transform-origin); --__ac-action-menu-content-available-height: var(--ac-floating-available-height); `}
	ontoggle={(e) => {
		open = e.newState == "open";
	}}
>
	<div class="aksel-action-menu__content-inner">
		{@render children()}
	</div>
</div>

<style>
	button {
		background: transparent;
		border: none;
	}

	.ds-svelte-action-menu__item {
		width: 100%;
		box-sizing: border-box;

		&:hover {
			outline: none;
			background-color: var(--ax-bg-accent-moderate-hoverA, var(--a-surface-action-subtle-hover));
			color: var(--ax-text-neutral, var(--a-text-default));
		}
	}

	.ds-svelte-action-menu__content {
		margin: 0;
		border: 0;
		padding: 0;
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
