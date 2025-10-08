import { render } from "$testlib/render";
import { Skeleton as ReactSkeleton } from "@navikt/ds-react";
import { describe, expect, it } from "bun:test";
import Skeleton from "./Skeleton.svelte";
import { variants, type SkeletonProps } from "./type";

describe("Skeleton", () => {
	variants.forEach((variant) => {
		it("renders with HTML similar to ds-react (" + variant + ")", async () => {
			const props: SkeletonProps = {
				variant,
			};
			expect(render(Skeleton, props)).toMimicReact(ReactSkeleton, {
				props,
				opts: {
					visual: {
						antialiasingTolerance: 10,
						strict: false,
					},
				},
			});
		});
	});
});
