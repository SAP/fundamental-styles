---
component: fd-ai-busy-indicator
title: AI/Components/Busy Indicator
category: AI
selector: fd-ai-busy-indicator
cssFile: ai-busy-indicator.css
sourcePath: packages/styles/stories/AI/Components/ai-busy-indicator/ai-busy-indicator.stories.js
tags: ["ai","experimental"]
dependencies: []
relatedComponents: []
stability: experimental
generatedAt: 2026-05-28T16:47:21.333Z
---

# AI/Components/Busy Indicator

> **🧪 EXPERIMENTAL**: This component is experimental and its API may change.

The AI busy indicator informs the user about an ongoing operation powered by AI and it's part of AI progress indicator pattern. For more information refer to AI progress indicator pattern.<br>
        <b>Note: AI Busy indicator is part of AI Progress Indicator pattern and is intended to be used in text generation scenarios within a text area or rich text editor. <br><br>The component is in an experimental state.</b>

## Installation

```bash
npm install fundamental-styles
```

```html
<!-- Include theme -->
<link href="node_modules/fundamental-styles/dist/theming/sap_horizon.css" rel="stylesheet">

<!-- Include component CSS -->
<link href="node_modules/fundamental-styles/dist/ai-busy-indicator.css" rel="stylesheet">

```

## Basic Usage

```html
<div role="progressbar" aria-valuetext="busy" aria-labelledby="ai-busy-indicator-text" class="fd-ai-busy-indicator">
    <span class="sap-icon sap-icon--ai"></span>
    <span id="ai-busy-indicator-text" class="fd-ai-busy-indicator__text">Analyzing request...</span>
</div>
```

## BEM Elements

This component uses the following BEM elements:

- `fd-ai-busy-indicator__text`

## Examples

### AIBusyIndicator

The AI busy indicator component consists of two parts:
<br>
<b>Icon: </b>AI icon with looped animation (<b style="color: red;">the animation is in development</b>) conveys to users that AI processes are actively underway.<br>
<b>Text: </b>Keeps users updated on the status of their request. While AI is processing the request we advise the usage of the standard UI text ”Analyzing request...".

```html
<div role="progressbar" aria-valuetext="busy" aria-labelledby="ai-busy-indicator-text" class="fd-ai-busy-indicator">
    <span class="sap-icon sap-icon--ai"></span>
    <span id="ai-busy-indicator-text" class="fd-ai-busy-indicator__text">Analyzing request...</span>
</div>
```

## Accessibility

- Use semantic HTML elements where appropriate
- Include proper ARIA attributes for interactive elements
- Ensure keyboard navigation support
- Provide adequate color contrast

## Source

This documentation was automatically generated from: `packages/styles/stories/AI/Components/ai-busy-indicator/ai-busy-indicator.stories.js`

For the latest updates and interactive examples, see [Storybook](https://sap.github.io/fundamental-styles/).
