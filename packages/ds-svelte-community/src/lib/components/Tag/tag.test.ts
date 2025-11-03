import { render } from "$testlib/render";
import { Tag as ReactTag } from "@navikt/ds-react";
import { describe, expect, it } from "bun:test";
import Tag from "./Tag.test.svelte";
import { sizes, variants, type TagProps } from "./type";

describe("Tag", () => {
	sizes.forEach((size) => {
		variants.forEach((variant) => {
			it("renders with HTML similar to ds-react variant " + variant, async () => {
				const props: Omit<TagProps, "children"> = {
					variant,
					size,
				};

				expect(render(Tag, props)).toMimicReact(ReactTag, {
					props,
					children: ["Tag content"],
				});
			});
		});
	});
});
