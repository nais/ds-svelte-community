/**
 * Scroll lock utility for Modal component.
 * Inspired by the React implementation from @navikt/ds-react.
 *
 * Features:
 * - Preserves original styles and restores them correctly
 * - Handles sticky elements by locking the correct element (html vs body)
 * - Handles nested modals via lock counting
 * - Adds data-aksel-scroll-locked attribute to html
 */

const invalidOverflowDisplayValues = new Set(["inline", "contents"]);

function isOverflowElement(element: Element): boolean {
	const { overflow, overflowX, overflowY, display } = getComputedStyle(element);
	return (
		/auto|scroll|overlay|hidden|clip/.test(overflow + overflowY + overflowX) &&
		!invalidOverflowDisplayValues.has(display)
	);
}

/**
 * Scroll lock that sets overflow: hidden on the appropriate element.
 * If overflow is on html, lock html. Otherwise lock body for sticky elements.
 */
function preventScroll(): () => void {
	if (typeof document === "undefined") {
		return () => {};
	}

	const html = document.documentElement;
	const body = document.body;

	// If overflow is on html, lock html. Otherwise lock body for sticky elements.
	const elementToLock = isOverflowElement(html) ? html : body;
	const originalOverflow = elementToLock.style.overflow;
	elementToLock.style.overflow = "hidden";
	html.setAttribute("data-aksel-scroll-locked", "");

	return () => {
		elementToLock.style.overflow = originalOverflow;
		html.removeAttribute("data-aksel-scroll-locked");
	};
}

/**
 * ScrollLocker singleton that handles lock counting for nested modals.
 */
class ScrollLocker {
	private lockCount = 0;
	private restore: (() => void) | null = null;

	acquire(): () => void {
		this.lockCount += 1;

		if (this.lockCount === 1 && this.restore === null) {
			this.lock();
		}

		return () => this.release();
	}

	private release() {
		this.lockCount -= 1;

		if (this.lockCount === 0 && this.restore) {
			this.restore();
			this.restore = null;
		}
	}

	private lock() {
		if (this.lockCount === 0 || this.restore !== null) {
			return;
		}

		if (typeof document === "undefined") {
			this.restore = () => {};
			return;
		}

		const html = document.documentElement;
		const htmlOverflowY = window.getComputedStyle(html).overflowY;

		// If the site already hid overflow on html, respect it and bail out
		if (htmlOverflowY === "hidden" || htmlOverflowY === "clip") {
			this.restore = () => {};
			return;
		}

		this.restore = preventScroll();
	}
}

const scrollLocker = new ScrollLocker();

/**
 * Acquires a scroll lock. Returns a cleanup function to release the lock.
 * Safe to call multiple times - uses reference counting for nested modals.
 */
export function acquireScrollLock(): () => void {
	return scrollLocker.acquire();
}
