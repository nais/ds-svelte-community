<!--
	@component
	Modals are useful tools when you have critical information a user needs to take a stance on.

	Read more about this component in the [Aksel documentation](https://aksel.nav.no/komponenter/core/modal).
-->

<script lang="ts">
	import XMarkIcon from "$lib/icons/XMarkIcon.svelte";
	import Button from "../Button/Button.svelte";
	import { omit } from "../helpers";
	import Detail from "../typography/Detail/Detail.svelte";
	import Heading from "../typography/Heading/Heading.svelte";
	import { acquireScrollLock } from "./scrollLock";
	import { sizes, type ModalHeaderProps, type ModalProps } from "./type";

	const uid = $props.id();

	let {
		open = $bindable(false),
		closeButton = true,
		isModal = true,
		width = undefined,
		closeIconText = "Close",
		header,
		children,
		footer,
		closeOnBackdropClick = true,
		placement,
		onBeforeClose,
		...restProps
	}: ModalProps = $props();

	let dialog: HTMLDialogElement;
	let releaseScrollLock: (() => void) | null = null;

	const ariaLabelId = "modal-heading-" + uid;

	/**
	 * Determine if header is a structured object (not a string and not a snippet).
	 * Snippets are functions, and so are objects — but ModalHeaderProps has a `heading` key.
	 */
	function isHeaderObject(h: unknown): h is ModalHeaderProps {
		return typeof h === "object" && h !== null && "heading" in h;
	}

	/**
	 * Determine if header is a snippet (function).
	 */
	function isHeaderSnippet(h: unknown): h is import("svelte").Snippet {
		return typeof h === "function";
	}

	let headerObj = $derived(isHeaderObject(header) ? header : null);

	let showCloseButton = $derived.by(() => {
		if (headerObj) {
			return headerObj.closeButton !== false;
		}
		return closeButton;
	});

	let mergedAriaLabelledBy = $derived.by(() => {
		const explicit = restProps["aria-labelledby"];
		if (explicit) {
			return explicit;
		}
		if (restProps["aria-label"]) {
			return undefined;
		}
		if (headerObj) {
			return ariaLabelId;
		}
		return undefined;
	});

	function tryClose(): boolean {
		if (onBeforeClose && onBeforeClose() === false) {
			return false;
		}
		open = false;
		return true;
	}

	$effect(() => {
		if (dialog && open && dialog.showModal) {
			if (isModal) {
				dialog.showModal();
			} else {
				dialog.show();
			}
		}
	});

	$effect(() => {
		if (dialog && !open) {
			dialog.close();
		}
	});

	$effect(() => {
		if (open && isModal) {
			releaseScrollLock = acquireScrollLock();
		} else if (releaseScrollLock) {
			releaseScrollLock();
			releaseScrollLock = null;
		}

		return () => {
			if (releaseScrollLock) {
				releaseScrollLock();
				releaseScrollLock = null;
			}
		};
	});

	const isKnownSize = (w: unknown) => (w ? sizes.includes(w as never) : false);
	function styles(w: ModalProps["width"]): string | undefined {
		if (typeof w === "number") {
			return `width: ${w}px`;
		}

		if (typeof w === "string") {
			return !isKnownSize(w) ? `width: ${w}` : w;
		}

		return undefined;
	}
</script>

<dialog
	{...omit(restProps, "class", "aria-labelledby")}
	bind:this={dialog}
	aria-labelledby={mergedAriaLabelledBy}
	onclose={(e) => {
		open = false;
		if (restProps.onclose && typeof restProps.onclose === "function") {
			restProps.onclose(e);
		}
	}}
	oncancel={(e) => {
		if (onBeforeClose && onBeforeClose() === false) {
			e.preventDefault();
		}
	}}
	onclick={closeOnBackdropClick
		? ({ target, clientX, clientY }) => {
				const { left, right, top, bottom } = dialog.getBoundingClientRect();
				if (
					target === dialog &&
					(clientX < left || clientX > right || clientY < top || clientY > bottom)
				) {
					tryClose();
				}
			}
		: undefined}
	onkeydown={(e) => {
		if (e.key === "Escape") {
			e.stopPropagation();
		}
	}}
	class={[
		restProps.class,
		{
			[`aksel-modal--${width}`]: isKnownSize(width),
			"aksel-modal": open,
			"aksel-modal--autowidth": !width,
			"aksel-modal--top": placement === "top",
		},
	]}
	style={styles(width)}
>
	<div class="aksel-modal__header">
		{#if showCloseButton}
			<Button
				type="button"
				class="aksel-modal__button"
				size="small"
				variant="tertiary-neutral"
				onclick={() => tryClose()}
				onkeydown={(e: KeyboardEvent) => {
					if (["Enter", " "].includes(e.key) && e.repeat) {
						e.preventDefault();
					}
				}}
			>
				{#snippet icon()}
					<XMarkIcon title={closeIconText} />
				{/snippet}
			</Button>
		{/if}

		{#if headerObj}
			{#if headerObj.label}
				<Detail class="aksel-modal__label">{headerObj.label}</Detail>
			{/if}
			<Heading size={headerObj.size ?? "medium"} level="1" id={ariaLabelId}>
				{#if headerObj.icon}
					<span class="aksel-modal__header-icon">
						<headerObj.icon aria-hidden />
					</span>
				{/if}
				{headerObj.heading}
			</Heading>
		{:else if header}
			{#if typeof header === "string"}
				<Heading level="1" size="large">{header}</Heading>
			{:else if isHeaderSnippet(header)}
				{@render header()}
			{/if}
		{/if}
	</div>
	<div class="aksel-modal__body">
		{@render children()}
	</div>
	{#if footer}
		<div class="aksel-modal__footer">
			{@render footer()}
		</div>
	{/if}
</dialog>
