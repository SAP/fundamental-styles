import differentValuesExampleHtml from "./different-values.example.html?raw";
import displayModeExampleHtml from "./display-mode.example.html?raw";
import disabledExampleHtml from "./disabled.example.html?raw";
import halfValuesExampleHtml from "./half-values.example.html?raw";
import customIconsExampleHtml from "./custom-icons.example.html?raw";
import sizesExampleHtml from "./custom-sizes.example.html?raw";

import '../../../src/rating-indicator.scss';
import '../../../src/icon.scss';
export default {
  title: 'Components/Rating Indicator',
  parameters: {
    description: `
The rating indicator displays a group of icons (usually stars) that indicate a rating.
It allows users to rate content on a numeric scale, typically from 1 (lowest) to 5 (highest).
Although the maximum is 7, it is highly recommended to use the default of 5.

##Structure
Each star is a \`fd-rating-indicator__item\` (\`<li>\`) containing two \`fd-rating-indicator__icon\` (\`<span>\`) elements.
The first span is clipped to the left half of the star, the second to the right half.
Add \`fd-rating-indicator__icon--selected\` to a span to render it in the rated color;
omit it (or add \`--unselected\`) to render in the unrated color.
This split allows half-star precision without additional markup.

The \`fd-rating-indicator__list\` (\`<ul>\`) carries \`aria-hidden="true"\` — it is purely visual.
The \`fd-rating-indicator__container\` is the single accessible element.

##Usage
Use the rating indicator in forms, tables, or in a dialog box.

##Keyboard interaction (interactive mode)
The \`fd-rating-indicator__container\` element uses \`role="slider"\` and \`aria-roledescription="Rating Indicator"\`.
The consuming framework is responsible for handling keyboard events and updating \`aria-valuenow\` and \`aria-valuetext\`
on the container, and toggling \`--selected\` / \`--unselected\` on the icon spans. Required key bindings per Fiori spec:

| Key | Action |
| :-- | :----- |
| Arrow Up / Arrow Right | Increment value by 1; no-op at maximum |
| Arrow Down / Arrow Left | Decrement value by 1; no-op at minimum |
| Home | Set to minimum value |
| End | Set to maximum value |
| Space / Enter / Return | Increment by 1; wrap to minimum when at maximum |
| Digit key (1–9) | Set value directly; if greater than maximum, set to maximum |
        `,
    tags: []
  }
};
export const Sizes = () => sizesExampleHtml;
Sizes.parameters = {
  docs: {
    description: {
      story: `
The icon size is controlled by the \`--ratingIndicator_Font_Size\` CSS variable.
Use the modifier classes below to select a named size. Compact and condensed modes reduce the surrounding
margin (\`margin-block\`) but do not change the icon size.

| **Size**        | **rem**    | **Modifier class**        |
| :----------     | :--------- | -----------------------:  |
| Extra small     | 0.75rem    | \`--xs\`                  |
| Small           | 1.375rem   | \`--sm\`                  |
| Medium/Default  | 1.5rem     | _n/a_                     |
| Large           | 2rem       | \`--lg\`                  |
| Cozy            | 1.5rem     | _n/a_ (default density)   |
| Compact         | 1.5rem     | \`--compact\`             |
| Condensed       | 1.5rem     | \`--condensed\`           |
`
    }
  }
};
export const CustomIcons = () => customIconsExampleHtml;
CustomIcons.storyName = 'Custom icons';
CustomIcons.parameters = {
  docs: {
    description: {
      story: `
To use custom icons, replace the default \`sap-icon--favorite\` / \`sap-icon--unfavorite\` icon classes
on each \`fd-rating-indicator__icon\` span with your chosen icon names.

Use the rated icon (e.g. \`sap-icon--notification\`) on spans that are \`--selected\`,
and the unrated icon (e.g. \`sap-icon--bo-strategy-management\`) on spans that are \`--unselected\`.
`
    }
  }
};
export const HalfValues = () => halfValuesExampleHtml;
HalfValues.storyName = 'Half values';
HalfValues.parameters = {
  docs: {
    description: {
      story: `
To display a half-star value (e.g. 2.5), add \`fd-rating-indicator--half-star\` to the outer element
and set \`aria-valuenow="2.5"\` / \`aria-valuetext="2.5 of 5"\` on the container.

For the boundary star (the one at the fractional position), mark only the **first** (left-half) span as
\`--selected\` and the **second** (right-half) span as \`--unselected\`. Stars below the boundary are
fully selected (both spans \`--selected\`); stars above are fully unselected (both spans \`--unselected\`).
`
    }
  }
};
export const Disabled = () => disabledExampleHtml;
Disabled.parameters = {
  docs: {
    description: {
      story: `
To disable the rating indicator, add \`aria-disabled="true"\` to both the outer \`fd-rating-indicator\`
element and the \`fd-rating-indicator__container\`. The outer attribute triggers the disabled CSS
(reduced opacity, no hover effect, no focus ring); the container attribute communicates the disabled
state to assistive technology via the \`role="slider"\`.
`
    }
  }
};
export const DisplayMode = () => displayModeExampleHtml;
DisplayMode.storyName = 'Display mode';
DisplayMode.parameters = {
  docs: {
    description: {
      story: `
Use display mode for any read-only rating — display-only forms, object headers, cards, facets, and
inline running text. Add \`.fd-rating-indicator--display-mode\` and the \`readonly\` attribute to the
outer element. Replace \`role="slider"\` with \`role="img"\` on the \`__container\` and provide an
\`aria-label\` such as \`"Rating: 2 of 5 stars"\`. Remove \`tabindex\` — the element is not focusable.

In display mode, unselected icons are rendered at 75% of the selected icon size.
This size reduction is a visual-only accessibility aid — it allows selected and unselected ratings to be distinguished by shape rather than color alone.
The smaller icons are scaled from their center and offset with additional margin so the overall control width stays stable.
`
    }
  }
};
export const DifferentValues = () => differentValuesExampleHtml;
DifferentValues.storyName = 'Different values';
DifferentValues.parameters = {
  docs: {
    description: {
      story: `
It is possible to display the rating indicator with a different number of values.
It is highly recommended to use 5 as the maximum value, however you can go up to 7
if it is ideal for your use case.
`
    }
  }
};
