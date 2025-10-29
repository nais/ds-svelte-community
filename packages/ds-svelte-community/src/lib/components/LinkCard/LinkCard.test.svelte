<script lang="ts">
	import LinkCard from "./LinkCard.svelte";
	import LinkCardAnchor from "./LinkCardAnchor.svelte";
	import LinkCardDescription from "./LinkCardDescription.svelte";
	import LinkCardFooter from "./LinkCardFooter.svelte";
	import LinkCardIcon from "./LinkCardIcon.svelte";
	import LinkCardImage from "./LinkCardImage.svelte";
	import LinkCardTitle from "./LinkCardTitle.svelte";

	let { testCase }: { testCase: string } = $props();
</script>

{#if testCase === "basic"}
	<LinkCard>
		<LinkCardTitle>
			<LinkCardAnchor href="/example">Example Link</LinkCardAnchor>
		</LinkCardTitle>
		<LinkCardDescription>This is a description</LinkCardDescription>
	</LinkCard>
{:else if testCase === "small"}
	<LinkCard size="small">
		<LinkCardTitle>
			<LinkCardAnchor href="/example">Example Link</LinkCardAnchor>
		</LinkCardTitle>
	</LinkCard>
{:else if testCase === "noArrow"}
	<LinkCard arrow={false}>
		<LinkCardTitle>
			<LinkCardAnchor href="/example">Example Link</LinkCardAnchor>
		</LinkCardTitle>
	</LinkCard>
{:else if testCase === "centerArrow"}
	<LinkCard arrowPosition="center">
		<LinkCardTitle>
			<LinkCardAnchor href="/example">Example Link</LinkCardAnchor>
		</LinkCardTitle>
	</LinkCard>
{:else if testCase === "withIconFooter"}
	<LinkCard>
		<LinkCardIcon>
			<svg aria-hidden="true"></svg>
		</LinkCardIcon>
		<LinkCardTitle>
			<LinkCardAnchor href="/example">Example Link</LinkCardAnchor>
		</LinkCardTitle>
		<LinkCardFooter>Footer content</LinkCardFooter>
	</LinkCard>
{:else if testCase === "complete"}
	<LinkCard>
		<LinkCardIcon>
			<svg aria-hidden="true"></svg>
		</LinkCardIcon>
		<LinkCardTitle>
			<LinkCardAnchor href="/example">Example Link</LinkCardAnchor>
		</LinkCardTitle>
		<LinkCardDescription>This is a description</LinkCardDescription>
		<LinkCardFooter>Footer content</LinkCardFooter>
	</LinkCard>
{:else if testCase === "withImage"}
	<LinkCard>
		<LinkCardImage>
			<img src="https://picsum.photos/id/237/400" alt="alt-placeholder" />
		</LinkCardImage>
		<LinkCardTitle>
			<LinkCardAnchor href="/example">Example Link</LinkCardAnchor>
		</LinkCardTitle>
	</LinkCard>
{:else if testCase === "withImageAspectRatio"}
	<LinkCard>
		<LinkCardImage aspectRatio="16/10">
			<img src="https://picsum.photos/id/237/400" alt="alt-placeholder" width="400px" />
		</LinkCardImage>
		<LinkCardTitle>
			<LinkCardAnchor href="/example">Example Link</LinkCardAnchor>
		</LinkCardTitle>
	</LinkCard>
{/if}
