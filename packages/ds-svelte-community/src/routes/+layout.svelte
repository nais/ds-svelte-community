<script lang="ts">
	import { base } from "$app/paths";
	import { page } from "$app/state";
	import { Box, Detail, Page, PageBlock } from "$lib";
	import InternalHeader from "$lib/components/InternalHeader/InternalHeader.svelte";
	import InternalHeaderButton from "$lib/components/InternalHeader/InternalHeaderButton.svelte";
	import InternalHeaderTitle from "$lib/components/InternalHeader/InternalHeaderTitle.svelte";
	import Spacer from "$lib/components/primitives/Stack/Spacer.svelte";
	import Tag from "$lib/components/Tag/Tag.svelte";
	import type { Snippet } from "svelte";
	import "../doclib/styles.css";
	import "../lib/css/index.css";
	import type { LayoutData } from "./$types";

	let { data, children }: { data: LayoutData; children: Snippet } = $props();

	function toTitle(str: string) {
		return str.charAt(0).toUpperCase() + str.slice(1);
	}

	let showSidebar = $state(false);

	function compare(id: string | null, a: string) {
		const testID = a.replace(/\/+$/, "");
		return id === testID || (id == "/" && testID == "");
	}
</script>

<Page background="bg-subtle">
	<InternalHeader>
		<InternalHeaderTitle as="a" href={base + "/"}>ds-svelte-community</InternalHeaderTitle>
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
					{#each Object.entries(data.paths) as [key, paths]}
						<strong>{toTitle(key)}</strong>
						<ul>
							{#each paths as [component, experimental]}
								{@const href = (
									key == "pages" ? `/${component}/` : `/${key}/${component}/`
								).replaceAll("//", "/")}
								<li>
									<!-- eslint-disable-next-line svelte/valid-compile using $ to access stores currently errors the validator -->
									<a
										class="unstyled"
										class:active={compare(page.route.id, href)}
										href={base + href}
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
				</Detail>
			</div>
			<Box style="flex-grow: 1;" paddingInline="3">
				{@render children()}
			</Box>
		</div>
	</PageBlock>
</Page>

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
		padding-inline-start: var(--ax-spacing-3, var(--a-spacing-3));
		border-right: 1px solid var(--ax-border-subtle, var(--a-border-divider));
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
				padding-inline: var(--ax-spacing-3, var(--a-spacing-3))
					var(--ax-spacing-2, var(--a-spacing-2));
				text-decoration: none;
				text-underline-offset: 2px;
				width: 100%;
				display: block;
				border-top-left-radius: var(--ax-border-radius-medium, var(--a-border-radius-medium));
				border-bottom-left-radius: var(--ax-border-radius-medium, var(--a-border-radius-medium));

				&:hover {
					background-color: var(--ax-bg-neutral, var(--a-grayalpha-100));
					color: var(--ax-text-default, var(--a-grayalpha-900));
				}

				&:active {
					background-color: var(--ax-bg-meta-purple-hover, var(--a-surface-alt-1-subtle));
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
			padding-inline: var(--ax-spacing-3, var(--a-spacing-3));
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
