import navigationHorizontalExampleHtml from './navigation-horizontal.example.html?raw';
import navigationHorizontalWithExpanderExampleHtml from './navigation-horizontal-expander.example.html?raw';

import '../../../../src/navigation.scss';
import '../../../../src/icon.scss';
import '../../../../src/popover.scss';
import '../../../../src/menu.scss';
import '../../../../src/button.scss';

export default {
    title: 'BTP/Navigation/Horizontal Navigation',
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

export const NavigationHorizontal = () => navigationHorizontalExampleHtml;
NavigationHorizontal.storyName = 'Horizontal Navigation';
NavigationHorizontal.parameters = {
    docs: {
        description: {
            story: `Horizontal Navigation is an optional alternative to the Vertical Navigation variant.
`
        }
    }
};

export const NavigationHorizontalWithExpander = () => navigationHorizontalWithExpanderExampleHtml;
NavigationHorizontalWithExpander.storyName = 'Horizontal Navigation - Two-Click Area';
NavigationHorizontalWithExpander.parameters = {
    docs: {
        description: {
            story: `
`
        }
    }
};
