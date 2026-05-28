---
component: fd-button
title: AI/Patterns/Quick Prompt
category: AI
selector: fd-button
cssFile: button.css
sourcePath: packages/styles/stories/AI/Patterns/ai-quick-prompt/ai-quick-prompt.stories.js
tags: ["ai","experimental"]
dependencies: []
relatedComponents: []
stability: experimental
generatedAt: 2026-05-28T16:47:21.537Z
---

# AI/Patterns/Quick Prompt

> **🧪 EXPERIMENTAL**: This component is experimental and its API may change.

In generative AI, prompts direct the AI to produce outputs that meet users' needs with high-quality instructions.<br>Quick prompts, integrated into workflows, enable users to execute predefined actions effortlessly. These prompts are designed by prompt engineers who prioritize AI efficiency. <br>

<b>Use Quick Prompt: </b>
<ul>
    <li>for repetitive tasks or common actions within a workflow</li>
    <li>when input options are limited, especially in mobile scenarios</li>
    <li>when the system can only assist with specific actions</li>
    <li>when users lack expertise in the subject matter</li>
    <li>to minimize bias introduced by users' writing prompts</li>
    <li>when consistent and predictable outcomes are essential</li>
</ul>

<b>Do not use Quick Prompt: </b>

<ul>
    <li>when a user's intent is unpredictable</li>
    <li>when users need flexibility in directing the AI model's output</li>
    <li>for non-AI-related actions, use a dedicated menu button for those items</li>
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
<link href="node_modules/fundamental-styles/dist/button.css" rel="stylesheet">

```

## Basic Usage

```html
<h4>AI Button with Menu in one of the states</h4>
<button class="fd-button" aria-description="Uses Artificial Intelligence">
    <i class="sap-icon--ai"></i>
    <span class="fd-button__text">Generate</span>
</button>

<button class="fd-button" aria-description="Uses Artificial Intelligence">
    <i class="sap-icon--stop"></i>
    <span class="fd-button__text">Stop Generating</span>
</button>

<button class="fd-button" aria-description="Uses Artificial Intelligence">
    <i class="sap-icon--ai"></i>
    <span class="fd-button__text">Revise</span>
    <i class="sap-icon--slim-arrow-down"></i>
</button>

