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
		d="m18.742 19.61 2-13.5.008-.11c0-.705-.553-1.162-.997-1.424-.494-.292-1.159-.529-1.914-.718-1.523-.38-3.587-.608-5.839-.608s-4.316.227-5.839.608c-.755.19-1.42.426-1.914.718-.444.262-.997.719-.997 1.424l.008.11 2 13.5c.04.264.216.488.464.587l.04.015.096.036q.126.046.356.122c.306.1.748.23 1.302.36 1.105.26 2.664.52 4.484.52s3.379-.26 4.484-.52c.554-.13.995-.26 1.302-.36a11 11 0 0 0 .453-.158l.04-.016a.75.75 0 0 0 .463-.586M12 7.25c-2.166 0-4.102-.22-5.475-.563a8 8 0 0 1-.985-.305 4 4 0 0 1-.471-.219c-.137-.075-.137-.25 0-.326.126-.07.287-.148.471-.22a8 8 0 0 1 .985-.304C7.898 4.97 9.834 4.75 12 4.75s4.102.22 5.475.563q.555.14.95.291c.199.076.372.159.506.233.137.075.137.25 0 .326a4 4 0 0 1-.506.233q-.395.151-.95.29c-1.373.344-3.309.564-5.475.564"
		clip-rule="evenodd"
	/>
</svg>
