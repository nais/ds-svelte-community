<script lang="ts" module>
	export const experimental = true;
</script>

<script lang="ts">
	import ChevronDownIcon from "$lib/icons/ChevronDownIcon.svelte";
	import type { HTMLAttributes } from "svelte/elements";
	import { omit } from "../helpers";
	import { Detail } from "../typography";
	import BodyShort from "../typography/BodyShort/BodyShort.svelte";
	import InternalHeaderButton from "./InternalHeaderButton.svelte";

	interface Props extends HTMLAttributes<HTMLDivElement> {
		name: string;
		description?: string;
	}

	let { name, description, ...restProps }: Props = $props();
</script>

<InternalHeaderButton
	{...omit(restProps, "class")}
	class={[restProps.class, "aksel-internalheader__user-button"]}
>
	<div>
		<BodyShort size="small" as="div">
			{name}
		</BodyShort>
		{#if description}
			<Detail as="div">{description}</Detail>
		{/if}
	</div>
	<ChevronDownIcon aria-hidden />
</InternalHeaderButton>
