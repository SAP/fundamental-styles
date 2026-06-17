---
component: fd-dialog-docs-static
title: Components/Settings
category: Components
selector: fd-dialog-docs-static
cssFile: dialog-docs-static.css
sourcePath: packages/styles/stories/Components/settings/settings.stories.js
tags: ["uxc"]
dependencies: ["bar","button","dialog","icon","icon-tab-bar","input","list","settings","title","toolbar"]
relatedComponents: ["bar","button","dialog","icon","icon-tab-bar","input","list","title","toolbar"]
stability: stable
---

# Components/Settings

The Settings Dialog allows users to personalize their Fiori experience by adjusting various settings.<br><br> <h3>Layout and Structure</h3>
    The Settings Dialog follows a standard dialog format with a split layout inside the content area. On the left, a list of option groups is displayed. Selecting a group reveals its corresponding settings in the detail area on the right.<br><br> 
    <ul>
      <li><b>List Area - </b>The area which contains the list of settings.</li>
      <li><b>Detail Area - </b>This area contains:.
        <ul>
          <li><b>Header - </b>The area which contains the title and the header of the selected group is settings. Varies based on selection. It's built using Toolbar, IconTabBar and Bar components.</li>
          <li><b>Content - </b>Some detail pages may contain forms to lay out various controls depending on the type of settings. Content Area can be scrollable.</li>
        </ul>
      </li>
      <li><b>Footer - </b>Follows a standard Page Footer layout</li>
    </ul>
- <code>.fd-settings</code> applied on an element with class <code>.fd-dialog</code>
  - <code>.fd-settings\\_\\_dialog-content</code> applied on an element with class <code>.fd-dialog\\_\\_content</code>
    - <code>.fd-settings\\_\\_dialog-body</code> applied on an element with class <code>.fd-dialog\\_\\_body</code>
      - <code>.fd-settings\\_\\_list-area</code>
        - <code>.fd-settings\\_\\_list-container</code>
          - <code>.fd-settings\\_\\_list</code> with modifier <code>.fd-settings\\_\\_list--footer</code> applied on an element with class <code>.fd-list</code>
      - <code>.fd-settings\\_\\_detail-area</code>
          - <code>.fd-settings\\_\\_header</code>  applied on an element with class <code>.fd-bar fd-bar--header</code>
          - <code>.fd-settings\\_\\_tab-bar</code>  applied on an element with class <code>.fd-icon-tab-bar</code>
          - <code>.fd-settings\\_\\_content</code> with modifiers <code>.fd-settings\\_\\_content--no-background</code> and <code>.fd-settings\\_\\_content--no-padding</code> used individually or applied on an element with class <code>.fd-icon-tab-bar\\_\\_panel</code>

## Dependencies

This component depends on the following CSS files:

- `bar.css`
- `button.css`
- `dialog.css`
- `icon.css`
- `icon-tab-bar.css`
- `input.css`
- `list.css`
- `settings.css`
- `title.css`
- `toolbar.css`

## Installation

```bash
npm install fundamental-styles
```

```html
<!-- Include theme -->
<link href="node_modules/fundamental-styles/dist/theming/sap_horizon.css" rel="stylesheet">

<!-- Include component CSS -->
<link href="node_modules/fundamental-styles/dist/dialog-docs-static.css" rel="stylesheet">

<!-- Include dependencies -->
<link href="node_modules/fundamental-styles/dist/bar.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/button.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/dialog.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/icon.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/icon-tab-bar.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/input.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/list.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/settings.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/title.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/toolbar.css" rel="stylesheet">
```

## Basic Usage

