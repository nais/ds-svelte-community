import { toMimicReact, type Options, type ReactComponent } from "./htmldiff";
import type { RenderResult } from "./render";

export async function bunmatch(
	svelte: RenderResult,
	react: ReactComponent,
	options?: Options,
): Promise<boolean> {
	const t = await toMimicReact(svelte, react, options);
	if (!t.pass) {
		process.stderr.write(t.message() + "\n");
	}
	return t.pass;
}
