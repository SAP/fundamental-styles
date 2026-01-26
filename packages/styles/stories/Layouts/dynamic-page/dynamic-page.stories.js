import withFacetsMobileExampleHtml from "./with-facets-mobile.example.html?raw";
import withFacetsExampleHtml from "./with-facets.example.html?raw";
import onlyCollapseExampleHtml from "./only-collapse.example.html?raw";
import collapsedHeaderExampleHtml from "./collapsed-header.example.html?raw";
import expandableExampleHtml from "./expandable.example.html?raw";
import summaryLineExampleHtml from "./summary-line.example.html?raw";
import mobileCollapsedExampleHtml from "./mobile-collapsed.example.html?raw";
import mobileExampleHtml from "./mobile.example.html?raw";
import tabletExampleHtml from "./tablet.example.html?raw";
import desktopExampleHtml from "./desktop.example.html?raw";
import '../../../src/bar.scss';
import '../../../src/breadcrumb.scss';
import '../../../src/tabs.scss';
import '../../../src/link.scss';
import '../../../src/toolbar.scss';
import '../../../src/title.scss';
import '../../../src/icon.scss';
import '../../../src/button.scss';
import '../../../src/popover.scss';
import '../../../src/facet.scss';
import '../../../src/form-label.scss';
import '../../../src/object-status.scss';
import '../../../src/object-number.scss';
import '../../../src/rating-indicator.scss';
import '../../../src/avatar.scss';
import '../../../src/margins.scss';
import '../../../src/paddings.scss';
import '../../../src/text.scss';
import '../../../src/dynamic-page.scss';
export default {
  title: 'Layouts/Dynamic Page',
  parameters: {
    description: `The dynamic page is the foundation for all pages in SAP Fiori. It is a generic layout designed to support various use cases; therefore, the content of both the header and page can vary.
        The header of the dynamic page is collapsible, which helps the users focus on the actual page content but still ensures that important header information and actions are readily available.

## Usage
**Use the dynamic page if:**

- You want to build a freestyle application that uses the foundation layout components for SAP Fiori pages, such as the dynamic page header and the footer toolbar.

**Do not use the dynamic page if:**

- You only need to display a small amount of information. In this case, use a **Dialog** instead. If you can’t avoid using the dynamic page, use letterboxing to mitigate the issue.


## Structure
**Dynamic page consists of the following elements:**

- \`fd-dynamic-page\` Main element
  - \`fd-dynamic-page__header\`The header area containing title area, collapsible header with buttons, and tabs
    - \`fd-dynamic-page__title-area\` The area holding title, KPI content, subtitle, and actions
        - \`fd-dynamic-page__main-container\` Main container that holds **Breadcrumb**, title, title content and actions
            - \`fd-dynamic-page__breadcrumb-title-container\` Container that holds breadcrumb, title, and title content
                - \`fd-dynamic-page__breadcrumb-container\` Breadcrumbs Container, can contain toolbar container
                    - \`fd-dynamic-page__breadcrumb\` Breadcrumbs
                - \`fd-dynamic-page__title-container\` The container for title, KPI content and actions and toolbar container
                    - \`fd-dynamic-page__title\` Dynamic page title
                        - \`fd-dynamic-page__title--wrap\` Whether the title wraps instead of truncating
                    - \`fd-dynamic-page__title-content\` The KPI content
                - \`fd-dynamic-page__toolbar-container\` Container that holds toolbar-related actions
                    - \`fd-dynamic-page__toolbar\` Toolbar container for actions
                    - \`fd-dynamic-page__toolbar--actions\` Navigation actions
        - \`fd-dynamic-page__subtitle\` Dynamic page subtitle
            - \`fd-dynamic-page__subtitle--wrap\` Whether the subtitle wraps instead of truncating
    - \`fd-dynamic-page__collapsible-header-container\` Dynamic page header container
        - \`fd-dynamic-page__collapsible-header\` Dynamic page header
        - \`fd-dynamic-page__collapsible-header-visibility-container\` The container for pin/collapse buttons
            - \`fd-dynamic-page__collapse-button\` Collapse button
            - \`fd-dynamic-page__pin-button\` Pin button
    - \`fd-dynamic-page__tabs\` Tabs/Wizard can be optionally used as a header extension
  - \`fd-dynamic-page__content\` Dynamic page content

Note: Footer is optional and used for finalizing page actions. It is usually displayed in edit mode and uses a floating footer bar. You can use \`fd-dynamic-page__footer\` to affix the footer to the bottom of the page.

To display a sticky header, use the \`fd-dynamic-page__header-fixed\` class instead of the default header element. Note that this class only positions the header, and fixing the position of the content needs further implementation. Only use this class when your page content is long enough to scroll.

## Modifiers
| **Description** | <div style="margin-left: 2rem;"> **Modifier class** </div> |
| :---- | :-------------- |
| No shadow for pin/collapse when tabs are used | <code style="margin-left: 2rem;">fd-dynamic-page__header-visibility-container--no-shadow</code>
||<code style="margin-left: 2rem;">fd-dynamic-page__summarized-title-area--no-shadow</code>        |
| Add shadow to tabs when tabs are used | <code style="margin-left: 2rem;">fd-dynamic-page__tabs--add-shadow</code>       |
| Collapsed styles when header is collapsed | <code style="margin-left: 2rem;">fd-dynamic-page__title-area--collapsed</code>      |
||<code style="margin-left: 2rem;">fd-dynamic-page__summarized-title--collapsed</code>        |
| The pin/collapse button group | <code style="margin-left: 2rem;">fd-dynamic-page__header-visibility-container--button-group</code>      |
| The left gradient of the button group | <code style="margin-left: 2rem;">fd-dynamic-page__header-visibility-container--left-gradient</code>      |
| The right gradient of the button group | <code style="margin-left: 2rem;">fd-dynamic-page__header-visibility-container--right-gradient</code>      |
## Background variants

| **Description** | <span style="margin-left: 2rem;">**Modifier class**</span> |
| :---- | :-------------- |
| List background for content area| <code style="margin-left: 2rem;">fd-dynamic-page--list-bg</code>        |
| Transparent background for all areas |  <code style="margin-left: 2rem;">fd-dynamic-page--transparent-bg</code>

`,
    tags: ['f3', 'theme', 'development'],
    components: ['bar', 'breadcrumb', 'tabs', 'link', 'toolbar', 'title', 'icon', 'button', 'popover', 'facet', 'form-label', 'object-status', 'object-number', 'rating-indicator', 'avatar', 'margins', 'paddings', 'text', 'dynamic-page']
  }
};
export const Desktop = () => desktopExampleHtml;
Desktop.parameters = {
  docs: {
    description: {
      story: `The dynamic page displays on desktop screens with the L, XL, and XXL sizes. To optimize dynamic page for desktop, add modifier class \`fd-dynamic-page--xl\`.

In addition, add the modifier classes \`--add-shadow\` to the unordered list, and \`--overflow\` at the parent level for the box-shadow styling.
`
    }
  }
};
export const Tablet = () => tabletExampleHtml;
Tablet.parameters = {
  docs: {
    description: {
      story: `The dynamic page displays on tablet screens with the M size. To optimize dynamic page for tablet, add modifier class \`fd-dynamic-page--md\`.

It is recommended that the navigation actions are displayed in a separate row above product actions, and are placed at the same level as the breadcrumb component.`
    }
  }
};
export const Mobile = () => mobileExampleHtml;
Mobile.parameters = {
  docs: {
    description: {
      story: `The dynamic page displays on mobile screens with the S size. To optimize dynamic page for mobile, add modifier class \`fd-dynamic-page--sm\`.

To display the breadcrumb and close button, they must be wrapped in \`fd-dynamic-page__breadcrumb-container\`. The toolbar overflow actions are functional without being wrapped in an additional container.
Use \`fd-dynamic-page__toolbar--content\` for the title content when it is used in an overflow toolbar.`
    }
  }
};
export const MobileCollapsed = () => mobileCollapsedExampleHtml;
MobileCollapsed.storyName = 'Collapsed Header (mobile)';
MobileCollapsed.parameters = {
  docs: {
    description: {
      story: 'In the example below, the dynamic page is displayed with a collapsed header for mobile screens.'
    }
  }
};
export const SummaryLine = () => summaryLineExampleHtml;
SummaryLine.storyName = 'Summary Line (mobile)';
SummaryLine.parameters = {
  docs: {
    description: {
      story: `It is recommended to add a summary line insead of the expand/collapse header feature so users can better focus on the page content. To display a summary line, add \`fd-dynamic-page__summarized-title\` in the \`fd-dynamic-page__summarized-title-area\` element.`
    }
  }
};
export const Expandable = () => expandableExampleHtml;
Expandable.storyName = 'Expanded Header';
Expandable.parameters = {
  docs: {
    description: {
      story: `As demonstrated earlier, the dynamic page header can be either displayed or hidden with the expand/collapse buttons. Users can select the pin button to keep the header displayed (enabling the sticky feature). To collapse the dynamic page, add the \`--collapsed\` modifier class to the title area and title elements.`
    }
  }
};
export const CollapsedHeader = () => collapsedHeaderExampleHtml;
CollapsedHeader.parameters = {
  docs: {
    description: {
      story: 'In the example below, the dynamic page is displayed with a collapsed header for desktop screens.'
    }
  }
};
export const OnlyCollapse = () => onlyCollapseExampleHtml;
OnlyCollapse.storyName = 'Without pin';
OnlyCollapse.parameters = {
  docs: {
    description: {
      story: 'The dynamic page can be displayed without a pin button, giving users the option to only expand or collapse the header area.'
    }
  }
};
export const WithFacets = () => withFacetsExampleHtml;
WithFacets.storyName = 'With header facets';
WithFacets.parameters = {
  docs: {
    description: {
      story: `To have the image from the image facet appear next to the title, add the class \`fd-facet\` and apply the modifiers \`fd-facet--image\` and \`fd-facet--image-header-title\` to the \`fd-dynamic-page__title-container\` class. Note that the dynamic page title and subtitle should be placed in the \`fd-dynamic-page__title-subtitle-container\` class for proper alignment with the image.
`
    }
  }
};
export const WithFacetsMobile = () => withFacetsMobileExampleHtml;
WithFacetsMobile.storyName = 'With header facets (mobile)';