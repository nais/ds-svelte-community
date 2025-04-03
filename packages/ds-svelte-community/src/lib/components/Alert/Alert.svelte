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
	import { classes, omit } from "../helpers";
	import BodyLong from "../typography/BodyLong/BodyLong.svelte";
	import type { AlertProps } from "./type";

	let {
		variant = "info",
		size = "medium",
		fullWidth = false,
		contentMaxWidth = true,
		inline = false,
		iconTitleText = "",
		children,
		closeButton = false,
		closeButtonIconText = "Close message",
		onclose = () => {},
		...restProps
	}: AlertProps = $props();
</script>

<div
	{...omit(restProps, "class")}
	class={classes([
		restProps.class,
		"navds-alert",
		`navds-alert--${variant}`,
		`navds-alert--${size}`,
		{
			"navds-alert--full-width": fullWidth,
			"navds-alert--inline": inline,
			"navds-alert--close-button": closeButton,
		},
	])}
>
	{#if variant == "error"}
		<ErrorFilledIcon
			class={classes("navds-alert__icon")}
			title={iconTitleText ? iconTitleText : "Error"}
		/>
	{:else if variant == "warning"}
		<WarningFilledIcon
			class={classes("navds-alert__icon")}
			title={iconTitleText ? iconTitleText : "Warning"}
		/>
	{:else if variant == "info"}
		<InformationFilledIcon
			class={classes("navds-alert__icon")}
			title={iconTitleText ? iconTitleText : "Information"}
		/>
	{:else if variant == "success"}
		<SuccessFilledIcon
			class={classes("navds-alert__icon")}
			title={iconTitleText ? iconTitleText : "Success"}
		/>
	{/if}
	<BodyLong
		as="div"
		{size}
		class={classes([
			"navds-alert__wrapper",
			{
				"navds-alert__wrapper--maxwidth": contentMaxWidth,
			},
		])}
	>
		{@render children()}
	</BodyLong>

	{#if closeButton && !inline}
		<div class={classes("navds-alert__button-wrapper")}>
			<Button
				class={classes("navds-alert__button")}
				size="small"
				variant="tertiary-neutral"
				type="button"
				onclick={onclose}
			>
				{#snippet icon()}
					<XMarkIcon title={closeButtonIconText} />
				{/snippet}
			</Button>
		</div>
	{/if}
</div>
