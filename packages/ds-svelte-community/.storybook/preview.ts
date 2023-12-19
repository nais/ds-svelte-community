// import "@navikt/ds-css/index.css";
// import "@navikt/ds-tokens/dist/tokens.css";
import type { Preview } from "@storybook/svelte";
import "../src/lib/css/index.css";
import "./custom.css";

const preview: Preview = {
	parameters: {
		actions: { argTypesRegex: "^on[A-Z].*" },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/,
			},
		},
		options: {
			storySort: {
				method: "configure",
				includeNames: true,
				order: ["pages", ["Docs", "CSS", "Icons"], "*", ["Docs", "*"]],
			},
		},
	},
};

export default preview;
