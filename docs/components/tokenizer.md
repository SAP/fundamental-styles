---
component: fd-tokenizer
title: Components/Tokenizer
category: Components
selector: fd-tokenizer
cssFile: tokenizer.css
sourcePath: packages/styles/stories/Components/tokenizer/tokenizer.stories.js
tags: []
dependencies: ["input","token","tokenizer"]
relatedComponents: ["input","token","tokenizer"]
stability: stable
generatedAt: 2026-06-08T17:49:01.801Z
---

# Components/Tokenizer

Tokenizer is a container that wraps multiple tokens. The Tokenizer is used either stand alone or within Input controls such as **MultiInput**.In cozy mode the user can swipe the tokens to the left or right.

##Usage
- Use tokenizer in the **Multi Input**, **Multi Combobox**, or as a standalone component.

## Usage Guidelines

- Use tokenizer in the **Multi Input**, **Multi Combobox**, or as a standalone component.

## Dependencies

This component depends on the following CSS files:

- `input.css`
- `token.css`
- `tokenizer.css`

## Installation

```bash
npm install fundamental-styles
```

```html
<!-- Include theme -->
<link href="node_modules/fundamental-styles/dist/theming/sap_horizon.css" rel="stylesheet">

<!-- Include component CSS -->
<link href="node_modules/fundamental-styles/dist/tokenizer.css" rel="stylesheet">

<!-- Include dependencies -->
<link href="node_modules/fundamental-styles/dist/input.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/token.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/tokenizer.css" rel="stylesheet">
```

## Basic Usage

```html
<div class="fd-tokenizer ">
    <div class="fd-tokenizer__inner">
        <input class="fd-input fd-tokenizer__input" aria-label="Tokenizer input" placeholder="Type Ahead"/>
    </div>
</div>
<div class="fd-tokenizer">
    <div class="fd-tokenizer__inner">
        <span class="fd-token" role="button" tabindex="0">
            <span class="fd-token__text">
                Bibendum
            </span>
            <button class="fd-token__close" tabindex="-1" aria-label="Token close"></button>
        </span>
        <span class="fd-token" role="button" tabindex="0">
            <span class="fd-token__text">
                Lorem
            </span>
            <button class="fd-token__close" tabindex="-1" aria-label="Token close"></button>
        </span>
        <span class="fd-token" role="button" tabindex="0">
            <span class="fd-token__text">
                Dolor
            </span>
            <button class="fd-token__close" tabindex="-1" aria-label="Token close"></button>
        </span>
        <span class="fd-token" role="button" tabindex="0">
            <span class="fd-token__text">
                Filter
            </span>
            <button class="fd-token__close" tabindex="-1" aria-label="Token close"></button>
        </span>
        <span class="fd-token fd-token--readonly">
            <span class="fd-token__text">
                Lorem
            </span>
        </span>
        <input class="fd-input fd-tokenizer__input" aria-label="Tokenizer input" placeholder="Type Ahead"/>
    </div>
</div>
<div class="fd-tokenizer is-focus">
    <div class="fd-tokenizer__inner">
        <span class="fd-token" role="button" tabindex="0">
            <span class="fd-token__text">
                Bibendum
            </span>
            <button class="fd-token__close" tabindex="-1" aria-label="Token close"></button>
        </span>
        <span class="fd-token" role="button" tabindex="0">
            <span class="fd-token__text">
                Lorem
            </span>
            <button class="fd-token__close" tabindex="-1" aria-label="Token close"></button>
        </span>
        <span class="fd-token" role="button" tabindex="0">
            <span class="fd-token__text">
                Dolor
            </span>
            <button class="fd-token__close" tabindex="-1" aria-label="Token close"></button>
        </span>
        <span class="fd-token" role="button" tabindex="0">
            <span class="fd-token__text">
                Filter
            </span>
            <button class="fd-token__close" tabindex="-1" aria-label="Token close"></button>
        </span>
        <span class="fd-token fd-token--readonly">
            <span class="fd-token__text">
                Lorem
            </span>
        </span>
        <input class="fd-input fd-tokenizer__input" aria-label="Tokenizer input"/>
    </div>
</div>
```

## Modifiers

