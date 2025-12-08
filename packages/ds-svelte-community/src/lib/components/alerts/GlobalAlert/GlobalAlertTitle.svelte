<!--
	@component
	GlobalAlertTitle is the title component for GlobalAlert. Remember to use correct heading-level with the `as` prop.
-->

<script lang="ts">
	import BaseAlertTitle from "../BaseAlert/BaseAlertTitle.svelte";
	import type { GlobalAlertTitleProps } from "./type";

	let { children, ...restProps }: GlobalAlertTitleProps = $props();
</script>

<BaseAlertTitle {...restProps}>
	{@render children()}
</BaseAlertTitle>
