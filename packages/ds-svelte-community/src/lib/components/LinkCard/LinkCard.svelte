<!--
	@component
	Accessible clickable card as a link.

	Read more about this component in the [Aksel documentation](https://aksel.nav.no/komponenter/core/linkcard).

	All extra props are passed to the root element.
 -->

<script lang="ts">
	import { ArrowRightIcon } from "$lib/icons";
	import { setContext } from "svelte";
	import { omit } from "../helpers.js";
	import BodyLong from "../typography/BodyLong/BodyLong.svelte";
	import type { LinkCardProps } from "./type.js";

	let {
		arrow = true,
		arrowPosition = "baseline",
		size = "medium",
		children,
		ref = $bindable(),
		...restProps
	}: LinkCardProps = $props();

	// Provide size context for child components
	setContext("linkcard-size", size);
</script>

<BodyLong
	{...omit(restProps, "class")}
	as="div"
	{size}
	data-color="neutral"
	data-align-arrow={arrowPosition}
	class={[
		"aksel-link-anchor__overlay",
		"aksel-link-card",
		`aksel-link-card--${size}`,
		restProps.class,
	]}
>
	{@render children()}
	{#if arrow}
		<ArrowRightIcon
			aria-hidden
			class={["aksel-link-anchor__arrow", "aksel-link-card__arrow"]}
			font-size={size === "medium" ? "1.75rem" : "1.5rem"}
		/>
	{/if}
</BodyLong>
