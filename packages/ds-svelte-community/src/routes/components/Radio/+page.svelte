<script lang="ts">
	import doc from "$lib/components/Radio/RadioGroup.svelte?doc";

	import Doc from "$doclib/Doc.svelte";
	import Story from "$doclib/Story.svelte";
	import { RadioGroup } from "$lib";
	import Radio from "$lib/components/Radio/Radio.svelte";

	let value = "10";
</script>

<Doc
	{doc}
	preview={{
		width: "400px",
	}}
>
	<Story>
		<RadioGroup legend="Choose your experience" bind:value>
			<Radio value="0">0-10 years</Radio>
			<Radio value="10">10-20 years</Radio>
			<Radio value="21">21-45 years</Radio>
			<Radio value="46">45+ years</Radio>
		</RadioGroup>
	</Story>

	<Story name="Description">
		<RadioGroup
			legend="Choose your experience"
			description="Select your professional experience level in this field."
			bind:value
		>
			<Radio value="0">0-10 years</Radio>
			<Radio value="10">10-20 years</Radio>
			<Radio value="21">21-45 years</Radio>
			<Radio value="46">45+ years</Radio>
		</RadioGroup>
	</Story>
</Doc>
