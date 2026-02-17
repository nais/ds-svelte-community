<script lang="ts" module>
	import "svelte-highlight/styles/github-dark.css";
	export type ComponentOptions = {
		center?: boolean;
		package?: string;
		extraComponents?: string[];
	};
</script>

<script lang="ts">
	import { CopyButton } from "$lib";
	import cssURL from "$lib/css/index.css?url";
	import { mount, unmount } from "svelte";
	import type { SvelteMap } from "svelte/reactivity";
	import Highlight from "./Highlight.svelte";
	import IframeContent from "./IframeContent.svelte";
	import type { StorySnippet } from "./Story.svelte";
	import { ThemeStore } from "./theme.svelte";

	const defaultOptions = {
		center: true,
		package: "@nais/ds-svelte-community",
		extraComponents: [],
	};

	let {
		componentOptions,
		children,
		preview,
		source,
		values,
	}: {
		values: SvelteMap<string, unknown>;
		componentOptions?: ComponentOptions;
		children: StorySnippet;
		source?: string;
		preview?: { width?: string; extraPaddingBottom?: string; useIframe?: boolean };
	} = $props();

	let showCode = $state(false);
	let iframeElement = $state<HTMLIFrameElement>();

	let options = $derived({ ...defaultOptions, ...componentOptions });

	const code = $derived.by(() => {
		if (!source) {
			return "";
		}
		return source.replace(/(\s*\{docProps\}\s*)/g, (p1) => {
			if (values.size === 0) {
				return p1.indexOf("\n") >= 0 ? "\n" : "";
			}

			return (
				"\n" +
				values
					.keys()
					.toArray()
					.sort()
					.map((key) => {
						const value = values.get(key);
						if (typeof value === "string") {
							if (value.indexOf(`"`) === 0) {
								return `	${key}=${value}`;
							}
							if (value === "true") {
								return `	${key}`;
							}
							return `	${key}={${value}}`;
						}

						return `	${key}={${JSON.stringify(value)}}`;
					})
					.join("\n")
			);
		});
	});

	const fromText = (t: string): unknown => {
		if (t === "undefined" || t === undefined) {
			return undefined;
		} else if (t === "null" || t === null) {
			return null;
		}

		return JSON.parse(t);
	};

	const dejsonify = (obj: SvelteMap<string, unknown>) => {
		const ret: Record<string, unknown> = {};
		obj.entries().forEach(([key, value]) => {
			if (typeof value === "string") {
				try {
					ret[key] = fromText(value);
				} catch {
					ret[key] = value;
				}
			} else {
				ret[key] = value;
			}
		});
		return ret;
	};

	// Effect to setup iframe rendering
	$effect(() => {
		if (!iframeElement) {
			return;
		}

		const iframeDoc = iframeElement.contentDocument;
		if (!iframeDoc) {
			return;
		}

		// Setup iframe document structure
		const head = iframeDoc.head;
		const body = iframeDoc.body;

		// Get current theme (reactive)
		const currentTheme = ThemeStore.current;

		// Add CSS link
		const link = iframeDoc.createElement("link");
		link.rel = "stylesheet";
		link.href = cssURL;
		head.appendChild(link);

		// Add styles to match the non-iframe preview styling
		const style = iframeDoc.createElement("style");
		const shouldCenter = options.center;
		style.textContent = `
			body {
				margin: 0;
				padding: 0;
				overflow: auto;
				min-height: 250px;
			}
			#mount {
				min-height: 250px;
				${shouldCenter ? "display: flex; justify-content: center; align-items: center;" : "margin: 1rem;"}
			}
		`;
		head.appendChild(style);

		// Create mount point
		const mountPoint = iframeDoc.createElement("div");
		mountPoint.id = "mount";
		body.appendChild(mountPoint);

		const props = dejsonify(values);
		const app = mount(IframeContent, {
			target: mountPoint,
			props: {
				children,
				props,
				theme: currentTheme,
			},
		});

		// Cleanup function
		return () => {
			unmount(app);
		};
	});
</script>

<div class="preview" class:center={options.center} class:show-code={code && showCode}>
	{#if preview?.useIframe}
		<iframe
			bind:this={iframeElement}
			class="preview-iframe"
			title="Component preview"
			sandbox="allow-same-origin allow-scripts"
			style="width: 100%;"
		></iframe>
	{:else}
		<div
			class="preview-wrapper"
			style="width: {preview?.width}"
			style:padding-bottom={preview?.extraPaddingBottom}
		>
			{@render children({ docProps: dejsonify(values) })}
		</div>
	{/if}
	{#if code}
		<button class="toggleCode" onclick={() => (showCode = !showCode)}>
			{showCode ? "Hide" : "Show"} code
		</button>
	{/if}
</div>

{#if code && showCode}
	<div class="code-preview">
		<div class="copy-code">
			<CopyButton size="small" copyText={code} text="Copy code" activeText="Code copied" />
		</div>
		<Highlight {code} />
	</div>
{/if}

<style>
	.preview {
		background-color: var(--ax-bg-default);
		border: 1px solid var(--ax-border-neutral);
		border-radius: var(--ax-border-radius-medium);
		min-height: 250px;
		position: relative;

		&.show-code {
			border-bottom-left-radius: 0;
			border-bottom-right-radius: 0;
		}
	}

	.preview-wrapper {
		margin: 1rem;
	}

	.preview-iframe {
		width: 100%;
		height: 100%;
		min-height: 250px;
		border: none;
		display: block;
	}

	.preview.center {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.code-preview {
		font-size: var(--ax-font-size-small);
		position: relative;

		.copy-code {
			--ac-copybutton-neutral-text: var(--ax-text-default);
			--ac-copybutton-neutral-hover-text: var(--ax-text-meta-purple);
			--ac-copybutton-neutral-active-text: var(--ax-text-meta-purple-strong);
			display: none;

			position: absolute;
			top: 0.5rem;
			right: 0.5rem;
		}

		&:hover .copy-code {
			display: block;
		}

		& :global(pre) {
			margin-top: 0;
			border-bottom-left-radius: var(--ax-border-radius-medium);
			border-bottom-right-radius: var(--ax-border-radius-medium);
		}
	}

	.toggleCode {
		position: absolute;
		bottom: -1px;
		right: -1px;
		font-size: var(--ax-font-size-small);
		border: 1px solid var(--ax-border-neutral);
		border-radius: 0;
		border-top-left-radius: var(--ax-border-radius-medium);
		padding: 0.2rem 0.5rem;
		cursor: pointer;
		background: var(--ax-bg-default);

		&:hover {
			background-color: var(--ax-bg-meta-purple-moderate-hover);
		}
	}
</style>
