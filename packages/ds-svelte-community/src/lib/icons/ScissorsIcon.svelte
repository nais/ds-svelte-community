<script lang="ts" context="module">
	import newUniqueId from "$lib/components/local-unique-id";
	import type { SVGAttributes } from "svelte/elements";
</script>

<script lang="ts">
	/**
	 * Title of the icon, used for accessibility
	 */
	export let title = "";

	type $$Props = SVGAttributes<SVGElement> & {
		title?: string;
	};

	const id = newUniqueId();
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
	{...$$restProps}
>
	{#if title}
		<title {id}>{title}</title>
	{/if}
	<slot />
	<path
		fill="currentColor"
		fill-rule="evenodd"
		d="M7.97 10.085A3.25 3.25 0 1 1 9.1 8.478l1.456.822 6.506-1.952a1.75 1.75 0 0 1 .79-.05l2.771.462a.75.75 0 0 1 .234 1.4l-5.336 2.89 5.326 2.785a.75.75 0 0 1-.224 1.405l-2.77.462a1.75 1.75 0 0 1-.791-.05l-6.46-1.938-1.5.813a3.25 3.25 0 1 1-1.132-1.612 3.252 3.252 0 0 0 0-3.83ZM4.25 7.5a1.75 1.75 0 1 1 3.5 0 1.75 1.75 0 0 1-3.5 0Zm8.214 6.206 1.467-.795 4.24 2.217-.565.094a.25.25 0 0 1-.113-.007l-5.03-1.509ZM7.39 15.438a1.742 1.742 0 0 1 .36 1.062 1.75 1.75 0 1 1-.359-1.062Zm2.493-2.04a4.773 4.773 0 0 0 .11-2.363l7.499-2.25a.25.25 0 0 1 .113-.007l.616.103-8.338 4.516Z"
		clip-rule="evenodd"
	/>
</svg>
