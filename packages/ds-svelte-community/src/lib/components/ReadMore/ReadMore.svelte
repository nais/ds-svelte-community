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
		open = $bindable(false),
		onopenchange,
		...restProps
	}: ReadMoreProps = $props();

	let typoSize: "small" | "medium" = $derived(size === "small" ? "small" : "medium");

	function toggleOpen() {
		open = !open;

		onopenchange?.(open);
	}
</script>

<div
	class={[
		restProps.class,
		"aksel-read-more",
		`aksel-read-more--${size}`,
		{ "aksel-read-more--open": open },
	]}
	data-volume="low"
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
		data-state={open ? "open" : "closed"}
	>
		<ChevronDownIcon class="aksel-read-more__expand-icon" aria-hidden />
		<span>{header}</span>
	</button>

	<BodyLong
		as="div"
		aria-hidden={!open}
		class={[
			"aksel-read-more__content",
			{
				"aksel-read-more__content--closed": !open,
			},
		]}
		size={typoSize}
		data-state={open ? "open" : "closed"}
		{children}
	/>
</div>
