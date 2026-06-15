---
component: fd-tool-layout
title: Layouts/Tool Layout
category: Layouts
selector: fd-tool-layout
cssFile: tool-layout.css
sourcePath: packages/styles/stories/Layouts/tool-layout/tool-layout.stories.js
tags: []
dependencies: ["tool-layout"]
relatedComponents: ["tool-layout"]
stability: stable
---

# Layouts/Tool Layout

## Anatomy
- <b>Tool Header </b>- always present and is a top-aligned UI element that contains global actions and controls navigation
- <b>Navigation </b>- side navigation in all of its variants (expanded, snapped)
- <b>Content </b>- an empty container area that can hold any content.

## Structure
- <code>.fd-tool-layout</code>
  - <code>.fd-tool-layout--tablet</code>&nbsp; - modifier class for tablets
  - <code>.fd-tool-layout--phone</code>&nbsp; - modifier class for phones
  - <code>.fd-tool-layout--sticky</code>&nbsp; - modifier class for positioning the header on the top
  - <code>.fd-tool-layout--horizontal-navigation</code>&nbsp; - modifier class for layout with Horizontal Navigation
- <code>.fd-tool-layout\\_\\_container</code>
- <code>.fd-tool-layout\\_\\_header-container</code>&nbsp; - wraping element around the Tool Header
- <code>.fd-tool-layout\\_\\_navigation-container</code>&nbsp; - wraping element around the Navigation (all its variants)
  - <code>.fd-tool-layout\\_\\_navigation-container--horizontal</code>&nbsp; - modifier class for when the navigation is horizontal
- <code>.fd-tool-layout\\_\\_content-container</code>&nbsp; - wraping element around the page content. By default, the background of the content area is <code>var(--sapBackgroundColor)</code>
  - <code>.fd-tool-layout\\_\\_content-container--transparent</code>&nbsp; - modifier class to apply transparent background to the content area.
  - <code>.fd-tool-layout\\_\\_content-container--list</code>&nbsp; - modifier class to apply list <code>var(--sapGroup_ContentBackground)</code> background to the content area.

## Dependencies

This component depends on the following CSS files:

- `tool-layout.css`

## Installation

```bash
npm install fundamental-styles
```

```html
<!-- Include theme -->
<link href="node_modules/fundamental-styles/dist/theming/sap_horizon.css" rel="stylesheet">

<!-- Include component CSS -->
<link href="node_modules/fundamental-styles/dist/tool-layout.css" rel="stylesheet">

<!-- Include dependencies -->
<link href="node_modules/fundamental-styles/dist/tool-layout.css" rel="stylesheet">
```

## Basic Usage

```html
<div class="fd-tool-layout">

</div>
```

## Modifiers

| Class | Description |
|-------|-------------|
| `fd-tool-layout--horizontal-navigation` | Style variant |
| `fd-tool-layout--phone` | Apply the <code>fd-tool-layout--phone</code> modifier class for mobile devices. |
| `fd-tool-layout--sticky` | The <code>fd-tool-layout--sticky</code> modifier class will position the whole layout absolutely with the header container always on top |
| `fd-tool-layout--tablet` | Apply the <code>fd-tool-layout--tablet</code> modifier class for tablet devices. |

## BEM Elements

This component uses the following BEM elements:

- `fd-tool-layout__container`
- `fd-tool-layout__content-container`
- `fd-tool-layout__header-container`
- `fd-tool-layout__navigation-container`
- `fd-tool-layout__navigation-container--horizontal`

## Component Structure

- <code>.fd-tool-layout</code>
  - <code>.fd-tool-layout--tablet</code>&nbsp; - modifier class for tablets
  - <code>.fd-tool-layout--phone</code>&nbsp; - modifier class for phones
  - <code>.fd-tool-layout--sticky</code>&nbsp; - modifier class for positioning the header on the top
  - <code>.fd-tool-layout--horizontal-navigation</code>&nbsp; - modifier class for layout with Horizontal Navigation
- <code>.fd-tool-layout\\_\\_container</code>
- <code>.fd-tool-layout\\_\\_header-container</code>&nbsp; - wraping element around the Tool Header
- <code>.fd-tool-layout\\_\\_navigation-container</code>&nbsp; - wraping element around the Navigation (all its variants)
  - <code>.fd-tool-layout\\_\\_navigation-container--horizontal</code>&nbsp; - modifier class for when the navigation is horizontal
- <code>.fd-tool-layout\\_\\_content-container</code>&nbsp; - wraping element around the page content. By default, the background of the content area is <code>var(--sapBackgroundColor)</code>
  - <code>.fd-tool-layout\\_\\_content-container--transparent</code>&nbsp; - modifier class to apply transparent background to the content area.
  - <code>.fd-tool-layout\\_\\_content-container--list</code>&nbsp; - modifier class to apply list <code>var(--sapGroup_ContentBackground)</code> background to the content area.

## Related Components

This component works with or depends on:

- `tool-layout`

## Design Tokens

Key CSS variables used by this component:

- `--fdToolLayout_Background`
- `--fdToolLayout_Content_Container_Background`
- `--fdToolLayout_Content_Container_Border_Radius`
- `--fdToolLayout_Content_Container_BoxShadow`
- `--fdToolLayout_Gap`
- `--fdToolLayout_Padding_Block`
- `--fdToolLayout_Padding_Inline`
- `--horizontal`
- `--horizontal-navigation`
- `--list`
- `--phone`
- `--sapBackgroundColor`
- `--sapContent_Shadow0`
- `--sapGroup_ContentBackground`
- `--sticky`

*...and 2 more*

## Examples

### Desktop

```html
<div class="fd-tool-layout">

</div>
```

### Sticky

The <code>fd-tool-layout--sticky</code> modifier class will position the whole layout absolutely with the header container always on top. The navigation and content containers receive the scroll overflow.

```html
<div class="fd-tool-layout fd-tool-layout--sticky">
    <div class="fd-tool-layout__container">

        <div class="fd-tool-layout__container">

            <div class="fd-tool-layout__content-container">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
            </div>
        </div>
    </div>
</div>
```

### Tablet

Apply the <code>fd-tool-layout--tablet</code> modifier class for tablet devices.

```html
<h4>With Vertical Navigation</h4>
<div class="fd-tool-layout fd-tool-layout--tablet">
    <div class="fd-tool-layout__container">

    </div>
</div>
<h4>With Horizontal Navigation</h4>
<div class="fd-tool-layout fd-tool-layout--tablet fd-tool-layout--horizontal-navigation">
    <div class="fd-tool-layout__container">

    </div>
</div>
```

### Mobile

Apply the <code>fd-tool-layout--phone</code> modifier class for mobile devices.

```html
<div class="fd-tool-layout fd-tool-layout--phone">
    <div class="fd-tool-layout__container">

    </div>
</div>
```

## Accessibility

- Use semantic HTML elements where appropriate
- Include proper ARIA attributes for interactive elements
- Ensure keyboard navigation support
- Provide adequate color contrast

## Source

This documentation was automatically generated from: `packages/styles/stories/Layouts/tool-layout/tool-layout.stories.js`

For the latest updates and interactive examples, see [Storybook](https://sap.github.io/fundamental-styles/).
