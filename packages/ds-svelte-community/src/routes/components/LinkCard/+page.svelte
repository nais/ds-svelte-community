<script lang="ts">
	import doc from "$lib/components/LinkCard/LinkCard.svelte?doc";
	import anchorDoc from "$lib/components/LinkCard/LinkCardAnchor.svelte?doc";
	import descriptionDoc from "$lib/components/LinkCard/LinkCardDescription.svelte?doc";
	import footerDoc from "$lib/components/LinkCard/LinkCardFooter.svelte?doc";
	import iconDoc from "$lib/components/LinkCard/LinkCardIcon.svelte?doc";
	import imageDoc from "$lib/components/LinkCard/LinkCardImage.svelte?doc";
	import titleDoc from "$lib/components/LinkCard/LinkCardTitle.svelte?doc";

	import Doc from "$doclib/Doc.svelte";
	import Story from "$doclib/Story.svelte";
	import {
		Box,
		LinkCard,
		LinkCardAnchor,
		LinkCardDescription,
		LinkCardFooter,
		LinkCardIcon,
		LinkCardImage,
		LinkCardTitle,
		Tag,
	} from "$lib";
	import { BandageIcon, HeartIcon, WalletIcon } from "$lib/icons";
</script>

<Doc {doc} extraChildrenDoc={[titleDoc, anchorDoc, descriptionDoc, footerDoc, iconDoc, imageDoc]}>
	<Story>
		<LinkCard>
			<LinkCardIcon>
				<Box borderRadius="12" padding="space-8" style="background-color: var(--ax-bg-moderateA);">
					<BandageIcon fontSize="2rem" />
				</Box>
			</LinkCardIcon>
			<LinkCardTitle>
				<LinkCardAnchor href="#example">Sick pay benefits</LinkCardAnchor>
			</LinkCardTitle>
			<LinkCardDescription>
				Replaces your income when you cannot work due to illness or injury.
			</LinkCardDescription>
			<LinkCardFooter>
				<Tag size="small" variant="neutral-moderate">Financial support</Tag>
			</LinkCardFooter>
		</LinkCard>
	</Story>

	<Story name="Small size">
		<LinkCard size="small">
			<LinkCardIcon>
				<Box borderRadius="12" padding="space-8" style="background-color: var(--ax-bg-moderateA);">
					<HeartIcon fontSize="1.5rem" />
				</Box>
			</LinkCardIcon>
			<LinkCardTitle>
				<LinkCardAnchor href="#example">Health services</LinkCardAnchor>
			</LinkCardTitle>
			<LinkCardDescription>
				Information about available health services and how to access them.
			</LinkCardDescription>
		</LinkCard>
	</Story>

	<Story name="Without arrow">
		<LinkCard arrow={false}>
			<LinkCardIcon>
				<Box borderRadius="12" padding="space-8" style="background-color: var(--ax-bg-moderateA);">
					<WalletIcon fontSize="2rem" />
				</Box>
			</LinkCardIcon>
			<LinkCardTitle>
				<LinkCardAnchor href="#example">Financial overview</LinkCardAnchor>
			</LinkCardTitle>
			<LinkCardDescription>
				View your payments, applications, and financial status.
			</LinkCardDescription>
		</LinkCard>
	</Story>

	<Story name="Center aligned arrow">
		<LinkCard arrowPosition="center">
			<LinkCardTitle>
				<LinkCardAnchor href="#example">Simple card</LinkCardAnchor>
			</LinkCardTitle>
			<LinkCardDescription>
				This card has no icon and centers the arrow vertically.
			</LinkCardDescription>
		</LinkCard>
	</Story>

	<Story name="With image">
		<LinkCard>
			<LinkCardImage aspectRatio="16/6">
				<img
					src="https://picsum.photos/seed/navikt/700/300"
					alt="Placeholder graphic for card"
					width="700"
				/>
			</LinkCardImage>
			<LinkCardTitle>
				<LinkCardAnchor href="#example">Sick pay benefits</LinkCardAnchor>
			</LinkCardTitle>
			<LinkCardDescription>
				Replaces your income when you cannot work due to illness or injury.
			</LinkCardDescription>
			<LinkCardFooter>
				<Tag size="small" variant="neutral-filled">Tag 1</Tag>
				<Tag size="small" variant="neutral">Tag 2</Tag>
			</LinkCardFooter>
		</LinkCard>
	</Story>
</Doc>
