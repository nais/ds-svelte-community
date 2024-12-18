<script lang="ts">
	import type { Snippet } from "svelte";
	import { HTMLAttributes } from "svelte/elements";

	interface Props extends HTMLAttributes<HTMLButtonElement> {
		/**
		 * Select some type
		 */
		type?: "button" | "submit" | "reset";
		/**
		 * Color
		 */
		color: string;
		onClick?: (e: MouseEvent) => void;
		/**
		 * Default slot
		 */
		children: Snippet;
		named?: Snippet<[string]>;
	}

	let { type = "button", color, onClick, children, named }: Props = $props();
</script>

<button
	{type}
	onclick={(e) => {
		if (onClick) {
			onClick(e);
		}
	}}
	style="color: {color}"
>
	{@render children()}

	{#if named}
		{@render named(color)}
	{:else}
		Default
	{/if}
</button>
