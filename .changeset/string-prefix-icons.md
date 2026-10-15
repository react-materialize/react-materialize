---
"react-materialize": patch
---

Fix `icon` handling in Select, Textarea, SideNavItem and Autocomplete: a string icon (e.g. `icon="cloud"`) no longer crashes rendering and renders as a Material icon, like TextInput. An icon element now keeps its own `className` instead of having it replaced by `prefix` (also in TextInput). Fixes #1241.
