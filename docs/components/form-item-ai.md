---
component: fd-form-item
title: AI/Patterns/Progress Indicator
category: AI
selector: fd-form-item
cssFile: form-item.css
sourcePath: packages/styles/stories/AI/Patterns/ai-progress-indicator/ai-progress-indicator.stories.js
tags: ["ai","experimental"]
dependencies: []
relatedComponents: []
stability: experimental
generatedAt: 2026-05-28T20:12:00.989Z
---

# AI/Patterns/Progress Indicator

> **🧪 EXPERIMENTAL**: This component is experimental and its API may change.

AI Progress Indicator provides information about the status of a user's request while they wait for the content to be generated. The main goal of this pattern is to keep the user engaged and informed, manage their expectations and show that the system is actively working. 
        <br><br>
<b>Use Progress Indicator: </b>
<ul>
    <li>when the duration of the AI generation process is uncertain</li>
    <li>to show users that the system is actively working</li>
    <li>when you need to keep users informed about the status of their request</li>
    <li>to provide real-time updates on the progress of the AI task</li>
</ul><br>
<b>Do not use Progress Indicator: </b>
<ul>
    <li>for operations that take less than one second</li>
    <li>when providing a time estimate for the process</li>
    <li>in non-AI scenarios</li>
</ul>
<b>Note: The component is in an experimental state.</b>

## Installation

```bash
npm install fundamental-styles
```

```html
<!-- Include theme -->
<link href="node_modules/fundamental-styles/dist/theming/sap_horizon.css" rel="stylesheet">

<!-- Include component CSS -->
<link href="node_modules/fundamental-styles/dist/form-item.css" rel="stylesheet">

```

## Basic Usage

```html
<h4>First loading time (while analyzing the request)</h4>
<div class="fd-form-item">
    <div class="fd-form-item__label-container">
        <button class="fd-button">
            <i class="sap-icon--stop"></i>
            <span class="fd-button__text">Stop Generating</span>
        </button>
    </div>
    <div class="fd-popover__control" aria-controls="popoverAI1" aria-expanded="false" aria-haspopup="true">
        <div role="textbox" class="fd-textarea fd-textarea--ai is-information" id="textarea-ai-1" placeholder="Write something here" rows="5"><div role="progressbar" aria-valuetext="busy" aria-labelledby="ai-busy-indicator-text" class="fd-ai-busy-indicator">
            <span class="sap-icon sap-icon--ai"></span>
            <span id="ai-busy-indicator-text" class="fd-ai-busy-indicator__text">Analyzing request...</span>
        </div>

    </div>
</div>
</div>
<h4>Second loading time (while generating the results)</h4>
<div class="fd-form-item">
    <div class="fd-form-item__label-container">
        <button class="fd-button">
            <i class="sap-icon--stop"></i>
            <span class="fd-button__text">Stop Generating</span>
        </button>
    </div>
    <div class="fd-popover__control" aria-controls="popoverAI1" aria-expanded="false" aria-haspopup="true">
        <div role="textbox" class="fd-textarea fd-textarea--ai is-information" id="textarea-ai-1" placeholder="Write something here" rows="5"><p class="fd-ai-text fd-ai-text--loading">This is a text being generated inside a textarea lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum eligendi quae recusandae rem illum...</p>

    </div>
</div>
</div>
```

## States

| Class | Description |
|-------|-------------|
| `is-information` | Information state |

## BEM Elements

This component uses the following BEM elements:

- `fd-form-item__label-container`

## Examples

### AIProgressIndicator

AI Progress Indicator pattern extends the following components to enable new AI-specific interactions:
<ul>
    <li><b>AI button</b> (Stop generating Button): provides user the option to stop the generation at any given time.  For more information see AI button.</li>
    <li><b>AI Icon</b>: AI icon with looped animation conveys to users that AI processes are actively underway. Text string keeps users updated on the status of their request. We advise the usage of the standard UI text ”Analyzing request...". For more information see AI busy indicator.</li>
    <li><b>AI Busy Indicator</b>: informs the user about an ongoing operation powered by AI</li>
    <li><b>AI Loading bar</b>: an animated gradient bar visually reinforces that the system is actively processing tasks. For more information see AI loading bar.</li>
    <li><b>Text area</b></li>
    <li><b>Rich text editor</b></li>
</ul>

```html
<h4>First loading time (while analyzing the request)</h4>
<div class="fd-form-item">
    <div class="fd-form-item__label-container">
        <button class="fd-button">
            <i class="sap-icon--stop"></i>
            <span class="fd-button__text">Stop Generating</span>
        </button>
    </div>
    <div class="fd-popover__control" aria-controls="popoverAI1" aria-expanded="false" aria-haspopup="true">
        <div role="textbox" class="fd-textarea fd-textarea--ai is-information" id="textarea-ai-1" placeholder="Write something here" rows="5"><div role="progressbar" aria-valuetext="busy" aria-labelledby="ai-busy-indicator-text" class="fd-ai-busy-indicator">
            <span class="sap-icon sap-icon--ai"></span>
            <span id="ai-busy-indicator-text" class="fd-ai-busy-indicator__text">Analyzing request...</span>
        </div>

    </div>
</div>
</div>
<h4>Second loading time (while generating the results)</h4>
<div class="fd-form-item">
    <div class="fd-form-item__label-container">
        <button class="fd-button">
            <i class="sap-icon--stop"></i>
            <span class="fd-button__text">Stop Generating</span>
        </button>
    </div>
    <div class="fd-popover__control" aria-controls="popoverAI1" aria-expanded="false" aria-haspopup="true">
        <div role="textbox" class="fd-textarea fd-textarea--ai is-information" id="textarea-ai-1" placeholder="Write something here" rows="5"><p class="fd-ai-text fd-ai-text--loading">This is a text being generated inside a textarea lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum eligendi quae recusandae rem illum...</p>

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

This documentation was automatically generated from: `packages/styles/stories/AI/Patterns/ai-progress-indicator/ai-progress-indicator.stories.js`

For the latest updates and interactive examples, see [Storybook](https://sap.github.io/fundamental-styles/).
