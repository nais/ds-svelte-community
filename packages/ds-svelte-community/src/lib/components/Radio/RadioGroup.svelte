<!--
	@component
	Read more about this component in the [Aksel documentation](https://aksel.nav.no/komponenter/core/radio).
-->

<script lang="ts" module>
	import { getContext, hasContext, setContext } from "svelte";

	export interface RadioGroupContext<T = unknown> {
		readonly name: string;
		value: T | undefined;
		required: boolean;
		readonly size: "small" | "medium";
		onchange(value: T): void;
	}

	const contextKey = Symbol("RadioGroupContext");

	export function GetRadioGroupContext<T>(): RadioGroupContext<T> | undefined {
		if (!hasContext(contextKey)) {
			return undefined;
		}
		return getContext<RadioGroupContext<T>>(contextKey);
	}
</script>

<script lang="ts" generics="T = unknown">
	import Fieldset from "../Fieldset/Fieldset.svelte";
	import { omit } from "../helpers";
	import type { RadioGroupProps } from "./type";

	let {
		children,
		name,
		value = $bindable(),
		onchange,
		legend,
		size = "medium",
		...restProps
	}: RadioGroupProps<T> = $props();

	const nameId = $props.id();

	const context: RadioGroupContext<T> = {
		get name() {
			return name ?? `radioGroupName-${nameId}`;
		},
		get value() {
			return value;
		},
		set value(v: T | undefined) {
			value = v;
		},
		required: false,
		get size() {
			return size;
		},
		onchange(v: T) {
			if (value === v) {
				return;
			}
			value = v;
			onchange?.(v);
		},
	};

	setContext(contextKey, context);
</script>

<Fieldset
	{...omit(restProps, "class")}
	class={[restProps.class, "aksel-radio-group", `aksel-radio-group--${size}`]}
	{legend}
	{size}
>
	<div class="aksel-radio-buttons">{@render children()}</div>
</Fieldset>
