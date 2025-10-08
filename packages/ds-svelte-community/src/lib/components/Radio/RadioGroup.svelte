<!--
	@component
	Read more about this component in the [Aksel documentation](https://aksel.nav.no/komponenter/core/radio).
-->

<script lang="ts" module>
	import { getContext, hasContext, setContext } from "svelte";

	export class RadioGroupContext<T = unknown> {
		name: string = $state("");
		value: T | undefined = $state(undefined);
		required: boolean = $state(false);
		onchange: (value: T) => void;
		size: "small" | "medium" = $state("medium");

		constructor(onchange?: (value: T) => void) {
			this.onchange = (value: T) => {
				if (this.value === value) {
					return;
				}

				this.value = value;
				onchange?.(value);
			};
		}
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

	const context = new RadioGroupContext((v: T) => {
		value = v;
		onchange?.(v);
	});
	context.name = name ?? `radioGroupName-${nameId}`;
	context.value = value;
	context.size = size;

	$effect(() => {
		context.name = name ?? context.name;
		context.value = value;
		context.size = size;
	});

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
