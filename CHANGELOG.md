# Changelog

### 3.10.0

- removes Enzyme
- upgrades dependencies to react 17

### 3.9.9

- fixes Tabs children not using `idx` prop #1202
- migrates some specs to RTL and configures testing library

### 3.9.8

- add `ref` to `TextInput` type definition #1181
- npm: dependencies fix #1180
- storybook: fix typo #1183

### 3.9.7

- npm: dependencies fix
- fix: Flatten folder while copying TypeScript declaration files #1175

### 3.9.6

- npm dependencies fix
- npm: install/use copyfiles pckg #1172
- Make onSelect on CollapsibleItem optional (TypeScript) #1171

### 3.9.5

- Allow for Dropdown children to also be Fragments. #1168

### 3.9.4

- Fix href requirement in CollectionItem's typings #1151
- fix: call updateTextFields on AutoComplete so label doesn't overlap #1154
- Allow Dropdown to accept null, li, and Divider children. #1164

### 3.9.3

- Various ts fixes
- media-box to use ref
- npm fix vulnerabilities
- export spinner
- fix spinner size prop

### 3.9.2

- Modal: deep compare options dependency

### 3.9.1

- Modal: remove children from dependency

### 3.9.0

- JS: add children as dependency for JS components
- Range: add step prop
- ts: various fixes
- storybook: fix deprecation warning

### 3.8.11

- Button: update tooltipOptions types/proptypes
- Textarea: add onChange handler

### 3.8.10

- Switch: migrate test to RTL

### 3.8.9

- storybook: update welcome page

### 3.8.8

- npm: fix vulnerability issues

### 3.8.7

- Modal: add quotes to undefined type

### 3.8.6

- Modal: add warning and failsafe for root prop

### 3.8.5

- Modal: fix renrendering bug

### 3.8.4

- Modal: remove Element as a proptype
- TS: add various fixes

### 3.8.3

- TS: copy definition files on build

### 3.8.2

- TS: add types path to package.json

### 3.8.1

- TS: Complete type definition for all components

### 3.8.0

- Modal: new interface prop `root` to fix SSR

### 3.7.1

- Storybook: fix proptypes description in docs

### 3.7.0

- Autocomplete: stateless/hooks #953 #907 #1070
- Modal: stateless/hooks #1075 #959
- Button: stateless/hooks #958
- CardTitle: stateless/hooks #947
- Table: stateless/hooks #951
- Pagination: stateless/hooks #962 #1076
- Collapsible: stateless/hooks #939
- Navbar: stateless/hooks #965
- Tabs: stateless/hooks / add type definition #1079
- Section: refactor to stateless / add type definition #1080
- Carousel: refactor to stateless / use hooks / add type definition #1081
- Textarea: refactor to stateless / use hooks / add type definition #1082

### 3.6.1

- Dropdown: support false/null elements #996
- Navbar: add `centerChildren` interface #979
- Navbar: fixes brand alignment bug #981
- Dropdown: use hooks #956 #1066
- DatePicker: use hooks #998 #1067
- TimePicker: use hooks #943 #1068

### 3.6.0

- initial type definition setup, started with Autocomplete

### 3.5.14

- version bump to configure github actions

### 3.5.13

- version bump to configure github actions

### 3.5.12

- version bump to configure github actions

### 3.5.11

- move id to defaultProps and use idgen

### 3.5.10

- integrate github actions as CI

### 3.5.9

- Classnames: move back to dependencies #990
- Checkbox: use hooks

### 3.5.8

