<!--
	@component
	BaseAlert is the shared base component for GlobalAlert and LocalAlert.
	It provides the context and core structure for alert components.

	This is an internal component - use GlobalAlert or LocalAlert instead.
-->

<script lang="ts" module>
	import { getContext, setContext } from "svelte";
	import type { AkselColor } from "../../Theme/Theme.svelte";
	import type { BaseAlertContext, BaseAlertStatus } from "./type";

	const contextKey = Symbol("BaseAlertContext");

	export function GetBaseAlertContext(): BaseAlertContext | undefined {
		return getContext<BaseAlertContext>(contextKey);
	}

	export function statusToDataColor(status: BaseAlertStatus): AkselColor {
		switch (status) {
			case "announcement":
				return "neutral";
			case "success":
				return "success";
			case "warning":
				return "warning";
			case "error":
				return "danger";
			default:
				return "neutral";
		}
	}
</script>

<script lang="ts">
	import { omit } from "../../helpers";
	import type { BaseAlertProps } from "./type";

	const uid = $props.id();

	let {
		status,
		size = "medium",
		type = "strong",
		global = false,
		as = "section",
		children,
		...restProps
	}: BaseAlertProps = $props();

	const color = $derived(statusToDataColor(status));
	const statusId = `base-alert-status-${uid}`;

	class Context implements BaseAlertContext {
		size: BaseAlertContext["size"] = $derived(size);
		status: BaseAlertContext["status"] = $derived(status);
		color: BaseAlertContext["color"] = $derived(color);
		statusId: string = statusId;
	}

	const ctx = new Context();
	setContext<BaseAlertContext>(contextKey, ctx);

	const statusLabels: Record<BaseAlertStatus, string> = {
		announcement: "Announcement",
		success: "Success",
		warning: "Warning",
		error: "Error",
	};
</script>

<svelte:element
	this={as}
	{...omit(restProps, "class")}
	aria-label={restProps["aria-label"] ?? (as === "section" ? statusLabels[status] : undefined)}
	class={[restProps.class, "aksel-base-alert"]}
	data-size={size}
	data-color={color}
	data-variant={type}
	data-global={global}
>
	<div role="alert">
		{@render children()}
	</div>
</svelte:element>
