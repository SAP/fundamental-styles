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
generatedAt: 2026-06-08T17:49:02.103Z
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
        <span class="fd-avatar fd-avatar--sm fd-avatar--circle fd-avatar--accent-color-10" aria-role="img" aria-label="John Doe">JD</span>
        <div class="fd-list__content">
            <div class="fd-list__title">List Item Title Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt, quod deleniti optio earum voluptatem in, nam et ratione aliquam error facilis expedita magnam repudiandae rerum sint blanditiis rem quo? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt, quod deleniti optio earum voluptatem in, nam et ratione aliquam error facilis expedita magnam repudiandae rerum sint blanditiis rem quo!</div>
            <div class="fd-list__subline">List Item Subline Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia saepe doloribus nulla aliquid soluta aperiam, amet iste sint? Explicabo dicta doloremque amet minima perferendis. Necessitatibus reiciendis voluptatum id nesciunt earum! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt, quod deleniti optio earum voluptatem in, nam et ratione aliquam error facilis expedita magnam repudiandae rerum sint blanditiis rem quo.</div>
            <div class="fd-list__subline">List Item Subline Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque asperiores id deleniti quae? Amet officia cum assumenda. Ab, dolores ea dignissimos, aliquid beatae magnam commodi, tenetur facere harum ex nemo? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt, quod deleniti optio earum voluptatem in, nam et ratione aliquam error facilis expedita magnam repudiandae rerum sint blanditiis rem quo.</div>
        </div>
    </li>
    <li role="listitem" tabindex="0" class="fd-list__item fd-list__item--interractive">
        <span class="fd-avatar fd-avatar--sm fd-avatar--thumbnail" role="img" aria-label="John Doe"></span>
        <div class="fd-list__content">
            <div class="fd-list__title fd-list__title--truncate">List Item Title Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt, quod deleniti optio earum voluptatem in, nam et ratione aliquam error facilis expedita magnam repudiandae rerum sint blanditiis rem quo? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt, quod deleniti optio earum voluptatem in, nam et ratione aliquam error facilis expedita magnam repudiandae rerum sint blanditiis rem quo!</div>
            <div class="fd-list__subline fd-list__subline--truncate">List Item Subline Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia saepe doloribus nulla aliquid soluta aperiam, amet iste sint? Explicabo dicta doloremque amet minima perferendis. Necessitatibus reiciendis voluptatum id nesciunt earum! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt, quod deleniti optio earum voluptatem in, nam et ratione aliquam error facilis expedita magnam repudiandae rerum sint blanditiis rem quo.</div>
            <div class="fd-list__subline fd-list__subline--truncate">List Item Subline Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque asperiores id deleniti quae? Amet officia cum assumenda. Ab, dolores ea dignissimos, aliquid beatae magnam commodi, tenetur facere harum ex nemo? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt, quod deleniti optio earum voluptatem in, nam et ratione aliquam error facilis expedita magnam repudiandae rerum sint blanditiis rem quo.</div>
        </div>
    </li>
</ul>
```

## Modifiers

| Class | Description |
|-------|-------------|
| `fd-list--subline` | This is structure of the custom list item is being used to display the accounts in USer Menu. |

## BEM Elements

This component uses the following BEM elements:

- `fd-list__active-indicator`
- `fd-list__content`
- `fd-list__item`
- `fd-list__item--interractive`
- `fd-list__subline`
- `fd-list__subline--truncate`
- `fd-list__title`
- `fd-list__title--truncate`

## Examples

### Custom List Item with Subline

This is structure of the custom list item is being used to display the accounts in USer Menu.

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
        <span class="fd-avatar fd-avatar--sm fd-avatar--circle fd-avatar--accent-color-10" aria-role="img" aria-label="John Doe">JD</span>
        <div class="fd-list__content">
            <div class="fd-list__title">List Item Title Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt, quod deleniti optio earum voluptatem in, nam et ratione aliquam error facilis expedita magnam repudiandae rerum sint blanditiis rem quo? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt, quod deleniti optio earum voluptatem in, nam et ratione aliquam error facilis expedita magnam repudiandae rerum sint blanditiis rem quo!</div>
            <div class="fd-list__subline">List Item Subline Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia saepe doloribus nulla aliquid soluta aperiam, amet iste sint? Explicabo dicta doloremque amet minima perferendis. Necessitatibus reiciendis voluptatum id nesciunt earum! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt, quod deleniti optio earum voluptatem in, nam et ratione aliquam error facilis expedita magnam repudiandae rerum sint blanditiis rem quo.</div>
            <div class="fd-list__subline">List Item Subline Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque asperiores id deleniti quae? Amet officia cum assumenda. Ab, dolores ea dignissimos, aliquid beatae magnam commodi, tenetur facere harum ex nemo? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt, quod deleniti optio earum voluptatem in, nam et ratione aliquam error facilis expedita magnam repudiandae rerum sint blanditiis rem quo.</div>
        </div>
    </li>
    <li role="listitem" tabindex="0" class="fd-list__item fd-list__item--interractive">
        <span class="fd-avatar fd-avatar--sm fd-avatar--thumbnail" role="img" aria-label="John Doe"></span>
        <div class="fd-list__content">
            <div class="fd-list__title fd-list__title--truncate">List Item Title Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt, quod deleniti optio earum voluptatem in, nam et ratione aliquam error facilis expedita magnam repudiandae rerum sint blanditiis rem quo? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt, quod deleniti optio earum voluptatem in, nam et ratione aliquam error facilis expedita magnam repudiandae rerum sint blanditiis rem quo!</div>
            <div class="fd-list__subline fd-list__subline--truncate">List Item Subline Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia saepe doloribus nulla aliquid soluta aperiam, amet iste sint? Explicabo dicta doloremque amet minima perferendis. Necessitatibus reiciendis voluptatum id nesciunt earum! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt, quod deleniti optio earum voluptatem in, nam et ratione aliquam error facilis expedita magnam repudiandae rerum sint blanditiis rem quo.</div>
            <div class="fd-list__subline fd-list__subline--truncate">List Item Subline Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque asperiores id deleniti quae? Amet officia cum assumenda. Ab, dolores ea dignissimos, aliquid beatae magnam commodi, tenetur facere harum ex nemo? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt, quod deleniti optio earum voluptatem in, nam et ratione aliquam error facilis expedita magnam repudiandae rerum sint blanditiis rem quo.</div>
        </div>
    </li>
</ul>
```

## Accessibility

- Use semantic HTML elements where appropriate
- Include proper ARIA attributes for interactive elements
- Ensure keyboard navigation support
- Provide adequate color contrast

## Source

This documentation was automatically generated from: `packages/styles/stories/Components/List/list/subline/subline-list.stories.js`

For the latest updates and interactive examples, see [Storybook](https://sap.github.io/fundamental-styles/).
