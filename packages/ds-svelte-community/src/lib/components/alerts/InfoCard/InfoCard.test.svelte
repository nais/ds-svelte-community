<script lang="ts">
	import { default as InformationSquareIcon } from "$lib/icons/InformationSquareIcon.svelte";
	import InfoCard from "./InfoCard.svelte";
	import InfoCardContent from "./InfoCardContent.svelte";
	import InfoCardHeader from "./InfoCardHeader.svelte";
	import InfoCardTitle from "./InfoCardTitle.svelte";
	import type { InfoCardProps } from "./type";

	interface Props extends Omit<InfoCardProps, "children"> {
		titleText: string;
		contentText: string;
	}

	let { titleText, contentText, ...restProps }: Props = $props();
</script>

<InfoCard {...restProps}>
	<InfoCardHeader>
		{#snippet icon()}
			<InformationSquareIcon aria-hidden="true" />
		{/snippet}
		<InfoCardTitle>{titleText}</InfoCardTitle>
	</InfoCardHeader>
	<InfoCardContent>{contentText}</InfoCardContent>
</InfoCard>
