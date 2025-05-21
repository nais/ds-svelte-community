<!--
	@component
	Pagination is used to divide content or data into sections so that the user is not overwhelmed by too much content or data at once.

	Read more about this component in the [Aksel documentation](https://aksel.nav.no/komponenter/core/pagination).
-->

<script lang="ts">
	import ChevronLeftIcon from "$lib/icons/ChevronLeftIcon.svelte";
	import ChevronRightIcon from "$lib/icons/ChevronRightIcon.svelte";
	import { omit } from "../helpers";
	import BodyShort from "../typography/BodyShort/BodyShort.svelte";
	import Item from "./Item.svelte";
	import type { PaginationProps } from "./type";

	// TODO: Fix bug when navigating back and forth. Some pages will not show, but ellipsis will.

	let {
		page = 1,
		siblingCount = 1,
		boundaryCount = 1,
		count,
		size = "medium",
		nextText = "Next",
		prevText = "Previous",
		prevNextTexts = false,
		onchange,
		...restProps
	}: PaginationProps = $props();

	const getSteps = (page: number) => {
		const range = (start: number, end: number) =>
			Array.from({ length: end - start + 1 }, (_, i) => start + i);

		if (count <= (boundaryCount + siblingCount) * 2 + 3) {
			return range(1, count);
		}

		const startPages = range(1, boundaryCount);
		const endPages = range(count - boundaryCount + 1, count);

		const siblingsStart = Math.max(
			Math.min(page - siblingCount, count - boundaryCount - siblingCount * 2 - 1),
			boundaryCount + 2,
		);
		const siblingsEnd = siblingsStart + siblingCount * 2;

		const nullish = <T,>(a: T, b: T): T => (a == null ? b : a);

		return [
			...startPages,
			siblingsStart - nullish(startPages[startPages.length - 1], 0) === 2
				? siblingsStart - 1
				: "ellipsis",
			...range(siblingsStart, siblingsEnd),
			nullish(endPages[0], count + 1) - siblingsEnd === 2 ? siblingsEnd + 1 : "ellipsis",
			...endPages,
		];
	};

	let steps = $derived(getSteps(page));

	const handlePageChange = (page: number) => {
		if (onchange) {
			onchange({ page });
		}
	};
</script>

<nav
	{...omit(restProps, "class")}
	class={[restProps.class, "aksel-pagination", `aksel-pagination--${size}`]}
>
	<ul class="aksel-pagination__list">
		<li>
			<Item
				class={[
					"aksel-pagination__prev-next",
					{
						"aksel-pagination--invisible": page === 1,
						"aksel-pagination--prev-next--with-text": prevNextTexts,
					},
				]}
				disabled={page === 1}
				data-page={page - 1}
				page={page - 1}
				{size}
				onclick={() => handlePageChange(page - 1)}
			>
				{#snippet icon()}
					<ChevronLeftIcon {...prevNextTexts ? { "aria-hidden": true } : { title: prevText }} />
				{/snippet}
				{#if prevNextTexts}
					{prevText}
				{/if}
			</Item>
		</li>
		{#each steps as step, i (i)}
			{@const n = Number(step)}
			{#if isNaN(n)}
				<li class="aksel-pagination__ellipsis">
					<BodyShort as="span" size={size === "xsmall" ? "small" : size}>...</BodyShort>
				</li>
			{:else}
				<li>
					<Item
						selected={page === n}
						page={n}
						data-page={n}
						{size}
						onclick={() => handlePageChange(n)}
					>
						{n}
					</Item>
				</li>
			{/if}
		{/each}
		<li>
			<Item
				class={[
					"aksel-pagination__prev-next",
					{
						"aksel-pagination--invisible": page === count,
						"aksel-pagination--prev-next--with-text": prevNextTexts,
					},
				]}
				disabled={page === count}
				data-page={page + 1}
				page={page + 1}
				{size}
				onclick={() => handlePageChange(page + 1)}
				iconPosition="right"
			>
				{#snippet icon()}
					<ChevronRightIcon {...prevNextTexts ? { "aria-hidden": true } : { title: nextText }} />
				{/snippet}
				{#if prevNextTexts}
					{nextText}
				{/if}
			</Item>
		</li>
	</ul>
</nav>