<div class="fd-popover">
    <div class="fd-popover__control">
        <button class="fd-button" aria-description="Uses Artificial Intelligence">
            <i class="sap-icon--ai"></i>
            <span class="fd-button__text">Revise</span>
            <i class="sap-icon--slim-arrow-down"></i>
        </button>
    </div>
    <div class="fd-popover__body fd-popover__body--no-arrow" aria-hidden="false">
        <nav class="fd-menu">
            <ul class="fd-menu__list" role="menu">
                <li class="fd-menu__item has-separator" role="presentation">
                    <a class="fd-menu__link" href="#" role="menuitem">
                        <span class="fd-menu__title">Regenerate</span>
                    </a>
                </li>
                <li class="fd-menu__item" role="presentation">
                    <a class="fd-menu__link" href="#" role="menuitem">
                        <span class="fd-menu__title">Fix Spelling & Grammar</span>
                    </a>
                </li>
                <li class="fd-menu__item" role="presentation">
                    <span
                        class="fd-menu__link has-child"
                        aria-controls="EX_AI_1"
                        aria-expanded="false"
                        aria-haspopup="true"
                        role="menuitem"
                        onclick="onPopoverClick('EX_AI_1')">
                        <span class="fd-menu__title">Change Tone</span>
                        <span class="fd-menu__addon-after fd-menu__addon-after--submenu"></span>
                    </span>
                    <ul class="fd-menu__sublist" id="EX_AI_1" aria-hidden="true" role="menu">
                        <li class="fd-menu__item" role="presentation">
                            <a class="fd-menu__link" href="#" role="menuitem">
                                <span class="fd-menu__title">Option 1</span>
                            </a>
                        </li>
                        <li class="fd-menu__item" role="presentation">
                            <a class="fd-menu__link" href="#" role="menuitem">
                                <span class="fd-menu__title">Option 2</span>
                            </a>
                        </li>
                        <li class="fd-menu__item" role="presentation">
                            <a class="fd-menu__link" href="#" role="menuitem">
                                <span class="fd-menu__title">Option 3</span>
                            </a>
                        </li>
                    </ul>
                </li>
                <li class="fd-menu__item" role="presentation">
                    <span
                        class="fd-menu__link has-child"
                        aria-controls="EX_AI_2"
                        aria-expanded="false"
                        aria-haspopup="true"
                        role="menuitem"
                        onclick="onPopoverClick('EX_AI_2')">
                        <span class="fd-menu__title">Text Length</span>
                        <span class="fd-menu__addon-after fd-menu__addon-after--submenu"></span>
                    </span>
                    <ul class="fd-menu__sublist" id="EX_AI_2" aria-hidden="true" role="menu">
                        <li class="fd-menu__item" role="presentation">
                            <a class="fd-menu__link" href="#" role="menuitem">
                                <span class="fd-menu__title">Short</span>
                            </a>
                        </li>
                        <li class="fd-menu__item" role="presentation">
                            <a class="fd-menu__link" href="#" role="menuitem">
                                <span class="fd-menu__title">Medium</span>
                            </a>
                        </li>
                        <li class="fd-menu__item" role="presentation">
                            <a class="fd-menu__link" href="#" role="menuitem">
                                <span class="fd-menu__title">Long</span>
                            </a>
                        </li>
                    </ul>
                </li>
                <li class="fd-menu__item" role="presentation">
                    <a class="fd-menu__link" href="#" role="menuitem">
                        <span class="fd-menu__title">Bulleted List</span>
                    </a>
                </li>
                <li class="fd-menu__item" role="presentation">
                    <span
                        class="fd-menu__link has-child"
                        aria-controls="EX_AI_3a"
                        aria-expanded="true"
                        aria-haspopup="true"
                        role="menuitem"
                        onclick="onPopoverClick('EX_AI_3a')">
                        <span class="fd-menu__title">Translate</span>
                        <span class="fd-menu__addon-after fd-menu__addon-after--submenu"></span>
                    </span>
                    <ul class="fd-menu__sublist" id="EX_AI_3a" aria-hidden="false" role="menu">
                        <li class="fd-menu__item" role="presentation">
                            <div class="fd-menu__link" role="presentation">
                                <div class="fd-input-group">
                                    <input class="fd-input fd-input-group__input fd-menu__input" type="text" placeholder="Enter a language" id="aqwsde121efaerf" name="">
                                    <span class="fd-input-group__addon fd-input-group__addon--button">
                                        <button class="fd-input-group__button fd-button fd-button--icon fd-button--transparent" aria-label="Navigation">
                                            <i class="sap-icon--search"></i>
                                        </button>
                                    </span>
                                </div>
                            </div>
                        </li>
                        <li class="fd-menu__item" role="presentation">
                            <a class="fd-menu__link" href="#" role="menuitem">
                                <span class="fd-menu__title">English</span>
                            </a>
                        </li>
                        <li class="fd-menu__item" role="presentation">
                            <a class="fd-menu__link" href="#" role="menuitem">
                                <span class="fd-menu__title">German</span>
                            </a>
                        </li>
                        <li class="fd-menu__item" role="presentation">
                            <a class="fd-menu__link" href="#" role="menuitem">
                                <span class="fd-menu__title">Spanish</span>
                            </a>
                        </li>
                        <li class="fd-menu__item" role="presentation">
                            <a class="fd-menu__link" href="#" role="menuitem">
                                <span class="fd-menu__title">Bulgarian</span>
                            </a>
                        </li>
                        <li class="fd-menu__item" role="presentation">
                            <a class="fd-menu__link" href="#" role="menuitem">
                                <span class="fd-menu__title">Filipino</span>
                            </a>
                        </li>
                        <li class="fd-menu__item" role="presentation">
                            <a class="fd-menu__link" href="#" role="menuitem">
                                <span class="fd-menu__title">Italian</span>
                            </a>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
    </div>
