<script lang="ts">
	import doc from "$lib/components/alerts/InfoCard/InfoCard.svelte?doc";
	import contentDoc from "$lib/components/alerts/InfoCard/InfoCardContent.svelte?doc";
	import headerDoc from "$lib/components/alerts/InfoCard/InfoCardHeader.svelte?doc";
	import titleDoc from "$lib/components/alerts/InfoCard/InfoCardTitle.svelte?doc";

	import Doc from "$doclib/Doc.svelte";
	import Story from "$doclib/Story.svelte";
	import { InfoCard, InfoCardContent, InfoCardHeader, InfoCardTitle } from "$lib";
	import InformationSquareIcon from "$lib/icons/InformationSquareIcon.svelte";
	import LightBulbIcon from "$lib/icons/LightBulbIcon.svelte";
	import TasklistIcon from "$lib/icons/TasklistIcon.svelte";
</script>

<Doc {doc} extraChildrenDoc={[headerDoc, titleDoc, contentDoc]}>
	<Story>
		<InfoCard>
			<InfoCardHeader>
				{#snippet icon()}
					<InformationSquareIcon aria-hidden="true" />
				{/snippet}
				<InfoCardTitle>Good to know</InfoCardTitle>
			</InfoCardHeader>
			<InfoCardContent>
				InfoCard is used to display informational content in a card format. It has a moderate visual
				style and is typically used for non-urgent informational messages.
			</InfoCardContent>
		</InfoCard>
	</Story>

	<Story name="With different icons">
		<div class="flex flex-col gap-4">
			<InfoCard>
				<InfoCardHeader>
					{#snippet icon()}
						<InformationSquareIcon aria-hidden="true" />
					{/snippet}
					<InfoCardTitle>Information</InfoCardTitle>
				</InfoCardHeader>
				<InfoCardContent>Use the InformationSquareIcon for general information.</InfoCardContent>
			</InfoCard>

			<InfoCard>
				<InfoCardHeader>
					{#snippet icon()}
						<LightBulbIcon aria-hidden="true" />
					{/snippet}
					<InfoCardTitle>Tip</InfoCardTitle>
				</InfoCardHeader>
				<InfoCardContent>Use the LightBulbIcon for tips and suggestions.</InfoCardContent>
			</InfoCard>

			<InfoCard>
				<InfoCardHeader>
					{#snippet icon()}
						<TasklistIcon aria-hidden="true" />
					{/snippet}
					<InfoCardTitle>Checklist</InfoCardTitle>
				</InfoCardHeader>
				<InfoCardContent>Use the TasklistIcon for task-related information.</InfoCardContent>
			</InfoCard>
		</div>
	</Story>

	<Story name="Small size">
		<InfoCard size="small">
			<InfoCardHeader>
				{#snippet icon()}
					<InformationSquareIcon aria-hidden="true" />
				{/snippet}
				<InfoCardTitle>Small InfoCard</InfoCardTitle>
			</InfoCardHeader>
			<InfoCardContent>Use size="small" for a more compact card.</InfoCardContent>
		</InfoCard>
	</Story>

	<Story name="As section with aria-label">
		<InfoCard as="section" aria-label="Important information">
			<InfoCardHeader>
				{#snippet icon()}
					<InformationSquareIcon aria-hidden="true" />
				{/snippet}
				<InfoCardTitle>Accessible section</InfoCardTitle>
			</InfoCardHeader>
			<InfoCardContent>
				When using as="section", provide an aria-label or aria-labelledby for better accessibility.
			</InfoCardContent>
		</InfoCard>
	</Story>
</Doc>
