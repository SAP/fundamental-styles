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
        components: ['bar', 'breadcrumb', 'tabs', 'link', 'toolbar', 'title', 'icon', 'button', 'popover', 'facet',
            'form-label', 'object-status', 'object-number', 'rating-indicator', 'avatar', 'margins', 'paddings', 'text', 'dynamic-page']
    }
};

export const Desktop = () => `
    <section class="fd-dynamic-page fd-dynamic-page--xl" aria-label="Dynamic Page Desktop Example">
        <header class="fd-dynamic-page__header">
            <div class="fd-dynamic-page__title-area " tabindex="0">
                <div class="fd-dynamic-page__main-container">
                    <div class="fd-dynamic-page__breadcrumb-title-container">
                        <nav aria-label="Breadcrumbs">
                            <ul class="fd-dynamic-page__breadcrumb fd-breadcrumb">
                                <li class="fd-breadcrumb__item"><a class="fd-link" tabindex="0" href="#"><span class="fd-link__content">Men</span></a></li>
                                <li class="fd-breadcrumb__item"><a class="fd-link" tabindex="0" href="#"><span class="fd-link__content">Shoes</span></a></li>
                                <li class="fd-breadcrumb__item"><a aria-current="page" class="fd-link" tabindex="0" href="#"><span class="fd-link__content">Running Shoes</span></a></li>
                            </ul>
                        </nav>
                        <div class="fd-dynamic-page__title-container">
                            <h1 class="fd-title fd-dynamic-page__title" title="Balenciaga Triple S Trainers"> Balenciaga Triple S Trainers </h1>
                            <div class="fd-dynamic-page__title-content" title="Some RANDOM things"> Some RANDOM things </div>
                            <div class="fd-dynamic-page__toolbar-container">
                                <div role="toolbar" aria-label="Product actions" class="fd-dynamic-page__toolbar fd-toolbar fd-toolbar--clear fd-toolbar--transparent">
                                    <button class="fd-button fd-button--compact fd-button--positive">Accept</button>
                                    <button class="fd-button fd-button--compact fd-button--reject">Reject</button>
                                    <span class="fd-toolbar__separator"></span>
                                </div>
                                <div role="toolbar" aria-label="Navigation actions" class="fd-dynamic-page__toolbar fd-dynamic-page__toolbar--actions fd-toolbar fd-toolbar--clear fd-toolbar--transparent">
                                    <button class="fd-button fd-button--transparent" aria-label="Resize">
                                        <i class="sap-icon--resize"></i>
                                    </button>
                                    <button class="fd-button fd-button--transparent" aria-label="Exit fullscreen">
                                        <i class="sap-icon--exitfullscreen"></i>
                                    </button>
                                    <button class="fd-button fd-button--transparent" aria-label="Close">
                                        <i class="sap-icon--decline"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="fd-dynamic-page__subtitle"> Oversized multimaterial sneakers with quilted effect </div>
            </div>
            <div class="fd-dynamic-page__collapsible-header-container">
                <div class="fd-dynamic-page__collapsible-header" role="region" id="fddplhvc6" aria-label="Dynamic Page Desktop Header" >
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam possimus corrupti architecto perspiciatis,
                    delectus necessitatibus incidunt numquam asperiores tenetur iure.
                    Cum consequuntur impedit repellendus esse, facere autem optio consequatur nobis?
                </div>
                <div class="fd-dynamic-page__collapsible-header-visibility-container fd-dynamic-page__collapsible-header-visibility-container--no-shadow">
                    <div class="fd-dynamic-page__collapsible-header-visibility-container--left-gradient"></div>
                    <div role="toolbar" aria-label="Header actions" class="fd-dynamic-page__collapsible-header-visibility-container--button-group">
                        <button class="fd-dynamic-page__collapse-button fd-button fd-button--compact"
                                aria-label="See More"
                                aria-expanded="true"
                                aria-haspopup="true"
                                aria-controls="fddplhvc6">
                                <i class="sap-icon--slim-arrow-up"></i>
                        </button>
                        <button class="fd-dynamic-page__pin-button fd-button fd-button--compact"
                                aria-label="Pin this">
                                <i class="sap-icon--pushpin-off"></i>
                        </button>
                    </div>
                    <div class="fd-dynamic-page__collapsible-header-visibility-container--right-gradient"></div>
                </div>
            </div>
            <div class="fd-dynamic-page__tabs--overflow">
                <ul class="fd-tabs fd-tabs--l fd-dynamic-page__tabs fd-dynamic-page__tabs--add-shadow" role="tablist">
                    <li role="tab" class="fd-tabs__item">
                        <a class="fd-tabs__link" aria-controls="fuCwV550" href="#fuCwV550">
                            <span class="fd-tabs__tag">
                                Link
                            </span>
                        </a>
                    </li>
                    <li role="tab" class="fd-tabs__item" aria-selected="true">
                        <a class="fd-tabs__link" aria-controls="AiWfz165" href="#AiWfz165">
                            <span class="fd-tabs__tag">
                                Selected
                            </span>
                        </a>
                    </li>
                </ul>
            </div>
        </header>
        <div class="fd-dynamic-page__content">
            <div class="fd-tabs__panel" aria-expanded="false" id="fuCwV550" role="tabpanel">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum illo voluptatem, unde voluptate aliquam
                eum tempore aliquid dolorem cumque ullam perspiciatis omnis et asperiores dolores, consequatur, suscipit sint animi amet?
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum illo voluptatem, unde voluptate aliquam eum tempore aliquid
                dolorem cumque ullam perspiciatis omnis et asperiores dolores, consequatur, suscipit sint animi amet?
            </div>
            <div class="fd-tabs__panel" aria-expanded="true" id="AiWfz165" role="tabpanel" >
                Dolor sit Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius assumenda, quidem natus optio repudiandae deleniti
                in atque quis, sed cum asperiores minus rerum incidunt unde quod fuga amet ea reprehenderit.
                Dolor sit Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius assumenda, quidem natus optio repudiandae deleniti
                in atque quis, sed cum asperiores minus rerum incidunt unde quod fuga amet ea reprehenderit.
                Dolor sit Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius assumenda, quidem natus optio repudiandae deleniti
                in atque quis, sed cum asperiores minus rerum incidunt unde quod fuga amet ea reprehenderit.
                Dolor sit Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius assumenda, quidem natus optio repudiandae deleniti
                in atque quis, sed cum asperiores minus rerum incidunt unde quod fuga amet ea reprehenderit.
                Dolor sit Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius assumenda, quidem natus optio repudiandae deleniti
                in atque quis, sed cum asperiores minus rerum incidunt unde quod fuga amet ea reprehenderit.
                Dolor sit Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius assumenda, quidem natus optio repudiandae deleniti
                in atque quis, sed cum asperiores minus rerum incidunt unde quod fuga amet ea reprehenderit.
                Dolor sit Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius assumenda, quidem natus optio repudiandae deleniti
                in atque quis, sed cum asperiores minus rerum incidunt unde quod fuga amet ea reprehenderit.
                Dolor sit Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius assumenda, quidem natus optio repudiandae deleniti
                in atque quis, sed cum asperiores minus rerum incidunt unde quod fuga amet ea reprehenderit.
                Dolor sit Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius assumenda, quidem natus optio repudiandae deleniti
                in atque quis, sed cum asperiores minus rerum incidunt unde quod fuga amet ea reprehenderit.
                Dolor sit Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius assumenda, quidem natus optio repudiandae deleniti
                in atque quis, sed cum asperiores minus rerum incidunt unde quod fuga amet ea reprehenderit.
            </div>
        </div>
        <footer class="fd-bar fd-bar--floating-footer" style="position:relative">
            <div role="toolbar" aria-label="Finalizing actions" class="fd-bar__right">
                <div class="fd-bar__element">
                    <button aria-label="button" class="fd-button fd-button--emphasized fd-button--compact">Save</button>
                </div>
                <div class="fd-bar__element">
                    <button aria-label="button" class="fd-button fd-button--transparent fd-button--compact">Cancel</button>
                </div>
            </div>
        </footer>
    </section>
    <br /><br />
`;

Desktop.parameters = {
    docs: {
        description: {
            story: `The dynamic page displays on desktop screens with the L, XL, and XXL sizes. To optimize dynamic page for desktop, add modifier class \`fd-dynamic-page--xl\`.

In addition, add the modifier classes \`--add-shadow\` to the unordered list, and \`--overflow\` at the parent level for the box-shadow styling.
`
        }
    }
};

