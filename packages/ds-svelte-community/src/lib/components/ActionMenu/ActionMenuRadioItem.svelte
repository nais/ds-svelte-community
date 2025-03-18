<script lang="ts">
	import type { Snippet } from "svelte";
	import { GetTheme } from "../Theme/Theme.svelte";
	import { getRadioGroupContext } from "./context.svelte";

	interface Props {
		/**
		 * The value of the radio item.
		 */
		value: unknown;
		/**
		 * Content of the radio item.
		 */
		children: Snippet;
		/**
		 * Callback when the item is selected.
		 */
		onselect?: (value: unknown) => void;
	}

	let { value, children, onselect }: Props = $props();

	const ctx = getRadioGroupContext();
	const theme = GetTheme();

	let checked = $derived(ctx.currentValue == value);
	let state = $derived(checked ? "checked" : "unchecked");
</script>

<button
	role="menuitemradio"
	tabindex="0"
	aria-checked={checked}
	class="navds-action-menu__item navds-action-menu__item--has-icon"
	style="border: none;"
	data-state={state}
	onclick={() => {
		ctx.setValue(value);
		onselect?.(value);
	}}
>
	{@render children()}
	<div aria-hidden="true" class="navds-action-menu__marker navds-action-menu__marker--left">
		<div class="navds-action-menu__indicator" data-state={state} aria-hidden="true">
			<svg
				width="1em"
				height="1em"
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				class="navds-action-menu__indicator-icon"
				aria-hidden="true"
				><g class="navds-action-menu__indicator-icon--unchecked"
					><rect
						width="24"
						height="24"
						rx="12"
						fill="var(--ax-border-neutral, var(--a-border-default))"
					></rect><rect
						x="1"
						y="1"
						width="22"
						height="22"
						rx="11"
						stroke-width="2"
						fill="var(--ax-bg-default, var(--a-surface-default))"
					></rect></g
				>
				{#if theme}
					<g class="navds-action-menu__indicator-icon--checked">
						<rect width="24" height="24" rx="12" fill="var(--ax-bg-accent-strong-pressed)" />
						<rect
							x="8"
							y="8"
							width="8"
							height="8"
							rx="4"
							fill="var(--ax-bg-default, var(--a-surface-default))"
						/>
					</g>
				{:else}
					<g class="navds-action-menu__indicator-icon--checked"
						><rect
							x="1"
							y="1"
							width="22"
							height="22"
							rx="11"
							fill="var(--ax-bg-default, var(--a-surface-default))"
						></rect><rect
							x="1"
							y="1"
							width="22"
							height="22"
							rx="11"
							stroke="var(--ax-bg-accent-strong-pressed, var(--a-surface-action-selected))"
							stroke-width="2"
						></rect><path
							d="M20 12C20 16.4178 16.4178 20 12 20C7.58222 20 4 16.4178 4 12C4 7.58222 7.58222 4 12 4C16.4178 4 20 7.58222 20 12Z"
							fill="var(--ax-bg-accent-strong-pressed, var(--a-surface-action-selected))"
						></path></g
					>
				{/if}</svg
			>
		</div>
	</div>
</button>

<style>
	button {
		width: 100%;
		box-sizing: border-box;
		background-color: transparent;
	}

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
