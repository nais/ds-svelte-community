<script lang="ts">
	import doc from "$lib/components/primitives/Page/Page.svelte?doc";
	import blockDoc from "$lib/components/primitives/Page/PageBlock.svelte?doc";

	import Doc from "$doclib/Doc.svelte";
	import Story from "$doclib/Story.svelte";
	import { BodyLong, Box, Heading, Page, PageBlock, VStack } from "$lib";
</script>

<Doc {doc} extraChildrenDoc={[blockDoc]}>
	<Story locked>
		<Box background="neutral-moderate">
			<Page>
				<Box as="header" background="neutral-strong" padding="space-16">
					<PageBlock width="xl" gutters>
						<Heading level="1" size="medium">Header</Heading>
					</PageBlock>
				</Box>

				<PageBlock as="main" width="xl" gutters>
					<Box paddingBlock="space-32">
						<Heading level="2" size="large" spacing>Page.Block</Heading>
						<BodyLong>
							Page wraps the full page layout, while Page.Block centers content and applies a max
							width. Use Page.Block in headers and footers to keep content aligned with the main
							content area.
						</BodyLong>
					</Box>
				</PageBlock>

				{#snippet footer()}
					<Box as="footer" background="neutral-strong" padding="space-16">
						<PageBlock width="xl" gutters>
							<BodyLong>Footer</BodyLong>
						</PageBlock>
					</Box>
				{/snippet}
			</Page>
		</Box>
	</Story>

	<Story name="Width" locked>
		<Box background="neutral-moderate">
			<Page>
				<PageBlock as="main" width="text" gutters>
					<Box paddingBlock="space-32">
						<BodyLong>
							We recommend using <code>width="text"</code> for blocks of text. This sets the max width
							to 576px + padding and gives a comfortable line length.
						</BodyLong>
					</Box>
				</PageBlock>
			</Page>
		</Box>
	</Story>

	<Story name="Widths" locked>
		<VStack gap="space-16">
			{#each ["text", "md", "lg", "xl", "2xl"] as const as width (width)}
				<Box background="neutral-moderate">
					<PageBlock {width} gutters>
						<Box padding="space-16" background="neutral-strong">
							<BodyLong>width="{width}"</BodyLong>
						</Box>
					</PageBlock>
				</Box>
			{/each}
		</VStack>
	</Story>

	<Story name="Gutters" locked>
		<VStack gap="space-16">
			<Box background="neutral-moderate">
				<PageBlock width="xl" gutters>
					<Box padding="space-16" background="neutral-strong">
						<BodyLong>Page.Block with gutters</BodyLong>
					</Box>
				</PageBlock>
			</Box>
			<Box background="neutral-moderate">
				<PageBlock width="xl">
					<Box padding="space-16" background="neutral-strong">
						<BodyLong>Page.Block without gutters</BodyLong>
					</Box>
				</PageBlock>
			</Box>
		</VStack>
	</Story>

	<Story name="Footer below fold" locked>
		<Box background="neutral-moderate" height="20rem" overflow="auto">
			<Page footerPosition="belowFold">
				<PageBlock as="main" width="xl" gutters>
					<Box paddingBlock="space-32">
						<Heading level="2" size="medium" spacing>Short content</Heading>
						<BodyLong>
							With <code>footerPosition="belowFold"</code> the footer is pushed below the fold, so short
							content still fills the viewport.
						</BodyLong>
					</Box>
				</PageBlock>

				{#snippet footer()}
					<Box as="footer" background="neutral-strong" padding="space-16">
						<PageBlock width="xl" gutters>
							<BodyLong>Footer below fold</BodyLong>
						</PageBlock>
					</Box>
				{/snippet}
			</Page>
		</Box>
	</Story>
</Doc>
