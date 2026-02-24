# AGENT.md

## Project Snapshot

This monorepo contains two packages:

- `@nais/ds-svelte-community`: Svelte component library + docs/showcase app
- `@nais/vite-plugin-svelte-docs`: Vite plugin for generating docs metadata from Svelte components

Primary objective: keep Svelte components aligned with Aksel behavior and API, especially `@navikt/ds-react`, `@navikt/ds-css`, `@navikt/ds-tokens`, `@navikt/ds-tailwind`, and `@navikt/aksel-icons`, while preserving Svelte-friendly ergonomics.

Reference roles:

- Primary component/API parity reference: `@navikt/ds-react`
- Styling/token foundations: `@navikt/ds-css`, `@navikt/ds-tokens`, `@navikt/ds-tailwind`
- Icon source/reference: `@navikt/aksel-icons`

Official references:

- Aksel docs: https://aksel.nav.no/
- Aksel source repository: https://github.com/navikt/aksel
- Aksel v8 changelog: https://aksel.nav.no/grunnleggende/endringslogg/versjon-8
- Aksel core components index: https://aksel.nav.no/komponenter/core
- Aksel primitives index: https://aksel.nav.no/komponenter/primitives

## Tech & Structure

- Tooling: Bun workspaces, SvelteKit, Vite, TypeScript, ESLint, Prettier, Changesets
- Main library source: `packages/ds-svelte-community/src/lib/**`
- Showcase/docs app: `packages/ds-svelte-community/src/routes/**`
- Tests + parity helpers: `packages/ds-svelte-community/src/tests/**` and `packages/ds-svelte-community/src/testlib/**`
- Generated icons pipeline: `packages/ds-svelte-community/src/icons/generate.ts` -> `src/lib/icons/**`

## Working Principles

- Prefer root-cause fixes over temporary workarounds.
- Keep changes small and consistent with existing patterns.
- Do not change package scripts unless explicitly requested.
- Avoid broad refactors unless they are required for the task.

## Component Parity Expectations

- When modifying/adding components, preserve HTML/behavior parity with `@navikt/ds-react` where intended.
- Add or update parity tests when component behavior changes.
- Use visual checks when needed for regressions:
  - `VISUAL_TESTS=true bun run --filter @nais/ds-svelte-community test`
- Out of scope for parity backlog: joke/demo-only entries in Aksel docs (e.g. `Navpoleonskake`).

## Validation Workflow

For normal library changes, run:

1. `bun run --filter @nais/ds-svelte-community check`
2. `bun run --filter @nais/ds-svelte-community test:unit`
3. `bun run --filter @nais/ds-svelte-community check-peer-deps`
4. `bun run --filter @nais/ds-svelte-community lint`

For repo-wide checks:

- `bun run check`
- `bun run test`

## Dependency Alignment

- Keep these on the same Aksel minor where possible:
  - `@navikt/ds-css`
  - `@navikt/ds-tokens`
  - `@navikt/ds-react`
  - `@navikt/ds-tailwind`
  - `@navikt/aksel-icons`

## Quick Diff Workflow (After a Break)

Use this checklist to quickly assess parity status:

1. Confirm installed Aksel versions:

- `bun pm view @navikt/ds-react version`
- `bun pm view @navikt/ds-css version`
- `bun pm view @navikt/ds-tokens version`

2. Compare implemented Svelte components:

- `packages/ds-svelte-community/src/lib/index.ts`
- `packages/ds-svelte-community/src/lib/components/**`

3. Compare against Aksel indexes:

- Core: https://aksel.nav.no/komponenter/core
- Primitives: https://aksel.nav.no/komponenter/primitives

4. Validate current health:

- `bun run --filter @nais/ds-svelte-community check`
- `bun run --filter @nais/ds-svelte-community test:unit`
- `bun run --filter @nais/ds-svelte-community check-peer-deps`

5. For parity-sensitive changes, run optional visual tests:

- `VISUAL_TESTS=true bun run --filter @nais/ds-svelte-community test`

## Release Notes

- Versioning and changelogs are managed with Changesets.
- Typical release flow from root:
  - `bun run build`
  - `bun run release`

## Troubleshooting Note (Generated Artifacts)

If diagnostics look unusually noisy, first confirm whether errors originate from generated/build output (`storybook-static`, `dist`, `.svelte-kit`) versus source files. Treat generated output as artifacts unless task scope explicitly includes regenerating or validating them.
