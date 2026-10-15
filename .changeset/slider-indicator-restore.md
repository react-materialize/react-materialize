---
"react-materialize": patch
---

Fix Slider re-initialisation (when `options`, `fullscreen` or the slides change): it no longer crashes when `indicators` is `false`, and the current slide's indicator is now marked active again, including when it's the first slide. Fixes #1246.
