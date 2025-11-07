<script lang="ts">
	interface Props {
		href?: string;
		inlineText?: boolean;
	}

	let { href = "#", inlineText = false }: Props = $props();
</script>

{#if inlineText}
	<p>
		Some text before
		<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
		<a {href}>Link text</a>
		some text after.
	</p>
{:else}
	<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
	<a {href}>Link text</a>
{/if}
