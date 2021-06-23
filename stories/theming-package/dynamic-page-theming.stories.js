export default {
    title: 'Theming/Dynamic Page',
    parameters: {
        components: ['bar', 'breadcrumb', 'tabs', 'link', 'toolbar', 'title', 'icon', 'button', 'popover', 'facet',
            'form-label', 'object-status', 'object-number', 'rating-indicator', 'avatar', 'margins', 'paddings', 'text', 'dynamic-page']
    }
};

export const primary = () => `
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
`;
