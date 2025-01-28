<script lang="ts" module>
	export const experimental = true;
</script>

<script lang="ts">
	import doc from "$lib/components/ActionMenu/ActionMenu.svelte?doc";
	import docActionMenuCheckboxItem from "$lib/components/ActionMenu/ActionMenuCheckboxItem.svelte?doc";
	import docActionMenuDivider from "$lib/components/ActionMenu/ActionMenuDivider.svelte?doc";
	import docActionMenuGroup from "$lib/components/ActionMenu/ActionMenuGroup.svelte?doc";
	import docActionMenuItem from "$lib/components/ActionMenu/ActionMenuItem.svelte?doc";
	import docActionMenuRadioGroup from "$lib/components/ActionMenu/ActionMenuRadioGroup.svelte?doc";
	import docActionMenuRadioItem from "$lib/components/ActionMenu/ActionMenuRadioItem.svelte?doc";
	import docActionMenuSub from "$lib/components/ActionMenu/ActionMenuSub.svelte?doc";

	import Doc from "$doclib/Doc.svelte";
	import Story from "$doclib/Story.svelte";
	import { Alert, Button, Table, Tbody, Td, Th, Thead, Tr } from "$lib";
	import {
		ActionMenu,
		ActionMenuCheckboxItem,
		ActionMenuDivider,
		ActionMenuGroup,
		ActionMenuItem,
		ActionMenuRadioGroup,
		ActionMenuRadioItem,
		ActionMenuSub,
	} from "$lib/experimental";

	import {
		BarChartIcon,
		ChevronDownIcon,
		HandshakeIcon,
		MagnifyingGlassIcon,
		MenuElipsisVerticalIcon,
		PersonGroupIcon,
		PersonIcon,
	} from "$lib/icons";

	const data = [
		{
			id: "03121",
			status: "Declined",
		},
		{
			id: "16066",
			status: "Received",
		},
		{
			id: "18124",
			status: "Accepted",
		},
		{
			id: "24082",
			status: "Received",
		},
	];

	let views = $state({
		started: true,
		fnr: false,
		tags: true,
	});
	let rows = $state(25);

	const handleCheckboxChange = (checkboxId: string, checked: boolean) => {
		console.log(checkboxId, checked);
	};
	const handleRadioButtonChange = (value: unknown) => {
		console.log(value);
	};
</script>

<Doc
	{doc}
	extraChildrenDoc={[
		docActionMenuCheckboxItem,
		docActionMenuDivider,
		docActionMenuGroup,
		docActionMenuItem,
		docActionMenuRadioGroup,
		docActionMenuRadioItem,
		docActionMenuSub,
	]}
