---
name: scss-style-guide
description: SCSS/CSS coding standards and patterns for fundamental-styles project
---

# SCSS Coding Standards for fundamental-styles

**When to use this skill:**

- Writing new SCSS component files
- Refactoring existing SCSS code
- Reviewing SCSS changes
- Questions about fundamental-styles CSS architecture

## 1. Architecture & Methodology

### BEM (Block Element Modifier) Pattern

**Structure:**

```scss
$block: #{$fd-namespace}-component-name;

.#{$block} {
    // Block styles

    &__element {
        // Element styles
    }

    &--modifier {
        // Modifier styles
    }
}
```

**Naming convention:**

- Block: `.fd-{component}` (e.g., `.fd-card`, `.fd-button`)
- Element: `.fd-{component}__{element}` (e.g., `.fd-card__header`, `.fd-button__text`)
- Modifier: `.fd-{component}--{modifier}` (e.g., `.fd-card--interactive`, `.fd-button--emphasized`)

**Rules:**

- Use strict BEM - no deviations
- Block variable format: `$block: #{$fd-namespace}-component-name;`
- Use Sass nesting with `&` for elements and modifiers
- The ampersand creates single-level class selectors, not nested ones

### Self-Contained Components

**Each component must be completely independent:**

✅ **DO:**

```scss
// In card.scss
.#{$block} {
    &__content {
        // Style card content
    }
}
```

❌ **DON'T:**

```scss
// In card.scss - WRONG!
.#{$block} {
    .#{$fd-namespace}-button {
        // Never style other components!
        color: red;
    }
}
```

**If you need to adjust a child component:**

- Create a specific modifier class for that component
- Example: Instead of `.fd-card .fd-button { }`, create `.fd-button--in-card { }`
- Document the relationship in both component files

**Why this matters:**

- Prevents global style bleeding
- Eliminates package version conflicts
- Components render correctly in isolation
- No unexpected side effects

## 2. File Structure & Imports

**Standard file header:**

```scss
@use 'sass:map'; // Only when using Sass maps

@import './new-settings'; // or component-specific variables file
@import './mixins';

$block: #{$fd-namespace}-component-name;
$other-component: #{$fd-namespace}-other-component; // If referencing classes

// Component-specific variables/maps here
$fd-component-sizes: (
    's': (
        ...
    ),
    'm': (
        ...
    )
);

.#{$block} {
    // Component styles
}
```

## 3. Reset Mixin Rules

**The `@include fd-reset();` mixin is MANDATORY:**

```scss
.#{$block} {
    @include fd-reset(); // ✅ ALWAYS at start of block

    &__element {
        @include fd-reset(); // ✅ ALWAYS for every element
    }

    &__another-element {
        @include fd-reset(); // ✅ Every element needs it
    }

    &--modifier {
        // ❌ NEVER use fd-reset() for modifiers
        --fdComponent_Property: new-value;
    }
}
```

**Why:**

- Resets browser default styles
- Ensures consistent baseline
- Prevents inheritance issues
- Modifiers only override, so they don't need reset

## 4. CSS Custom Properties (Variables) Pattern

**Use CSS variables for ALL state variations and customization:**

```scss
.#{$block} {
    // 1. Define CSS variables with defaults
    --fdCard_Border: 0.0625rem solid var(--sapTile_BorderColor);
    --fdCard_Background: var(--sapTile_Background);
    --fdCard_Box_Shadow: var(--sapContent_Shadow0);

    // 2. Apply variables to properties
    border: var(--fdCard_Border);
    background: var(--fdCard_Background);
    box-shadow: var(--fdCard_Box_Shadow);

    // 3. Modifiers override variables, NOT properties
    &--interactive {
        @include fd-hover() {
            --fdCard_Background: var(--sapTile_Hover_Background); // ✅ Override variable
            --fdCard_Box_Shadow: var(--sapContent_Shadow1);
        }

        @include fd-active() {
            --fdCard_Background: var(--sapTile_Active_Background); // ✅
        }
    }

    &--transparent {
        --fdCard_Background: transparent; // ✅ Override variable
        --fdCard_Border: none;
    }
}
```

❌ **WRONG - Don't set properties in modifiers:**

```scss
.#{$block} {
    background: var(--sapTile_Background);

    &--transparent {
        background: transparent; // ❌ WRONG - setting property directly
    }
}
```

✅ **RIGHT - Override the variable:**

