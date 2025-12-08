<!--
	@component
	InfoCard is a component for displaying informational content in a card format.
	It uses a moderate visual style and is typically used for non-urgent informational messages.

	Read more about this component in the [Aksel documentation](https://aksel.nav.no/komponenter/core/infocard).
-->

<script lang="ts" module>
	export { GetBaseAlertContext as GetInfoCardContext } from "../BaseAlert/BaseAlert.svelte";
</script>

<script lang="ts">
	import BaseAlert from "../BaseAlert/BaseAlert.svelte";
	import type { InfoCardProps } from "./type";

	let {
		"data-color": dataColor = "info",
		as = "div",
		children,
		...restProps
	}: InfoCardProps = $props();
</script>

<BaseAlert {...restProps} {as} data-color={dataColor} global={false} type="moderate">
	{@render children()}
</BaseAlert>
