import type { LegacySpacingKeys, SpaceKeys } from "@navikt/ds-tokens/types";
import type { ResponsiveProp } from "./types";

export function getResponsiveValue<T = string>(
	prefix: string,
	componentName: string,
	componentProp: string,
	responsiveProp?: ResponsiveProp<T>,
) {
	if (!responsiveProp) {
		return {};
	}

	if (typeof responsiveProp === "string") {
		return {
			[`--__${prefix}c-${componentName}-${componentProp}-xs`]: responsiveProp,
		};
	}

	return Object.fromEntries(
		Object.entries(responsiveProp).map(([breakpointAlias, responsiveValue]) => [
			`--__${prefix}c-${componentName}-${componentProp}-${breakpointAlias}`,
			responsiveValue,
		]),
	);
}

/**
 * Temporary lookup for mapping legacy spacing tokens to new space tokens.
 */
const legacySpacingTokenLookup: Record<`--ax-spacing-${LegacySpacingKeys}`, `--ax-${SpaceKeys}`> = {
	"--ax-spacing-32": "--ax-space-128",
	"--ax-spacing-24": "--ax-space-96",
	"--ax-spacing-20": "--ax-space-80",
	"--ax-spacing-18": "--ax-space-72",
	"--ax-spacing-16": "--ax-space-64",
	"--ax-spacing-14": "--ax-space-56",
	"--ax-spacing-12": "--ax-space-48",
	"--ax-spacing-11": "--ax-space-44",
	"--ax-spacing-10": "--ax-space-40",
	"--ax-spacing-9": "--ax-space-36",
	"--ax-spacing-8": "--ax-space-32",
	"--ax-spacing-7": "--ax-space-28",
	"--ax-spacing-6": "--ax-space-24",
	"--ax-spacing-5": "--ax-space-20",
	"--ax-spacing-4": "--ax-space-16",
	"--ax-spacing-3": "--ax-space-12",
	"--ax-spacing-2": "--ax-space-8",
	"--ax-spacing-1-alt": "--ax-space-6",
	"--ax-spacing-1": "--ax-space-4",
	"--ax-spacing-05": "--ax-space-2",
	"--ax-spacing-0": "--ax-space-0",
};

const translateTokenStringToCSS = (
	specialLayout: string,
	tokenString: string,
	tokenSubgroup: "spacing" | "border-radius",
	tokenExceptions: string[],
	invert: boolean,
	prefix: string,
) => {
	return tokenString
		.split(" ")
		.map((propValue, _, arr) => {
			// Handle special layout cases
			if (specialLayout === "margin-inline" && propValue === "full") {
				return `calc((100vw - ${100 / arr.length}%)/-2)`;
			}
			if (specialLayout === "padding-inline" && propValue === "full") {
				return `calc((100vw - ${100 / arr.length}%)/2)`;
			}
			if (["mi", "mb"].includes(specialLayout) && propValue === "auto") {
				return "auto";
			}

			// Handle exceptions and space tokens
			let output = `var(--${prefix}-${tokenSubgroup}-${propValue})`;

			if (tokenExceptions.includes(propValue)) {
				output = propValue === "px" ? "1px" : propValue;
			} else if (tokenSubgroup === "spacing" && propValue.startsWith("space")) {
				/* Use new "space-x" tokens */
				output = `var(--${prefix}-${propValue})`;
			} else if (tokenSubgroup === "spacing") {
				/* Translate old "spacing" tokens to new "space" tokens */
				const spacingTokenName =
					`--${prefix}-spacing-${propValue}` as `--ax-spacing-${LegacySpacingKeys}`;
				output = `var(${legacySpacingTokenLookup[spacingTokenName] ?? spacingTokenName})`;
			}

			// Handle inversion for negative values
			if (invert) {
				if (propValue === "0") {
					return `0`;
				}
				return `calc(-1 * ${output})`;
			}
			return output;
		})
		.join(" ");
};

export function getResponsiveProps<T extends string>(
	prefix: string,
	componentName: string,
	componentProp: string,
	tokenSubgroup: "spacing" | "border-radius",
	responsiveProp?: ResponsiveProp<T>,
	invert = false,
	tokenExceptions: string[] = [],
) {
	if (!responsiveProp) {
		return {};
	}

	if (typeof responsiveProp === "string") {
		return {
			[`--__${prefix}c-${componentName}-${componentProp}-xs`]: translateTokenStringToCSS(
				componentProp,
				responsiveProp,
				tokenSubgroup,
				tokenExceptions,
				invert,
				prefix,
			),
		};
	}

	const styleProps: Record<string, string> = {};
	Object.entries(responsiveProp).forEach(([breakpointAlias, aliasOrScale]) => {
		styleProps[`--__${prefix}c-${componentName}-${componentProp}-${breakpointAlias}`] =
			translateTokenStringToCSS(
				componentProp,
				aliasOrScale,
				tokenSubgroup,
				tokenExceptions,
				invert,
				prefix,
			);
	});
	return styleProps;
}

export function combineStyles(
	props: Record<string, unknown>,
	...args: Record<string, string | number | null>[]
): string {
	let styles = "";
	if (props.style) {
		styles += props.style;
	}

	return (
		styles +
		args
			.map((x) =>
				Object.entries(x)
					.filter(([, value]) => value !== null)
					.map(([key, value]) => `${key}: ${value};`)
					.join(""),
			)
			.join("")
	);
}
