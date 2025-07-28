import { render } from "$testlib/render";
import { Loader as ReactLoader } from "@navikt/ds-react";
import { describe, expect, it } from "bun:test";
import Loader from "./Loader.svelte";
import type { LoaderProps } from "./type";

describe("Loader", () => {
	it("renders with HTML similar to ds-react", async () => {
		const props: LoaderProps = {
			title: "Loading",
		};
		expect(render(Loader, props)).toMimicReact(ReactLoader, {
			props: {
				...props,
			},
			opts: {
				visual: {
					skip: true,
				},
				compareAttrs(node, attr) {
					const tagName = node.tagName.toLowerCase();
					// Title ids are unique
					if (tagName == "svg" && ["aria-labelledby"].includes(attr)) {
						return false;
					}

					if (tagName == "title" && attr == "id") {
						return false;
					}
					return true;
				},
			},
		});
	});
});