```scss
.#{$block} {
    --fdCard_Background: var(--sapTile_Background);
    background: var(--fdCard_Background);

    &--transparent {
        --fdCard_Background: transparent; // ✅ RIGHT - override variable
    }
}
```

**Benefits:**

- Lower specificity (modifiers can be combined easily)
- Easier theming and customization
- States don't conflict with each other
- Less CSS output
- Enables runtime customization

**Variable naming convention:**

- Format: `--fd{Component}_{Property}_{Context}`
- Examples: `--fdCard_Background`, `--fdButton_Border_Hover`, `--fdAvatar_Font_Size`
- Use PascalCase for component name, snake_case for rest

## 5. Loops for Repetitive Properties

**Use `@each` loops for color sets, sizes, variations:**

```scss
// Define map of values
$fd-avatar-accent-colors: (
    '1': (
        'border-color': var(--sapAccentColor1),
        'text-color': var(--sapContent_ContrastTextColor),
        'background-color': var(--sapAccentColor1)
    ),
    '2': (
        'border-color': var(--sapAccentColor2),
        'text-color': var(--sapContent_ContrastTextColor),
        'background-color': var(--sapAccentColor2)
    ) // ... more colors
);

// Generate classes with loop
@each $set-name, $color-set in $fd-avatar-accent-colors {
    .#{$block}--accent-color-#{$set-name} {
        --fdAvatarBorderColor: #{map.get($color-set, 'border-color')};
        --fdAvatarColor: #{map.get($color-set, 'text-color')};
        --fdAvatarBackgroundColor: #{map.get($color-set, 'background-color')};
    }
}

// Size variations
$fd-avatar-sizes: (
    'xs': (
        'ratio': 2rem,
        'font-size': 0.75rem,
        'offset': 0.125rem
    ),
    's': (
        'ratio': 3rem,
        'font-size': 1rem,
        'offset': 0.125rem
    ) // ... more sizes
);

@each $set-name, $size-set in $fd-avatar-sizes {
    .#{$block}--#{$set-name} {
        --fdAvatarRatio: #{map.get($size-set, 'ratio')};
        --fdAvatarFontSize: #{map.get($size-set, 'font-size')};
        --fdAvatarZoomIconOffset: #{map.get($size-set, 'offset')};
    }
}
```

**When to use loops:**

- Color variations (accent colors, semantic colors, indication colors)
- Size variations (xs, s, m, l, xl)
- Numbered variations (shell categories 1-16, legend colors 1-20)
- Any pattern that repeats with systematic changes

## 6. Nesting Depth & Selectors

### Maximum 3 Levels of Nesting

✅ **GOOD:**

```scss
.#{$block} {
    // Level 1
    &__element {
        // Level 2
        &--modifier {
            // Level 3 - max!
            color: red;
        }
    }
}
```

❌ **BAD:**

```scss
.#{$block} {
    // Level 1
    &__header {
        // Level 2
        .#{$block}__title {
            // Level 3
            span {
                // Level 4
                &:hover {
                    // Level 5 - TOO DEEP!
                }
            }
        }
    }
}
```

### Keep Files "Flat"

**Prefer single-class selectors:**

- `.fd-card`
- `.fd-card__header`
- `.fd-card__header--interactive`

**Avoid:**

- ❌ Catch-all selectors: `*`
- ❌ Direct descendant: `.fd-card > div` (use element classes)
- ❌ Tag selectors: `.fd-card div` (use element classes)
- ❌ Multiple class specificity: `.fd-card.is-active.is-selected`

**Exception - When nesting is OK:**

```scss
.#{$block} {
    // Pseudo-selectors are fine
    &:hover {
    }
    &:focus {
    }
    &::before {
    }

    // Contextual selectors within same component
    &__element {
        &:first-child {
        }
        &:last-child {
        }
        &:only-child {
        }
    }

    // State combinations
    @include fd-hover() {
    }
    @include fd-focus() {
    }
}
```

## 7. Units & Values

### Use Theming Variables First

```scss
// ✅ ALWAYS prefer theming variables
color: var(--sapTextColor);
background: var(--sapTile_Background);
border-color: var(--sapTile_BorderColor);
font-size: var(--sapFontSize);
font-family: var(--sapFontFamily);
```

### When No Theming Variable Exists, Use rem

