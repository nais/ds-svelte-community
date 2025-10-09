import type {
	HTMLAnchorAttributes,
	HTMLAttributes,
	HTMLButtonAttributes,
	HTMLLabelAttributes,
} from "svelte/elements";

/**
 * Valid HTML elements that can be used with polymorphic components.
 * Excludes document structure elements (html, head, body), script/style tags,
 * and deprecated elements that shouldn't be used in modern components.
 */
export type PolymorphicElement =
	// Anchor and interactive
	| "a"
	| "button"
	| "label"
	// Block elements
	| "div"
	| "section"
	| "article"
	| "aside"
	| "header"
	| "footer"
	| "main"
	| "nav"
	// Inline/text elements
	| "span"
	| "p"
	// Headings
	| "h1"
	| "h2"
	| "h3"
	| "h4"
	| "h5"
	| "h6"
	// Text formatting
	| "strong"
	| "em"
	| "small"
	| "code"
	| "pre"
	| "blockquote"
	| "mark"
	| "del"
	| "ins"
	| "sub"
	| "sup"
	| "kbd"
	| "samp"
	| "var"
	| "abbr"
	| "cite"
	| "q"
	| "dfn"
	| "i"
	| "b"
	| "u"
	| "s"
	// Lists
	| "ul"
	| "ol"
	| "li"
	| "dl"
	| "dt"
	| "dd"
	// Table elements
	| "table"
	| "thead"
	| "tbody"
	| "tfoot"
	| "tr"
	| "th"
	| "td"
	| "caption"
	| "colgroup"
	| "col"
	// Form elements
	| "form"
	| "fieldset"
	| "legend"
	| "input"
	| "textarea"
	| "select"
	| "option"
	| "optgroup"
	| "datalist"
	| "output"
	| "progress"
	| "meter"
	// Media and embedded
	| "img"
	| "video"
	| "audio"
	| "canvas"
	| "iframe"
	| "embed"
	| "source"
	| "track"
	| "picture"
	| "map"
	| "area"
	| "object"
	// Structural/semantic
	| "figure"
	| "figcaption"
	| "time"
	| "address"
	| "details"
	| "summary"
	| "dialog"
	| "data"
	| "hr"
	| "br"
	| "wbr"
	// Ruby annotation
	| "ruby"
	| "rt"
	| "rp"
	// Bidirectional text
	| "bdi"
	| "bdo";

/**
 * Polymorphic component type that provides proper type inference based on the `as` prop.
 * Supports common HTML elements with proper attribute typing.
 *
 * @template TDefaultElement - The default HTML element when `as` is not provided
 * @template TProps - Additional component-specific props
 */
export type PolymorphicPropsWithDefault<
	TDefaultElement extends "p" | "span" | "div",
	TProps = Record<string, never>,
