import groupingOverflowExampleHtml from "./grouping-overflow.example.html?raw";
import groupingExampleHtml from "./grouping.example.html?raw";
import indicationExampleHtml from "./indication.example.html?raw";
import textExampleHtml from "./text.example.html?raw";
import condensedExampleHtml from "./condensed.example.html?raw";
import utilityExampleHtml from "./utility.example.html?raw";
import cozyExampleHtml from "./cozy.example.html?raw";
import '../../../src/vertical-nav.scss';
import '../../../src/button.scss';
import '../../../src/icon.scss';
import '../../../src/list.scss';
import '../../../src/popover.scss';
export default {
  title: 'Components/Vertical Navigation',
  parameters: {
    description: `
The Vertical Navigation can be used as an alternative to the Horizontal Navigation.<br>
This navigation type is composed by two distinct item levels:<br>

- First Level items - always visible, can be either navigable in and of themselves or be a container for Second Level items (it should not be both)
- Second Level items → Are always contained by a First Level item, and can have their visibility toggled by this First Level item. They are always only navigable

##Usage
**Use the vertical navigation if:**

- You need to display global navigation structures of up to two levels.
- Your scenarios are in the tooling or administration space.
- If you want the entries to change as though they are dynamic content.

**Do not use the vertical navigation if:**

- Your scenarios are not in the tooling or administration space.

##States
Vertical navigation can be viewed in three different states:

- **Expanded:** everything is shown; icons and/or text.
- **Condensed:** only icons are shown; text-only condensed state is not supported.
- **Off-canvas:** side navigation is completely off-screen, and can be triggered via the menu icon in the shellbar.
**Note:** It is recommend to use only two states per device.
        `,
    tags: ['btp', 'theme', 'development']
  }
};
export const Cozy = () => cozyExampleHtml;
Cozy.storyName = 'Default';
Cozy.parameters = {
  docs: {
    story: {
      iframeHeight: 700
    },
    description: {
      story: `
The default vertical navigation is comprised of several navigation list items.
        `
    }
  }
};
export const Utility = () => utilityExampleHtml;
Utility.storyName = 'Utility Section';
Utility.parameters = {
  docs: {
    story: {
      iframeHeight: 700
    },
    description: {
      story: `
The vertical navigation can also have a bottom-aligned "Utility" section.
        `
    }
  }
};
export const Condensed = () => condensedExampleHtml;
Condensed.parameters = {
  docs: {
    story: {
      iframeHeight: 400
    },
    description: {
      story: `
In condensed mode, only icons are shown unless some navigation items have second levels and the second level is expanded.
        `
    }
  }
};
export const Text = () => textExampleHtml;
Text.storyName = 'Text Only';
Text.parameters = {
  docs: {
    story: {
      iframeHeight: 700
    },
    description: {
      story: `
A vertical navigation list does not need to have icons. However this is only available in expanded mode.
        `
    }
  }
};
export const Indication = () => indicationExampleHtml;
Indication.storyName = 'Navigation Indication';
Indication.parameters = {
  docs: {
    story: {
      iframeHeight: 700
    },
    description: {
      story: `
All the possible combinations of navigation indication are visualized below. When a second level item has been navigated to and the second list has been collapsed, the indicator is shown on the right of the corresponding first level item, but the text and icon color do not change.
        `
    }
  }
};
export const Grouping = () => groupingExampleHtml;
Grouping.parameters = {
  docs: {
    story: {
      iframeHeight: 700
    },
    description: {
      story: `The Vertical Navigation items can be further visually grouped using the Group Header List Item.
        `
    }
  }
};
export const GroupingOverflow = () => groupingOverflowExampleHtml;
GroupingOverflow.storyName = 'Grouping with Overflow';
GroupingOverflow.parameters = {
  docs: {
    story: {
      iframeHeight: 700
    },
    description: {
      story: `To clip the content and add a vertical scroll to the Vertical Navigation add the  \`fd-vertical-nav--overflow\` modifier class to the \`fd-vertical-nav\` base class. You need to manually set the max-height of the element on the \`fd-vertical-nav\` level. For example: \`style="max-height: 200px;"\`.
        `
    }
  }
};