<script>
	import { Search } from "$lib/components/Search";
	import SearchButton from "$lib/components/Search/SearchButton.svelte";
	import { sizes, variants } from "$lib/components/Search/type";
	// eslint-disable-next-line
	// @ts-ignore
	import { Meta, Story, Template } from "@storybook/addon-svelte-csf";
	import source from "./examples/Search.svelte?raw";

	let value = "";
</script>

<Meta
	title="components/Search"
	component={Search}
	argTypes={{
		label: {
			control: "text",
			description:
				"Search label.\n\n**Note:** Will be hidden by default, is required for accessibility reasons.",
			type: { name: "string", required: true },
			table: { type: { summary: "string" } },
		},
		hideLabel: {
			control: "boolean",
			description: "Shows label and description for screen readers only.",
		},
		clearButtonLabel: {
			control: "text",
			description: "aria-label on clear button.",
		},
		clearButton: {
			control: "boolean",
			description: "If false, removes clear-button option from input.",
		},
		variant: {
			control: "select",
			options: variants,
			description: 'Changes button-variant, "simple" removes button',
		},
		description: {
			control: "text",
			description: "Adds a description to extend labling of a field.",
		},
		size: {
			control: "select",
			options: sizes,
			description: "Size of input.",
		},
		value: {
			control: "text",
			description: "Value of input.",
		},
		disabled: {
			control: "boolean",
			description:
				"Disables element\n\n**Note:** Avoid using if possible for accessibility purposes",
		},
		loading: {
			control: "boolean",
			description:
				"Loading state.\n\n**Note:** Non-standard. Only available in ds-svelte-community.",
		},
	}}
	args={{
		label: "Search something",
	}}
/>

<Template let:args>
	<form on:submit|preventDefault>
		<Search {...args} bind:value />
	</form>
</Template>

<Story name="Default" {source} />

<Story name="Custom button">
	<Search label="Search">
		<SearchButton variant="secondary" loading={true} />
	</Search>
</Story>

<Story name="Simple loading">
	<Search label="Search" variant="simple" loading />
</Story>
