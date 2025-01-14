import { browser } from "$app/environment";
import type {
	ComputeConfig,
	ContentAction,
	ReferenceAction,
	UpdatePosition,
} from "svelte-floating-ui";
import type { VirtualElement } from "svelte-floating-ui/dom";
import type { Writable } from "svelte/store";

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
		const [refAction, contentAction, updatePosition] = createFloatingActions(opts);

		return [
			(e: HTMLElement | Writable<VirtualElement> | VirtualElement) => {
				if ("firstElementChild" in e && e.firstElementChild) {
					return refAction(e.firstElementChild);
				}
				return refAction(e);
			},
			contentAction,
			updatePosition,
		];
	};
}

export const createFloatingActions = create;
