import nestedListPopoverExampleHtml from "./nested-list-popover.example.html?raw";
import nestedListWithoutLinksExampleHtml from "./nested-list-without-links.example.html?raw";
import nestedListWithGroupHeadersCompactModeExampleHtml from "./nested-list-with-group-headers-compact-mode.example.html?raw";
import nestedListWithGroupHeadersExampleHtml from "./nested-list-with-group-headers.example.html?raw";
import nestedListWithIconsOnlyInFirstLevelExampleHtml from "./nested-list-with-icons-only-in-first-level.example.html?raw";
import nestedListWithoutIconsExampleHtml from "./nested-list-without-icons.example.html?raw";
import condensedStateCompactExampleHtml from "./condensed-state-compact.example.html?raw";
import condensedStateCozyExampleHtml from "./condensed-state-cozy.example.html?raw";
import complexCompactSideNavExampleHtml from "./complex-compact-side-nav.example.html?raw";
import complexCozySideNavExampleHtml from "./complex-cozy-side-nav.example.html?raw";
import cozyGroupingExampleHtml from "./cozy-grouping.example.html?raw";
import cozyIconsExampleHtml from "./cozy-icons.example.html?raw";
import cozyExampleHtml from "./cozy.example.html?raw";
import '../../../../src/side-nav.scss';
import '../../../../src/button.scss';
import '../../../../src/icon.scss';
import '../../../../src/_nested-list.scss';
import '../../../../src/popover.scss';
export default {
  title: 'Deprecated/Components/Side Navigation',
  parameters: {
    description: `
## DEPRECATED

This component is deprecated in favor of the vertical navigation component.
The side navigation area can be used to display navigation structures with up to two levels and contains links that change the content area.
The side navigation consists of two container sections: the **main navigation section** (top-aligned) with links used to navigate within the user’s current work context,
and the **utility section** (bottom-aligned) that contains links to additional information. Both of these sections use a nested list to display navigation items.

##Usage
**Use the side navigation if:**

- You need to display global navigation structures of up to two levels.
- Your scenarios are in the tooling or administration space.
- If you want the entries to change as though they are dynamic content.


**Do not use the side navigation if:**

- Your scenarios are not in the tooling or administration space.
- You want the entries to open a new browser window.

##States
Side navigation can be viewed in three different states:

- **Expanded:** everything is shown; icons and/or text.
- **Condensed:** only icons are shown; text-only condensed state is not supported.
- **Off-canvas:** side navigation is completely off-screen, and can be triggered via the menu icon in the shellbar.

**Note:** It is recommend to use only two states per device.

        `,
    tags: ['f3', 'a11y', 'theme']
  }
};
export const Cozy = () => cozyExampleHtml;
Cozy.storyName = 'Default';
Cozy.parameters = {
  docs: {
    story: {
      iframeHeight: 400
    },
    description: {
      story: `
The default side navigation is displayed in cozy mode with one navigation level. Because there is only one level, all further navigation is shown in the content area. The \`fd-nested-list--text-only\` modifier class should be added to the lists in both the main and utility sections.
        `
    }
  }
};
export const CozyIcons = () => cozyIconsExampleHtml;
CozyIcons.storyName = 'Icons';
CozyIcons.parameters = {
  docs: {
    story: {
      iframeHeight: 400
    },
    description: {
      story: `
Side navigation can be displayed with icons. In the expanded state, entries can consist of only text or an icon with text. The use or non-use of icons must be consistent for all links on one level. Do not combine entries with and without icons on the same level. To display icons in list items, add the \`fd-nested-list__icon\` class within the list items.
        `
    }
  }
};
export const CozyGrouping = () => cozyGroupingExampleHtml;
CozyGrouping.storyName = 'Group';
CozyGrouping.parameters = {
  docs: {
    story: {
      iframeHeight: 400
    },
    description: {
      story: `
Side navigation can be displayed with group headers that organize the entries, which is ideal for when there is more than one level of hierarchy. When they are grouped, the entries on the first level are just headers and don't trigger navigation themselves.
<br><br>It's recommended to use up to two levels of navigation, however; for more levels of navigation, use the content area. When expanded, the \`is-expanded\` class should also be extended to the content element. To trigger another level, use the \`fd-nested-list__button\` element.
        `
    }
  }
};
export const ComplexCozySideNav = () => complexCozySideNavExampleHtml;
ComplexCozySideNav.storyName = 'Complex';
ComplexCozySideNav.parameters = {
  docs: {
    story: {
      iframeHeight: 550
    },
    description: {
      story: `
Side navigation can display several different features such as icons, group headers, and two levels of navigation.
        `
    }
  }
};
export const ComplexCompactSideNav = () => complexCompactSideNavExampleHtml;
ComplexCompactSideNav.storyName = 'Complex (compact)';
ComplexCompactSideNav.parameters = {
  docs: {
    story: {
      iframeHeight: 550
    },
    description: {
      story: `
Side navigation can be displayed in compact mode and can also display several features like icons, group headers, and two levels of navigation. Compact mode is best viewed from a large desktop screen. To display a complex side navigation in compact mode, add the \`fd-nested-list--compact\` modifier class to the nested list element.
        `
    }
  }
};
export const CondensedStateCozy = () => condensedStateCozyExampleHtml;
CondensedStateCozy.storyName = 'Condensed';
CondensedStateCozy.parameters = {
  docs: {
    story: {
      iframeHeight: 500
    },
    description: {
      story: `
Side navigation can be displayed in a condensed state, showing only icons that represent the navigation entries. When the user selects an entry from the navigation, a **Popover** is displayed. The default size for the popover body is often longer than the text length. However, the length can be adjusted to match the text length by adding the \`fd-popover__body--dropdown-fill\` class to the \`fd-popover__body\` element.
<br><br>To display a condensed side navigation, add the \`fd-side-nav--condensed\` modifier class to the main element.
        `
    }
  }
};
export const CondensedStateCompact = () => condensedStateCompactExampleHtml;
CondensedStateCompact.storyName = 'Condensed (compact)';
CondensedStateCompact.parameters = {
  docs: {
    story: {
      iframeHeight: 500
    },
    description: {
      story: `
Side navigation can be displayed in a condensed state, showing only icons that represent the navigation entries. Like the previous example, the default size for the popover body is often longer than the text length, and can be adjusted by adding the \`fd-popover__body--dropdown-fill\` class to the \`fd-popover__body\` element.
<br><br>To display a condensed side navigation in compact mode, add the \` fd-side-nav--condensed\` modifier class to the main element and the \`fd-nested-list--compact\` modifier class to the nested list element.
`
    }
  }
};
export const NestedListWithoutIcons = () => nestedListWithoutIconsExampleHtml;
NestedListWithoutIcons.parameters = {
  docs: {
    disable: true
  }
};
export const NestedListWithIconsOnlyInFirstLevel = () => nestedListWithIconsOnlyInFirstLevelExampleHtml;
NestedListWithIconsOnlyInFirstLevel.parameters = {
  docs: {
    disable: true
  }
};
export const NestedListWithGroupHeaders = () => nestedListWithGroupHeadersExampleHtml;
NestedListWithGroupHeaders.parameters = {
  docs: {
    disable: true
  }
};
export const NestedListWithGroupHeadersCompactMode = () => nestedListWithGroupHeadersCompactModeExampleHtml;
NestedListWithGroupHeadersCompactMode.parameters = {
  docs: {
    disable: true
  }
};
export const NestedListWithoutLinks = () => nestedListWithoutLinksExampleHtml;
NestedListWithoutLinks.parameters = {
  docs: {
    disable: true
  }
};
export const NestedListPopover = () => nestedListPopoverExampleHtml;
NestedListPopover.parameters = {
  docs: {
    story: {
      iframeHeight: 900
    },
    description: {
      story: `
Nested list can be displayed inside popover.
        `
    }
  }
};