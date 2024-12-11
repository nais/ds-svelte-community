<script lang="ts">
	import type { Snippet } from "svelte";

	type MarkerProps = {
		children: Snippet;
		class: string;
		placement: "left" | "right";
	};

	let { children, class: klass, placement }: MarkerProps = $props();
</script>

<div
	aria-hidden="true"
	class={`${klass} navds-action-menu__marker navds-action-menu__marker--${placement}`}
>
	{@render children()}
</div>
<!-- const Marker = ({ children, className, placement }: MarkerProps) => {
  return (
    <div
      aria-hidden
      className={cl(
        className,
        "navds-action-menu__marker",
        `navds-action-menu__marker--${placement}`,
      )}
    >
      {children}
    </div>
  );
}; -->
