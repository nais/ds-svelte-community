<script lang="ts">
	import ClockDashed from "$lib/icons/ClockDashed.svelte";
	import EnvelopeOpen from "$lib/icons/EnvelopeOpen.svelte";
	import Paperplane from "$lib/icons/Paperplane.svelte";

	import Tab from "$lib/components/Tabs/Tab.svelte";
	import TabList from "$lib/components/Tabs/TabList.svelte";
	import TabPanel from "$lib/components/Tabs/TabPanel.svelte";
	import Tabs from "$lib/components/Tabs/Tabs.svelte";

	export let active = "inbox";
</script>

<Tabs bind:value={active}>
	<TabList>
		<Tab value="log">
			<ClockDashed aria-label="Log" slot="icon" />
			Log
		</Tab>
		<Tab value="inbox">
			<EnvelopeOpen aria-label="Inbox" slot="icon" />
			Inbox
		</Tab>
		<Tab value="sent">
			<Paperplane aria-label="Sent" slot="icon" />
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
