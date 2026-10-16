---
"react-materialize": patch
---

Fix two React warnings in development: Checkbox no longer warns that it "is changing an uncontrolled input to be controlled" the first time it's clicked, and Modal's default Close button has a `key`. Part of #1277.