export const Tablet = () => `
    <section class="fd-dynamic-page fd-dynamic-page--md" aria-label="Dynamic Page Tablet Example">
        <header class="fd-dynamic-page__header">
            <div class="fd-dynamic-page__title-area " tabindex="0">
            <div class="fd-dynamic-page__main-container">
                    <div class="fd-dynamic-page__breadcrumb-title-container">
                            <div class="fd-dynamic-page__breadcrumb-container">
                            <nav aria-label="Breadcrumbs">
                                <ul class="fd-dynamic-page__breadcrumb fd-breadcrumb">
                                    <li class="fd-breadcrumb__item"><a class="fd-link" tabindex="0" href="#"><span class="fd-link__content">Men</span></a></li>
                                    <li class="fd-breadcrumb__item"><a class="fd-link" tabindex="0" href="#"><span class="fd-link__content">Shoes</span></a></li>
                                    <li class="fd-breadcrumb__item"><a aria-current="page" class="fd-link" tabindex="0" href="#"><span class="fd-link__content">Running Shoes</span></a></li>
                                </ul>
                            </nav>
                            <div class="fd-dynamic-page__toolbar-container">
                                <div role="toolbar" aria-label="Product actions" class="fd-dynamic-page__toolbar fd-toolbar fd-toolbar--cozy fd-toolbar--clear fd-toolbar--transparent">
                                    <button class="fd-button fd-button--transparent" aria-label="Resize">
                                        <i class="sap-icon--resize"></i>
                                    </button>
                                    <button class="fd-button fd-button--transparent" aria-label="Exit fullscreen">
                                        <i class="sap-icon--exitfullscreen"></i>
                                    </button>
                                    <button class="fd-button fd-button--transparent" aria-label="Close">
                                        <i class="sap-icon--decline"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="fd-dynamic-page__title-container">
                            <h1 class="fd-title fd-dynamic-page__title">
                                <a href="#" class="fd-link" title="Balenciaga Triple S Trainers"><span class="fd-link__content">Balenciaga Triple S Trainers </span></a>
                            </h1>
                            <div class="fd-dynamic-page__title-content" title="Some RANDOM things"> Some RANDOM things </div>
                            <div class="fd-dynamic-page__toolbar-container">
                                <div role="toolbar" aria-label="Navigation actions" class="fd-dynamic-page__toolbar fd-dynamic-page__toolbar--actions fd-toolbar fd-toolbar--cozy fd-toolbar--clear fd-toolbar--transparent">
                                    <button class="fd-button fd-button--positive">Accept</button>
                                    <button class="fd-button fd-button--reject">Reject</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="fd-dynamic-page__subtitle"> Oversized multimaterial sneakers with quilted effect </div>
                </div>
            </div>
            <div class="fd-dynamic-page__collapsible-header-container">
                <div class="fd-dynamic-page__collapsible-header" role="region"  aria-hidden="false" id="fddplhvc5" aria-label="Tablet header">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam possimus corrupti architecto perspiciatis,
                    delectus necessitatibus incidunt numquam asperiores tenetur iure.
                    Cum consequuntur impedit repellendus esse, facere autem optio consequatur nobis?
                </div>
                <div class="fd-dynamic-page__collapsible-header-visibility-container fd-dynamic-page__collapsible-header-visibility-container--no-shadow">
                    <div class="fd-dynamic-page__collapsible-header-visibility-container--left-gradient"></div>
                    <div role="toolbar" aria-label="Header actions" class="fd-dynamic-page__collapsible-header-visibility-container--button-group">
                        <button class="fd-dynamic-page__collapse-button fd-button fd-button--compact"
                                aria-label="See More"
                                aria-expanded="true"
                                aria-haspopup="true"
                                aria-controls="fddplhvc5">
                                <i class="sap-icon--slim-arrow-up"></i>
                        </button>
                        <button class="fd-dynamic-page__pin-button fd-button fd-button--compact"
                                aria-label="Pin this">
                                <i class="sap-icon--pushpin-off"></i>
                        </button>
                    </div>
                    <div class="fd-dynamic-page__collapsible-header-visibility-container--right-gradient"></div>
                </div>
            </div>
            <div class="fd-dynamic-page__tabs--overflow">
                <ul class="fd-tabs fd-dynamic-page__tabs fd-dynamic-page__tabs--add-shadow" role="tablist">
                    <li role="tab" class="fd-tabs__item" aria-controls="fuCwV551" >
                        <a class="fd-tabs__link" href="#fuCwV551">
                            <span class="fd-tabs__tag">
                                Link
                            </span>
                        </a>
                    </li>
                    <li role="tab" class="fd-tabs__item" aria-selected="true" aria-controls="AiWfz166">
                        <a class="fd-tabs__link" href="#AiWfz166">
                            <span class="fd-tabs__tag">
                                Selected
                            </span>
                        </a>
                    </li>
                </ul>
            </div>
        </header>
        <div class="fd-dynamic-page__content">
            <div class="fd-tabs__panel" aria-expanded="false" id="fuCwV551" role="tabpanel">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum illo voluptatem, unde voluptate aliquam
                eum tempore aliquid dolorem cumque ullam perspiciatis omnis et asperiores dolores, consequatur, suscipit sint animi amet?
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum illo voluptatem, unde voluptate aliquam eum tempore aliquid
                dolorem cumque ullam perspiciatis omnis et asperiores dolores, consequatur, suscipit sint animi amet?
            </div>
            <div class="fd-tabs__panel" aria-expanded="true" id="AiWfz166" role="tabpanel" >
                Dolor sit Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius assumenda, quidem natus optio repudiandae deleniti
                in atque quis, sed cum asperiores minus rerum incidunt unde quod fuga amet ea reprehenderit.
                Dolor sit Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius assumenda, quidem natus optio repudiandae deleniti
                in atque quis, sed cum asperiores minus rerum incidunt unde quod fuga amet ea reprehenderit.
                Dolor sit Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius assumenda, quidem natus optio repudiandae deleniti
                in atque quis, sed cum asperiores minus rerum incidunt unde quod fuga amet ea reprehenderit.
                Dolor sit Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius assumenda, quidem natus optio repudiandae deleniti
                in atque quis, sed cum asperiores minus rerum incidunt unde quod fuga amet ea reprehenderit.
                Dolor sit Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius assumenda, quidem natus optio repudiandae deleniti
                in atque quis, sed cum asperiores minus rerum incidunt unde quod fuga amet ea reprehenderit.
                Dolor sit Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius assumenda, quidem natus optio repudiandae deleniti
                in atque quis, sed cum asperiores minus rerum incidunt unde quod fuga amet ea reprehenderit.
                Dolor sit Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius assumenda, quidem natus optio repudiandae deleniti
                in atque quis, sed cum asperiores minus rerum incidunt unde quod fuga amet ea reprehenderit.
                Dolor sit Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius assumenda, quidem natus optio repudiandae deleniti
                in atque quis, sed cum asperiores minus rerum incidunt unde quod fuga amet ea reprehenderit.
                Dolor sit Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius assumenda, quidem natus optio repudiandae deleniti
                in atque quis, sed cum asperiores minus rerum incidunt unde quod fuga amet ea reprehenderit.
                Dolor sit Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius assumenda, quidem natus optio repudiandae deleniti
                in atque quis, sed cum asperiores minus rerum incidunt unde quod fuga amet ea reprehenderit.
            </div>
        </div>
        <footer class="fd-bar fd-bar--cozy fd-bar--floating-footer" style="position:relative">
            <div role="toolbar" aria-label="Finalizing actions" class="fd-bar__right">
                <div class="fd-bar__element">
                    <button aria-label="button" class="fd-button fd-button--emphasized">Save</button>
                </div>
                <div class="fd-bar__element">
                    <button aria-label="button" class="fd-button fd-button--transparent">Cancel</button>
                </div>
            </div>
        </footer>
    </section>
    <br /><br />
`;

Tablet.parameters = {
    docs: {
        description: {
            story: `The dynamic page displays on tablet screens with the M size. To optimize dynamic page for tablet, add modifier class \`fd-dynamic-page--md\`.

It is recommended that the navigation actions are displayed in a separate row above product actions, and are placed at the same level as the breadcrumb component.`
        }
    }
};

export const Mobile = () =>
    `<div class="mobile-container">
        <section class="fd-dynamic-page fd-dynamic-page--sm" aria-label="Dynamic Page Mobile Example">
            <header class="fd-dynamic-page__header">
                <div class="fd-dynamic-page__title-area " tabindex="0">
                    <div class="fd-dynamic-page__main-container">
                        <div class="fd-dynamic-page__breadcrumb-title-container">
                            <div class="fd-dynamic-page__breadcrumb-container">
                                <nav aria-label="Breadcrumbs">
                                    <ul class="fd-breadcrumb">
                                        <li class="fd-breadcrumb__item"><a class="fd-link" href="#"><span class="fd-link__content">Men</span></a></li>
                                        <li class="fd-breadcrumb__item"><a class="fd-link" href="#"><span class="fd-link__content">Shoes</span></a></li>
                                        <li class="fd-breadcrumb__item"><a aria-current="page" class="fd-link" href="#"><span class="fd-link__content">Running Shoes</span></a></li>
                                    </ul>
                                </nav>
                                <div role="toolbar" aria-label="Close action" class="fd-dynamic-page__toolbar fd-dynamic-page__toolbar--actions fd-toolbar fd-toolbar--cozy fd-toolbar--clear fd-toolbar--transparent">
                                    <button class="fd-button fd-button--transparent" aria-label="Close">
                                        <i class="sap-icon--decline"></i>
                                    </button>
                                </div>
                            </div>
                            <div class="fd-dynamic-page__title-container">
                                <h1 class="fd-title fd-dynamic-page__title" title="Balenciaga Triple S Trainers"> Balenciaga Triple S Trainers </h1>
                                <div role="toolbar" aria-label="Header Content" class="fd-dynamic-page__toolbar fd-dynamic-page__toolbar--content fd-toolbar fd-toolbar--cozy fd-toolbar--clear fd-toolbar--transparent">
                                    <div class="fd-popover">
                                        <div class="fd-popover__control">
                                            <button
                                                id="asfmiasudashd"
                                                onclick="
                                                    toggleElAttrs('wgxzK85915', ['aria-hidden']);
                                                    toggleElAttrs('asfmiasudashd', ['aria-expanded']);
                                                "
                                                class="fd-button fd-button--transparent"
                                                aria-controls="wgxzK85915"
                                                aria-haspopup="true"
                                                aria-expanded="true"
                                                aria-label="More Header Content">
                                                <i class="sap-icon--overflow"></i>
                                            </button>
                                        </div>
                                        <div class="fd-popover__body fd-popover__body--right fd-popover__body--no-arrow"
                                            aria-hidden="false"
                                            id="wgxzK85915">
                                            <div class="fd-toolbar__overflow">
                                                Overflowing title content
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div role="toolbar" aria-label="Product actions" class="fd-dynamic-page__toolbar fd-toolbar fd-toolbar--cozy fd-toolbar--clear fd-toolbar--transparent">
                                    <div class="fd-popover">
                                        <div class="fd-popover__control">
                                            <button
                                                id="maisodusakdnsma"
                                                onclick="
                                                    toggleElAttrs('wgxzK85914', ['aria-hidden']);
                                                    toggleElAttrs('maisodusakdnsma', ['aria-expanded']);
                                                "
                                                class="fd-button fd-button--transparent"
                                                aria-controls="wgxzK85914"
                                                aria-haspopup="true"
                                                aria-expanded="true"
                                                aria-label="Header actions">
                                                <i class="sap-icon--overflow"></i>
                                            </button>
                                        </div>
                                        <div class="fd-popover__body fd-popover__body--right fd-popover__body--no-arrow"
                                            aria-hidden="false"
                                            id="wgxzK85914">
                                            <div class="fd-toolbar__overflow">
                                                <button class="fd-button fd-button--transparent fd-toolbar__overflow-button">Accept</button>
                                                <button class="fd-button fd-button--transparent fd-toolbar__overflow-button">Reject</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="fd-dynamic-page__subtitle"> Expanded header in mobile </div>
                </div>
                <div class="fd-dynamic-page__collapsible-header-container">
                    <div class="fd-dynamic-page__collapsible-header" role="region" id="fddplhvc4" aria-label="Dynamic Page Mobile Header">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam possimus corrupti architecto perspiciatis,
                        delectus necessitatibus incidunt numquam asperiores tenetur iure.
                        Cum consequuntur impedit repellendus esse, facere autem optio consequatur nobis?
                    </div>
                    <div class="fd-dynamic-page__collapsible-header-visibility-container fd-dynamic-page__collapsible-header-visibility-container--no-shadow">
                        <div class="fd-dynamic-page__collapsible-header-visibility-container--left-gradient"></div>
                        <div role="toolbar" aria-label="Header actions" class="fd-dynamic-page__collapsible-header-visibility-container--button-group">
                            <button class="fd-dynamic-page__collapse-button fd-button fd-button--compact"
                                    aria-label="See More"
                                    aria-expanded="true"
                                    aria-haspopup="true"
                                    aria-controls="fddplhvc4">
                                    <i class="sap-icon--slim-arrow-up"></i>
                            </button>
                        </div>
                        <div class="fd-dynamic-page__collapsible-header-visibility-container--right-gradient"></div>
                    </div>
                </div>
                <div class="fd-dynamic-page__tabs--overflow">
                    <ul class="fd-tabs fd-dynamic-page__tabs fd-dynamic-page__tabs--add-shadow" role="tablist">
                        <li class="fd-tabs__item" aria-controls="fuCwV552" role="tab">
                            <a class="fd-tabs__link" href="#fuCwV552">
                                <span class="fd-tabs__tag">
                                    Link
                                </span>
                            </a>
                        </li>
                        <li class="fd-tabs__item" aria-selected="true" role="tab">
                            <a class="fd-tabs__link" aria-controls="AiWfz167" href="#AiWfz167">
                                <span class="fd-tabs__tag">
                                    Selected
                                </span>
                            </a>
                        </li>
                    </ul>
                </div>
            </header>
            <div class="fd-dynamic-page__content">
                <div class="fd-tabs__panel" aria-expanded="false" id="fuCwV552" role="tabpanel">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum illo voluptatem, unde voluptate aliquam
                    eum tempore aliquid dolorem cumque ullam perspiciatis omnis et asperiores dolores, consequatur, suscipit sint animi amet?
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum illo voluptatem, unde voluptate aliquam eum tempore aliquid
                    dolorem cumque ullam perspiciatis omnis et asperiores dolores, consequatur, suscipit sint animi amet?
                </div>
                <div class="fd-tabs__panel" aria-expanded="true" id="AiWfz167" role="tabpanel">
                    Dolor sit Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius assumenda, quidem natus optio repudiandae deleniti
                    in atque quis, sed cum asperiores minus rerum incidunt unde quod fuga amet ea reprehenderit.
                    Dolor sit Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius assumenda, quidem natus optio repudiandae deleniti
                    in atque quis, sed cum asperiores minus rerum incidunt unde quod fuga amet ea reprehenderit.
                </div>
            </div>
            <footer class="fd-bar fd-bar--cozy fd-bar--floating-footer" style="position:relative">
                <div role="toolbar" aria-label="Finalizing actions" class="fd-bar__right">
                    <div class="fd-bar__element">
                        <button aria-label="button" class="fd-button fd-button--emphasized">Save</button>
                    </div>
                    <div class="fd-bar__element">
                        <button aria-label="button" class="fd-button fd-button--transparent">Cancel</button>
                    </div>
                </div>
            </footer>
        </section>
    </div>
`;

