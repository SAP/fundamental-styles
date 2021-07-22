[![REUSE status](https://api.reuse.software/badge/github.com/SAP/theming-base-content)](https://api.reuse.software/info/github.com/SAP/theming-base-content)

# SAP Theming Base Content

This repository provides color, font and metric definitions of SAP themes to be used by application UIs and UI frameworks.

## Description
The SAP Theming Base Content contains all necessary data to connect to the SAP global theming infrastructure.
The content exposes the central set of colors, metrics and resources of a theme which can be connected by HTML based UI frameworks to get the right values for their specific CSS.
The consumption is done by the usage of parameter sets exposed in files of the Base Content.
When a HTML based UI framework uses the exposed parameters,, it also benefits from the fact that it is  integrated in the branding tool of SAP, the [UI Theme Designer](https://cloudplatform.sap.com/capabilities/product-info.UI-Theme-Designer.1bb55da4-292a-4f33-8d97-49ba1d1638f0.html), allowing a customer to create his own custom theme based on SAP themes.

## Installation
This repository contains all the source files and generated files a framework needs to connect to the theming infrastructure.
There is no installation needed to consume the files.
You can clone the repository or get wanted the ZIP/TAR from the release section of this repository.
You can also consume the `SAP theming Base Content` via [npm](https://docs.npmjs.com/getting-started/what-is-npm):
```sh
npm install @sap-theming/theming-base-content
```

## Usage
The SAP Theming Base Content is structured in the “content” of the project folder
The Base Framework content is backward compatible. Therefore, the latest released version can be used for all older versions.

## Content
The SAP Theming Base Content contains
1) the [Less CSS](http://lesscss.org/) parameter set exposed in the file [base.less](./content/Base/baseLib/sap_fiori_3/base.less)`. The parameters values are defined by CSS values or calculation formulas with selcontained dependencies.
2) the [CSS Variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_variables) parameter set exposed by the CSS file [css_variables.css](./content/Base/baseLib/sap_fiori_3/css_variables.css). The parameter dependencies are resolved.
3) the [SASS Variables](https://sass-lang.com/) parameter set exposed by the SCSS file [sass_variables.scss](./content/Base/baseLib/sap_fiori_3/sass_variables.scss). The parameter dependencies are resolved.
4) the [Less CSS](http://lesscss.org/) parameter set exposed by the less file [less_variables.less](./content/Base/baseLib/sap_fiori_3/less_variables.less). The parameter dependencies are resolved.
5) the JSON parameter set exposed by the less file [variables.json](./content/Base/baseLib/sap_fiori_3/variables.json). The parameter dependencies are resolved.
6) resources (fonts, images, SVGs etc.)

## Consumption of CSS Parameters
The CSS parameters are exposed by a file `css_variables.css` in each theme folder
e.g. `Base/baseLib/sap_fiori_3/css_varables.css`

After you have downloaded this file, you can use the calculated CSS parameter values.

### Resource Parameters
CSS parameters which refer to an URL (e.g. `sapCompanyLogo`) are handled a bit different. The CSS variables are applied as a simple string token replacement in the browser. Therefore, there is no URL resolution based on the location of the parameter definition. As a workaround, we introduced a CSS class for each resource CSS parameter  that can be used by the consuming HTML.

```css
...
.background-image--sapCompanyLogo {
    background-image: var(--sapCompanyLogo);
}
...
```

The class selector contains the declaration type of the class property and the name of the CSS parameter.

### SAP Custom Font Parameters
The custom fonts which have to be used for the specific theme are not declared by a font-face at-rule.
There are CSS parameters pointing to the locations.

```css
:root {
    ...
    --sapFontUrl_72_Regular_woff2: url('../../../Base/baseLib/baseTheme/fonts/72-Regular.woff2');
    --sapFontUrl_72_Regular_woff: url('../../../Base/baseLib/baseTheme/fonts/72-Regular.woff');
    --sapFontUrl_72_...
}
```
Unfortunately, these parameters cannot be used to define a font-face declaration. It seems that the font-face is not part of the “:root” scope. Therefore, it is necessary to define the font declaration you need in your own CSS.

## Consumption of LESS Parameters
Samples how to refer the parameters and integrate in theming infrastructure are documented in the module `@sap-theming/theming-examples-less` (not yet available).

## Serve Resources in NodeJS (express Example)
You can `require` the theming-base-content module to get the location of the resources.
```js
'use strict';

const express = require("express");
const app = express();
const baseContentResourcePath = require('@sap-theming/theming-base-content').resourcePath;

app.use(express.static(baseContentResourcePath));

app.listen(3000, () => console.log('Try http://localhost:3000/Base/baseLib/baseTheme/fonts/72-Regular.woff2'));
```

## Contributing
This repository is containing the SAP Open Source Theming Content releases build internally. It is a channel for external distribution. This repository is not open for external contributions.
