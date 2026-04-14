import { render } from "$testlib/render";
import { Modal as ReactModal } from "@navikt/ds-react";
import { describe, expect, it } from "bun:test";
import React from "react";
import { createRawSnippet } from "svelte";
import Modal from "./Modal.svelte";
import type { ModalProps } from "./type";

function ignoreKnownUnique(node: HTMLElement, attr: string) {
	const tagName = node.tagName.toLowerCase();
	// Title ids are unique
	if (tagName === "title" && attr === "id") {
		return false;
	}
	if (tagName === "svg" && ["aria-labelledby"].includes(attr)) {
		return false;
	}
	// We do some logic server side which adds an open attribute to the dialog
	if (tagName === "dialog" && attr === "open") {
		return false;
	}
	// Generated ids differ between React and Svelte
	if (["h1", "h2"].includes(tagName) && attr === "id") {
		return false;
	}
	// aria-labelledby points to generated ids
	if (tagName === "dialog" && attr === "aria-labelledby") {
		return false;
	}
	// Icon SVG path data may differ slightly
	if (tagName === "path" && attr === "d") {
		return false;
	}
	return true;
}

function textSnippet(text: string) {
	return createRawSnippet(() => ({
		render() {
			return `<span>${text}</span>`;
		},
	}));
}

describe("Modal", () => {
	it("renders with HTML similar to ds-react", async () => {
		const props: ModalProps = {
			open: true,
			children: textSnippet("ModalContent"),
			footer: textSnippet("ModalFooter"),
			header: textSnippet("ModalHeader"),
		};
		expect(render(Modal, props)).toMimicReact(ReactModal, {
			props: {
				open: props.open,
			},
			children: [
				React.createElement(ReactModal.Header, {
					children: [React.createElement("span", {}, "ModalHeader")],
				}),
				React.createElement(ReactModal.Body, {
					children: [React.createElement("span", {}, "ModalContent")],
				}),
				React.createElement(ReactModal.Footer, {
					children: [React.createElement("span", {}, "ModalFooter")],
				}),
			],
			opts: {
				ignoreClasses: ["navds-modal--polyfilled"],
				compareAttrs: ignoreKnownUnique,
			},
		});
	});

	it("renders with header object similar to ds-react", async () => {
		const props: ModalProps = {
			open: true,
			header: { heading: "My heading", label: "My label" },
			children: textSnippet("ModalContent"),
		};
		expect(render(Modal, props)).toMimicReact(ReactModal, {
			props: {
				open: true,
				onClose: () => {},
				header: { heading: "My heading", label: "My label" },
			},
			children: [
				React.createElement(ReactModal.Body, {
					children: [React.createElement("span", {}, "ModalContent")],
				}),
			],
			opts: {
				ignoreClasses: ["navds-modal--polyfilled"],
				compareAttrs: ignoreKnownUnique,
			},
		});
	});

	it("renders with header object without close button similar to ds-react", async () => {
		const props: ModalProps = {
			open: true,
			header: { heading: "My heading", closeButton: false },
			children: textSnippet("ModalContent"),
		};
		expect(render(Modal, props)).toMimicReact(ReactModal, {
			props: {
				open: true,
				onClose: () => {},
				header: { heading: "My heading", closeButton: false },
			},
			children: [
				React.createElement(ReactModal.Body, {
					children: [React.createElement("span", {}, "ModalContent")],
				}),
			],
			opts: {
				ignoreClasses: ["navds-modal--polyfilled"],
				compareAttrs: ignoreKnownUnique,
			},
		});
	});
});