Mobile.parameters = {
    docs: {
        description: {
            story: `The dynamic page displays on mobile screens with the S size. To optimize dynamic page for mobile, add modifier class \`fd-dynamic-page--sm\`.

To display the breadcrumb and close button, they must be wrapped in \`fd-dynamic-page__breadcrumb-container\`. The toolbar overflow actions are functional without being wrapped in an additional container.
Use \`fd-dynamic-page__toolbar--content\` for the title content when it is used in an overflow toolbar.`
        }
    }
};

export const MobileCollapsed = () =>
    `<div class="mobile-container">
        <section class="fd-dynamic-page fd-dynamic-page--sm" aria-label="Dynamic Page Mobile Collapsed Example">
            <header class="fd-dynamic-page__header">
                <div class="fd-dynamic-page__title-area  fd-dynamic-page__title-area--collapsed" tabindex="0">
                    <div class="fd-dynamic-page__main-container">
                        <div class="fd-dynamic-page__breadcrumb-title-container">
                            <div class="fd-dynamic-page__breadcrumb-container">
                                <nav aria-label="Breadcrumbs">
                                    <ul class="fd-breadcrumb">
                                        <li class="fd-breadcrumb__item"><a class="fd-link" tabindex="0" href="#"><span class="fd-link__content">Men</span></a></li>
                                        <li class="fd-breadcrumb__item"><a class="fd-link" tabindex="0" href="#"><span class="fd-link__content">Shoes</span></a></li>
                                        <li class="fd-breadcrumb__item"><a aria-current="page" class="fd-link" tabindex="0" href="#"><span class="fd-link__content">Running Shoes</span></a></li>
                                    </ul>
                                </nav>
                                <div role="toolbar" aria-label="Close action" class="fd-dynamic-page__toolbar fd-dynamic-page__toolbar--actions fd-toolbar fd-toolbar--cozy fd-toolbar--clear fd-toolbar--transparent">
                                        <button class="fd-button fd-button--transparent" aria-label="Close">
                                            <i class="sap-icon--decline"></i>
                                        </button>
                                </div>
                            </div>
                            <div class="fd-dynamic-page__title-container">
                                <h1 class="fd-title fd-dynamic-page__title" title="Balenciaga Triple S Trainers"> Balenciaga Triple S Trainers </h1>
                                <div role="toolbar" aria-label="Header Content" class="fd-dynamic-page__toolbar fd-dynamic-page__toolbar--content fd-toolbar fd-toolbar--cozy fd-toolbar--clear fd-toolbar--transparent">
                                    <div class="fd-popover">
                                        <div class="fd-popover__control">
                                            <button
                                                id="ko9as8dajskdj"
                                                onclick="
                                                    toggleElAttrs('wgxzK85913', ['aria-hidden']);
                                                    toggleElAttrs('ko9as8dajskdj', ['aria-expanded']);
                                                "
                                                class="fd-button fd-button--transparent"
                                                aria-controls="wgxzK85913"
                                                aria-haspopup="true"
                                                aria-expanded="true"
                                                aria-label="More Header Content">
                                                <i class="sap-icon--overflow"></i>
                                            </button>
                                        </div>
                                        <div class="fd-popover__body fd-popover__body--right fd-popover__body--no-arrow"
                                            aria-hidden="false"
                                            id="wgxzK85913">
                                            <div class="fd-toolbar__overflow">
                                                Overflowing title content
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div role="toolbar" aria-label="Product actions" class="fd-dynamic-page__toolbar fd-toolbar fd-toolbar--cozy fd-toolbar--clear fd-toolbar--transparent">
                                    <div class="fd-popover">
                                        <div class="fd-popover__control">
                                            <button
                                                id="k9r0a8ioasjd"
                                                onclick="
                                                    toggleElAttrs('wgxzK85912', ['aria-hidden']);
                                                    toggleElAttrs('k9r0a8ioasjd', ['aria-expanded']);
                                                "
                                                class="fd-button fd-button--transparent"
                                                aria-controls="wgxzK85912"
                                                aria-haspopup="true"
                                                aria-expanded="false"
                                                aria-label="Header actions">
                                                <i class="sap-icon--overflow"></i>
                                            </button>
                                        </div>
                                        <div class="fd-popover__body fd-popover__body--right fd-popover__body--no-arrow"
                                            aria-hidden="false"
                                            id="wgxzK85912">
                                            <div class="fd-toolbar__overflow">
                                                <button class="fd-button fd-button--transparent fd-toolbar__overflow-button ">Accept</button>
                                                <button class="fd-button fd-button--transparent fd-toolbar__overflow-button ">Reject</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="fd-dynamic-page__subtitle"> Collapsed header </div>
                </div>
                <div class="fd-dynamic-page__collapsible-header-container">
                    <div class="fd-dynamic-page__collapsible-header" role="region" aria-hidden="true" id="fddplhvcm1"  aria-label="Dynamic Page Mobile Collapsed Header" >
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam possimus corrupti architecto perspiciatis,
                        delectus necessitatibus incidunt numquam asperiores tenetur iure.
                        Cum consequuntur impedit repellendus esse, facere autem optio consequatur nobis?
                    </div>
                    <div class="fd-dynamic-page__collapsible-header-visibility-container fd-dynamic-page__collapsible-header-visibility-container--no-shadow">
                        <div class="fd-dynamic-page__collapsible-header-visibility-container--left-gradient"></div>
                        <div role="toolbar" aria-label="Header actions" class="fd-dynamic-page__collapsible-header-visibility-container--button-group">
                            <button class="fd-dynamic-page__collapse-button fd-button fd-button--compact"
                                    aria-label="See More"
                                    aria-expanded="false"
                                    aria-haspopup="true"
                                    aria-controls="fddplhvcm1">
                                    <i class="sap-icon--slim-arrow-down"></i>
                            </button>
                        </div>
                        <div class="fd-dynamic-page__collapsible-header-visibility-container--right-gradient"></div>
                    </div>
                </div>
                <div class="fd-dynamic-page__tabs--overflow">
                    <ul class="fd-tabs fd-tabs--l fd-dynamic-page__tabs fd-dynamic-page__tabs--add-shadow" role="tablist">
                        <li role="tab" class="fd-tabs__item">
                            <a class="fd-tabs__link" aria-controls="fuCwV553" href="#fuCwV553">
                                <span class="fd-tabs__tag">
                                    Link
                                </span>
                            </a>
                        </li>
                        <li role="tab" class="fd-tabs__item" aria-selected="true">
                            <a class="fd-tabs__link" aria-controls="AiWfz168" href="#AiWfz168">
                                <span class="fd-tabs__tag">
                                    Selected
                                </span>
                            </a>
                        </li>
                    </ul>
                </div>
            </header>
            <div class="fd-dynamic-page__content">
                <div class="fd-tabs__panel" aria-expanded="false" id="fuCwV553" role="tabpanel">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum illo voluptatem, unde voluptate aliquam
                    eum tempore aliquid dolorem cumque ullam perspiciatis omnis et asperiores dolores, consequatur, suscipit sint animi amet?
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum illo voluptatem, unde voluptate aliquam eum tempore aliquid
                    dolorem cumque ullam perspiciatis omnis et asperiores dolores, consequatur, suscipit sint animi amet?
                </div>
                <div class="fd-tabs__panel" aria-expanded="true" id="AiWfz168" role="tabpanel">
                    Dolor sit Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius assumenda, quidem natus optio repudiandae deleniti
                    in atque quis, sed cum asperiores minus rerum incidunt unde quod fuga amet ea reprehenderit.
                    Dolor sit Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius assumenda, quidem natus optio repudiandae deleniti
                    in atque quis, sed cum asperiores minus rerum incidunt unde quod fuga amet ea reprehenderit.
                </div>
            </div>
            <footer class="fd-bar fd-bar--cozy fd-bar--floating-footer" style="position:relative">
                <div role="toolbar" aria-label="Finalizing actions" class="fd-bar__right">
                    <div class="fd-bar__element">
                        <button aria-label="button" class="fd-button fd-button--emphasized">Save</button>
                    </div>
                    <div class="fd-bar__element">
                        <button aria-label="button" class="fd-button fd-button--transparent">Cancel</button>
                    </div>
                </div>
            </footer>
        </section>
    </div>
`;

