# getbasis-layout
This is a css module for the Basis.

## repository
* https://github.com/getbasis/layout/

## Basis
* Repository: https://github.com/getbasis/basis/
* Documents : http://getbasis.github.io/

## Get Started
### Install
```
$ npm install getbasis
$ npm install getbasis-layout
```

### Stylus
```
@import 'node_modules/getbasis-layout/src/stylus/basis';
@import 'node_modules/getbasis-layout/src/stylus/layout/container';
```

## Using sticky header

The header fixed to top and the contents is under the header.

### HTML
```
<div class="_l-container" data-bs-layout="container">
  <header class="_l-header" data-bs-layout="header" data-bs-header-layout="sticky"></header>
  <div class="_l-contents" data-bs-layout="contents"></div>
</div>
```

### JavaScript
```
import BasisStickyHeader from 'node_modules/getbasis-layout/src/js/sticky-header.js';
new BasisStickyHeader();
```

## Using overlay header

The header fixed to top and overlay the contents.

### HTML
```
<div class="_l-container" data-bs-layout="container">
  <header class="_l-header" data-bs-layout="header" data-bs-header-layout="overlay"></header>
  <div class="_l-contents" data-bs-layout="contents"></div>
</div>
```

### JavaScript
```
import BasisStickyHeader from 'node_modules/getbasis-layout/src/js/sticky-header.js';
new BasisStickyHeader();
```

## Using sticky footer

The footer fixed to bottom when the contents is smaller than the height of the window.

### HTML
```
<div class="_l-container" data-bs-layout="container" data-bs-container-layout="sticky-footer">
  <header class="_l-header" data-bs-layout="header"></header>
  <div class="_l-contents" data-bs-layout="contents"></div>
</div>
```

## Using disable window scroll

Scroll the contents of the page instead of scrolling the window.

### HTML
```
<html data-bs-disable-window-scroll="true">
  <div class="_l-container" data-bs-layout="container">
    <header class="_l-header" data-bs-layout="header"></header>
    <div class="_l-contents" data-bs-layout="contents"></div>
  </div>
</html>
```

### JavaScript

When with using sticky or overlay header.

```
import BasisStickyHeader from 'node_modules/getbasis-layout/src/js/sticky-header.js';
import BasisFixedHeader from 'node_modules/getbasis-layout/src/js/fixed-header.js';
new BasisStickyHeader();
new BasisFixedHeader();
```

## Browser support
Modern Browser and IE10+

## License
MIT License
