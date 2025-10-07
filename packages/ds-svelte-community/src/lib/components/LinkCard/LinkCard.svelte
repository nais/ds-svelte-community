<script lang="ts">
	import { ArrowRightIcon } from "$lib/icons";
	import { omit } from "../helpers";
	import BodyLong from "../typography/BodyLong/BodyLong.svelte";
	import type { LinkCardProps } from "./type";

	let {
		arrow = true,
		arrowPosition = "baseline",
		size = "medium",
		as = "a",
		children,
		...restProps
	}: LinkCardProps = $props();
</script>

<BodyLong
	{as}
	class={`aksel-link-anchor__overlay aksel-link-card aksel-link-card--${size} aksel-body-long aksel-body-long--${size}`}
	data-align-arrow={arrowPosition}
	{...omit(restProps, "class")}
>
	{@render children()}
	{#if arrow}
		<ArrowRightIcon
			aria-hidden
			class={["navds-link-anchor__arrow", "navds-link-card__arrow"]}
			fontSize={size === "medium" ? "1.75rem" : "1.5rem"}
		/>
	{/if}
</BodyLong>

<!-- <div
	data-color="neutral"
	data-align-arrow="baseline"
	class="aksel-link-anchor__overlay aksel-link-card aksel-link-card--medium aksel-body-long aksel-body-long--medium"
>
	<div
		aria-hidden="true"
		class="aksel-link-card__icon aksel-r-p aksel-box aksel-box-radius"
		style="--__axc-r-p-xs: var(--ax-space-8); background-color: var(--ax-bg-moderateA); --__axc-box-radius-xs: var(--ax-radius-12);"
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="1em"
			height="1em"
			fill="none"
			viewBox="0 0 24 24"
			focusable="false"
			role="img"
			font-size="2rem"
			><path
				fill="currentColor"
				fill-rule="evenodd"
				d="M10.03 2.97c-.394-.395-.94-.375-1.278-.32-.383.065-.802.224-1.212.43-.828.413-1.768 1.087-2.57 1.89S3.493 6.712 3.08 7.54c-.206.41-.365.828-.429 1.212-.056.337-.076.883.319 1.278l11 11c.395.395.941.375 1.278.32.384-.065.802-.224 1.213-.43.828-.413 1.767-1.088 2.57-1.89s1.476-1.742 1.89-2.57c.205-.41.364-.829.428-1.212.057-.337.076-.883-.319-1.278zm-4 3.06c.698-.698 1.509-1.273 2.18-1.61.34-.17.61-.26.788-.29l.063-.008L10.94 6 6 10.94 4.122 9.06l.009-.063c.03-.18.12-.448.29-.788.336-.672.912-1.482 1.61-2.18M7.06 12 12 7.06 16.94 12 12 16.94zm6 6 1.879 1.878.063-.009c.18-.03.448-.12.788-.29.672-.336 1.482-.912 2.18-1.61.698-.697 1.273-1.507 1.61-2.18.17-.34.26-.608.29-.787l.008-.063L18 13.06zM9.129 4.12h-.012zm10.751 10.753.002.008v.003zm-5.006 5.006.009.001h.002zM4.12 9.127 4.12 9.12v-.003zM11.25 10a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 0 1.5H12a.75.75 0 0 1-.75-.75m0 4a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 0 1.5H12a.75.75 0 0 1-.75-.75M10 11.25a.75.75 0 0 0 0 1.5h.01a.75.75 0 0 0 0-1.5zm3.25.75a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 0 1.5H14a.75.75 0 0 1-.75-.75"
				clip-rule="evenodd"
			></path></svg
		>
	</div>
	<span class="aksel-link-card__title aksel-heading aksel-heading--small"
		><a href="/eksempel" class="aksel-link-anchor">Sykepenger</a></span
	>
	<div class="aksel-link-card__description">
		Erstatter inntekten din når du ikke kan jobbe på grunn av sykdom eller skade.
	</div>
	<div class="aksel-link-card__footer">
		<span
			data-color="neutral"
			data-variant="outline"
			class="aksel-tag aksel-tag--neutral aksel-tag--small aksel-body-short aksel-body-short--small"
			>Pengestøtte</span
		>
	</div>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		fill="none"
		viewBox="0 0 24 24"
		focusable="false"
		role="img"
		aria-hidden="true"
		class="aksel-link-anchor__arrow aksel-link-card__arrow"
		font-size="1.75rem"
		><path
			fill="currentColor"
			d="M14.087 6.873a.75.75 0 0 1 .943.097l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 0 1-1.06-1.06l3.22-3.22H5a.75.75 0 0 1-.75-.74V12a.75.75 0 0 1 .75-.75h12.19l-3.22-3.22a.75.75 0 0 1 .117-1.157"
		></path></svg
	>
</div> -->