```scss
// ✅ Use rem for dimensions
padding: 1rem; // 16px
margin: 0.5rem; // 8px
border-radius: 0.25rem; // 4px
gap: 0.125rem; // 2px
width: 20rem; // 320px

// ✅ Use rem for borders (converts to 1px)
border-width: 0.0625rem; // 1px

// ✅ Unitless values are fine
line-height: 1.5;
flex: 1;
z-index: 10;

// ✅ Zero doesn't need units
margin: 0;
padding: 0;

// ✅ Percentages for relative sizing
width: 100%;
height: 50%;
```

❌ **NEVER use px directly:**

```scss
// ❌ WRONG
padding: 16px;
margin: 8px;
border-radius: 4px;
```

### Calculation with rem

```scss
// ✅ Calculations are fine
padding-inline: calc(0.625rem - var(--sapButton_BorderWidth));
height: calc(100% - 2rem);
width: calc(50% - 1rem);
```

## 8. RTL-Aware Spacing and Borders - CRITICAL

**Always use logical properties or RTL-aware mixins for directional spacing and borders.**

### Use Logical Properties for Spacing

**Logical properties automatically handle RTL direction:**

✅ **DO - Use logical properties:**

```scss
.#{$block} {
    // Vertical spacing (top/bottom)
    margin-block: 1rem; // margin-top + margin-bottom
    margin-block-start: 1rem; // margin-top
    margin-block-end: 1rem; // margin-bottom
    padding-block: 1rem; // padding-top + padding-bottom
    padding-block-start: 1rem; // padding-top
    padding-block-end: 1rem; // padding-bottom

    // Horizontal spacing (left/right - auto RTL)
    margin-inline: 1rem; // margin-left + margin-right (flips in RTL)
    margin-inline-start: 1rem; // margin-left in LTR, margin-right in RTL
    margin-inline-end: 1rem; // margin-right in LTR, margin-left in RTL
    padding-inline: 1rem; // padding-left + padding-right (flips in RTL)
    padding-inline-start: 1rem; // padding-left in LTR, padding-right in RTL
    padding-inline-end: 1rem; // padding-right in LTR, padding-left in RTL

    // Positioning (auto RTL)
    inset-inline-start: 0; // left in LTR, right in RTL
    inset-inline-end: 0; // right in LTR, left in RTL
    inset-block-start: 0; // top
    inset-block-end: 0; // bottom
}
```

❌ **DON'T - Avoid directional properties:**

```scss
.#{$block} {
    // ❌ WRONG - Not RTL-aware
    margin-left: 1rem;
    margin-right: 1rem;
    padding-left: 1rem;
    padding-right: 1rem;
    left: 0;
    right: 0;
}
```

### Use RTL-Aware Mixins When Needed

**For cases where logical properties aren't sufficient, use provided mixins:**

```scss
.#{$block} {
    // RTL-aware positioning
    @include fd-set-position-right(1rem); // right in LTR, left in RTL
    @include fd-set-position-left(1rem); // left in LTR, right in RTL

    // RTL-aware margins
    @include fd-set-margin-right(1rem); // margin-right in LTR, margin-left in RTL
    @include fd-set-margin-left(1rem); // margin-left in LTR, margin-right in RTL

    // RTL-aware padding
    @include fd-set-padding-right(1rem); // padding-right in LTR, padding-left in RTL
    @include fd-set-padding-left(1rem); // padding-left in LTR, padding-right in RTL

    // RTL-specific styles
    @include fd-rtl() {
        direction: rtl;
        text-align: right;
    }
}
```

### Borders - Use Logical Properties

**Border logical properties also handle RTL automatically:**

✅ **DO - Use logical border properties:**

```scss
.#{$block} {
    // All borders
    border: 0.0625rem solid var(--sapTile_BorderColor);

    // Inline borders (horizontal - auto RTL)
    border-inline: 0.0625rem solid var(--sapTile_BorderColor);
    border-inline-start: 0.0625rem solid var(--sapTile_BorderColor); // left in LTR, right in RTL
    border-inline-end: 0.0625rem solid var(--sapTile_BorderColor); // right in LTR, left in RTL

    // Block borders (vertical)
    border-block: 0.0625rem solid var(--sapTile_BorderColor);
    border-block-start: 0.0625rem solid var(--sapTile_BorderColor); // top
    border-block-end: 0.0625rem solid var(--sapTile_BorderColor); // bottom

    // Border radius (use logical order)
    border-start-start-radius: 0.5rem; // top-left in LTR, top-right in RTL
    border-start-end-radius: 0.5rem; // top-right in LTR, top-left in RTL
    border-end-start-radius: 0.5rem; // bottom-left in LTR, bottom-right in RTL
    border-end-end-radius: 0.5rem; // bottom-right in LTR, bottom-left in RTL
}
```