</div>

<h4>Icon-only AI Button with Menu in one of the states</h4>
<button class="fd-button" aria-label="Generate" aria-description="Uses Artificial Intelligence">
    <i class="sap-icon--ai"></i>
</button>

<button class="fd-button" aria-label="Stop Generating" aria-description="Uses Artificial Intelligence">
    <i class="sap-icon--stop"></i>
</button>

<button class="fd-button" aria-label="Revise" aria-description="Uses Artificial Intelligence">
    <i class="sap-icon--ai"></i>
    <i class="sap-icon--slim-arrow-down"></i>
</button>

<div class="fd-popover">
    <div class="fd-popover__control">
        <button class="fd-button" aria-label="Revise" aria-description="Uses Artificial Intelligence">
            <i class="sap-icon--ai"></i>
            <i class="sap-icon--slim-arrow-down"></i>
        </button>
    </div>
    <div class="fd-popover__body fd-popover__body--no-arrow" aria-hidden="false">
        <nav class="fd-menu">
            <ul class="fd-menu__list" role="menu">
                <li class="fd-menu__item has-separator" role="presentation">
                    <a class="fd-menu__link" href="#" role="menuitem">
                        <span class="fd-menu__title">Regenerate</span>
                    </a>
                </li>
                <li class="fd-menu__item" role="presentation">
                    <a class="fd-menu__link" href="#" role="menuitem">
                        <span class="fd-menu__title">Fix Spelling & Grammar</span>
                    </a>
                </li>
                <li class="fd-menu__item" role="presentation">
                    <span
                        class="fd-menu__link has-child"
                        aria-controls="EX_AI_1b"
                        aria-expanded="false"
                        aria-haspopup="true"
                        role="menuitem"
                        onclick="onPopoverClick('EX_AI_1b')">
                        <span class="fd-menu__title">Change Tone</span>
                        <span class="fd-menu__addon-after fd-menu__addon-after--submenu"></span>
                    </span>
                    <ul class="fd-menu__sublist" id="EX_AI_1b" aria-hidden="true" role="menu">
                        <li class="fd-menu__item" role="presentation">
                            <a class="fd-menu__link" href="#" role="menuitem">
                                <span class="fd-menu__title">Option 1</span>
                            </a>
                        </li>
                        <li class="fd-menu__item" role="presentation">
                            <a class="fd-menu__link" href="#" role="menuitem">
                                <span class="fd-menu__title">Option 2</span>
                            </a>
                        </li>
                        <li class="fd-menu__item" role="presentation">
                            <a class="fd-menu__link" href="#" role="menuitem">
                                <span class="fd-menu__title">Option 3</span>
                            </a>
                        </li>
                    </ul>
                </li>
                <li class="fd-menu__item" role="presentation">
                    <span
                        class="fd-menu__link has-child"
                        aria-controls="EX_AI_2b"
                        aria-expanded="false"
                        aria-haspopup="true"
                        role="menuitem"
                        onclick="onPopoverClick('EX_AI_2b')">
                        <span class="fd-menu__title">Text Length</span>
                        <span class="fd-menu__addon-after fd-menu__addon-after--submenu"></span>
                    </span>
                    <ul class="fd-menu__sublist" id="EX_AI_2b" aria-hidden="true" role="menu">
                        <li class="fd-menu__item" role="presentation">
                            <a class="fd-menu__link" href="#" role="menuitem">
                                <span class="fd-menu__title">Short</span>
                            </a>
                        </li>
                        <li class="fd-menu__item" role="presentation">
                            <a class="fd-menu__link" href="#" role="menuitem">
                                <span class="fd-menu__title">Medium</span>
                            </a>
                        </li>
                        <li class="fd-menu__item" role="presentation">
                            <a class="fd-menu__link" href="#" role="menuitem">
                                <span class="fd-menu__title">Long</span>
                            </a>
                        </li>
                    </ul>
                </li>
                <li class="fd-menu__item" role="presentation">
                    <a class="fd-menu__link" href="#" role="menuitem">
                        <span class="fd-menu__title">Bulleted List</span>
                    </a>
                </li>
                <li class="fd-menu__item" role="presentation">
                    <span
                        class="fd-menu__link has-child"
                        aria-controls="EX_AI_3b"
                        aria-expanded="false"
                        aria-haspopup="true"
                        role="menuitem"
                        onclick="onPopoverClick('EX_AI_3b')">
                        <span class="fd-menu__title">Translate</span>
                        <span class="fd-menu__addon-after fd-menu__addon-after--submenu"></span>
                    </span>
                    <ul class="fd-menu__sublist" id="EX_AI_3b" aria-hidden="true" role="menu">
                        <li class="fd-menu__item" role="presentation">
                            <div class="fd-menu__link" role="presentation">
                                <div class="fd-input-group">
                                    <input class="fd-input fd-input-group__input fd-menu__input" type="text" placeholder="Enter a language" id="aqwsde121efaerf" name="">
                                    <span class="fd-input-group__addon fd-input-group__addon--button">
                                        <button class="fd-input-group__button fd-button fd-button--icon fd-button--transparent" aria-label="Navigation">
                                            <i class="sap-icon--search"></i>
                                        </button>
                                    </span>
                                </div>
                            </div>
                        </li>
                        <li class="fd-menu__item" role="presentation">
                            <a class="fd-menu__link" href="#" role="menuitem">
                                <span class="fd-menu__title">English</span>
                            </a>
                        </li>
                        <li class="fd-menu__item" role="presentation">
                            <a class="fd-menu__link" href="#" role="menuitem">
                                <span class="fd-menu__title">German</span>
                            </a>
                        </li>
                        <li class="fd-menu__item" role="presentation">
                            <a class="fd-menu__link" href="#" role="menuitem">
                                <span class="fd-menu__title">Spanish</span>
                            </a>
                        </li>
                        <li class="fd-menu__item" role="presentation">
                            <a class="fd-menu__link" href="#" role="menuitem">
                                <span class="fd-menu__title">Bulgarian</span>
                            </a>
                        </li>
                        <li class="fd-menu__item" role="presentation">
                            <a class="fd-menu__link" href="#" role="menuitem">
                                <span class="fd-menu__title">Filipino</span>
                            </a>
                        </li>
                        <li class="fd-menu__item" role="presentation">
                            <a class="fd-menu__link" href="#" role="menuitem">
                                <span class="fd-menu__title">Italian</span>
                            </a>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
    </div>