> =
	// Default element (as is optional)
	| (TDefaultElement extends "p"
			? { as?: "p" } & TProps &
					Omit<HTMLAttributes<HTMLParagraphElement>, keyof TProps | "children">
			: never)
	| (TDefaultElement extends "span"
			? { as?: "span" } & TProps & Omit<HTMLAttributes<HTMLSpanElement>, keyof TProps | "children">
			: never)
	| (TDefaultElement extends "div"
			? { as?: "div" } & TProps & Omit<HTMLAttributes<HTMLDivElement>, keyof TProps | "children">
			: never)
	// Anchor element
	| ({ as: "a" } & TProps & Omit<HTMLAnchorAttributes, keyof TProps | "children">)
	// Button element
	| ({ as: "button" } & TProps & Omit<HTMLButtonAttributes, keyof TProps | "children">)
	// Label element
	| ({ as: "label" } & TProps & Omit<HTMLLabelAttributes, keyof TProps | "children">)
	// Common block elements
	| ({ as: "div" } & TProps & Omit<HTMLAttributes<HTMLDivElement>, keyof TProps | "children">)
	| ({ as: "section" } & TProps & Omit<HTMLAttributes<HTMLElement>, keyof TProps | "children">)
	| ({ as: "article" } & TProps & Omit<HTMLAttributes<HTMLElement>, keyof TProps | "children">)
	| ({ as: "aside" } & TProps & Omit<HTMLAttributes<HTMLElement>, keyof TProps | "children">)
	| ({ as: "header" } & TProps & Omit<HTMLAttributes<HTMLElement>, keyof TProps | "children">)
	| ({ as: "footer" } & TProps & Omit<HTMLAttributes<HTMLElement>, keyof TProps | "children">)
	| ({ as: "main" } & TProps & Omit<HTMLAttributes<HTMLElement>, keyof TProps | "children">)
	| ({ as: "nav" } & TProps & Omit<HTMLAttributes<HTMLElement>, keyof TProps | "children">)
	// Common inline elements
	| ({ as: "span" } & TProps & Omit<HTMLAttributes<HTMLSpanElement>, keyof TProps | "children">)
	| ({ as: "p" } & TProps & Omit<HTMLAttributes<HTMLParagraphElement>, keyof TProps | "children">)
	| ({ as: "h1" } & TProps & Omit<HTMLAttributes<HTMLHeadingElement>, keyof TProps | "children">)
	| ({ as: "h2" } & TProps & Omit<HTMLAttributes<HTMLHeadingElement>, keyof TProps | "children">)
	| ({ as: "h3" } & TProps & Omit<HTMLAttributes<HTMLHeadingElement>, keyof TProps | "children">)
	| ({ as: "h4" } & TProps & Omit<HTMLAttributes<HTMLHeadingElement>, keyof TProps | "children">)
	| ({ as: "h5" } & TProps & Omit<HTMLAttributes<HTMLHeadingElement>, keyof TProps | "children">)
	| ({ as: "h6" } & TProps & Omit<HTMLAttributes<HTMLHeadingElement>, keyof TProps | "children">)
	| ({ as: "strong" } & TProps & Omit<HTMLAttributes<HTMLElement>, keyof TProps | "children">)
	| ({ as: "em" } & TProps & Omit<HTMLAttributes<HTMLElement>, keyof TProps | "children">)
	| ({ as: "small" } & TProps & Omit<HTMLAttributes<HTMLElement>, keyof TProps | "children">)
	| ({ as: "code" } & TProps & Omit<HTMLAttributes<HTMLElement>, keyof TProps | "children">)
	| ({ as: "pre" } & TProps & Omit<HTMLAttributes<HTMLPreElement>, keyof TProps | "children">)
	| ({ as: "blockquote" } & TProps &
			Omit<HTMLAttributes<HTMLQuoteElement>, keyof TProps | "children">)
	| ({ as: "li" } & TProps & Omit<HTMLAttributes<HTMLLIElement>, keyof TProps | "children">)
	| ({ as: "ul" } & TProps & Omit<HTMLAttributes<HTMLUListElement>, keyof TProps | "children">)
	| ({ as: "ol" } & TProps & Omit<HTMLAttributes<HTMLOListElement>, keyof TProps | "children">)
	| ({ as: "dl" } & TProps & Omit<HTMLAttributes<HTMLDListElement>, keyof TProps | "children">)
	| ({ as: "dt" } & TProps & Omit<HTMLAttributes<HTMLElement>, keyof TProps | "children">)
	| ({ as: "dd" } & TProps & Omit<HTMLAttributes<HTMLElement>, keyof TProps | "children">)
	| ({ as: "figure" } & TProps & Omit<HTMLAttributes<HTMLElement>, keyof TProps | "children">)
	| ({ as: "figcaption" } & TProps & Omit<HTMLAttributes<HTMLElement>, keyof TProps | "children">)
	| ({ as: "time" } & TProps & Omit<HTMLAttributes<HTMLTimeElement>, keyof TProps | "children">)
	| ({ as: "address" } & TProps & Omit<HTMLAttributes<HTMLElement>, keyof TProps | "children">)
	| ({ as: "legend" } & TProps & Omit<HTMLAttributes<HTMLLegendElement>, keyof TProps | "children">)
	// Table elements
	| ({ as: "table" } & TProps & Omit<HTMLAttributes<HTMLTableElement>, keyof TProps | "children">)
	| ({ as: "thead" } & TProps &
			Omit<HTMLAttributes<HTMLTableSectionElement>, keyof TProps | "children">)
	| ({ as: "tbody" } & TProps &
			Omit<HTMLAttributes<HTMLTableSectionElement>, keyof TProps | "children">)
	| ({ as: "tfoot" } & TProps &
			Omit<HTMLAttributes<HTMLTableSectionElement>, keyof TProps | "children">)
	| ({ as: "tr" } & TProps & Omit<HTMLAttributes<HTMLTableRowElement>, keyof TProps | "children">)
	| ({ as: "th" } & TProps & Omit<HTMLAttributes<HTMLTableCellElement>, keyof TProps | "children">)
	| ({ as: "td" } & TProps & Omit<HTMLAttributes<HTMLTableCellElement>, keyof TProps | "children">)
	| ({ as: "caption" } & TProps &
			Omit<HTMLAttributes<HTMLTableCaptionElement>, keyof TProps | "children">)
	| ({ as: "colgroup" } & TProps & Omit<HTMLAttributes<HTMLElement>, keyof TProps | "children">)
	| ({ as: "col" } & TProps & Omit<HTMLAttributes<HTMLElement>, keyof TProps | "children">)
	// Additional common elements
	| ({ as: "summary" } & TProps & Omit<HTMLAttributes<HTMLElement>, keyof TProps | "children">)
	| ({ as: "details" } & TProps & Omit<HTMLAttributes<HTMLElement>, keyof TProps | "children">)
	| ({ as: "mark" } & TProps & Omit<HTMLAttributes<HTMLElement>, keyof TProps | "children">)
	| ({ as: "del" } & TProps & Omit<HTMLAttributes<HTMLElement>, keyof TProps | "children">)
	| ({ as: "ins" } & TProps & Omit<HTMLAttributes<HTMLElement>, keyof TProps | "children">)
	| ({ as: "sub" } & TProps & Omit<HTMLAttributes<HTMLElement>, keyof TProps | "children">)
	| ({ as: "sup" } & TProps & Omit<HTMLAttributes<HTMLElement>, keyof TProps | "children">)
	| ({ as: "kbd" } & TProps & Omit<HTMLAttributes<HTMLElement>, keyof TProps | "children">)
	| ({ as: "samp" } & TProps & Omit<HTMLAttributes<HTMLElement>, keyof TProps | "children">)
	| ({ as: "var" } & TProps & Omit<HTMLAttributes<HTMLElement>, keyof TProps | "children">)
	| ({ as: "abbr" } & TProps & Omit<HTMLAttributes<HTMLElement>, keyof TProps | "children">)
	| ({ as: "cite" } & TProps & Omit<HTMLAttributes<HTMLElement>, keyof TProps | "children">)
	| ({ as: "q" } & TProps & Omit<HTMLAttributes<HTMLQuoteElement>, keyof TProps | "children">)
	| ({ as: "dfn" } & TProps & Omit<HTMLAttributes<HTMLElement>, keyof TProps | "children">)
	| ({ as: "data" } & TProps & Omit<HTMLAttributes<HTMLDataElement>, keyof TProps | "children">)
	| ({ as: "output" } & TProps & Omit<HTMLAttributes<HTMLOutputElement>, keyof TProps | "children">)
	| ({ as: "progress" } & TProps &
			Omit<HTMLAttributes<HTMLProgressElement>, keyof TProps | "children">)
	| ({ as: "meter" } & TProps & Omit<HTMLAttributes<HTMLMeterElement>, keyof TProps | "children">)
	| ({ as: "fieldset" } & TProps &
			Omit<HTMLAttributes<HTMLFieldSetElement>, keyof TProps | "children">)
	| ({ as: "object" } & TProps & Omit<HTMLAttributes<HTMLObjectElement>, keyof TProps | "children">)
	| ({ as: "i" } & TProps & Omit<HTMLAttributes<HTMLElement>, keyof TProps | "children">)
	| ({ as: "b" } & TProps & Omit<HTMLAttributes<HTMLElement>, keyof TProps | "children">)
	| ({ as: "u" } & TProps & Omit<HTMLAttributes<HTMLElement>, keyof TProps | "children">)
	| ({ as: "s" } & TProps & Omit<HTMLAttributes<HTMLElement>, keyof TProps | "children">)
	| ({ as: "bdi" } & TProps & Omit<HTMLAttributes<HTMLElement>, keyof TProps | "children">)
	| ({ as: "bdo" } & TProps & Omit<HTMLAttributes<HTMLElement>, keyof TProps | "children">)
	| ({ as: "wbr" } & TProps & Omit<HTMLAttributes<HTMLElement>, keyof TProps | "children">)
	| ({ as: "rt" } & TProps & Omit<HTMLAttributes<HTMLElement>, keyof TProps | "children">)
	| ({ as: "rp" } & TProps & Omit<HTMLAttributes<HTMLElement>, keyof TProps | "children">)
	| ({ as: "ruby" } & TProps & Omit<HTMLAttributes<HTMLElement>, keyof TProps | "children">)
	// Media and embedded elements
	| ({ as: "img" } & TProps & Omit<HTMLAttributes<HTMLImageElement>, keyof TProps | "children">)
	| ({ as: "video" } & TProps & Omit<HTMLAttributes<HTMLVideoElement>, keyof TProps | "children">)
	| ({ as: "audio" } & TProps & Omit<HTMLAttributes<HTMLAudioElement>, keyof TProps | "children">)
	| ({ as: "canvas" } & TProps & Omit<HTMLAttributes<HTMLCanvasElement>, keyof TProps | "children">)
	| ({ as: "iframe" } & TProps & Omit<HTMLAttributes<HTMLIFrameElement>, keyof TProps | "children">)
	| ({ as: "embed" } & TProps & Omit<HTMLAttributes<HTMLEmbedElement>, keyof TProps | "children">)
	| ({ as: "source" } & TProps & Omit<HTMLAttributes<HTMLSourceElement>, keyof TProps | "children">)
	| ({ as: "track" } & TProps & Omit<HTMLAttributes<HTMLTrackElement>, keyof TProps | "children">)
	| ({ as: "picture" } & TProps & Omit<HTMLAttributes<HTMLElement>, keyof TProps | "children">)
	| ({ as: "map" } & TProps & Omit<HTMLAttributes<HTMLMapElement>, keyof TProps | "children">)
	| ({ as: "area" } & TProps & Omit<HTMLAttributes<HTMLAreaElement>, keyof TProps | "children">)
	// Form elements
	| ({ as: "form" } & TProps & Omit<HTMLAttributes<HTMLFormElement>, keyof TProps | "children">)
	| ({ as: "input" } & TProps & Omit<HTMLAttributes<HTMLInputElement>, keyof TProps | "children">)
	| ({ as: "textarea" } & TProps &
			Omit<HTMLAttributes<HTMLTextAreaElement>, keyof TProps | "children">)
	| ({ as: "select" } & TProps & Omit<HTMLAttributes<HTMLSelectElement>, keyof TProps | "children">)
	| ({ as: "option" } & TProps & Omit<HTMLAttributes<HTMLOptionElement>, keyof TProps | "children">)
	| ({ as: "optgroup" } & TProps &
			Omit<HTMLAttributes<HTMLOptGroupElement>, keyof TProps | "children">)
	| ({ as: "datalist" } & TProps &
			Omit<HTMLAttributes<HTMLDataListElement>, keyof TProps | "children">)
	// Miscellaneous elements
	| ({ as: "hr" } & TProps & Omit<HTMLAttributes<HTMLHRElement>, keyof TProps | "children">)
	| ({ as: "br" } & TProps & Omit<HTMLAttributes<HTMLBRElement>, keyof TProps | "children">)
	| ({ as: "dialog" } & TProps &
			Omit<HTMLAttributes<HTMLDialogElement>, keyof TProps | "children">);

