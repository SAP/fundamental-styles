---
component: fd-form-label
title: Layouts/Page Footer
category: Layouts
selector: fd-form-label
cssFile: form-label.css
sourcePath: packages/styles/stories/Layouts/page-footer/page-footer.stories.js
tags: ["non-f3"]
dependencies: ["bar","form-label","icon","link","page-footer"]
relatedComponents: ["bar","form-label","icon","link","page-footer"]
stability: stable
generatedAt: 2026-05-28T20:12:00.854Z
---

# Layouts/Page Footer

The Page Footer displays at the bottom of the page, and includes the links, icons and copy Right string.

##Usage
**Use Page Footer if:**

-	You want to add the page footer of the UI, which defines the bottom of the page.
-	You want to display list of action at the bottom of the screen.

**Do not use Page footer if:**

-	You want to display collection of links for menu listing actions at the bottom of the screen.

Note: You may want to display components from right to left on the screen for international purposes. To display them as such, add the \

## Usage Guidelines

**Use Page Footer if:**

-	You want to add the page footer of the UI, which defines the bottom of the page.
-	You want to display list of action at the bottom of the screen.

## When Not To Use

-	You want to display collection of links for menu listing actions at the bottom of the screen.

Note: You may want to display components from right to left on the screen for international purposes. To display them as such, add the \

## Dependencies

This component depends on the following CSS files:

- `bar.css`
- `form-label.css`
- `icon.css`
- `link.css`
- `page-footer.css`

## Installation

```bash
npm install fundamental-styles
```

```html
<!-- Include theme -->
<link href="node_modules/fundamental-styles/dist/theming/sap_horizon.css" rel="stylesheet">

<!-- Include component CSS -->
<link href="node_modules/fundamental-styles/dist/form-label.css" rel="stylesheet">

<!-- Include dependencies -->
<link href="node_modules/fundamental-styles/dist/bar.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/form-label.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/icon.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/link.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/page-footer.css" rel="stylesheet">
```

## Basic Usage

```html
<div class="fd-page-footer fd-page-footer--xl">
    <div class="fd-page-footer__logo">
        <img src="//unpkg.com/fundamental-styles/dist/images/sap-logo.png" alt="page footer logo" />
    </div>
    <div class="fd-page-footer__container">
        <div class="fd-page-footer__row">
            <a class="fd-page-footer__row-item fd-link" id="fd-link-1" href="/" title="Supported Browser"><span class="fd-link__content">Supported Browser</span></a>
            <a class="fd-page-footer__row-item fd-link" id="fd-link-2" href="/" title="Security Disclosure"><span class="fd-link__content">Security Disclosure</span></a>
            <a class="fd-link fd-page-footer__row-item" id="fd-link-3" href="/" title="Privacy Statement"><span class="fd-link__content">Privacy Statement</span></a>
            <a class="fd-link fd-page-footer__row-item" id="fd-link-4" href="/" title="Cookie Statement"><span class="fd-link__content">Cookie Statement</span></a>
            <a class="fd-link fd-page-footer__row-item" id="fd-link-5" href="/" title="Participant Team"><span class="fd-link__content">Participant Team</span></a>
        </div>
        <div class="fd-page-footer__text">
            <span class="fd-form-label"> 1992-2021 @copyright all right reserved.</span>
        </div>
    </div>
</div>
```

## Related Components

This component works with or depends on:

- `bar`
- `form-label`
- `icon`
- `link`
- `page-footer`

## Design Tokens

Key CSS variables used by this component:

- `--colon`
- `--disabled`
- `--inline-help`
- `--required`
- `--sapField_RequiredColor`
- `--sapField_TextColor`
- `--sapFontLargeSize`
- `--sapFontSize`
- `--stand-alone`
- `--unit-description`
- `--wrap`

## Examples

### SingleLineLink

The Page Footer contains Image/logo, And list of links in the footer. It is responsive to tablet and mobile screen sizes.

```html
<div class="fd-page-footer fd-page-footer--xl">
    <div class="fd-page-footer__logo">
        <img src="//unpkg.com/fundamental-styles/dist/images/sap-logo.png" alt="page footer logo" />
    </div>
    <div class="fd-page-footer__container">
        <div class="fd-page-footer__row">
            <a class="fd-page-footer__row-item fd-link" id="fd-link-1" href="/" title="Supported Browser"><span class="fd-link__content">Supported Browser</span></a>
            <a class="fd-page-footer__row-item fd-link" id="fd-link-2" href="/" title="Security Disclosure"><span class="fd-link__content">Security Disclosure</span></a>
            <a class="fd-link fd-page-footer__row-item" id="fd-link-3" href="/" title="Privacy Statement"><span class="fd-link__content">Privacy Statement</span></a>
            <a class="fd-link fd-page-footer__row-item" id="fd-link-4" href="/" title="Cookie Statement"><span class="fd-link__content">Cookie Statement</span></a>
            <a class="fd-link fd-page-footer__row-item" id="fd-link-5" href="/" title="Participant Team"><span class="fd-link__content">Participant Team</span></a>
        </div>
        <div class="fd-page-footer__text">
            <span class="fd-form-label"> 1992-2021 @copyright all right reserved.</span>
        </div>
    </div>
</div>
```