❌ **DON'T - Avoid directional border properties:**

```scss
.#{$block} {
    // ❌ WRONG - Not RTL-aware
    border-left: 0.0625rem solid var(--sapTile_BorderColor);
    border-right: 0.0625rem solid var(--sapTile_BorderColor);
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
}
```

### Complete Example

```scss
.#{$block} {
    @include fd-reset();

    // ✅ Vertical spacing - always explicit
    padding-block-start: 1rem;
    padding-block-end: 1rem;
    margin-block: 0.5rem;

    // ✅ Horizontal spacing - logical properties
    padding-inline-start: 1rem;
    padding-inline-end: 0.5rem;
    margin-inline-start: 0.25rem;

    // ✅ Borders - logical properties
    border-inline-start: 0.0625rem solid var(--sapTile_BorderColor);

    // ✅ Positioning - logical properties
    inset-inline-start: 0;
    inset-block-start: 0;

    &__icon {
        @include fd-reset();

        // ✅ For complex positioning, use mixins
        @include fd-set-position-right(0.5rem);
        @include fd-set-margin-left(0.25rem);
    }

    // ✅ RTL-specific overrides
    @include fd-rtl() {
        direction: rtl;
    }
}
```

**Why this matters:**

- Fundamental-styles supports both LTR (left-to-right) and RTL (right-to-left) languages
- Logical properties automatically adapt to text direction
- Using directional properties breaks RTL layouts
- No need to write separate RTL overrides for spacing and borders

## 9. State & Pseudo-Class Mixins

**Use provided mixins for interactive states:**

```scss
.#{$block} {
    &--interactive {
        cursor: pointer;

        // Hover state
        @include fd-hover() {
            --fdCard_Background: var(--sapTile_Hover_Background);
            --fdCard_Box_Shadow: var(--sapContent_Shadow1);
        }

        // Active/pressed state
        @include fd-active() {
            --fdCard_Background: var(--sapTile_Active_Background);
            --fdCard_Box_Shadow: none;
        }

        // Focus state
        @include fd-focus() {
            outline: var(--sapContent_FocusWidth) var(--sapContent_FocusStyle) var(--sapContent_FocusColor);
            outline-offset: var(--sapContent_FocusOffset);
        }

        // Disabled state
        @include fd-disabled() {
            opacity: var(--sapContent_DisabledOpacity);
            cursor: not-allowed;
        }

        // Selected state
        @include fd-selected() {
            --fdCard_Border: var(--sapContent_FocusWidth) solid var(--sapContent_FocusColor);
        }

        // Toggled state (for toggle buttons, switches)
        @include fd-toggled() {
            --fdButton_Background: var(--sapButton_Selected_Background);
        }
    }
}
```

**Available state mixins:**

- `@include fd-hover()` - Hover state
- `@include fd-active()` - Active/pressed state
- `@include fd-focus()` - Keyboard focus state
- `@include fd-disabled()` - Disabled state
- `@include fd-selected()` - Selected state (for lists, tables)
- `@include fd-toggled()` - Toggled state (for buttons, switches)
- `@include fd-readonly()` - Read-only state

## 10. Responsive & Compact Modes

### Responsive Breakpoints

```scss
.#{$block} {
    // Default/desktop styles
    --fdCard_Padding: 3rem;

    @include fd-media-md() {
        // Medium screens (tablets)
        --fdCard_Padding: 2rem;
    }

    @include fd-media-sm() {
        // Small screens (mobile)
        --fdCard_Padding: 1rem;
        --fdCard_Flex_Direction: column;
    }
}
```

### Compact/Condensed Mode

```scss
.#{$block} {
    --fdButton_Height: var(--sapElement_Height); // 2.75rem
    --fdButton_Padding: 0.625rem;

    @include fd-compact-or-condensed() {
        --fdButton_Height: var(--sapElement_Compact_Height); // 2rem
        --fdButton_Padding: 0.5rem;
    }
}
```

## 11. Common Mixins & Utilities

### Flexbox Layouts

