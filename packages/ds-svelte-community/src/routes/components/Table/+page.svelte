<script lang="ts">
	import expandableRowDoc from "$lib/components/Table/ExpandableRow.svelte?doc";
	import doc from "$lib/components/Table/Table.svelte?doc";
	import tbodyDoc from "$lib/components/Table/Tbody.svelte?doc";
	import tdDoc from "$lib/components/Table/Td.svelte?doc";
	import thDoc from "$lib/components/Table/Th.svelte?doc";
	import theadDoc from "$lib/components/Table/Thead.svelte?doc";
	import trDoc from "$lib/components/Table/Tr.svelte?doc";

	import Doc from "$doclib/Doc.svelte";
	import Story from "$doclib/Story.svelte";
	import { ExpandableRow, Table, Tbody, Td, Th, Thead, Tr, type TableSortState } from "$lib";

	const data = [
		{
			name: "Jakobsen, Markus",
			phone: "555 555 5555",
			expiry: "28.04.2021",
		},
		{
			name: "Halvorsen, Mari",
			phone: "555 432 5555",
			expiry: "29.01.2022",
		},
		{
			name: "Christiansen, Mathias",
			phone: "555 123 5555",
			expiry: "04.06.2021",
		},
		{
			name: "Fredriksen, Leah",
			phone: "555 345 1234",
			expiry: "31.08.2021",
		},
		{
			name: "Evensen, Jonas",
			phone: "555 123 4321",
			expiry: "17.07.2021",
		},
	];

	let sortState: TableSortState | undefined = $state(undefined);
	const orderData = () => {
		if (!sortState || sortState === undefined) {
			return data;
		}

		const ss = sortState;

		return [...data].sort((a, b) => {
			if (ss.direction === "ascending") {
				return a[ss.orderBy as keyof typeof a] > b[ss.orderBy as keyof typeof b] ? 1 : -1;
			} else {
				return a[ss.orderBy as keyof typeof a] < b[ss.orderBy as keyof typeof b] ? 1 : -1;
			}
		});
	};

	let orderedData = $state(orderData());
</script>

<Doc
	{doc}
	extraChildrenDoc={[theadDoc, tbodyDoc, trDoc, thDoc, tdDoc, expandableRowDoc]}
	preview={{ width: "90%", extraPaddingBottom: "20px" }}
>
	<Story>
		<Table>
			<Thead>
				<Tr>
					{#each Object.keys(data[0]) as key (key)}
						<Th scope="col">{key[0].toUpperCase() + key.slice(1)}</Th>
					{/each}
				</Tr>
			</Thead>

			<Tbody>
				{#each data as row (row.name)}
					<Tr>
						<Th scope="row">{row.name}</Th>
						<Td>{row.phone}</Td>
						<Td>{row.expiry}</Td>
					</Tr>
				{/each}
			</Tbody>
		</Table>
	</Story>

	<Story name="Sortable">
		<Table
			sort={sortState}
			onsortchange={(key) => {
				if (!sortState) {
					sortState = {
						orderBy: key,
						direction: "ascending",
					};
				} else if (sortState.orderBy === key) {
					if (sortState.direction === "descending") {
						sortState = undefined;
					} else if (sortState.direction === "ascending") {
						sortState.direction = "descending";
					} else {
						sortState.direction = "ascending";
					}
				} else {
					sortState.orderBy = key;
					sortState.direction = "ascending";
				}
				orderedData = orderData();
			}}
		>
			<Thead>
				<Tr>
					{#each Object.keys(data[0]) as key (key)}
						<Th scope="col" sortable={true} sortKey={key}>
							{key[0].toUpperCase() + key.slice(1)}
						</Th>
					{/each}
				</Tr>
			</Thead>

			<Tbody>
				{#each orderedData as row (row.name)}
					<Tr>
						<Th scope="row">{row.name}</Th>
						<Td>{row.phone}</Td>
						<Td>{row.expiry}</Td>
					</Tr>
				{/each}
			</Tbody>
		</Table>
	</Story>

	<Story name="Expandable row">
		<Table>
			<Thead>
				<Tr>
					<Th />
					<Th scope="col">Navn</Th>
					<Th scope="col">Fødselsnr.</Th>
					<Th scope="col">Start</Th>
				</Tr>
			</Thead>
			<Tbody>
				{#each data as { name, phone, expiry } (name)}
					<ExpandableRow expandOnRowClick={true} onopenchange={(open) => console.log(open)}>
						{#snippet content()}
							Content of <code>ExpandableRow</code>
							<br />
							{name}
						{/snippet}
						<Th scope="row">{name}</Th>
						<Td>{phone}</Td>
						<Td>{expiry}</Td>
					</ExpandableRow>
				{/each}
			</Tbody>
		</Table>
	</Story>
</Doc>
