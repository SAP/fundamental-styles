---
title: How to use Fundamental Styles SCSS with Angular
keywords: how to use scss
sidebar: left-navigation-sidebar
toc: false
permalink: resources/how-to-use-scss.html
folder: resources
summary: The following step-by-step guide will covers how to install Fundamental Styles in your angular project, import SCSS in your workflow and explain some built-in functions.
---

## Table of contents
{:.docs-header-h2}
1. [Prerequisites and Requirements](#prerequisites-and-requirements)
1. [Configuring Angular Project to use SCSS](#configuring-angular-project-to-use-scss)
1. [Installing Fundamental Styles via NPM](#installing-fundamental-styles-via-npm)
1. [Configuring and Importing SCSS source](#configuring-and-importing-scss-source)
1. [Selective Imports](#selective-imports)
1. [Core Functions and Mixins](#core-functions-and-mixins)


## Prerequisites and Requirements
{:.docs-header-h2}

- Familiarity using terminal or command prompt
- This guides assumes that the initial setup was done using [Angular 4](https://angular.io/){:target="_blank"} or higher and initial setup was doing using [Angular CLI](https://cli.angular.io/){:target="_blank"}
- [NPM](https://www.npmjs.com/){:target="_blank"} is installed globally


## Configuring Angular Project to use SCSS
{:.docs-header-h2}

Angular CLI does not configure the project to process SCSS files by default. Instead it is set to a CSS file located at the root of `src` folder. We recommend that you use keep all your SCSS files in one place under `src/scss/`.

To set the angular project to use SCSS:

1. Type `ng set defaults.styleExt scss` in command prompt or terminal at project root.

2. Open `.angular-cli.json` located at the project root and change the styles configuration to `"styles": [ "scss/app.scss"]`

3. Verify that the `styleExt` is set to `scss`

4. Create a folder named `scss` under the `src` folder and a also create the main SCSS file named `app.scss`

5. Remove the src/styles.css file. It will not be used.

The Basic SCSS configuration is now complete.


## Installing Fundamental Styles via NPM
{:.docs-header-h2}

Fundamental Styles is currently available as an [NPM package](https://www.npmjs.com/package/fundamental-styles){:target="_blank"} and a compiled and minified [CDN file](https://unpkg.com/fundamental-styles@latest/dist/fundamental-styles.min.css){:target="_blank"}. The following steps will cover how to install it via NPM.

1. Type `npm install fundamental-styles --save-dev`. This will install the package as a dev dependency.
2. Verify the installation was successful by typing `npm list fundamental-styles`

Fundamental Styles installation is now complete

## Configuring and Importing SCSS source
{:.docs-header-h2}

1. Open `scss/app.scss` file
2. Add the following line of code to define the icons path: <br><br> `$fd-icons-path: "~fundamental-styles/scss/icons/";`
3. Add the following line of code to define the fonts path: <br><br> `$fd-fonts-path: "~fundamental-styles/scss/fonts/";`
4. Add the following line of code to import SCSS source file: <br><br> `@import "~fundamental-styles/scss/fundamental-styles.scss";`

Importing Fundamental Styles SCSS is now complete

> **Note:** In order to render the icons and fonts correctly, you need to define the `$fd-icons-path` and `$fd-fonts-path` variables.

At this point, the contents of your `scss/app.scss` should look like this:

{% highlight css %}

$fd-icons-path: "~fundamental-styles/scss/icons/";
$fd-fonts-path: "~fundamental-styles/scss/fonts/";
@import "~fundamental-styles/scss/fundamental-styles.scss";

{% endhighlight %}

You can continue to build out your SCSS workflow based on your project needs.

## Selective Imports
{:.docs-header-h2}

Fundamental Styles is divided into several functional pieces. You may choose to import key features selectively to reduce the SCSS overhead in your project.

Here is an overview of the SCSS structure -

{% highlight css %}
scss/
 |- components/
 |- core/
 |- helpers/
 |- icons/
 |- layout/
 |- theme/
fundamental-styles.scss
 components.scss
 core.scss
 helpers.scss
 icons.scss
 layout.scss
{% endhighlight %}


- `fundamental-styles.scss`: Includes all components.
- `components.scss`: SCSS source for each components. The components are decoupled  with little or no dependency on other components.
- `core.scss`: The main purpose of core is elements and forms. It's like the reset and foundation.
- `helpers.scss`: Includes various helper functions.
- `icons.scss`: Fundamental Styles's custom icon library.
- `/theme/fundamental.scss`: Includes fonts.
- `layout.scss`: App level layout components such as top Overview of Core features bar, side nav, containers, panels, etc.

You can choose to selectively import parts of the library that best fits the need of your project. Please note that components, icons, layout and helpers have a dependency on `settings.scss`. Therefore, `settings.scss` should always be included in case if you are not importing `fundamental-styles.scss`. For fonts, make sure you are importing `theme/fundamental-styles.scss`

For selective import your `fundamental-styles.scss` content should look like this:

{% highlight css %}
$fd-icons-path: "~fundamental-styles/scss/icons/";
@import "~fundamental-styles/scss/theme/fundamental";
@import "~fundamental-styles/scss/core";
@import "~fundamental-styles/scss/{feature}";

{% endhighlight %}

### Angular components
{:.docs-header-h3}

If you are writing angular components using Fundamental Styles toolkit, you will need to import the following in your component's scss file:

{% highlight css %}
@import "~fundamental-styles/scss/core/settings";
@import "~fundamental-styles/scss/core/mixins";
@import "~fundamental-styles/scss/core/functions";
{% endhighlight %}


## Core Functions and Mixins
{:.docs-header-h2}

Fundamental Styles comes with some very useful built-in functions and mixins to help maintain consistency and quality of your SCSS source files. We recommend that you utilize these functions instead of hard coding colors, spacing, fonts, etc. in your code to keep CSS low specificity. Utilizing functions also helps in retaining the integrity of the theming options and makes it easy to switch between different themes such as a high-contrast theme for accessibility or a brand specific theme.

> **Note:** In order to use the functions and mixins, please ensure that you are importing the functions SCSS files <br>
> `@import "~fundamental-styles/scss/core/functions";` <br>
> `@import "~fundamental-styles/scss/core/mixins";`

## Color Function
{:.docs-header-h3}

If you have a need to apply a color to any of your scss/css class, you can use the built-in color function - <br> `fd-color(group, shade)`

{% highlight css %}
.foo {
  background-color: fd-color(neutral, 3); /* renders #ccdaeb */
  color: fd-color(text, 1); /* renders #21262c */
}
{% endhighlight %}

You can refer to the [colors page]({{site.baseurl}}/foundation/colors.html){:target="_blank"} for the complete list of the available color options.

## Spacing Function
{:.docs-header-h3}

```
fd-space("value")
```
The space function can be utilized for heights, padding, margins and other positioning. <br>





The design system defines a variety of spacing increments that are commonly used throughout and [all of those are available](https://github.com/SAP/fundamental-styles/blob/master/scss/_settings.scss#L18) using the mixin by passing the key. However, there are four units that will be used most often when building and extending components. These are accessible with special keys to apply consistent padding and margins.

{% highlight css %}
.foo {
  padding: fd-space("tiny"); /* renders 8px */
  margin-bottom: fd-space("small"); /* renders 24px */
}
{% endhighlight %}

The following spacing options are available -

{:.docs-table}
| Value           | Rendered Value |
|  --------------- | -------------- |
| `fd-space("tiny")` |  8px           |
|  `fd-space("small")`  |  16px          |
| `fd-space("medium")`   |  32px          |
| `fd-space("large")` |  48px          |

## Type Mixin
{:.docs-header-h3}

You can utilize the type mixin to render size, line height and weight - <br> `fd-type($size, $weight)`

{% highlight css %}
.foo__header {
    @include fd-type("3", "bold"); /* renders the css below */
    /* font-size: 1.75rem; */
    /* line-height: 1.4; */
    /* font-weight: 700; */
}
{% endhighlight %}

{:.docs-table}
| Option      | Value                                          |
| ----------- |----------------------------------------------- |
| `size`      | `-1`, `0`, `1`, `2`, `3`, `4`, `5`, `6` |
| `weight`    | `light`, `normal`, `bold`                           |
