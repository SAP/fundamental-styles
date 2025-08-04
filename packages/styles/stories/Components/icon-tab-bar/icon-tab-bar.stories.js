import dragAndDropExampleHtml from "./drag-and-drop.example.html?raw";
import navigationFlatExampleHtml from "./navigation-flat.example.html?raw";
import navigationExampleHtml from "./navigation.example.html?raw";
import paddingsExampleHtml from "./paddings.example.html?raw";
import respPaddingsExampleHtml from "./resp-paddings.example.html?raw";
import badgeExampleHtml from "./badge.example.html?raw";
import multiClickExampleHtml from "./multi-click.example.html?raw";
import singleClickExampleHtml from "./single-click.example.html?raw";
import overflowExampleHtml from "./overflow.example.html?raw";
import filterExampleHtml from "./filter.example.html?raw";
import processExampleHtml from "./process.example.html?raw";
import iconExampleHtml from "./icon.example.html?raw";
import iconOnlySemanticExampleHtml from "./icon-only-semantic.example.html?raw";
import iconOnlyExampleHtml from "./icon-only.example.html?raw";
import counterExampleHtml from "./counter.example.html?raw";
import textOnlySemanticExampleHtml from "./text-only-semantic.example.html?raw";
import textOnlyExampleHtml from "./text-only.example.html?raw";
import textOnlyClosableExampleHtml from "./text-only-closable.example.html?raw";