/**
 * Polymorphic component type with constrained element choices.
 * Allows you to specify exactly which elements are allowed for a component.
 *
 * @template TDefaultElement - The default HTML element when `as` is not provided
 * @template TAllowedElements - Union of allowed element strings
 * @template TProps - Additional component-specific props
 */
export type PolymorphicPropsWithConstrainedElements<
	TDefaultElement extends string,
	TAllowedElements extends string,
	TProps = Record<string, never>,
> = TAllowedElements extends infer TElement
	? TElement extends string
		? // Default element (as is optional)
			TElement extends TDefaultElement
			? { as?: TElement } & TProps & ElementAttributes<TElement, TProps>
			: { as: TElement } & TProps & ElementAttributes<TElement, TProps>
		: never
	: never;

/**
 * Helper type to get the correct HTML attributes for an element
 */
type ElementAttributes<TElement extends string, TProps> = TElement extends "a"
	? Omit<HTMLAnchorAttributes, keyof TProps | "children">
	: TElement extends "button"
		? Omit<HTMLButtonAttributes, keyof TProps | "children">
		: TElement extends "label"
			? Omit<HTMLLabelAttributes, keyof TProps | "children">
			: TElement extends "div"
				? Omit<HTMLAttributes<HTMLDivElement>, keyof TProps | "children">
				: TElement extends "span"
					? Omit<HTMLAttributes<HTMLSpanElement>, keyof TProps | "children">
					: TElement extends "p"
						? Omit<HTMLAttributes<HTMLParagraphElement>, keyof TProps | "children">
						: TElement extends "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
							? Omit<HTMLAttributes<HTMLHeadingElement>, keyof TProps | "children">
							: TElement extends
										| "section"
										| "article"
										| "aside"
										| "header"
										| "footer"
										| "main"
										| "nav"
								? Omit<HTMLAttributes<HTMLElement>, keyof TProps | "children">
								: TElement extends "ul"
									? Omit<HTMLAttributes<HTMLUListElement>, keyof TProps | "children">
									: TElement extends "ol"
										? Omit<HTMLAttributes<HTMLOListElement>, keyof TProps | "children">
										: TElement extends "li"
											? Omit<HTMLAttributes<HTMLLIElement>, keyof TProps | "children">
											: TElement extends "table"
												? Omit<HTMLAttributes<HTMLTableElement>, keyof TProps | "children">
												: TElement extends "thead" | "tbody" | "tfoot"
													? Omit<HTMLAttributes<HTMLTableSectionElement>, keyof TProps | "children">
													: TElement extends "tr"
														? Omit<HTMLAttributes<HTMLTableRowElement>, keyof TProps | "children">
														: TElement extends "th" | "td"
															? Omit<
																	HTMLAttributes<HTMLTableCellElement>,
																	keyof TProps | "children"
																>
															: TElement extends "legend"
																? Omit<HTMLAttributes<HTMLLegendElement>, keyof TProps | "children">
																: TElement extends "fieldset"
																	? Omit<
																			HTMLAttributes<HTMLFieldSetElement>,
																			keyof TProps | "children"
																		>
																	: TElement extends "form"
																		? Omit<
																				HTMLAttributes<HTMLFormElement>,
																				keyof TProps | "children"
																			>
																		: TElement extends "input"
																			? Omit<
																					HTMLAttributes<HTMLInputElement>,
																					keyof TProps | "children"
																				>
																			: TElement extends "textarea"
																				? Omit<
																						HTMLAttributes<HTMLTextAreaElement>,
																						keyof TProps | "children"
																					>
																				: TElement extends "select"
																					? Omit<
																							HTMLAttributes<HTMLSelectElement>,
																							keyof TProps | "children"
																						>
																					: TElement extends "option"
																						? Omit<
																								HTMLAttributes<HTMLOptionElement>,
																								keyof TProps | "children"
																							>
																						: TElement extends "time"
																							? Omit<
																									HTMLAttributes<HTMLTimeElement>,
																									keyof TProps | "children"
																								>
																							: TElement extends "img"
																								? Omit<
																										HTMLAttributes<HTMLImageElement>,
																										keyof TProps | "children"
																									>
																								: TElement extends "video"
																									? Omit<
																											HTMLAttributes<HTMLVideoElement>,
																											keyof TProps | "children"
																										>
																									: TElement extends "audio"
																										? Omit<
																												HTMLAttributes<HTMLAudioElement>,
																												keyof TProps | "children"
																											>
																										: TElement extends "canvas"
																											? Omit<
																													HTMLAttributes<HTMLCanvasElement>,
																													keyof TProps | "children"
																												>
																											: TElement extends "iframe"
																												? Omit<
																														HTMLAttributes<HTMLIFrameElement>,
																														keyof TProps | "children"
																													>
																												: TElement extends "pre"
																													? Omit<
																															HTMLAttributes<HTMLPreElement>,
																															keyof TProps | "children"
																														>
																													: TElement extends "blockquote" | "q"
																														? Omit<
																																HTMLAttributes<HTMLQuoteElement>,
																																keyof TProps | "children"
																															>
																														: TElement extends "dl"
																															? Omit<
																																	HTMLAttributes<HTMLDListElement>,
																																	keyof TProps | "children"
																																>
																															: TElement extends "hr"
																																? Omit<
																																		HTMLAttributes<HTMLHRElement>,
																																		keyof TProps | "children"
																																	>
																																: TElement extends "br"
																																	? Omit<
																																			HTMLAttributes<HTMLBRElement>,
																																			keyof TProps | "children"
																																		>
																																	: TElement extends "dialog"
																																		? Omit<
																																				HTMLAttributes<HTMLDialogElement>,
																																				keyof TProps | "children"
																																			>
																																		: // Default fallback for other elements
																																			Omit<
																																				HTMLAttributes<HTMLElement>,
																																				keyof TProps | "children"
																																			>;
