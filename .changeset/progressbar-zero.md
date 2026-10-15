---
"react-materialize": patch
---

`ProgressBar` with `progress={0}` now renders a determinate bar at `width: 0%` instead of an empty bar with neither the `determinate` nor the `indeterminate` class. Fixes #1245.
