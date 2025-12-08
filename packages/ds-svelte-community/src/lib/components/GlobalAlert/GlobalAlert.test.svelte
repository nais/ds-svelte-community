<script lang="ts">
	import GlobalAlert from "./GlobalAlert.svelte";
	import GlobalAlertCloseButton from "./GlobalAlertCloseButton.svelte";
	import GlobalAlertContent from "./GlobalAlertContent.svelte";
	import GlobalAlertHeader from "./GlobalAlertHeader.svelte";
	import GlobalAlertTitle from "./GlobalAlertTitle.svelte";
	import type { GlobalAlertProps } from "./type";

	interface Props extends Omit<GlobalAlertProps, "children"> {
		titleText: string;
		contentText: string;
		showCloseButton?: boolean;
	}

	let { titleText, contentText, showCloseButton = false, ...restProps }: Props = $props();
</script>

<GlobalAlert {...restProps}>
	<GlobalAlertHeader>
		<GlobalAlertTitle>{titleText}</GlobalAlertTitle>
		{#if showCloseButton}
			<GlobalAlertCloseButton />
		{/if}
	</GlobalAlertHeader>
	<GlobalAlertContent>{contentText}</GlobalAlertContent>
</GlobalAlert>