```html
<section class="fd-dialog-docs-static fd-dialog fd-settings fd-dialog--active">
    <div class="fd-dialog__content fd-settings__dialog-content" role="dialog" aria-modal="true" aria-labelledby="dialog-title-1">
        <div class="fd-dialog__body fd-settings__dialog-body" >
            <div class="fd-settings__container">
                <div class="fd-settings__list-area">
                    <div class="fd-bar fd-bar--header fd-bar--header-with-subheader">
                        <div class="fd-bar__left">
                            <div class="fd-bar__element">
                                <h5 class="fd-title fd-title--h5" aria-label="text">Settings</h5>
                            </div>
                        </div>
                    </div>
                    <div class="fd-bar fd-bar--subheader">
                        <div class="fd-bar__middle">
                            <div class="fd-bar__element fd-bar__element--full-width">
                                <input class="fd-input fd-input-group__input" type="text" placeholder="Search" aria-label="input">
                            </div>
                        </div>
                    </div>
                    <div class="fd-settings__list-container">
                        <ul class="fd-list fd-list--navigation fd-list--navigation-indication fd-list--no-border fd-settings__list" role="list">
                            <li tabindex="-1" role="listitem" class="fd-list__item fd-list__item--link">
                                <a tabindex="0" class="fd-list__link fd-list__link--navigation-indicator" href="#">
                                    <i role="presentation" class="fd-list__icon sap-icon--globe"></i>
                                    <span class="fd-list__title">Settings Item</span>
                                </a>
                            </li>
                            <li tabindex="-1" role="listitem" class="fd-list__item fd-list__item--link">
                                <a tabindex="0" class="fd-list__link fd-list__link--navigation-indicator" href="#">
                                    <i role="presentation" class="fd-list__icon sap-icon--globe"></i>
                                    <span class="fd-list__title">Settings Item</span>
                                </a>
                            </li>
                            <li tabindex="-1" role="listitem" class="fd-list__item fd-list__item--link">
                                <a tabindex="0" class="fd-list__link fd-list__link--navigation-indicator" href="#">
                                    <i role="presentation" class="fd-list__icon sap-icon--globe"></i>
                                    <span class="fd-list__title">Settings Item</span>
                                </a>
                            </li>
                            <li tabindex="-1" role="listitem" class="fd-list__item fd-list__item--link">
                                <a tabindex="0" class="fd-list__link fd-list__link--navigation-indicator" href="#">
                                    <i role="presentation" class="fd-list__icon sap-icon--globe"></i>
                                    <span class="fd-list__title">Settings Item</span>
                                </a>
                            </li>
                            <li tabindex="-1" role="listitem" class="fd-list__item fd-list__item--link">
                                <a tabindex="0" class="fd-list__link fd-list__link--navigation-indicator" href="#">
                                    <i role="presentation" class="fd-list__icon sap-icon--globe"></i>
                                    <span class="fd-list__title">Settings Item</span>
                                </a>
                            </li>
                            <li tabindex="-1" role="listitem" class="fd-list__item fd-list__item--link">
                                <a tabindex="0" class="fd-list__link fd-list__link--navigation-indicator" href="#">
                                    <i role="presentation" class="fd-list__icon sap-icon--globe"></i>
                                    <span class="fd-list__title">Settings Item</span>
                                </a>
                            </li>
                            <li tabindex="-1" role="listitem" class="fd-list__item fd-list__item--link">
                                <a tabindex="0" class="fd-list__link fd-list__link--navigation-indicator" href="#">
                                    <i role="presentation" class="fd-list__icon sap-icon--globe"></i>
                                    <span class="fd-list__title">Settings Item</span>
                                </a>
                            </li>
                            <li tabindex="-1" role="listitem" class="fd-list__item fd-list__item--link">
                                <a tabindex="0" class="fd-list__link fd-list__link--navigation-indicator" href="#">
                                    <i role="presentation" class="fd-list__icon sap-icon--globe"></i>
                                    <span class="fd-list__title">Settings Item</span>
                                </a>
                            </li>
                        </ul>

                        <ul class="fd-list fd-list--navigation fd-list--navigation-indication fd-list--no-border fd-settings__list fd-settings__list--footer" role="list">
                            <li tabindex="-1" role="listitem" class="fd-list__item fd-list__item--link">
                                <a tabindex="0" class="fd-list__link fd-list__link--navigation-indicator" href="#">
                                    <i role="presentation" class="fd-list__icon sap-icon--globe"></i>
                                    <span class="fd-list__title">Fixed Settings Item</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="fd-settings__detail-area">
                    <div class="fd-bar fd-bar--header fd-settings__header">
                        <div class="fd-bar__left">
                            <div class="fd-bar__element">
                                <h5 class="fd-title fd-title--h5" aria-label="text">Settings Item</h5>
                            </div>
                        </div>
                    </div>

                    <div class="fd-settings__content fd-settings__content--no-background">
                        Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
                    </div>
                </div>
            </div>
        </div>
        <footer class="fd-dialog__footer fd-bar fd-bar--footer">
            <div class="fd-bar__right">
                <div class="fd-bar__element">
                    <button class="fd-dialog__decisive-button fd-button fd-button--transparent">
                        Close
                    </button>
                </div>
            </div>
        </footer>
    </div>
</section>
```

