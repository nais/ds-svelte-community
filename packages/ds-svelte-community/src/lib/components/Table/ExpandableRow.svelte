<!--
@component

Create an expandable row in a table. `content` will be shown when the row is expanded.
-->

<script lang="ts">
	import ChevronDownIcon from "$lib/icons/ChevronDownIcon.svelte";
	import { slide } from "svelte/transition";
	import { omit } from "../helpers";
	import Td from "./Td.svelte";
	import Tr from "./Tr.svelte";
	import type { TableExpandableRowProps } from "./type.svelte";

	let {
		open = $bindable(false),
		children,
		content,
		togglePlacement = "left",
		onopenchange,
		expansionDisabled = false,
		expandOnRowClick = false,
		colSpan = 999,
		contentGutter,
		showLessText,
		showMoreText,
		...restProps
	}: TableExpandableRowProps = $props();

	const uid = $props.id();
	const id = `erow-${uid}`;

	function isInteractiveTarget(elm: HTMLElement) {
		if (elm.nodeName === "TD" || elm.nodeName === "TH" || !elm.parentElement) {
			return false;
		}
		if (["BUTTON", "DETAILS", "LABEL", "SELECT", "TEXTAREA", "INPUT", "A"].includes(elm.nodeName)) {
			return true;
		}

		return isInteractiveTarget(elm.parentElement);
	}

	function toggleOpen(event: MouseEvent) {
		open = !open;
		onopenchange?.(open);
		event.stopPropagation();
	}

	function onclickMainRow(
		event: MouseEvent & { currentTarget: EventTarget & HTMLTableRowElement },
	) {
		if (
			expandOnRowClick &&
			!expansionDisabled &&
			!isInteractiveTarget(event.target as HTMLElement)
		) {
			toggleOpen(event);
		} else {
			restProps.onclick?.(event);
		}
	}
</script>

<Tr
	class={[
		restProps.class,
		"aksel-table__expandable-row",
		{
			"aksel-table__expandable-row--open": open,
			"aksel-table__expandable-row--expansion-disabled": expansionDisabled,
			"aksel-table__expandable-row--clickable": expandOnRowClick,
		},
	]}
	{...omit(restProps, "class")}
	onclick={onclickMainRow}
>
	{#if togglePlacement == "right"}
		{@render children()}
	{/if}
	<Td
		class={[
			"aksel-table__toggle-expand-cell",
			{
				"aksel-table__toggle-expand-cell--open": open,
			},
		]}
	>
		{#if !expansionDisabled}
			<button
				class="aksel-table__toggle-expand-button"
				type="button"
				aria-controls={id}
				aria-expanded={open}
				onclick={toggleOpen}
			>
				<ChevronDownIcon
					class="aksel-table__expandable-icon"
					title={open ? showLessText : showMoreText}
				/>
			</button>
		{/if}
	</Td>
	{#if togglePlacement == "left"}
		{@render children()}
	{/if}
</Tr>

<tr
	data-state={open ? "open" : "closed"}
	class="aksel-table__expanded-row"
	aria-hidden={!open}
	{id}
>
	<td colspan={colSpan} class="aksel-table__expanded-row-cell">
		{#if open}
			<div
				class="aksel-table__expanded-row-collapse"
				transition:slide={{
					duration: 150,
				}}
			>
				<div
					class={[
						"aksel-table__expanded-row-content",
						`aksel-table__expanded-row-content--gutter-${contentGutter ?? togglePlacement}`,
					]}
				>
					{#if typeof content === "string"}
						{content}
					{:else}
						{@render content()}
					{/if}
				</div>
			</div>
		{/if}
	</td>
</tr>
