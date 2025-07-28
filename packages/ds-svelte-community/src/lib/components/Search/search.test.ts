import { render } from "$testlib/render";
import { Search as ReactSearch } from "@navikt/ds-react";
import { describe, expect, it } from "bun:test";
import { omit } from "../helpers";
import Search from "./Search.svelte";
import type { SearchProps } from "./type";

describe("Search", () => {
	it("renders with HTML similar to ds-react", async () => {
		const props: SearchProps = {
			label: "Label fragment",
			value: "Value",
		};
		expect(render(Search, props)).toMimicReact(ReactSearch, {
			props: {
				...omit(props, "searchIconText"),
				clearButtonLabel: "Clear",
			},
			opts: {
				compareAttrs(node, attr) {
					const tagName = node.tagName.toLowerCase();
					if (tagName == "svg" && ["aria-labelledby"].includes(attr)) {
						return false;
					}
					// Known unique attributes
					if (["id", "for"].includes(attr)) {
						return false;
					}
					return true;
				},
			},
		});
	});
});
