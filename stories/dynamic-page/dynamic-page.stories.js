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

- <code class="docs-code">fd-dynamic-page</code> Main element
  - <code class="docs-code">fd-dynamic-page\\_\\_header</code>The header area containing title area, collapsible header with buttons, and tabs
    - <code class="docs-code">fd-dynamic-page\\_\\_title-area</code> The area holding title, KPI content, subtitle, and actions
        - <code class="docs-code">fd-dynamic-page\\_\\_main-container</code> Main container that holds **Breadcrumb**, title, title content and actions
            - <code class="docs-code">fd-dynamic-page\\_\\_breadcrumb-title-container</code> Container that holds breadcrumb, title, and title content
                - <code class="docs-code">fd-dynamic-page\\_\\_breadcrumb</code> Breadcrumbs
                - <code class="docs-code">fd-dynamic-page\\_\\_title-container</code> The container for title, KPI content and actions
                    - <code class="docs-code">fd-dynamic-page\\_\\_title</code> Dynamic page title
                    - <code class="docs-code">fd-dynamic-page\\_\\_title-content</code> The KPI content
            - <code class="docs-code">fd-dynamic-page\\_\\_actions-container</code> Wrapper container for toolbar that handles toolbar positioning
                - <code class="docs-code">fd-dynamic-page\\_\\_toolbar-container</code> Container that holds toolbar-related actions
                    - <code class="docs-code">fd-dynamic-page\\_\\_toolbar</code> Toolbar container for actions
                    - <code class="docs-code">fd-dynamic-page\\_\\_toolbar-actions</code> Navigation actions
        - <code class="docs-code">fd-dynamic-page\\_\\_subtitle</code> Dynamic page subtitle
    - <code class="docs-code">fd-dynamic-page\\_\\_collapsible-header-container</code> Dynamic page header container
        - <code class="docs-code">fd-dynamic-page\\_\\_collapsible-header</code> Dynamic page header
        - <code class="docs-code">fd-dynamic-page\\_\\_collapsible-header-visibility-container</code> The container for pin/collapse buttons
            - <code class="docs-code">fd-dynamic-page\\_\\_collapse-button</code> Collapse button
            - <code class="docs-code">fd-dynamic-page\\_\\_pin-button</code> Pin button
    - <code class="docs-code">fd-dynamic-page\\_\\_tabs</code> Tabs/Wizard can be optionally used as a header extension
  - <code class="docs-code">fd-dynamic-page\\_\\_content</code> Dynamic page content

Note: Footer is optional and used for finalizing page actions. It is usually displayed in edit mode and uses a floating footer bar. You can use <code class="docs-code">fd-dynamic-page\\_\\_footer</code> to affix the footer to the bottom of the page.

To display a sticky header, use the <code class="docs-code">fd-dynamic-page\\_\\_header-fixed</code> class instead of the default header element. Note that this class only positions the header, and fixing the position of the content needs further implementation. Only use this class when your page content is long enough to scroll.

## Modifiers
| **Description** | <div style="margin-left: 2rem;"> **Modifier class** </div> |
| :---- | :-------------- |
| No shadow for pin/collapse when tabs are used | <code class="docs-code" style="margin-left: 2rem;">fd-dynamic-page\\_\\_header-visibility-container--no-shadow</code>
||<code class="docs-code" style="margin-left: 2rem;">fd-dynamic-page\\_\\_summarized-title-area--no-shadow</code>        |
| Add shadow to tabs when tabs are used | <code class="docs-code" style="margin-left: 2rem;">fd-dynamic-page\\_\\_tabs--add-shadow</code>       |
| Collapsed styles when header is collapsed | <code class="docs-code" style="margin-left: 2rem;">fd-dynamic-page\\_\\_title-area--collapsed</code>      |
||<code class="docs-code" style="margin-left: 2rem;">fd-dynamic-page\\_\\_summarized-title--collapsed</code>        |
| The pin/collapse button group | <code class="docs-code" style="margin-left: 2rem;">fd-dynamic-page\\_\\_header-visibility-container--button-group</code>      |
| The left gradient of the button group | <code class="docs-code" style="margin-left: 2rem;">fd-dynamic-page\\_\\_header-visibility-container--left-gradient</code>      |
| The right gradient of the button group | <code class="docs-code" style="margin-left: 2rem;">fd-dynamic-page\\_\\_header-visibility-container--right-gradient</code>      |
## Background variants