```scss
@include fd-flex(); // display: flex
@include fd-flex(column); // flex-direction: column
@include fd-flex() {
    gap: 1rem;
} // flex with gap

@include fd-flex-center(); // center both axes
@include fd-flex-vertical-center(); // center on cross axis
@include fd-inline-flex-center(); // inline-flex + center

// With additional properties
@include fd-flex(column) {
    gap: 0.5rem;
    align-items: flex-start;
}
```

### Positioning (RTL-aware)

```scss
@include fd-set-position-right(1rem); // right: 1rem (flips in RTL)
@include fd-set-position-left(1rem); // left: 1rem (flips in RTL)
@include fd-set-margin-right(1rem); // margin-right: 1rem (flips in RTL)
@include fd-set-margin-left(1rem); // margin-left: 1rem (flips in RTL)
@include fd-set-padding-right(1rem); // padding-right: 1rem (flips in RTL)
@include fd-set-padding-left(1rem); // padding-left: 1rem (flips in RTL)

// For RTL-specific styles
@include fd-rtl() {
    direction: rtl;
}
```

### Text Utilities

```scss
@include fd-ellipsis(); // Single-line text overflow with ellipsis
// Outputs:
// overflow: hidden;
// white-space: nowrap;
// text-overflow: ellipsis;
```

### Borders

```scss
@include fd-set-border(var(--sapBorderColor)); // Adds 1px solid border
```

### Sizing

```scss
@include fd-square(2rem); // width: 2rem; height: 2rem;
```

### Reset Spacing

```scss
@include fd-reset-spacing(); // margin: 0; padding: 0;
```

## 12. Pseudo-Elements for Visual Effects

### Extended Touch Area

```scss
.#{$block}--interactive {
    position: relative;

    // Extend clickable area beyond visual bounds
    &::before {
        content: '';
        display: block;
        position: absolute;
        inset: -0.5rem; // Expand by 8px on all sides
    }
}
```

### Custom Focus Indicator

```scss
.#{$block} {
    position: relative;

    @include fd-focus() {
        outline: none; // Remove default outline

        &::after {
            content: '';
            position: absolute;
            display: block;
            border: var(--sapContent_FocusWidth) var(--sapContent_FocusStyle) var(--sapContent_FocusColor);
            inset: 0.125rem;
            border-radius: var(--fdCard_Focus_Outline_Radius);
            z-index: 3;
        }
    }
}
```

### Badge Positioning

```scss
.#{$block} {
    position: relative;

    &__badge {
        @include fd-reset();
        @include fd-set-position-right(var(--fdButton_Badge_Offset));

        position: absolute;
        top: var(--fdButton_Badge_Offset);
        z-index: 1;
    }
}
```

## 13. Code Organization Within File

**Follow this order for consistency:**

```scss
$block: #{$fd-namespace}-component-name;

// 1. Component-specific variables/maps
$fd-component-sizes: (...);
$fd-component-colors: (...);

// 2. Mixins (if component-specific)
@mixin fd-component-helper() {
    // ...
}

// 3. Main block
.#{$block} {
    // A. CSS variables
    --fdComponent_Property: value;
    --fdComponent_Other_Property: value;

    // B. Mixins
    @include fd-reset();
    @include fd-flex();

    // C. Properties (roughly grouped: layout, spacing, typography, colors, effects)
    position: relative;
    display: flex;

    padding: 1rem;
    margin: 0;

    font-size: var(--sapFontSize);
    color: var(--sapTextColor);

    background: var(--fdComponent_Background);
    border: var(--fdComponent_Border);
    box-shadow: var(--fdComponent_Box_Shadow);

    // D. Pseudo-elements
    &::before {
        content: '';
        // ...
    }

    // E. Block elements
    &__element-name {
        @include fd-reset();
        // properties...
    }

    &__another-element {
        @include fd-reset();
        // properties...
    }

    // F. Block modifiers
    &--modifier-name {
        --fdComponent_Property: new-value;
    }

    &--another-modifier {
        --fdComponent_Property: another-value;
    }

    // G. State modifiers
    &--interactive {
        cursor: pointer;

        @include fd-hover() {
            --fdComponent_Background: var(--sapTile_Hover_Background);
        }

        @include fd-active() {
            --fdComponent_Background: var(--sapTile_Active_Background);
        }
    }

    // H. Loops for variations
    @each $size-name, $size-set in $fd-component-sizes {
        &--#{$size-name} {
            --fdComponent_Width: #{map.get($size-set, 'width')};
        }
    }

    // I. Responsive/compact modifiers
    @include fd-compact-or-condensed() {
        --fdComponent_Height: 2rem;
    }

    @include fd-media-sm() {
        --fdComponent_Flex_Direction: column;
    }
}
```

