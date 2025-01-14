import { browser } from "$app/environment";
import {
	createFloatingActions as cfa,
	type ComputeConfig,
	type ContentAction,
	type ReferenceAction,
	type UpdatePosition,
} from "svelte-floating-ui";
import { flip, offset, shift } from "svelte-floating-ui/core";
import { type VirtualElement } from "svelte-floating-ui/dom";
import type { Writable } from "svelte/store";

export const isPolyfilled = browser && !("anchorName" in document.documentElement.style);

export const createFloatingActions: (
	initOptions?: ComputeConfig,
) => [ReferenceAction, ContentAction, UpdatePosition] = (initOptions) => {
	if (!isPolyfilled) {
		return [() => {}, () => {}, () => {}];
	}

	const opts: ComputeConfig = {
		middleware: [flip(), offset(5), shift()],
		...initOptions,
	};
	const [refAction, contentAction, updatePosition] = cfa(opts);

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
