<script lang="ts">
	import { isSnippet, omit } from "../helpers";
	import { BodyLong } from "../typography";
	import { GetListContext } from "./context";
	import type { ListItemProps } from "./types";

	let { children, icon, title, ...restProps }: ListItemProps = $props();

	const ctx = GetListContext();
</script>

<li {...omit(restProps, "class")} class={[restProps.class, "aksel-list__item"]}>
	{#if ctx && ctx.type === "ul"}
		<div
			class={[
				"aksel-list__item-marker",
				{
					"aksel-list__item-marker--icon": !!icon,
					"aksel-list__item-marker--bullet": !icon,
				},
			]}
		>
			{#if icon}
				{#if isSnippet(icon)}
					{@render icon()}
				{:else}
					{@const Icon = icon}
					<Icon aria-hidden="true" />
				{/if}
			{:else}
				<svg
					viewBox="0 0 6 6"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					aria-hidden="true"
					focusable="false"
					role="img"
				>
					<rect width="6" height="6" rx="3" fill="currentColor" />
				</svg>
			{/if}
		</div>
	{/if}

	<div>
		{#if title}
			{#if typeof title === "string"}
				<BodyLong as="p" size={ctx?.size ?? "medium"} weight="semibold">
					{title}
				</BodyLong>
			{:else}
				{@render title()}
			{/if}
		{/if}
		{@render children()}
	</div>
</li>
