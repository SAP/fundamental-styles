---
component: fd-prompt-input
title: Components/Forms/Prompt Input
category: Components
selector: fd-prompt-input
cssFile: prompt-input.css
sourcePath: packages/styles/stories/Components/Forms/prompt-input/prompt-input.stories.js
tags: ["ai","experimental"]
dependencies: []
relatedComponents: []
stability: experimental
generatedAt: 2026-06-08T17:49:02.107Z
---

# Components/Forms/Prompt Input

> **🧪 EXPERIMENTAL**: This component is experimental and its API may change.

The Prompt Input component allows the user to write custom instructions in natural language, so that AI is guided to generate content tailored to user needs.
<br><b>Note: The component is in an experimental state.</b>

## Installation

```bash
npm install fundamental-styles
```

```html
<!-- Include theme -->
<link href="node_modules/fundamental-styles/dist/theming/sap_horizon.css" rel="stylesheet">

<!-- Include component CSS -->
<link href="node_modules/fundamental-styles/dist/prompt-input.css" rel="stylesheet">

```

## Basic Usage

```html
<h4>User prompt with no input</h4>
<div>
    <div class="fd-prompt-input">
        <label class="fd-form-label" for="input-1">User prompt:</label>
        <div class="fd-prompt-input__wrapper">
            <div class="fd-prompt-input__inner-wrapper">
                <div class="fd-input-group">
                    <input class="fd-input fd-input fd-input-group__input" type="text" placeholder="Ask me anything..." id="input-1">
                    <span class="fd-input-group__addon fd-input-group__addon--button">
                        <button class="fd-input-group__button fd-button fd-button--transparent fd-button" aria-label="Clear">
                            <i class="sap-icon--decline"></i>
                        </button>
                    </span>
                </div>
                <span class="fd-prompt-input__counter">10 characters remaining</span>
            </div>
            <button aria-label="Add to cart" class="fd-button fd-button--emphasized" disabled>
                <i class="sap-icon--paper-plane"></i>
            </button>
        </div>
    </div>
</div>

<h4>User prompt with input</h4>
<div>
    <div class="fd-prompt-input">
        <label class="fd-form-label" for="input-1">User prompt:</label>
        <div class="fd-prompt-input__wrapper">
            <div class="fd-prompt-input__inner-wrapper">
                <div class="fd-input-group">
                    <input class="fd-input fd-input fd-input-group__input" type="text" placeholder="Ask me anything..." value="input">
                    <span class="fd-input-group__addon fd-input-group__addon--button">
                        <button class="fd-input-group__button fd-button fd-button--transparent fd-button" aria-label="Clear">
                            <i class="sap-icon--decline"></i>
                        </button>
                    </span>
                </div>
                <span class="fd-prompt-input__counter">5 characters remaining</span>
            </div>
            <button aria-label="Add to cart" class="fd-button fd-button--emphasized">
                <i class="sap-icon--paper-plane"></i>
            </button>
        </div>
    </div>
</div>

<h4>User prompt with input and error</h4>
<div>
    <div class="fd-prompt-input">
        <label class="fd-form-label" for="input-1">User prompt:</label>
        <div class="fd-prompt-input__wrapper">
            <div class="fd-prompt-input__inner-wrapper">
                <div class="fd-form-input-message-group fd-popover">
                    <div class="fd-popover__control" aria-controls="popoverError" aria-expanded="true" aria-haspopup="true">
                        <div class="fd-input-group is-error">
                            <input class="fd-input fd-input fd-input-group__input" type="text" placeholder="Ask me anything..." value="exceeding characters">
                            <span class="fd-input-group__addon fd-input-group__addon--button">
                                <button class="fd-input-group__button fd-button fd-button--transparent fd-button" aria-label="Clear">
                                    <i class="sap-icon--decline"></i>
                                </button>
                            </span>
                        </div>
                    </div>
                    <div class="fd-popover__body fd-popover__body--input-message-group fd-popover__body--no-arrow" aria-hidden="false" id="popoverError">
                        <div class="fd-form-message fd-form-message--error" >Error message</div>
                    </div>
                </div>
                <span class="fd-prompt-input__counter">10 characters over the limit</span>
            </div>
            <button aria-label="Add to cart" class="fd-button fd-button--emphasized">
                <i class="sap-icon--paper-plane"></i>
            </button>
        </div>
    </div>
</div>
```

