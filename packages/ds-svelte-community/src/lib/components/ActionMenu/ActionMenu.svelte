<!--
@component

ActionMenu is a dropdown menu for actions and navigation. Often used to collect related actions and reduce unnecessary noise (visual complexity) in the interface.
-->

<script lang="ts" module>
	export const experimental = true;
</script>

<script lang="ts">
	import ChevronDownIcon from "$lib/icons/ChevronDownIcon.svelte";
	import { type Snippet } from "svelte";
	import Button from "../Button/Button.svelte";
	import { createFloatingActions, isPolyfilled } from "./floating_wrapper";

	interface Props {
		/**
		 * The alignment of the action menu.
		 */
		align?: "start" | "end";
		/**
		 * The trigger for the action menu. Can be a string or a snippet.
		 * If a string, a button with variant `secondary-neutral` will be created with the string as the button text.
		 * If a snippet, remember to pass the attributes provided to the snippet to the trigger element.
		 */
		trigger:
			| Snippet<
					[
						{
							popovertarget: string;
							style: string;
						},
					]
			  >
			| string;
		/**
		 * The content of the action menu.
		 */
		children: Snippet;
	}
	let { align = "start", trigger, children }: Props = $props();

	const uid = $props.id();
	const id = "ds-am-" + uid;

	const [floatingRef, floatingContent] = createFloatingActions({
		placement: "bottom-start",
	});

	let el: HTMLDivElement | null = null;

	let triggerProps = $derived({ popovertarget: id, style: `anchor-name: --${id};` });
</script>

<div class="polyfill-wrapper" use:floatingRef>
	{#if typeof trigger === "string"}
		<Button variant="secondary-neutral" iconPosition="right" {...triggerProps}>
			{#snippet icon()}
				<ChevronDownIcon aria-hidden="true" />
			{/snippet}
			{trigger}
		</Button>
	{:else}
		{@render trigger(triggerProps)}
	{/if}
</div>

<div
	bind:this={el}
	use:floatingContent
	data-side="bottom"
	data-align={align}
	role="menu"
	popover="auto"
	aria-orientation="vertical"
	dir="ltr"
	{id}
	class="navds-action-menu__content"
	style={isPolyfilled
		? undefined
		: `position-anchor: --${id}; --__ac-action-menu-content-transform-origin: var(--ac-floating-transform-origin); --__ac-action-menu-content-available-height: var(--ac-floating-available-height); pointer-events: auto;
		position: absolute;
		position-try-fallbacks:
			bottom span-right,
			bottom span-left,
			top span-right,
			top span-left;`}
	style:position-area={isPolyfilled
		? undefined
		: align === "start"
			? "bottom span-right"
			: "bottom span-left"}
	tabindex="0"
	data-index="0"
>
	<div class="navds-action-menu__content-inner">
		{@render children()}
	</div>
</div>

<style>
	.navds-action-menu__content {
		margin: 0;
		border: 0;
		padding: 0;
		outline: none;
	}

	.polyfill-wrapper {
		display: contents;
	}
</style>
