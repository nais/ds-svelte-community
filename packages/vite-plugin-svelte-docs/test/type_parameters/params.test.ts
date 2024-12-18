import { describe, expect, test } from "bun:test";
import { Generator } from "../../src/generator.js";

describe("params", () => {
	test("svelte elements", async () => {
		const filename = "asdf.svelte";
		const code = `<script lang="ts">
    import type { HTMLAttributes } from "svelte/elements";

    interface GenericNumber<NumType, X> {
      zeroValue: NumType;
      y: X;
      add: (x: NumType, y: NumType) => NumType;
    }

    interface Props extends HTMLAttributes<HTMLDivElement> {
      num: GenericNumber<number, unknown>;
    }

    let props : Props = $props();
  </script>
  `;

		const gen = new Generator(require.resolve("svelte2tsx"));
		await gen.setup();
		gen.addSvelteFile(filename, code);

		const { doc } = gen.docFor(filename, false);
		expect(doc).toMatchSnapshot();
	});
});
