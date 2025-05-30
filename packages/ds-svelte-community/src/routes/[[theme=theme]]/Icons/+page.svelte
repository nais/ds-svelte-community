<script lang="ts">
	import Highlight from "$doclib/Highlight.svelte";
	import Button from "$lib/components/Button/Button.svelte";
	import CopyButton from "$lib/components/CopyButton/CopyButton.svelte";
	import Search from "$lib/components/Search/Search.svelte";
	import ToggleGroup from "$lib/components/ToggleGroup/ToggleGroup.svelte";
	import ToggleGroupItem from "$lib/components/ToggleGroup/ToggleGroupItem.svelte";
	import Heading from "$lib/components/typography/Heading/Heading.svelte";
	import * as icons from "$lib/icons";
	import type { Component } from "svelte";
	import type { PageData } from "./$types";

	let { data }: { data: PageData } = $props();
	let { filled, stroked } = data;

	let variant = $state("stroked");

	const getIcon = (name: string) => icons[(name + "Icon") as never] as Component;

	let size = $state(2);
	let search = $state("");
	let active = $state("");
	let iconDataSet = $derived(variant == "filled" ? filled : stroked);

	let iconData = $derived.by(() => {
		if (search === "") {
			return iconDataSet.filter((i) => !!i.name);
		}

		return iconDataSet.filter((icon) => {
			if (!icon.name) {
				return false;
			}

			if (icon.name.toLowerCase().includes(search.toLowerCase())) {
				return true;
			}

			if (icon.category.toLowerCase().includes(search.toLowerCase())) {
				return true;
			}

			if (icon.keywords.some((keyword) => keyword.toLowerCase().includes(search.toLowerCase()))) {
				return true;
			}

			return false;
		});
	});

	let activeImport = $derived(`import { ${active}Icon } from "@nais/ds-svelte-community/icons";`);
	let activeUsage = $derived(`<${active}Icon title="a11y-title" style="font-size: 1.5rem" />`);

	let PreviewIcon = $derived(getIcon(active));
</script>

<svelte:head>
	<title>Icons &bullet; ds-svelte-community</title>
</svelte:head>

<div class="controls">
	<ToggleGroup bind:value={variant} variant="neutral">
		<ToggleGroupItem value="stroked">Stroke</ToggleGroupItem>
		<ToggleGroupItem value="filled">Fill</ToggleGroupItem>
	</ToggleGroup>

	<div class="search">
		<Search label="Icon detail" variant="simple" bind:value={search}></Search>
	</div>

	<div class="size">
		<input type="range" min="1" max="8" step="0.5" bind:value={size} /><br />
		<span>{size}rem</span>
	</div>
</div>

<div class="wrapper">
	<div class="grid" style="--size: {size}rem">
		{#each iconData as icon (icon.name)}
			{@const Icon = getIcon(icon.name)}
			<button
				class="icon"
				class:active={active == icon.name}
				onclick={() => {
					active = icon.name;
				}}
			>
				<div class="details">
					<span>{icon.name}</span>
					<span>{icon.category}</span>
				</div>
				{#if Icon}
					<Icon style="width: {size}rem; height: {size}rem" />
				{:else}
					<span>{icon.name} failed</span>
				{/if}
			</button>
		{/each}
	</div>

	<div class="sidebar" class:visible={active != ""}>
		<div class="preview">
			{#if PreviewIcon}
				<PreviewIcon style="width: 100%; height: 100%" />
			{/if}
		</div>
		<Heading level="2">{active}</Heading>

		<Heading level="3">
			<div class="column">
				Import <CopyButton copyText={activeImport} size="xsmall">Copy</CopyButton>
			</div>
		</Heading>
		<Highlight lang="ts" code={activeImport} />

		<Heading level="3">
			<div class="column">
				Usage <CopyButton copyText={activeUsage} size="xsmall">Copy</CopyButton>
			</div>
		</Heading>
		<Highlight lang="ts" code={activeUsage} />

		<Button variant="secondary" onclick={() => (active = "")}>Close</Button>
	</div>
</div>

<style>
	.icon {
		background: var(--ax-bg-meta-purple-soft);
		border-radius: var(--ax-border-radius-medium);
		aspect-ratio: 1;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 0.5rem;
		border: none;

		&:hover {
			cursor: pointer;
			outline: 2px solid var(--a-border-default);
		}

		&.active {
			filter: invert(1);
		}
	}

	.controls {
		display: flex;
		gap: 1rem;
		margin: 1rem 0;
		align-items: center;
	}

	.search {
		flex: 1;
	}

	.details {
		display: none;
	}

	.size {
		width: 200px;
		min-width: 200px;
		max-width: 200px;
		text-align: center;
	}

	.grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(calc(var(--size) + 1rem), 1fr));
		gap: 1rem;
		flex: 1;
		place-items: center;
		align-content: start;
	}

	.wrapper {
		display: flex;
	}

	.sidebar {
		width: 400px;
		padding: 1rem;
		display: none;
		&.visible {
			display: block;
		}
	}
	.preview {
		width: 50%;
		margin: 0 auto;
	}

	.column {
		display: flex;
		gap: 0.5rem;
	}
</style>
