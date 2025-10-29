<script lang="ts">
	import Process from "./Process.svelte";
	import ProcessEvent from "./ProcessEvent.svelte";
	import type { ProcessProps } from "./type";

	interface TestProps extends Omit<ProcessProps, "children"> {
		events: Array<{
			title: string;
			timestamp?: string;
			status?: "active" | "completed" | "uncompleted";
			content?: string;
			bullet?: string;
		}>;
	}

	let { events, ...props }: TestProps = $props();
</script>

<Process {...props}>
	{#each events as event, index (index)}
		{#snippet bulletSnippet()}
			{event.bullet}
		{/snippet}

		<ProcessEvent
			title={event.title}
			timestamp={event.timestamp}
			status={event.status}
			hideContent={!event.content}
			bullet={event.bullet ? bulletSnippet : undefined}
		>
			{#if event.content}
				{event.content}
			{/if}
		</ProcessEvent>
	{/each}
</Process>
