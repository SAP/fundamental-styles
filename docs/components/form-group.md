---
component: fd-form-group
title: Components/Switch
category: Components
selector: fd-form-group
cssFile: form-group.css
sourcePath: packages/styles/stories/Components/switch/switch.stories.js
tags: []
dependencies: ["form-label","icon","switch"]
relatedComponents: ["form-label","icon","switch"]
stability: stable
generatedAt: 2026-06-08T17:49:01.690Z
---

# Components/Switch

The switch mimics a physical switch, allowing users to set individual features (such as personalization or display settings) to either active or inactive. What the switch controls should be clarified with an inline label, while the state it’s currently in should be displayed on the switch itself.


##Usage
**Use the switch if:**

-	You want to enable users to set something as active or inactive (for example, within a **Dialog**).
-	You need to clearly show the mode or state of a setting.
-	The change takes immediate effect.


**Do not use the switch if:**

-	The user has to choose several options or perform extra steps for changes to become effective.
-	The setting requires a confirmation action or _Submit_ button before it can take effect. In this case, use a **Checkbox** instead.
-	It’s not clear if the control is showing a state or an action. In this case, use a **Checkbox** instead.

## Usage Guidelines

**Use the switch if:**

-	You want to enable users to set something as active or inactive (for example, within a **Dialog**).
-	You need to clearly show the mode or state of a setting.
-	The change takes immediate effect.

## When Not To Use

-	The user has to choose several options or perform extra steps for changes to become effective.
-	The setting requires a confirmation action or _Submit_ button before it can take effect. In this case, use a **Checkbox** instead.
-	It’s not clear if the control is showing a state or an action. In this case, use a **Checkbox** instead.

## Dependencies

This component depends on the following CSS files:

- `form-label.css`
- `icon.css`
- `switch.css`

## Installation

```bash
npm install fundamental-styles
```

```html
<!-- Include theme -->
<link href="node_modules/fundamental-styles/dist/theming/sap_horizon.css" rel="stylesheet">

<!-- Include component CSS -->
<link href="node_modules/fundamental-styles/dist/form-group.css" rel="stylesheet">

<!-- Include dependencies -->
<link href="node_modules/fundamental-styles/dist/form-label.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/icon.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/switch.css" rel="stylesheet">
```

## Basic Usage

```html
<div class="fd-form-group">
    <div class="fd-form-item">
        <div class="fd-form-label" id="label1">Default Switch</div>
        <label class="fd-switch">
            <span class="fd-switch__control">
                <input
                class="fd-switch__input"
                type="checkbox"
                name=""
                value=""
                aria-labelledby="label1"
                id="y21YO3251"
                />
                <div class="fd-switch__slider">
                    <div class="fd-switch__track">
                        <i role="presentation" class="fd-switch__icon fd-switch__icon--on sap-icon--accept"></i>
                        <span class="fd-switch__handle" role="presentation"></span>
                        <i role="presentation" class="fd-switch__icon fd-switch__icon--off sap-icon--less"></i>
                    </div>
                </div>
            </span>
        </label>
    </div>
    <div class="fd-form-item">
        <div class="fd-form-label" id="label7">Disabled Switch</div>
        <label class="fd-switch is-disabled">
            <span class="fd-switch__control">
                <input
                class="fd-switch__input"
                type="checkbox"
                name=""
                value=""
                aria-labelledby="label7"
                id="y21Y13431"
                />
                <div class="fd-switch__slider">
                    <div class="fd-switch__track">
                        <i role="presentation" class="fd-switch__icon fd-switch__icon--on sap-icon--accept"></i>
                        <span class="fd-switch__handle" role="presentation"></span>
                        <i role="presentation" class="fd-switch__icon fd-switch__icon--off sap-icon--less"></i>
                    </div>
                </div>
            </span>
        </label>
    </div>
</div>
```

## States

| Class | Description |
|-------|-------------|
| `is-disabled` | Disabled state |

## Related Components

This component works with or depends on:

- `form-label`
- `icon`
- `switch`

## Design Tokens

Key CSS variables used by this component:

- `--fdFormGroupPaddingInline`
- `--inline`
- `--no-border`
- `--no-padding`
- `--sapElement_LineHeight`
- `--sapFontHeaderFamily`
- `--sapGroup_TitleBackground`
- `--sapGroup_TitleBorderColor`
- `--sapGroup_TitleBorderWidth`
- `--sapGroup_TitleTextColor`
- `--sapGroup_Title_FontSize`
- `--with-spacing`
- `--wrap`

## Examples

