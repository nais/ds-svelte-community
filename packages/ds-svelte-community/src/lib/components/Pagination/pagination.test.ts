import { render } from "$testlib/render";
import { Pagination as ReactPagination } from "@navikt/ds-react";
import { describe, expect, it } from "bun:test";
import Pagination from "./Pagination.test.svelte";
import type { PaginationProps } from "./type";

describe("Pagination", () => {
	it("renders with HTML similar to ds-react", async () => {
		const props: PaginationProps = {
			count: 100,
			page: 22,
			prevNextTexts: true,
		};
		const svelteProps = {
			...props,
		};
		expect(render(Pagination, svelteProps)).toMimicReact(ReactPagination, {
			props,
			opts: {
				compareAttrs(node, attr) {
					const tagName = node.tagName.toLowerCase();
					if (tagName == "svg" && ["aria-labelledby"].includes(attr)) {
						return false;
					}
					if (tagName == "title" && ["id"].includes(attr)) {
						return false;
					}
					return true;
				},
			},
		});
	});
});
