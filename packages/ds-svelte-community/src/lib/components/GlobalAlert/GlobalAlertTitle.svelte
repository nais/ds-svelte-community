<!--
	@component
	GlobalAlertTitle is the title component for GlobalAlert. Remember to use correct heading-level with the `as` prop.
-->

<script lang="ts">
	import { omit } from "../helpers";
	import BodyShort from "../typography/BodyShort/BodyShort.svelte";
	import { GetGlobalAlertContext } from "./GlobalAlert.svelte";
	import type { GlobalAlertTitleProps } from "./type";

	let { as = "h2", children, ...restProps }: GlobalAlertTitleProps = $props();

	const ctx = GetGlobalAlertContext();

	const bodySize = $derived(ctx?.size === "medium" ? "large" : "medium");
</script>

<BodyShort
	{...omit(restProps, "class")}
	{as}
	size={bodySize}
	weight="semibold"
	class={[restProps.class, "aksel-base-alert__title"]}
	aria-labelledby={ctx?.statusId}
>
	{@render children()}
</BodyShort>
