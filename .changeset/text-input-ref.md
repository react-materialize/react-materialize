---
"react-materialize": patch
---

TextInput keeps one ref to its input instead of creating a new one on every render. The character counter (`data-length`) is no longer set up again on every re-render, and it now works when TextInput is given a callback ref. The `ref` type accepts callback refs. Part of #1277.
