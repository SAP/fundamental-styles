import transparentExampleHtml from "./transparent.example.html?raw";
import borderlessExampleHtml from "./borderless.example.html?raw";
import fixedHeightContentExampleHtml from "./fixed-height-content.example.html?raw";
import expandableExampleHtml from "./expandable.example.html?raw";
import fixedExampleHtml from "./fixed.example.html?raw";
import stickyHeaderExampleHtml from "./sticky-header.example.html?raw";

import '../../../src/button.scss';
import '../../../src/icon.scss';
import '../../../src/panel.scss';
import '../../../src/segmented-button.scss';
import '../../../src/toolbar.scss';
export default {
  title: 'Components/Panel',
  parameters: {
    description: `
The panel is a container for grouping and displaying information. Panels are responsive and can be collapsed to save additional screen space.

##Usage
**Use the panel if:**

- You need to group or display information.
- You want to give users the option to hide this information.
- You want to show additional information on demand (for example, a panel could show optional input fields for an advanced search).


**Do not use the panel in:**

- The content area of a **Dynamic Page**.


##Types
There are two types of panels: fixed and expandable.

  `
  }
};
export const Fixed = () => fixedExampleHtml;
Fixed.parameters = {
  docs: {
    description: {
      story: `
        `
    }
  }
};
export const Expandable = () => expandableExampleHtml;
Expandable.parameters = {
  docs: {
    description: {
      story: `Expandable panels are much like fixed panels, except their content can be expanded and collapsed (including the info toolbar, if available).
        `
    }
  }
};
export const FixedHeightContent = () => fixedHeightContentExampleHtml;
FixedHeightContent.storyName = 'Fixed height';
FixedHeightContent.parameters = {
  docs: {
    description: {
      story: `When the height of the panel's content is set to a fixed size, the content area becomes scrollable.
        `
    }
  }
};
export const Borderless = () => borderlessExampleHtml;
Borderless.parameters = {
  docs: {
    description: {
      story: `Panel may have a border or not. For Panel without border use the \`.fd-panel--borderless \` modifier class.
        `
    }
  }
};
export const Transparent = () => transparentExampleHtml;
Transparent.parameters = {
  docs: {
    description: {
      story: `The background of the content can be set to transparent by applying the \`.fd-panel--transparent \` modifier class. <br> The padding of the content can be removed with the \`.fd-panel__content--no-padding \` modifier class added to \`.fd-panel__content \` base class.
        `
    }
  }
};
export const StickyHeader = () => stickyHeaderExampleHtml;
StickyHeader.parameters = {
  docs: {
    description: {
      story: `Sticky header can be achieved by applying the \`.fd-panel--sticky \` modifier class to the panel. The container should have a fixed height, position relative and overflow-y set to scroll.`
    }
  }
};
