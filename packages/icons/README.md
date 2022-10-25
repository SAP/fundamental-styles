# Fundamental Library Next SVG Icons

This package contains SVG Fiori icons. This is subpackage of main [SAP/fundamental-styles](https://sap.github.io/fundamental-styles/) repository.
For icon list, demos and more detailed examples visit main repository demo.

## Package content

In the package you will find raw SVG icons, generated sprite SVG and their counterpart style CSS files.

## Usage

### Independent SVGs

You can load separately, lazily, when they are needed in document.
Include `@fundamental-styles/fn-icons/dist/fn-icons-independent.css` file in your document, and you are good to go.

Syntax for icons:

```html
<span class="fn-icon fn-icon--{icon-name}"></span>
```

Replace `{icon-name}` with desired icon name. To modify color and size of icon apply `background-color`, `width`
and `height` CSS properties.
Please take into account [browser compatibility](https://caniuse.com/mdn-css_properties_mask-image)
when using this method. Styles are using `mask-image` CSS property.

### Sprite SVG

You can load every icon at once and also use SVG HTML tags to use them in your document.
Include `@fundamental-styles/fn-icons/dist/fn-icons-sprite.css` file in your document for getting helper modifier
classes. Please take into account [browser compatibility](https://caniuse.com/mdn-svg_elements_use_href)
when using this method.

Syntax for icons:

```html

<svg class="fn-icon-sprite">
    <use xlink:href="@fundamental-styles/fn-icons/dist/fiori-sprite.svg#{icon-name}"></use>
</svg>
```

Replace `{icon-name}` with desired icon name. To modify color and size of icon apply `fill`, `width`
and `height` CSS properties or SVG attributes. By default, icons have size of 16X16 px and black color.


### CDN

The fully compiled, minified library is available via [unpkg CDN](https://unpkg.com/) from version `0.21.0-rc.114` for inclusion in your application.

For `prerelease` version use

```html
For sprite CSS
<link href='https://unpkg.com/@fundamental-styles/fn-icons@prerelease/dist/fn-icons-sprite.css' rel='stylesheet'>

For independent SVGs CSS
<link href='https://unpkg.com/@fundamental-styles/fn-icons@prerelease/dist/fn-icons-independent.css' rel='stylesheet'>

```

For `latest` stable version use

```html

For sprite CSS
<link href='https://unpkg.com/@fundamental-styles/fn-icons@latest/dist/fn-icons-sprite.css' rel='stylesheet'>

For independent SVGs CSS
<link href='https://unpkg.com/@fundamental-styles/fn-icons@latest/dist/fn-icons-independent.css' rel='stylesheet'>
```

You can also include specific version of library into your HTML via using

```html
For sprite CSS
<link href='https://unpkg.com/@fundamental-styles/fn-icons@{versionNumber}/dist/fn-icons-sprite.css' rel='stylesheet'>

For independent SVGs CSS
<link href='https://unpkg.com/@fundamental-styles/fn-icons@{versionNumber}/dist/fn-icons-independent.css' rel='stylesheet'>
```
where you should replace `{versionNumber}` with desired version number. For example with `0.24.4`

When using CDN provided sprite variant, use
`xlink:href="https://unpkg.com/@fundamental-styles/fn-icons/dist/fiori-sprite.svg#{icon-name}"` in `use` tag
for getting sprite SVG.
