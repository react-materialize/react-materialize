---
"react-materialize": major
---

Require React 18 or 19: the `react` and `react-dom` peer range is now `^18.0.0 || ^19.0.0`. React 17 is no longer supported; stay on react-materialize 4.x if you can't upgrade React yet.

The TypeScript types now declare `children` on Carousel, Modal, Pagination, Tab, Tabs and Textarea. `@types/react` 18 and later no longer add `children` to every component, so passing children to these components was a type error there.

Part of #1277.
