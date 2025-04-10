<script lang="ts">
	import Radio from "./Radio.svelte";
	import RadioGroup from "./RadioGroup.svelte";

	let {
		size,
		value,
		legend,
		description,
	}: { size: "small" | "medium"; value: string; legend: string; description: string } = $props();
</script>

<RadioGroup {legend} {size} {value} {description}>
	<Radio value="0">0-10 years</Radio>
	<Radio value="10">10-20 years</Radio>
</RadioGroup>
