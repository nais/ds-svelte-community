<script lang="ts">
	import { ArrowUndoIcon, ChevronDownIcon, ChevronRightIcon } from "$lib/icons";
	import type { Doc, DocSlots } from "@nais/vite-plugin-svelte-docs";
	import Markdown from "./Markdown.svelte";
	import TypeRenderer from "./TypeRenderer.svelte";
	import ValueSelector from "./ValueSelector.svelte";

	let { doc, values = $bindable(undefined) }: { doc: Doc; values?: Record<string, unknown> } =
		$props();

	let showProps = $state(true);
	let showEvents = $state(true);
	let showSnippets = $state(true);

	let isV5 = $derived(doc.slots.filter((s) => s.snippet).length > 0);

	let valueSelectorProps = $derived($state.snapshot(values));

	let snippets = $derived.by((): DocSlots[] => {
		return [
			...doc.slots,
			...doc.props
				.filter((p) => {
					if (Array.isArray(p.type)) {
						if (p.type.find((t) => !Array.isArray(t) && t.type === "snippet")) {
							return true;
						}
					} else {
						if (p.type.type === "union") {
							return p.type.values.find((t) => !Array.isArray(t) && t.type === "snippet");
						}
					}
				})
				.map((p): DocSlots => {
					return {
						name: p.name,
						description: p.description,
						snippet: true,
						lets: [],
						optional: true,
					};
				}),
		];
	});
</script>

