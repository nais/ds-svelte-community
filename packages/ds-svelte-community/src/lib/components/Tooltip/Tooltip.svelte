<!--
@component
A tooltip is a small box with text that is activated on focus or hover. The tooltip summarizes the content or use.

Read more about this component in the [Aksel documentation](https://aksel.nav.no/komponenter/core/tooltip).
-->
<script lang="ts" module>
	import { flip as flipMW, offset as offsetMW, shift as shiftMW } from "svelte-floating-ui/dom";
</script>

<script lang="ts">
	import { Detail } from "$lib";
	import { createArrowRef, createFloatingActions, arrow as svelteArrow } from "svelte-floating-ui";
	import type { TooltipProps } from "./type";

	let {
		content,
		defaultOpen = false,
		open = $bindable(defaultOpen),
		onOpenChange,
		placement = "top",
		arrow: _arrow = true,
		offset,
		maxChar = 80,
		delay = 150,
		keys,
		describesChild = false,
		id: idProp,
		shortcutSeparator = "or",
		children,
		class: klass,
	}: TooltipProps = $props();

	const generatedId = $props.id();

	function isNestedKeys(k: TooltipProps["keys"]): k is [string[], string[]] {
		return Array.isArray(k) && k.length > 0 && Array.isArray(k[0]);
	}

	const hasKeys = $derived(keys && keys.length > 0);

	const tooltipId = $derived(idProp ?? `tooltip-${generatedId}`);

	// Floating UI setup
	const arrowRef = createArrowRef();

	let arrowX = $state<number | undefined>(undefined);
	let arrowY = $state<number | undefined>(undefined);
	let actualPlacement = $derived(placement);
	let computedPlacement = $state<string | undefined>(undefined);

	const [floatingRef, floatingContent, update] = createFloatingActions({
		autoUpdate: true,
		onComputed(computed) {
			arrowX = computed.middlewareData.arrow?.x;
			arrowY = computed.middlewareData.arrow?.y;
			computedPlacement = computed.placement;
		},
	});

	// Sync arrow element with store
	let arrowEl = $state<HTMLElement | undefined>();

	$effect(() => {
		if (arrowEl) {
			arrowRef.set(arrowEl);
		}
	});

	$effect(() => {
		const effectiveOffset = offset ?? (_arrow ? 8 : 4);
		update({
			placement,
			middleware: [
				offsetMW(effectiveOffset),
				shiftMW(),
				flipMW({ padding: 5, fallbackPlacements: ["bottom", "top"] }),
				_arrow ? svelteArrow({ element: arrowRef, padding: 5 }) : null,
			].filter(Boolean) as never,
		});
	});

	$effect(() => {
		if (content.length > maxChar) {
			console.warn(`Tooltip: content exceeds maxChar (${maxChar}). Content: ${content}`);
		}
	});

	let timeout: ReturnType<typeof setTimeout>;

	function setOpen(value: boolean) {
		open = value;
		onOpenChange?.(value);
	}

	function handleMouseEnter() {
		timeout = setTimeout(() => {
			setOpen(true);
		}, delay);
	}

	function handleMouseLeave() {
		clearTimeout(timeout);
		setOpen(false);
	}

	function handleFocus() {
		setOpen(true);
	}

	function handleBlur() {
		setOpen(false);
	}

	function handleKeydown(e: KeyboardEvent) {
		if (e.key === "Escape") {
			setOpen(false);
		}
	}

	/**
	 * Compute aria-keyshortcuts attribute value.
	 * https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-keyshortcuts
	 */
	function ariaShortcuts(shortcuts: TooltipProps["keys"]): string | undefined {
		if (!shortcuts) {
			return undefined;
		}
		if (isNestedKeys(shortcuts)) {
			return shortcuts.map((key) => key.join("+")).join(" ");
		}
		return shortcuts.join("+");
	}

	const labelProps = $derived.by(() => {
		if (describesChild) {
			return open ? { "aria-describedby": tooltipId } : { title: content };
		}
		return { "aria-label": content };
	});

	const arrowStyle = $derived.by(() => {
		const side = (computedPlacement ?? actualPlacement).split("-")[0];
		const staticSide =
			({ top: "bottom", right: "left", bottom: "top", left: "right" } as Record<string, string>)[
				side
			] ?? "bottom";
		const parts: string[] = [];
		if (arrowX != null) {
			parts.push(`left: ${arrowX}px`);
		}
		if (arrowY != null) {
			parts.push(`top: ${arrowY}px`);
		}
		parts.push(`${staticSide}: -3.5px`);
		return parts.join("; ");
	});
</script>

<div
	use:floatingRef
	class="ds-svelte-tooltip-wrapper"
	onmouseenter={handleMouseEnter}
	onmouseleave={handleMouseLeave}
	onfocus={handleFocus}
	onblur={handleBlur}
	onkeydown={handleKeydown}
	aria-keyshortcuts={ariaShortcuts(keys)}
	{...labelProps}
>
	{@render children()}

	{#if open}
		<div
			use:floatingContent
			tabindex="-1"
			role="tooltip"
			id={tooltipId}
			class={[klass, "aksel-tooltip", "aksel-detail", "aksel-detail--small"]}
			data-side={computedPlacement ?? actualPlacement}
			data-state="open"
		>
			{content}

			{#if hasKeys}
				<span class="aksel-tooltip__keys" aria-hidden="true">
					{#if isNestedKeys(keys)}
						{#each keys as group, groupIndex (groupIndex)}
							<span style="display: flex; gap: var(--ax-space-4, 0.25rem);">
								{#each group as key (key)}
									<Detail as="kbd" class="aksel-tooltip__key">
										{key}
									</Detail>
								{/each}
							</span>
							{#if groupIndex < keys.length - 1}
								<span> {shortcutSeparator} </span>
							{/if}
						{/each}
					{:else if keys}
						{#each keys as key (key)}
							<Detail as="kbd" class="aksel-tooltip__key">
								{key}
							</Detail>
						{/each}
					{/if}
				</span>
			{/if}

			{#if _arrow}
				<div class="aksel-tooltip__arrow" bind:this={arrowEl} style={arrowStyle}></div>
			{/if}
		</div>
	{/if}
</div>

<style>
	.aksel-tooltip {
		white-space: nowrap;
	}

	.ds-svelte-tooltip-wrapper {
		display: inline-block;
		position: relative;
	}
</style>
