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
		d="M5.995 9.958C5.959 8.11 5.908 5.96 5.867 5.59A2.083 2.083 0 0 1 9.25 3.743a2.042 2.042 0 0 1 4.067-.203 2.059 2.059 0 0 1 3.432 1.533v.242a2.066 2.066 0 0 1 2.908 2.098l-.912 8.666a.8.8 0 0 1-.05.2l-.946 2.366V21a.75.75 0 0 1-.75.75H8a.75.75 0 0 1-.75-.75v-1.901l-.002-.017a1 1 0 0 1 .002-.177v-.113l-4.726-5.156a1.55 1.55 0 0 1 .174-2.255 3.15 3.15 0 0 1 3.316-.385zm4.755-6.166a.542.542 0 0 1 1.082-.036l.38 5.69-1.462-.069zm-1.616 5.51-.62-4.03a.583.583 0 0 0-1.156.154c.044.399.089 2.168.123 3.8zm8.774.407.258-2.453a.566.566 0 1 0-1.126-.115l-.252 2.516zm-4.119-.19 1.461.067V5.073a.559.559 0 0 0-1.115-.043zm-7.852 3.278-.447 1.855-1.86-2.03a.05.05 0 0 1 .005-.07 1.645 1.645 0 0 1 2.285.223zm2.813 6.88 7.5-.794v1.367h-7.5zm8.515-3.859-.605 1.513-7.984.845a.8.8 0 0 0-.123-.183L6.71 15.984l.642-2.66 9.991 1.742zm.236-2.247.25-2.368L7.51 10.73l.019 1.102z"
		clip-rule="evenodd"
	/>
</svg>
