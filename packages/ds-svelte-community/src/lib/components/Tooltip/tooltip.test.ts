import { render } from "$testlib/render";
import { describe, expect, it } from "bun:test";
import Tooltip, { type TooltipTestProps } from "./Tooltip.test.svelte";

/**
 * Tooltip has a fundamental structural difference from React:
 * Svelte must wrap children in a div (ds-svelte-tooltip-wrapper) because
 * we cannot attach event listeners directly to snippet children.
 * React uses <Slot> to render the child directly without a wrapper.
 *
 * Because of this, we cannot use toMimicReact for full HTML comparison.
 * Instead, we test specific structural and ARIA requirements.
 */

function renderHTML(props: TooltipTestProps): string {
	const result = render(Tooltip, props);
	return result.dark!.body;
}

describe("Tooltip", () => {
	it("does not place role='tooltip' on the wrapper div", () => {
		const html = renderHTML({ content: "Help text", open: true });
		// The wrapper div should NOT have role="tooltip"
		expect(html).not.toMatch(/class="ds-svelte-tooltip-wrapper[^"]*"[^>]*role="tooltip"/);
		// But the tooltip content div SHOULD have role="tooltip"
		expect(html).toMatch(/role="tooltip"/);
	});

	it("renders tooltip content div with correct classes when open", () => {
		const html = renderHTML({ content: "Help text", open: true });
		expect(html).toContain('role="tooltip"');
		expect(html).toContain("aksel-tooltip");
		expect(html).toContain("aksel-detail");
		expect(html).toContain("aksel-detail--small");
		expect(html).toContain('data-state="open"');
		expect(html).toContain('data-side="top"');
		expect(html).toContain("Help text");
	});

	it("does not render tooltip content when closed", () => {
		const html = renderHTML({ content: "Help text", open: false });
		// Wrapper exists but tooltip content div should not
		expect(html).toContain("ds-svelte-tooltip-wrapper");
		expect(html).not.toContain("aksel-tooltip");
		expect(html).not.toContain('role="tooltip"');
	});

	it("uses generated id instead of hardcoded 'r7'", () => {
		const html = renderHTML({ content: "Help text", open: true });
		expect(html).not.toContain('id="r7"');
		expect(html).toMatch(/id="tooltip-[^"]+"/);
	});

	it("renders arrow by default", () => {
		const html = renderHTML({ content: "Help text", open: true });
		expect(html).toContain("aksel-tooltip__arrow");
	});

	it("does not render arrow when arrow=false", () => {
		const html = renderHTML({ content: "Help text", open: true, arrow: false });
		expect(html).not.toContain("aksel-tooltip__arrow");
	});

	it("renders keyboard shortcuts with 'or' separator (not Norwegian)", () => {
		const html = renderHTML({
			content: "Copy",
			open: true,
			keys: [
				["Ctrl", "C"],
				["Cmd", "C"],
			],
		});
		expect(html).toContain("aksel-tooltip__keys");
		expect(html).toContain("aksel-tooltip__key");
		// Should use English "or", not Norwegian "eller"
		expect(html).toMatch(/<span>\s*or\s*<\/span>/);
		expect(html).not.toMatch(/<span>\s*eller\s*<\/span>/);
	});

	it("supports custom shortcutSeparator", () => {
		const html = renderHTML({
			content: "Copy",
			open: true,
			keys: [
				["Ctrl", "C"],
				["Cmd", "C"],
			],
			shortcutSeparator: "oder",
		});
		expect(html).toMatch(/<span>\s*oder\s*<\/span>/);
	});

	it("renders flat keyboard shortcuts without separator", () => {
		const html = renderHTML({ content: "Copy", open: true, keys: ["Ctrl", "C"] });
		expect(html).toContain("aksel-tooltip__key");
		expect(html).not.toContain("> or <");
	});

	it("adds aria-hidden on keys span", () => {
		const html = renderHTML({ content: "Copy", open: true, keys: ["Ctrl", "C"] });
		expect(html).toMatch(/class="aksel-tooltip__keys[^"]*"[^>]*aria-hidden="true"/);
	});

	it("adds aria-label on wrapper when describesChild=false (default)", () => {
		const html = renderHTML({ content: "Help text", open: true });
		expect(html).toMatch(/class="ds-svelte-tooltip-wrapper[^"]*"[^>]*aria-label="Help text"/);
	});

	it("adds aria-describedby on wrapper when describesChild=true and open", () => {
		const html = renderHTML({ content: "Help text", open: true, describesChild: true });
		expect(html).toMatch(/class="ds-svelte-tooltip-wrapper[^"]*"[^>]*aria-describedby="tooltip-/);
	});

	it("adds title on wrapper when describesChild=true and closed", () => {
		const html = renderHTML({ content: "Help text", open: false, describesChild: true });
		expect(html).toMatch(/class="ds-svelte-tooltip-wrapper[^"]*"[^>]*title="Help text"/);
	});

	it("renders with placement prop", () => {
		const html = renderHTML({ content: "Help text", open: true, placement: "right" });
		expect(html).toContain('data-side="right"');
	});

	it("adds aria-keyshortcuts on wrapper for flat keys", () => {
		const html = renderHTML({ content: "Copy", open: true, keys: ["Ctrl", "C"] });
		expect(html).toMatch(/aria-keyshortcuts="Ctrl\+C"/);
	});

	it("adds aria-keyshortcuts on wrapper for nested keys", () => {
		const html = renderHTML({
			content: "Copy",
			open: true,
			keys: [
				["Ctrl", "C"],
				["Cmd", "C"],
			],
		});
		expect(html).toMatch(/aria-keyshortcuts="Ctrl\+C Cmd\+C"/);
	});
});
