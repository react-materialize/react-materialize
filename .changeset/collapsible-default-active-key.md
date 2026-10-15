---
"react-materialize": patch
---

Fix Collapsible `defaultActiveKey`: the item at that index now starts expanded (rendered as `active`, with its body open), and in an accordion the active item follows header clicks. The `defaultActiveKey` type is now `number`, matching the item index it is compared against. Fixes #1239.
