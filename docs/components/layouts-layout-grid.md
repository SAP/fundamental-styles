---
component: layout-grid
title: Layouts/Layout Grid
category: Layouts
selector: 
cssFile: 
sourcePath: packages/styles/stories/Layouts/layout-grid/layout-grid.stories.js
tags: []
dependencies: ["layout-grid"]
relatedComponents: ["layout-grid"]
stability: stable
generatedAt: 2026-06-01T19:24:00.288Z
---

# Layouts/Layout Grid

The layout grid is made to separate data into both columns and rows. If there is not enough space on the current line of the same row, the item will go to the next line.
To use the grid, the user must use all of the \

## Dependencies

This component depends on the following CSS files:

- `layout-grid.css`

## Basic Usage

```html
<div class='fd-container'>
    <div class='fd-row'>
        <div class='fd-col'>
            <div class='docs-layout-grid-bg docs-layout-grid-bg--color-1'>12 columns element</div>
        </div>
    </div>

    <div class='fd-row'>
        <div class='fd-col fd-col--11'>
            <div class='docs-layout-grid-bg docs-layout-grid-bg--color-2'>11 columns element</div>
        </div>
        <div class='fd-col fd-col--1'>
            <div class='docs-layout-grid-bg docs-layout-grid-bg--color-3'>1 column element</div>
        </div>
    </div>

    <div class='fd-row'>
        <div class='fd-col fd-col--10'>
            <div class='docs-layout-grid-bg docs-layout-grid-bg--color-4'>10 columns element</div>
        </div>
        <div class='fd-col fd-col--2'>
            <div class='docs-layout-grid-bg docs-layout-grid-bg--color-5'>2 columns element</div>
        </div>
    </div>

    <div class='fd-row'>
        <div class='fd-col fd-col--9'>
            <div class='docs-layout-grid-bg docs-layout-grid-bg--color-6'>9 columns element</div>
        </div>
        <div class='fd-col fd-col--3'>
            <div class='docs-layout-grid-bg docs-layout-grid-bg--color-7'>3 columns element</div>
        </div>
    </div>

    <div class='fd-row'>
        <div class='fd-col fd-col--8'>
            <div class='docs-layout-grid-bg docs-layout-grid-bg--color-8'>8 columns element</div>
        </div>
        <div class='fd-col fd-col--4'>
            <div class='docs-layout-grid-bg docs-layout-grid-bg--color-9'>4 columns element</div>
        </div>
    </div>

    <div class='fd-row'>
        <div class='fd-col fd-col--7'>
            <div class='docs-layout-grid-bg docs-layout-grid-bg--color-10'>7 columns element</div>
        </div>
        <div class='fd-col fd-col--5'>
            <div class='docs-layout-grid-bg docs-layout-grid-bg--color-11'>5 columns element</div>
        </div>
    </div>

    <div class='fd-row'>
        <div class='fd-col fd-col--6'>
            <div class='docs-layout-grid-bg docs-layout-grid-bg--color-12'>6 columns element</div>
        </div>
        <div class='fd-col fd-col--6'>
            <div class='docs-layout-grid-bg docs-layout-grid-bg--color-1'>6 columns element</div>
        </div>
    </div>

    <div class='fd-row'>
        <div class='fd-col fd-col--5'>
            <div class='docs-layout-grid-bg docs-layout-grid-bg--color-2'>5 columns element</div>
        </div>
        <div class='fd-col fd-col--7'>
            <div class='docs-layout-grid-bg docs-layout-grid-bg--color-3'>7 columns element</div>
        </div>
    </div>

    <div class='fd-row'>
        <div class='fd-col fd-col--4'>
            <div class='docs-layout-grid-bg docs-layout-grid-bg--color-4'>4 columns element</div>
        </div>
        <div class='fd-col fd-col--8'>
            <div class='docs-layout-grid-bg docs-layout-grid-bg--color-5'>8 columns element</div>
        </div>
    </div>

    <div class='fd-row'>
        <div class='fd-col fd-col--3'>
            <div class='docs-layout-grid-bg docs-layout-grid-bg--color-6'>3 columns element</div>
        </div>
        <div class='fd-col fd-col--9'>
            <div class='docs-layout-grid-bg docs-layout-grid-bg--color-7'>9 columns element</div>
        </div>
    </div>

    <div class='fd-row'>
        <div class='fd-col fd-col--2'>
            <div class='docs-layout-grid-bg docs-layout-grid-bg--color-8'>2 columns element</div>
        </div>
        <div class='fd-col fd-col--10'>
            <div class='docs-layout-grid-bg docs-layout-grid-bg--color-9'>10 columns element</div>
        </div>
    </div>

    <div class='fd-row'>
        <div class='fd-col fd-col--1'>
            <div class='docs-layout-grid-bg docs-layout-grid-bg--color-10'>1 column element</div>
        </div>
        <div class='fd-col fd-col--11'>
            <div class='docs-layout-grid-bg docs-layout-grid-bg--color-11'>11 columns element</div>
        </div>
    </div>

    <div class='fd-row'>
        <div class='fd-col'>
            <div class='docs-layout-grid-bg docs-layout-grid-bg--color-12'>12 columns element</div>
        </div>
    </div>
</div>
```