>
	{#snippet extraDescription()}
		<Alert variant="warning">
			This component only includes the CSS from the React ActionMenu component and not a migration
			of the logic. It is implemented using a CSS draft specification, which is currently only
			<a href="https://caniuse.com/css-anchor-positioning">
				supported in Chrome and Chromium-based browsers.
			</a>
		</Alert><br />
		<Alert variant="warning">Keyboard interaction is missing.</Alert>
	{/snippet}

	<Story>
		<ActionMenu trigger="Wide menu button">
			<ActionMenuGroup label="Systems">
				<ActionMenuItem>Aivenator</ActionMenuItem>
				<ActionMenuItem>Fasit</ActionMenuItem>
				<ActionMenuItem>Naiserator</ActionMenuItem>
			</ActionMenuGroup>
		</ActionMenu>
	</Story>

	<Story name="Groups">
		<ActionMenu>
			{#snippet trigger(props)}
				<Button variant="secondary-neutral" iconPosition="right" {...props}>
					{#snippet icon()}
						<ChevronDownIcon aria-hidden="true" />
					{/snippet}
					Click me
				</Button>
			{/snippet}
			<ActionMenuGroup label="navikt">
				<ActionMenuItem icon={HandshakeIcon}>mock-oauth2-server</ActionMenuItem>
				<ActionMenuItem icon={PersonIcon}>aksel</ActionMenuItem>
				<ActionMenuItem icon={PersonGroupIcon}>DSF</ActionMenuItem>
				<ActionMenuItem icon={BarChartIcon}>offentlig</ActionMenuItem>
				<ActionMenuItem icon={MagnifyingGlassIcon}>github-app-token-generator</ActionMenuItem>
			</ActionMenuGroup>
			<ActionMenuDivider />
			<ActionMenuGroup label="nais">
				<ActionMenuItem>doc</ActionMenuItem>
				<ActionMenuItem>naiserator</ActionMenuItem>
				<ActionMenuItem>wonderwall</ActionMenuItem>
			</ActionMenuGroup>
		</ActionMenu>
	</Story>

	<Story name="Shortcuts">
		<ActionMenu>
			{#snippet trigger(props)}
				<Button variant="secondary-neutral" iconPosition="right" {...props}>
					{#snippet icon()}
						<ChevronDownIcon aria-hidden="true" />
					{/snippet}
					Click me
				</Button>
			{/snippet}
			<ActionMenuGroup label="navikt">
				<ActionMenuItem shortcut="Ctrl+A">mock-oauth2-server</ActionMenuItem>
				<ActionMenuItem shortcut="Ctrl+K">aksel</ActionMenuItem>
				<ActionMenuItem shortcut="Ctrl+S">DSF</ActionMenuItem>
				<ActionMenuItem shortcut="Ctrl+E">offentlig</ActionMenuItem>
				<ActionMenuItem shortcut="Ctrl+L">github-app-token-generator</ActionMenuItem>
			</ActionMenuGroup>
			<ActionMenuDivider />
			<ActionMenuGroup label="nais">
				<ActionMenuItem>doc</ActionMenuItem>
				<ActionMenuItem>naiserator</ActionMenuItem>
				<ActionMenuItem>wonderwall</ActionMenuItem>
			</ActionMenuGroup>
		</ActionMenu>
	</Story>

	<Story name="Submenu">
		<Table>
			<Thead>
				<Tr>
					<Th scope="col">ID</Th>
					<Th scope="col">Status</Th>
					<Th />
				</Tr>
			</Thead>
			<Tbody>
				{#each data as { id, status }}
					<Tr shadeOnHover={false}>
						<Th scope="row">{id}</Th>
						<Td>{status}</Td>
						<Td align="right">
							<ActionMenu align="end">
								{#snippet trigger(props)}
									<Button variant="tertiary-neutral" size="small" {...props}>
										{#snippet icon()}
											<MenuElipsisVerticalIcon title="Case menu" />
										{/snippet}
									</Button>
								{/snippet}
								<ActionMenuGroup label={`Case #${id}`}>
									<ActionMenuItem onSelect={console.info}>Assign case</ActionMenuItem>
									<ActionMenuSub trigger="Change status">
										<ActionMenuItem onSelect={console.info}>Declined</ActionMenuItem>
										<ActionMenuItem onSelect={console.info}>Accepted</ActionMenuItem>
										<ActionMenuSub trigger="Other choices">
											<ActionMenuItem onSelect={console.info}>For approval</ActionMenuItem>
											<ActionMenuItem onSelect={console.info}>In progress</ActionMenuItem>
											<ActionMenuItem onSelect={console.info}>Under control</ActionMenuItem>
										</ActionMenuSub>
									</ActionMenuSub>
									<ActionMenuSub trigger="Assign to">
										<ActionMenuGroup label="Case managers">
											<ActionMenuItem onSelect={console.info}>Ola Normann</ActionMenuItem>
											<ActionMenuItem onSelect={console.info}>Bo Ramberg</ActionMenuItem>
											<ActionMenuItem onSelect={console.info} disabled>Ole Olsen</ActionMenuItem>
											<ActionMenuItem onSelect={console.info} disabled>
												Janne Nilssen
											</ActionMenuItem>
											<ActionMenuItem onSelect={console.info}>Karin Jakobsen</ActionMenuItem>
											<ActionMenuItem onSelect={console.info}>Kari Nordmann</ActionMenuItem>
										</ActionMenuGroup>
									</ActionMenuSub>

									<ActionMenuDivider />

									<ActionMenuItem variant="danger" onSelect={console.info}>
										Delete case
									</ActionMenuItem>
								</ActionMenuGroup>
							</ActionMenu>
						</Td>
					</Tr>
				{/each}
			</Tbody>
		</Table>
	</Story>

	<Story name="Filter" locked>
		<div>
			<ActionMenu>
				{#snippet trigger(props)}
					<Button
						variant="secondary-neutral"
						icon={ChevronDownIcon}
						iconPosition="right"
						{...props}
					>
						Filter
					</Button>
				{/snippet}
				<ActionMenuGroup label="Columns">
					<ActionMenuCheckboxItem
						checked={Object.values(views).every(Boolean)
							? true
							: Object.values(views).some(Boolean)
								? "indeterminate"
								: false}
					>
						Select all
					</ActionMenuCheckboxItem>
					<ActionMenuCheckboxItem
						bind:checked={views.started}
						onchange={(checked) => handleCheckboxChange("started", checked)}
					>
						Follow-up started
					</ActionMenuCheckboxItem>
					<ActionMenuCheckboxItem
						bind:checked={views.fnr}
						onchange={(checked) => handleCheckboxChange("fnr", checked)}
					>
						Identity number
					</ActionMenuCheckboxItem>
					<ActionMenuCheckboxItem
						bind:checked={views.tags}
						onchange={(checked) => {
							handleCheckboxChange("tags", checked);
						}}
					>
						Tags
					</ActionMenuCheckboxItem>
				</ActionMenuGroup>
				<ActionMenuDivider />
				<ActionMenuRadioGroup bind:value={rows} label="Rows per page">
					<ActionMenuRadioItem value="5" onselect={(value) => handleRadioButtonChange(value)}
						>5</ActionMenuRadioItem
					>
					<ActionMenuRadioItem value="10" onselect={(value) => handleRadioButtonChange(value)}
						>10</ActionMenuRadioItem
					>
					<ActionMenuRadioItem value="25" onselect={(value) => handleRadioButtonChange(value)}
						>25</ActionMenuRadioItem
					>
					<ActionMenuRadioItem value="50" onselect={(value) => handleRadioButtonChange(value)}
						>50</ActionMenuRadioItem
					>
				</ActionMenuRadioGroup>
			</ActionMenu>

			<pre>{JSON.stringify({ rows, views }, undefined, "  ")}</pre>
		</div>
	</Story>
</Doc>