| **Description** | <span style="margin-left: 2rem;">**Modifier class**</span> |
| :---- | :-------------- |
| List background for content area|<code class="docs-code" style="margin-left: 2rem;">fd-dynamic-page\\_\\_content--list-bg</code>        |
| Transparent background for title area | <code class="docs-code" style="margin-left: 2rem;">fd-dynamic-page\\_\\_title-area--transparent-bg</code> |
| Transparent background for header area|<code class="docs-code" style="margin-left: 2rem;">fd-dynamic-page\\_\\_header--transparent-bg</code>        |
| Transparent background for content area|<code class="docs-code" style="margin-left: 2rem;">fd-dynamic-page\\_\\_content--transparent-bg</code>        |

`,
        tags: ['f3', 'theme', 'development'],
        components: ['bar', 'breadcrumb', 'tabs', 'link', 'toolbar', 'title', 'icon', 'button', 'popover', 'dynamic-page']
    }
};

export const desktop = () => `
    <section class="fd-dynamic-page fd-dynamic-page--xl" aria-label="Dynamic Page Desktop Example">
        <header class="fd-dynamic-page__header">
            <div class="fd-dynamic-page__title-area " tabindex="0">
                <div class="fd-dynamic-page__main-container">
                    <div class="fd-dynamic-page__breadcrumb-title-container">
                        <nav aria-label="Breadcrumbs">
                            <ul class="fd-dynamic-page__breadcrumb fd-breadcrumb">
                                <li class="fd-breadcrumb__item"><a class="fd-breadcrumb__link" tabindex="0" href="#">Men</a></li>
                                <li class="fd-breadcrumb__item"><a class="fd-breadcrumb__link" tabindex="0" href="#">Shoes</a></li>
                                <li class="fd-breadcrumb__item"><a aria-current="page" class="fd-breadcrumb__link" tabindex="0" href="#">Running Shoes</a></li>
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

desktop.storyName = 'Desktop';
desktop.parameters = {
    docs: {
        storyDescription: `The dynamic page displays on desktop screens with the L, XL, and XXL sizes. To optimize dynamic page for desktop, add modifier class \`fd-dynamic-page--xl\`.

Note: The XL size is presented in this table, however the L and XXL size works as well.

It is also possible to add **Tabs** to the header area, which helps divide the page content. To display tabs, add the \`fd-dynamic-page__tabs\` class along with any of these size modifiers:

- \`--sm\`
- \`--md\`
- \`--lg\`
- \`--xl\`

In addition, add the modifier classes \`--add-shadow\` to the unordered list, and \`--overflow\` at the parent level for the box-shadow styling.
`
    }
};

export const tablet = () => `
    <section class="fd-dynamic-page fd-dynamic-page--md" aria-label="Dynamic Page Tablet Example">
        <header class="fd-dynamic-page__header">
            <div class="fd-dynamic-page__title-area " tabindex="0">
            <div class="fd-dynamic-page__main-container">
                    <div class="fd-dynamic-page__breadcrumb-title-container">
                            <div class="fd-dynamic-page__breadcrumb-container">
                            <nav aria-label="Breadcrumbs">
                                <ul class="fd-dynamic-page__breadcrumb fd-breadcrumb">
                                    <li class="fd-breadcrumb__item"><a class="fd-breadcrumb__link" tabindex="0" href="#">Men</a></li>
                                    <li class="fd-breadcrumb__item"><a class="fd-breadcrumb__link" tabindex="0" href="#">Shoes</a></li>
                                    <li class="fd-breadcrumb__item"><a aria-current="page" class="fd-breadcrumb__link" tabindex="0" href="#">Running Shoes</a></li>
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
                                <a href="#" class="fd-link" title="Balenciaga Triple S Trainers">Balenciaga Triple S Trainers </a>
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

tablet.storyName = 'Tablet';
tablet.parameters = {
    docs: {
        storyDescription: `The dynamic page displays on tablet screens with the M size. To optimize dynamic page for tablet, add modifier class \`fd-dynamic-page--md\`.

 
It is recommended that the navigation actions are displayed in a separate row above product actions, and are placed at the same level as the breadcrumb component.`
    }
};

