<script lang="ts">
	import doc from "$lib/components/primitives/Bleed/Bleed.svelte?doc";

	import Doc from "$doclib/Doc.svelte";
	import Story from "$doclib/Story.svelte";
	import { Bleed, BodyLong, Box, HStack, VStack } from "$lib";
	import { MagnifyingGlassIcon } from "$lib/icons";
	import DemoWrapper from "./DemoWrapper.svelte";
</script>

<Doc {doc}>
	<Story locked>
		<DemoWrapper>
			<Bleed marginInline="space-40">
				<Box padding="space-12" class="p" background="meta-purple-moderate">
					<HStack justify="center">marginInline</HStack>
				</Box>
			</Bleed>
		</DemoWrapper>
	</Story>

	<Story name="Direction" locked>
		<VStack gap="space-16">
			<DemoWrapper>
				<Bleed marginInline="space-40 space-0">
					<Box padding="space-12" class="p" background="meta-purple-moderate">
						<HStack justify="center">marginInline start</HStack>
					</Box>
				</Bleed>
			</DemoWrapper>
			<DemoWrapper>
				<Bleed marginInline="space-0 space-40">
					<Box padding="space-12" class="p" background="meta-purple-moderate">
						<HStack justify="center">marginInline end</HStack>
					</Box>
				</Bleed>
			</DemoWrapper>
			<DemoWrapper>
				<Bleed marginBlock="space-40 space-0">
					<Box padding="space-12" class="p" background="meta-purple-moderate">
						<HStack justify="center">marginBlock start</HStack>
					</Box>
				</Bleed>
			</DemoWrapper>
			<DemoWrapper>
				<Bleed marginBlock="space-0 space-40">
					<Box padding="space-12" class="p" background="meta-purple-moderate">
						<HStack justify="center">marginBlock end</HStack>
					</Box>
				</Bleed>
			</DemoWrapper>
		</VStack>
	</Story>

	<Story name="Responsive" locked>
		<DemoWrapper>
			<Bleed marginInline={{ xs: "space-32", md: "space-48", lg: "space-64" }}>
				<Box padding="space-12" class="p" background="meta-purple-moderate">
					<HStack justify="center">
						<BodyLong>xs: space-32, md: space-48, lg: space-64</BodyLong>
					</HStack>
				</Box>
			</Bleed>
		</DemoWrapper>
	</Story>

	<Story name="Reflective padding" locked>
		<DemoWrapper>
			<Bleed marginInline="space-40" reflectivePadding>
				<Box class="p" background="meta-purple-moderate">
					reflectivePadding lar innhold forbli der det ville vært uten Bleed
				</Box>
			</Bleed>
			<Bleed marginInline="space-40">
				<Box background="meta-purple-moderate">Bleed uten reflectivePadding</Box>
			</Bleed>
			<Bleed marginInline="space-40">
				<Box class="p" background="meta-purple-moderate">Uten reflectivePadding</Box>
			</Bleed>
		</DemoWrapper>
	</Story>

	<Story name="Full" locked preview={{ useIframe: true }}>
		<DemoWrapper>
			<Bleed marginInline="full">
				<Box padding="space-12" class="p" background="meta-purple-moderate">
					<HStack justify="center">Full</HStack>
				</Box>
			</Bleed>
		</DemoWrapper>
	</Story>

	<Story name="Optical alignment">
		<VStack gap="space-24" align="start">
			<HStack gap="space-8" align="center">
				With
				<Box
					background="meta-purple-moderate"
					paddingBlock="space-4"
					paddingInline="space-8"
					borderRadius="full"
				>
					<Bleed marginBlock="px 0">
						<MagnifyingGlassIcon aria-hidden style="font-size: 1.25rem" />
					</Bleed>
				</Box>
			</HStack>

			<HStack gap="space-8" align="center">
				Without
				<Box
					background="meta-purple-moderate"
					paddingBlock="space-4"
					paddingInline="space-8"
					borderRadius="full"
				>
					<MagnifyingGlassIcon aria-hidden style="font-size: 1.25rem" />
				</Box>
			</HStack>
		</VStack>
	</Story>
</Doc>