## Related Components

This component works with or depends on:

- `bar`
- `button`
- `dialog`
- `icon`
- `icon-tab-bar`
- `input`
- `list`
- `title`
- `toolbar`

## Examples

### L-XL-XXL

```html
<section class="fd-dialog-docs-static fd-dialog fd-settings fd-dialog--active">
    <div class="fd-dialog__content fd-settings__dialog-content" role="dialog" aria-modal="true" aria-labelledby="dialog-title-1">
        <div class="fd-dialog__body fd-settings__dialog-body" >
            <div class="fd-settings__container">
                <div class="fd-settings__list-area">
                    <div class="fd-bar fd-bar--header fd-bar--header-with-subheader">
                        <div class="fd-bar__left">
                            <div class="fd-bar__element">
                                <h5 class="fd-title fd-title--h5" aria-label="text">Settings</h5>
                            </div>
                        </div>
                    </div>
                    <div class="fd-bar fd-bar--subheader">
                        <div class="fd-bar__middle">
                            <div class="fd-bar__element fd-bar__element--full-width">
                                <input class="fd-input fd-input-group__input" type="text" placeholder="Search" aria-label="input">
                            </div>
                        </div>
                    </div>
                    <div class="fd-settings__list-container">
                        <ul class="fd-list fd-list--navigation fd-list--navigation-indication fd-list--no-border fd-settings__list" role="list">
                            <li tabindex="-1" role="listitem" class="fd-list__item fd-list__item--link">
                                <a tabindex="0" class="fd-list__link fd-list__link--navigation-indicator" href="#">
                                    <i role="presentation" class="fd-list__icon sap-icon--globe"></i>
                                    <span class="fd-list__title">Settings Item</span>
                                </a>
                            </li>
                            <li tabindex="-1" role="listitem" class="fd-list__item fd-list__item--link">
                                <a tabindex="0" class="fd-list__link fd-list__link--navigation-indicator" href="#">
                                    <i role="presentation" class="fd-list__icon sap-icon--globe"></i>
                                    <span class="fd-list__title">Settings Item</span>
                                </a>
                            </li>
                            <li tabindex="-1" role="listitem" class="fd-list__item fd-list__item--link">
                                <a tabindex="0" class="fd-list__link fd-list__link--navigation-indicator" href="#">
                                    <i role="presentation" class="fd-list__icon sap-icon--globe"></i>
                                    <span class="fd-list__title">Settings Item</span>
                                </a>
                            </li>
                            <li tabindex="-1" role="listitem" class="fd-list__item fd-list__item--link">
                                <a tabindex="0" class="fd-list__link fd-list__link--navigation-indicator" href="#">
                                    <i role="presentation" class="fd-list__icon sap-icon--globe"></i>
                                    <span class="fd-list__title">Settings Item</span>
                                </a>
                            </li>
                            <li tabindex="-1" role="listitem" class="fd-list__item fd-list__item--link">
                                <a tabindex="0" class="fd-list__link fd-list__link--navigation-indicator" href="#">
                                    <i role="presentation" class="fd-list__icon sap-icon--globe"></i>
                                    <span class="fd-list__title">Settings Item</span>
                                </a>
                            </li>
                            <li tabindex="-1" role="listitem" class="fd-list__item fd-list__item--link">
                                <a tabindex="0" class="fd-list__link fd-list__link--navigation-indicator" href="#">
                                    <i role="presentation" class="fd-list__icon sap-icon--globe"></i>
                                    <span class="fd-list__title">Settings Item</span>
                                </a>
                            </li>
                            <li tabindex="-1" role="listitem" class="fd-list__item fd-list__item--link">
                                <a tabindex="0" class="fd-list__link fd-list__link--navigation-indicator" href="#">
                                    <i role="presentation" class="fd-list__icon sap-icon--globe"></i>
                                    <span class="fd-list__title">Settings Item</span>
                                </a>
                            </li>
                            <li tabindex="-1" role="listitem" class="fd-list__item fd-list__item--link">
                                <a tabindex="0" class="fd-list__link fd-list__link--navigation-indicator" href="#">
                                    <i role="presentation" class="fd-list__icon sap-icon--globe"></i>
                                    <span class="fd-list__title">Settings Item</span>
                                </a>
                            </li>
                        </ul>

                        <ul class="fd-list fd-list--navigation fd-list--navigation-indication fd-list--no-border fd-settings__list fd-settings__list--footer" role="list">
                            <li tabindex="-1" role="listitem" class="fd-list__item fd-list__item--link">
                                <a tabindex="0" class="fd-list__link fd-list__link--navigation-indicator" href="#">
                                    <i role="presentation" class="fd-list__icon sap-icon--globe"></i>
                                    <span class="fd-list__title">Fixed Settings Item</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="fd-settings__detail-area">
                    <div class="fd-bar fd-bar--header fd-settings__header">
                        <div class="fd-bar__left">
                            <div class="fd-bar__element">
                                <h5 class="fd-title fd-title--h5" aria-label="text">Settings Item</h5>
                            </div>
                        </div>
                    </div>

                    <div class="fd-settings__content fd-settings__content--no-background">
                        Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
                    </div>
                </div>
            </div>
        </div>
        <footer class="fd-dialog__footer fd-bar fd-bar--footer">
            <div class="fd-bar__right">
                <div class="fd-bar__element">
                    <button class="fd-dialog__decisive-button fd-button fd-button--transparent">
                        Close
                    </button>
                </div>
            </div>
        </footer>
    </div>
</section>
```

