import {
	createFloatingActions as cfa,
	type ComputeConfig,
	type ContentAction,
	type ReferenceAction,
	type Update,
	type VirtualElementStore,
} from "svelte-floating-ui";
import { flip, offset, shift, type VirtualElement } from "svelte-floating-ui/dom";

export const isPolyfilled =
	typeof window !== "undefined" && !("anchorName" in document.documentElement.style);

export const createFloatingActions: (
	initOptions?: ComputeConfig,
) => [ReferenceAction, ContentAction, Update] = (initOptions) => {
	if (!isPolyfilled) {
		return [() => {}, () => {}, () => {}];
	}

	const opts: ComputeConfig = {
		middleware: [flip(), offset(5), shift()],
		...initOptions,
	};
	const [refAction, contentAction, updatePosition] = cfa(opts);

	return [
		(e: HTMLElement | SVGElement | VirtualElementStore | VirtualElement) => {
			if ("firstElementChild" in e && e.firstElementChild) {
				return refAction(e.firstElementChild as HTMLElement);
			}
			return refAction(e as HTMLElement);
		},
		contentAction,
		updatePosition,
	];
};
