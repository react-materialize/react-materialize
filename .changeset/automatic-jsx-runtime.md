---
"react-materialize": patch
---

Build with React's automatic JSX runtime: the published modules import `react/jsx-runtime` instead of calling `React.createElement`, which removes React 19's "outdated JSX transform" warning. Part of #1277.
