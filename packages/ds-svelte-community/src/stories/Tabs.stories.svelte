<script>
	import { Tab, TabList, TabPanel, Tabs } from "$lib/components/Tabs";
	import { iconPositions, sizes } from "$lib/components/Tabs/type";
	// eslint-disable-next-line
	// @ts-ignore
	import ClockDashedIcon from "$lib/icons/ClockDashedIcon.svelte";
	import EnvelopeOpenIcon from "$lib/icons/EnvelopeOpenIcon.svelte";
	import PaperplaneIcon from "$lib/icons/PaperplaneIcon.svelte";
	import { Meta, Story, Template } from "@storybook/addon-svelte-csf";
	import source from "./examples/Tabs.svelte?raw";

	let active = "log";

	const x2active = "tab0";
	const x2num = 8;
	let x2wide = false;
</script>

<Meta
	title="components/Tabs"
	component={Tabs}
	argTypes={{
		value: {
			control: "text",
			description: "Controlled selected value.",
			type: { name: "string", required: true },
			table: {
				type: { summary: "string" },
			},
		},
		size: {
			control: "select",
			options: sizes,
			description: "Changes padding and font-size.",
			table: {
				type: { summary: sizes.join("|") },
			},
		},
		selectionFollowsFocus: {
			description: "Automatically activates tab on focus/navigation.",
		},
		loop: {
			description: "Loops back to start when navigating past last item.",
		},
		iconPosition: {
			control: "select",
			options: iconPositions,
			description: "Icon position in Tab.",
			table: {
				type: { summary: iconPositions.join("|") },
			},
		},
	}}
/>

<Template let:args>
	<div class="wrapper">
		<Tabs {...args} bind:value={active}>
			<TabList>
				<Tab value="log">Log</Tab>
				<Tab value="inbox">Inbox</Tab>
				<Tab value="sent">Sent</Tab>
			</TabList>

			<TabPanel value="log">
				<div class="examplePanelWrapper examplePanel1">Log content</div>
			</TabPanel>
			<TabPanel value="inbox">
				<div class="examplePanelWrapper examplePanel2">Inbox content</div>
			</TabPanel>
			<TabPanel value="sent">
				<div class="examplePanelWrapper examplePanel3">Sent content</div>
			</TabPanel>
		</Tabs>

		<Tabs bind:value={active}>
			<TabList>
				<Tab value="log">
					<ClockDashedIcon aria-label="Log" slot="icon" />
					Log
				</Tab>
				<Tab value="inbox">
					<EnvelopeOpenIcon aria-label="Inbox" slot="icon" />
					Inbox
				</Tab>
				<Tab value="sent">
					<PaperplaneIcon aria-label="Sent" slot="icon" />
					Sent
				</Tab>
			</TabList>

			<TabPanel value="log">
				<div class="examplePanelWrapper examplePanel1">Log content</div>
			</TabPanel>
			<TabPanel value="inbox">
				<div class="examplePanelWrapper examplePanel2">Inbox content</div>
			</TabPanel>
			<TabPanel value="sent">
				<div class="examplePanelWrapper examplePanel3">Sent content</div>
			</TabPanel>
		</Tabs>

		<Tabs bind:value={active}>
			<TabList>
				<Tab value="log">
					<ClockDashedIcon aria-label="Log" slot="icon" />
				</Tab>
				<Tab value="inbox">
					<EnvelopeOpenIcon aria-label="Inbox" slot="icon" />
				</Tab>
				<Tab value="sent">
					<PaperplaneIcon aria-label="Sent" slot="icon" />
				</Tab>
			</TabList>

			<TabPanel value="log">
				<div class="examplePanelWrapper examplePanel1">Log content</div>
			</TabPanel>
			<TabPanel value="inbox">
				<div class="examplePanelWrapper examplePanel2">Inbox content</div>
			</TabPanel>
			<TabPanel value="sent">
				<div class="examplePanelWrapper examplePanel3">Sent content</div>
			</TabPanel>
		</Tabs>
	</div>
