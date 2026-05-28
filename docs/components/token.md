---
component: fd-token
title: Components/Token
category: Components
selector: fd-token
cssFile: token.css
sourcePath: packages/styles/stories/Components/token/token.stories.js
tags: []
dependencies: ["input","token"]
relatedComponents: ["input","token"]
stability: stable
generatedAt: 2026-05-28T20:12:00.295Z
---

# Components/Token

Tokens are small items of information (similar to tags) that mainly serve to visualize previously selected items. The tokenizer is the container that handles the tokens. Tokens can be added, removed, selected, or deselected.

##Usage
- Use tokens only in the **Multi Input** component.

The default token is displayed in grey with text, and a close button that will remove the token when selected.

| **Modifier Class** | **Usage** |
| -----: | :----- | 
| \

## Usage Guidelines

- Use tokens only in the **Multi Input** component.

The default token is displayed in grey with text, and a close button that will remove the token when selected.

| **Modifier Class** | **Usage** |
| -----: | :----- | 
| \

## Dependencies

This component depends on the following CSS files:

- `input.css`
- `token.css`

## Installation

```bash
npm install fundamental-styles
```

```html
<!-- Include theme -->
<link href="node_modules/fundamental-styles/dist/theming/sap_horizon.css" rel="stylesheet">

<!-- Include component CSS -->
<link href="node_modules/fundamental-styles/dist/token.css" rel="stylesheet">

<!-- Include dependencies -->
<link href="node_modules/fundamental-styles/dist/input.css" rel="stylesheet">
<link href="node_modules/fundamental-styles/dist/token.css" rel="stylesheet">
```

## Basic Usage

```html
<style>
    .docs-tokens {
    width: 100%;
    }
    .docs_tokens_item_wrapper {
    display: flex;
    }
    .docs-tokens-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
    column-gap: 0.1rem;
    row-gap: 0.1rem;
    padding: 1rem;
    justify-items: right;
    align-items: center;
    }
</style>

<section class="docs-tokens">
    <div class="docs-tokens-container">

        <div>Regular</div>
        <div>Selected</div>
    </div>
    <div class="docs-tokens-container">
        <div>Normal</div>
        <span class="fd-token" role="button" tabindex="0">
            <span class="fd-token__text">tokenopolis</span>
            <button class="fd-token__close" tabindex="-1" aria-label="Bibendum token close"></button>
        </span>
        <span class="fd-token fd-token--selected" role="button" tabindex="0">
            <span class="fd-token__text">tokenopolis</span>
            <button class="fd-token__close" tabindex="-1" aria-label="Bibendum token close"></button>
        </span>
    </div>
    <div class="docs-tokens-container">
        <div>Hover</div>
        <span class="fd-token is-hover" role="button" tabindex="0">
            <span class="fd-token__text">tokenopolis</span>
            <button class="fd-token__close" tabindex="-1" aria-label="Bibendum token close"></button>
        </span>
        <span class="fd-token fd-token--selected is-hover" role="button" tabindex="0">
            <span class="fd-token__text">tokenopolis</span>
            <button class="fd-token__close" tabindex="-1" aria-label="Bibendum token close"></button>
        </span>
    </div>
    <div class="docs-tokens-container">
        <div>Focus</div>
        <span class="fd-token is-focus" role="button" tabindex="0">
            <span class="fd-token__text">tokenopolis</span>
            <button class="fd-token__close" tabindex="-1" aria-label="Bibendum token close"></button>
        </span>
        <span class="fd-token fd-token--selected is-focus" role="button" tabindex="0">
            <span class="fd-token__text">tokenopolis</span>
            <button class="fd-token__close" tabindex="-1" aria-label="Bibendum token close"></button>
        </span>
    </div>
    <div class="docs-tokens-container">
        <div>Hover&Focus</div>
        <span class="fd-token is-hover is-focus" role="button" tabindex="0">
            <span class="fd-token__text">tokenopolis</span>
            <button class="fd-token__close" tabindex="-1" aria-label="Bibendum token close"></button>
        </span>
        <span class="fd-token fd-token--selected is-hover is-focus" role="button" tabindex="0">
            <span class="fd-token__text">tokenopolis</span>
            <button class="fd-token__close" tabindex="-1" aria-label="Bibendum token close"></button>
        </span>
    </div>
    <div class="docs-tokens-container">
        <div>Read-only</div>
        <span class="fd-token fd-token--readonly" role="button" tabindex="0">
            <span class="fd-token__text">tokenopolis</span>
        </span>
        <span></span>
        <!-- <span class="fd-token fd-token--selected fd-token--readonly" role="button" tabindex="0">
        <span class="fd-token__text">tokenopolis</span>
    </span> -->
</div>
<div class="docs-tokens-container">
    <div>Display-only</div>
    <span class="fd-token fd-token--display" role="presentation" tabindex="0">
        <span class="fd-token__text">tokenopolis</span>
    </span>
    <span></span>
</div>
</section>
```

## Modifiers