| Class | Description |
|-------|-------------|
| `fd-tokenizer--display` | Style variant |
| `fd-tokenizer--readonly` | Style variant |
| `fd-tokenizer--scrollable` | The tokenizer can be scrollable by adding the \ |

## States

| Class | Description |
|-------|-------------|
| `is-focus` | Focus state |

## BEM Elements

This component uses the following BEM elements:

- `fd-tokenizer__inner`
- `fd-tokenizer__input`

## Related Components

This component works with or depends on:

- `input`
- `token`
- `tokenizer`

## Design Tokens

Key CSS variables used by this component:

- `--button`
- `--compact`
- `--display`
- `--fdInput_Field_Compact_Min_Width`
- `--fdTokenizer_Indicator_Color`
- `--fdTokenizer_Inner_Padding`
- `--readonly`
- `--sapContent_FocusColor`
- `--sapContent_FocusStyle`
- `--sapContent_FocusWidth`
- `--sapField_ReadOnly_Background`
- `--scrollable`

## Examples

### Tokenizer

```html
<div class="fd-tokenizer ">
    <div class="fd-tokenizer__inner">
        <input class="fd-input fd-tokenizer__input" aria-label="Tokenizer input" placeholder="Type Ahead"/>
    </div>
</div>
<div class="fd-tokenizer">
    <div class="fd-tokenizer__inner">
        <span class="fd-token" role="button" tabindex="0">
            <span class="fd-token__text">
                Bibendum
            </span>
            <button class="fd-token__close" tabindex="-1" aria-label="Token close"></button>
        </span>
        <span class="fd-token" role="button" tabindex="0">
            <span class="fd-token__text">
                Lorem
            </span>
            <button class="fd-token__close" tabindex="-1" aria-label="Token close"></button>
        </span>
        <span class="fd-token" role="button" tabindex="0">
            <span class="fd-token__text">
                Dolor
            </span>
            <button class="fd-token__close" tabindex="-1" aria-label="Token close"></button>
        </span>
        <span class="fd-token" role="button" tabindex="0">
            <span class="fd-token__text">
                Filter
            </span>
            <button class="fd-token__close" tabindex="-1" aria-label="Token close"></button>
        </span>
        <span class="fd-token fd-token--readonly">
            <span class="fd-token__text">
                Lorem
            </span>
        </span>
        <input class="fd-input fd-tokenizer__input" aria-label="Tokenizer input" placeholder="Type Ahead"/>
    </div>
</div>
<div class="fd-tokenizer is-focus">
    <div class="fd-tokenizer__inner">
        <span class="fd-token" role="button" tabindex="0">
            <span class="fd-token__text">
                Bibendum
            </span>
            <button class="fd-token__close" tabindex="-1" aria-label="Token close"></button>
        </span>
        <span class="fd-token" role="button" tabindex="0">
            <span class="fd-token__text">
                Lorem
            </span>
            <button class="fd-token__close" tabindex="-1" aria-label="Token close"></button>
        </span>
        <span class="fd-token" role="button" tabindex="0">
            <span class="fd-token__text">
                Dolor
            </span>
            <button class="fd-token__close" tabindex="-1" aria-label="Token close"></button>
        </span>
        <span class="fd-token" role="button" tabindex="0">
            <span class="fd-token__text">
                Filter
            </span>
            <button class="fd-token__close" tabindex="-1" aria-label="Token close"></button>
        </span>
        <span class="fd-token fd-token--readonly">
            <span class="fd-token__text">
                Lorem
            </span>
        </span>
        <input class="fd-input fd-tokenizer__input" aria-label="Tokenizer input"/>
    </div>
</div>
```

### Readonly and Display-only Modes

