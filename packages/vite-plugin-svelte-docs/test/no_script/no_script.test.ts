import { describe, expect, test } from "bun:test";
import * as path from "path";
import { Doc } from "../../src";
import { Generator } from "../../src/generator";

describe("v5", () => {
	test("no_script", async () => {
		const filename = path.resolve(import.meta.dir, "NoScript.svelte").replace(".svelte", ".ts");
		const code = await Bun.file(filename.replace(".ts", ".svelte")).text();

		const gen = new Generator(require.resolve("svelte2tsx"));
		await gen.setup();
		gen.addSvelteFile(filename, code);
		const { doc } = gen.docFor(filename, false);

		const expected: Doc = {
			name: "NoScript",
			description: "",
			props: [],
			slots: [],
			events: [],
			externalExtends: [],
		};

		expect(doc).toStrictEqual(expected);
	});
});
