<script lang="ts">
	import doc from "$lib/components/Button/Button.svelte?doc";

	import Doc from "$doclib/Doc.svelte";
	import { Button } from "$lib";
	import GlobeFillIcon from "$lib/icons/GlobeFillIcon.svelte";

	let clicks = $state(0);
</script>

{#snippet docSnippet2({ docProps }: { docProps: { [key: string]: unknown } })}
	<Button variant="secondary" {...docProps}>
		{#snippet icon()}
			<GlobeFillIcon />
		{/snippet}
	</Button>
{/snippet}
{#snippet docSnippet1({ docProps }: { docProps: { [key: string]: unknown } })}
	<Button onclick={() => clicks++} variant="secondary" {...docProps}>
		Clicked {clicks} times
	</Button>
{/snippet}
{#snippet docSnippet0({ docProps }: { docProps: { [key: string]: unknown } })}
	<Button loading variant="secondary" {...docProps}>Button</Button>
{/snippet}
<Doc
	stories={[
		{
			name: "Default",
			source:
				"PHNjcmlwdCBsYW5nPSJ0cyI+CglpbXBvcnQgeyBCdXR0b24gfSBmcm9tICJAb3RoZXJMaWIiOwo8L3NjcmlwdD4KCjxCdXR0b24ge2RvY1Byb3BzfT5CdXR0b248L0J1dHRvbj4K",
			snippet: docSnippet0,
			locked: false,
			props: [
				{ key: "loading", value: "true" },
				{ key: "variant", value: '"secondary"' },
			],
			lockedProps: [],
			preview: undefined,
		},
		{
			name: "Click event",
			source:
				"PHNjcmlwdCBsYW5nPSJ0cyI+CglpbXBvcnQgeyBCdXR0b24gfSBmcm9tICJAb3RoZXJMaWIiOwoKCWxldCBjbGlja3MgPSAkc3RhdGUoMCk7Cjwvc2NyaXB0PgoKPEJ1dHRvbiBvbmNsaWNrPXsoKSA9PiBjbGlja3MrK30ge2RvY1Byb3BzfT4KCUNsaWNrZWQge2NsaWNrc30gdGltZXMKPC9CdXR0b24+Cg==",
			snippet: docSnippet1,
			locked: false,
			props: [{ key: "variant", value: '"secondary"' }],
			lockedProps: ["onclick"],
			preview: undefined,
		},
		{
			name: "Icon only",
			source:
				"PHNjcmlwdCBsYW5nPSJ0cyI+CglpbXBvcnQgeyBCdXR0b24gfSBmcm9tICJAb3RoZXJMaWIiOwoJaW1wb3J0IEdsb2JlRmlsbEljb24gZnJvbSAiQG90aGVyTGliL2ljb25zL0dsb2JlRmlsbEljb24uc3ZlbHRlIjsKPC9zY3JpcHQ+Cgo8QnV0dG9uIHtkb2NQcm9wc30+Cgl7I3NuaXBwZXQgaWNvbigpfQoJCTxHbG9iZUZpbGxJY29uIC8+Cgl7L3NuaXBwZXR9CjwvQnV0dG9uPgo=",
			snippet: docSnippet2,
			locked: false,
			props: [{ key: "variant", value: '"secondary"' }],
			lockedProps: [],
			preview: undefined,
		},
	]}
	{doc}
></Doc>
