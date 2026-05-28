---
component: overflow
title: Overflow
category: overflow
selector: 
cssFile: 
sourcePath: packages/common-css/stories/overflow/overflow.stories.js
tags: []
dependencies: []
relatedComponents: []
stability: stable
generatedAt: 2026-05-28T16:47:21.387Z
---

# Overflow

The overflow property controls what happens to content that is too big to fit into an area. <br>
        The following values are available:
        <ul>
            <li><b>visible</b>: default value. The overflow is not clipped and the content renders outside the element's box</li>
            <li><b>hidden</b>: the overflow is clipped to fit into the area, and the rest of the content will be hidden</li>
            <li><b>scroll</b>: the overflow is clipped, and a scrollbar is added to see the rest of the content</li>
            <li><b>auto</b>: the overflow is not clipped, scrollbars are added only when necessary</li>
        </ul>

## Basic Usage

```html
<div>
    <div class="sap-overflow-visible">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </div>
</div>
```

## Examples

### OverflowVisible

For overflow visible use: <code>.sap-overflow-visible</code>, <code>.sap-overflow-x-visible</code> or <code>.sap-overflow-y-visible</code> classes.

```html
<div>
    <div class="sap-overflow-visible">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </div>
</div>
```

### OverflowHidden

For overflow hidden use: <code>.sap-overflow-hidden</code>, <code>.sap-overflow-x-hidden</code> or <code>.sap-overflow-y-hidden</code> classes.

```html
<div>
    <div class="sap-overflow-hidden">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </div>
</div>
```

### OverflowScroll

For overflow scroll use: <code>.sap-overflow-scroll</code>, <code>.sap-overflow-x-scroll</code> or <code>.sap-overflow-y-scroll</code> classes.

```html
<div>
    <div class="sap-overflow-scroll">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </div>
</div>
```

### OverflowAuto

For overflow auto use: <code>.sap-overflow-auto</code>, <code>.sap-overflow-x-auto</code> or <code>.sap-overflow-y-auto</code> classes.

```html
<div>
    <div class="sap-overflow-auto">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </div>
</div>
```

## Accessibility

- Use semantic HTML elements where appropriate
- Include proper ARIA attributes for interactive elements
- Ensure keyboard navigation support
- Provide adequate color contrast

## Source

This documentation was automatically generated from: `packages/common-css/stories/overflow/overflow.stories.js`

For the latest updates and interactive examples, see [Storybook](https://sap.github.io/fundamental-styles/).