{#if doc.props.length + doc.slots.length + doc.events.length > 0}
	<section>
		<table>
			<thead>
				<tr>
					<th>Property</th>
					<th>Description</th>
					<th>Default</th>
					<th>
						<div class="control">
							Control
							{#if values}
								<button
									title="Reset all values"
									disabled={Object.keys(values).length == 0}
									onclick={() => {
										Object.keys(values).forEach((key) => {
											delete values[key];
										});
									}}
								>
									<ArrowUndoIcon />
								</button>
							{/if}
						</div>
					</th>
				</tr>
			</thead>

			<tbody>
				<!--
					MARK: Properties
				-->
				{#if doc.props.length > 0}
					<tr onclick={() => (showProps = !showProps)}>
						<td colspan="99" class="title">
							{#if showProps}
								<ChevronDownIcon />
							{:else}
								<ChevronRightIcon />
							{/if}
							Properties
						</td>
					</tr>

					{#if showProps}
						{#each doc.props as prop}
							<tr>
								<td>
									<strong>
										{prop.name}
									</strong>
									<div class="tags">
										{#if !prop.optional}
											<span class="required">required</span>
										{/if}
										{#if prop.bindable}
											<span class="bindable">bindable</span>
										{/if}
									</div>
								</td>
								<td class="description">
									<Markdown content={prop.description ?? ""} />
									<TypeRenderer type={prop.type} />
								</td>
								<td>
									{#if prop.default}
										<code>{prop.default}</code>
									{:else}
										-
									{/if}
								</td>
								<td>
									{#if values && valueSelectorProps}
										<ValueSelector
											init={prop.default}
											type={prop.type}
											value={valueSelectorProps[prop.name]}
											forceEditable={values[prop.name] !== undefined}
											onchange={(v) => {
												values[prop.name] = v;
											}}
										/>
										<!-- {JSON.stringify(values[prop.name])} -->
									{/if}
								</td>
							</tr>
						{/each}
					{/if}
				{/if}

				<!--
					MARK: Snippets
				-->
				{#if snippets.length > 0}
					<tr onclick={() => (showSnippets = !showSnippets)}>
						<td colspan="99" class="title">
							{#if showSnippets}
								<ChevronDownIcon />
							{:else}
								<ChevronRightIcon />
							{/if}
							{#if isV5}
								Snippets
							{:else}
								Slots
							{/if}
						</td>
					</tr>

					{#if showSnippets}
						{#each snippets as snippet}
							<tr>
								<td><strong>{snippet.name}</strong></td>
								<td class="description"><Markdown content={snippet.description ?? ""} /></td>
								<td>&nbsp;</td>
								<td>-</td>
							</tr>
						{/each}
					{/if}
				{/if}

				<!--
					MARK: Events
				-->
				{#if doc.events.length > 0}
					<tr onclick={() => (showEvents = !showEvents)}>
						<td colspan="99" class="title">
							{#if showEvents}
								<ChevronDownIcon />
							{:else}
								<ChevronRightIcon />
							{/if}
							Events
						</td>
					</tr>

					{#if showEvents}
						{#each doc.events as event}
							<tr>
								<td><strong>{event.name}</strong></td>
								<td class="description"><Markdown content={event.description ?? ""} /></td>
								<td>&nbsp;</td>
								<td>-</td>
							</tr>
						{/each}
					{/if}
				{/if}
			</tbody>
		</table>

		{#if doc.externalExtends.length > 0}
			<p>
				Properties included from:
				{#each doc.externalExtends as ext, i}
					{i > 0 ? ", " : ""}
					<code>{ext}</code>
				{/each}
			</p>
		{/if}
	</section>
{/if}

<style>
	p {
		font-size: 0.9rem;
	}

	.title {
		font-size: var(--a-font-size-medium);
		font-weight: var(--a-font-weight-bold);
		background: var(--a-surface-alt-1-subtle);
		user-select: none;
		vertical-align: middle;

		&:hover {
			background: var(--a-surface-alt-1-moderate);
			cursor: pointer;
		}
	}

	.control {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: space;

		button {
			background: none;
			border: none;
			color: var(--a-text-subtle);
			font-size: 0.9rem;
			padding: 0.5rem;
			margin: 0;
			cursor: pointer;

			&:hover {
				color: var(--a-text-default);
			}
		}

		button[disabled] {
			pointer-events: none;
			opacity: 0.5;
		}
	}

	table {
		width: 100%;
		font-size: 0.9rem;
		border-spacing: 0;

		th,
		td {
			vertical-align: top;
			padding: 0.5rem;

			&:first-of-type {
				width: 20%;
			}
			&:nth-child(3) {
				width: 15%;
			}
			&:nth-child(4) {
				width: 25%;
			}
		}
	}

	.description :global(p) {
		margin: 0;
	}
	.description :global(p:not(:first-child)) {
		margin-top: 0.5rem;
	}

	tbody {
		tr {
			td {
				border-bottom: 1px solid var(--a-border-default);

				&:first-of-type {
					border-left: 1px solid var(--a-border-default);
				}
				&:last-of-type {
					border-right: 1px solid var(--a-border-default);
				}
			}

			&:first-child td {
				border-top: 1px solid var(--a-border-default);

				&:first-of-type {
					border-left: 1px solid var(--a-border-default);
					border-top-left-radius: var(--a-border-radius-medium);
				}
				&:last-of-type {
					border-right: 1px solid var(--a-border-default);
					border-top-right-radius: var(--a-border-radius-medium);
				}
			}

			&:last-child td {
				&:first-of-type {
					border-bottom-left-radius: var(--a-border-radius-medium);
				}
				&:last-of-type {
					border-bottom-right-radius: var(--a-border-radius-medium);
				}
			}
		}
	}

	thead {
		th {
			color: var(--a-text-subtle);
			text-align: left;
		}
	}

	span.required {
		color: var(--a-text-danger);
	}

	.tags {
		margin-top: 0.5rem;

		span {
			border: 1px solid var(--a-border-default);
			border-radius: var(--a-border-radius-medium);
			padding: 0.1rem 0.2rem;
			font-size: 0.8rem;

			&:not(:first-child) {
				margin-left: 0.5rem;
			}

			&.required {
				color: var(--a-text-danger);
				border-color: var(--a-text-danger);
			}

			&.bindable {
				color: var(--a-blue-700);
				border-color: var(--a-blue-700);
			}
		}
	}
</style>
