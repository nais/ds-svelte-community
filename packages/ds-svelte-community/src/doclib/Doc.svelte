<script lang="ts">
	import { page } from "$app/stores";
	import { Chips, ToggleChip } from "$lib";
	import Alert from "$lib/components/Alert/Alert.svelte";
	import Box from "$lib/components/primitives/Box/Box.svelte";
	import Tag from "$lib/components/Tag/Tag.svelte";
	import Heading from "$lib/components/typography/Heading/Heading.svelte";
	import type { Doc } from "@nais/vite-plugin-svelte-docs";
	import { type Snippet } from "svelte";
	import { SvelteMap } from "svelte/reactivity";
	import Markdown from "./Markdown.svelte";
	import Properties from "./Properties.svelte";
	import Renderer, { type ComponentOptions } from "./Renderer.svelte";
	import type { StorySnippet } from "./Story.svelte";

	type Story = {
		name: string;
		source: string;
		snippet: StorySnippet;
		locked: boolean;
		lockedProps: string[];
		props: { key: string; value: string }[];
	};

	let {
		doc,
		extraChildrenDoc = [],
		stories,
		preview,
		customTitle,
		extraDescription,
	}: {
		doc: Doc;
		customTitle?: string;
		extraChildrenDoc?: Doc[];
		children?: Snippet;
		componentOptions?: ComponentOptions;
		preview?: { width?: string; extraPaddingBottom?: string };
		stories?: Story[];
		extraDescription?: Snippet;
	} = $props();

	let tab = $derived($page.url.searchParams.get("tab") || "Default");

	const story = $derived(stories?.find((s) => s.name === tab));
	const storyProps = () => {
		const ret: SvelteMap<string, unknown> = new SvelteMap();
		story?.props.forEach((p) => {
			ret.set(p.key, p.value);
		});
		return ret;
	};

	let values: SvelteMap<string, unknown> = new SvelteMap();
</script>

<svelte:head>
	<title>{customTitle ?? doc.name} &bullet; ds-svelte-community</title>
</svelte:head>

<Box as="header" paddingBlock="4 2">
	<Heading level="1" size="large">{customTitle ?? doc.name}</Heading>
</Box>

<Markdown content={doc.description} />

{#if extraDescription}
	<div class="extra">
		{@render extraDescription()}
	</div>
{/if}

<div class="menu">
	<Chips>
		{#each stories || [] as { name } (name)}
			<ToggleChip
				as="a"
				variant="action"
				checkmark={false}
				data-sveltekit-replacestate
				value={name}
				selected={name === tab}
				href={name == "Default" ? `./` : `./?tab=${name}`}
			>
				{name}
			</ToggleChip>
		{/each}
	</Chips>
</div>

{#if !story}
	<Alert variant="warning">No story found for tab "{tab}"</Alert>
{:else}
	<Renderer children={story.snippet} source={atob(story.source)} {values} {preview} />
{/if}

{#snippet experimental(experimental: boolean | undefined)}
	{#if experimental}
		<Tag variant="alt1" size="xsmall">Beta</Tag>
	{/if}
{/snippet}

<Heading level="2">
	Properties
	{#if extraChildrenDoc.length == 0}
		{@render experimental(doc.experimental)}
	{/if}
</Heading>

{#if extraChildrenDoc.length > 0}
	<Box paddingBlock="4 0">
		<Heading level="3" size="small">{doc.name} {@render experimental(doc.experimental)}</Heading>
	</Box>
{/if}

{#key tab}
	{#if !story || story.locked}
		<Properties {doc} />
	{:else}
		<Properties {doc} bind:values />
	{/if}
{/key}

{#each extraChildrenDoc as doc (doc.name)}
	<Box paddingBlock="4 0">
		<Heading level="3" size="small">{doc.name} {@render experimental(doc.experimental)}</Heading>
	</Box>
	{#if doc.description}
		<Markdown content={doc.description} />
	{/if}
	<Properties {doc} />
{/each}

<style>
	.menu {
		margin-bottom: 0.5rem;
	}

	.extra {
		margin-bottom: 1rem;
	}
</style>
