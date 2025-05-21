<script lang="ts">
	import MagnifyingGlassIcon from "$lib/icons/MagnifyingGlassIcon.svelte";
	import type { HTMLButtonAttributes } from "svelte/elements";
	import Button from "../Button/Button.svelte";

	interface Props extends HTMLButtonAttributes {
		/**
		 * Size of button.
		 */
		size?: "medium" | "small";
		/**
		 * Button variant
		 */
		variant?: "primary" | "secondary";
		/**
		 * Loading state
		 */
		loading?: boolean;
		/**
		 * Disables element
		 */
		disabled?: boolean;
		/**
		 * Aria label for icon
		 */
		searchIconText?: string;
	}

	let {
		size = "medium",
		variant = "primary",
		loading = false,
		disabled = false,
		searchIconText = "",
		...restProps
	}: Props = $props();
</script>

<Button
	type="submit"
	{size}
	{variant}
	{loading}
	class={[restProps.class, "aksel-search__button-search"]}
	{disabled}
>
	{#snippet icon()}
		<MagnifyingGlassIcon title={searchIconText} />
	{/snippet}
</Button>