## States

| Class | Description |
|-------|-------------|
| `is-error` | Error state |

## BEM Elements

This component uses the following BEM elements:

- `fd-prompt-input__counter`
- `fd-prompt-input__inner-wrapper`
- `fd-prompt-input__wrapper`

## Examples

### Basic Sample

The Prompt Input is built on top of [Input Group](https://fundamental-styles.netlify.app/?path=/docs/sap-fiori-components-forms-input-group--docs) and inherits its states (disabled, read-only, information, etc.).

```html
<h4>User prompt with no input</h4>
<div>
    <div class="fd-prompt-input">
        <label class="fd-form-label" for="input-1">User prompt:</label>
        <div class="fd-prompt-input__wrapper">
            <div class="fd-prompt-input__inner-wrapper">
                <div class="fd-input-group">
                    <input class="fd-input fd-input fd-input-group__input" type="text" placeholder="Ask me anything..." id="input-1">
                    <span class="fd-input-group__addon fd-input-group__addon--button">
                        <button class="fd-input-group__button fd-button fd-button--transparent fd-button" aria-label="Clear">
                            <i class="sap-icon--decline"></i>
                        </button>
                    </span>
                </div>
                <span class="fd-prompt-input__counter">10 characters remaining</span>
            </div>
            <button aria-label="Add to cart" class="fd-button fd-button--emphasized" disabled>
                <i class="sap-icon--paper-plane"></i>
            </button>
        </div>
    </div>
</div>

<h4>User prompt with input</h4>
<div>
    <div class="fd-prompt-input">
        <label class="fd-form-label" for="input-1">User prompt:</label>
        <div class="fd-prompt-input__wrapper">
            <div class="fd-prompt-input__inner-wrapper">
                <div class="fd-input-group">
                    <input class="fd-input fd-input fd-input-group__input" type="text" placeholder="Ask me anything..." value="input">
                    <span class="fd-input-group__addon fd-input-group__addon--button">
                        <button class="fd-input-group__button fd-button fd-button--transparent fd-button" aria-label="Clear">
                            <i class="sap-icon--decline"></i>
                        </button>
                    </span>
                </div>
                <span class="fd-prompt-input__counter">5 characters remaining</span>
            </div>
            <button aria-label="Add to cart" class="fd-button fd-button--emphasized">
                <i class="sap-icon--paper-plane"></i>
            </button>
        </div>
    </div>
</div>

<h4>User prompt with input and error</h4>
<div>
    <div class="fd-prompt-input">
        <label class="fd-form-label" for="input-1">User prompt:</label>
        <div class="fd-prompt-input__wrapper">
            <div class="fd-prompt-input__inner-wrapper">
                <div class="fd-form-input-message-group fd-popover">
                    <div class="fd-popover__control" aria-controls="popoverError" aria-expanded="true" aria-haspopup="true">
                        <div class="fd-input-group is-error">
                            <input class="fd-input fd-input fd-input-group__input" type="text" placeholder="Ask me anything..." value="exceeding characters">
                            <span class="fd-input-group__addon fd-input-group__addon--button">
                                <button class="fd-input-group__button fd-button fd-button--transparent fd-button" aria-label="Clear">
                                    <i class="sap-icon--decline"></i>
                                </button>
                            </span>
                        </div>
                    </div>
                    <div class="fd-popover__body fd-popover__body--input-message-group fd-popover__body--no-arrow" aria-hidden="false" id="popoverError">
                        <div class="fd-form-message fd-form-message--error" >Error message</div>
                    </div>
                </div>
                <span class="fd-prompt-input__counter">10 characters over the limit</span>
            </div>
            <button aria-label="Add to cart" class="fd-button fd-button--emphasized">
                <i class="sap-icon--paper-plane"></i>
            </button>
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

This documentation was automatically generated from: `packages/styles/stories/Components/Forms/prompt-input/prompt-input.stories.js`

For the latest updates and interactive examples, see [Storybook](https://sap.github.io/fundamental-styles/).
