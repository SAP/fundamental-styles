---
component: fd-list
title: Components/List/Subline
category: Components
selector: fd-list
cssFile: list.css
sourcePath: packages/styles/stories/Components/List/list/subline/subline-list.stories.js
tags: []
dependencies: []
relatedComponents: []
stability: stable
---

# Components/List/Subline



## Installation

```bash
npm install fundamental-styles
```

```html
<!-- Include theme -->
<link href="node_modules/fundamental-styles/dist/theming/sap_horizon.css" rel="stylesheet">

<!-- Include component CSS -->
<link href="node_modules/fundamental-styles/dist/list.css" rel="stylesheet">

```

## Basic Usage

```html
<ul class="fd-list fd-list--subline" role="list">
    <li role="listitem" tabindex="0" class="fd-list__item fd-list__item--interractive">
        <span class="fd-avatar fd-avatar--sm fd-avatar--circle fd-avatar--thumbnail" role="img" aria-label="Jane Doe"></span>
        <div class="fd-list__content">
            <div class="fd-list__title">List Item Title</div>
            <div class="fd-list__subline">List Item Subline</div>
            <div class="fd-list__subline">List Item Subline</div>
        </div>
    </li>
    <li role="listitem" tabindex="0" class="fd-list__item fd-list__item--interractive">
        <span class="fd-avatar fd-avatar--sm fd-avatar--circle fd-avatar--thumbnail" role="img" aria-label="John Doe"></span>
        <div class="fd-list__content">
            <div class="fd-list__title">List Item Title</div>
            <div class="fd-list__subline">List Item Subline</div>
            <div class="fd-list__subline">List Item Subline</div>
        </div>
        <span class="fd-list__active-indicator sap-icon--sys-enter-2"></span>
    </li>
    <li role="listitem" tabindex="0" class="fd-list__item fd-list__item--interractive">
        <span class="fd-avatar fd-avatar--sm fd-avatar--circle fd-avatar--accent-color-10" role="img" aria-label="John Doe">JD</span>
        <div class="fd-list__content">
            <div class="fd-list__title">List Item Title Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt, quod deleniti optio earum voluptatem in, nam et ratione aliquam error facilis expedita magnam repudiandae rerum sint blanditiis rem quo?</div>
            <div class="fd-list__subline">List Item Subline Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia saepe doloribus nulla aliquid soluta aperiam, amet iste sint? Explicabo dicta doloremque amet minima perferendis.</div>
            <div class="fd-list__subline">List Item Subline Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque asperiores id deleniti quae? Amet officia cum assumenda.</div>
        </div>
    </li>
    <li role="listitem" tabindex="0" class="fd-list__item fd-list__item--interractive">
        <span class="fd-avatar fd-avatar--sm fd-avatar--thumbnail" role="img" aria-label="John Doe"></span>
        <div class="fd-list__content">
            <div class="fd-list__title fd-list__title--wrap">List Item Title Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt, quod deleniti optio earum voluptatem in, nam et ratione aliquam error facilis expedita magnam repudiandae rerum sint blanditiis rem quo?</div>
            <div class="fd-list__subline fd-list__subline--wrap">List Item Subline Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia saepe doloribus nulla aliquid soluta aperiam, amet iste sint? Explicabo dicta doloremque amet minima perferendis.</div>
            <div class="fd-list__subline fd-list__subline--wrap">List Item Subline Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque asperiores id deleniti quae? Amet officia cum assumenda.</div>
        </div>
    </li>
</ul>
```

## Modifiers

| Class | Description |
|-------|-------------|
| `fd-list--subline` | This list item structure is used to display accounts in the User Menu |
| `fd-list--wrap` | This list item structure is used to display accounts in the User Menu |

## BEM Elements

This component uses the following BEM elements:

- `fd-list__active-indicator`
- `fd-list__content`
- `fd-list__item`
- `fd-list__item--interractive`
- `fd-list__item--wrap`
- `fd-list__link--more`
- `fd-list__subline`
- `fd-list__subline--wrap`
- `fd-list__title`
- `fd-list__title--wrap`

## Examples

### Custom List Item with Subline

This list item structure is used to display accounts in the User Menu. By default, long title and subline text is truncated with an ellipsis. To allow the text to wrap across multiple lines, add the \