### L-XL-XXL (with Tabs and overflowing content)

```html
<section class="fd-dialog-docs-static fd-dialog fd-settings fd-dialog--active">
    <div class="fd-dialog__content fd-settings__dialog-content" role="dialog" aria-modal="true" aria-labelledby="dialog-title-1">
        <div class="fd-dialog__body fd-settings__dialog-body" >
            <div class="fd-settings__container">
                <div class="fd-settings__list-area">
                    <div class="fd-bar fd-bar--header fd-bar--header-with-subheader">
                        <div class="fd-bar__left">
                            <div class="fd-bar__element">
                                <h5 class="fd-title fd-title--h5" aria-label="text">Settings</h5>
                            </div>
                        </div>
                    </div>
                    <div class="fd-bar fd-bar--subheader">
                        <div class="fd-bar__middle">
                            <div class="fd-bar__element fd-bar__element--full-width">
                                <input class="fd-input fd-input-group__input" type="text" placeholder="Search" aria-label="input">
                            </div>
                        </div>
                    </div>
                    <div class="fd-settings__list-container">
                        <ul class="fd-list fd-list--navigation fd-list--navigation-indication fd-list--no-border fd-settings__list" role="list">
                            <li tabindex="-1" role="listitem" class="fd-list__item fd-list__item--link">
                                <a tabindex="0" class="fd-list__link fd-list__link--navigation-indicator" href="#">
                                    <i role="presentation" class="fd-list__icon sap-icon--globe"></i>
                                    <span class="fd-list__title">Settings Item</span>
                                </a>
                            </li>
                            <li tabindex="-1" role="listitem" class="fd-list__item fd-list__item--link">
                                <a tabindex="0" class="fd-list__link fd-list__link--navigation-indicator" href="#">
                                    <i role="presentation" class="fd-list__icon sap-icon--globe"></i>
                                    <span class="fd-list__title">Settings Item</span>
                                </a>
                            </li>
                            <li tabindex="-1" role="listitem" class="fd-list__item fd-list__item--link">
                                <a tabindex="0" class="fd-list__link fd-list__link--navigation-indicator" href="#">
                                    <i role="presentation" class="fd-list__icon sap-icon--globe"></i>
                                    <span class="fd-list__title">Settings Item</span>
                                </a>
                            </li>
                            <li tabindex="-1" role="listitem" class="fd-list__item fd-list__item--link">
                                <a tabindex="0" class="fd-list__link fd-list__link--navigation-indicator" href="#">
                                    <i role="presentation" class="fd-list__icon sap-icon--globe"></i>
                                    <span class="fd-list__title">Settings Item</span>
                                </a>
                            </li>
                            <li tabindex="-1" role="listitem" class="fd-list__item fd-list__item--link">
                                <a tabindex="0" class="fd-list__link fd-list__link--navigation-indicator" href="#">
                                    <i role="presentation" class="fd-list__icon sap-icon--globe"></i>
                                    <span class="fd-list__title">Settings Item</span>
                                </a>
                            </li>
                            <li tabindex="-1" role="listitem" class="fd-list__item fd-list__item--link">
                                <a tabindex="0" class="fd-list__link fd-list__link--navigation-indicator" href="#">
                                    <i role="presentation" class="fd-list__icon sap-icon--globe"></i>
                                    <span class="fd-list__title">Settings Item</span>
                                </a>
                            </li>
                            <li tabindex="-1" role="listitem" class="fd-list__item fd-list__item--link">
                                <a tabindex="0" class="fd-list__link fd-list__link--navigation-indicator" href="#">
                                    <i role="presentation" class="fd-list__icon sap-icon--globe"></i>
                                    <span class="fd-list__title">Settings Item</span>
                                </a>
                            </li>
                            <li tabindex="-1" role="listitem" class="fd-list__item fd-list__item--link">
                                <a tabindex="0" class="fd-list__link fd-list__link--navigation-indicator" href="#">
                                    <i role="presentation" class="fd-list__icon sap-icon--globe"></i>
                                    <span class="fd-list__title">Settings Item</span>
                                </a>
                            </li>
                            <li tabindex="-1" role="listitem" class="fd-list__item fd-list__item--link">
                                <a tabindex="0" class="fd-list__link fd-list__link--navigation-indicator" href="#">
                                    <i role="presentation" class="fd-list__icon sap-icon--globe"></i>
                                    <span class="fd-list__title">Settings Item</span>
                                </a>
                            </li>
                            <li tabindex="-1" role="listitem" class="fd-list__item fd-list__item--link">
                                <a tabindex="0" class="fd-list__link fd-list__link--navigation-indicator" href="#">
                                    <i role="presentation" class="fd-list__icon sap-icon--globe"></i>
                                    <span class="fd-list__title">Settings Item</span>
                                </a>
                            </li>
                            <li tabindex="-1" role="listitem" class="fd-list__item fd-list__item--link">
                                <a tabindex="0" class="fd-list__link fd-list__link--navigation-indicator" href="#">
                                    <i role="presentation" class="fd-list__icon sap-icon--globe"></i>
                                    <span class="fd-list__title">Settings Item</span>
                                </a>
                            </li>
                            <li tabindex="-1" role="listitem" class="fd-list__item fd-list__item--link">
                                <a tabindex="0" class="fd-list__link fd-list__link--navigation-indicator" href="#">
                                    <i role="presentation" class="fd-list__icon sap-icon--globe"></i>
                                    <span class="fd-list__title">Settings Item</span>
                                </a>
                            </li>
                            <li tabindex="-1" role="listitem" class="fd-list__item fd-list__item--link">
                                <a tabindex="0" class="fd-list__link fd-list__link--navigation-indicator" href="#">
                                    <i role="presentation" class="fd-list__icon sap-icon--globe"></i>
                                    <span class="fd-list__title">Settings Item</span>
                                </a>
                            </li>
                            <li tabindex="-1" role="listitem" class="fd-list__item fd-list__item--link">
                                <a tabindex="0" class="fd-list__link fd-list__link--navigation-indicator" href="#">
                                    <i role="presentation" class="fd-list__icon sap-icon--globe"></i>
                                    <span class="fd-list__title">Settings Item</span>
                                </a>
                            </li>
                            <li tabindex="-1" role="listitem" class="fd-list__item fd-list__item--link">
                                <a tabindex="0" class="fd-list__link fd-list__link--navigation-indicator" href="#">
                                    <i role="presentation" class="fd-list__icon sap-icon--globe"></i>
                                    <span class="fd-list__title">Settings Item</span>
                                </a>
                            </li>
                            <li tabindex="-1" role="listitem" class="fd-list__item fd-list__item--link">
                                <a tabindex="0" class="fd-list__link fd-list__link--navigation-indicator" href="#">
                                    <i role="presentation" class="fd-list__icon sap-icon--globe"></i>
                                    <span class="fd-list__title">Settings Item</span>
                                </a>
                            </li>
                            <li tabindex="-1" role="listitem" class="fd-list__item fd-list__item--link">
                                <a tabindex="0" class="fd-list__link fd-list__link--navigation-indicator" href="#">
                                    <i role="presentation" class="fd-list__icon sap-icon--globe"></i>
                                    <span class="fd-list__title">Settings Item</span>
                                </a>
                            </li>
                            <li tabindex="-1" role="listitem" class="fd-list__item fd-list__item--link">
                                <a tabindex="0" class="fd-list__link fd-list__link--navigation-indicator" href="#">
                                    <i role="presentation" class="fd-list__icon sap-icon--globe"></i>
                                    <span class="fd-list__title">Settings Item</span>
                                </a>
                            </li>
                        </ul>

                        <ul class="fd-list fd-list--navigation fd-list--navigation-indication fd-list--no-border fd-settings__list fd-settings__list--footer" role="list">
                            <li tabindex="-1" role="listitem" class="fd-list__item fd-list__item--link">
                                <a tabindex="0" class="fd-list__link fd-list__link--navigation-indicator" href="#">
                                    <i role="presentation" class="fd-list__icon sap-icon--globe"></i>
                                    <span class="fd-list__title">Fixed Settings Item</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="fd-settings__detail-area">
                    <div class="fd-bar fd-bar--header fd-settings__header">
                        <div class="fd-bar__left">
                            <div class="fd-bar__element">
                                <h5 class="fd-title fd-title--h5" aria-label="text">Settings Item</h5>
                            </div>
                        </div>
                    </div>

                    <div class="fd-icon-tab-bar fd-icon-tab-bar--sm fd-settings__tab-bar">
                        <ul role="tablist" class="fd-icon-tab-bar__header">
                            <li role="presentation" class="fd-icon-tab-bar__item">
                                <a role="tab" class="fd-icon-tab-bar__tab" aria-selected="true" href="#section1" id="tab1">
                                    <span class="fd-icon-tab-bar__tag">Tab Text</span>
                                </a>
                            </li>
                            <li role="presentation" class="fd-icon-tab-bar__item">
                                <a role="tab" class="fd-icon-tab-bar__tab" href="#section2" id="tab2">
                                    <span class="fd-icon-tab-bar__tag">Tab Text</span>
                                </a>
                            </li>
                        </ul>
                        <section role="tabpanel" class="fd-icon-tab-bar__panel fd-settings__content fd-settings__content--no-background" id="section1" aria-labelledby="tab1">
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
                        </section>
                        <section role="tabpanel" class="fd-icon-tab-bar__panel fd-settings__content" id="section2" aria-labelledby="tab2" hidden>
                            Section
                        </section>
                    </div>
                </div>
            </div>
        </div>
        <footer class="fd-dialog__footer fd-bar fd-bar--footer">
            <div class="fd-bar__right">
                <div class="fd-bar__element">
                    <button class="fd-dialog__decisive-button fd-button fd-button--transparent">
                        Close
                    </button>
                </div>
            </div>
        </footer>
    </div>
</section>
```

## Accessibility

- Use semantic HTML elements where appropriate
- Include proper ARIA attributes for interactive elements
- Ensure keyboard navigation support
- Provide adequate color contrast

## Source

This documentation was automatically generated from: `packages/styles/stories/Components/settings/settings.stories.js`

For the latest updates and interactive examples, see [Storybook](https://sap.github.io/fundamental-styles/).
