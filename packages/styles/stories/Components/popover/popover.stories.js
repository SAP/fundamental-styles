import resizableExampleHtml from "./resizable.example.html?raw";
import noArrowExampleHtml from "./no-arrow.example.html?raw";
import placementExampleHtml from "./placement.example.html?raw";
import scrollableExampleHtml from "./scrollable.example.html?raw";
import controlExamplesExampleHtml from "./control-examples.example.html?raw";
import variantsExampleHtml from "./variants.example.html?raw";
import controlExamplesBtpExampleHtml from "./control-examples-btp.example.html?raw";
import '../../../src/avatar.scss';
import '../../../src/bar.scss';
import '../../../src/button.scss';
import '../../../src/icon.scss';
import '../../../src/menu.scss';
import '../../../src/popover.scss';
import '../../../src/segmented-button.scss';
import '../../../src/layout-grid.scss';
export default {
  title: 'Components/Popover',
  parameters: {
    description: `The popover displays additional information for an object in a compact way without leaving the page. The component contains two essential elements: the control (trigger) and body (content). It can also be paired with a **Menu**, whereas the menu button would trigger a dropdown (body).

##Usage
**Use a popover if:**

- You need to define your own structure.
- You want to show UI elements that are not available with the quick view.

**Do not use a popover if:**

- The objects are in a master list (in this case, the details are shown in the details area).


##Guidelines
- As a general rule, it is suggested that one popover be revealed on the page at any given time. Opening one popover should close all others to prevent multiple layers and collisions of several popovers.
- Show status information as text fields in a content group. You can use semantic text colors.
- You can define a height for the popover. If the content exceeds the height, a scroll bar is displayed.

`,
    tags: ['f3', 'a11y', 'theme']
  }
};
export const Variants = () => variantsExampleHtml;
Variants.storyName = 'Body variants';
Variants.parameters = {
  docs: {
    description: {
      story: `There are several variants of the popover body that can be displayed depending on the use case.

| Variant | Modifier class | Description
:------ | :------------- | :---------------
Header | \`fd-popover__body-header\` | To display a header.
Footer | \`fd-popover__body-footer\` | To display a footer with actions.

You can also have subheader by using **Bar** component with subheader.
        `
    }
  }
};

export const ControlExamples = () => controlExamplesExampleHtml;
ControlExamples.storyName = 'Control variants';
ControlExamples.parameters = {
  docs: {
    description: {
      story: `As popover's triggers buttons, images, icons, and more can be used. In the example below, the **Avatar** and **Icon** act as triggers.
        `
    }
  }
};
export const Scrollable = () => scrollableExampleHtml;
Scrollable.parameters = {
  docs: {
    description: {
      story: `When the content overflows, the popover body can become scrollable. To achieve this, add element with class \`fd-popover-body__wrapper\` inside the popover body element.
        `
    }
  }
};
export const Placement = () => placementExampleHtml;
Placement.parameters = {
  docs: {
    description: {
      story: `It's possible to show popover on different sides of the trigger. To do that apply the following modifier classes to the popover body element.

| Modifier | Description |
| :---- | :---------- |
| \`fd-popover__body\` | Positions the popover below the trigger. *(default)* |
| \`fd-popover__body--above\` | Positions the popover above the trigger. |
| \`fd-popover__body--before\` | Positions the popover before the trigger. |
| \`fd-popover__body--after\` | Positions the popover next to the trigger. |

To align the popover arrow with the trigger apply the following modifier classes to the popover body element.

| Arrow modifier class | Description |
| :------------- | :---------- |
| \`fd-popover__body\` | Positions the arrow on the top left side of the popover. *(default)* |
| \`fd-popover__body--arrow-bottom\` | Positions the arrow on the bottom left right side of the popover. |
| \`fd-popover__body--arrow-left\` | Positions the arrow on the left top side of the popover. |
| \`fd-popover__body--arrow-right\` | Positions the arrow on the right top side of the popover. |
| \`fd-popover__body--arrow-x-center\` | Positions the arrow horizontally centered on the popover. |
| \`fd-popover__body--arrow-x-end\` | Positions the arrow to the end by horizontal line of the popover body. |
| \`fd-popover__body--arrow-y-center\` | Positions the arrow vertically centered on the popover. |
| \`fd-popover__body--arrow-y-bottom\` | Positions the arrow to the end by vertical line of the popover. |

**note:** \`fd-popover__body--arrow-y--end\` class has been deprecated in favor of \`fd-popover__body--arrow-y-bottom\`!
        `
    }
  }
};
export const NoArrow = () => noArrowExampleHtml;
NoArrow.parameters = {
  docs: {
    description: {
      story: `It's possible to hide popover's arrow.
To achieve this apply the \`fd-popover__body--no-arrow\` modifier class to the popover body element and remove all the arrow modifier classes.`
    }
  }
};
export const Resizable = () => resizableExampleHtml;
Resizable.parameters = {
  docs: {
    description: {
      story: ``
    }
  }
};

export const ControlExamplesBtp = () => controlExamplesBtpExampleHtml;
ControlExamplesBtp.storyName = 'BTP Popover';
ControlExamplesBtp.parameters = {
  docs: {
    description: {
      story: `This extension of Popover is used by components and patterns in the BTP area. Apply the <code>.fd-popover--btp</code> modifier class to <code>.fd-popover</code> base class. <br>
      To add padding to the Popover body use the <code>.fd-popover__body--padding</code> modifier class together with <code>.fd-popover__body</code> base class. <br>
      The content of the footer can be centered by using the <code>.fd-popover__body-footer--center</code> modifier. 
        `
    }
  }
};