<!--
	@component
	BaseAlertContent is the content section of a BaseAlert, containing the main message text.

	This is an internal component - use GlobalAlertContent or LocalAlertContent instead.
-->

<script lang="ts">
	import { omit } from "../../helpers";
	import { GetTheme } from "../../Theme/Theme.svelte";
	import type { BaseAlertContentProps } from "./type";

	let { children, ...restProps }: BaseAlertContentProps = $props();

	const themeCtx = GetTheme();
</script>

<div
	{...omit(restProps, "class")}
	data-color={themeCtx ? themeCtx.color : undefined}
	class={[restProps.class, "aksel-base-alert__content"]}
>
	{@render children()}
</div>