```html
<ul class="fd-list fd-list--subline" role="list">
    <li role="listitem" tabindex="0" class="fd-list__item fd-list__item--interractive">
        <span class="fd-avatar fd-avatar--sm fd-avatar--circle fd-avatar--thumbnail" role="img" aria-label="Jane Doe"></span>
        <div class="fd-list__content">
            <div class="fd-list__title">List Item Title</div>
            <div class="fd-list__subline">List Item Subline</div>
            <div class="fd-list__subline">List Item Subline</div>
        </div>
    </li>
    <li role="listitem" tabindex="0" class="fd-list__item fd-list__item--interractive">
        <span class="fd-avatar fd-avatar--sm fd-avatar--circle fd-avatar--thumbnail" role="img" aria-label="John Doe"></span>
        <div class="fd-list__content">
            <div class="fd-list__title">List Item Title</div>
            <div class="fd-list__subline">List Item Subline</div>
            <div class="fd-list__subline">List Item Subline</div>
        </div>
        <span class="fd-list__active-indicator sap-icon--sys-enter-2"></span>
    </li>
    <li role="listitem" tabindex="0" class="fd-list__item fd-list__item--interractive">
        <span class="fd-avatar fd-avatar--sm fd-avatar--circle fd-avatar--accent-color-10" role="img" aria-label="John Doe">JD</span>
        <div class="fd-list__content">
            <div class="fd-list__title">List Item Title Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt, quod deleniti optio earum voluptatem in, nam et ratione aliquam error facilis expedita magnam repudiandae rerum sint blanditiis rem quo?</div>
            <div class="fd-list__subline">List Item Subline Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia saepe doloribus nulla aliquid soluta aperiam, amet iste sint? Explicabo dicta doloremque amet minima perferendis.</div>
            <div class="fd-list__subline">List Item Subline Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque asperiores id deleniti quae? Amet officia cum assumenda.</div>
        </div>
    </li>
    <li role="listitem" tabindex="0" class="fd-list__item fd-list__item--interractive">
        <span class="fd-avatar fd-avatar--sm fd-avatar--thumbnail" role="img" aria-label="John Doe"></span>
        <div class="fd-list__content">
            <div class="fd-list__title fd-list__title--wrap">List Item Title Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt, quod deleniti optio earum voluptatem in, nam et ratione aliquam error facilis expedita magnam repudiandae rerum sint blanditiis rem quo?</div>
            <div class="fd-list__subline fd-list__subline--wrap">List Item Subline Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia saepe doloribus nulla aliquid soluta aperiam, amet iste sint? Explicabo dicta doloremque amet minima perferendis.</div>
            <div class="fd-list__subline fd-list__subline--wrap">List Item Subline Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque asperiores id deleniti quae? Amet officia cum assumenda.</div>
        </div>
    </li>
</ul>
```

### Subline List with Wrapping Text

By default, long title and subline text is truncated with an ellipsis. Wrapping can be enabled at three levels:

**List level** — add \

