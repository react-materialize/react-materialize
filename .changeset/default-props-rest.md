---
"react-materialize": patch
---

Breadcrumb, Button, Caption, Card, Checkbox, Chip, Collapsible, CollapsibleItem, MediaBox, Pagination, Preloader, SearchForm, SideNav, Spinner, Switch, TextInput and Textarea no longer set `Component.defaultProps`; their defaults are unchanged and now come from default parameters and module-level constants, so they keep working on React versions that ignore `defaultProps` on function components.

Generated ids of Checkbox, MediaBox, SideNav, Switch, TextInput and Textarea now stay stable across re-renders instead of being regenerated on every render.

Part of #1274.
