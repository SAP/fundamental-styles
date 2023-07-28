import semanticInlineExampleHtml from "./semantic-inline.example.html?raw";
import semanticFilterModeExampleHtml from "./semantic-filter-mode.example.html?raw";
import semanticModeExampleHtml from "./semantic-mode.example.html?raw";
import filterModeExampleHtml from "./filter-mode.example.html?raw";
import processModeExampleHtml from "./process-mode.example.html?raw";
import iconOnlyExampleHtml from "./icon-only.example.html?raw";
import navTabExampleHtml from "./nav-tab.example.html?raw";
import tabWithCountersExampleHtml from "./tab-with-counters.example.html?raw";
import primaryExampleHtml from "./primary.example.html?raw";
import '../../../../src/button.scss';
import '../../../../src/tabs.scss';
import '../../../../src/icon.scss';
export default {
  title: 'Deprecated/Components/Tabs',
  parameters: {
    tags: ['f3', 'a11y', 'theme'],
    description: `Tabs are based on the folder metaphor and used to separate content into different sections. Tabs should be ordered based on priority to create visual hierarchy.
## DEPRECATED

This component is deprecated. Please use the *Icon Tab Bar* component instead.

## Usage
**Use tabs if:**

- Your business objects need to show multiple facets at the same time.
- You want to allow the user to browse through these facets.
- You need a prominent or very visual filter on top of a list.
- You have clear-cut process steps that need to be visualized.


**Do not use tabs if:**

- You plan to use only one single tab.


## Horizontal padding

By default, tabs have no horizontal paddings. If horizontal paddings are added, they should behave responsively based on the screen width.

These modifier classes are used to display horizontal padding for tabs in various sizes.

| rem&nbsp;&nbsp; | Min-width&nbsp;&nbsp; | Max-width&nbsp;&nbsp; | Modifier class |
| ---- | ---------- | ---------- | ----------- |
| 1rem&nbsp;&nbsp; | _n/a_ | 599 px | \`fd-tabs--s\` |
| 2rem&nbsp;&nbsp; | 600 px | 1023 px | \`fd-tabs--m\` |
| 2rem&nbsp;&nbsp; | 1024 px | 1439 px| \`fd-tabs--l\` |
| 3rem&nbsp;&nbsp; | 1440 px | _n/a_ | \`fd-tabs--xl\` |

<br>
        `,
  }
};
export const Primary = () => primaryExampleHtml;
Primary.storyName = 'Default';
Primary.parameters = {
  docs: {
    description: {
      story: `By default, tabs are displayed in a bar and are either inactive or active (highlighted in blue). The bar can also contain actions that apply to the whole page. The example below illustrates the tabs component in cozy mode with no horizontal padding.
        `
    }
  }
};
export const TabWithCounters = () => tabWithCountersExampleHtml;
TabWithCounters.storyName = 'Counters';
TabWithCounters.parameters = {
  docs: {
    description: {
      story: `Tabs can be displayed with counters to indicate that there are a number of resources the user can or should access. To display counters, wrap the \`fd-tabs__count\` class in paragraph tags below the \`fd-tabs__link\` element.

In the example below, the tabs component is optimized for an extra-large screen with the \`fd-tabs--xl\` modifier class, which adds 3rem horizontal paddings.
        `
    }
  }
};
export const NavTab = () => navTabExampleHtml;
NavTab.storyName = 'Navigable';
NavTab.parameters = {
  docs: {
    description: {
      story: `Tabs can be navigable by applying the \`role=”navigation”\` attribute to the main element.
    `
    }
  }
};
export const IconOnly = () => iconOnlyExampleHtml;
IconOnly.storyName = 'Icon';
IconOnly.parameters = {
  docs: {
    description: {
      story: `Tabs can display icons instead of text with the \` fd-tabs__icon\` class (see **Icon** for a list of available icons). To display icon tabs without text, you will also need to add the \`fd-tabs--icon-only\` modifier class to the main element.
    `
    }
  }
};
export const ProcessMode = () => processModeExampleHtml;
ProcessMode.storyName = 'Process mode';
ProcessMode.parameters = {
  docs: {
    description: {
      story: `Tabs can be displayed in subsequent steps, indicating to the user that there is a process to follow. To display tabs in process mode, add the \`fd-tabs--process\` modifier class to the main element.
    `
    }
  }
};
export const FilterMode = () => filterModeExampleHtml;
FilterMode.storyName = 'Filter mode';
FilterMode.parameters = {
  docs: {
    description: {
      story: `Tabs can be displayed in filter mode, indicating to the user that a value has been filtered into separate tabs. To display tabs in filter mode, add the \`fd-tabs--filter\` modifier class to the main element.
    `
    }
  }
};
export const SemanticMode = () => semanticModeExampleHtml;
SemanticMode.storyName = 'Semantic mode';
SemanticMode.parameters = {
  docs: {
    description: {
      story: `Tabs can be displayed with semantic colors to indicate a status. To display semantic tabs, add the following modifier classes to the \`fd-tabs__item\` elements:

State | Modifier class
:------- | :---------------
Success | \`fd-tabs__item--success\`
Warning | \`fd-tabs__item--warning\`
Information | \`fd-tabs__item--information\`
Error | \`fd-tabs__item--error\`
Neutral | \`fd-tabs__item--neutral\`
        `
    }
  }
};
export const SemanticFilterMode = () => semanticFilterModeExampleHtml;
SemanticFilterMode.storyName = 'Semantic filter mode';
SemanticFilterMode.parameters = {
  docs: {
    description: {
      story: `Tabs can be displayed in filter mode with semantic colors. As detailed in the previous examples, add the \`fd-tabs--filter\` modifier class to the main element and add the semantic modifier classes to the \`fd-tabs__item\` elements (see **semantic mode** example for modifier class names).
        `
    }
  }
};
export const SemanticInline = () => semanticInlineExampleHtml;
SemanticInline.storyName = 'Semantic inline';
SemanticInline.parameters = {
  docs: {
    description: {
      story: `Tabs can be displayed with inline text in semantic colors. To display inline text tabs, add the \`fd-tabs__tag\` class below the \`fd-tabs__link\` element.
        `
    }
  }
};