## 14. Anti-Patterns to AVOID

### ❌ Don't Override Other Components

```scss
// In card.scss - WRONG!
.#{$block} {
    .#{$fd-namespace}-button {
        color: red; // ❌ Never style other components!
    }

    .#{$fd-namespace}-list__item {
        padding: 0; // ❌ WRONG!
    }
}
```

### ❌ Don't Set Properties in Modifiers When Variables Exist

```scss
// ❌ WRONG
.#{$block} {
    background: var(--fdCard_Background);

    &--hover {
        background: var(--sapTile_Hover_Background); // ❌ Setting property
    }
}

// ✅ RIGHT
.#{$block} {
    --fdCard_Background: var(--sapTile_Background);
    background: var(--fdCard_Background);

    &--hover {
        --fdCard_Background: var(--sapTile_Hover_Background); // ✅ Override variable
    }
}
```

### ❌ Don't Use Deep Nesting

```scss
// ❌ WRONG - Too deep
.#{$block} {
    &__header {
        .#{$block}__title {
            span {
                &:hover {
                    // 5 levels!
                }
            }
        }
    }
}

// ✅ RIGHT - Use element classes
.#{$block} {
    &__header {
    }

    &__title {
        &:hover {
            // 3 levels max
        }
    }
}
```

### ❌ Don't Use Tag or Universal Selectors

```scss
// ❌ WRONG
.#{$block} {
    div {
        // Tag selector
        padding: 1rem;
    }

    * {
        // Universal selector
        box-sizing: border-box;
    }
}

// ✅ RIGHT - Use element classes
.#{$block} {
    &__content {
        padding: 1rem;
    }
}
```

### ❌ Don't Forget fd-reset()

```scss
// ❌ WRONG
.#{$block}__element {
    // Missing @include fd-reset();
    color: red;
}

// ✅ RIGHT
.#{$block}__element {
    @include fd-reset(); // Always include!
    color: red;
}
```

### ❌ Don't Use px Units

```scss
// ❌ WRONG
.#{$block} {
    padding: 16px;
    margin: 8px;
    border-radius: 4px;
}

// ✅ RIGHT
.#{$block} {
    padding: 1rem; // 16px
    margin: 0.5rem; // 8px
    border-radius: 0.25rem; // 4px
}
```

### ❌ Don't Create Duplicate Loops

```scss
// ❌ WRONG - Repetitive
.#{$block}--accent-color-1 {
    --fdAvatar_Color: var(--sapAccentColor1);
}
.#{$block}--accent-color-2 {
    --fdAvatar_Color: var(--sapAccentColor2);
}
.#{$block}--accent-color-3 {
    --fdAvatar_Color: var(--sapAccentColor3);
}
// ... 10 more copies

// ✅ RIGHT - Use a loop
@each $num in (1, 2, 3, 4, 5, 6, 7, 8, 9, 10) {
    .#{$block}--accent-color-#{$num} {
        --fdAvatar_Color: var(--sapAccentColor#{$num});
    }
}
```

### ❌ Don't Use Directional Properties (Breaks RTL)

```scss
// ❌ WRONG - Not RTL-aware
.#{$block} {
    margin-left: 1rem;
    margin-right: 0.5rem;
    padding-left: 1rem;
    border-left: 0.0625rem solid var(--sapTile_BorderColor);
    left: 0;
    right: auto;
}

// ✅ RIGHT - Use logical properties
.#{$block} {
    margin-inline-start: 1rem; // Auto RTL
    margin-inline-end: 0.5rem; // Auto RTL
    padding-inline-start: 1rem; // Auto RTL
    border-inline-start: 0.0625rem solid var(--sapTile_BorderColor); // Auto RTL
    inset-inline-start: 0; // Auto RTL
    inset-inline-end: auto; // Auto RTL
}

// ✅ ALSO RIGHT - Use mixins when needed
.#{$block} {
    @include fd-set-margin-left(1rem); // Auto RTL
    @include fd-set-position-right(0); // Auto RTL
}
```

### ❌ Don't Forget Logical Border Radius