import '../../../src/icon.scss';
import '../../../src/icon-tab-bar.scss';
import '../../../src/popover.scss';
import '../../../src/menu.scss';
import '../../../src/button.scss';
import '../../../src/list.scss';
export default {
  title: 'Components/Icon Tab Bar',
  parameters: {
    description: `
The Icon Tab Bar can be used for navigation within an object, or as a filter. Each tab of the component links to a different content area or view.

##Usage
**Use the icon tab bar if:**

- Your business objects need to show multiple facets at the same time.
- You want to allow the user to browse through these facets.
- You need a prominent or very visual filter on top of a list.
- You have clear-cut process steps that need to be visualized.

**Do not use the icon tab bar if:**

- You plan to use only a single tab.

##Semantic colors
Only use semantic colors if it is important for users to know that they need to take action (for example, to indicate errors or critical situations requiring action). Otherwise, use the neutral default colors. To add semantic color to a tab use a modifier class from the table below on \`fd-icon-tab-bar__item\` level.

| **Color** | **Modifier class** |
| :--------- | :---------- |
| positive &nbsp;&nbsp; | \`fd-icon-tab-bar__item--positive\` |
| negative &nbsp;&nbsp; | \`fd-icon-tab-bar__item--negative\` |
| critical &nbsp;&nbsp; | \`fd-icon-tab-bar__item--critical\` |
| informative &nbsp;&nbsp; | \`fd-icon-tab-bar__item--informative\` |

##Horizontal paddings
You can add horizontal paddings by applying a modifier class to the container. For responsive horizontal paddings (based on the screen size) add the \`fd-icon-tab-bar--responsive-paddings\` modifier class. In this case the left and right spacing will change as the screen size changes.

| **Size** | **Modifier class** |
| :--------- | :---------- |
| sm (1rem) &nbsp;&nbsp; | \`fd-icon-tab-bar--sm\` |
| md (2rem) &nbsp;&nbsp; | \`fd-icon-tab-bar--md\` |
| lg (2rem) &nbsp;&nbsp; | \`fd-icon-tab-bar--lg\` |
| xl (3rem) &nbsp;&nbsp; | \`fd-icon-tab-bar--xl\` |
| xxl (3rem) &nbsp;&nbsp; | \`fd-icon-tab-bar--xxl\` |

##Background
By default, the background for the Icon Tab Bar header and content is set to "solid". This will apply \`--sapObjectHeader_Background\` background color and \`--sapContent_HeaderShadow\` box-shadow to the header and \`--sapBackgroundColor\` to the container (panel). It can be changed to "translucent" or "transparent" using modifier classes. In translucent mode the header gets \`--sapObjectHeader_Background\` background color and the panel \`--sapGroup_ContentBackground\` background color.

| **Background** | **Modifier class** |
| :--------- | :---------- |
| solid &nbsp;&nbsp; | default |
| translucent &nbsp;&nbsp; | \`fd-icon-tab-bar--translucent\` |
| transparent &nbsp;&nbsp; | \`fd-icon-tab-bar--transparent\` |

<br><br><br>
      `,
    tags: ['f3', 'development']
  }
};
export const TextOnly = () => textOnlyExampleHtml;
TextOnly.storyName = 'Text Only (Inline mode)';
TextOnly.parameters = {
  docs: {
    description: {
      story: 'The text-only variant is one of the most common types. It allows longer labels, and can also display counters next to the text to indicate the number of items on the tab page. The labels of the tabs do not get truncated. The full text is always shown. As a result, you need to ensure that your labels do not become too long. They should still be easy to read on smaller screens. The control has the same look and feel in Cozy and Compact mode.'
    }
  }
};
export const TextOnlySemantic = () => textOnlySemanticExampleHtml;
TextOnlySemantic.storyName = 'Text Only (Inline mode) Semantic Colors';
export const Counter = () => counterExampleHtml;
Counter.storyName = 'Counters and Text';
Counter.parameters = {
  docs: {
    description: {
      story: '<code>NOTE: This is no longer recommended.</code> Counters can be shown on top of labels. In this case you need to apply the `fd-icon-tab-bar--counters` modifier class. <br> The control has the same look and feel in Cozy and Compact mode.'
    }
  }
};
export const IconOnly = () => iconOnlyExampleHtml;
IconOnly.parameters = {
  docs: {
    description: {
      story: 'The Icon tabs are rounded tabs that can be populated with any icon. The labels in this case are omitted and counters are optional. You need to apply the `fd-icon-tab-bar--icon-only` modifier class for this type of tabs.'
    }
  }
};
export const IconOnlySemantic = () => iconOnlySemanticExampleHtml;
IconOnlySemantic.storyName = 'Icon Only Semantic Colors';
export const Icon = () => iconExampleHtml;
Icon.parameters = {
  docs: {
    description: {
      story: 'To display Icon Tabs with labels and counters you need to apply the `fd-icon-tab-bar--icon` modifier class. The counters are optional and can be ommited. The label is always positioned at the bottom. If you decide to use labels, use them for all tabs. The badge is rendered at the top right hand corner of the icon container. Consider using shorter labels or text tabs (without icons), since text tabs cannot get truncated.'
    }
  }
};
export const Process = () => processExampleHtml;
Process.parameters = {
  docs: {
    description: {
      story: 'You can also use the tab bar to depict a process. In this case, each tab stands for one step. You need to add the `fd-icon-tab-bar--process` modifier class and a sibling html element with `fd-icon-tab-bar__separator` class to the tab.'
    }
  }
};
export const Filter = () => filterExampleHtml;
Filter.parameters = {
  docs: {
    description: {
      story: `The tab bar as a filter has two parts: <br>- An “all” tab on the left - shows the total number of items, and describes the type of item (for example, 189 Products).<br>-  Tabs for specific filters - the tab text indicates the filter attribute. It is recommended to show a counter on every tab.<br>You need to add the \`fd-icon-tab-bar--filter\` modifier class for this type of tabs.`
    }
  }
};
export const Overflow = () => overflowExampleHtml;
Overflow.parameters = {
  docs: {
    description: {
      story: `Tabs can have an overflow to either sides of the control. Depending on if the order is fixed (process steps) or can be rearranged (tabs). For processes with a fixed order, an overflow to both sides is used. For tabs that can be rearranged, only one overflow will be displayed on the right side.`
    }
  }
};
export const SingleClick = () => singleClickExampleHtml;
SingleClick.storyName = 'Universal Icon Tab Bar Single Click Area';
SingleClick.parameters = {
  docs: {
    description: {
      story: `When there is only one click area per tab (also including tabs with sub-items), regular tabs get selected immediately after the click is released. Tabs with sub-items trigger the expansion of a menu (Popover) showing its sub-items. The parent tab title remains displayed when its child is select.<br>You need to apply the \`fd-icon-tab-bar__item--single-click\` modifier class to \`fd-icon-tab-bar__item\` element. The List component inside the Popover has an additional modifier class \`fd-icon-tab-bar__list\` to achieve the nesting (indentation) of the elements. The list menu can be borderless, with line separators (\`fd-icon-tab-bar__line-separator\`) or icon separators (\`fd-icon-tab-bar__icon-separator\`) `
    }
  }
};
export const MultiClick = () => multiClickExampleHtml;
MultiClick.storyName = 'Universal Icon Tab Bar Multi Click Area';
MultiClick.parameters = {
  docs: {
    description: {
      story: 'In case of two click areas for tabs with sub-tabs, the behaviour for regular tabs (without sub-items) remains unchanged, like described above the tabs get selected immediately. Tabs with two click areas behave differently: when the main part of the tab is clicked, it is highlighted and then selected immediately. Clicking the second area opens a menu (Popover) containing the sub-items. Once a sub-item is clicked, the main tab is highlighted as selected. '
    }
  }
};
export const Badge = () => badgeExampleHtml;
Badge.storyName = 'Badges';
Badge.parameters = {
  docs: {
    description: {
      story: `The Tab attention badge is applied as a visual eye-catcher to indicate a change within a Tab. <br>The badge is a span element with \`fd-icon-tab-bar__badge\` class. It can be animated by adding an additional \` fd-icon-tab-bar__badge--animated\` modifier class. In this case the badge appears for a few milliseconds and then disappears.`
    }
  }
};
export const RespPaddings = () => respPaddingsExampleHtml;
RespPaddings.storyName = 'Responsive Paddings';
RespPaddings.parameters = {
  docs: {
    description: {
      story: 'For an Icon Tab Bar with responsive paddings that adjust based on the screen size add the `fd-icon-tab-bar--responsive-paddings` modifier class.'
    }
  }
};
export const Paddings = () => paddingsExampleHtml;
Paddings.storyName = 'Sizes and Horizontal Paddings';
Paddings.parameters = {
  docs: {
    description: {
      story: 'You can set horizontal paddings by adding a modifier class and specifying the size of the paddings. Please refer to the "Paddings" section at the top of the page for the available sizes.'
    }
  }
};
export const Navigation = () => navigationExampleHtml;
Navigation.storyName = 'Navigation Icon Tab Bar (Shell Navigation)';
Navigation.parameters = {
  docs: {
    description: {
      story: `The Navigation Tab Bar is the main/default navigation displayed on the SAP Fiori launchpad home page. It offers the user an easy access to multiple pages per space. The background color of the Shell Navigation is connected the Home/Shell Header to properly differentiate the global shell navigation versus any application specific navigation. The Navigation Bar snaps to top and remains visible while scrolling. It is not visible in App view. <br>The implementation is based on UniversalIconTabBar with some different color parameters that are specific to Shell Bar. <br>If there are more Tabs than the screen can accommodate, the remaining Tabs move into an Overflow.`
    }
  }
};
export const NavigationFlat = () => navigationFlatExampleHtml;
NavigationFlat.storyName = 'Flat Navigation';
NavigationFlat.parameters = {
  docs: {
    description: {
      story: `The Flat Navigation offers the user an easy access to multiple pages per space. As the ShellNavigation (Fiori 3), the Flat Navigation is the main/default navigation displayed on the SAP Fiori launchpad home page. It snaps to top and remains visible while scrolling and is not visible in App view. <br>The Flat Navigation Concept allows putting all entities of a single space directly into the first level of the Top Level Navigation Bar for direct access. <br>Add the \`.fd-icon-tab-bar--navigation-flat\` modifier class to \`.fd-icon-tab-bar.fd-icon-tab-bar--navigation\` to achieve the flat navigation look and feel. <br>The items that have separators need to receive the \`.fd-icon-tab-bar__item--with-separator\` modifier class to \`.fd-icon-tab-bar__item\` class. This will append a vertical separator line on the right hand side of the item with an 1rem offset.
        `
    }
  }
};
export const DragAndDrop = () => dragAndDropExampleHtml;
DragAndDrop.storyName = 'Tabs drag and drop';
DragAndDrop.parameters = {
  docs: {
    description: {
      story: `You can allow users to rearrange the tab order. If this feature is enabled, users can drag and drop tabs to reorder them, either directly on the tab bar or inside the overflow menu. It is also possible to drag and drop tabs from the tab bar to the overflow menu and vice versa. <br>There're 4 classes for drag and drop: 
<br>use \`fd-icon-tab-bar__item--dnd-preview\` to indicate the element that is being dragged;
<br>use \`fd-icon-tab-bar__item--dnd-hovered\` when dragging over an item. This class indicates that tab, that is being dragged, can be inserted into the current one;
<br>\`fd-icon-tab-bar__item--dnd-separator\` adds a visual indicator before the tab, to which is applied, when element that is being dragged can be insterted before particular one. When used with the subtab, separator will be vertical;<br>
\`fd-icon-tab-bar__item--dnd-separator-end\` - same as above. Being applied after the tab, to which is applied.`
    }
  }
};


export const TextOnlyClosable = () => textOnlyClosableExampleHtml;
TextOnlyClosable.storyName = 'Closable Tabs';
TextOnlyClosable.parameters = {
  docs: {
    description: {
      story: `For closable tabs add the \`.fd-icon-tab-bar__item--closable\` modifier class to the \`.fd-icon-tab-bar__item\`. The close button is placed inside a button container, responsible for the proper spacing between the elements.<br>Closable tabs can also be moved into the overflow. There the close button remains shown for each tab. The modifier class in this case is \`.fd-icon-tab-bar__list-item--closable\` added to the list item with base class \`.fd-icon-tab-bar__list-item\`.

        `
    }
  }
};