export const mobile = () =>
    `<div class="mobile-container">
        <section class="fd-dynamic-page fd-dynamic-page--sm" aria-label="Dynamic Page Mobile Example">
            <header class="fd-dynamic-page__header">
                <div class="fd-dynamic-page__title-area " tabindex="0">
                    <div class="fd-dynamic-page__main-container">
                        <div class="fd-dynamic-page__breadcrumb-title-container">
                            <div class="fd-dynamic-page__breadcrumb-container">
                                <nav aria-label="Breadcrumbs">
                                    <ul class="fd-breadcrumb">
                                        <li class="fd-breadcrumb__item"><a class="fd-breadcrumb__link" href="#">Men</a></li>
                                        <li class="fd-breadcrumb__item"><a class="fd-breadcrumb__link" href="#">Shoes</a></li>
                                        <li class="fd-breadcrumb__item"><a aria-current="page" class="fd-breadcrumb__link" href="#">Running Shoes</a></li>
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
                                    <div class="fd-popover fd-toolbar__overflow">
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
                                            <div class="fd-toolbar__overflow__body">
                                                Overflowing title content
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div role="toolbar" aria-label="Product actions" class="fd-dynamic-page__toolbar fd-toolbar fd-toolbar--cozy fd-toolbar--clear fd-toolbar--transparent">
                                    <div class="fd-popover fd-toolbar__overflow">
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
                                            <div class="fd-toolbar__overflow__body">
                                                <button class="fd-button fd-button--transparent">Accept</button>
                                                <button class="fd-button fd-button--transparent">Reject</button>
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

mobile.storyName = 'Mobile';
mobile.parameters = {
    docs: {
        storyDescription: `The dynamic page displays on mobile screens with the S size. To optimize dynamic page for mobile, add modifier class \`fd-dynamic-page--sm\`.
 
To display the breadcrumb and close button, they must be wrapped in \`fd-dynamic-page__breadcrumb-container\`. The toolbar overflow actions are functional without being wrapped in an additional container. The title, however, requires \`fd-dynamic-page__toolbar-container\` to be displayed in an overflow toolbar.
Use \`fd-dynamic-page__toolbar fd-dynamic-page__toolbar--content\` for the title content when it is used in an overflow toolbar.`
    }
};

export const mobileCollapsed = () =>
    `<div class="mobile-container">
        <section class="fd-dynamic-page fd-dynamic-page--sm" aria-label="Dynamic Page Mobile Collapsed Example">
            <header class="fd-dynamic-page__header">
                <div class="fd-dynamic-page__title-area  fd-dynamic-page__title-area--collapsed" tabindex="0">
                    <div class="fd-dynamic-page__main-container">
                        <div class="fd-dynamic-page__breadcrumb-title-container">
                            <div class="fd-dynamic-page__breadcrumb-container">
                                <nav aria-label="Breadcrumbs">
                                    <ul class="fd-breadcrumb">
                                        <li class="fd-breadcrumb__item"><a class="fd-breadcrumb__link" tabindex="0" href="#">Men</a></li>
                                        <li class="fd-breadcrumb__item"><a class="fd-breadcrumb__link" tabindex="0" href="#">Shoes</a></li>
                                        <li class="fd-breadcrumb__item"><a aria-current="page" class="fd-breadcrumb__link" tabindex="0" href="#">Running Shoes</a></li>
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
                                    <div class="fd-popover fd-toolbar__overflow">
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
                                            <div class="fd-toolbar__overflow__body">
                                                Overflowing title content
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div role="toolbar" aria-label="Product actions" class="fd-dynamic-page__toolbar fd-toolbar fd-toolbar--cozy fd-toolbar--clear fd-toolbar--transparent">
                                    <div class="fd-popover fd-toolbar__overflow">
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
                                            <div class="fd-toolbar__overflow__body">
                                                <button class="fd-button fd-button--transparent">Accept</button>
                                                <button class="fd-button fd-button--transparent">Reject</button>
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

mobileCollapsed.storyName = 'Collapsed Header (mobile)';
mobileCollapsed.parameters = {
    docs: {
        storyDescription: 'In the example below, the dynamic page is displayed with a collapsed header for mobile screens.'
    }
};

export const summaryLine = () =>
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
                                <li class="fd-breadcrumb__item"><a class="fd-breadcrumb__link" tabindex="-1" href="#">Men</a></li>
                                <li class="fd-breadcrumb__item"><a class="fd-breadcrumb__link" tabindex="-1" href="#">Shoes</a></li>
                                <li class="fd-breadcrumb__item"><a aria-current="page" class="fd-breadcrumb__link" tabindex="-1" href="#">Running Shoes</a></li>
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

summaryLine.storyName = 'Summary Line (mobile)';
summaryLine.parameters = {
    docs: {
        storyDescription: `It is recommended to add a summary line insead of the expand/collapse header feature so users can better focus on the page content. To display a summary line, 
        add \`fd-dynamic-page__summarized-title\` in the \`fd-dynamic-page__summarized-title-area\` element.`
    }
};

