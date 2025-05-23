import { describe, expect, test } from "bun:test";
import { Generator } from "../../src/generator.js";

describe("v5", () => {
	test("button", async () => {
		const filename = "asdf.svelte";
		const code = `<!--
  @component
  Some simple *description* of the component
  -->

	<script lang="ts">
    import type { Snippet } from "svelte";

    type Props = {
      /**
       * Select some type
       */
      type?: "button" | "submit" | "reset";
      /**
       * Color
       */
      color: string;
      onClick?: (e: MouseEvent) => void;
      /**
       * Default slot
       */
      children: Snippet;
      named?: Snippet<[string]>;
    };

    let { type = $bindable("button"), color = $bindable(), onClick, children, named }: Props = $props();
  </script>

  <button
    {type}
    on:click={(e) => {
      if (onClick) {
        onClick(e);
      }
    }}
    style="color: {color}"
  >
    {@render children()}

    {#if named}
      {@render named(color)}
    {:else}
      Default
    {/if}
  </button>
  `;

		const gen = new Generator(require.resolve("svelte2tsx"));
		await gen.setup();
		gen.addSvelteFile(filename, code);

		const { doc } = gen.docFor(filename, false);
		expect(doc).toEqual({
			name: "asdf",
			description: "Some simple *description* of the component",
			externalExtends: [],
			events: [
				{
					description: "",
					name: "onClick",
					optional: true,
					type: {
						signature: "(e: MouseEvent) => void",
						type: "function",
					},
				},
			],
			props: [
				{
					description: "Color",
					name: "color",
					bindable: true,
					optional: false,
					type: {
						type: "string",
					},
				},
				{
					description: "Select some type",
					name: "type",
					optional: true,
					bindable: true,
					default: '"button"',
					type: {
						type: "union",
						values: [
							{
								type: "literal",
								value: '"button"',
							},
							{
								type: "literal",
								value: '"submit"',
							},
							{
								type: "literal",
								value: '"reset"',
							},
						],
					},
				},
			],
			slots: [
				{
					description: "Default slot",
					lets: [],
					name: "children",
					snippet: true,
					optional: false,
				},
				{
					description: "",
					lets: [
						{
							name: "let_0",
							type: {
								type: "string",
							},
						},
					],
					name: "named",
					snippet: true,
					optional: true,
				},
			],
		});
	});
});
