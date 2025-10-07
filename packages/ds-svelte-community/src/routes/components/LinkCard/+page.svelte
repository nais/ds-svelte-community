<script lang="ts">
	import doc from "$lib/components/LinkCard/LinkCard.svelte?doc";

	import Doc from "$doclib/Doc.svelte";
	import Story from "$doclib/Story.svelte";
	import { Box, LinkCard } from "$lib";
	import { BandageIcon } from "$lib/icons";
</script>

<Doc {doc}>
	<Story>
		<LinkCard>
			<Box
				asChild
				borderRadius="12"
				padding="space-8"
				style="background-color: var(--ax-bg-moderateA);"
			>
				<!-- <LinkCard.Icon> -->
				<BandageIcon fontSize="2rem" />
				<!-- </LinkCard.Icon> -->
			</Box>
			<!-- <LinkCard.Title>
    <LinkCard.Anchor href="/eksempel">Sykepenger</LinkCard.Anchor>
  </LinkCard.Title>
  <LinkCard.Description>
    Erstatter inntekten din når du ikke kan jobbe på grunn av sykdom eller
    skade.
  </LinkCard.Description>
  <LinkCard.Footer>
    <Tag size="small" variant="neutral">
      Pengestøtte
    </Tag>
  </LinkCard.Footer> -->
		</LinkCard>
	</Story>
</Doc>