MobileCollapsed.storyName = 'Collapsed Header (mobile)';
MobileCollapsed.parameters = {
    docs: {
        description: {
            story: 'In the example below, the dynamic page is displayed with a collapsed header for mobile screens.'
        }
    }
};

export const SummaryLine = () =>
    `<div class="mobile-container">
        <section class="fd-dynamic-page fd-dynamic-page--sm" aria-label="Dynamic Page Mobile Summary Line Example">
            <header class="fd-dynamic-page__header">
                <div
                    class="fd-dynamic-page__summarized-title-area fd-dynamic-page__summarized-title-area--no-shadow"
                    tabindex="0">
                    <h1 class="fd-dynamic-page__summarized-title fd-dynamic-page__summarized-title--collapsed" title="Balenciaga Triple S Trainers"> Balenciaga Triple S Trainers </h1>
                    <div role="toolbar" aria-label="Expand summary line action"
                        class="fd-dynamic-page__toolbar fd-dynamic-page__toolbar--actions  fd-toolbar fd-toolbar--cozy fd-toolbar--clear fd-toolbar--transparent">
                            <button class="fd-button fd-button--transparent" aria-label="Expand">
                                <i class="sap-icon--slim-arrow-down"></i>
                            </button>
                    </div>
                </div>
                <div class="fd-dynamic-page__title-area  fd-dynamic-page__title-area--collapsed"
                    aria-hidden="true">
                    <div class="fd-dynamic-page__breadcrumb-title-container">
                        <nav aria-label="Breadcrumbs">
                            <ul class="fd-breadcrumb">
                                <li class="fd-breadcrumb__item"><a class="fd-link" tabindex="-1" href="#"><span class="fd-link__content">Men</span></a></li>
                                <li class="fd-breadcrumb__item"><a class="fd-link" tabindex="-1" href="#"><span class="fd-link__content">Shoes</span></a></li>
                                <li class="fd-breadcrumb__item"><a aria-current="page" class="fd-link" tabindex="-1" href="#"><span class="fd-link__content">Running Shoes</span></a></li>
                            </ul>
                        </nav>
                        <div role="toolbar" aria-label="Close action" class="fd-dynamic-page__toolbar fd-dynamic-page__toolbar fd-dynamic-page__toolbar--actions fd-toolbar fd-toolbar--cozy fd-toolbar--clear fd-toolbar--transparent">
                            <button tabindex="-1" class="fd-button fd-button--transparent" aria-label="Close">
                                <i class="sap-icon--decline"></i>
                            </button>
                        </div>
                    </div>
                    <div class="fd-dynamic-page__title-container">
                        <h1 class="fd-title fd-dynamic-page__title" title="Balenciaga Triple S Trainers"> Balenciaga Triple S Trainers </h1>
                            <div role="toolbar" aria-label="Product actions" class="fd-dynamic-page__toolbar fd-dynamic-page__toolbar fd-dynamic-page__toolbar--actions fd-toolbar fd-toolbar--cozy fd-toolbar--clear fd-toolbar--transparent">
                                <button tabindex="-1" class="fd-button fd-button--transparent" aria-label="More Header Content">
                                    <i class="sap-icon--overflow"></i>
                                </button>
                                <button tabindex="-1" class="fd-button fd-button--transparent" aria-label="Header actions">
                                    <i class="sap-icon--overflow"></i>
                                </button>
                            </div>
                    </div>
                    <div class="fd-dynamic-page__subtitle"> Collapsed title area and header with summary line </div>
                </div>
                <div class="fd-dynamic-page__collapsible-header-container">
                    <div class="fd-dynamic-page__collapsible-header"
                        role="region" aria-hidden="true" id="fddplhvcm2"  aria-label="Dynamic Page Mobile Collapsed Header" >
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam possimus corrupti architecto perspiciatis,
                        delectus necessitatibus incidunt numquam asperiores tenetur iure.
                        Cum consequuntur impedit repellendus esse, facere autem optio consequatur nobis?
                    </div>
                    <div class="fd-dynamic-page__collapsible-header-visibility-container fd-dynamic-page__collapsible-header-visibility-container--no-shadow"
                        aria-hidden="true">
                        <div class="fd-dynamic-page__collapsible-header-visibility-container--left-gradient"></div>
                        <div role="toolbar" aria-label="Header actions" class="fd-dynamic-page__collapsible-header-visibility-container--button-group">
                            <button tabindex="-1" class="fd-dynamic-page__collapse-button fd-button fd-button--compact"
                                    aria-label="See More"
                                    aria-expanded="false"
                                    aria-haspopup="true"
                                    aria-controls="fddplhvcm2">
                                    <i class="sap-icon--slim-arrow-down"></i>
                            </button>
                        </div>
                        <div class="fd-dynamic-page__collapsible-header-visibility-container--right-gradient"></div>
                    </div>
                </div>
                <div class="fd-dynamic-page__tabs--overflow">
                    <ul class="fd-tabs fd-tabs--l fd-dynamic-page__tabs fd-dynamic-page__tabs--add-shadow" role="tablist">
                        <li role="tab" class="fd-tabs__item">
                            <a class="fd-tabs__link" aria-controls="fuCwV554" href="#fuCwV554">
                                <span class="fd-tabs__tag">
                                    Link
                                </span>
                            </a>
                        </li>
                        <li role="tab" class="fd-tabs__item" aria-selected="true">
                            <a class="fd-tabs__link" aria-controls="AiWfz169" href="#AiWfz169">
                                <span class="fd-tabs__tag">
                                    Selected
                                </span>
                            </a>
                        </li>
                    </ul>
                </div>
            </header>
            <div class="fd-dynamic-page__content">
                <div class="fd-tabs__panel" aria-expanded="false" id="fuCwV554" role="tabpanel">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum illo voluptatem, unde voluptate aliquam
                    eum tempore aliquid dolorem cumque ullam perspiciatis omnis et asperiores dolores, consequatur, suscipit sint animi amet?
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum illo voluptatem, unde voluptate aliquam eum tempore aliquid
                    dolorem cumque ullam perspiciatis omnis et asperiores dolores, consequatur, suscipit sint animi amet?
                </div>
                <div class="fd-tabs__panel" aria-expanded="true" id="AiWfz169" role="tabpanel">
                    <h2 class="fd-title fd-title--h6 fd-title--wrap"><b>This is an example of a summary line, without the expand/collapse feature.</b></h2>
                    <br />
                    Dolor sit Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius assumenda, quidem natus optio repudiandae deleniti
                    in atque quis, sed cum asperiores minus rerum incidunt unde quod fuga amet ea reprehenderit.
                    Dolor sit Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius assumenda, quidem natus optio repudiandae deleniti
                    in atque quis, sed cum asperiores minus rerum incidunt unde quod fuga amet ea reprehenderit.
                </div>
            </div>
            <footer class="fd-bar fd-bar--cozy fd-bar--floating-footer" style="position:relative">
                <div role="toolbar" aria-label="Finalizing actions" class="fd-bar__right">
                    <div class="fd-bar__element">
                        <button aria-label="button" class="fd-button fd-button--emphasized">Save</button>
                    </div>
                    <div class="fd-bar__element">
                        <button aria-label="button" class="fd-button fd-button--transparent">Cancel</button>
                    </div>
                </div>
            </footer>
        </section>
    </div>
`;

SummaryLine.storyName = 'Summary Line (mobile)';
SummaryLine.parameters = {
    docs: {
        description: {
            story: `It is recommended to add a summary line insead of the expand/collapse header feature so users can better focus on the page content. To display a summary line,
        add \`fd-dynamic-page__summarized-title\` in the \`fd-dynamic-page__summarized-title-area\` element.`
        }
    }
};