## Related Components

This component works with or depends on:

- `layout-grid`

## Design Tokens

Key CSS variables used by this component:

- `--full`
- `--no-gap`
- `--no-horizontal-gap`
- `--no-vertical-gap`
- `--offset-`
- `--offset-after-`
- `--wrap`

## Examples

### DifferentSizeColumns

To define the size of that column use the `fd-col--x` modifier, where `x` can go from 1-12

```html
<div class='fd-container'>
    <div class='fd-row'>
        <div class='fd-col'>
            <div class='docs-layout-grid-bg docs-layout-grid-bg--color-1'>12 columns element</div>
        </div>
    </div>

    <div class='fd-row'>
        <div class='fd-col fd-col--11'>
            <div class='docs-layout-grid-bg docs-layout-grid-bg--color-2'>11 columns element</div>
        </div>
        <div class='fd-col fd-col--1'>
            <div class='docs-layout-grid-bg docs-layout-grid-bg--color-3'>1 column element</div>
        </div>
    </div>

    <div class='fd-row'>
        <div class='fd-col fd-col--10'>
            <div class='docs-layout-grid-bg docs-layout-grid-bg--color-4'>10 columns element</div>
        </div>
        <div class='fd-col fd-col--2'>
            <div class='docs-layout-grid-bg docs-layout-grid-bg--color-5'>2 columns element</div>
        </div>
    </div>

    <div class='fd-row'>
        <div class='fd-col fd-col--9'>
            <div class='docs-layout-grid-bg docs-layout-grid-bg--color-6'>9 columns element</div>
        </div>
        <div class='fd-col fd-col--3'>
            <div class='docs-layout-grid-bg docs-layout-grid-bg--color-7'>3 columns element</div>
        </div>
    </div>

    <div class='fd-row'>
        <div class='fd-col fd-col--8'>
            <div class='docs-layout-grid-bg docs-layout-grid-bg--color-8'>8 columns element</div>
        </div>
        <div class='fd-col fd-col--4'>
            <div class='docs-layout-grid-bg docs-layout-grid-bg--color-9'>4 columns element</div>
        </div>
    </div>

    <div class='fd-row'>
        <div class='fd-col fd-col--7'>
            <div class='docs-layout-grid-bg docs-layout-grid-bg--color-10'>7 columns element</div>
        </div>
        <div class='fd-col fd-col--5'>
            <div class='docs-layout-grid-bg docs-layout-grid-bg--color-11'>5 columns element</div>
        </div>
    </div>

    <div class='fd-row'>
        <div class='fd-col fd-col--6'>
            <div class='docs-layout-grid-bg docs-layout-grid-bg--color-12'>6 columns element</div>
        </div>
        <div class='fd-col fd-col--6'>
            <div class='docs-layout-grid-bg docs-layout-grid-bg--color-1'>6 columns element</div>
        </div>
    </div>

    <div class='fd-row'>
        <div class='fd-col fd-col--5'>
            <div class='docs-layout-grid-bg docs-layout-grid-bg--color-2'>5 columns element</div>
        </div>
        <div class='fd-col fd-col--7'>
            <div class='docs-layout-grid-bg docs-layout-grid-bg--color-3'>7 columns element</div>
        </div>
    </div>

    <div class='fd-row'>
        <div class='fd-col fd-col--4'>
            <div class='docs-layout-grid-bg docs-layout-grid-bg--color-4'>4 columns element</div>
        </div>
        <div class='fd-col fd-col--8'>
            <div class='docs-layout-grid-bg docs-layout-grid-bg--color-5'>8 columns element</div>
        </div>
    </div>

    <div class='fd-row'>
        <div class='fd-col fd-col--3'>
            <div class='docs-layout-grid-bg docs-layout-grid-bg--color-6'>3 columns element</div>
        </div>
        <div class='fd-col fd-col--9'>
            <div class='docs-layout-grid-bg docs-layout-grid-bg--color-7'>9 columns element</div>
        </div>
    </div>

    <div class='fd-row'>
        <div class='fd-col fd-col--2'>
            <div class='docs-layout-grid-bg docs-layout-grid-bg--color-8'>2 columns element</div>
        </div>
        <div class='fd-col fd-col--10'>
            <div class='docs-layout-grid-bg docs-layout-grid-bg--color-9'>10 columns element</div>
        </div>
    </div>

    <div class='fd-row'>
        <div class='fd-col fd-col--1'>
            <div class='docs-layout-grid-bg docs-layout-grid-bg--color-10'>1 column element</div>
        </div>
        <div class='fd-col fd-col--11'>
            <div class='docs-layout-grid-bg docs-layout-grid-bg--color-11'>11 columns element</div>
        </div>
    </div>

    <div class='fd-row'>
        <div class='fd-col'>
            <div class='docs-layout-grid-bg docs-layout-grid-bg--color-12'>12 columns element</div>
        </div>
    </div>
</div>
```