### Default

The default switch displays what resembles a physical switch that toggles between an active and inactive state. It is displayed in cozy mode, which is ideal for mobile and small tablet screens. The switch should always be accompanied by a label that indicates its purpose.

```html
<div class="fd-form-group">
    <div class="fd-form-item">
        <div class="fd-form-label" id="label1">Default Switch</div>
        <label class="fd-switch">
            <span class="fd-switch__control">
                <input
                class="fd-switch__input"
                type="checkbox"
                name=""
                value=""
                aria-labelledby="label1"
                id="y21YO3251"
                />
                <div class="fd-switch__slider">
                    <div class="fd-switch__track">
                        <i role="presentation" class="fd-switch__icon fd-switch__icon--on sap-icon--accept"></i>
                        <span class="fd-switch__handle" role="presentation"></span>
                        <i role="presentation" class="fd-switch__icon fd-switch__icon--off sap-icon--less"></i>
                    </div>
                </div>
            </span>
        </label>
    </div>
    <div class="fd-form-item">
        <div class="fd-form-label" id="label7">Disabled Switch</div>
        <label class="fd-switch is-disabled">
            <span class="fd-switch__control">
                <input
                class="fd-switch__input"
                type="checkbox"
                name=""
                value=""
                aria-labelledby="label7"
                id="y21Y13431"
                />
                <div class="fd-switch__slider">
                    <div class="fd-switch__track">
                        <i role="presentation" class="fd-switch__icon fd-switch__icon--on sap-icon--accept"></i>
                        <span class="fd-switch__handle" role="presentation"></span>
                        <i role="presentation" class="fd-switch__icon fd-switch__icon--off sap-icon--less"></i>
                    </div>
                </div>
            </span>
        </label>
    </div>
</div>
```

### SemanticSwitch

The switch can be displayed with semantic colors, such as green for active and red for inactive. To display a semantic switch, add the \

```html
<div class="fd-form-group">
    <div class="fd-form-item">
        <label class="fd-form-label" id="label5">Semantic switch</label>
        <label class="fd-switch fd-switch--semantic">
            <span class="fd-switch__control">
                <input class="fd-switch__input" type="checkbox" aria-labelledby="label5" name="" value="" id="y21YO3251">
                <div class="fd-switch__slider">
                    <div class="fd-switch__track">
                        <i role="presentation" class="fd-switch__icon fd-switch__icon--on sap-icon--accept"></i>
                        <span class="fd-switch__handle" role="presentation"></span>
                        <i role="presentation" class="fd-switch__icon fd-switch__icon--off sap-icon--decline"></i>
                    </div>
                </div>
            </span>
        </label>
    </div>
</div>
```

### Text Switch

For technical compatibility reasons, it is also possible – although not advised – to have a switch that contains a text element, instead of an icon. Add the \

```html
<div class="fd-form-group">
    <div class="fd-form-item">
        <div class="fd-form-label" id="label3">Text Switch (off)</div>
        <label class="fd-switch fd-switch--text">
            <span class="fd-switch__control">
                <input class="fd-switch__input" type="checkbox" name="" aria-labelledby="label3" value="" id="y21Y677251">
                <div class="fd-switch__slider">
                    <div class="fd-switch__track">
                        <span class="fd-switch__text fd-switch__text--on">on</span>
                        <span class="fd-switch__handle" role="presentation"></span>
                        <span class="fd-switch__text fd-switch__text--off">off</span>
                    </div>
                </div>
            </span>
        </label>
    </div>
    <div class="fd-form-item">
        <div class="fd-form-label" id="label4">Text Switch (on)</div>
        <label class="fd-switch fd-switch--text">
            <span class="fd-switch__control">
                <input class="fd-switch__input" checked type="checkbox" aria-labelledby="label4" name="" value="" id="y21653431">
                <div class="fd-switch__slider">
                    <div class="fd-switch__track">
                        <span class="fd-switch__text fd-switch__text--on">on</span>
                        <span class="fd-switch__handle" role="presentation"></span>
                        <span class="fd-switch__text fd-switch__text--off">off</span>
                    </div>
                </div>
            </span>
        </label>
    </div>
</div>
```

## Accessibility

- Use semantic HTML elements where appropriate
- Include proper ARIA attributes for interactive elements
- Ensure keyboard navigation support
- Provide adequate color contrast

## Source

This documentation was automatically generated from: `packages/styles/stories/Components/switch/switch.stories.js`

For the latest updates and interactive examples, see [Storybook](https://sap.github.io/fundamental-styles/).
