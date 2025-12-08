<!--
	@component
	InfoCardHeader is the header section of an InfoCard, containing the icon and title.
	Unlike GlobalAlertHeader and LocalAlertHeader, InfoCardHeader requires you to provide an icon.
-->

<script lang="ts">
	import BaseAlertHeader from "../BaseAlert/BaseAlertHeader.svelte";
	import type { InfoCardHeaderProps } from "./type";

	let { children, ...restProps }: InfoCardHeaderProps = $props();
</script>

<BaseAlertHeader {...restProps}>
	{@render children()}
</BaseAlertHeader>
