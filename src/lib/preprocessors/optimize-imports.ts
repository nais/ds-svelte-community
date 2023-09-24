// import { BuildComponents } from "../build/build-components";

import type { PreprocessorGroup } from "svelte/types/compiler/preprocess";
import { Components } from "./components";
import { walkAndReplace } from "./walk-and-replace";

const packageComponent = "@nais/ds-svelte-community";
const packageIcons = "@nais/ds-svelte-community/icons";

export function optimizeImports({
	doNotUseInternal,
}: {
	doNotUseInternal?: boolean;
} = {}): Pick<PreprocessorGroup, "script"> {
	return {
		script({ filename, content }) {
			if (filename && !/node_modules/.test(filename) && /page.svelte/.test(filename)) {
				console.log("Do something filename", filename);
				const code = walkAndReplace(
					{
						type: "script",
						content,
						filename,
					},
					({ node }, replaceContent) => {
						if (node.type === "ImportDeclaration") {
							console.log("NODE SOURCE VALUE", node.source.value);
							switch (node.source.value) {
								case packageIcons:
									replaceContent(
										node,
										node.specifiers
											.map(({ local, imported }) => {
												if (imported.name in Components.icons) {
													return `import ${local.name} from "${
														Components.icons[imported.name].path
													}";`;
												}

												console.warn(
													`[ds-svelte:optimizeImport] ${imported.name} is not a valid ds-svelte icon`,
												);
												return "";
											})
											.join("\n"),
									);
									if (doNotUseInternal) {
										console.log("yolo");
									}
									break;
								case packageComponent:
									replaceContent(
										node,
										node.specifiers
											.map(({ local, imported }) => {
												if (imported.name in Components.components) {
													return `import ${local.name} from "${
														Components.components[imported.name].path
													}";`;
												}

												console.warn(
													`[ds-svelte:optimizeImport] ${imported.name} is not a valid ds-svelte component`,
												);
												return "";
											})
											.join("\n"),
									);
									if (doNotUseInternal) {
										console.log("yolo");
									}
									break;
							}
						}
					},
				);

				return { code: code };
			}

			return { code: content };
		},
	};
}
