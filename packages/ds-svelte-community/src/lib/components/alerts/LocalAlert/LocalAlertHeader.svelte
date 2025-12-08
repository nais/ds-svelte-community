<!--
	@component
	LocalAlertHeader is the header section of a LocalAlert, containing the icon, title, and optionally a close button.
-->

<script lang="ts">
	import BaseAlertHeader from "../BaseAlert/BaseAlertHeader.svelte";
	import type { LocalAlertHeaderProps } from "./type";

	let { children, ...restProps }: LocalAlertHeaderProps = $props();
</script>

<BaseAlertHeader {...restProps}>
	{@render children()}
</BaseAlertHeader>