### Responsiveness

You can define different column sizes for each inflection point. In this example for extra large the cells are taking 4 columns out of 12 `fd-col-xl--4`; 4 columns out of 12 in large `fd-col-lg--4`; 6 columns out of 12 in medium `fd-col-md--6`, and 12 out of 12 in small `fd-col--12`

```html
<div class='fd-container'>
    <div class='fd-row'>
        <div class='fd-col fd-col--12 fd-col-md--6 fd-col-lg--4 fd-col-xl--4'>
            <div class='docs-layout-grid-bg docs-layout-grid-bg--color-1'>(1 cell)</div>
        </div>

        <div class='fd-col fd-col--12 fd-col-md--6 fd-col-lg--4 fd-col-xl--4'>
            <div class='docs-layout-grid-bg docs-layout-grid-bg--color-2'>(2 cell)</div>
        </div>

        <div class='fd-col fd-col--12 fd-col-md--6 fd-col-lg--4 fd-col-xl--4'>
            <div class='docs-layout-grid-bg docs-layout-grid-bg--color-3'>(3 cell)</div>
        </div>

        <div class='fd-col fd-col--12 fd-col-md--6 fd-col-lg--4 fd-col-xl--4'>
            <div class='docs-layout-grid-bg docs-layout-grid-bg--color-4'>(4 cell)</div>
        </div>
    </div>
</div>
```

### Nesting

Add an extra `fd-row` class in between inner rows when using nesting. It will add a gutter in between rows.

