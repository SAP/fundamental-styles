import differentValuesExampleHtml from "./different-values.example.html?raw";
import nonInteractiveExampleHtml from "./non-interactive.example.html?raw";
import displayModeExampleHtml from "./display-mode.example.html?raw";
import disabledExampleHtml from "./disabled.example.html?raw";
import halfValuesExampleHtml from "./half-values.example.html?raw";
import customIconsExampleHtml from "./custom-icons.example.html?raw";
import sizesExampleHtml from "./sizes.example.html?raw";
import '../../../src/rating-indicator.scss';
import '../../../src/icon.scss';
export default {
  title: 'Components/Rating Indicator',
  parameters: {
    description: `
The rating indicator displays a group of icons or images (usually stars) that indicate a rating.
It allows users to rate content on a numeric scale, typically from 1 (lowest) to 5 (highest).
Although the maximum amount is 7 for the icons or images, it is highly recommended to display the default amount of 5.

##Usage
Use the rating indicator in forms, tables, or in a dialog box.
        `,
    tags: ['f3', 'a11y', 'theme']
  }
};
export const Sizes = () => sizesExampleHtml;
Sizes.parameters = {
  docs: {
    description: {
      story: `
| **Size**       | **rem**    | **Modifier class**        |
| :----------    | :--------- | -----------------------:  |
| Extra small    | 0.75rem    | \`--xs\`         |
| Small          | 1rem       | \`--sm\`         |
| Medium/Default | 1.375rem   | _n/a_                     |
| Large          | 2rem       | \`--lg\`         |
| Cozy           | 1.5rem     | \`--cozy\`       |
| Compact        | 1rem       | \`--compact\`    |
| Condensed      | 1rem       | \`--condensed\`  |
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
To make the rating indicator to use custom icons needs to be added class \`.fd-rating-indicator--icon\`
to the \`fd-rating-indicator\` element.
Also, you need to set the icon class that will implement the icon
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
To display half values with the rating indicator i.e 2.5 stars, add the \`fd-rating-indicator--half-star\`
modifier class together with the \`fd-rating-indicator\` class.
`
    }
  }
};
export const Disabled = () => disabledExampleHtml;
Disabled.parameters = {
  docs: {
    description: {
      story: `
To disable rating indicator, the \`[disable]\` attribute needs to be added to all inputs.
Additionally, one of the selectors listed below needs to be added to the \`fd-rating-indicator\` element:

- \`.is-disable\`
- \`aria-disable="true"\`
- \`[disable]\`
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
Data can be presented as label-value field pairs without editable fields in display-only forms, see <a href="../?path=/docs/components-forms-form-grid--s-size">Form Grid</a> for more details.
If you want to include a rating indicator in a display-only form, add the \`.fd-rating-indicator--display-mode\` to the \`fd-rating-indicator\` element.
`
    }
  }
};
export const NonInteractive = () => nonInteractiveExampleHtml;
NonInteractive.storyName = 'Non-interactive';
NonInteractive.parameters = {
  docs: {
    description: {
      story: `
If you want to include a rating indicator in a display-only form,
add the \`.fd-rating-indicator--non-interactive\` class to the \`fd-rating-indicator\` element.
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