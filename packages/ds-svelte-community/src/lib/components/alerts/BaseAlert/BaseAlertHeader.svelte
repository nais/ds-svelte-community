<!--
	@component
	BaseAlertHeader is the header section of a BaseAlert, containing the icon, title, and optionally a close button.

	This is an internal component - use GlobalAlertHeader or LocalAlertHeader instead.
-->

<script lang="ts">
	import { default as CheckmarkCircleFillIcon } from "$lib/icons/CheckmarkCircleFillIcon.svelte";
	import { default as ExclamationmarkTriangleFillIcon } from "$lib/icons/ExclamationmarkTriangleFillIcon.svelte";
	import { default as MegaphoneSpeakingFillIcon } from "$lib/icons/MegaphoneSpeakingFillIcon.svelte";
	import { default as XMarkOctagonFillIcon } from "$lib/icons/XMarkOctagonFillIcon.svelte";
	import { omit } from "../../helpers";
	import BodyShort from "../../typography/BodyShort/BodyShort.svelte";
	import { GetBaseAlertContext } from "./BaseAlert.svelte";
	import type { BaseAlertHeaderProps, BaseAlertStatus } from "./type";

	let { children, icon, ...restProps }: BaseAlertHeaderProps = $props();

	const ctx = GetBaseAlertContext();

	const statusLabels: Record<BaseAlertStatus, string> = {
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
		{#if icon}
			{@render icon()}
		{:else if ctx?.status === "announcement"}
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
