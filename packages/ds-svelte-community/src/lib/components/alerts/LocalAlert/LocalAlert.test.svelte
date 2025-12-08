<script lang="ts">
	import LocalAlert from "./LocalAlert.svelte";
	import LocalAlertCloseButton from "./LocalAlertCloseButton.svelte";
	import LocalAlertContent from "./LocalAlertContent.svelte";
	import LocalAlertHeader from "./LocalAlertHeader.svelte";
	import LocalAlertTitle from "./LocalAlertTitle.svelte";
	import type { LocalAlertProps } from "./type";

	interface Props extends Omit<LocalAlertProps, "children"> {
		titleText: string;
		contentText: string;
		showCloseButton?: boolean;
	}

	let { titleText, contentText, showCloseButton = false, ...restProps }: Props = $props();
</script>

<LocalAlert {...restProps}>
	<LocalAlertHeader>
		<LocalAlertTitle>{titleText}</LocalAlertTitle>
		{#if showCloseButton}
			<LocalAlertCloseButton />
		{/if}
	</LocalAlertHeader>
	<LocalAlertContent>{contentText}</LocalAlertContent>
</LocalAlert>
