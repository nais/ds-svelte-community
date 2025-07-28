<script lang="ts">
	import { base, resolveRoute } from "$app/paths";
	import { page } from "$app/state";
	import { Box, Detail, Page, PageBlock } from "$lib";
	import InternalHeader from "$lib/components/InternalHeader/InternalHeader.svelte";
	import InternalHeaderButton from "$lib/components/InternalHeader/InternalHeaderButton.svelte";
	import InternalHeaderTitle from "$lib/components/InternalHeader/InternalHeaderTitle.svelte";
	import Spacer from "$lib/components/primitives/Stack/Spacer.svelte";
	import Tag from "$lib/components/Tag/Tag.svelte";
	import Theme from "$lib/components/Theme/Theme.svelte";
	import "$lib/css/index.css";
	import type { Snippet } from "svelte";
	import "../../doclib/styles.css";
	import type { LayoutData } from "./$types";

	let { data, children }: { data: LayoutData; children: Snippet } = $props();

	function toTitle(str: string) {
		return str.charAt(0).toUpperCase() + str.slice(1);
	}

	let showSidebar = $state(false);

	function compare(id: string | null, a: string) {
		id = id ? id.replace("/[[theme=theme]]", "") : null;
		const testID = a.replace(/\/+$/, "");
		return id === testID || (id == "/" && testID == "");
	}

	let baseURL = $derived.by(() => {
		if (data.theme) {
			return base + "/" + data.theme;
		}
		return base;
	});
</script>

<Theme theme={data.theme as "dark" | "light"}>
	<Page>
		<InternalHeader>
			<InternalHeaderTitle as="a" href={baseURL + "/"}>ds-svelte-community</InternalHeaderTitle>
			<Spacer />
			<InternalHeaderButton as="a" href="https://docs.nais.io">Nais Docs</InternalHeaderButton>
			<div class="mobile">
				<InternalHeaderButton
					onclick={() => {
						showSidebar = !showSidebar;
					}}
				>
					Toggle menu
				</InternalHeaderButton>
			</div>
		</InternalHeader>

		<PageBlock as="main" width="2xl" style="flex-grow: 1;">
			<div class="wrapper">
				<div class="sidebar" class:show={showSidebar}>
					<div class="section">
						{#each Object.entries(data.paths) as [key, paths] (key)}
							<strong>{toTitle(key)}</strong>
							<ul>
								{#each paths as [component, experimental] (component)}
									{@const href = (
										key == "pages" ? `/${component}/` : `/${key}/${component}/`
									).replaceAll("//", "/")}
									<li>
										<!-- eslint-disable-next-line svelte/valid-compile using $ to access stores currently errors the validator -->
										<a
											class="unstyled"
											class:active={compare(page.route.id, href)}
											href={baseURL + href}
											data-sveltekit-preload-data="tap"
										>
											{component ? component : "Home"}

											{#if experimental}
												<Tag variant="alt1" size="small" style="margin-left: 0.2rem;">Beta</Tag>
											{/if}
										</a>
									</li>
								{/each}
							</ul>
						{/each}
					</div>
					<hr />
					<Detail>
						<!-- eslint-disable-next-line no-undef -->
						Version: {__version__}
						{#if page.route.id}
							{#if data.theme != "dark"}
								<br /><a
									href={resolveRoute(page.route.id, { ...page.params, theme: "dark" })}
									data-sveltekit-reload={!data.theme}
									data-sveltekit-noscroll
								>
									Enable dark mode
								</a>
							{/if}
							{#if data.theme == "dark"}
								<br /><a
									href={resolveRoute(page.route.id, { ...page.params, theme: undefined })}
									data-sveltekit-reload={!data.theme}
									data-sveltekit-noscroll
								>
									Disable dark mode
								</a>
							{/if}
						{/if}
					</Detail>
				</div>
				<Box style="flex-grow: 1;" paddingInline="3">
					{@render children()}
				</Box>
			</div>
		</PageBlock>
	</Page>
</Theme>

<style>
	.wrapper {
		display: flex;
		flex-direction: row;
		min-height: 100vh;
	}

	.mobile {
		display: none;
	}

	a.unstyled {
		color: inherit;
		text-decoration: none;

		&:hover {
			text-decoration: underline;
		}
	}

	.sidebar {
		width: 200px;
		min-width: 200px;
		max-width: 200px;
		padding: 1rem 0;
		padding-inline-start: var(--ax-space-12, var(--a-spacing-3));
		border-right: 1px solid var(--ax-border-neutral-subtle, var(--a-border-divider));
	}

	.section {
		& > strong {
			font-size: var(--ax-font-size-medium, var(--a-font-size-medium));
		}

		ul {
			list-style-type: none;
			padding: 0;
			margin: 0;

			li {
				margin: 0;
				padding: 0;
			}

			a {
				color: var(--ax-text-neutral, var(--a-grayalpha-800));
				font-feature-settings: normal;
				font-size: var(--ax-font-size-medium, var(--a-font-size-medium));
				line-height: var(--ax-font-line-height-large, var(--a-font-line-height-large));
				padding: 0.125rem 0;
				padding-inline: var(--ax-space-12, var(--a-spacing-3)) var(--ax-space-8, var(--a-spacing-2));
				text-decoration: none;
				text-underline-offset: 2px;
				width: 100%;
				display: block;
				border-top-left-radius: var(--ax-border-radius-medium, var(--a-border-radius-medium));
				border-bottom-left-radius: var(--ax-border-radius-medium, var(--a-border-radius-medium));

				&:hover {
					background-color: var(--ax-bg-meta-purple-strong-hover);
					color: var(--ax-text-meta-purple-contrast);
				}

				&:active {
					background-color: var(--ax-bg-meta-purple-strong-pressed, var(--a-surface-alt-1-subtle));
				}

				&.active {
					background-color: var(--ax-bg-meta-purple-strong, var(--a-surface-alt-1));
					color: var(--ax-text-meta-purple-contrast, var(--a-text-on-alt-1));
				}
			}
		}
	}

	@media (max-width: 1000px) {
		.wrapper {
			flex-direction: column;
		}

		.mobile {
			display: contents;
		}

		.sidebar {
			width: 100%;
			min-width: unset;
			max-width: unset;
			border: 0;
			padding-inline: var(--ax-space-12, var(--a-spacing-3));
			border-bottom: 2px solid var(--ax-border-neutral, var(--a-border-divider));
			position: absolute;
			background: var(--ax-bg-default, var(--__ac-page-background));
			display: none;
			z-index: 100;

			&.show {
				display: block;
			}

			ul {
				display: grid;
				grid-template-columns: repeat(auto-fill, minmax(200px, 4fr));

				a {
					border-radius: 0;
					border-radius: var(--ax-border-radius-medium, var(--a-border-radius-medium));
				}
			}
		}
	}
</style>
