<!--
	@component
	InfoCardTitle is the title component for InfoCard. Remember to use correct heading-level with the `as` prop.
-->

<script lang="ts">
	import BaseAlertTitle from "../BaseAlert/BaseAlertTitle.svelte";
	import type { InfoCardTitleProps } from "./type";

	let { children, ...restProps }: InfoCardTitleProps = $props();
</script>

<BaseAlertTitle {...restProps}>
	{@render children()}
</BaseAlertTitle>
