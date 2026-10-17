---
"react-materialize": patch
---

Fix React warnings in development. Checkbox no longer warns that it "is changing an uncontrolled input to be controlled" the first time it's clicked, or the reverse when the `checked` prop is removed; it also no longer sets the box directly on the DOM, since React already does that through `checked`. Modal's default Close button has a `key`. Part of #1277.