export const expandable = () =>
    `<section class="fd-dynamic-page fd-dynamic-page--xl" aria-label="Dynamic Page Expandable Example">
        <header class="fd-dynamic-page__header">
            <div class="fd-dynamic-page__title-area " tabindex="0">
                <div class="fd-dynamic-page__main-container">
                    <div class="fd-dynamic-page__breadcrumb-title-container">
                        <nav aria-label="Breadcrumbs">
                            <ul class="fd-dynamic-page__breadcrumb fd-breadcrumb">
                                <li class="fd-breadcrumb__item"><a class="fd-breadcrumb__link" tabindex="0" href="#">Men</a></li>
                                <li class="fd-breadcrumb__item"><a class="fd-breadcrumb__link" tabindex="0" href="#">Shoes</a></li>
                                <li class="fd-breadcrumb__item"><a aria-current="page" class="fd-breadcrumb__link" tabindex="0" href="#">Running Shoes</a></li>
                            </ul>
                        </nav>
                        <div class="fd-dynamic-page__title-container">
                            <h1 class="fd-title fd-dynamic-page__title" title="Balenciaga Triple S Trainers"> Balenciaga Triple S Trainers </h1>
                            <div class="fd-dynamic-page__title-content" title="Header with both collapse and pin buttons, expanded by default"> Header with both collapse and pin buttons, expanded by default</div>
                        </div>
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

expandable.storyName = 'Expanded Header';
expandable.parameters = {
    docs: {
        storyDescription: `As demonstrated earlier, the dynamic page header can be either displayed or hidden with the expand/collapse buttons. Users can select the pin button to keep the header displayed (enabling the sticky feature).
        To collapse the dynamic page, add the \`--collapsed\` modifier class to the title area and title elements.`
    }
};

export const collapsedHeader = () =>
    `<section class="fd-dynamic-page fd-dynamic-page--xl" aria-label="Dynamic Page Collapsed Example">
        <header class="fd-dynamic-page__header">
            <div class="fd-dynamic-page__title-area  fd-dynamic-page__title-area--collapsed" tabindex="0">
                <div class="fd-dynamic-page__main-container">
                    <div class="fd-dynamic-page__breadcrumb-title-container">
                        <nav aria-label="Breadcrumbs">   
                            <ul class="fd-dynamic-page__breadcrumb fd-breadcrumb">
                                <li class="fd-breadcrumb__item"><a class="fd-breadcrumb__link" tabindex="0" href="#">Men</a></li>
                                <li class="fd-breadcrumb__item"><a class="fd-breadcrumb__link" tabindex="0" href="#">Shoes</a></li>
                                <li class="fd-breadcrumb__item"><a aria-current="page" class="fd-breadcrumb__link" tabindex="0" href="#">Running Shoes</a></li>
                            </ul>
                        </nav>
                        <div class="fd-dynamic-page__title-container">
                            <h1 class="fd-title fd-dynamic-page__title" title="Balenciaga Triple S Trainers Model 123456AB On Sale"> Balenciaga Triple S Trainers Model 123456AB On Sale </h1>
                            <div class="fd-dynamic-page__title-content" title="Collapsed Header with both expand and pin buttons">Collapsed Header with both expand and pin buttons </div>
                        </div>
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

collapsedHeader.storyName = 'Collapsed Header';
collapsedHeader.parameters = {
    docs: {
        storyDescription: 'In the example below, the dynamic page is displayed with a collapsed header for desktop screens.'
    }
};

export const onlyCollapse = () =>
    `<section class="fd-dynamic-page fd-dynamic-page--xl" aria-label="Dynamic Page Pinnable Example">
        <header class="fd-dynamic-page__header">
            <div class="fd-dynamic-page__title-area " tabindex="0">
                <div class="fd-dynamic-page__main-container">
                    <div class="fd-dynamic-page__breadcrumb-title-container">
                        <nav aria-label="Breadcrumbs">  
                            <ul class="fd-dynamic-page__breadcrumb fd-breadcrumb">
                                <li class="fd-breadcrumb__item"><a class="fd-breadcrumb__link" tabindex="0" href="#">Men</a></li>
                                <li class="fd-breadcrumb__item"><a class="fd-breadcrumb__link" tabindex="0" href="#">Shoes</a></li>
                                <li class="fd-breadcrumb__item"><a aria-current="page" class="fd-breadcrumb__link" tabindex="0" href="#">Running Shoes</a></li>
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

onlyCollapse.storyName = 'Without pin';
onlyCollapse.parameters = {
    docs: {
        storyDescription: 'The dynamic page can be displayed without a pin button, giving users the option to only expand or collapse the header area.'
    }
};
