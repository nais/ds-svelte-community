<script lang="ts">
	import doc from "$lib/components/typography/Link/Link.svelte?doc";

	import Doc from "$doclib/Doc.svelte";
	import Story from "$doclib/Story.svelte";
	import { BodyLong, Box, Link, VStack } from "$lib";
	import PlusCircleFillIcon from "$lib/icons/PlusCircleFillIcon.svelte";
	import PrinterSmallIcon from "$lib/icons/PrinterSmallIcon.svelte";
</script>

<Doc {doc} preview={{ width: "60%" }}>
	<Story>
		<BodyLong>
			Officia incididunt <Link href="#example">link to a new page</Link> occaecat commodo id ad aliquip.
		</BodyLong>
	</Story>

	<Story name="Variants">
		<VStack gap="space-16">
			<Link href="#example" variant="action">Action link</Link>
			<Link href="#example" variant="neutral">Neutral link</Link>
			<Link href="#example" variant="subtle">Subtle link</Link>
		</VStack>
	</Story>

	<Story name="Underline">
		<VStack gap="space-16">
			<Link href="#example" underline={false}>Underline only on hover</Link>
			<Link href="#example" underline>Always underlined</Link>
		</VStack>
	</Story>

	<Story name="With icon">
		<BodyLong>
			Officia incididunt
			<Link href="#example">
				link to a new page
				<PrinterSmallIcon title="Print document" />
			</Link>
			occaecat commodo id ad aliquip.
		</BodyLong>
	</Story>

	<Story name="Inline">
		<BodyLong>
			Officia incididunt Culpa sit aute est duis minim in in voluptate velit Incididunt laborum nisi
			nisi Lorem officia adipisicing non veniam culpa sit aute est duis
			<Link inlineText href="#example">
				this is a fairly long link that wraps to multiple lines when needed
				<PlusCircleFillIcon aria-hidden="true" />
			</Link>
			minim in in voluptate velit Incididunt laborum nisi nisi Lorem officia adipisicing non veniam occaecat
			commodo id ad aliquip.
		</BodyLong>
	</Story>

	<Story name="Anchor">
		<Box id="top" paddingBlock="space-16">
			<Link href="#anchor">Jump to anchor</Link>
			<BodyLong id="anchor" style="margin: 1600px 0;">
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus quae iure nihil. Voluptatem
				enim ratione sit consequuntur ab quibusdam rem dicta amet dolorum asperiores. Voluptates,
				similique. Laborum deleniti nemo unde!
				<br />
				<Link href="#top">Jump to top</Link>
			</BodyLong>
		</Box>
	</Story>
</Doc>
