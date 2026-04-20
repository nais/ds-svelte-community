<script lang="ts">
	import doc from "$lib/components/Fieldset/Fieldset.svelte?doc";

	import Doc from "$doclib/Doc.svelte";
	import Story from "$doclib/Story.svelte";
	import { BodyLong, Fieldset, Heading, HStack, Select, Switch, TextField, VStack } from "$lib";
</script>

<Doc {doc}>
	<Story>
		<Fieldset legend="When do you want to retire?">
			<HStack gap="space-16">
				<Select label="Select year">
					<option></option>
					<option>62 years</option>
					<option>63 years</option>
					<option>64 years</option>
					<option>...</option>
				</Select>
				<Select label="Select month">
					<option></option>
					<option>0 mo. (Apr)</option>
					<option>1 mo. (May)</option>
					<option>2 mo. (Jun)</option>
					<option>...</option>
				</Select>
			</HStack>
		</Fieldset>
	</Story>

	<Story name="Phone number">
		<Fieldset legend="Employer's phone number">
			<HStack gap="space-16">
				<Select label="Country code">
					<option></option>
					<option>+45</option>
					<option>+46</option>
					<option>+47</option>
					<option>...</option>
				</Select>
				<TextField label="Number" htmlSize={8} />
			</HStack>
		</Fieldset>
	</Story>

	<Story name="Switch group">
		<Fieldset legend="How would you like to be notified?">
			<div>
				<Switch>Email</Switch>
				<Switch>SMS</Switch>
				<Switch>Push notification in the app</Switch>
				<Switch>Smoke signal</Switch>
			</div>
		</Fieldset>
	</Story>

	<Story name="Address">
		<VStack gap="space-36">
			<Fieldset>
				{#snippet legend()}
					<Heading as="span" size="small">Private address</Heading>
				{/snippet}
				<TextField label="Street" />
				<TextField label="Postal code" htmlSize={8} />
				<TextField label="City" />
				<TextField label="Country" style="max-width: 300px" />
			</Fieldset>

			<Fieldset>
				{#snippet legend()}
					<Heading as="span" size="small">Employer's address</Heading>
				{/snippet}
				<TextField label="Street" />
				<TextField label="Postal code" htmlSize={8} />
				<TextField label="City" />
				<TextField label="Country" style="max-width: 300px" />
			</Fieldset>
		</VStack>
	</Story>

	<Story name="Heading as legend">
		<Fieldset>
			{#snippet legend()}
				<Heading level="2" size="medium">Employer's address</Heading>
			{/snippet}
			<TextField label="Street" />
			<TextField label="Postal code" htmlSize={8} />
			<TextField label="City" />
			<TextField label="Country" style="max-width: 300px" />
		</Fieldset>
	</Story>

	<Story name="Hide legend">
		<Heading size="medium" spacing>Employer's address</Heading>
		<BodyLong spacing>
			Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora sunt commodi corporis
			voluptatibus, maiores laborum, repellat nam labore.
		</BodyLong>
		<Fieldset legend="Employer's address" hideLegend>
			<TextField label="Street" />
			<TextField label="Postal code" htmlSize={8} />
			<TextField label="City" />
			<TextField label="Country" style="max-width: 300px" />
		</Fieldset>
	</Story>

	<Story name="With error">
		<Fieldset legend="When do you want to retire?" error="You must fill in all fields.">
			<HStack gap="space-16">
				<Select label="Select year">
					<option></option>
					<option>62 years</option>
					<option>63 years</option>
					<option>64 years</option>
				</Select>
				<Select label="Select month">
					<option></option>
					<option>0 mo. (Apr)</option>
					<option>1 mo. (May)</option>
					<option>2 mo. (Jun)</option>
				</Select>
			</HStack>
		</Fieldset>
	</Story>

	<Story name="Size small">
		<Fieldset legend="When do you want to retire?" size="small">
			<HStack gap="space-16">
				<Select label="Select year" size="small">
					<option></option>
					<option>62 years</option>
					<option>63 years</option>
				</Select>
				<Select label="Select month" size="small">
					<option></option>
					<option>0 mo. (Apr)</option>
					<option>1 mo. (May)</option>
				</Select>
			</HStack>
		</Fieldset>
	</Story>
</Doc>