```html
<div class='fd-container'>
    <div class='fd-row'>
        <div class='fd-col fd-col--2'>
            <div class='docs-layout-grid-bg docs-layout-grid-bg--color-1'>
                2 col (~17%)
            </div>
        </div>

        <div class='fd-col fd-col--10'>
            <div class='fd-row'">
                <div class='fd-col fd-col--2'>
                    <div class='docs-layout-grid-bg docs-layout-grid-bg--color-2'>
                        2 col inner row 1 (~14%)
                    </div>
                </div>

                <div class='fd-col fd-col--10'>
                    <div class='fd-row'>
                        <div class='fd-col fd-col--6'>
                            <div class='docs-layout-grid-bg docs-layout-grid-bg--color-3'>
                                6 coll inner row 2 (~34%)
                            </div>
                        </div>

                        <div class='fd-col fd-col--6'>
                            <div class='fd-row'>
                                <div class='fd-col fd-col--4'>
                                    <div class='docs-layout-grid-bg docs-layout-grid-bg--color-4'>
                                        4 coll inner row 3 (~10%)
                                    </div>
                                </div>

                                <div class='fd-col fd-col--8'>
                                    <div class='docs-layout-grid-bg docs-layout-grid-bg--color-5'>
                                        8 coll inner row 3 (~23%)
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
```

### Offset

To add an offset to the left of the column for all sizes use the `--offset-x` modifier. X will be the size of your choice. If the column after the offset col no longer fits in parent container it will switch to the next line. To add an offset to the left of the column for certain sizes and above use the `--offset-x--size` modifier, where size is either s,m,l,xl. To make the offset after and not before use the `--offset-after-x--size` modifier.

```html
<div class='fd-container'>
    <div class='fd-row'>
        <div class='fd-col'>
            <div class='docs-layout-grid-bg docs-layout-grid-bg--color-1'>
                12 columns
            </div>
        </div>
    </div>

    <div class='fd-row'>
        <div class='fd-col fd-col--6'>
            <div class='docs-layout-grid-bg docs-layout-grid-bg--color-3'>
                6 columns
            </div>
        </div>
    </div>

    <div class='fd-row'>
        <div class='fd-col fd-col--8 fd-col--offset-4 fd-col-md--6 fd-col-md--offset-2 fd-col-lg--4 fd-col-lg--offset-4 fd-col-lx--3 fd-col-lx--offset-6'>
            <div class='docs-layout-grid-bg docs-layout-grid-bg--color-5'>
                Different column-width and offset in different inflection points
            </div>
        </div>
    </div>

    <div class='fd-row'>
        <div class='fd-col fd-col--6 fd-col--offset-6'>
            <div class='docs-layout-grid-bg docs-layout-grid-bg--color-7'>
                6 columns with 6-column offset
            </div>
        </div>
    </div>

    <div class='fd-row'>
        <div class='fd-col fd-col--3 fd-col--offset-after-1 fd-col-md--offset-after-2 fd-col-lg--offset-after-2 fd-col-xl--offset-after-1'>
            <div class='docs-layout-grid-bg docs-layout-grid-bg--color-8'>
                2 column-width and offset after in different inflection points
            </div>
        </div>

        <div class='fd-col fd-col--4 fd-col--offset-after-1'>
            <div class='docs-layout-grid-bg docs-layout-grid-bg--color-9'>
                4 columns with 2-column offset after
            </div>
        </div>

        <div class='fd-col fd-col--2'>
            <div class='docs-layout-grid-bg docs-layout-grid-bg--color-12'>
                2 column element
            </div>
        </div>
    </div>
</div>
```

### NoHorizontalGap

To remove gutters between columns apply the `fd-container--no-horizontal-gap` modifier to the container.

```html
<div class='fd-container fd-container--no-horizontal-gap'>
    <div class='fd-row'>
        <div class='fd-col fd-col--8'>
            <div class='docs-layout-grid-bg docs-layout-grid-bg--color-1'>
                8 col no gap
            </div>
        </div>

        <div class='fd-col fd-col--4'>
            <div class='docs-layout-grid-bg docs-layout-grid-bg--color-2'>
                4 col no gap
            </div>
        </div>
    </div>

    <div class='fd-row'>
        <div class='fd-col fd-col--6'>
            <div class='docs-layout-grid-bg docs-layout-grid-bg--color-3'>
                6 col no gap
            </div>
        </div>

        <div class='fd-col fd-col--6'>
            <div class='docs-layout-grid-bg docs-layout-grid-bg--color-4'>
                6 col no gap
            </div>
        </div>
    </div>

    <div class='fd-row'>
        <div class='fd-col fd-col--4'>
            <div class='docs-layout-grid-bg docs-layout-grid-bg--color-5'>
                4 col no gap
            </div>
        </div>

        <div class='fd-col fd-col--8'>
            <div class='docs-layout-grid-bg docs-layout-grid-bg--color-6'>
                8 col no gap
            </div>
        </div>
    </div>
</div>
```

