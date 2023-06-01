import type { HTMLFieldsetAttributes } from "svelte/elements";
import type { Readable } from "svelte/store";

export const sizes = ["medium", "small"] as const;

export interface Props extends HTMLFieldsetAttributes {
	value?: unknown[];
	size?: (typeof sizes)[number];
	disabled?: boolean;
	hideLegend?: boolean;
	error?: string;
	errorId?: string;
	id?: string;
	legend?: string;
	description?: string;
}

export type CheckboxGroupContext = {
	change: (value: unknown) => void;
	groupControlled: boolean;
	values: Readable<unknown[]>;
	hasError: Readable<boolean>;
	size: (typeof sizes)[number];
};
