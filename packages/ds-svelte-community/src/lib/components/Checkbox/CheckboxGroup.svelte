<!--
	@component
	Checkbox displays a list of options where multiple can be selected at once. When a choice is made, the user can click again to deselect it.

	Read more about this component in the [Aksel documentation](https://aksel.nav.no/komponenter/core/checkbox).
-->

<script lang="ts" module>
	import Fieldset from "$lib/components/Fieldset/Fieldset.svelte";
	import { getContext } from "svelte";
	import { CheckboxGroupContext, type CheckboxGroupProps } from "./type.svelte";

	const contextKey = Symbol("CheckboxGroupContext");

	export function GetCheckboxGroupContext(): CheckboxGroupContext | undefined {
		if (!hasContext(contextKey)) {
			return undefined;
		}
		return getContext<CheckboxGroupContext>(contextKey);
	}
</script>

<script lang="ts">
	import { hasContext, setContext } from "svelte";
	import { classes, omit } from "../helpers";

	const uid = $props.id();

	let {
		value = $bindable([]),
		hideLegend = false,
		error = "",
		errorId = "",
		size = "medium",
		disabled = false,
		id = "cbg-" + uid,
		legend,
		description,
		children,
		...restProps
	}: CheckboxGroupProps = $props();

	const ctx = new CheckboxGroupContext();
	ctx.values = value;
	ctx.groupControlled = value !== undefined;
	ctx.hasError = !!error;
	$effect(() => {
		ctx.groupControlled = value !== undefined;
		ctx.values = value;
		ctx.hasError = !!error;
	});

	setContext(contextKey, ctx);
</script>

<Fieldset
	{...omit(restProps, "class")}
	{error}
	{errorId}
	{hideLegend}
	{id}
	{disabled}
	{size}
	{legend}
	{description}
	class={classes(restProps, "navds-checkbox-group", `navds-checkbox-group--${size}`)}
>
	<div class="navds-checkboxes">
		<!-- Content of the fieldset -->
		{@render children()}
	</div>
</Fieldset>
