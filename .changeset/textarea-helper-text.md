---
"react-materialize": patch
---

`Textarea` no longer renders an empty `.helper-text` span when neither `error` nor `success` is set; the helper text is now rendered only when one of them is provided, matching `TextInput`. Fixes #1242.
