<!--
	@component
	Tab is an individual tab in a Tabs component. It should be used inside a TabList component.
-->
<script lang="ts">
	import { onMount } from "svelte";
	import { Focus, focusable, omit } from "../helpers";
	import BodyShort from "../typography/BodyShort/BodyShort.svelte";
	import { getTabsContext, type TabProps } from "./type.svelte";

	let { value, as = "button", children, icon, ...restProps }: TabProps = $props();

	const ctx = getTabsContext();
	let self: HTMLElement | undefined = $state();

	onMount(() => {
		if (!self) {
			throw new Error("Tab element not found");
		}
		ctx.register(self, value);
	});

	const handleKeydown = (e: KeyboardEvent) => {
		let base = 0;
		if (ctx.loop) {
			base |= Focus.Wrap;
		}
		if (e.key === "ArrowLeft") {
			e.preventDefault();
			focusable(ctx.tabs, base | Focus.Previous);
		} else if (e.key === "ArrowRight") {
			e.preventDefault();
			focusable(ctx.tabs, base | Focus.Next);
		} else if (e.key === "Home") {
			// PageUp not defined by
			e.preventDefault();
			focusable(ctx.tabs, base | Focus.First);
		} else if (e.key === "End") {
			e.preventDefault();
			focusable(ctx.tabs, base | Focus.Last);
		}
	};

	const handleFocus = () => {
		if (!self) {
			return;
		}
		ctx.focusOn(self);
		if (as != "a" && ctx.selectionFollowsFocus) {
			ctx.activate(value);
		}
	};

	const handleBlur = () => {
		if (!self) {
			return;
		}
		ctx.blur(self);
	};
</script>

<svelte:element
	this={as}
	bind:this={self}
	{...omit(restProps, "class", "type", "role", "aria-selected", "tabindex")}
	class={[
		restProps.class,
		"aksel-tabs__tab",
		`aksel-tabs__tab--${ctx.size}`,
		`aksel-tabs__tab-icon--${ctx.iconPosition}`,
		{
			"aksel-tabs__tab--icon-only": icon && !children,
			unstyled: as === "a",
		},
	]}
	data-state={ctx.value == value ? "active" : "inactive"}
	type="button"
	role="tab"
	aria-controls={ctx.idFor("panel", value)}
	id={ctx.idFor("tab", value)}
	aria-selected={`${ctx.value == value}`}
	tabindex={self !== undefined && ctx.activeTab == self ? 0 : -1}
	onclick={() => as != "a" && ctx.activate(value)}
	onkeydown={handleKeydown}
	onfocus={handleFocus}
	onblur={handleBlur}
>
	<BodyShort as="span" class="aksel-tabs__tab-inner" size={ctx.size}>
		<span aria-hidden={!!children}>
			{#if icon}
				{@render icon()}
			{/if}
		</span>

		<span>
			{#if children}
				{@render children()}
			{/if}
		</span>
	</BodyShort>
</svelte:element>

<style>
	.unstyled {
		text-decoration: none;
	}
</style>
