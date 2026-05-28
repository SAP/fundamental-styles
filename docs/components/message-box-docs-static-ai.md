---
component: fd-message-box-docs-static
title: AI/Patterns/Acknowledgment
category: AI
selector: fd-message-box-docs-static
cssFile: message-box-docs-static.css
sourcePath: packages/styles/stories/AI/Patterns/ai-acknowledgment/ai-acknowledgment.stories.js
tags: ["ai","experimental"]
dependencies: []
relatedComponents: []
stability: experimental
generatedAt: 2026-06-01T19:24:00.444Z
---

# AI/Patterns/Acknowledgment

> **🧪 EXPERIMENTAL**: This component is experimental and its API may change.

AI Acknowledgment provides users with important information and updates about an AI service in a standardized format. Its main goal is to educate users on the key aspects of AI-enabled applications, including potential risks, opportunities, and limitations. This helps set user expectations and fosters trust.

<b>Anatomy</b>
<ul>
    <li>Container: could be a Dialog or Message Box</li>
    <li>Illustrated Messages (optional): an image representing the AI service.
    Note: No specific AI illustrations are currently available. Please request new images if needed.
    </li>
    <li>Intro / Primary Message: The main message</li>
    <li>Headlines (optional): Descriptive headline for the paragraph.</li>
    <li>Reason / Key Aspects: The reason for this message</li>
    <li>Details / Link: Additional information and resources</li>
    <li>Checkbox Option: “Don't show this message again”</li>
</ul>
For more information see utilised/reused components in this pattern: Dialog, Message Box, and Illustrated Messages.

<br><b>Note: The component is in an experimental state.</b>

## Installation

```bash
npm install fundamental-styles
```

```html
<!-- Include theme -->
<link href="node_modules/fundamental-styles/dist/theming/sap_horizon.css" rel="stylesheet">

<!-- Include component CSS -->
<link href="node_modules/fundamental-styles/dist/message-box-docs-static.css" rel="stylesheet">

```

## Basic Usage

```html
<div class="fd-message-box-docs-static fd-message-box fd-message-box--information fd-message-box--active">
    <section class="fd-message-box__content">
        <header class="fd-bar fd-bar--header fd-message-box__header">
            <div class="fd-bar__left">
                <div class="fd-bar__element">
                    <i class="sap-icon--information"></i>
                    <h5 class="fd-title fd-title--h5">Information</h5>
                </div>
            </div>
        </header>
        <div class="fd-message-box__body">
            SAP CX AI Toolkit now provides embedded AI services. For more information, see the <a href="#" class="fd-link" tabindex="0"><span class="fd-link__content">SAP Help Portal</span></a>
            <h6 class="fd-title fd-title--h6">Disclaimer</h6>
            Artificial Intelligence (AI) generates results based on multiple sources. Outputs may contain errors and inaccuracies. Consider reviewing all generated results and adjust as necessary.
            <div class="fd-form-group">
                <div class="fd-form-item">
                    <input type="checkbox" class="fd-checkbox" id="ai-ack">
                    <label class="fd-checkbox__label" for="ai-ack">
                        <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                        <div class="fd-checkbox__label-container">
                            <span class="fd-checkbox__text">Don't show this message again</span>
                        </div>
                    </label>
                </div>
            </div>
        </div>
        <footer class="fd-bar fd-bar--footer fd-message-box__footer">
            <div class="fd-bar__right">
                <div class="fd-bar__element">
                    <button class="fd-button fd-button--emphasized fd-message-box__decisive-button">
                        OK
                    </button>
                </div>
            </div>
        </footer>
    </section>
</div>
```

## Examples

### AIAcknowledgment

```html
<div class="fd-message-box-docs-static fd-message-box fd-message-box--information fd-message-box--active">
    <section class="fd-message-box__content">
        <header class="fd-bar fd-bar--header fd-message-box__header">
            <div class="fd-bar__left">
                <div class="fd-bar__element">
                    <i class="sap-icon--information"></i>
                    <h5 class="fd-title fd-title--h5">Information</h5>
                </div>
            </div>
        </header>
        <div class="fd-message-box__body">
            SAP CX AI Toolkit now provides embedded AI services. For more information, see the <a href="#" class="fd-link" tabindex="0"><span class="fd-link__content">SAP Help Portal</span></a>
            <h6 class="fd-title fd-title--h6">Disclaimer</h6>
            Artificial Intelligence (AI) generates results based on multiple sources. Outputs may contain errors and inaccuracies. Consider reviewing all generated results and adjust as necessary.
            <div class="fd-form-group">
                <div class="fd-form-item">
                    <input type="checkbox" class="fd-checkbox" id="ai-ack">
                    <label class="fd-checkbox__label" for="ai-ack">
                        <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                        <div class="fd-checkbox__label-container">
                            <span class="fd-checkbox__text">Don't show this message again</span>
                        </div>
                    </label>
                </div>
            </div>
        </div>
        <footer class="fd-bar fd-bar--footer fd-message-box__footer">
            <div class="fd-bar__right">
                <div class="fd-bar__element">
                    <button class="fd-button fd-button--emphasized fd-message-box__decisive-button">
                        OK
                    </button>
                </div>
            </div>
        </footer>
    </section>
</div>
```

## Accessibility

- Use semantic HTML elements where appropriate
- Include proper ARIA attributes for interactive elements
- Ensure keyboard navigation support
- Provide adequate color contrast

## Source

This documentation was automatically generated from: `packages/styles/stories/AI/Patterns/ai-acknowledgment/ai-acknowledgment.stories.js`

For the latest updates and interactive examples, see [Storybook](https://sap.github.io/fundamental-styles/).