| Class | Description |
|-------|-------------|
| `fd-token--display` | The default token is displayed in grey with text, and a close button that will remove the token when selected |
| `fd-token--readonly` | Style variant |
| `fd-token--selected` | The default token is displayed in grey with text, and a close button that will remove the token when selected |

## States

| Class | Description |
|-------|-------------|
| `is-focus` | Focus state |
| `is-hover` | Hover state |

## BEM Elements

This component uses the following BEM elements:

- `fd-token__close`
- `fd-token__text`

## Related Components

This component works with or depends on:

- `input`
- `token`

## Design Tokens

Key CSS variables used by this component:

- `--disabled`
- `--display`
- `--fdToken_Background_Color`
- `--fdToken_Background_Color_Hover`
- `--fdToken_Background_Color_Read_Only`
- `--fdToken_Border`
- `--fdToken_Border_Color_Hover`
- `--fdToken_Border_Color_Read_Only`
- `--fdToken_Border_Color_Selected_Focus`
- `--fdToken_Border_Radius`
- `--fdToken_Close_Color`
- `--fdToken_Close_Padding_Block`
- `--fdToken_Close_Padding_Inline`
- `--fdToken_Close_Width`
- `--fdToken_Focus_Border_Radius`

*...and 5 more*

## Examples

### Tokens

The default token is displayed in grey with text, and a close button that will remove the token when selected. It is displayed in cozy mode, which is ideal for mobile and tablet screens.

```html
<style>
    .docs-tokens {
    width: 100%;
    }
    .docs_tokens_item_wrapper {
    display: flex;
    }
    .docs-tokens-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
    column-gap: 0.1rem;
    row-gap: 0.1rem;
    padding: 1rem;
    justify-items: right;
    align-items: center;
    }
</style>

<section class="docs-tokens">
    <div class="docs-tokens-container">

        <div>Regular</div>
        <div>Selected</div>
    </div>
    <div class="docs-tokens-container">
        <div>Normal</div>
        <span class="fd-token" role="button" tabindex="0">
            <span class="fd-token__text">tokenopolis</span>
            <button class="fd-token__close" tabindex="-1" aria-label="Bibendum token close"></button>
        </span>
        <span class="fd-token fd-token--selected" role="button" tabindex="0">
            <span class="fd-token__text">tokenopolis</span>
            <button class="fd-token__close" tabindex="-1" aria-label="Bibendum token close"></button>
        </span>
    </div>
    <div class="docs-tokens-container">
        <div>Hover</div>
        <span class="fd-token is-hover" role="button" tabindex="0">
            <span class="fd-token__text">tokenopolis</span>
            <button class="fd-token__close" tabindex="-1" aria-label="Bibendum token close"></button>
        </span>
        <span class="fd-token fd-token--selected is-hover" role="button" tabindex="0">
            <span class="fd-token__text">tokenopolis</span>
            <button class="fd-token__close" tabindex="-1" aria-label="Bibendum token close"></button>
        </span>
    </div>
    <div class="docs-tokens-container">
        <div>Focus</div>
        <span class="fd-token is-focus" role="button" tabindex="0">
            <span class="fd-token__text">tokenopolis</span>
            <button class="fd-token__close" tabindex="-1" aria-label="Bibendum token close"></button>
        </span>
        <span class="fd-token fd-token--selected is-focus" role="button" tabindex="0">
            <span class="fd-token__text">tokenopolis</span>
            <button class="fd-token__close" tabindex="-1" aria-label="Bibendum token close"></button>
        </span>
    </div>
    <div class="docs-tokens-container">
        <div>Hover&Focus</div>
        <span class="fd-token is-hover is-focus" role="button" tabindex="0">
            <span class="fd-token__text">tokenopolis</span>
            <button class="fd-token__close" tabindex="-1" aria-label="Bibendum token close"></button>
        </span>
        <span class="fd-token fd-token--selected is-hover is-focus" role="button" tabindex="0">
            <span class="fd-token__text">tokenopolis</span>
            <button class="fd-token__close" tabindex="-1" aria-label="Bibendum token close"></button>
        </span>
    </div>
    <div class="docs-tokens-container">
        <div>Read-only</div>
        <span class="fd-token fd-token--readonly" role="button" tabindex="0">
            <span class="fd-token__text">tokenopolis</span>
        </span>
        <span></span>
        <!-- <span class="fd-token fd-token--selected fd-token--readonly" role="button" tabindex="0">
        <span class="fd-token__text">tokenopolis</span>
    </span> -->
</div>
<div class="docs-tokens-container">
    <div>Display-only</div>
    <span class="fd-token fd-token--display" role="presentation" tabindex="0">
        <span class="fd-token__text">tokenopolis</span>
    </span>
    <span></span>
</div>
</section>
```

## Accessibility

- Use semantic HTML elements where appropriate
- Include proper ARIA attributes for interactive elements
- Ensure keyboard navigation support
- Provide adequate color contrast

## Source

This documentation was automatically generated from: `packages/styles/stories/Components/token/token.stories.js`

For the latest updates and interactive examples, see [Storybook](https://sap.github.io/fundamental-styles/).