export const Expandable = () =>
    `<section class="fd-dynamic-page fd-dynamic-page--xl" aria-label="Dynamic Page Expandable Example" xmlns="http://www.w3.org/1999/html">
        <header class="fd-dynamic-page__header">
            <div class="fd-dynamic-page__title-area " tabindex="0">
                <div class="fd-dynamic-page__main-container">
                    <div class="fd-dynamic-page__breadcrumb-title-container">
                        <nav aria-label="Breadcrumbs">
                            <ul class="fd-dynamic-page__breadcrumb fd-breadcrumb">
                                <li class="fd-breadcrumb__item"><a class="fd-link" tabindex="0" href="#"><span class="fd-link__content">Men</span></a></li>
                                <li class="fd-breadcrumb__item"><a class="fd-link" tabindex="0" href="#"><span class="fd-link__content">Shoes</span></a></li>
                                <li class="fd-breadcrumb__item"><a aria-current="page" class="fd-link" tabindex="0" href="#"><span class="fd-link__content">Running Shoes</span></a></li>
                            </ul>
                        </nav>
                        <div class="fd-dynamic-page__title-container">
                            <h1 class="fd-title fd-dynamic-page__title" title="Balenciaga Triple S Trainers"> Balenciaga Triple S Trainers </h1>
                            <div class="fd-dynamic-page__title-content" title="Header with both collapse and pin buttons, expanded by default"> Header with both collapse and pin buttons, expanded by default</div>
                            <div class="fd-dynamic-page__toolbar-container">
                                <div role="toolbar" aria-label="Product actions" class="fd-dynamic-page__toolbar fd-toolbar fd-toolbar--clear fd-toolbar--transparent">
                                    <button class="fd-button fd-button--compact fd-button--positive">Accept</button>
                                    <button class="fd-button fd-button--compact fd-button--reject">Reject</button>
                                    <span class="fd-toolbar__separator"></span>
                                </div>
                                <div role="toolbar" aria-label="Navigation actions" class="fd-dynamic-page__toolbar fd-dynamic-page__toolbar--actions fd-toolbar fd-toolbar--clear fd-toolbar--transparent">
                                        <button class="fd-button fd-button--transparent" aria-label="Resize">
                                            <i class="sap-icon--resize"></i>
                                        </button>
                                        <button class="fd-button fd-button--transparent" aria-label="Exit fullscreen">
                                            <i class="sap-icon--exitfullscreen"></i>
                                        </button>
                                        <button class="fd-button fd-button--transparent" aria-label="Close">
                                            <i class="sap-icon--decline"></i>
                                        </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="fd-dynamic-page__subtitle"> Oversized multimaterial sneakers with quilted effect </div>
            </div>
            <div class="fd-dynamic-page__collapsible-header-container">
                <div class="fd-dynamic-page__collapsible-header" role="region"  aria-hidden="false" id="fddplhvc1" aria-label="Default expanded header" >
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam possimus corrupti architecto perspiciatis,
                    delectus necessitatibus incidunt numquam asperiores tenetur iure.
                    Cum consequuntur impedit repellendus esse, facere autem optio consequatur nobis?
                </div>
                <div class="fd-dynamic-page__collapsible-header-visibility-container">
                    <div class="fd-dynamic-page__collapsible-header-visibility-container--left-gradient"></div>
                    <div role="toolbar" aria-label="Header actions" class="fd-dynamic-page__collapsible-header-visibility-container--button-group">
                        <button class="fd-dynamic-page__collapse-button fd-button fd-button--compact"
                                aria-label="See More"
                                aria-expanded="true"
                                aria-haspopup="true"
                                aria-controls="fddplhvc1">
                                <i class="sap-icon--slim-arrow-up"></i>
                        </button>
                        <button class="fd-dynamic-page__pin-button fd-button fd-button--compact"
                                aria-label="Pin this">
                                <i class="sap-icon--pushpin-off"></i>
                        </button>
                    </div>
                    <div class="fd-dynamic-page__collapsible-header-visibility-container--right-gradient"></div>
                </div>
            </div>
        </header>
        <div class="fd-dynamic-page__content">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum illo voluptatem, unde voluptate aliquam
            eum tempore aliquid dolorem cumque ullam perspiciatis omnis et asperiores dolores, consequatur, suscipit sint animi amet?
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum illo voluptatem, unde voluptate aliquam eum tempore aliquid
            dolorem cumque ullam perspiciatis omnis et asperiores dolores, consequatur, suscipit sint animi amet?
        </div>
    </section>
`;

Expandable.storyName = 'Expanded Header';
Expandable.parameters = {
    docs: {
        description: {
            story: `As demonstrated earlier, the dynamic page header can be either displayed or hidden with the expand/collapse buttons. Users can select the pin button to keep the header displayed (enabling the sticky feature).
        To collapse the dynamic page, add the \`--collapsed\` modifier class to the title area and title elements.`
        }
    }
};

export const CollapsedHeader = () =>
    `<section class="fd-dynamic-page fd-dynamic-page--xl" aria-label="Dynamic Page Collapsed Example">
        <header class="fd-dynamic-page__header">
            <div class="fd-dynamic-page__title-area  fd-dynamic-page__title-area--collapsed" tabindex="0">
                <div class="fd-dynamic-page__main-container">
                    <div class="fd-dynamic-page__breadcrumb-title-container">
                        <nav aria-label="Breadcrumbs">
                            <ul class="fd-dynamic-page__breadcrumb fd-breadcrumb">
                                <li class="fd-breadcrumb__item"><a class="fd-link" tabindex="0" href="#"><span class="fd-link__content">Men</span></a></li>
                                <li class="fd-breadcrumb__item"><a class="fd-link" tabindex="0" href="#"><span class="fd-link__content">Shoes</span></a></li>
                                <li class="fd-breadcrumb__item"><a aria-current="page" class="fd-link" tabindex="0" href="#"><span class="fd-link__content">Running Shoes</span></a></li>
                            </ul>
                        </nav>
                        <div class="fd-dynamic-page__title-container">
                            <h1 class="fd-title fd-dynamic-page__title" title="Balenciaga Triple S Trainers Model 123456AB On Sale"> Balenciaga Triple S Trainers Model 123456AB On Sale </h1>
                            <div class="fd-dynamic-page__title-content" title="Collapsed Header with both expand and pin buttons">Collapsed Header with both expand and pin buttons </div>
                            <div class="fd-dynamic-page__toolbar-container">
                                <div role="toolbar" aria-label="Product actions" class="fd-dynamic-page__toolbar fd-toolbar fd-toolbar--clear fd-toolbar--transparent">
                                    <button class="fd-button fd-button--compact fd-button--positive">Accept</button>
                                    <button class="fd-button fd-button--compact fd-button--reject">Reject</button>
                                    <span class="fd-toolbar__separator"></span>
                                </div>
                                <div role="toolbar" aria-label="Navigation actions" class="fd-dynamic-page__toolbar fd-dynamic-page__toolbar--actions fd-toolbar fd-toolbar--clear fd-toolbar--transparent">
                                    <button class="fd-button fd-button--transparent" aria-label="Resize">
                                        <i class="sap-icon--resize"></i>
                                    </button>
                                    <button class="fd-button fd-button--transparent" aria-label="Exit fullscreen">
                                        <i class="sap-icon--exitfullscreen"></i>
                                    </button>
                                    <button class="fd-button fd-button--transparent" aria-label="Close">
                                        <i class="sap-icon--decline"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="fd-dynamic-page__subtitle"> Oversized multimaterial sneakers with quilted effect </div>
            </div>
            <div class="fd-dynamic-page__collapsible-header-container">
                <div class="fd-dynamic-page__collapsible-header" role="region"  aria-hidden="true" id="fddplhvc2"  aria-label="Collapsed header">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam possimus corrupti architecto perspiciatis,
                    delectus necessitatibus incidunt numquam asperiores tenetur iure.
                    Cum consequuntur impedit repellendus esse, facere autem optio consequatur nobis?
                </div>
                <div class="fd-dynamic-page__collapsible-header-visibility-container">
                    <div class="fd-dynamic-page__collapsible-header-visibility-container--left-gradient"></div>
                    <div role="toolbar" aria-label="Header actions" class="fd-dynamic-page__collapsible-header-visibility-container--button-group">
                        <button class="fd-dynamic-page__collapse-button fd-button fd-button--compact"
                                aria-label="See More"
                                aria-expanded="false"
                                aria-haspopup="true"
                                aria-controls="fddplhvc2">
                                <i class="sap-icon--slim-arrow-down"></i>
                        </button>
                        <button class="fd-dynamic-page__pin-button fd-button fd-button--compact"
                                aria-label="Pin this">
                                <i class="sap-icon--pushpin-off"></i>
                        </button>
                    </div>
                    <div class="fd-dynamic-page__collapsible-header-visibility-container--right-gradient"></div>
                </div>
            </div>
        </header>
        <div class="fd-dynamic-page__content">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum illo voluptatem, unde voluptate aliquam
            eum tempore aliquid dolorem cumque ullam perspiciatis omnis et asperiores dolores, consequatur, suscipit sint animi amet?
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum illo voluptatem, unde voluptate aliquam eum tempore aliquid
            dolorem cumque ullam perspiciatis omnis et asperiores dolores, consequatur, suscipit sint animi amet?
        </div>
    </section>
`;

CollapsedHeader.parameters = {
    docs: {
        description: {
            story: 'In the example below, the dynamic page is displayed with a collapsed header for desktop screens.'
        }
    }
};

export const OnlyCollapse = () =>
    `<section class="fd-dynamic-page fd-dynamic-page--xl" aria-label="Dynamic Page Pinnable Example">
        <header class="fd-dynamic-page__header">
            <div class="fd-dynamic-page__title-area " tabindex="0">
                <div class="fd-dynamic-page__main-container">
                    <div class="fd-dynamic-page__breadcrumb-title-container">
                        <nav aria-label="Breadcrumbs">
                            <ul class="fd-dynamic-page__breadcrumb fd-breadcrumb">
                                <li class="fd-breadcrumb__item"><a class="fd-link" tabindex="0" href="#"><span class="fd-link__content">Men</span></a></li>
                                <li class="fd-breadcrumb__item"><a class="fd-link" tabindex="0" href="#"><span class="fd-link__content">Shoes</span></a></li>
                                <li class="fd-breadcrumb__item"><a aria-current="page" class="fd-link" tabindex="0" href="#"><span class="fd-link__content">Running Shoes</span></a></li>
                            </ul>
                        </nav>
                        <div class="fd-dynamic-page__title-container">
                            <h1 class="fd-title fd-dynamic-page__title" title="Balenciaga Triple S Trainers"> Balenciaga Triple S Trainers </h1>
                            <div class="fd-dynamic-page__title-content" title="The header can only be expanded/collapsed, not pinned"> The header can only be expanded/collapsed, not pinned. </div>
                            <div class="fd-dynamic-page__toolbar-container">
                                <div role="toolbar" aria-label="Product actions" class="fd-dynamic-page__toolbar fd-toolbar fd-toolbar--clear fd-toolbar--transparent">
                                    <button class="fd-button fd-button--compact fd-button--positive">Accept</button>
                                    <button class="fd-button fd-button--compact fd-button--reject">Reject</button>
                                    <span class="fd-toolbar__separator"></span>
                                </div>
                                <div role="toolbar" aria-label="Navigation actions" class="fd-dynamic-page__toolbar fd-dynamic-page__toolbar--actions fd-toolbar fd-toolbar--clear fd-toolbar--transparent">
                                    <button class="fd-button fd-button--transparent" aria-label="Resize">
                                        <i class="sap-icon--resize"></i>
                                    </button>
                                    <button class="fd-button fd-button--transparent" aria-label="Exit fullscreen">
                                        <i class="sap-icon--exitfullscreen"></i>
                                    </button>
                                    <button class="fd-button fd-button--transparent" aria-label="Close">
                                        <i class="sap-icon--decline"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="fd-dynamic-page__subtitle"> Oversized multimaterial sneakers with quilted effect </div>
            </div>
            <div class="fd-dynamic-page__collapsible-header-container">
                <div class="fd-dynamic-page__collapsible-header" role="region" id="fddplhvc3" aria-hidden="false"  aria-label="Pinned header">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam possimus corrupti architecto perspiciatis,
                    delectus necessitatibus incidunt numquam asperiores tenetur iure.
                    Cum consequuntur impedit repellendus esse, facere autem optio consequatur nobis?
                </div>
                <div class="fd-dynamic-page__collapsible-header-visibility-container">
                    <div class="fd-dynamic-page__collapsible-header-visibility-container--left-gradient"></div>
                    <div role="toolbar" aria-label="Header actions" class="fd-dynamic-page__collapsible-header-visibility-container--button-group">
                        <button class="fd-dynamic-page__collapse-button fd-button fd-button--compact"
                                aria-label="See More"
                                aria-expanded="true"
                                aria-haspopup="true"
                                aria-controls="fddplhvc3">
                                <i class="sap-icon--slim-arrow-up"></i>
                        </button>
                    </div>
                    <div class="fd-dynamic-page__collapsible-header-visibility-container--right-gradient"></div>
                </div>
            </div>
        </header>
        <div class="fd-dynamic-page__content">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum illo voluptatem, unde voluptate aliquam
            eum tempore aliquid dolorem cumque ullam perspiciatis omnis et asperiores dolores, consequatur, suscipit sint animi amet?
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum illo voluptatem, unde voluptate aliquam eum tempore aliquid
            dolorem cumque ullam perspiciatis omnis et asperiores dolores, consequatur, suscipit sint animi amet?
        </div>
    </section>
`;

