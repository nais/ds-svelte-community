<!--
	@component
	LocalAlertTitle is the title component for LocalAlert. Remember to use correct heading-level with the `as` prop.
-->

<script lang="ts">
	import BaseAlertTitle from "../BaseAlert/BaseAlertTitle.svelte";
	import type { LocalAlertTitleProps } from "./type";

	let { children, ...restProps }: LocalAlertTitleProps = $props();
</script>

<BaseAlertTitle {...restProps}>
	{@render children()}
</BaseAlertTitle>
