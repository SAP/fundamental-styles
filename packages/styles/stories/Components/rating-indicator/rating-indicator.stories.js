import basicExampleHtml from "./basic.example.html?raw";
import sizesExampleHtml from "./custom-sizes.example.html?raw";

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
        `
  }
};
export const States = () => basicExampleHtml;


export const Sizes = () => sizesExampleHtml;
Sizes.parameters = {
  docs: {
    description: {
      story: `| **Size** | **Modifier class** | **Icon size** | **Spacing between icons** | **Note** |
| :---------: |:---------: | :----------: | :-----------------------: | :--------------- |
| L | <code>fd-rating-indicator--lg</code> | 2rem | 0.25rem  | Sizes in Editable and non-editable |
| M | <code>fd-rating-indicator--md</code> | 1.5rem | 0.1875rem  | Sizes in Editable and non-editable |
| S | <code>fd-rating-indicator--sm</code> | 1.375rem | 0.1875rem  | Sizes in Editable and non-editable |
| XS | <code>fd-rating-indicator--xs</code> | 0.75rem | 0.0625rem  | Recommended only for Display Only.  It is not recommended to use the XS size as an editable rating indicator. <br> If an editable rating indicator is needed then it is recommended to set the size S or above to be compliant with minimum touch size. |`
    }
  }
};