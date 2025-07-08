<!--
	@component
	Alert is a notification component that creates focus around a response message without necessarily interrupting the user's task flow.

	Read more about this component in the [Aksel documentation](https://aksel.nav.no/komponenter/core/alert).
-->

<script lang="ts">
	import Button from "$lib/components/Button/Button.svelte";
	import { XMarkIcon } from "$lib/icons";
	import { default as SuccessFilledIcon } from "$lib/icons/CheckmarkCircleFillIcon.svelte";
	import { default as WarningFilledIcon } from "$lib/icons/ExclamationmarkTriangleFillIcon.svelte";
	import { default as InformationFilledIcon } from "$lib/icons/InformationSquareFillIcon.svelte";
	import { default as ErrorFilledIcon } from "$lib/icons/XMarkOctagonFillIcon.svelte";
	import { omit } from "../helpers";
	import type { AkselColor } from "../Theme/Theme.svelte";
	import BodyLong from "../typography/BodyLong/BodyLong.svelte";
	import type { AlertProps } from "./type";

	function variantToRole(variant: AlertProps["variant"]): AkselColor {
		switch (variant) {
			case "warning":
				return "warning";
			case "error":
				return "danger";
			case "info":
				return "info";
			case "success":
				return "success";
			default:
				return "info";
		}
	}

	let {
		variant,
		size = "medium",
		fullWidth = false,
		contentMaxWidth = true,
		inline = false,
		iconTitleText = "",
		children,
		closeButton = false,
		closeButtonIconText = "_default",
		onclose = () => {},
		...restProps
	}: AlertProps = $props();

	const closeButtonText = $derived.by(() => {
		if (closeButtonIconText !== "_default") {
			return closeButtonIconText;
		}
		if (["error", "warning"].includes(variant)) {
			return "Close alert";
		}
		return "Close message";
	});
	// TODO: I18n
</script>

<div
	{...omit(restProps, "class")}
	data-color={variantToRole(variant)}
	data-variant={variant}
	class={[
		restProps.class,
		"aksel-alert",
		`aksel-alert--${variant}`,
		`aksel-alert--${size}`,
		{
			"aksel-alert--full-width": fullWidth,
			"aksel-alert--inline": inline,
			"aksel-alert--close-button": closeButton,
		},
	]}
>
	{#if variant == "error"}
		<ErrorFilledIcon class="aksel-alert__icon" title={iconTitleText ? iconTitleText : "Error"} />
	{:else if variant == "warning"}
		<WarningFilledIcon
			class="aksel-alert__icon"
			title={iconTitleText ? iconTitleText : "Warning"}
		/>
	{:else if variant == "info"}
		<InformationFilledIcon
			class="aksel-alert__icon"
			title={iconTitleText ? iconTitleText : "Information"}
		/>
	{:else if variant == "success"}
		<SuccessFilledIcon
			class="aksel-alert__icon"
			title={iconTitleText ? iconTitleText : "Success"}
		/>
	{/if}
	<BodyLong
		as="div"
		{size}
		class={[
			"aksel-alert__wrapper",
			{
				"aksel-alert__wrapper--maxwidth": contentMaxWidth,
			},
		]}
	>
		{@render children()}
	</BodyLong>

	{#if closeButton && !inline}
		<div class="aksel-alert__button-wrapper">
			<Button
				class="aksel-alert__button"
				size="small"
				variant="tertiary-neutral"
				type="button"
				onclick={onclose}
			>
				{#snippet icon()}
					<XMarkIcon title={closeButtonText} />
				{/snippet}
			</Button>
		</div>
	{/if}
</div>
