import { getContext, type Snippet } from "svelte";
import type { HTMLAnchorAttributes, HTMLOlAttributes } from "svelte/elements";

export const orientations = ["horizontal", "vertical"] as const;

export interface StepperContext {
	readonly activeStep: number;
	readonly orientation: (typeof orientations)[number];
	readonly interactive: boolean;
	readonly onchange?: (step: number, event: MouseEvent) => void;
	readonly steps: string[];
	register(el: string): number;
	unregister(el: string): void;
	setStep(step: number, event: MouseEvent): void;
}

export const contextKey = Symbol("StepperContext");
export const getStepperContext = (): StepperContext => {
	const context = getContext<StepperContext>(contextKey);
	if (!context) {
		throw new Error("Element must be child of Stepper");
	}
	return context;
};

export interface StepperProps extends Omit<HTMLOlAttributes, "onchange"> {
	/**
	 * Current active step.
	 * @note Stepper index starts at 1, not 0
	 */
	activeStep?: number;
	/**
	 * The direction the component grows.
	 */
	orientation?: (typeof orientations)[number];
	/**
	 * Makes stepper non-interactive if false
	 */
	interactive?: boolean;

	/**
	 * List of `<Step />`
	 */
	children: Snippet;

	onchange?: (step: number, event: MouseEvent) => void;

	[key: string]: unknown;
}

export interface StepProps extends HTMLAnchorAttributes {
	/**
	 * Makes step-indicator a checkmark
	 */
	completed?: boolean;
	/**
	 * Makes step non-interactive if false. Step will be set to a <div>, overriding `as`-prop
	 */
	interactive?: boolean;

	children: Snippet;
}
