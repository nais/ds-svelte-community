<!--
	@component
	GlobalAlertHeader is the header section of a GlobalAlert, containing the icon, title, and optionally a close button.
-->

<script lang="ts">
	import BaseAlertHeader from "../BaseAlert/BaseAlertHeader.svelte";
	import type { GlobalAlertHeaderProps } from "./type";

	let { children, ...restProps }: GlobalAlertHeaderProps = $props();
</script>

<BaseAlertHeader {...restProps}>
	{@render children()}
</BaseAlertHeader>
