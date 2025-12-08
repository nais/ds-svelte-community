<!--
	@component
	InlineMessage is used to highlight short messages next to other content.

	Read more about this component in the [Aksel documentation](https://aksel.nav.no/komponenter/core/inlinemessage).
-->

<script lang="ts">
	import { default as CheckmarkCircleFillIcon } from "$lib/icons/CheckmarkCircleFillIcon.svelte";
	import { default as ExclamationmarkTriangleFillIcon } from "$lib/icons/ExclamationmarkTriangleFillIcon.svelte";
	import { default as InformationSquareFillIcon } from "$lib/icons/InformationSquareFillIcon.svelte";
	import { default as XMarkOctagonFillIcon } from "$lib/icons/XMarkOctagonFillIcon.svelte";
	import { omit } from "../helpers";
	import { GetTheme } from "../Theme/Theme.svelte";
	import BodyShort from "../typography/BodyShort/BodyShort.svelte";
	import type { InlineMessageProps, InlineMessageStatus } from "./type";

	const uid = $props.id();

	let { status, size = "medium", children, ...restProps }: InlineMessageProps = $props();

	const themeCtx = GetTheme();

	const statusId = `inline-message-status-${uid}`;
	const contentId = `inline-message-content-${uid}`;

	const dataColor = $derived(status === "error" ? "danger" : status);

	const statusLabels: Record<InlineMessageStatus, string> = {
		info: "Information",
		success: "Success",
		warning: "Warning",
		error: "Error",
	};
</script>

<BodyShort
	{...omit(restProps, "class")}
	as="div"
	class={[restProps.class, "aksel-inline-message"]}
	data-color={dataColor}
	{size}
	data-size={size}
>
	{#if status === "info"}
		<InformationSquareFillIcon class="aksel-inline-message__icon" aria-hidden="true" />
	{:else if status === "success"}
		<CheckmarkCircleFillIcon class="aksel-inline-message__icon" aria-hidden="true" />
	{:else if status === "warning"}
		<ExclamationmarkTriangleFillIcon class="aksel-inline-message__icon" aria-hidden="true" />
	{:else if status === "error"}
		<XMarkOctagonFillIcon class="aksel-inline-message__icon" aria-hidden="true" />
	{/if}
	<BodyShort id={statusId} aria-hidden="true" visuallyHidden>
		{statusLabels[status]}:
	</BodyShort>
	<span data-color={themeCtx?.color} id={contentId} aria-labelledby="{statusId} {contentId}">
		{@render children()}
	</span>
</BodyShort>