### MultiLineLink

The Page Footer contains Image/logo, And list of links in the footer. To apply multiline link, add the `fd-page-footer__row` modifier class to the container element.

```html
<div class="fd-page-footer fd-page-footer--xl">
    <div class="fd-page-footer__logo">
        <img src="//unpkg.com/fundamental-styles/dist/images/sap-logo.png" alt="page footer logo"/>
    </div>
    <div class="fd-page-footer__container">
        <div class="fd-page-footer__row">
            <a class="fd-page-footer__row-item fd-link" id="fd-link-6" href="/" title="Supported Browser"><span class="fd-link__content">Supported Browser</span></a>
            <a class="fd-page-footer__row-item fd-link" id="fd-link-7" href="/" title="Security Disclosure"><span class="fd-link__content">Security Disclosure</span></a>
        </div>
        <div class="fd-page-footer__row">
            <a class="fd-page-footer__row-item fd-link" id="fd-link-8" href="/" title="Supported Browser"><span class="fd-link__content">Supported Browser</span></a>
            <a class="fd-page-footer__row-item fd-link" id="fd-link-9" href="/" title="Security Disclosure"><span class="fd-link__content">Security Disclosure</span></a>
            <a class="fd-page-footer__row-item fd-link" id="fd-link-10" href="/" title="Privacy Statement"><span class="fd-link__content">Privacy Statement</span></a>
            <a class="fd-page-footer__row-item fd-link" id="fd-link-11" href="/" title="Cookie Statement"><span class="fd-link__content">Cookie Statement</span></a>
            <a class="fd-page-footer__row-item fd-link" id="fd-link-12" href="/" title="Participant Team"><span class="fd-link__content">Participant Team</span></a>
        </div>
        <div class="fd-page-footer__text">
            <span class="fd-form-label"> 1992-2021 @copyright all right reserved.</span>
        </div>
    </div>
</div>
```

### ImageAndIconLink

Example of The Page Footer representing multiline link,and adding images in the code to represent the clickable images and multiline is achived by adding the `fd-page-footer__row` modifier class to the container element.

```html
<div class="fd-page-footer fd-page-footer--xl">
    <div class="fd-page-footer__logo">
        <img src="//unpkg.com/fundamental-styles/dist/images/sap-logo.png" alt="page footer logo"/>
    </div>
    <div class="fd-page-footer__container">
        <div class="fd-page-footer__row">
            <a href="#" id="fd-link-13"  class="fd-page-footer__row-item fd-link" tabindex="0">
                <span class="sap-icon--download sap-icon--s"></span>
                <span class="fd-link__content">icon and link</span>
            </a>
        </div>
        <div class="fd-page-footer__row">
            <a href="#" id="fd-link-14" class="fd-page-footer__row-item fd-link" tabindex="0">
                <span class="fd-link__content">
                    <img class="fd-page-footer__row-image" src="/assets/images/landscape/L1_Cover.jpg" alt="page footer clickable image link"/>
                    image link
                </span>
            </a>
            <a href="#" id="fd-link-15" class="fd-page-footer__row-item fd-link" tabindex="0">
                <span class="fd-link__content">
                    <img class="fd-page-footer__row-image" src="/assets/images/landscape/L2_Cover.jpg" alt="page footer clickable image link" />
                    image link
                </span>
            </a>
            <a class="fd-page-footer__row-item fd-link" id="fd-link-16" href="/" title="Privacy Statement"><span class="fd-link__content">Privacy Statement</span></a>
            <a class="fd-page-footer__row-item fd-link" id="fd-link-17" href="/" title="Cookie Statement"><span class="fd-link__content">Cookie Statement</span></a>
            <a class="fd-page-footer__row-item fd-link" id="fd-link-18" href="/" title="Participant Team"><span class="fd-link__content">Participant Team</span></a>
        </div>
        <div class="fd-page-footer__text">
            <span class="fd-form-label"> 1992-2021 @copyright all right reserved.</span>
        </div>
    </div>
</div>
```

### FooterWithDiffrentSize

Example of The Page Footer representing multiline lin, add the `--xl` `--lg` `--md` `--sm` size modifier class to the container element.