```scss
// ❌ WRONG - Physical corners
.#{$block} {
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
}

// ✅ RIGHT - Logical corners (when directional matters)
.#{$block} {
    border-start-start-radius: 0.5rem; // top-left in LTR, top-right in RTL
    border-start-end-radius: 0.5rem; // top-right in LTR, top-left in RTL
    border-end-start-radius: 0; // bottom-left in LTR, bottom-right in RTL
    border-end-end-radius: 0; // bottom-right in LTR, bottom-left in RTL
}

// ✅ BEST - When all corners are same, use shorthand
.#{$block} {
    border-radius: 0.5rem 0.5rem 0 0; // Works in both LTR/RTL when symmetric
}
```

## 15. Accessibility Patterns

```scss
.#{$block} {
    // Disabled via attribute
    &[aria-disabled='true'],
    &[disabled] {
        @include fd-disabled() {
            opacity: var(--sapContent_DisabledOpacity);
            cursor: not-allowed;
            pointer-events: none;
        }
    }

    // Selected state
    &[aria-selected='true'] {
        @include fd-selected() {
            --fdComponent_Background: var(--sapList_SelectionBackgroundColor);
            --fdComponent_Border_Color: var(--sapList_SelectionBorderColor);
        }
    }

    // Expanded state (for accordions, dropdowns)
    &[aria-expanded='true'] {
        --fdComponent_Icon_Rotation: 180deg;
    }

    // Pressed state (for toggle buttons)
    &[aria-pressed='true'] {
        @include fd-toggled() {
            --fdButton_Background: var(--sapButton_Selected_Background);
        }
    }

    // Hidden state
    &[aria-hidden='true'] {
        display: none;
    }
}
```

## 16. Quick Checklist for Code Review

When writing or reviewing SCSS code, verify:

**Structure & Naming:**

- [ ] BEM naming used correctly (`fd-component`, `fd-component__element`, `fd-component--modifier`)
- [ ] File starts with correct imports and `$block` variable
- [ ] No cross-component styling (components are self-contained)

**Reset & Mixins:**

- [ ] `@include fd-reset()` at start of every block and element (but NOT modifiers)
- [ ] Appropriate utility mixins used (`fd-flex()`, `fd-ellipsis()`, etc.)
- [ ] State mixins used for interactive elements (`fd-hover()`, `fd-active()`, etc.)

**CSS Variables:**

- [ ] CSS variables defined for all customizable properties
- [ ] Modifiers override variables, not properties directly
- [ ] Variable naming follows convention: `--fd{Component}_{Property}`

**Patterns & Best Practices:**

- [ ] State changes (hover, active, focus) use CSS variable overrides
- [ ] Loops (`@each`) used for repetitive patterns (colors, sizes, states)
- [ ] Nesting depth ≤ 3 levels
- [ ] No tag selectors, universal selectors, or complex specificity

**Units & Values:**

- [ ] Theming variables used when available
- [ ] `rem` units used for dimensions (not `px`)
- [ ] Unitless values for line-height, flex, z-index
- [ ] Border widths in rem (0.0625rem = 1px)

**RTL Support:**

- [ ] Logical properties used for spacing: `margin-inline-start`, `padding-block`, etc. (not `margin-left`, `padding-top`)
- [ ] Logical properties used for borders: `border-inline-start`, `border-block-end`, etc. (not `border-left`, `border-top`)
- [ ] RTL-aware mixins used when logical properties aren't sufficient (`fd-set-position-right`, etc.)
- [ ] No directional properties: `left`, `right`, `margin-left`, `padding-right`, `border-left`
- [ ] Border radius uses logical properties when directional

**Responsive & Breakpoints:**

- [ ] Responsive breakpoints use mixins (`fd-media-sm()`, `fd-compact-or-condensed()`)
- [ ] Compact mode properly handled with CSS variable overrides

**Accessibility:**

- [ ] Appropriate ARIA attribute selectors for states
- [ ] Focus states implemented with sufficient contrast
- [ ] Disabled states prevent interaction

## 17. Common Theming Variables Reference

### Colors

**Text:**

- `--sapTextColor` - Primary text
- `--sapContent_LabelColor` - Labels
- `--sapLink_Color` - Links
- `--sapContent_IconColor` - Icons

**Backgrounds:**

- `--sapBackgroundColor` - Page background
- `--sapTile_Background` - Card/tile background
- `--sapGroup_ContentBackground` - Content area background
- `--sapButton_Background` - Button background

