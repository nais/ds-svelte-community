<script lang="ts">
	import type { Component, Snippet } from "svelte";
	import { isSnippet } from "../helpers";
	import ActionMenuMarker from "./ActionMenuMarker.svelte";

	interface Props {
		shortcut?: string;
		/**
		 * Styles the item as a destructive action.
		 */
		variant?: "danger";
		disabled?: boolean;
		icon?: Snippet | Component;
		onSelect?: () => void;
		children: Snippet;
	}

	let { shortcut, variant, disabled, children, icon: Icon }: Props = $props();

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