</div>
```

## Modifiers

| Class | Description |
|-------|-------------|
| `fd-button--icon` | Style variant |
| `fd-button--transparent` | Style variant |

## BEM Elements

This component uses the following BEM elements:

- `fd-button__text`

## Examples

### AIQuickPrompt

```html
<h4>AI Button with Menu in one of the states</h4>
<button class="fd-button" aria-description="Uses Artificial Intelligence">
    <i class="sap-icon--ai"></i>
    <span class="fd-button__text">Generate</span>
</button>

<button class="fd-button" aria-description="Uses Artificial Intelligence">
    <i class="sap-icon--stop"></i>
    <span class="fd-button__text">Stop Generating</span>
</button>

<button class="fd-button" aria-description="Uses Artificial Intelligence">
    <i class="sap-icon--ai"></i>
    <span class="fd-button__text">Revise</span>
    <i class="sap-icon--slim-arrow-down"></i>
</button>

<div class="fd-popover">
    <div class="fd-popover__control">
        <button class="fd-button" aria-description="Uses Artificial Intelligence">
            <i class="sap-icon--ai"></i>
            <span class="fd-button__text">Revise</span>
            <i class="sap-icon--slim-arrow-down"></i>
        </button>
    </div>
    <div class="fd-popover__body fd-popover__body--no-arrow" aria-hidden="false">
        <nav class="fd-menu">
            <ul class="fd-menu__list" role="menu">
                <li class="fd-menu__item has-separator" role="presentation">
                    <a class="fd-menu__link" href="#" role="menuitem">
                        <span class="fd-menu__title">Regenerate</span>
                    </a>
                </li>
                <li class="fd-menu__item" role="presentation">
                    <a class="fd-menu__link" href="#" role="menuitem">
                        <span class="fd-menu__title">Fix Spelling & Grammar</span>
                    </a>
                </li>
                <li class="fd-menu__item" role="presentation">
                    <span
                        class="fd-menu__link has-child"
                        aria-controls="EX_AI_1"
                        aria-expanded="false"
                        aria-haspopup="true"
                        role="menuitem"
                        onclick="onPopoverClick('EX_AI_1')">
                        <span class="fd-menu__title">Change Tone</span>
                        <span class="fd-menu__addon-after fd-menu__addon-after--submenu"></span>
                    </span>
                    <ul class="fd-menu__sublist" id="EX_AI_1" aria-hidden="true" role="menu">
                        <li class="fd-menu__item" role="presentation">
                            <a class="fd-menu__link" href="#" role="menuitem">
                                <span class="fd-menu__title">Option 1</span>
                            </a>
                        </li>
                        <li class="fd-menu__item" role="presentation">
                            <a class="fd-menu__link" href="#" role="menuitem">
                                <span class="fd-menu__title">Option 2</span>
                            </a>
                        </li>
                        <li class="fd-menu__item" role="presentation">
                            <a class="fd-menu__link" href="#" role="menuitem">
                                <span class="fd-menu__title">Option 3</span>
                            </a>
                        </li>
                    </ul>
                </li>
                <li class="fd-menu__item" role="presentation">
                    <span
                        class="fd-menu__link has-child"
                        aria-controls="EX_AI_2"
                        aria-expanded="false"
                        aria-haspopup="true"
                        role="menuitem"
                        onclick="onPopoverClick('EX_AI_2')">
                        <span class="fd-menu__title">Text Length</span>
                        <span class="fd-menu__addon-after fd-menu__addon-after--submenu"></span>
                    </span>
                    <ul class="fd-menu__sublist" id="EX_AI_2" aria-hidden="true" role="menu">
                        <li class="fd-menu__item" role="presentation">
                            <a class="fd-menu__link" href="#" role="menuitem">
                                <span class="fd-menu__title">Short</span>
                            </a>
                        </li>
                        <li class="fd-menu__item" role="presentation">
                            <a class="fd-menu__link" href="#" role="menuitem">
                                <span class="fd-menu__title">Medium</span>
                            </a>
                        </li>
                        <li class="fd-menu__item" role="presentation">
                            <a class="fd-menu__link" href="#" role="menuitem">
                                <span class="fd-menu__title">Long</span>
                            </a>
                        </li>
                    </ul>
                </li>
                <li class="fd-menu__item" role="presentation">
                    <a class="fd-menu__link" href="#" role="menuitem">
                        <span class="fd-menu__title">Bulleted List</span>
                    </a>
                </li>
                <li class="fd-menu__item" role="presentation">
                    <span
                        class="fd-menu__link has-child"
                        aria-controls="EX_AI_3a"
                        aria-expanded="true"
                        aria-haspopup="true"
                        role="menuitem"
                        onclick="onPopoverClick('EX_AI_3a')">
                        <span class="fd-menu__title">Translate</span>
                        <span class="fd-menu__addon-after fd-menu__addon-after--submenu"></span>
                    </span>
                    <ul class="fd-menu__sublist" id="EX_AI_3a" aria-hidden="false" role="menu">
                        <li class="fd-menu__item" role="presentation">
                            <div class="fd-menu__link" role="presentation">
                                <div class="fd-input-group">
                                    <input class="fd-input fd-input-group__input fd-menu__input" type="text" placeholder="Enter a language" id="aqwsde121efaerf" name="">
                                    <span class="fd-input-group__addon fd-input-group__addon--button">
                                        <button class="fd-input-group__button fd-button fd-button--icon fd-button--transparent" aria-label="Navigation">
                                            <i class="sap-icon--search"></i>
                                        </button>
                                    </span>
                                </div>
                            </div>
                        </li>
                        <li class="fd-menu__item" role="presentation">
                            <a class="fd-menu__link" href="#" role="menuitem">
                                <span class="fd-menu__title">English</span>
                            </a>
                        </li>
                        <li class="fd-menu__item" role="presentation">
                            <a class="fd-menu__link" href="#" role="menuitem">
                                <span class="fd-menu__title">German</span>
                            </a>
                        </li>
                        <li class="fd-menu__item" role="presentation">
                            <a class="fd-menu__link" href="#" role="menuitem">
                                <span class="fd-menu__title">Spanish</span>
                            </a>
                        </li>
                        <li class="fd-menu__item" role="presentation">
                            <a class="fd-menu__link" href="#" role="menuitem">
                                <span class="fd-menu__title">Bulgarian</span>
                            </a>
                        </li>
                        <li class="fd-menu__item" role="presentation">
                            <a class="fd-menu__link" href="#" role="menuitem">
                                <span class="fd-menu__title">Filipino</span>
                            </a>
                        </li>
                        <li class="fd-menu__item" role="presentation">
                            <a class="fd-menu__link" href="#" role="menuitem">
                                <span class="fd-menu__title">Italian</span>
                            </a>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
    </div>
