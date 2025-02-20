<script lang="ts">
	import type { Component, Snippet } from "svelte";
	import { isSnippet } from "../helpers";
	import ActionMenuMarker from "./ActionMenuMarker.svelte";

	interface Props {
		/**
		 * Keyboard shortcut for the item.
		 */
		shortcut?: string;
		/**
		 * Styles the item as a destructive action.
		 */
		variant?: "danger";
		/**
		 * Disables the item.
		 */
		disabled?: boolean;
		/**
		 * Icon to display next to the item.
		 */
		icon?: Snippet | Component;
		/**
		 * Callback when the item is selected.
		 */
		onSelect?: () => void;
		/**
		 * Content of the item.
		 */
		children: Snippet;
	}

	let { shortcut, variant, disabled = false, children, icon: Icon }: Props = $props();

	let keys = $derived(shortcut && shortcut.split("+").map((key) => key.trim()));
</script>

<div
	role="menuitem"
	tabindex="0"
	class="navds-action-menu__item"
	class:navds-action-menu__item--has-icon={!!Icon}
	class:navds-action-menu__item--danger={variant === "danger"}
	aria-disabled={disabled}
	data-disabled={disabled}
>
	{@render children()}
	{#if Icon}
		<ActionMenuMarker placement="left" class="navds-action-menu__marker-icon">
			{#if isSnippet(Icon)}
				{@render Icon()}
			{:else}
				<Icon />
			{/if}
		</ActionMenuMarker>
	{/if}

	{#if keys && keys.length > 0}
		<ActionMenuMarker placement="right" class="navds-action-menu__marker-shortcut">
			{#each keys as key}
				<span class="navds-action-menu__shortcut">{key}</span>
			{/each}
		</ActionMenuMarker>
	{/if}
</div>

<style>
	@media (hover: hover) {
		.navds-action-menu__item:focus {
			outline: none;
			background-color: inherit;
			color: inherit;
		}

		.navds-action-menu__item:hover {
			outline: none;
			background-color: var(--ax-bg-accent-moderate-hoverA, var(--a-surface-action-subtle-hover));
			color: var(--ax-text-neutral, var(--a-text-default));
		}
	}
</style>