```html
<label class="fd-form-label">Page footer with 'xl' (Extra Large) size</label><div class="fd-page-footer fd-page-footer--xl">
    <div class="fd-page-footer__logo">
        <img src="//unpkg.com/fundamental-styles/dist/images/sap-logo.png" alt="page footer logo"/>
    </div>
    <div class="fd-page-footer__container">
        <div class="fd-page-footer__row">
            <a class="fd-page-footer__row-item fd-link" id="fd-link-19" href="/" title="Supported Browser"><span class="fd-link__content">Supported Browser</span></a>
            <a class="fd-page-footer__row-item fd-link" id="fd-link-20" href="/" title="Security Disclosure"><span class="fd-link__content">Security Disclosure</span></a>
            <a class="fd-page-footer__row-item fd-link" id="fd-link-21" href="/" title="Privacy Statement"><span class="fd-link__content">Privacy Statement</span></a>
            <a class="fd-page-footer__row-item fd-link" id="fd-link-22" href="/" title="Cookie Statement"><span class="fd-link__content">Cookie Statement</span></a>
            <a class="fd-page-footer__row-item fd-link" id="fd-link-23" href="/" title="Participant Team"><span class="fd-link__content">Participant Team</span></a>
        </div>
        <div class="fd-page-footer__text">
            <span class="fd-form-label"> 1992-2021 @copyright all right reserved.</span>
        </div>
    </div>
</div>

<label class="fd-form-label">Page footer with 'lg' (Large) size</label><div class="fd-page-footer fd-page-footer--lg">
    <div class="fd-page-footer__logo">
        <img src="//unpkg.com/fundamental-styles/dist/images/sap-logo.png" alt="page footer logo"/>
    </div>
    <div class="fd-page-footer__container">
        <div class="fd-page-footer__row">
            <a class="fd-page-footer__row-item fd-link" id="fd-link-24" href="/" title="Supported Browser"><span class="fd-link__content">Supported Browser</span></a>
            <a class="fd-page-footer__row-item fd-link" id="fd-link-25" href="/" title="Security Disclosure"><span class="fd-link__content">Security Disclosure</span></a>
            <a class="fd-page-footer__row-item fd-link" id="fd-link-26" href="/" title="Privacy Statement"><span class="fd-link__content">Privacy Statement</span></a>
            <a class="fd-page-footer__row-item fd-link" id="fd-link-27" href="/" title="Cookie Statement"><span class="fd-link__content">Cookie Statement</span></a>
            <a class="fd-page-footer__row-item fd-link" id="fd-link-28" href="/" title="Participant Team"><span class="fd-link__content">Participant Team</span></a>
        </div>
        <div class="fd-page-footer__text">
            <span class="fd-form-label"> 1992-2021 @copyright all right reserved.</span>
        </div>
    </div>
</div>

<label class="fd-form-label">Page footer with 'md' (Medium) size</label><div class="fd-page-footer fd-page-footer--md">
    <div class="fd-page-footer__logo">
        <img src="//unpkg.com/fundamental-styles/dist/images/sap-logo.png" alt="page footer logo"/>
    </div>
    <div class="fd-page-footer__container">
        <div class="fd-page-footer__row">
            <a class="fd-page-footer__row-item fd-link" id="fd-link-29" href="/" title="Supported Browser"><span class="fd-link__content">Supported Browser</span></a>
            <a class="fd-page-footer__row-item fd-link" id="fd-link-30" href="/" title="Security Disclosure"><span class="fd-link__content">Security Disclosure</span></a>
            <a class="fd-page-footer__row-item fd-link" id="fd-link-31" href="/" title="Privacy Statement"><span class="fd-link__content">Privacy Statement</span></a>
            <a class="fd-page-footer__row-item fd-link" id="fd-link-32" href="/" title="Cookie Statement"><span class="fd-link__content">Cookie Statement</span></a>
            <a class="fd-page-footer__row-item fd-link" id="fd-link-33" href="/" title="Participant Team"><span class="fd-link__content">Participant Team</span></a>
        </div>
        <div class="fd-page-footer__text">
            <span class="fd-form-label"> 1992-2021 @copyright all right reserved.</span>
        </div>
    </div>
</div>

<label class="fd-form-label">Page footer with 'sm' (Small) size</label><div class="fd-page-footer fd-page-footer--sm">
    <div class="fd-page-footer__logo">
        <img src="//unpkg.com/fundamental-styles/dist/images/sap-logo.png" alt="page footer logo"/>
    </div>
    <div class="fd-page-footer__container">
        <div class="fd-page-footer__row">
            <a class="fd-page-footer__row-item fd-link" id="fd-link-34" href="/" title="Supported Browser"><span class="fd-link__content">Supported Browser</span></a>
            <a class="fd-page-footer__row-item fd-link" id="fd-link-35" href="/" title="Security Disclosure"><span class="fd-link__content">Security Disclosure</span></a>
            <a class="fd-page-footer__row-item fd-link" id="fd-link-36" href="/" title="Privacy Statement"><span>Privacy Statement</span></a>
            <a class="fd-page-footer__row-item fd-link" id="fd-link-37" href="/" title="Cookie Statement"><span>Cookie Statement</span></a>
            <a class="fd-page-footer__row-item fd-link" id="fd-link-38" href="/" title="Participant Team"><span>Participant Team</span></a>
        </div>
        <div class="fd-page-footer__text">
            <span class="fd-form-label"> 1992-2021 @copyright all right reserved.</span>
        </div>
    </div>
</div>
```

## Accessibility

- Use semantic HTML elements where appropriate
- Include proper ARIA attributes for interactive elements
- Ensure keyboard navigation support
- Provide adequate color contrast

## Source

This documentation was automatically generated from: `packages/styles/stories/Layouts/page-footer/page-footer.stories.js`

For the latest updates and interactive examples, see [Storybook](https://sap.github.io/fundamental-styles/).
