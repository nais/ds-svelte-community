import { render } from "$testlib/render";
import { LinkCard as ReactLinkCard } from "@navikt/ds-react";
import { describe, expect, it } from "bun:test";
import React from "react";
import LinkCardTest from "./LinkCard.test.svelte";

describe("LinkCard", () => {
	it("renders with basic content", () => {
		expect(render(LinkCardTest, { testCase: "basic" })).toMimicReact(ReactLinkCard, {
			props: {},
			children: [
				React.createElement(ReactLinkCard.Title, {
					children: [
						React.createElement(ReactLinkCard.Anchor, {
							href: "/example",
							children: "Example Link",
						}),
					],
				}),
				React.createElement(ReactLinkCard.Description, {
					children: ["This is a description"],
				}),
			],
		});
	});

	it("renders with small size", () => {
		expect(render(LinkCardTest, { testCase: "small" })).toMimicReact(ReactLinkCard, {
			props: {
				size: "small",
			},
			children: [
				React.createElement(ReactLinkCard.Title, {
					children: [
						React.createElement(ReactLinkCard.Anchor, {
							href: "/example",
							children: "Example Link",
						}),
					],
				}),
			],
		});
	});

	it("renders without arrow", () => {
		expect(render(LinkCardTest, { testCase: "noArrow" })).toMimicReact(ReactLinkCard, {
			props: {
				arrow: false,
			},
			children: [
				React.createElement(ReactLinkCard.Title, {
					children: [
						React.createElement(ReactLinkCard.Anchor, {
							href: "/example",
							children: "Example Link",
						}),
					],
				}),
			],
		});
	});

	it("renders with center aligned arrow", () => {
		expect(render(LinkCardTest, { testCase: "centerArrow" })).toMimicReact(ReactLinkCard, {
			props: {
				arrowPosition: "center",
			},
			children: [
				React.createElement(ReactLinkCard.Title, {
					children: [
						React.createElement(ReactLinkCard.Anchor, {
							href: "/example",
							children: "Example Link",
						}),
					],
				}),
			],
		});
	});

	it("renders with icon and footer", () => {
		expect(render(LinkCardTest, { testCase: "withIconFooter" })).toMimicReact(ReactLinkCard, {
			props: {},
			children: [
				React.createElement(ReactLinkCard.Icon, {
					children: [React.createElement("svg", { "aria-hidden": true })],
				}),
				React.createElement(ReactLinkCard.Title, {
					children: [
						React.createElement(ReactLinkCard.Anchor, {
							href: "/example",
							children: "Example Link",
						}),
					],
				}),
				React.createElement(ReactLinkCard.Footer, {
					children: ["Footer content"],
				}),
			],
		});
	});

	it("renders with all sub-components", () => {
		expect(
			render(LinkCardTest, {
				testCase: "complete",
			}),
		).toMimicReact(ReactLinkCard, {
			props: {},
			children: [
				React.createElement(ReactLinkCard.Icon, {
					children: [React.createElement("svg", { "aria-hidden": true })],
				}),
				React.createElement(ReactLinkCard.Title, {
					children: [
						React.createElement(ReactLinkCard.Anchor, {
							href: "/example",
							children: "Example Link",
						}),
					],
				}),
				React.createElement(ReactLinkCard.Description, {
					children: ["This is a description"],
				}),
				React.createElement(ReactLinkCard.Footer, {
					children: ["Footer content"],
				}),
			],
		});
	});

	it("renders with image", () => {
		expect(render(LinkCardTest, { testCase: "withImage" })).toMimicReact(ReactLinkCard, {
			props: {},
			children: [
				React.createElement(ReactLinkCard.Image, {
					children: [
						React.createElement("img", {
							src: "https://picsum.photos/id/237/400",
							alt: "alt-placeholder",
						}),
					],
				}),
				React.createElement(ReactLinkCard.Title, {
					children: [
						React.createElement(ReactLinkCard.Anchor, {
							href: "/example",
							children: "Example Link",
						}),
					],
				}),
			],
		});
	});

	it("renders with image and aspectRatio", () => {
		expect(render(LinkCardTest, { testCase: "withImageAspectRatio" })).toMimicReact(ReactLinkCard, {
			props: {},
			children: [
				React.createElement(ReactLinkCard.Image, {
					aspectRatio: "16/10",
					children: [
						React.createElement("img", {
							src: "https://picsum.photos/id/237/400",
							alt: "alt-placeholder",
							width: "400px",
						}),
					],
				}),
				React.createElement(ReactLinkCard.Title, {
					children: [
						React.createElement(ReactLinkCard.Anchor, {
							href: "/example",
							children: "Example Link",
						}),
					],
				}),
			],
		});
	});
});
