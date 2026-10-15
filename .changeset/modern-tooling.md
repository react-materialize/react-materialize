---
"react-materialize": major
---

Modernised build, packaging and tooling.

**Breaking changes**

- The package has an `exports` map. Supported entry points are `react-materialize` and `react-materialize/lib/<Component>` (with or without `.js`); other internal paths are no longer importable.
- Output syntax is ES2019 (previously ES5). Targets that need ES5 must transpile `react-materialize`.
- `engines.node` is `>=22`.

**Other changes**

- Ships ES modules (`lib/*.mjs`) alongside CommonJS (`lib/*.js`), plus `"sideEffects": false`, so bundlers can tree-shake unused components (`import { Button }` goes from ~279 KB to ~6 KB).
- Type definitions ship as `.d.ts` (CommonJS) and `.d.mts` (ESM).
- Declares `prop-types` as a dependency (it was imported but not declared).
- Tooling: Vite library mode replaces Babel; Vitest + Testing Library replace Jest/Enzyme; Biome replaces ESLint/Prettier; docs move to Storybook 10 with Controls and autodocs.