### NoVerticalGap

To remove gutters between rows apply the `fd-container--no-vertical-gap` modifier to the container.

```html
<div class='fd-container fd-container--no-vertical-gap'>
    <div class='fd-row'>
        <div class='fd-col fd-col--8'>
            <div class='docs-layout-grid-bg docs-layout-grid-bg--color-1'>
                8 col no gap
            </div>
        </div>

        <div class='fd-col fd-col--4'>
            <div class='docs-layout-grid-bg docs-layout-grid-bg--color-2'>
                4 col no gap
            </div>
        </div>
    </div>

    <div class='fd-row'>
        <div class='fd-col fd-col--6'>
            <div class='docs-layout-grid-bg docs-layout-grid-bg--color-3'>
                6 col no gap
            </div>
        </div>

        <div class='fd-col fd-col--6'>
            <div class='docs-layout-grid-bg docs-layout-grid-bg--color-4'>
                6 col no gap
            </div>
        </div>
    </div>

    <div class='fd-row'>
        <div class='fd-col fd-col--4'>
            <div class='docs-layout-grid-bg docs-layout-grid-bg--color-5'>
                4 col no gap
            </div>
        </div>

        <div class='fd-col fd-col--8'>
            <div class='docs-layout-grid-bg docs-layout-grid-bg--color-6'>
                8 col no gap
            </div>
        </div>
    </div>
</div>
```

### NoGap

To remove gutters between rows and columns apply both the `fd-container--no-vertical-gap` and `fd-container--no-horizontal-gap` modifiers to the container.

```html
<div class='fd-container fd-container--no-horizontal-gap fd-container--no-vertical-gap'>
    <div class='fd-row'>
        <div class='fd-col fd-col--8'>
            <div class='docs-layout-grid-bg docs-layout-grid-bg--color-1'>
                8 col no gap
            </div>
        </div>

        <div class='fd-col fd-col--4'>
            <div class='docs-layout-grid-bg docs-layout-grid-bg--color-2'>
                4 col no gap
            </div>
        </div>
    </div>

    <div class='fd-row'>
        <div class='fd-col fd-col--6'>
            <div class='docs-layout-grid-bg docs-layout-grid-bg--color-3'>
                6 col no gap
            </div>
        </div>

        <div class='fd-col fd-col--6'>
            <div class='docs-layout-grid-bg docs-layout-grid-bg--color-4'>
                6 col no gap
            </div>
        </div>
    </div>

    <div class='fd-row'>
        <div class='fd-col fd-col--4'>
            <div class='docs-layout-grid-bg docs-layout-grid-bg--color-5'>
                4 col no gap
            </div>
        </div>

        <div class='fd-col fd-col--8'>
            <div class='docs-layout-grid-bg docs-layout-grid-bg--color-6'>
                8 col no gap
            </div>
        </div>
    </div>
</div>
```

### AutoAdjusting

To make the column auto adjust and occupy the remaining space of the row use the `--full` modifier. There is a minimum width of 1/12 columns

```html
<div class='fd-container'>
    <div class='fd-row'>
        <div class='fd-col fd-col--full'>
            <div class='docs-layout-grid-bg docs-layout-grid-bg--color-1'>
                Auto adjusting col before 7 col
            </div>
        </div>

        <div class='fd-col fd-col--7'>
            <div class='docs-layout-grid-bg docs-layout-grid-bg--color-2'>
                7 col
            </div>
        </div>

        <div class='fd-col fd-col--full'>
            <div class='docs-layout-grid-bg docs-layout-grid-bg--color-1'>
                Auto adjusting col after 7 col
            </div>
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

This documentation was automatically generated from: `packages/styles/stories/Layouts/layout-grid/layout-grid.stories.js`

For the latest updates and interactive examples, see [Storybook](https://sap.github.io/fundamental-styles/).
