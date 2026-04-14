<!--
	@component
	We often have situations where users need a more in-depth explanation or justification. ReadMore does this well. It consists of a button that you click to open a text panel.

	Read more about this component in the [Aksel documentation](https://aksel.nav.no/komponenter/core/read-more).
-->

<script lang="ts">
	import ChevronDownIcon from "$lib/icons/ChevronDownIcon.svelte";
	import { omit } from "../helpers";
	import BodyLong from "../typography/BodyLong/BodyLong.svelte";
	import type { ReadMoreProps } from "./type";

	let {
		size = "medium",
		header,
		children,
		defaultOpen = false,
		open = $bindable(defaultOpen),
		onopenchange,
		variant = "ghost",
		"data-color": dataColor,
		...restProps
	}: ReadMoreProps = $props();

	let typoSize: "small" | "medium" = $derived(size === "small" ? "small" : "medium");

	function toggleOpen() {
		open = !open;

		onopenchange?.(open);
	}
</script>

<div
	class={[restProps.class, "aksel-read-more", `aksel-read-more--${size}`]}
	data-variant={variant}
	data-state={open ? "open" : "closed"}
	data-color={dataColor}
>
	<button
		{...omit(restProps, "class")}
		type="button"
		class={[
			"aksel-read-more__button",
			"aksel-body-short",
			{
				"aksel-body-short--small": size === "small",
			},
		]}
		onclick={toggleOpen}
		aria-expanded={open}
	>
		<ChevronDownIcon class="aksel-read-more__expand-icon" aria-hidden />
		<span>{header}</span>
	</button>

	<BodyLong as="div" class="aksel-read-more__content" size={typoSize} {children} />
</div>
