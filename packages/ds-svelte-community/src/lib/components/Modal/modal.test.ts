import { render } from "$testlib/render";
import { Modal as ReactModal } from "@navikt/ds-react";
import { describe, expect, it } from "bun:test";
import React from "react";
import { createRawSnippet } from "svelte";
import Modal from "./Modal.svelte";
import type { ModalProps } from "./type";

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
				compareAttrs(node, attr) {
					const tagName = node.tagName.toLowerCase();
					// Title ids are unique
					if (tagName === "title" && attr === "id") {
						return false;
					}

					if (tagName === "svg" && ["aria-labelledby"].includes(attr)) {
						return false;
					}

					// We do some logic server side which adds an open attribute to the dialog
					if (tagName == "dialog" && attr == "open") {
						return false;
					}

					return true;
				},
			},
		});
	});
});
