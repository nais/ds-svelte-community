<!--
	@component
	BaseAlertTitle is the title component for BaseAlert. Remember to use correct heading-level with the `as` prop.

	This is an internal component - use GlobalAlertTitle or LocalAlertTitle instead.
-->

<script lang="ts">
	import { omit } from "../../helpers";
	import BodyShort from "../../typography/BodyShort/BodyShort.svelte";
	import { GetBaseAlertContext } from "./BaseAlert.svelte";
	import type { BaseAlertTitleProps } from "./type";

	let { as = "h2", children, ...restProps }: BaseAlertTitleProps = $props();

	const ctx = GetBaseAlertContext();
	const uid = $props.id();
	const titleId = `base-alert-title-${uid}`;

	const bodySize = $derived(ctx?.size === "medium" ? "large" : "medium");

	const ariaLabelledBy = $derived([ctx?.statusId, titleId].filter(Boolean).join(" ") || undefined);
</script>

<BodyShort
	{...omit(restProps, "class")}
	{as}
	id={titleId}
	size={bodySize}
	weight="semibold"
	class={[restProps.class, "aksel-base-alert__title"]}
	aria-labelledby={ariaLabelledBy}
>
	{@render children()}
</BodyShort>
