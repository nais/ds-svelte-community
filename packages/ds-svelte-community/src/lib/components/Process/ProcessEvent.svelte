<!--
	@component
	ProcessEvent represents a single event in a Process.

	Read more about this component in the [Aksel documentation](https://aksel.nav.no/komponenter/core/process).

	All extra props are passed to the root element.
 -->

<script lang="ts">
	import { getContext } from "svelte";
	import { omit } from "../helpers";
	import BodyLong from "../typography/BodyLong/BodyLong.svelte";
	import BodyShort from "../typography/BodyShort/BodyShort.svelte";
	import Heading from "../typography/Heading/Heading.svelte";
	import type { ProcessEventProps } from "./type";

	let {
		title,
		timestamp,
		children,
		bullet,
		hideContent = false,
		status = "uncompleted",
		id,
		ref = $bindable(),
		...restProps
	}: ProcessEventProps = $props();

	const baseID = $props.id();
	const eventId = id || `process-event-${baseID}`;

	const processContext = getContext<{
		hideStatusText: boolean;
		rootId: string;
	}>("process");

	const isActive = $derived(status === "active");
</script>

<li
	bind:this={ref}
	aria-current={isActive}
	id={eventId}
	{...omit(restProps, "class")}
	aria-controls={isActive ? processContext?.rootId : undefined}
	class="aksel-process__event {restProps.class || ''}"
	data-dot={bullet === undefined}
	data-process-event=""
	data-status={status}
>
	<span class="aksel-process__line" data-position="start"></span>
	<div class="aksel-process__item">
		<BodyShort as="span" weight="semibold" class="aksel-process__bullet" aria-hidden>
			{#if bullet}
				{@render bullet()}
			{/if}
		</BodyShort>

		<div class="aksel-process__body">
			{#if title}
				<Heading size="small" as="div" class="aksel-process__title">
					{title}
				</Heading>
			{/if}

			{#if isActive && !processContext?.hideStatusText}
				<BodyShort size="small" class="aksel-process__active-label">Active</BodyShort>
			{/if}

			{#if timestamp}
				<BodyShort
					spacing
					as="div"
					size="small"
					textColor="subtle"
					class="aksel-process__timestamp"
				>
					{timestamp}
				</BodyShort>
			{/if}

			{#if !hideContent && children}
				<BodyLong as="div" class="aksel-process__content">
					{@render children()}
				</BodyLong>
			{/if}
		</div>
	</div>
	<span class="aksel-process__line" data-position="end"></span>
</li>