OnlyCollapse.storyName = 'Without pin';
OnlyCollapse.parameters = {
    docs: {
        description: {
            story: 'The dynamic page can be displayed without a pin button, giving users the option to only expand or collapse the header area.'
        }
    }
};



export const WithFacets = () =>
    `<section class="fd-dynamic-page fd-dynamic-page--xl" aria-label="Dynamic Page Desktop Example">
        <header class="fd-dynamic-page__header">
            <div class="fd-dynamic-page__title-area" tabindex="0" aria-hidden="false" id="mainContainer">
                <div class="fd-dynamic-page__main-container">
                    <div class="fd-dynamic-page__breadcrumb-title-container">
                        <nav aria-label="Breadcrumbs">
                            <ul class="fd-dynamic-page__breadcrumb fd-breadcrumb">
                                <li class="fd-breadcrumb__item"><a class="fd-link" tabindex="0" href="#"><span class="fd-link__content">Men</span></a></li>
                                <li class="fd-breadcrumb__item"><a class="fd-link" tabindex="0" href="#"><span class="fd-link__content">Shoes</span></a></li>
                                <li class="fd-breadcrumb__item"><a aria-current="page" class="fd-link" tabindex="0" href="#"><span class="fd-link__content">Running Shoes</span></a></li>
                            </ul>
                        </nav>
                        <div class="fd-dynamic-page__title-container">
                            <h1 class="fd-title fd-dynamic-page__title" title="Balenciaga Triple S Trainers"> Balenciaga Triple S Trainers </h1>
                            <div class="fd-dynamic-page__toolbar-container">
                                <div role="toolbar" aria-label="Product actions" class="fd-dynamic-page__toolbar fd-toolbar fd-toolbar--clear fd-toolbar--transparent">
                                    <button class="fd-button fd-button--compact fd-button--positive">Accept</button>
                                    <button class="fd-button fd-button--compact fd-button--reject">Reject</button>
                                    <span class="fd-toolbar__separator"></span>
                                    </div>
                                <div role="toolbar" aria-label="Navigation actions" class="fd-dynamic-page__toolbar fd-dynamic-page__toolbar--actions fd-toolbar fd-toolbar--clear fd-toolbar--transparent">
                                    <button class="fd-button fd-button--transparent" aria-label="Resize">
                                        <i class="sap-icon--resize"></i>
                                    </button>
                                    <button class="fd-button fd-button--transparent" aria-label="Exit fullscreen">
                                        <i class="sap-icon--exitfullscreen"></i>
                                    </button>
                                    <button class="fd-button fd-button--transparent" aria-label="Close">
                                        <i class="sap-icon--decline"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="fd-dynamic-page__subtitle"> Oversized multimaterial sneakers with quilted effect </div>
            </div>
            <div class="fd-dynamic-page__title-area fd-dynamic-page__title-area--collapsed" tabindex="0" aria-hidden="true" id="mainImageContainer">
                <div class="fd-dynamic-page__main-container">
                    <div class="fd-dynamic-page__breadcrumb-title-container">
                        <nav aria-label="Breadcrumbs">
                            <ul class="fd-dynamic-page__breadcrumb fd-breadcrumb">
                                <li class="fd-breadcrumb__item"><a class="fd-link" tabindex="0" href="#"><span class="fd-link__content">Men</span></a></li>
                                <li class="fd-breadcrumb__item"><a class="fd-link" tabindex="0" href="#"><span class="fd-link__content">Shoes</span></a></li>
                                <li class="fd-breadcrumb__item"><a aria-current="page" class="fd-link" tabindex="0" href="#"><span class="fd-link__content">Running Shoes</span></a></li>
                            </ul>
                        </nav>
                        <div class="fd-dynamic-page__title-container">
                            <div class="fd-facet fd-facet--image fd-facet--image-header-title fd-margin-end--sm">
                                <span class="fd-avatar fd-avatar--s" aria-label="Avatar">
                                    <i class="fd-avatar__icon sap-icon--money-bills" role="presentation"></i>
                                </span>
                            </div>
                            <div class="fd-dynamic-page__title-subtitle-container">
                                <h1 class="fd-title fd-dynamic-page__title" title="Balenciaga Triple S Trainers"> Balenciaga Triple S Trainers </h1>
                                <div class="fd-dynamic-page__subtitle"> Oversized multimaterial sneakers with quilted effect </div>
                            </div>
                            <div class="fd-dynamic-page__toolbar-container">
                                <div role="toolbar" aria-label="Product actions" class="fd-dynamic-page__toolbar fd-toolbar fd-toolbar--clear fd-toolbar--transparent">
                                    <button class="fd-button fd-button--compact fd-button--positive">Accept</button>
                                    <button class="fd-button fd-button--compact fd-button--reject">Reject</button>
                                    <span class="fd-toolbar__separator"></span>
                                    </div>
                                <div role="toolbar" aria-label="Navigation actions" class="fd-dynamic-page__toolbar fd-dynamic-page__toolbar--actions fd-toolbar fd-toolbar--clear fd-toolbar--transparent">
                                    <button class="fd-button fd-button--transparent" aria-label="Resize">
                                        <i class="sap-icon--resize"></i>
                                    </button>
                                    <button class="fd-button fd-button--transparent" aria-label="Exit fullscreen">
                                        <i class="sap-icon--exitfullscreen"></i>
                                    </button>
                                    <button class="fd-button fd-button--transparent" aria-label="Close">
                                        <i class="sap-icon--decline"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="fd-dynamic-page__collapsible-header-container">
                <div class="fd-dynamic-page__collapsible-header" role="region" id="fddplhvx6" aria-hidden="false" aria-label="Dynamic Page Desktop Header" >
                    <div class="fd-facet-group">
                        <div class="fd-facet fd-facet--image fd-margin-end--md fd-margin-bottom--sm">
                            <span class="fd-avatar fd-avatar--l" aria-label="Avatar">
                                <i class="fd-avatar__icon sap-icon--money-bills" role="presentation"></i>
                            </span>
                        </div>
                        <div class="fd-facet fd-facet--form fd-margin-end--md fd-margin-bottom--sm" role="group" aria-labelledby="formFacetTitle4">
                            <h1 class="fd-title fd-title--h5 fd-margin-bottom--sm" id="formFacetTitle4">Technical Data</h1>
                            <div class="fd-facet__container fd-margin-bottom--tiny">
                                <label class="fd-form-label" for="form-value-10">Base unit:</label>
                                <div class="fd-text" id="form-value-10">Each</div>
                            </div>
                            <div class="fd-facet__container fd-margin-bottom--tiny">
                                <label class="fd-form-label" for="form-value-11">Length:</label>
                                <div class="fd-text" id="form-value-11">23.24 Centimeter</div>
                            </div>
                            <div class="fd-facet__container fd-margin-bottom--tiny">
                                <label class="fd-form-label" for="form-value-12">Width:</label>
                                <div class="fd-text" id="form-value-12">86.1 Centimeter</div>
                            </div>
                            <div class="fd-facet__container">
                                <label class="fd-form-label" for="form-value-13">Height:</label>
                                <div class="fd-text" id="form-value-13">20.8 Centimeter</div>
                            </div>
                        </div>
                        <div class="fd-facet fd-facet--key-value fd-margin-end--md fd-margin-bottom--sm" role="group" aria-labelledby="kvFacetTitle9">
                            <h1 class="fd-title fd-title--h5 fd-margin-bottom--sm" id="kvFacetTitle9">Status</h1>
                            <span class="fd-object-status fd-object-status--positive fd-object-status--large fd-facet__object-status">
                                <span class="fd-object-status__text fd-facet__object-status-text">Delivery</span>
                            </span>
                        </div>
                        <div class="fd-facet fd-facet--key-value fd-margin-end--md fd-margin-bottom--sm" role="group" aria-labelledby="kvFacetTitle10">
                            <h1 class="fd-title fd-title--h5 fd-margin-bottom--sm" id="kvFacetTitle10">Delivery Time</h1>
                            <span class="fd-object-status fd-object-status--large fd-object-status--critical fd-facet__object-status">
                                <i class="fd-object-status__icon sap-icon--shipping-status fd-padding--none fd-margin-end--tiny" role="presentation"></i>
                                <span class="fd-object-status__text fd-facet__object-status-text">12 days</span>
                            </span>
                        </div>
                        <div class="fd-facet fd-facet--key-value fd-margin-end--md fd-margin-bottom--sm" role="group" aria-labelledby="kvFacetTitle11">
                            <h1 class="fd-title fd-title--h5 fd-margin-bottom--sm" id="kvFacetTitle11">Assembly Option </h1>
                            <span class="fd-object-status fd-object-status--negative fd-object-status--large fd-facet__object-status">
                                <span class="fd-object-status__text fd-facet__object-status-text">To be selected</span>
                            </span>
                        </div>
                        <div class="fd-facet fd-facet--key-value fd-margin-end--md fd-margin-bottom--sm" role="group" aria-labelledby="kvFacetTitle12">
                            <h1 class="fd-title fd-title--h5 fd-margin-bottom--sm" id="kvFacetTitle12">Pricing </h1>
                            <span class="fd-object-number fd-object-number--large fd-object-number--informative">
                                <span class="fd-object-number__text">579</span><span class="fd-object-number__unit">EUR</span>
                            </span>
                        </div>

                        <div class="fd-facet fd-facet--rating-indicator fd-margin-end--md  fd-margin-bottom--sm" role="group" aria-labelledby="ratingFacetTitle3">
                            <h1 class="fd-title fd-title--h5 fd-margin-bottom--sm" id="ratingFacetTitle3">Average User Rating</h1>
                            <h2 class="fd-form-label">6 reviews</h2>
                            <div class="fd-rating-indicator fd-facet__container">
                                <div class="fd-rating-indicator__container fd-facet__rating-container" aria-label="Star Rating (out of 5)">
                                <input aria-label="1 star" type="radio" class="fd-rating-indicator__input" id="2-rating-max-value-5-1" name="2-rating-max-value-5" value="1">
                                <label class="fd-rating-indicator__label" for="2-rating-max-value-5-1"></label>

                                <input aria-label="2 star" type="radio" class="fd-rating-indicator__input" id="2-rating-max-value-5-2" name="2-rating-max-value-5" value="2" checked>
                                <label class="fd-rating-indicator__label" for="2-rating-max-value-5-2"></label>

                                <input aria-label="3 star" type="radio" class="fd-rating-indicator__input" id="2-rating-max-value-5-3" name="2-rating-max-value-5" value="3">
                                <label class="fd-rating-indicator__label" for="2-rating-max-value-5-3"></label>

                                <input aria-label="4 star" type="radio" class="fd-rating-indicator__input" id="2-rating-max-value-5-4" name="2-rating-max-value-5" value="4">
                                <label class="fd-rating-indicator__label" for="2-rating-max-value-5-4"></label>

                                <input aria-label="5 star" type="radio" class="fd-rating-indicator__input" id="2-rating-max-value-5-5" name="2-rating-max-value-5" value="5">
                                <label class="fd-rating-indicator__label" for="2-rating-max-value-5-5"></label>
                                </div>
                                <span class="fd-rating-indicator__dynamic-text fd-facet__rating-dynamic-text fd-margin-top--tiny">(2 of 5)</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="fd-dynamic-page__collapsible-header-visibility-container fd-dynamic-page__collapsible-header-visibility-container--no-shadow">
                    <div class="fd-dynamic-page__collapsible-header-visibility-container--left-gradient"></div>
                    <div role="toolbar" aria-label="Header actions" class="fd-dynamic-page__collapsible-header-visibility-container--button-group">
                        <button class="fd-dynamic-page__collapse-button fd-button fd-button--compact"
                                aria-label="Collapse"
                                aria-expanded="true"
                                aria-hidden="false"
                                id="expandBtn"
                                aria-haspopup="true"
                                onclick="
                                        toggleElAttrs('fddplhvx6', ['aria-hidden']);
                                        toggleElAttrs('expandBtn', ['aria-hidden']);
                                        toggleElAttrs('collapseBtn', ['aria-hidden']);
                                        toggleElAttrs('mainContainer', ['aria-hidden']);
                                        toggleElAttrs('mainImageContainer', ['aria-hidden']);
                                    "
                                >
                                <i class="sap-icon--slim-arrow-up"></i>
                        </button>
                        <button class="fd-dynamic-page__collapse-button fd-button fd-button--compact"
                                aria-label="Collapse"
                                aria-expanded="false"
                                aria-hidden="true"
                                id="collapseBtn"
                                aria-haspopup="true"
                                onclick="
                                        toggleElAttrs('fddplhvx6', ['aria-hidden']);
                                        toggleElAttrs('collapseBtn', ['aria-hidden']);
                                        toggleElAttrs('expandBtn', ['aria-hidden']);
                                        toggleElAttrs('mainContainer', ['aria-hidden']);
                                        toggleElAttrs('mainImageContainer', ['aria-hidden']);
                                    "
                                >
                                <i class="sap-icon--slim-arrow-down"></i>
                        </button>
                        <button class="fd-dynamic-page__pin-button fd-button fd-button--compact"
                                aria-label="Pin this">
                                <i class="sap-icon--pushpin-off"></i>
                        </button>
                    </div>
                    <div class="fd-dynamic-page__collapsible-header-visibility-container--right-gradient"></div>
                </div>
            </div>
            <div class="fd-dynamic-page__tabs--overflow">
                <ul class="fd-tabs fd-tabs--l fd-dynamic-page__tabs fd-dynamic-page__tabs--add-shadow" role="tablist">
                    <li role="tab" class="fd-tabs__item">
                        <a class="fd-tabs__link" aria-controls="fuCwV557" href="#fuCwV557">
                            <span class="fd-tabs__tag">
                                Link
                            </span>
                        </a>
                    </li>
                    <li role="tab" class="fd-tabs__item" aria-selected="true">
                        <a class="fd-tabs__link" aria-controls="AiWfz155" href="#AiWfz155">
                            <span class="fd-tabs__tag">
                                Selected
                            </span>
                        </a>
                    </li>
                </ul>
            </div>
        </header>
        <div class="fd-dynamic-page__content">
            <div class="fd-tabs__panel" aria-expanded="false" id="fuCwV557" role="tabpanel">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum illo voluptatem, unde voluptate aliquam
                eum tempore aliquid dolorem cumque ullam perspiciatis omnis et asperiores dolores, consequatur, suscipit sint animi amet?
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum illo voluptatem, unde voluptate aliquam eum tempore aliquid
                dolorem cumque ullam perspiciatis omnis et asperiores dolores, consequatur, suscipit sint animi amet?
            </div>
            <div class="fd-tabs__panel" aria-expanded="true" id="AiWfz155" role="tabpanel" >
                Dolor sit Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius assumenda, quidem natus optio repudiandae deleniti
                in atque quis, sed cum asperiores minus rerum incidunt unde quod fuga amet ea reprehenderit.
                Dolor sit Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius assumenda, quidem natus optio repudiandae deleniti
                in atque quis, sed cum asperiores minus rerum incidunt unde quod fuga amet ea reprehenderit.
                Dolor sit Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius assumenda, quidem natus optio repudiandae deleniti
                in atque quis, sed cum asperiores minus rerum incidunt unde quod fuga amet ea reprehenderit.
                Dolor sit Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius assumenda, quidem natus optio repudiandae deleniti
                in atque quis, sed cum asperiores minus rerum incidunt unde quod fuga amet ea reprehenderit.
                Dolor sit Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius assumenda, quidem natus optio repudiandae deleniti
                in atque quis, sed cum asperiores minus rerum incidunt unde quod fuga amet ea reprehenderit.
                Dolor sit Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius assumenda, quidem natus optio repudiandae deleniti
                in atque quis, sed cum asperiores minus rerum incidunt unde quod fuga amet ea reprehenderit.
                Dolor sit Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius assumenda, quidem natus optio repudiandae deleniti
                in atque quis, sed cum asperiores minus rerum incidunt unde quod fuga amet ea reprehenderit.
                Dolor sit Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius assumenda, quidem natus optio repudiandae deleniti
                in atque quis, sed cum asperiores minus rerum incidunt unde quod fuga amet ea reprehenderit.
                Dolor sit Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius assumenda, quidem natus optio repudiandae deleniti
                in atque quis, sed cum asperiores minus rerum incidunt unde quod fuga amet ea reprehenderit.
                Dolor sit Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius assumenda, quidem natus optio repudiandae deleniti
                in atque quis, sed cum asperiores minus rerum incidunt unde quod fuga amet ea reprehenderit.
            </div>
        </div>
        <footer class="fd-bar fd-bar--floating-footer" style="position:relative">
            <div role="toolbar" aria-label="Finalizing actions" class="fd-bar__right">
                <div class="fd-bar__element">
                    <button aria-label="button" class="fd-button fd-button--emphasized fd-button--compact">Save</button>
                </div>
                <div class="fd-bar__element">
                    <button aria-label="button" class="fd-button fd-button--transparent fd-button--compact">Cancel</button>
                </div>
            </div>
        </footer>
    </section>
`;

