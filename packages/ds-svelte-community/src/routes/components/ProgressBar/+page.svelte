<script lang="ts">
	import doc from "$lib/components/ProgressBar/ProgressBar.svelte?doc";

	import Doc from "$doclib/Doc.svelte";
	import Story from "$doclib/Story.svelte";
	import { ProgressBar } from "$lib";

	let value = $state(50);
	let isLoading = $state(false);

	function startLoading() {
		isLoading = true;
	}

	function handleTimeout() {
		console.log("Loading is taking longer than expected!");
		isLoading = false;
	}
</script>

<Doc {doc} preview={{ width: "400px" }}>
	<Story name="Default">
		<ProgressBar {value} aria-label="Progress" />
	</Story>

	<Story name="With value and max">
		<div class="space-y-4">
			<label>
				Progress: {value} / 100
				<input type="range" bind:value min="0" max="100" class="w-full" />
			</label>
			<ProgressBar {value} valueMax={100} aria-label="Upload progress" />
		</div>
	</Story>

	<Story name="Step indicator">
		<ProgressBar value={3} valueMax={7} aria-label="Step 3 of 7" />
	</Story>

	<Story name="Sizes">
		<div class="space-y-4">
			<div>
				<p class="mb-2">Small:</p>
				<ProgressBar value={40} size="small" aria-label="Small progress" />
			</div>
			<div>
				<p class="mb-2">Medium (default):</p>
				<ProgressBar value={60} size="medium" aria-label="Medium progress" />
			</div>
			<div>
				<p class="mb-2">Large:</p>
				<ProgressBar value={80} size="large" aria-label="Large progress" />
			</div>
		</div>
	</Story>

	<Story name="Simulated loading">
		<div class="space-y-4">
			{#if !isLoading}
				<button onclick={startLoading} class="aksel-button aksel-button--primary">
					Start Loading
				</button>
			{:else}
				<ProgressBar
					simulated={{ seconds: 30, onTimeout: handleTimeout }}
					aria-label="Loading content"
				/>
				<p class="text-sm">Simulated loading with 30 second estimate...</p>
			{/if}
		</div>
	</Story>
</Doc>

<style>
	.space-y-4 > * + * {
		margin-top: 1rem;
	}
</style>
