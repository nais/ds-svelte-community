<script lang="ts">
	import type { Snippet } from "svelte";

	type Props = {
		/**
		 * Title of the icon, used for accessibility
		 */
		title?: string;

		children?: Snippet;

		[key: string]: unknown;
	};

	let { title, children, ...restProps }: Props = $props();

	const id = $props.id();
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	width="1em"
	height="1em"
	fill="none"
	focusable="false"
	role="img"
	viewBox="0 0 24 24"
	aria-labelledby={title ? id : undefined}
	{...restProps}
>
	{#if title}
		<title {id}>{title}</title>
	{/if}
	{#if children}
		{@render children()}
	{/if}
	<path
		fill="currentColor"
		fill-rule="evenodd"
		d="M12 13.25c-.978 0-1.89-.51-2.499-1.352L12 11.273l2.499.625c-.61.842-1.522 1.352-2.499 1.352m.756-3.334 2.416.604a.75.75 0 0 1 .799-.3l1.939.484a3.75 3.75 0 0 1 2.84 3.638V20a.75.75 0 0 1-.75.75H4a.75.75 0 0 1-.75-.75v-5.658a3.75 3.75 0 0 1 2.84-3.638l1.94-.484a.75.75 0 0 1 .798.3l2.424-.606c.022-.554.26-1.021.528-1.397.27-.379.62-.729.918-1.026l.021-.021c.323-.323.588-.591.78-.859.187-.262.25-.453.25-.611 0-.58-.19-1.004-.467-1.282-.278-.278-.703-.468-1.282-.468s-1.004.19-1.282.468S10.25 5.42 10.25 6a.75.75 0 1 1-1.5 0c0-.92.31-1.746.907-2.343S11.079 2.75 12 2.75c.92 0 1.746.31 2.343.907S15.25 5.08 15.25 6c0 .592-.249 1.088-.53 1.483-.271.379-.621.729-.919 1.026l-.02.021c-.324.323-.589.591-.78.859-.155.217-.226.386-.245.527M6.25 19.25h1.5V17a.75.75 0 0 0-1.5 0zm10 0h1.5V17a.75.75 0 0 0-1.5 0z"
		clip-rule="evenodd"
	/>
</svg>