**Borders:**

- `--sapTile_BorderColor` - Tile borders
- `--sapGroup_ContentBorderColor` - Content borders
- `--sapButton_BorderColor` - Button borders

**Semantic Colors:**

- `--sapPositiveColor` - Success/green
- `--sapNegativeColor` - Error/red
- `--sapCriticalColor` - Warning/orange
- `--sapInformativeColor` - Info/blue
- `--sapNeutralColor` - Neutral/gray

**Interactive States:**

- `--sapTile_Hover_Background` - Hover background
- `--sapTile_Active_Background` - Active/pressed background
- `--sapButton_Selected_Background` - Selected background
- `--sapContent_FocusColor` - Focus outline color

### Typography

- `--sapFontFamily` - Default font family
- `--sapFontHeaderFamily` - Header font family
- `--sapFontSize` - Base font size (0.875rem)
- `--sapFontSmallSize` - Small text
- `--sapFontLargeSize` - Large text
- `--sapFontHeader1Size` through `--sapFontHeader6Size` - Heading sizes

### Spacing

- `--sapElement_Height` - Standard element height (2.75rem)
- `--sapElement_Compact_Height` - Compact element height (2rem)
- `--sapContent_FocusWidth` - Focus outline width
- `--sapContent_FocusOffset` - Focus outline offset

### Effects

- `--sapContent_Shadow0` through `--sapContent_Shadow3` - Shadow levels
- `--sapTile_BorderCornerRadius` - Border radius for tiles
- `--sapButton_BorderCornerRadius` - Border radius for buttons
- `--sapContent_DisabledOpacity` - Opacity for disabled elements

---

## Examples from Real Components

### Example: Simple Component (Link)

```scss
$block: #{$fd-namespace}-link;

.#{$block} {
    @include fd-reset();

    color: var(--sapLink_Color);
    text-decoration: var(--sapLink_TextDecoration);
    cursor: pointer;

    @include fd-hover() {
        color: var(--sapLink_Hover_Color);
        text-decoration: var(--sapLink_Hover_TextDecoration);
    }

    @include fd-active() {
        color: var(--sapLink_Active_Color);
    }

    @include fd-focus() {
        outline: var(--sapContent_FocusWidth) var(--sapContent_FocusStyle) var(--sapContent_FocusColor);
        outline-offset: 0.0625rem;
    }

    &--subtle {
        color: var(--sapLink_SubtleColor);
    }

    &--emphasized {
        font-weight: bold;
    }
}
```

### Example: Complex Component (Card Header)

```scss
$block: #{$fd-namespace}-card;

.#{$block} {
    --fdCard_Border: 0.0625rem solid var(--sapTile_BorderColor);
    --fdCard_Background: var(--sapTile_Background);
    --fdCard_Box_Shadow: var(--sapContent_Shadow0);

    @include fd-reset();
    @include fd-flex(column);

    position: relative;
    border: var(--fdCard_Border);
    background: var(--fdCard_Background);
    box-shadow: var(--fdCard_Box_Shadow);
    border-radius: var(--sapTile_BorderCornerRadius);

    &__header {
        @include fd-reset();

        padding: 1rem;
        border-bottom: 0.0625rem solid var(--sapTile_SeparatorColor);
    }

    &__header-main {
        @include fd-reset();
        @include fd-flex() {
            gap: 0.5rem;
            align-items: center;
        }
    }

    &__title {
        @include fd-reset();

        font-family: var(--sapFontHeaderFamily);
        font-size: var(--sapFontHeader3Size);
        color: var(--sapTile_TitleTextColor);
    }

    &--interactive {
        cursor: pointer;

        @include fd-hover() {
            --fdCard_Background: var(--sapTile_Hover_Background);
            --fdCard_Box_Shadow: var(--sapContent_Shadow1);
        }

        @include fd-active() {
            --fdCard_Background: var(--sapTile_Active_Background);
            --fdCard_Box_Shadow: none;
        }

        @include fd-focus() {
            outline: var(--sapContent_FocusWidth) solid var(--sapContent_FocusColor);
            outline-offset: 0.0625rem;
        }
    }

    @include fd-compact-or-condensed() {
        &__header {
            padding: 0.5rem;
        }
    }
}
```

---

**Remember:** These standards exist to ensure consistency, maintainability, and accessibility across the entire fundamental-styles library. When in doubt, look at similar existing components for reference patterns.