- Slider: refactor using hooks (#944)
- Collection: refactor using hooks (#954)
- Button: remove waves effect when disabled (#960)

### 3.5.7

- [BUG] fixes SideNav unmounte error about trigger ref

### 3.5.6

- Restore storybook-info-addon

### 3.5.5

- Remove storybook-info-addon

### 3.5.4

- Restore babel as bundler

### 3.5.3

- Move react react-dom to peer dependencies

### 3.5.2

- UserView: convert to stateless #941
- Parallax: convert to stateless and use hooks #935
- Preloader: convert to stateless #938
- Col: convert to stateless #937
- Icon: convert to stateless #936
- Preloader: convert to stateless #938
- Section: convert to stateless #934

### 3.5.1

- MediaBox: Convert to stateless #946
- SideNav: Convert to stateless #948
- Footer: Convert to stateless #964
- eslint: react hooks plugin #949
- Chip: Convert to stateless #933
- SideNavItem: Convert to stateless #932
- Range: Convert to stateless #930
- Configure parcel bundler #929

### 3.5.0

- Feature: Add file type support to `TextInput` #926

### 3.4.1

- Fixes bug on button always rendering icon #906

### 3.4.0

- Allow `icon` to be a node instead of string #890
- Sets default icon props to a few components #890

### 3.3.5

- fix dropdown-navbar-id #877

### 3.3.4

- security fix
- Not render helperText for InputText if !error. For decries height of InputText. #893
- Fix defaultChecked property of Checkbox.js #891

### 3.3.3

- security fix and install babel-loader

### 3.3.2

- Fix radio group checked prop #883

### 3.3.1

- Dynamically update `checked` prop for Switch component #861
- Modal correctly closes itself when unmounted #865

### 3.3.0

- Props not spreaded correctly to Chip #848
- Add note about supporting origin library #863
- Mediabox renders children insted of image #834

### 3.2.2

- Feat/textarea character counter #858
- Add Character Counter to TextInput #849
- Avoid non-unique id warning on TextInput #851
- Custom error/success messages for Textarea #852
- Select other attributes #857

### 3.2.1

- Fixes `checked` checkbox bug #854

### 3.2.0

- Pass value prop as value to input #831
- Select component improvements #822
- Parallax story now uses the correct props #844
- Checkbox component indeterminate state broken #809
- Add missing Collapsible stories #814
- Allow TextInput to have node as an Icon #840

### 3.1.1

- Fix broken Navbar import

### 3.1.0

- Add `defaultProps` to Dropdown #825
- Remove unnecessary `div`; use `Fragment` in Modal #827
- Dynamically update `checked` props in Checkbox #824
- Allow the use of `picture` HTML element in Parallax #795
- Add missing Chip stories #812
- Add missing Navbar stories #813
- Swipeable Tabs broken and className not passed to Tab #816

### 3.0.5

- Apply iconClassName to textarea icon #820
- Add SideNav stories #807
- Fix textarea custom css classes #806

### 3.0.4

- Textarea now correctly handles layout classes (CloudPower97 #794)
- Fix Datepicker now correctly onChange (CloudPower97 #800)
- Caption component is now exported (CloudPower97 #802)
- Add defaultProps to TimePicker component (CloudPower97 #803)
- Add missing knobs to TextInput story (CloudPower97 #805)
- Fix FAB to Toolbar bug (CloudPower97 #808)
- Add missing Collection stories (CloudPower97 #810)

### 3.0.3

- Add Parallax story (onluiz #771)
- Add Preloader story (onluiz #772)
- Fix SideNav init bug (onluiz #773)
- Fix Welcome story typo
- Fix close icon on Chip

### 3.0.2

- Upgrade to storybook 5
- Install knobs and notes
- Add samples knobs and notes to Autocomplete
- Install latest eslint and react

### 3.0.1

- Fix bug where dropdown could not be destroyed
- Fix Collapsible not being able to be `expandable`
- Remove `NavItem` <li> wrapper
- Fix Button story warnings

### 3.0.0

- update all components to `materialize-css@1.x`
- remove old docs and replace with storybook
- remove jQuery dependency

### 2.6.0

- update to babel7

### 2.5.2

- revert #690
- mocks `idgen` globally

### 2.5.1

- NPM vulnerability fix
- `<Container/>` enhancement (CloudPower97 #705)
- `<Chip/>` refactor (CloudPower97 #543)

### 2.5.0

- Feature `<Autocomplete/>` supports arrow navigation (mustaphaturhan #690)
- Adds `xl` size to `<Input/>` (CloudPower97 #676)

### 2.4.8

- Fixes input#checkbox bug (Marzon #680)

### 2.4.7

- Updates npm scripts
- Added `pull` and `push` modifiers to `<Columns/>` (CloudPower97 #647)

### 2.4.6

- Fixes multiple input bug (trishtzy #658)
- Adds centerLogo prop to Navbar (CloudPower97 #534)
- Adds FAB into Toolbar (CloudPower97 #537)
- Adds extra classes to `<Container />` (CloudPower97 #648)
- Docs improvements (dmitry-yudakov #640)

### 2.4.5

- Fix docs vulnerabilities

### 2.4.4

- Fix vulnerable dependencies + linting

### 2.4.3

- Fixes tabs update bug (osztenkurden #634)

### 2.4.2

- Fix travis authentication

### 2.4.1

- No significant changes

### 2.4.0

- [NEW Feature] File Input (niross #570)
- Fixed `Icon` not having refs (XavierForks #572)
- Add Toast update to docs (hnrchrdl #576)

### 2.3.3

- Fixes lib not uploading

### 2.3.2

- Fixes non-flashing Preloader (dmitry-yudakov #564)

### 2.3.1

- Fixes `autocomplete` with similar values (niross #556)

### 2.3.0

- All components now accept `className` prop

### 2.2.1

- Col component now supports xl (CloudPower97 #541)
- Horizontal card fix (CloudPower97 #538)
- Section improvement (CloudPower97 #533)
- Add Tooltips for buttons. (anshulk #530)

### 2.2.0

- Added Jest as testing framework
- Migrated all specs to Jest
- Removed mocha/sinon setup

### 2.1.4

- Adding prettier to project (onluiz #519)

### 2.1.3

- add onClick suport for NavItem component (onluiz #517)

### 2.1.2

- Adds `fixed` prop to `SideNav`
- Initialize Tabs on componentWillReceiveProps

### 2.1.1

- Controlled Modal (Thomas Quick #495)
- Update Mediabox example
- Chip default prop close (sanketsingh24 #490)

### 2.1.0

- Adds `open` prop to Modal allowing it to 'opened' to mount

### 2.0.6

- Updates to materialize-css@0.100.2

### 2.0.3

- (BUG) Fixes travis not publishing to npm

### 2.0.2

- (BUG) Fixes `<CollapsibleItem />` not responding to `expanded` prop

### 2.0.1

- Downgrade materialize-css to 0.98.0

### 2.0.0

- (BREAKING) Use `ReactDOM.createPortal` for Modal
- (BREAKING) Remove `OverlayTrigger` and `Overlay`

### 1.1.3

- Fixes Unknown props in Collapsible
- Update link to https (Koolstr #466)

### 1.1.2

- Fixes unresolved ghpages-materialize.css in docs (Pechalka #441)
- Fixes `<Input />` radio group state handling (Pechalka #440)

### 1.1.1

- Add ID prop to Autocomplete (mlileikis #432)
- Add array as `<Input />` value propType (AleF83 #430)

### 1.1.0

- Upgrades to react16/reactDOM16

### 1.0.18

- Fixes `<Input />` renderIcon issue (chris-gooley)

### 1.0.17

- Adds ref to text `<Input />`

### 1.0.16

- Implement Time picker (chris-gooley)

### 1.0.15

- [Input] Prefix icon for date and select inputs (norbajunior)
- Autocomplete - controlled input (dmitry-yudakov)

### 1.0.14

- Removed horizontal support for `<Card />` (DOM structure issues)
- Removed default props from OverlayTrigger

### 1.0.13

- Restored OverlayTrigger initialized bug
- Autocomplete fixes (Taisuke Yasuda)

### 1.0.12

- Fixes Modal Overlay not triggered (nsingal)
- Autocomplete fixes (TaisukeYasuda)
- NavItem rendering children
- Fixes `OverlayTrigger` not initialized bug

### 1.0.11

- Moves react-live to dev dependency
- Dropdown fixes (id and options casing) (lloydwatkin)

### 1.0.10

- Fixes NavItem bug allowing multiple children

### 1.0.9

- NavItem accepts children to be a string or a node

### 1.0.8

- Improve Collapsible Behaviour (mattBlackDesign)
- Added labelClassName in Input component for type radio button... (piyushdhamecha)

### 1.0.7

- Change CollapsibleItem header prop type to 'any'

### 1.0.6

- Add sample of button used as link to docs (ruediste)
- Pass className to dropdown trigger

### 1.0.5

- Add <Carousel />
- Fix <MediaBox /> not initialized bug (pokeguys)
- Fix <Button /> documentation (ruediste)

### 1.0.4

- Fix issue with `striped` prop in Table Component (bodunadebiyi)

### 1.0.3

- Fixes PaginationButton issue with ReactRouter
- Row can receive custom props
- Navbar new prop fixed
- Minor fixes

### 1.0.2

- Fixes #143 - Pagination bug + specs

### 1.0.1

- Changes Icon props to bool instead of node

### 1.0.0

- Fixes react warnings
- Adds datepicker input
- Fixes Icon component

### 0.18.4

- Update in README about help-wanted tag in issues
- Makes trigger optional in Modal/OverlayTrigger
- Adds options to NavBar init

### 0.18.3

- Remove autocomplete warnings

### 0.18.2

- Add autocomplete component
- Fixes Breadcrumb proptypes warning
