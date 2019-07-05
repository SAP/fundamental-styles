# Fundamental Styles

[![npm version](https://badge.fury.io/js/fundamental-styles.svg)](https://badge.fury.io/js/fundamental-styles)
[![Build Status](https://travis-ci.com/SAP/fundamental-styles.svg?branch=master)](https://travis-ci.com/SAP/fundamental-styles)
[![Slack](https://img.shields.io/badge/slack-ui--fundamentals-blue.svg?logo=slack)](https://ui-fundamentals.slack.com)

## What is Fundamental Styles?

Fundamental Styles is a light-weight presentation layer that can be used with your UI framework of choice (e.g. Angular, React, Vue, etc.). With Fundamental Styles’ library of stylesheets and HTML tags, developers can build consistent Fiori apps in any web-based technology.

**Learn more at http://sap.github.io/fundamental-styles/**

We are also working on [Angular](https://github.com/SAP/fundamental-ngx), [React](https://github.com/SAP/fundamental-react) and [Vue](https://github.com/SAP/fundamental-vue) implementations.


## Getting Started
The library is modular so you can use as little or as much as you need.

### CDN
The fully compiled, minified library is available via CDN for inclusion in your application.

```
<link href="//unpkg.com/fundamental-styles@latest/dist/fundamental-styles.min.css" rel="stylesheet">
```

### NPM Package

The compiled CSS for the full library and modules, e.g., core, layout, etc., are distributed via [NPM](https://www.npmjs.com/package/fundamental-styles) along with the SASS source.

This gives you incredible flexibility to use individual components and enable [advanced customization](https://github.com/SAP/fundamental-styles/wiki/Advanced-Customization) options.

````
npm install fundamental-styles --save
````

> NOTE: We only distribute the fonts, icons and compiled CSS and [the SASS source](https://github.com/SAP/fundamental-styles/tree/master/scss), not the full project or HTML for specific components. 


## Working with the Project

### Download and Installation

1. **Clone Repository** - Clone the repo using the git software of your choice or using the git command `git clone https://github.com/SAP/fundamental-styles.git`

1. **Install NPM Dependencies**: `npm install`

1. **Install Ruby Gems** - These gems are needed to be installed for the documentation site. Navigate to the `docs` folder and `gem install ruby bundler jekyll`

1. **Serve the documentation website locally** - `npm start`

1. **Serve the development playground locally**: `npm run start:playground`

### Project Dependencies
The project has the following prerequisites:

* Git (for downloading this repo)
* [Node LTS](https://nodejs.org/)
* Ruby (for running the documentation website locally)
* Docker (for running the visual regression testing framework)


## Known Issues

### Configuring icons path when importing SCSS

If you are importing .scss files in your project, the icons path needs to be configured in your project's .scss file before the Fundamental Styles scss import as described below. Please note that the path variable name has to be `$fd-icons-path` in order to override the default value set in `scss/icons/icon.scss`.

```
$fd-icons-path : "../node_modules/fundamental-styles/scss/icons/"; // should be declared before the scss import

@import "../node_modules/fundamental-styles/scss/fundamental-styles.scss";

```

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
* An existing unit test is altered to account for either of the above

The following circumstances will NOT be considered a MAJOR or BREAKING change:
* Introducing new  classnames, css variables, color names, color groups, spacing parameters
* Non-visual HTML attribute changes/additions (such as `role`, `aria-*`, `data-*`)
* Adding or modifying CSS properties and values of existing classnames.
* An existing unit test is altered to account for non-visual HTML attribute changes/additions (such as `role`, `aria-*`, `data-*`)

## License

Copyright (c) 2019 SAP SE or an SAP affiliate company. All rights reserved.
This file is licensed under the Apache Software License, v. 2 except as noted otherwise in the [LICENSE](https://github.com/SAP/fundamental-styles/blob/master/LICENSE) file.
