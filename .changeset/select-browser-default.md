---
"react-materialize": patch
---

Fix Select with `browserDefault` throwing `Cannot read properties of undefined (reading 'removeEventListener')` on unmount. Materialize is no longer initialised for browser-default selects (it ignores them anyway), toggling `browserDefault` now initialises or destroys Materialize accordingly, and `multiple` browser-default selects read their values from the native element. Fixes #1240.
