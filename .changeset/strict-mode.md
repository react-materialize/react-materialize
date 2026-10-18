---
"react-materialize": patch
---

Make the components safe under React's StrictMode, which in development mounts every component, runs its effect cleanups and mounts it again:

- Modal rendered nothing in StrictMode, and after its `options` changed it could no longer be opened. Modal now re-initialises when `options` change, keeps a controlled `open` modal open across that re-initialisation, and closes an open modal before destroying it, so unmounting it no longer leaves page scrolling locked.
- Carousel no longer shows a second set of indicators after it re-initialises.
- MediaBox no longer throws "The node to be removed is not a child of this node" when it unmounts.
- DatePicker and TimePicker close an open picker before destroying it, so unmounting one no longer leaves page scrolling locked.
- TextInput and Textarea destroy their character counter in the effect cleanup, so removing `data-length` now removes the counter.

Because an open Modal, DatePicker or TimePicker is now closed when it unmounts, its close callbacks fire then: `onCloseStart`, plus `onCloseEnd` after the close animation, for Modal and TimePicker, and `onClose` for DatePicker.

Modal now renders directly into `root` (`document.body` by default) instead of into an extra `<div>` it appended there. Update any CSS or code that relied on that wrapper, such as a `body > div > .modal` selector.

Part of #1277.
