---
"react-materialize": patch
---

`Pagination` now falls back to page 1 when `activePage` is outside `1..items` (on first render, when `activePage` changes, or when `items` shrinks below the selected page). Previously an out-of-range `activePage` left no page active and the next button enabled. Changing `items` no longer affects a valid selected page. Fixes #1244.
