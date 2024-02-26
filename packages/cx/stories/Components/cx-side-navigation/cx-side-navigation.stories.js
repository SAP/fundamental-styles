import cozyWideIconsSearchExampleHtml from "./cozy-wide-icons-search.example.html?raw";
import compactNarrowPopoverExampleHtml from "./compact-narrow-popover.example.html?raw";
import compactNarrowOverflowExampleHtml from "./compact-narrow-overflow.example.html?raw";
import compactNarrowExampleHtml from "./compact-narrow.example.html?raw";
import cosyNarrowPopoverDynamicWidthExampleHtml from "./cosy-narrow-popover-dynamic-width.example.html?raw";
import cosyNarrowPopoverExampleHtml from "./cosy-narrow-popover.example.html?raw";
import cosyNarrowOverflowExampleHtml from "./cosy-narrow-overflow.example.html?raw";
import cosyNarrowExampleHtml from "./cosy-narrow.example.html?raw";
import compactWideIconsNavCollapseExampleHtml from "./compact-wide-icons-nav-collapse.example.html?raw";
import compactWideIconsExampleHtml from "./compact-wide-icons.example.html?raw";
import cosyWideIconsLevelsMultiClickExampleHtml from "./cosy-wide-icons-levels-multi-click.example.html?raw";
import cosyWideIconsLevelsExampleHtml from "./cosy-wide-icons-levels.example.html?raw";
import cosyWideTextOnlyLevelsExampleHtml from "./cosy-wide-text-only-levels.example.html?raw";
import dynamicWidthExampleHtml from "./dynamic-width.example.html?raw";
import cozyWideTextOnlyExampleHtml from "./cozy-wide-text-only.example.html?raw";
import cozyWideIconsExampleHtml from "./cozy-wide-icons.example.html?raw";
import wrappingLongTextExampleHtml from "./wrapping-long-text.example.html?raw";
import '../../../src/side-nav.scss';
import '../../../src/_nested-list.scss';
import '../../../../styles/src/button.scss';
import '../../../../styles/src/icon.scss';
import '../../../../styles/src/popover.scss';
import '../../../../styles/src/input.scss';
import '../../../../styles/src/input-group.scss';
import '../../../../styles/src/scrollbar.scss';
export default {
  title: 'Components/Cx Side Navigation',
  parameters: {
    description: `The Side Navigation can display structures of up to three levels.
<br><br>In the <code>Wide</code> variant:
- The first levels always shows an icon
- If first-level items have children, they show the expand/collapse arrows
- Second level items do not display an icon and are not indented
- If second-level items have children, they show the expand/collapse arrows
- Third level items do not display an icon and are indented by 2 rem (32px)

<br>
In the <code>Narrow</code> variant:
- The first levels always shows an icon
- If first-level items have children, they show the expand/collapse arrows
- If first-level items have children, and they are clicked, the popover displays the First-level item in bold letters, then the second level items in regular.
- Second level items do not display an icon and are not indented
- If second-level items have children, they show the expand/collapse arrows
- Third level items do not display an icon and are indented by 2 rem (32px)`,
    tags: ['cx', 'theme']
  }
};
export const CozyWideIcons = () => cozyWideIconsExampleHtml;
CozyWideIcons.storyName = 'Cosy Wide With Icon, 1 Level';
export const CozyWideTextOnly = () => cozyWideTextOnlyExampleHtml;
CozyWideTextOnly.storyName = 'Cosy Wide Text Only, 1 Level';
CozyWideTextOnly.parameters = {
  docs: {
    description: {
      story: '<b>Important: </b>This type of Side Navigation does not have <code>Narrow</code> variant.'
    }
  }
};
export const DynamicWidth = () => dynamicWidthExampleHtml;
DynamicWidth.parameters = {
  docs: {
    description: {
      story: `Side Navigation can react dynamically to long label texts in navigational items. In such case the width of the Side Navigation is adapted by the longest label. The label does not wrap or truncate. Use the modifier class <code>.fdx-side-nav--dynamic-width</code> for Side Navigation with dynamic width.
        `
    }
  }
};
export const CosyWideTextOnlyLevels = () => cosyWideTextOnlyLevelsExampleHtml;
CosyWideTextOnlyLevels.storyName = 'Cosy Wide Text Only, 3 Levels';
CosyWideTextOnlyLevels.parameters = {
  docs: {
    description: {
      story: `<b>Important: </b>This type of Side Navigation does not have <code>Narrow</code> variant.
        `
    }
  }
};
export const CosyWideIconsLevels = () => cosyWideIconsLevelsExampleHtml;
CosyWideIconsLevels.storyName = 'Cosy Wide With Icons, 3 Levels, Collapse Only';
export const CosyWideIconsLevelsMultiClick = () => cosyWideIconsLevelsMultiClickExampleHtml;
CosyWideIconsLevelsMultiClick.storyName = 'Cosy Wide With Icons, 3 Levels, Navigation and Collapse';
export const CompactWideIcons = () => compactWideIconsExampleHtml;
CompactWideIcons.storyName = 'Compact Wide With Icons, Level 2 Collapsed';
CompactWideIcons.parameters = {
  docs: {
    description: {
      story: `For compact Side Navigation apply the <code>.fdx-side-nav--compact</code> modifier class with <code>.fdx-side-nav</code> base class, and <code>.fdx-nested-list--compact</code> modifier class with <code>.fdx-nested-list</code> base class.
        `
    }
  }
};
export const CompactWideIconsNavCollapse = () => compactWideIconsNavCollapseExampleHtml;
CompactWideIconsNavCollapse.storyName = 'Compact Wide With Icons, Level 2 Collapsed, Navigation and Collapse';
CompactWideIconsNavCollapse.parameters = {
  docs: {
    description: {
      story: `For compact Side Navigation apply the <code>.fdx-side-nav--compact</code> modifier class with <code>.fdx-side-nav</code> base class, and <code>.fdx-nested-list--compact</code> modifier class with <code>.fdx-nested-list</code> base class.
        `
    }
  }
};
export const CosyNarrow = () => cosyNarrowExampleHtml;
CosyNarrow.storyName = 'Cosy Narrow, Levels 2 and 3 in Popover Hidden';
CosyNarrow.parameters = {
  docs: {
    description: {
      story: `For <code>Narrow</code> variant of Side Navigation apply <code>.fdx-side-nav--narrow</code> modifier class to <code>.fdx-side-nav</code> base class.
        `
    }
  }
};
export const CosyNarrowOverflow = () => cosyNarrowOverflowExampleHtml;
CosyNarrowOverflow.storyName = 'Cosy Narrow with Vertical Overflow Behaviour, Levels 2 and 3 in Popover Hidden';
export const CosyNarrowPopover = () => cosyNarrowPopoverExampleHtml;
export const CosyNarrowPopoverDynamicWidth = () => cosyNarrowPopoverDynamicWidthExampleHtml;
CosyNarrowPopoverDynamicWidth.storyName = 'Cosy Narrow Popover with Dynamic Width';
CosyNarrowPopoverDynamicWidth.parameters = {
  docs: {
    description: {
      story: `Side Navigation Popover can react dynamically to long label texts in navigational items. In such case the width of the Side Navigation Popover is adapted by the longest label. The label does not wrap or truncate. Use the modifier class <code>.fdx-side-nav__popover-body--dynamic-width</code> modifier class with <code>.fdx-side-nav__popover-body</code> base class for Side Navigation Popover with dynamic width.
        `
    }
  }
};
export const CompactNarrow = () => compactNarrowExampleHtml;
CompactNarrow.parameters = {
  docs: {
    description: {
      story: `For <code>Narrow</code> variant of Side Navigation in compact mode apply <code>.fdx-side-nav--narrow</code> and <code>.fdx-side-nav--compact</code> modifier classed to <code>.fdx-side-nav</code> base class.
`
    }
  }
};
export const CompactNarrowOverflow = () => compactNarrowOverflowExampleHtml;
CompactNarrowOverflow.storyName = 'Compact Narrow with Vertical Overflow Behaviour, Levels 2 and 3 in Popover Hidden';
export const CompactNarrowPopover = () => compactNarrowPopoverExampleHtml;
export const CozyWideIconsSearch = () => cozyWideIconsSearchExampleHtml;
CozyWideIconsSearch.storyName = 'Cosy Wide With Icon and Filter Integration, 1 Level';

export const WrappingLongText = () => wrappingLongTextExampleHtml;
WrappingLongText.parameters = {
  docs: {
    description: {
      story: `By default, side navigation will wrap long text into multiple lines if the width of the nav is not enough. Developers can modify this behaviour by adding <code>.fdx-side-nav--single-line</code> class modifier.
        `
    }
  }
};