</Template>

<Story name="Default" {source} />

<Story name="Scroll">
	<button
		on:click={() => {
			x2wide = !x2wide;
		}}
	>
		Toggle width {x2wide}
	</button>
	<Tabs value={x2active} style={!x2wide ? "max-width: 300px" : ""}>
		<TabList>
			{#each new Array(x2num).map((_, i) => i) as i}
				<Tab value={`tab${i}`}>Tab{i}</Tab>
			{/each}
		</TabList>

		{#each new Array(x2num).map((_, i) => i) as i}
			<TabPanel value={`tab${i}`}>
				<div class="examplePanelWrapper examplePanel1">Tab {i} content</div>
			</TabPanel>
		{/each}
	</Tabs>
</Story>

<Story name="Selection follows focus ">
	<Tabs value={active} loop={true} selectionFollowsFocus={true}>
		<TabList>
			<Tab value="log">Log</Tab>
			<Tab value="inbox">Inbox</Tab>
			<Tab value="sent">Sent</Tab>
		</TabList>

		<TabPanel value="log">
			<div class="examplePanelWrapper examplePanel1">Log content</div>
		</TabPanel>
		<TabPanel value="inbox">
			<div class="examplePanelWrapper examplePanel2">Inbox content</div>
		</TabPanel>
		<TabPanel value="sent">
			<div class="examplePanelWrapper examplePanel3">Sent content</div>
		</TabPanel>
	</Tabs>
</Story>

<Story name="Icon top">
	<Tabs value={active} iconPosition="top">
		<TabList>
			<Tab value="log">
				<ClockDashedIcon aria-label="Log" slot="icon" />
				Log
			</Tab>
			<Tab value="inbox">
				<EnvelopeOpenIcon aria-label="Inbox" slot="icon" />
				Inbox
			</Tab>
			<Tab value="sent">
				<PaperplaneIcon aria-label="Sent" slot="icon" />
				Sent
			</Tab>
		</TabList>

		<TabPanel value="log">
			<div class="examplePanelWrapper examplePanel1">Log content</div>
		</TabPanel>
		<TabPanel value="inbox">
			<div class="examplePanelWrapper examplePanel2">Inbox content</div>
		</TabPanel>
		<TabPanel value="sent">
			<div class="examplePanelWrapper examplePanel3">Sent content</div>
		</TabPanel>
	</Tabs>
</Story>

<Story name="Small">
	<Tabs value={active} size="small">
		<TabList>
			<Tab value="log">
				<ClockDashedIcon aria-label="Log" slot="icon" />
				Log
			</Tab>
			<Tab value="inbox">
				<EnvelopeOpenIcon aria-label="Inbox" slot="icon" />
				Inbox
			</Tab>
			<Tab value="sent">
				<PaperplaneIcon aria-label="Sent" slot="icon" />
				Sent
			</Tab>
		</TabList>

		<TabPanel value="log">
			<div class="examplePanelWrapper examplePanel1">Log content</div>
		</TabPanel>
		<TabPanel value="inbox">
			<div class="examplePanelWrapper examplePanel2">Inbox content</div>
		</TabPanel>
		<TabPanel value="sent">
			<div class="examplePanelWrapper examplePanel3">Sent content</div>
		</TabPanel>
	</Tabs>
</Story>

<Story name="Tab links">
	<Tabs value={"/page/2"}>
		<TabList>
			<Tab as="a" href="#/page/1" value="/page/1">Page 1</Tab>
			<Tab as="a" href="#/page/1" value="/page/2">Page 2</Tab>
			<Tab as="a" href="#/page/1" value="/page/3">Page 3</Tab>
		</TabList>
	</Tabs>
</Story>

<style>
	.examplePanelWrapper {
		height: 100px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.examplePanel1 {
		background-color: var(--a-gray-50);
	}

	.examplePanel2 {
		background-color: var(--a-green-50);
	}

	.examplePanel3 {
		background-color: var(--a-red-50);
	}

	.wrapper {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
</style>
