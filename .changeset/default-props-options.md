---
"react-materialize": patch
---

Autocomplete, Carousel, DatePicker, Dropdown, Modal, Navbar, Parallax, Select, Slider, Tabs and TimePicker no longer set `Component.defaultProps`; their defaults are unchanged and now come from default parameters and module-level constants, so the default `options` object stays the same between renders and Materialize is not re-initialised. Generated ids (Autocomplete, Carousel `carouselId`, DatePicker, Dropdown, Modal, Select, Tabs `scope`, TimePicker) are now created once per instance and no longer change between renders.

Part of #1274.
