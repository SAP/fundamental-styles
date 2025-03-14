import navigationExampleHtml from "./navigation.example.html?raw";
import navigationSnappedExampleHtml from "./navigation-snapped.example.html?raw";
import navigationPopupExampleHtml from "./navigation-popup.example.html?raw";
import navigationLegacyExampleHtml from "./navigation-legacy.example.html?raw";

import '../../../../src/navigation.scss';
import '../../../../src/icon.scss';
import '../../../../src/popover.scss';
import '../../../../src/menu.scss';
import '../../../../src/button.scss';

export default {
  title: 'BTP/Navigation/Vertical Navigation',
  parameters: {
    description: `The navigation is one of the signature design elements of BTP Tools. 
## Navigation Types:
- <b>Vertical Navigation - Expanded</b>. The default navigation visualization provides a logical grouping of navigation items and two levels of hierarchy.
- <b>Vertical Navigation - Snapped</b>. The snapped vertical navigation variant reduces the navigation width to free horizontal space.
- <b>Vertical Navigation - Popup</b>. An alternative to the expanded/snapped variant, which places the navigation items in a popup.
- <b>Horizontal Navigation</b>&nbsp;- The horizontal variant allows for infinite levels of navigation hierarchy through cascading menus.
    

## Usage
### Recommended
- Use the navigation to switch between different pages of your tool.
- Use expanded vertical navigation for unknown users.
- Use persistence and display the last state the vertical navigation was in for know users.
- Use the snapped variant when the content area displays multi-column content relationships.
- Use the popup variant to display between 3 and 7 navigation items without hierarchy.
- Use the horizontal navigation variant to display more than two levels of hierarchy.
- Use nouns for the titles of navigation items.

### Not Recommended
- Avoid using the navigation for switching between tools. Use the mega menu instead.
- Avoid using the navigation to switch contexts or views. Use tabs or segmented buttons instead.
- Avoid using verbs for the titles of navigation items. Use nouns instead.
- Avoid using the Navigation Items for both navigation and groups. Use only one of the options.
- Avoid having more than three levels of hierarchy in the horizontal variant.
- Avoid using icons in secondary navigation and navigation groups.
- Avoid using spacers to separate navigation content. Use separators instead.
- Avoid using dividers to separate groups. Use separators instead.
- Avoid using the bottom navigation area for service information. Use settings and user menu instead.

`,
    tags: ['btp', 'development', 'horizon-only']
  }
};

export const Navigation = () => navigationExampleHtml;
Navigation.storyName = 'Vertical Navigation - Expanded';
Navigation.parameters = {
  docs: {
    description: {
      story: `Vertical navigation is the most common and preferred way of navigating BTP tools. It comprises many elements that work together to provide a logical information hierarchy and inform users of their current position.
`
    }
  }
};

export const NavigationLegacy = () => navigationLegacyExampleHtml;
NavigationLegacy.storyName = 'Vertical Navigation - Parent Navigation as Link';
NavigationLegacy.parameters = {
  docs: {
    description: {
      story: `By default, the Parent Navigation Item functions as a Navigation Group. A small arrow icon shows the item's expanded/collapsed state in this scenario. In the snapped variant, clicking on such a navigation item will open a popover that displays the title and Child Items.
      Although not recommended, the Navigation Item can function for navigation and expansion/collapse. In this case, clicking on the arrow will show/hide Child Items, and clicking on the item will perform the navigation.
`
    }
  }
};

export const NavigationSnapped = () => navigationSnappedExampleHtml;
NavigationSnapped.storyName = 'Vertical Navigation - Snapped';
NavigationSnapped.parameters = {
  docs: {
    description: {
      story: `The snapped vertical navigation variant reduces the navigation width to free horizontal space.
      `
    }
  }
};

export const NavigationPopup = () => navigationPopupExampleHtml;
NavigationPopup.storyName = 'Vertical Navigation - Popup';
NavigationPopup.parameters = {
  docs: {
    description: {
      story: `An alternative to the expanded/snapped variant, which places the navigation items in a popup.
`
    }
  }
};
