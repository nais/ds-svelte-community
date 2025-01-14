import { browser } from "$app/environment";
import type {
	ComputeConfig,
	ContentAction,
	ReferenceAction,
	UpdatePosition,
} from "svelte-floating-ui";

let create: (
	initOptions?: ComputeConfig,
) => [ReferenceAction, ContentAction, UpdatePosition] = () => {
	return [() => {}, () => {}, () => {}];
};

export const isPolyfilled = browser && !("anchorName" in document.documentElement.style);

if (isPolyfilled) {
	const { createFloatingActions } = await import("svelte-floating-ui");
	const { flip, offset, shift } = await import("svelte-floating-ui/dom");

	create = (initOptions?: ComputeConfig) => {
		const opts: ComputeConfig = {
			middleware: [flip(), offset(5), shift()],
			...initOptions,
		};
		return createFloatingActions(opts);
	};
}

export const createFloatingActions = create;