```html
<p class="fd-form-label">Default — truncation</p>
<ul class="fd-list fd-list--subline" role="list">
    <li role="listitem" tabindex="0" class="fd-list__item fd-list__item--interractive">
        <span class="fd-avatar fd-avatar--sm fd-avatar--circle fd-avatar--accent-color-10" role="img" aria-label="Michael Thompson">MT</span>
        <div class="fd-list__content">
            <div class="fd-list__title">Annual Budget Review for Q3 and Q4 — please review the attached documents and provide your feedback before the end of the fiscal quarter to ensure timely processing.</div>
            <div class="fd-list__subline">Finance · Updated 2 hours ago by Michael Thompson, Senior Analyst, Global Finance Division · Reviewed by Anna Schmidt · Pending CFO approval</div>
        </li>
    </ul>
</div>

<p class="fd-form-label">List level — <code>fd-list--wrap</code></p>
<ul class="fd-list fd-list--subline fd-list--wrap" role="list">
    <li role="listitem" tabindex="0" class="fd-list__item fd-list__item--interractive">
        <span class="fd-avatar fd-avatar--sm fd-avatar--circle fd-avatar--accent-color-10" role="img" aria-label="John Doe">JD</span>
        <div class="fd-list__content">
            <div class="fd-list__title">All titles wrap at list level, Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, quod deleniti optio earum voluptatem in, nam et ratione aliquam error facilis expedita magnam repudiandae rerum sint blanditiis rem quo?</div>
            <div class="fd-list__subline">All sublines wrap too, Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia saepe doloribus nulla aliquid soluta aperiam, amet iste sint? Explicabo dicta doloremque amet minima perferendis.</div>
        </li>
    </ul>
</div>

<p class="fd-form-label">Item level — <code>fd-list__item--wrap</code> (collapsed and expanded states)</p>
<!-- The fd-list__link--more element is placed outside fd-list__title so it stays
visible even when the title truncates. -->
<ul class="fd-list fd-list--subline" role="list">
    <li role="listitem" tabindex="0" class="fd-list__item fd-list__item--interractive">
        <span class="fd-avatar fd-avatar--sm fd-avatar--circle fd-avatar--accent-color-10" role="img" aria-label="John Doe">JD</span>
        <div class="fd-list__content">
            <div class="fd-list__title">Collapsed — title truncated, Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, quod deleniti optio earum voluptatem in, nam et ratione aliquam error facilis expedita magnam repudiandae rerum sint blanditiis rem quo?</div>
            <a href="#" class="fd-link fd-list__link--more" aria-expanded="false" tabindex="0"><span class="fd-link__content">More</span></a>
            <div class="fd-list__subline">Subline truncated, Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia saepe doloribus nulla aliquid soluta aperiam, amet iste sint? Explicabo dicta doloremque.</div>
        </li>
        <li role="listitem" tabindex="0" class="fd-list__item fd-list__item--interractive fd-list__item--wrap">
            <span class="fd-avatar fd-avatar--sm fd-avatar--circle fd-avatar--accent-color-10" role="img" aria-label="John Doe">JD</span>
            <div class="fd-list__content">
                <div class="fd-list__title">Expanded — fd-list__item--wrap applied, Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, quod deleniti optio earum voluptatem in, nam et ratione aliquam error facilis expedita magnam repudiandae rerum sint blanditiis rem quo? <a href="#" class="fd-link fd-list__link--more" aria-expanded="true" tabindex="0"><span class="fd-link__content">Less</span></a></div>
                <div class="fd-list__subline">Subline wraps too, Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia saepe doloribus nulla aliquid soluta aperiam, amet iste sint? Explicabo dicta doloremque amet minima perferendis.</div>
            </div>
        </li>
    </ul>
</div>

<div>
    <p class="fd-form-label">Element level — <code>fd-list__title--wrap</code> / <code>fd-list__subline--wrap</code></p>
    <ul class="fd-list fd-list--subline" role="list">
        <li role="listitem" tabindex="0" class="fd-list__item fd-list__item--interractive">
            <span class="fd-avatar fd-avatar--sm fd-avatar--circle fd-avatar--accent-color-10" role="img" aria-label="John Doe">JD</span>
            <div class="fd-list__content">
                <div class="fd-list__title fd-list__title--wrap">Only the title wraps here, Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, quod deleniti optio earum voluptatem in, nam et ratione aliquam error facilis expedita magnam repudiandae rerum sint blanditiis rem quo?</div>
                <div class="fd-list__subline">Subline still truncates, Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia saepe doloribus nulla aliquid soluta aperiam, amet iste sint? Explicabo dicta doloremque.</div>
            </div>
        </li>
        <li role="listitem" tabindex="0" class="fd-list__item fd-list__item--interractive">
            <span class="fd-avatar fd-avatar--sm fd-avatar--circle fd-avatar--accent-color-6" role="img" aria-label="Jane Doe">JD</span>
            <div class="fd-list__content">
                <div class="fd-list__title">Title still truncates, Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, quod deleniti optio earum voluptatem in, nam et ratione aliquam error facilis expedita.</div>
                <div class="fd-list__subline fd-list__subline--wrap">Only the subline wraps here, Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia saepe doloribus nulla aliquid soluta aperiam, amet iste sint? Explicabo dicta doloremque amet minima perferendis.</div>
            </div>
        </li>
    </ul>
</div>
```

## Accessibility

- Use semantic HTML elements where appropriate
- Include proper ARIA attributes for interactive elements
- Ensure keyboard navigation support
- Provide adequate color contrast

## Source

This documentation was automatically generated from: `packages/styles/stories/Components/List/list/subline/subline-list.stories.js`

For the latest updates and interactive examples, see [Storybook](https://sap.github.io/fundamental-styles/).
