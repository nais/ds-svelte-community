import { render } from "$testlib/render";
import { Search as ReactSearch } from "@navikt/ds-react";
import { describe, expect, it } from "bun:test";
import { omit } from "../helpers";
import Search from "./Search.svelte";
import type { SearchProps } from "./type";

function ignoreKnownUnique(node: HTMLElement, attr: string) {
	const tagName = node.tagName.toLowerCase();
	if (tagName == "svg" && ["aria-labelledby"].includes(attr)) {
		return false;
	}
	// Known unique attributes
	if (["id", "for"].includes(attr)) {
		return false;
	}
	return true;
}

describe("Search", () => {
	it("renders with HTML similar to ds-react", async () => {
		const props: SearchProps = {
			label: "Label fragment",
			value: "Value",
		};
		expect(render(Search, props)).toMimicReact(ReactSearch, {
			props: {
				...omit(props, "searchIconText"),
				clearButtonLabel: "Clear field",
			},
			opts: {
				compareAttrs: ignoreKnownUnique,
			},
		});
	});

	it("renders simple variant similar to ds-react", async () => {
		const props: SearchProps = {
			label: "Label fragment",
			variant: "simple",
			value: "",
		};
		expect(render(Search, props)).toMimicReact(ReactSearch, {
			props: {
				...omit(props, "searchIconText"),
			},
			opts: {
				compareAttrs: ignoreKnownUnique,
			},
		});
	});

	it("renders with htmlSize similar to ds-react", async () => {
		const props: SearchProps = {
			label: "Label fragment",
			value: "",
			htmlSize: 10,
		};
		expect(render(Search, props)).toMimicReact(ReactSearch, {
			props: {
				...omit(props, "searchIconText"),
				htmlSize: 10,
			},
			opts: {
				compareAttrs: ignoreKnownUnique,
			},
		});
	});
});