WithFacets.storyName = 'With header facets';
WithFacets.parameters = {
    docs: {
        description: {
            story: `To have the image from the image facet appear next to the title, add the class
        \`fd-facet\` and apply the modifiers \`fd-facet--image\` and \`fd-facet--image-header-title\` to the
        \`fd-dynamic-page__title-container\` class.
        Note that the dynamic page title and subtitle should be placed in the \`fd-dynamic-page__title-subtitle-container\` class
        for proper alignment with the image.
`
        }
    }
};

export const WithFacetsMobile = () =>
    `<div class="mobile-container">
        <section class="fd-dynamic-page fd-dynamic-page--sm" aria-label="Dynamic Page Mobile Example">
            <header class="fd-dynamic-page__header">
                <div class="fd-dynamic-page__title-area" tabindex="0" aria-hidden="false" id="mainContainerMobile">
                    <div class="fd-dynamic-page__main-container">
                        <div class="fd-dynamic-page__breadcrumb-title-container">
                            <div class="fd-dynamic-page__breadcrumb-container">
                                <nav aria-label="Breadcrumbs">
                                    <ul class="fd-breadcrumb">
                                        <li class="fd-breadcrumb__item"><a class="fd-link" href="#"><span class="fd-link__content">Men</span></a></li>
                                        <li class="fd-breadcrumb__item"><a class="fd-link" href="#"><span class="fd-link__content">Shoes</span></a></li>
                                        <li class="fd-breadcrumb__item"><a aria-current="page" class="fd-link" href="#"><span class="fd-link__content">Running Shoes</span></a></li>
                                    </ul>
                                </nav>
                                <div role="toolbar" aria-label="Close action" class="fd-dynamic-page__toolbar fd-dynamic-page__toolbar--actions fd-toolbar fd-toolbar--clear fd-toolbar--transparent">
                                    <button class="fd-button fd-button--transparent" aria-label="Close">
                                        <i class="sap-icon--decline"></i>
                                    </button>
                                </div>
                            </div>
                            <div class="fd-dynamic-page__title-container">
                                <h1 class="fd-title fd-dynamic-page__title" title="Balenciaga Triple S Trainers"> Balenciaga Triple S Trainers </h1>
                                <div role="toolbar" aria-label="Product actions" class="fd-dynamic-page__toolbar fd-toolbar fd-toolbar--cozy fd-toolbar--clear fd-toolbar--transparent">
                                    <div class="fd-popover">
                                        <div class="fd-popover__control">
                                            <button
                                                id="maisodusakdnsmb"
                                                onclick="
                                                    toggleElAttrs('wgxzK85901', ['aria-hidden']);
                                                    toggleElAttrs('maisodusakdnsmb', ['aria-expanded']);
                                                "
                                                class="fd-button fd-button--transparent"
                                                aria-controls="wgxzK85901"
                                                aria-haspopup="true"
                                                aria-expanded="true"
                                                aria-label="Header actions">
                                                <i class="sap-icon--overflow"></i>
                                            </button>
                                        </div>
                                        <div class="fd-popover__body fd-popover__body--right fd-popover__body--no-arrow"
                                            aria-hidden="false"
                                            id="wgxzK85901">
                                            <div class="fd-toolbar__overflow">
                                                <button class="fd-button fd-button--transparent fd-toolbar__overflow-button">Accept</button>
                                                <button class="fd-button fd-button--transparent fd-toolbar__overflow-button">Reject</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="fd-dynamic-page__subtitle"> Expanded header in mobile </div>
                </div>
                <div class="fd-dynamic-page__title-area fd-dynamic-page__title-area--collapsed" tabindex="0" aria-hidden="true" id="mainImageContainerMobile">
                    <div class="fd-dynamic-page__main-container">
                        <div class="fd-dynamic-page__breadcrumb-title-container">
                            <div class="fd-dynamic-page__breadcrumb-container">
                                <nav aria-label="Breadcrumbs">
                                    <ul class="fd-breadcrumb">
                                        <li class="fd-breadcrumb__item"><a class="fd-link" tabindex="0" href="#"><span class="fd-link__content">Men</span></a></li>
                                        <li class="fd-breadcrumb__item"><a class="fd-link" tabindex="0" href="#"><span class="fd-link__content">Shoes</span></a></li>
                                        <li class="fd-breadcrumb__item"><a aria-current="page" class="fd-link" tabindex="0" href="#"><span class="fd-link__content">Running Shoes</span></a></li>
                                    </ul>
                                </nav>
                                <div role="toolbar" aria-label="Close action" class="fd-dynamic-page__toolbar fd-dynamic-page__toolbar--actions fd-toolbar fd-toolbar--clear fd-toolbar--transparent">
                                    <button class="fd-button fd-button--transparent" aria-label="Close">
                                        <i class="sap-icon--decline"></i>
                                    </button>
                                </div>
                            </div>
                            <div class="fd-dynamic-page__title-container">
                                <div class="fd-facet fd-facet--image fd-facet--image-header-title fd-margin-end--sm">
                                    <span class="fd-avatar fd-avatar--s" aria-label="Avatar">
                                        <i class="fd-avatar__icon sap-icon--money-bills" role="presentation"></i>
                                    </span>
                                </div>
                                <div class="fd-dynamic-page__title-subtitle-container">
                                    <h1 class="fd-title fd-dynamic-page__title" title="Balenciaga Triple S Trainers"> Balenciaga Triple S Trainers </h1>
                                    <div class="fd-dynamic-page__subtitle"> Collapsed header in mobile </div>
                                </div>
                                <div role="toolbar" aria-label="Product actions" class="fd-dynamic-page__toolbar fd-toolbar fd-toolbar--cozy fd-toolbar--clear fd-toolbar--transparent">
                                    <div class="fd-popover">
                                        <div class="fd-popover__control">
                                            <button
                                                id="maisodusakdnsmag"
                                                onclick="
                                                    toggleElAttrs('wgxzK85911', ['aria-hidden']);
                                                    toggleElAttrs('maisodusakdnsmag', ['aria-expanded']);
                                                "
                                                class="fd-button fd-button--transparent"
                                                aria-controls="wgxzK85911"
                                                aria-haspopup="true"
                                                aria-expanded="true"
                                                aria-label="Header actions">
                                                <i class="sap-icon--overflow"></i>
                                            </button>
                                        </div>
                                        <div class="fd-popover__body fd-popover__body--right fd-popover__body--no-arrow"
                                            aria-hidden="false"
                                            id="wgxzK85911">
                                            <div class="fd-toolbar__overflow">
                                                <button class="fd-button fd-button--transparent fd-toolbar__overflow-button">Accept</button>
                                                <button class="fd-button fd-button--transparent fd-toolbar__overflow-button">Reject</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="fd-dynamic-page__collapsible-header-container">
                    <div class="fd-dynamic-page__collapsible-header" role="region" id="fddplhvc7" aria-hidden="false" aria-label="Dynamic Page Mobile Header">
                        <div class="fd-facet-group">
                            <div class="fd-facet fd-facet--image fd-margin-end--sm fd-margin-bottom--tiny">
                                <span class="fd-avatar fd-avatar--l" aria-label="Avatar">
                                    <i class="fd-avatar__icon sap-icon--camera" role="presentation"></i>
                                </span>
                            </div>

                            <div class="fd-facet fd-facet--key-value fd-margin-end--md  fd-margin-bottom--sm" role="group" aria-labelledby="kvFacetTitle13">
                                <h1 class="fd-title fd-title--h5 fd-margin-bottom--sm" id="kvFacetTitle13">Availablity</h1>
                                <span class="fd-object-status fd-object-status--positive fd-object-status--large fd-facet__object-status">
                                    <span class="fd-object-status__text fd-facet__object-status-text">In Stock</span>
                                </span>
                            </div>
                            <div class="fd-facet fd-facet--key-value fd-margin-end--md  fd-margin-bottom--sm" role="group" aria-labelledby="kvFacetTitle14">
                                <h1 class="fd-title fd-title--h5 fd-margin-bottom--sm" id="kvFacetTitle14">Price </h1>
                                <span class="fd-object-number fd-object-number--large fd-object-number--informative">
                                    <span class="fd-object-number__text">750</span><span class="fd-object-number__unit">EUR</span>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="fd-dynamic-page__collapsible-header-visibility-container fd-dynamic-page__collapsible-header-visibility-container--no-shadow">
                        <div class="fd-dynamic-page__collapsible-header-visibility-container--left-gradient"></div>
                        <div role="toolbar" aria-label="Header actions" class="fd-dynamic-page__collapsible-header-visibility-container--button-group">
                            <button class="fd-dynamic-page__collapse-button fd-button fd-button--compact"
                                aria-label="Collapse header"
                                aria-expanded="true"
                                aria-hidden="false"
                                id="expandBtnMobile"
                                aria-haspopup="true"
                                onclick="
                                        toggleElAttrs('fddplhvc7', ['aria-hidden']);
                                        toggleElAttrs('expandBtnMobile', ['aria-expanded']);
                                        toggleElAttrs('expandBtnMobile', ['aria-hidden']);
                                        toggleElAttrs('collapseBtnMobile', ['aria-expanded']);
                                        toggleElAttrs('collapseBtnMobile', ['aria-hidden']);
                                        toggleElAttrs('mainContainerMobile', ['aria-hidden']);
                                        toggleElAttrs('mainImageContainerMobile', ['aria-hidden']);
                                    "
                                >
                                <i class="sap-icon--slim-arrow-up"></i>
                            </button>
                            <button class="fd-dynamic-page__collapse-button fd-button fd-button--compact"
                                aria-label="Expand header"
                                aria-expanded="false"
                                aria-hidden="true"
                                id="collapseBtnMobile"
                                aria-haspopup="true"
                                onclick="
                                        toggleElAttrs('fddplhvc7', ['aria-hidden']);
                                        toggleElAttrs('collapseBtnMobile', ['aria-expanded']);
                                        toggleElAttrs('collapseBtnMobile', ['aria-hidden']);
                                        toggleElAttrs('expandBtnMobile', ['aria-expanded']);
                                        toggleElAttrs('expandBtnMobile', ['aria-hidden']);
                                        toggleElAttrs('mainContainerMobile', ['aria-hidden']);
                                        toggleElAttrs('mainImageContainerMobile', ['aria-hidden']);
                                    "
                                >
                                <i class="sap-icon--slim-arrow-down"></i>
                            </button>
                        </div>
                        <div class="fd-dynamic-page__collapsible-header-visibility-container--right-gradient"></div>
                    </div>
                </div>
                <div class="fd-dynamic-page__tabs--overflow">
                    <ul class="fd-tabs fd-dynamic-page__tabs fd-dynamic-page__tabs--add-shadow" role="tablist">
                        <li class="fd-tabs__item" aria-controls="fuCwV559" role="tab">
                            <a class="fd-tabs__link" href="#fuCwV559">
                                <span class="fd-tabs__tag">
                                    Link
                                </span>
                            </a>
                        </li>
                        <li class="fd-tabs__item" aria-selected="true" role="tab">
                            <a class="fd-tabs__link" aria-controls="AiWfz161" href="#AiWfz161">
                                <span class="fd-tabs__tag">
                                    Selected
                                </span>
                            </a>
                        </li>
                    </ul>
                </div>
            </header>
            <div class="fd-dynamic-page__content">
                <div class="fd-tabs__panel" aria-expanded="false" id="fuCwV559" role="tabpanel">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum illo voluptatem, unde voluptate aliquam
                    eum tempore aliquid dolorem cumque ullam perspiciatis omnis et asperiores dolores, consequatur, suscipit sint animi amet?
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum illo voluptatem, unde voluptate aliquam eum tempore aliquid
                    dolorem cumque ullam perspiciatis omnis et asperiores dolores, consequatur, suscipit sint animi amet?
                </div>
                <div class="fd-tabs__panel" aria-expanded="true" id="AiWfz161" role="tabpanel">
                    Dolor sit Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius assumenda, quidem natus optio repudiandae deleniti
                    in atque quis, sed cum asperiores minus rerum incidunt unde quod fuga amet ea reprehenderit.
                    Dolor sit Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius assumenda, quidem natus optio repudiandae deleniti
                    in atque quis, sed cum asperiores minus rerum incidunt unde quod fuga amet ea reprehenderit.
                </div>
            </div>
            <footer class="fd-bar fd-bar--cozy fd-bar--floating-footer" style="position:relative">
                <div role="toolbar" aria-label="Finalizing actions" class="fd-bar__right">
                    <div class="fd-bar__element">
                        <button aria-label="button" class="fd-button fd-button--emphasized">Save</button>
                    </div>
                    <div class="fd-bar__element">
                        <button aria-label="button" class="fd-button fd-button--transparent">Cancel</button>
                    </div>
                </div>
            </footer>
        </section>
    </div>
`;
WithFacetsMobile.storyName = 'With header facets (mobile)';


