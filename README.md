# Fundamental Library Styles

[![npm version](https://badge.fury.io/js/fundamental-styles.svg)](https://badge.fury.io/js/fundamental-styles)
[![Build Status](https://travis-ci.com/SAP/fundamental-styles.svg?branch=master)](https://travis-ci.com/SAP/fundamental-styles)
[![Slack](https://img.shields.io/badge/slack-ui--fundamentals-blue.svg?logo=slack)](https://join.slack.com/t/ui-fundamentals/shared_invite/enQtNTIzOTU0Mzc2NTc5LWQzZWI5MWFhYjE5OTc4YzliN2JhOTc1ZjQxZTg1YjZiMWZiYzRkNjMwYzgyMmFkYmNhZDVjMWE5MDIzOWEzMmM)

## What is Fundamental Library Styles?

Fundamental Library Styles is a light-weight presentation layer that can be used with your UI framework of choice (e.g. Angular, React, Vue, etc.). With Fundamental Library Styles, library of stylesheets and HTML tags, developers can build consistent Fiori apps in any web-based technology.

**Learn more at http://sap.github.io/fundamental-styles/**

We are also working on [Angular](https://github.com/SAP/fundamental-ngx), [React](https://github.com/SAP/fundamental-react) and [Vue](https://github.com/SAP/fundamental-vue) implementations.


## Getting Started
The library is modular so you can use as little or as much as you need.

### CDN
The fully compiled, minified library is available via CDN for inclusion in your application.

```
<link href="//unpkg.com/fundamental-styles@latest/dist/fundamental-styles.css" rel="stylesheet">
```

### NPM Package

The compiled CSS for the full library and modules, e.g., core, layout, etc., are distributed via [NPM](https://www.npmjs.com/package/fundamental-styles).

````
npm install fundamental-styles --save
````

> NOTE: We only distribute compiled CSS for each component, not the full project or HTML for specific components. 

### Fonts & Icons

This project does not contain fonts and icons. See our [Getting Started Guide](https://sap.github.io/fundamental-styles/getting-started.html) for more information.

## Working with the Project

### Download and Installation

1. **Clone Repository** - Clone the repo using the git software of your choice or using the git command `git clone https://github.com/SAP/fundamental-styles.git`

1. **Install NPM Dependencies**: `npm install`

1. **Serve the development playground and documentation website locally** - `npm start`

### Project Dependencies
The project has the following prerequisites:

* Git (for downloading this repo)
* [Node LTS](https://nodejs.org/)

## SLA
Our Service Level Agreement. Fundamental Library Styles is aiming to deliver:

### SLA - What
* Consumable CSS that strives for [Fiori 3.0](https://www.sap.com/products/fiori.html) compliance.
* Reference HTML specification that consuming libraries **MUST** adhere to.

### SLA - How
* Themable components built on top of [SAP Theming Base Content](https://github.com/SAP/theming-base-content) by consuming the CSS Custom Properties delivered by the theming library
* Self-contained styles. That is, each component's style file contains all the styling needed to be rendered properly. External styling won't bleed-in internal styling won't blead-out. `Bleading in` means that CSS global reset won't affect the component and `bleading out` means that the component styling should not affect other HTML elements) 
* Accessibility support
  * Accessibility - Color contrast support for WCAG 2.0 level AA (4.5:1 for typical text)
  * Accessibility - Semantic HTML reference
  * Accessibility - Aria attributes noted when possible in HTML reference

This library is also being consumed by [Fundamental Library for Angular](https://github.com/SAP/fundamental-ngx), [Fundamental Library for React](https://github.com/SAP/fundamental-react), and [Fundamental Library for Vue](https://github.com/SAP/fundamental-vue).

The above SLA is the primary difference between this library and the earlier [Fundamental](https://github.com/SAP/fundamental).

## Support

If you encounter an issue, you can create a [ticket](https://github.com/SAP/fundamental-styles/issues/new/choose) or post on the [Fundamentals Slack channel](https://join.slack.com/t/ui-fundamentals/shared_invite/enQtNTIzOTU0Mzc2NTc5LThlOTYxOGE3NGIzZDY3MGYyNjRiYWFlM2U0OGFjMGQ5YTA1MWU0ZjRjOTZmMGIzYWU1MmMyNzNjMjJhNzZhYzY).


## Contributing

If you want to contribute, please check the [Contribution Guidelines](https://github.com/SAP/fundamental-styles/wiki/Contribution-Guidelines). Also check the [Development Guidelines](https://github.com/SAP/fundamental-styles/wiki/Development-Guidelines) and [Visual Testing Guide](https://github.com/SAP/fundamental-styles/wiki/Visual-Testing).


## Versioning

The `fundamental-styles` library follows [Semantic Versioning](https://semver.org/). These components strictly adhere to the `[MAJOR].[MINOR].[PATCH]` numbering system (also known as `[BREAKING].[FEATURE].[FIX]`).

Merges to the `master` branch will be published as a prerelease. Prereleases will include an **rc** version (_e.g._ `[MAJOR].[MINOR].[PATCH]-rc.[RC]`).

The following circumstances will be considered a MAJOR or BREAKING change:
* Droppping existing classnames, css variables, color names, color groups, spacing parameters
* The existing underlying HTML markup of a component is altered
* Non-visual HTML attribute changes/additions (such as `role`, `aria-*`, `data-*`)
  > Note: Fundamental Styles provides CSS directly, and HTML as reference to consumers. Because of the reference relationship of the HTML seen in Fundamental Styles, we want to be very clear when we alter that reference so that it is properly reflected in JS implementation libraries. Because of this, even non-visual changes will be treated as breaking.

The following circumstances will NOT be considered a MAJOR or BREAKING change:
* Introducing new  classnames, css variables, color names, color groups, spacing parameters
* Adding or modifying CSS properties and values of existing classnames.

## License

Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
This file is licensed under the Apache Software License, v. 2 except as noted otherwise in the [LICENSE](https://github.com/SAP/fundamental-styles/blob/master/LICENSE) file.
