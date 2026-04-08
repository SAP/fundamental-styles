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
    description: `The dynamic page is the foundation for all pages in SAP. It is a generic layout designed to support various use cases; therefore, the content of both the header and page can vary.
        The header of the dynamic page is collapsible, which helps the users focus on the actual page content but still ensures that important header information and actions are readily available.

## Usage
**Use the dynamic page if:**

- You want to build a freestyle application that uses the foundation layout components for SAP pages, such as the dynamic page header and the footer toolbar.

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
                        - \`fd-dynamic-page__title-content--wrap\` Whether the title content wraps instead of truncating
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
    tags: [],
    components: ['bar', 'breadcrumb', 'tabs', 'link', 'toolbar', 'title', 'icon', 'button', 'popover', 'facet', 'form-label', 'object-status', 'object-number', 'rating-indicator', 'avatar', 'margins', 'paddings', 'text', 'dynamic-page']
  }
};
export const Desktop = () => desktopExampleHtml;
Desktop.parameters = {
  docs: {
    description: {
      story: `Optimized for desktop screens (L, XL, and XXL sizes). Apply the \`fd-dynamic-page--xl\` modifier class.

For proper box-shadow styling, add \`fd-dynamic-page__tabs--add-shadow\` to the tabs list and wrap it in a \`fd-dynamic-page__tabs--overflow\` container.`
    }
  }
};
export const Tablet = () => tabletExampleHtml;
Tablet.parameters = {
  docs: {
    description: {
      story: `Optimized for tablet screens (M size). Apply the \`fd-dynamic-page--md\` modifier class.

Navigation actions should appear in a separate row above product actions, aligned with the breadcrumb component.`
    }
  }
};
export const Mobile = () => mobileExampleHtml;
Mobile.parameters = {
  docs: {
    description: {
      story: `Optimized for mobile screens (S size). Apply the \`fd-dynamic-page--sm\` modifier class.

Wrap the breadcrumb and close button in \`fd-dynamic-page__breadcrumb-container\`. For title content within an overflow toolbar, use \`fd-dynamic-page__toolbar--content\`.`
    }
  }
};
export const MobileCollapsed = () => mobileCollapsedExampleHtml;
MobileCollapsed.storyName = 'Collapsed Header (mobile)';
MobileCollapsed.parameters = {
  docs: {
    description: {
      story: 'Displays the dynamic page with a collapsed header on mobile screens.'
    }
  }
};
export const SummaryLine = () => summaryLineExampleHtml;
SummaryLine.storyName = 'Summary Line (mobile)';
SummaryLine.parameters = {
  docs: {
    description: {
      story: `On mobile, a summary line can replace the expand/collapse header to help users focus on page content. Add \`fd-dynamic-page__summarized-title\` within the \`fd-dynamic-page__summarized-title-area\` element.`
    }
  }
};
export const Expandable = () => expandableExampleHtml;
Expandable.storyName = 'Expanded Header';
Expandable.parameters = {
  docs: {
    description: {
      story: `The header can be expanded or collapsed using the toggle buttons. Users can pin the header to keep it visible while scrolling. To collapse the header, add the \`--collapsed\` modifier to the title area and title elements.`
    }
  }
};
export const CollapsedHeader = () => collapsedHeaderExampleHtml;
CollapsedHeader.parameters = {
  docs: {
    description: {
      story: 'Displays the dynamic page with a collapsed header on desktop screens.'
    }
  }
};
export const OnlyCollapse = () => onlyCollapseExampleHtml;
OnlyCollapse.storyName = 'Without pin';
OnlyCollapse.parameters = {
  docs: {
    description: {
      story: 'The header can be configured without a pin button, allowing users to only expand or collapse the header area.'
    }
  }
};
export const WithFacets = () => withFacetsExampleHtml;
WithFacets.storyName = 'With header facets';
WithFacets.parameters = {
  docs: {
    description: {
      story: `To position the image facet next to the title, add \`fd-facet\` with \`fd-facet--image\` and \`fd-facet--image-header-title\` modifiers to the \`fd-dynamic-page__title-container\`. Place the title and subtitle within \`fd-dynamic-page__title-subtitle-container\` for proper alignment.`
    }
  }
};
export const WithFacetsMobile = () => withFacetsMobileExampleHtml;
WithFacetsMobile.storyName = 'With header facets (mobile)';