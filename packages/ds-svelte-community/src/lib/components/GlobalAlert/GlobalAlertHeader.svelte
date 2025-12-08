<!--
	@component
	GlobalAlertHeader is the header section of a GlobalAlert, containing the icon, title, and optionally a close button.
-->

<script lang="ts">
	import { default as CheckmarkCircleFillIcon } from "$lib/icons/CheckmarkCircleFillIcon.svelte";
	import { default as ExclamationmarkTriangleFillIcon } from "$lib/icons/ExclamationmarkTriangleFillIcon.svelte";
	import { default as MegaphoneSpeakingFillIcon } from "$lib/icons/MegaphoneSpeakingFillIcon.svelte";
	import { default as XMarkOctagonFillIcon } from "$lib/icons/XMarkOctagonFillIcon.svelte";
	import { omit } from "../helpers";
	import BodyShort from "../typography/BodyShort/BodyShort.svelte";
	import { GetGlobalAlertContext } from "./GlobalAlert.svelte";
	import type { GlobalAlertHeaderProps, GlobalAlertStatus } from "./type";

	let { children, ...restProps }: GlobalAlertHeaderProps = $props();

	const ctx = GetGlobalAlertContext();

	const statusLabels: Record<GlobalAlertStatus, string> = {
		announcement: "Announcement",
		success: "Success",
		warning: "Warning",
		error: "Error",
	};
</script>

<div
	{...omit(restProps, "class")}
	data-color={ctx?.color}
	class={[restProps.class, "aksel-base-alert__header"]}
>
	<div class="aksel-base-alert__icon">
		{#if ctx?.status === "announcement"}
			<MegaphoneSpeakingFillIcon aria-hidden="true" />
		{:else if ctx?.status === "success"}
			<CheckmarkCircleFillIcon aria-hidden="true" />
		{:else if ctx?.status === "warning"}
			<ExclamationmarkTriangleFillIcon aria-hidden="true" />
		{:else if ctx?.status === "error"}
			<XMarkOctagonFillIcon aria-hidden="true" />
		{/if}
	</div>
	{#if ctx?.status}
		<BodyShort id={ctx.statusId} aria-hidden="true" visuallyHidden>
			{statusLabels[ctx.status]}:
		</BodyShort>
	{/if}
	{@render children()}
</div>
