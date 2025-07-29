<script lang="ts" module>
	export const experimental = true;
</script>

<script lang="ts">
	import doc from "$lib/components/InternalHeader/InternalHeader.svelte?doc";
	import buttonDoc from "$lib/components/InternalHeader/InternalHeaderButton.svelte?doc";
	import titleDoc from "$lib/components/InternalHeader/InternalHeaderTitle.svelte?doc";
	import userDoc from "$lib/components/InternalHeader/InternalHeaderUser.svelte?doc";
	import userButtonDoc from "$lib/components/InternalHeader/InternalHeaderUserButton.svelte?doc";

	import Doc from "$doclib/Doc.svelte";
	import Story from "$doclib/Story.svelte";
	import { Search, Spacer } from "$lib";
	import {
		ActionMenu,
		ActionMenuDivider,
		ActionMenuGroup,
		ActionMenuItem,
		InternalHeader,
		InternalHeaderButton,
		InternalHeaderTitle,
		InternalHeaderUser,
		InternalHeaderUserButton,
	} from "$lib/experimental";
	import {
		BarChartIcon,
		HandshakeIcon,
		MagnifyingGlassIcon,
		MenuGridIcon,
		PersonGroupIcon,
		PersonIcon,
	} from "$lib/icons";
</script>

<Doc
	{doc}
	preview={{ width: "80%" }}
	extraChildrenDoc={[buttonDoc, titleDoc, userDoc, userButtonDoc]}
>
	<Story>
		<InternalHeader>
			<InternalHeaderTitle as="h1">My application</InternalHeaderTitle>
			<Spacer />
			<InternalHeaderUser name="Ola Normann" />
		</InternalHeader>
	</Story>

	<Story name="Home link">
		<InternalHeader>
			<InternalHeaderTitle href="#Home">My application</InternalHeaderTitle>
			<Spacer />
			<InternalHeaderUser name="Ola Normann" />
		</InternalHeader>
	</Story>

	<Story name="User description">
		<InternalHeader>
			<InternalHeaderTitle as="h1">My application</InternalHeaderTitle>
			<Spacer />
			<InternalHeaderUser name="Ola Normann" description="D123456" />
		</InternalHeader>
	</Story>

	<Story name="App selector">
		<InternalHeader>
			<InternalHeaderTitle as="h1">My application</InternalHeaderTitle>
			<Spacer />
			<ActionMenu>
				{#snippet trigger(props)}
					<InternalHeaderButton {...props}>
						<MenuGridIcon title="Applications" />
					</InternalHeaderButton>
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
			<InternalHeaderUser name="Ola Normann" description="D123456" />
		</InternalHeader>
	</Story>

	<Story name="User menu">
		<InternalHeader>
			<InternalHeaderTitle as="h1">My application</InternalHeaderTitle>
			<Spacer />
			<ActionMenu>
				{#snippet trigger(props)}
					<InternalHeaderUserButton name="Ola N." description="Enhet: Skien" {...props} />
				{/snippet}

				<ActionMenuGroup label="Systems">
					<ActionMenuItem>Aivenator</ActionMenuItem>
					<ActionMenuItem>Fasit</ActionMenuItem>
					<ActionMenuItem>Naiserator</ActionMenuItem>
				</ActionMenuGroup>
			</ActionMenu>
		</InternalHeader>
	</Story>

	<Story name="Search">
		<InternalHeader>
			<InternalHeaderTitle as="h1">My application</InternalHeaderTitle>
			<form
				class="self-center px-5"
				onsubmit={(e) => {
					e.preventDefault();
					console.info("Search!");
				}}
			>
				<Search label="InternalHeader search" size="small" variant="simple" placeholder="Search" />
			</form>
			<Spacer />
			<InternalHeaderUser name="Ola Normann" description="D123456" />
		</InternalHeader>
	</Story>

	<Story name="Menu links">
		<InternalHeader>
			<InternalHeaderTitle as="h1">My application</InternalHeaderTitle>
			<InternalHeaderButton as="a" href="../Button">Button</InternalHeaderButton>
			<InternalHeaderButton as="a" href="../Checkbox">Checkbox</InternalHeaderButton>
			<Spacer />
			<InternalHeaderButton as="a" href="../Switch">Switch</InternalHeaderButton>
			<InternalHeaderButton as="a" href="../Table">Table</InternalHeaderButton>
		</InternalHeader>
	</Story>
</Doc>
