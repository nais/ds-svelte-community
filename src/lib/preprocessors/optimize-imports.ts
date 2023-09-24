// import { BuildComponents } from "../build/build-components";
import { walkAndReplace } from "./walk-and-replace";

import type { PreprocessorGroup } from "svelte/types/compiler/preprocess";

export function optimizeImports({
	doNotUseInternal,
}: {
	doNotUseInternal?: boolean;
} = {}): Pick<PreprocessorGroup, "script"> {
	return {
		script({ filename, content }) {
			if (filename && !/node_modules/.test(filename)) {
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
							// switch (node.source.value) {
							// 	case CARBON_SVELTE.components:
							// 		replaceContent(
							// 			node,
							// 			node.specifiers
							// 				.map(({ local, imported }) => {
							// 					if (imported.name in Components.components) {
							// 						return `import ${local.name} from "${
							// 							Components.components[imported.name].path
							// 						}";`;
							// 					}

							// 					console.warn(
							// 						`[carbon:optimizeImports] ${imported.name} is not a valid Carbon component`,
							// 					);
							// 					return "";
							// 				})
							// 				.join("\n"),
							// 		);
							// 		break;
							// }
						}
					},
				);

				return { code: content };
			}

			return { code: content };
		},
	};
}

// alias to make it compatible with the old preprocessor
export { optimizeImports as optimizeCarbonImports };
