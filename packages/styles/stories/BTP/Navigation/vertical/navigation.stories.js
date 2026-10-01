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
  title: 'BTP/Side Navigation',
  parameters: {
    description: `The side navigation component provides a vertical menu that lets users open applications or modules in your product. It can be implemented as an embedded panel or as an overlay. In embedded mode, the navigation can be expanded or collapsed using the side navigation button. In overlay mode, the button opens the navigation as an overlay. For more details, see <a href="https://www.sap.com/design-system/fiori-design-web/v1-151/ui-elements/side-navigation">SAP Design Guidelines</a>.

## Embedded Mode
The side navigation is embedded into the page and can expand or collapse. The button toggles between expanded and collapsed states. On screens wider than 600px, the navigation stays embedded. On smaller screens (600px or less) and phones, it becomes a full-screen overlay instead.

## Overlay Mode
The side navigation opens as a popover and closes when you select an item. On web and tablets, it appears as a responsive popover. On phones, it always appears as a full-screen dialog.

## Usage
### Recommended
- As the main navigation paradigm across the application, to navigate to multiple targets.

### Not Recommended
- For structuring the application layout or implementing application-specific logic.
- If your product has only a single navigation target.
- In a combination of embedded and overlay modes. Use either of them.
`
  }
};

export const Navigation = () => navigationExampleHtml;
Navigation.storyName = 'Embedded Mode - Expanded';
Navigation.parameters = {
  docs: {
    description: {
      story: `
`
    }
  }
};

export const NavigationLegacy = () => navigationLegacyExampleHtml;
NavigationLegacy.storyName = 'Parent Navigation as Link';
NavigationLegacy.parameters = {
  docs: {
    description: {
      story: `By default, parent items act as navigation groups with an arrow icon showing their expanded/collapsed state. When collapsed, clicking a parent item opens a popover with its child items.<br>Alternatively (not recommended), parent items can both navigate and expand/collapse: clicking the arrow toggles child items, while clicking the item navigates.
`
    }
  }
};

export const NavigationSnapped = () => navigationSnappedExampleHtml;
NavigationSnapped.storyName = 'Embedded Mode - Collapsed (Snapped)';
NavigationSnapped.parameters = {
  docs: {
    description: {
      story: `When collapsed, child items appear in a popover. Navigation elements move to an overflow area when space is limited. Items with children display as cascaded menus in the overflow. Selecting an overflow item brings its parent into view above the overflow button.
      `
    }
  }
};

export const NavigationPopup = () => navigationPopupExampleHtml;
NavigationPopup.storyName = 'Overlay Mode (Popup)';
NavigationPopup.parameters = {
  docs: {
    description: {
      story: `In overlay mode, the side navigation button opens and closes the popover. The navigation items are displayed within the popover, allowing access to all levels of the navigation hierarchy without occupying permanent screen space.
`
    }
  }
};

export const NavigationTags = () => navigationTagsHtml;
NavigationTags.storyName = 'Indication Tags';
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
NavigationStickyArea.storyName = 'Sticky Area';
NavigationStickyArea.parameters = {
  docs: {
    description: {
      story: `Fixed header area that is separated by a separator similar to the footer area. Top-aligned and fixed/sticky (always visible). Contains the optional search field. Add <code>.fd-navigation__container--sticky</code> together with <code>.fd-navigation__container--top</code> modifier class to the <code>.fd-navigation__container</code> base class to make the top area sticky.<br><br>
Guideline: Recommended not to contain more than 4 items.<br><br>For more details, see <a href="https://www.sap.com/design-system/fiori-design-web/v1-151/ui-elements/side-navigation">SAP Design Guidelines</a>.`
    }
  }
};

export const NavigationSearch = () => navigationSearchHtml;
NavigationSearch.storyName = 'Search';
NavigationSearch.parameters = {
  docs: {
    description: {
      story: `Search Only: for a sticky search field, the sticky header area with separator is not needed. The search field can be sticky by applying <code>.fd-navigation__list-item--sticky</code> modifier class to the parent navigation list item.
<br><br><strong>Note:</strong> The <code>.fd-navigation__list-item--home</code> class is still supported for backward compatibility and functions identically to <code>.fd-navigation__list-item--sticky</code>. It was originally intended specifically for Home navigation link, but <code>.fd-navigation__list-item--sticky</code> is now the recommended approach as it can be applied to any list item that needs to be sticky at the top.<br> <br>For more details, see <a href="https://www.sap.com/design-system/fiori-design-web/v1-151/ui-elements/side-navigation">SAP Design Guidelines</a>.`
    }
  }
};