```html
<style>
    .docs-tokenizer {
    width: 100%;
    }
</style>

<section class="docs-tokenizer">
    <div>
        <div>Readonly Mode:</div>
        <div class="fd-tokenizer fd-tokenizer--readonly">
            <div class="fd-tokenizer__inner">
                <span class="fd-token fd-token--readonly" role="button" tabindex="0">
                    <span class="fd-token__text"> Bibendum </span>
                </span>
                <span class="fd-token fd-token--readonly" role="button" tabindex="0">
                    <span class="fd-token__text"> Lorem </span>
                </span>
                <span class="fd-token fd-token--readonly" role="button" tabindex="0">
                    <span class="fd-token__text"> Dolor </span>
                </span>
                <span class="fd-token fd-token--readonly" role="button" tabindex="0">
                    <span class="fd-token__text"> Filter </span>
                </span>
                <span class="fd-token fd-token--readonly" role="button" tabindex="0">
                    <span class="fd-token__text"> Lorem </span>
                </span>
                <input class="fd-input fd-tokenizer__input" aria-label="Tokenizer input" />
            </div>
        </div>
    </div>
    <div>
        <div>Display-only Mode:</div>
        <div class="fd-tokenizer fd-tokenizer--display">
            <div class="fd-tokenizer__inner">
                <span class="fd-token fd-token--display" role="presentation" tabindex="0">
                    <span class="fd-token__text"> Bibendum </span>
                </span>
                <span class="fd-token fd-token--display" role="presentation" tabindex="0">
                    <span class="fd-token__text"> Lorem </span>
                </span>
                <span class="fd-token fd-token--display" role="presentation" tabindex="0">
                    <span class="fd-token__text"> Dolor </span>
                </span>
                <span class="fd-token fd-token--display" role="presentation" tabindex="0">
                    <span class="fd-token__text"> Filter </span>
                </span>
                <span class="fd-token fd-token--display" role="presentation" tabindex="0">
                    <span class="fd-token__text"> Lorem </span>
                </span>
                <input class="fd-input fd-tokenizer__input" aria-label="Tokenizer input" />
            </div>
        </div>
    </div>
</section>
```

### Scrollable tokenizer

The tokenizer can be scrollable by adding the \

```html
<div class="fd-tokenizer fd-tokenizer--scrollable">
    <div class="fd-tokenizer__inner" id="tokenizer-scrollable">
        <span class="fd-token" role="button" tabindex="0">
            <span class="fd-token__text">
                Long Token Option 1
            </span>
            <button class="fd-token__close" tabindex="-1" aria-label="Token close"></button>
        </span>
        <span class="fd-token" role="button" tabindex="0">
            <span class="fd-token__text">
                Long Token Option 2
            </span>
            <button class="fd-token__close" tabindex="-1" aria-label="Token close"></button>
        </span>
        <span class="fd-token" role="button" tabindex="0">
            <span class="fd-token__text">
                Long Token Option 3
            </span>
            <button class="fd-token__close" tabindex="-1" aria-label="Token close"></button>
        </span>
        <span class="fd-token" role="button" tabindex="0">
            <span class="fd-token__text">
                Long Token Option 4
            </span>
            <button class="fd-token__close" tabindex="-1" aria-label="Token close"></button>
        </span>
        <span class="fd-token" role="button" tabindex="0">
            <span class="fd-token__text">
                Long Token Option 5
            </span>
            <button class="fd-token__close" tabindex="-1" aria-label="Token close"></button>
        </span>
        <span class="fd-token" role="button" tabindex="0">
            <span class="fd-token__text">
                Long Token Option 6
            </span>
            <button class="fd-token__close" tabindex="-1" aria-label="Token close"></button>
        </span>
        <span class="fd-token" role="button" tabindex="0">
            <span class="fd-token__text">
                Long Token Option 7
            </span>
            <button class="fd-token__close" tabindex="-1" aria-label="Token close"></button>
        </span>
        <span class="fd-token" role="button" tabindex="0">
            <span class="fd-token__text">
                Long Token Option 8
            </span>
            <button class="fd-token__close" tabindex="-1" aria-label="Token close"></button>
        </span>
        <span class="fd-token" role="button" tabindex="0">
            <span class="fd-token__text">
                Long Token Option 9
            </span>
            <button class="fd-token__close" tabindex="-1" aria-label="Token close"></button>
        </span>
        <span class="fd-token fd-token--readonly">
            <span class="fd-token__text">
                Long Token Option 10
            </span>
        </span>
        <input class="fd-input fd-tokenizer__input" aria-label="Tokenizer input"/>
    </div>
</div>
```

## Accessibility

- Use semantic HTML elements where appropriate
- Include proper ARIA attributes for interactive elements
- Ensure keyboard navigation support
- Provide adequate color contrast

## Source

This documentation was automatically generated from: `packages/styles/stories/Components/tokenizer/tokenizer.stories.js`

For the latest updates and interactive examples, see [Storybook](https://sap.github.io/fundamental-styles/).
