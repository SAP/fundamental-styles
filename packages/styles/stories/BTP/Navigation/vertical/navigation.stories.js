import navigationExampleHtml from "./navigation.example.html?raw";
import navigationSnappedExampleHtml from "./navigation-snapped.example.html?raw";
import navigationPopupExampleHtml from "./navigation-popup.example.html?raw";
import navigationLegacyExampleHtml from "./navigation-legacy.example.html?raw";
import navigationTagsHtml from "./navigation-tags.example.html?raw";
import navigationSearchHtml from "./navigation-search.example.html?raw";
import navigationStickyAreaHtml from "./navigation-sticky-area.example.html?raw";

import '../../../../src/navigation.scss';
import '../../../../src/icon.scss';
import '../../../../src/popover.scss';
import '../../../../src/menu.scss';
import '../../../../src/button.scss';
import '../../../../src/input.scss';
import '../../../../src/input-group.scss';
import '../../../../src/object-status.scss';

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
    tags: ['btp', 'horizon-only']
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
      story: `By default, the Parent Navigation Item functions as a Navigation Group. A small arrow icon shows the item's expanded/collapsed state in this scenario. In the snapped variant, clicking on such a navigation item will open a popover that displays the title and Child Items.<br>Although not recommended, the Navigation Item can function for navigation and expansion/collapse. In this case, clicking on the arrow will show/hide Child Items, and clicking on the item will perform the navigation.
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

export const NavigationTags = () => navigationTagsHtml;
NavigationTags.storyName = 'Vertical Navigation - Indication Tags';
NavigationTags.parameters = {
  docs: {
    description: {
      story: `Navigation items can display indication tags (e.g., "New", "Beta", "Deprecated") using the Object Status component.

**Guidelines:**
- One tag per navigation item (parent or child items only)
- Avoid semantic colors 1-4 (may be confused with error/success/warning states)
- Limit tag width to 64px (4rem) — use abbreviations if needed (e.g., "Experimental" → "Exp")
- Tags are visual indicators only (non-interactive, no tooltips or actions)
`
    }
  }
};


export const NavigationStickyArea = () => navigationStickyAreaHtml;
NavigationStickyArea.storyName = 'Vertical Navigation - Sticky Area';
NavigationStickyArea.parameters = {
  docs: {
    description: {
      story: `Fixed header area that is separated by a separator similar to the footer area. Top-aligned and fixed/sticky (always visible). Contains the optional search field. Add <code>.fd-navigation__container--sticky</code> together with <code>.fd-navigation__container--top</code> modifier class to the <code>.fd-navigation__container</code> base class to make the top area sticky.<br>
Guideline: Recommended not to contain more than 4 items.`
    }
  }
};

export const NavigationSearch = () => navigationSearchHtml;
NavigationSearch.storyName = 'Vertical Navigation - Search';
NavigationSearch.parameters = {
  docs: {
    description: {
      story: `Search Only: for a sticky search field, the sticky header area with separator is not needed. The search field can be sticky by applying <code>.fd-navigation__list-item--sticky</code> modifier class to the parent navigation list item.
<br><br><strong>Note:</strong> The <code>.fd-navigation__list-item--home</code> class is still supported for backward compatibility and functions identically to <code>.fd-navigation__list-item--sticky</code>. It was originally intended specifically for Home navigation link, but <code>.fd-navigation__list-item--sticky</code> is now the recommended approach as it can be applied to any list item that needs to be sticky at the top.`
    }
  }
};
