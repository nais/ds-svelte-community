<script lang="ts" module>
	export const experimental = true;
</script>

<script lang="ts">
	import type { Snippet } from "svelte";
	import type { HTMLAttributes } from "svelte/elements";
	import { omit } from "../helpers";
	import { Detail } from "../typography";
	import BodyShort from "../typography/BodyShort/BodyShort.svelte";

	interface Props extends HTMLAttributes<HTMLDivElement> {
		name: string | Snippet;
		description?: string | Snippet;
	}

	let { name, description, ...restProps }: Props = $props();
</script>

<div {...omit(restProps, "class")} class={[restProps.class, "aksel-internalheader__user"]}>
	<div>
		<BodyShort size="small" as="div">
			{#if typeof name === "string"}
				{name}
			{:else}
				{@render name()}
			{/if}
		</BodyShort>
		{#if description}
			<Detail as="div">
				{#if typeof description === "string"}
					{description}
				{:else}
					{@render description()}
				{/if}
			</Detail>
		{/if}
	</div>
</div>
