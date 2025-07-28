import { afterAll, expect } from "bun:test";
import { toMimicReact } from "./htmldiff";
import { closeDriver } from "./testChrome";

expect.extend({
	toMimicReact: async (actual: unknown, react: unknown, options: unknown) => {
		return await toMimicReact(actual as never, react, options as never);
	},
});

afterAll(closeDriver);