</div>

<h4>Icon-only AI Button with Menu in one of the states</h4>
<button class="fd-button" aria-label="Generate" aria-description="Uses Artificial Intelligence">
    <i class="sap-icon--ai"></i>
</button>

<button class="fd-button" aria-label="Stop Generating" aria-description="Uses Artificial Intelligence">
    <i class="sap-icon--stop"></i>
</button>

<button class="fd-button" aria-label="Revise" aria-description="Uses Artificial Intelligence">
    <i class="sap-icon--ai"></i>
    <i class="sap-icon--slim-arrow-down"></i>
</button>

<div class="fd-popover">
    <div class="fd-popover__control">
        <button class="fd-button" aria-label="Revise" aria-description="Uses Artificial Intelligence">
            <i class="sap-icon--ai"></i>
            <i class="sap-icon--slim-arrow-down"></i>
        </button>
    </div>
    <div class="fd-popover__body fd-popover__body--no-arrow" aria-hidden="false">
        <nav class="fd-menu">
            <ul class="fd-menu__list" role="menu">
                <li class="fd-menu__item has-separator" role="presentation">
                    <a class="fd-menu__link" href="#" role="menuitem">
                        <span class="fd-menu__title">Regenerate</span>
                    </a>
                </li>
                <li class="fd-menu__item" role="presentation">
                    <a class="fd-menu__link" href="#" role="menuitem">
                        <span class="fd-menu__title">Fix Spelling & Grammar</span>
                    </a>
                </li>
                <li class="fd-menu__item" role="presentation">
                    <span
                        class="fd-menu__link has-child"
                        aria-controls="EX_AI_1b"
                        aria-expanded="false"
                        aria-haspopup="true"
                        role="menuitem"
                        onclick="onPopoverClick('EX_AI_1b')">
                        <span class="fd-menu__title">Change Tone</span>
                        <span class="fd-menu__addon-after fd-menu__addon-after--submenu"></span>
                    </span>
                    <ul class="fd-menu__sublist" id="EX_AI_1b" aria-hidden="true" role="menu">
                        <li class="fd-menu__item" role="presentation">
                            <a class="fd-menu__link" href="#" role="menuitem">
                                <span class="fd-menu__title">Option 1</span>
                            </a>
                        </li>
                        <li class="fd-menu__item" role="presentation">
                            <a class="fd-menu__link" href="#" role="menuitem">
                                <span class="fd-menu__title">Option 2</span>
                            </a>
                        </li>
                        <li class="fd-menu__item" role="presentation">
                            <a class="fd-menu__link" href="#" role="menuitem">
                                <span class="fd-menu__title">Option 3</span>
                            </a>
                        </li>
                    </ul>
                </li>
                <li class="fd-menu__item" role="presentation">
                    <span
                        class="fd-menu__link has-child"
                        aria-controls="EX_AI_2b"
                        aria-expanded="false"
                        aria-haspopup="true"
                        role="menuitem"
                        onclick="onPopoverClick('EX_AI_2b')">
                        <span class="fd-menu__title">Text Length</span>
                        <span class="fd-menu__addon-after fd-menu__addon-after--submenu"></span>
                    </span>
                    <ul class="fd-menu__sublist" id="EX_AI_2b" aria-hidden="true" role="menu">
                        <li class="fd-menu__item" role="presentation">
                            <a class="fd-menu__link" href="#" role="menuitem">
                                <span class="fd-menu__title">Short</span>
                            </a>
                        </li>
                        <li class="fd-menu__item" role="presentation">
                            <a class="fd-menu__link" href="#" role="menuitem">
                                <span class="fd-menu__title">Medium</span>
                            </a>
                        </li>
                        <li class="fd-menu__item" role="presentation">
                            <a class="fd-menu__link" href="#" role="menuitem">
                                <span class="fd-menu__title">Long</span>
                            </a>
                        </li>
                    </ul>
                </li>
                <li class="fd-menu__item" role="presentation">
                    <a class="fd-menu__link" href="#" role="menuitem">
                        <span class="fd-menu__title">Bulleted List</span>
                    </a>
                </li>
                <li class="fd-menu__item" role="presentation">
                    <span
                        class="fd-menu__link has-child"
                        aria-controls="EX_AI_3b"
                        aria-expanded="false"
                        aria-haspopup="true"
                        role="menuitem"
                        onclick="onPopoverClick('EX_AI_3b')">
                        <span class="fd-menu__title">Translate</span>
                        <span class="fd-menu__addon-after fd-menu__addon-after--submenu"></span>
                    </span>
                    <ul class="fd-menu__sublist" id="EX_AI_3b" aria-hidden="true" role="menu">
                        <li class="fd-menu__item" role="presentation">
                            <div class="fd-menu__link" role="presentation">
                                <div class="fd-input-group">
                                    <input class="fd-input fd-input-group__input fd-menu__input" type="text" placeholder="Enter a language" id="aqwsde121efaerf" name="">
                                    <span class="fd-input-group__addon fd-input-group__addon--button">
                                        <button class="fd-input-group__button fd-button fd-button--icon fd-button--transparent" aria-label="Navigation">
                                            <i class="sap-icon--search"></i>
                                        </button>
                                    </span>
                                </div>
                            </div>
                        </li>
                        <li class="fd-menu__item" role="presentation">
                            <a class="fd-menu__link" href="#" role="menuitem">
                                <span class="fd-menu__title">English</span>
                            </a>
                        </li>
                        <li class="fd-menu__item" role="presentation">
                            <a class="fd-menu__link" href="#" role="menuitem">
                                <span class="fd-menu__title">German</span>
                            </a>
                        </li>
                        <li class="fd-menu__item" role="presentation">
                            <a class="fd-menu__link" href="#" role="menuitem">
                                <span class="fd-menu__title">Spanish</span>
                            </a>
                        </li>
                        <li class="fd-menu__item" role="presentation">
                            <a class="fd-menu__link" href="#" role="menuitem">
                                <span class="fd-menu__title">Bulgarian</span>
                            </a>
                        </li>
                        <li class="fd-menu__item" role="presentation">
                            <a class="fd-menu__link" href="#" role="menuitem">
                                <span class="fd-menu__title">Filipino</span>
                            </a>
                        </li>
                        <li class="fd-menu__item" role="presentation">
                            <a class="fd-menu__link" href="#" role="menuitem">
                                <span class="fd-menu__title">Italian</span>
                            </a>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
    </div>
</div>
```

## Accessibility

- Use semantic HTML elements where appropriate
- Include proper ARIA attributes for interactive elements
- Ensure keyboard navigation support
- Provide adequate color contrast

## Source

This documentation was automatically generated from: `packages/styles/stories/AI/Patterns/ai-quick-prompt/ai-quick-prompt.stories.js`

For the latest updates and interactive examples, see [Storybook](https://sap.github.io/fundamental-styles/).
