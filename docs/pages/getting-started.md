---
title: Getting Started
keywords: getting started
sidebar: left-navigation-sidebar
toc: false
permalink: getting-started.html
folder:
summary:
---
 Fundamental Library Styles is a light-weight presentation layer using HTML and CSS with the following implementations under active development: [Angular](https://sap.github.io/fundamental-ngx/){:target="_blank"}, [React](https://sap.github.io/fundamental-react/){:target="_blank"}, and [Vue](https://sap.github.io/fundamental-vue/){:target="_blank"}. With Fundamental Library Styles’ library of stylesheets and HTML tags, developers can build consistent Fiori apps in any web-based technology.
 
<hr>

## Current version ([GitHub](https://github.com/SAP/fundamental-styles/releases){:target="_blank"})
{:.docs-header-h2}

````
{{site.library_version}}
````

## NPM
{:.docs-header-h2}

````
npm i fundamental-styles --save
````

## CDN link
{:.docs-header-h2}

```
https://unpkg.com/fundamental-styles@{{site.library_version}}/dist/fundamental-styles.css
```

## Fonts


SAP 72 font family was designed from the ground up and made it possible to meet SAP Fiori’s typographic requirements, including - legibility enhancements, font styles, brand voice, character set and language support.

<br>
<p class="docs-type_SAP">
<span class="docs-type_drop-cap">72</span>
A B C D E F G H I J K L M N O P Q R S T U V W X Y Z <br>
a b c d e f g h i j k l m n o p q r s t u v w x y z <br>
1 2 3 4 5 6 7 8 9 0 <br>
​‘ ? ’ “ ! ” ( % ) [ # ] { @ } / &amp; \ &lt; - + ÷ × = &gt; ® © $ € £ ¥ ¢ : ; , . *
</p>
<br>
<br>
<a href="https://experience.sap.com/72/" target="_blank">Learn More about the SAP 72 Font Family</a>
<br>


## Icons

See the [Icon Component]({{site.baseurl}}/components/icon.html) for a list of icon class names. See [Project Configuration](#Project-configuration) below for instructions to include SAP Fiori 3 icons in your project.

## Project Configuration

This project does not contain fonts and icons - they must be added to your project separately. Download [Font 72](https://experience.sap.com/fiori-design-web/downloads/#download-font-72) and [SAP icons](https://experience.sap.com/fiori-design-web/downloads/#sap-icon-font). After adding fonts and icons to your project, include the following in your css:

```
    @font-face {
        font-family: "72";
        src: url("path/to/fonts") format("woff"); // Bold, Light, Regular available in woff and woff2
        font-weight: normal;
        font-style: normal;
    };

    @font-face {
        font-family: "SAP-icons";
        src: url("path/to/icons") format("woff"); // available in woff, woff2 and ttf
        font-weight: normal;
        font-style: normal;
    }
```
<br>
If you are not supporting IE11, the recommended format is `woff2`. If supporting IE11, use `woff`.

