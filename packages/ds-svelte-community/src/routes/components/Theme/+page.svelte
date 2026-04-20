<script lang="ts">
	import doc from "$lib/components/Theme/Theme.svelte?doc";

	import Doc from "$doclib/Doc.svelte";
	import Story from "$doclib/Story.svelte";
	import { Alert, BodyLong, Box, Button, Heading, Tag, Theme, VStack } from "$lib";
</script>

<Doc {doc}>
	<Story>
		<Theme>
			<Box padding="space-24">
				<Heading level="2" size="medium" spacing>Default theme</Heading>
				<BodyLong spacing>
					Theme provides design tokens and background/foreground colors to its children. By default
					it uses the light theme.
				</BodyLong>
				<Button>Primary button</Button>
			</Box>
		</Theme>
	</Story>

	<Story name="Dark">
		<Theme theme="dark">
			<Box padding="space-24">
				<Heading level="2" size="medium" spacing>Dark theme</Heading>
				<BodyLong spacing>
					Use <code>theme="dark"</code> to render children with the dark theme.
				</BodyLong>
				<Button>Primary button</Button>
			</Box>
		</Theme>
	</Story>

	<Story name="Nested">
		<Theme theme="light">
			<Box padding="space-24">
				<Heading level="2" size="medium" spacing>Light section</Heading>
				<BodyLong spacing>
					You can nest Theme components to mix light and dark sections on the same page.
				</BodyLong>

				<Theme theme="dark" as="section">
					<Box padding="space-24">
						<Heading level="3" size="small" spacing>Dark section</Heading>
						<BodyLong spacing>
							This section uses the dark theme, while the surrounding content stays light.
						</BodyLong>
						<Button>Primary button</Button>
					</Box>
				</Theme>
			</Box>
		</Theme>
	</Story>

	<Story name="Color roles">
		<VStack gap="space-16">
			<Theme data-color="accent">
				<Box padding="space-16">
					<Tag variant="neutral">accent</Tag>
					<Button>Primary</Button>
				</Box>
			</Theme>
			<Theme data-color="success">
				<Box padding="space-16">
					<Tag variant="neutral">success</Tag>
					<Alert variant="success">Success color role</Alert>
				</Box>
			</Theme>
			<Theme data-color="warning">
				<Box padding="space-16">
					<Tag variant="neutral">warning</Tag>
					<Alert variant="warning">Warning color role</Alert>
				</Box>
			</Theme>
			<Theme data-color="danger">
				<Box padding="space-16">
					<Tag variant="neutral">danger</Tag>
					<Alert variant="error">Danger color role</Alert>
				</Box>
			</Theme>
		</VStack>
	</Story>

	<Story name="Without background">
		<Theme theme="dark" hasBackground={false}>
			<Box padding="space-24">
				<BodyLong>
					With <code>hasBackground=&#123;false&#125;</code> the Theme element does not paint its own background.
				</BodyLong>
			</Box>
		</Theme>
	</Story>
</Doc>
