<!--
	@component
	GlobalAlertContent is the content section of a GlobalAlert, containing the main message text.
-->

<script lang="ts">
	import { omit } from "../helpers";
	import { GetTheme } from "../Theme/Theme.svelte";
	import type { GlobalAlertContentProps } from "./type";

	let { children, ...restProps }: GlobalAlertContentProps = $props();

	const themeCtx = GetTheme();
</script>

<div
	{...omit(restProps, "class")}
	data-color={themeCtx ? themeCtx.color : undefined}
	class={[restProps.class, "aksel-base-alert__content"]}
>
	{@render children()}
</div>
