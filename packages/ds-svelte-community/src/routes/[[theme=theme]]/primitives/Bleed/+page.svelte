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
			<Bleed marginInline="10">
				<Box padding="3" class="p">
					<HStack justify="center">marginInline</HStack>
				</Box>
			</Bleed>
		</DemoWrapper>
	</Story>

	<Story name="Direction" locked>
		<VStack gap="4">
			<DemoWrapper>
				<Bleed marginInline="10 0">
					<Box padding="3" class="p">
						<HStack justify="center">marginInline start</HStack>
					</Box>
				</Bleed>
			</DemoWrapper>
			<DemoWrapper>
				<Bleed marginInline="0 10">
					<Box padding="3" class="p">
						<HStack justify="center">marginInline end</HStack>
					</Box>
				</Bleed>
			</DemoWrapper>
			<DemoWrapper>
				<Bleed marginBlock="10 0">
					<Box padding="3" class="p">
						<HStack justify="center">marginBlock start</HStack>
					</Box>
				</Bleed>
			</DemoWrapper>
			<DemoWrapper>
				<Bleed marginBlock="0 10">
					<Box padding="3" class="p">
						<HStack justify="center">marginBlock end</HStack>
					</Box>
				</Bleed>
			</DemoWrapper>
		</VStack>
	</Story>

	<Story name="Responsive" locked>
		<DemoWrapper>
			<Bleed marginInline={{ xs: "8", md: "12", lg: "16" }}>
				<Box padding="3" class="p">
					<HStack justify="center">
						<BodyLong>xs: 8, md: 12, lg: 16</BodyLong>
					</HStack>
				</Box>
			</Bleed>
		</DemoWrapper>
	</Story>

	<Story name="Reflective padding" locked>
		<DemoWrapper>
			<Bleed marginInline="10" reflectivePadding>
				<Box class="p">reflectivePadding lar innhold forbli der det ville vært uten Bleed</Box>
			</Bleed>
			<Bleed marginInline="10">
				<Box class="p">Uten reflectivePadding</Box>
			</Bleed>
		</DemoWrapper>
	</Story>

	<Story name="Full" locked>
		<DemoWrapper>
			<Bleed marginInline="full">
				<Box padding="3" class="p">
					<HStack justify="center">Full</HStack>
				</Box>
			</Bleed>
		</DemoWrapper>
	</Story>

	<Story name="Optical alignment">
		<VStack gap="6" align="start">
			<HStack gap="2" align="center">
				With
				<Box paddingBlock="1" paddingInline="2" borderRadius="full">
					<Bleed marginBlock="px 0">
						<MagnifyingGlassIcon aria-hidden style="font-size: 1.25rem" />
					</Bleed>
				</Box>
			</HStack>

			<HStack gap="2" align="center">
				Without
				<Box paddingBlock="1" paddingInline="2" borderRadius="full">
					<MagnifyingGlassIcon aria-hidden style="font-size: 1.25rem" />
				</Box>
			</HStack>
		</VStack>
	</Story>
</Doc>
