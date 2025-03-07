/* empty css             *//* empty css                     *//* empty css                *//* empty css             *//* empty css               *//* empty css             */const h=`<div class="fddocs-icon-tab-container" style="min-height: 600px;">
    <div class="fd-icon-tab-bar">
        <ul role="tablist" class="fd-icon-tab-bar__header">
            <li role="presentation" class="fd-icon-tab-bar__item fd-icon-tab-bar__item--dnd-separator-end">
                <a role="tab" class="fd-icon-tab-bar__tab" href="#section1-1" id="tab1-1">
                    <span class="fd-icon-tab-bar__tag">Insert After Item</span>
                </a>
            </li>
            <li role="presentation" class="fd-icon-tab-bar__item">
                <a role="tab" class="fd-icon-tab-bar__tab" href="#section1-2" aria-selected="true" id="tab1-2">
                    <span class="fd-icon-tab-bar__tag">Section 2</span>
                </a>
            </li>
            <li role="presentation" class="fd-icon-tab-bar__item">
                <a role="tab" class="fd-icon-tab-bar__tab" href="#section1-3" id="tab1-3">
                    <span class="fd-icon-tab-bar__tag">Section 3</span>
                </a>
            </li>
            <li role="presentation" class="fd-icon-tab-bar__item fd-icon-tab-bar__item--dnd-separator">
                <a role="tab" class="fd-icon-tab-bar__tab" href="#section1-4" id="tab1-4">
                    <span class="fd-icon-tab-bar__tag">Insert Before Item</span>
                </a>
            </li>
            <li role="presentation" class="fd-icon-tab-bar__item">
                <a role="tab" class="fd-icon-tab-bar__tab" href="#section1-5" id="tab1-5">
                    <span class="fd-icon-tab-bar__tag">Section 5</span>
                </a>
            </li>
            <li role="presentation" class="fd-icon-tab-bar__item fd-icon-tab-bar__item--dnd-preview">
                <a role="tab" class="fd-icon-tab-bar__tab" href="#section1-6" id="tab1-6">
                    <span class="fd-icon-tab-bar__tag">Being dragged preview</span>
                </a>
            </li>
        </ul>
        <section role="tabpanel" class="fd-icon-tab-bar__panel" id="section1-1" aria-labelledby="tab1">
            Section 1
        </section>
        <section role="tabpanel" class="fd-icon-tab-bar__panel" id="section1-2" aria-labelledby="tab2" hidden>
            Section 2
        </section>
        <section role="tabpanel" class="fd-icon-tab-bar__panel" id="section1-3" aria-labelledby="tab3" hidden>
            Section 3
        </section>
    </div>

    <br/><br/>

    <div class="fd-icon-tab-bar">
        <ul role="tablist" class="fd-icon-tab-bar__header">
            <li role="presentation" class="fd-icon-tab-bar__item">
                <a role="tab" class="fd-icon-tab-bar__tab" href="#section2-1" id="tab2-1">
                    <span class="fd-icon-tab-bar__tag">Section 1</span>
                </a>
            </li>
            <li role="presentation" class="fd-icon-tab-bar__item">
                <a role="tab" class="fd-icon-tab-bar__tab" href="#section2-2" aria-selected="true" id="tab2-2">
                    <span class="fd-icon-tab-bar__tag">Section 2</span>
                </a>
            </li>
            <li role="presentation" class="fd-icon-tab-bar__item fd-icon-tab-bar__item--dnd-hovered">
                <a role="tab" class="fd-icon-tab-bar__tab" href="#section2-3" id="tab2-3">
                    <span class="fd-icon-tab-bar__tag">Insert Into Item</span>
                </a>
            </li>
            <li role="presentation" class="fd-icon-tab-bar__item">
                <a role="tab" class="fd-icon-tab-bar__tab" href="#section2-4" id="tab2-4">
                    <span class="fd-icon-tab-bar__tag">Section 4</span>
                </a>
            </li>
        </ul>
        <section role="tabpanel" class="fd-icon-tab-bar__panel" id="section2-1" aria-labelledby="tab1">
            Section 1
        </section>
        <section role="tabpanel" class="fd-icon-tab-bar__panel" id="section2-2" aria-labelledby="tab2" hidden>
            Section 2
        </section>
        <section role="tabpanel" class="fd-icon-tab-bar__panel" id="section2-3" aria-labelledby="tab3" hidden>
            Section 3
        </section>
    </div>

    <br/><br/>

    <div class="fd-icon-tab-bar">
        <ul role="tablist" class="fd-icon-tab-bar__header">
            <li role="presentation" class="fd-icon-tab-bar__item">
                <a role="tab" class="fd-icon-tab-bar__tab" href="#section3-1" id="tab3-1">
                    <span class="fd-icon-tab-bar__tag">Section 1</span>
                </a>
            </li>
            <li role="presentation" class="fd-icon-tab-bar__item">
                <a role="tab" class="fd-icon-tab-bar__tab" href="#section3-2" aria-selected="true" id="tab3-2">
                    <span class="fd-icon-tab-bar__tag">Section 2</span>
                </a>
            </li>
            <li role="presentation" class="fd-icon-tab-bar__item">
                <a role="tab" class="fd-icon-tab-bar__tab" href="#" id="tab3-3">
                    <span class="fd-icon-tab-bar__tag">Section 3</span>
                </a>
            </li>
            <li role="presentation" class="fd-icon-tab-bar__item fd-icon-tab-bar__item--multi-click">
                <a role="tab" class="fd-icon-tab-bar__tab" aria-selected="true" id="tab3-4" tabindex="0">
                    <span class="fd-icon-tab-bar__tag">Section 4</span>
                </a>

                <div class="fd-popover fd-icon-tab-bar__popover">
                    <div class="fd-popover__control">
                        <div class="fd-icon-tab-bar__button-container">
                            <button class="fd-button fd-button--transparent  fd-icon-tab-bar__button" aria-controls="popover3" aria-expanded="false" aria-haspopup="true" onclick="onPopoverClick('popover3');" aria-label="open menu button">
                                <i class="sap-icon--slim-arrow-down"></i>
                            </button>
                        </div>
                    </div>
                    <div class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--right fd-icon-tab-bar__popover-body" aria-hidden="false" id="popover3">
                        <ul class="fd-list fd-list--navigation fd-list--no-border fd-icon-tab-bar__list" role="list">
                            <li tabindex="-1" role="listitem" aria-level="1" class="fd-list__item fd-list__item--link fd-icon-tab-bar__list-item">
                                <a tabindex="0" class="fd-list__link fd-icon-tab-bar__list-link">
                                    <span class="fd-list__title">Subsection 1</span>
                                </a>
                            </li>
                            <li tabindex="-1" role="listitem" aria-level="1" class="fd-list__item fd-list__item--link fd-icon-tab-bar__list-item fd-icon-tab-bar__item--dnd-separator">
                                <a tabindex="0" class="fd-list__link fd-icon-tab-bar__list-link">
                                    <span class="fd-list__title">Insert Before Subsection</span>
                                </a>
                            </li>
                            <li tabindex="-1" role="listitem" aria-level="1" class="fd-list__item fd-list__item--link fd-icon-tab-bar__list-item">
                                <a tabindex="0" class="fd-list__link fd-icon-tab-bar__list-link">
                                    <span class="fd-list__title">Subsection 3</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </li>
            <li role="presentation" class="fd-icon-tab-bar__item">
                <a role="tab" class="fd-icon-tab-bar__tab" href="#" id="tab3-5">
                    <span class="fd-icon-tab-bar__tag">Section 5</span>
                </a>
            </li>
            <li role="presentation" class="fd-icon-tab-bar__item">
                <a role="tab" class="fd-icon-tab-bar__tab" href="#section3-4" id="tab3-6">
                    <span class="fd-icon-tab-bar__tag">Section 6</span>
                </a>
            </li>
            <li role="presentation" class="fd-icon-tab-bar__item fd-icon-tab-bar__item--multi-click">
                <a role="tab" class="fd-icon-tab-bar__tab" aria-selected="true" id="tab3-7" tabindex="0">
                    <span class="fd-icon-tab-bar__tag">Section 7</span>
                </a>

                <div class="fd-popover fd-icon-tab-bar__popover">
                    <div class="fd-popover__control">
                        <div class="fd-icon-tab-bar__button-container">
                            <button class="fd-button fd-button--transparent  fd-icon-tab-bar__button" aria-controls="popover4" aria-expanded="false" aria-haspopup="true" onclick="onPopoverClick('popoverAO4');" aria-label="open menu button">
                                <i class="sap-icon--slim-arrow-down"></i>
                            </button>
                        </div>
                    </div>
                    <div class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--right fd-icon-tab-bar__popover-body" aria-hidden="false" id="popover4">
                        <ul class="fd-list fd-list--navigation fd-list--no-border fd-icon-tab-bar__list" role="list">
                            <li tabindex="-1" role="listitem" aria-level="1" class="fd-list__item fd-list__item--link fd-icon-tab-bar__list-item">
                                <a tabindex="0" class="fd-list__link fd-icon-tab-bar__list-link">
                                    <span class="fd-list__title">Subsection 1</span>
                                </a>
                            </li>
                            <li tabindex="-1" role="listitem" aria-level="1" class="fd-list__item fd-list__item--link fd-icon-tab-bar__list-item fd-icon-tab-bar__item--dnd-separator-end">
                                <a tabindex="0" class="fd-list__link fd-icon-tab-bar__list-link">
                                    <span class="fd-list__title">Insert After Subsection</span>
                                </a>
                            </li>
                            <li tabindex="-1" role="listitem" aria-level="1" class="fd-list__item fd-list__item--link fd-icon-tab-bar__list-item">
                                <a tabindex="0" class="fd-list__link fd-icon-tab-bar__list-link">
                                    <span class="fd-list__title">Subsection 3</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </li>
        </ul>
        <section role="tabpanel" class="fd-icon-tab-bar__panel" id="section3-1" aria-labelledby="tab1">
            Section 1
        </section>
        <section role="tabpanel" class="fd-icon-tab-bar__panel" id="section3-2" aria-labelledby="tab2" hidden>
            Section 2
        </section>
        <section role="tabpanel" class="fd-icon-tab-bar__panel" id="section3-3" aria-labelledby="tab3" hidden>
            Section 3
        </section>
    </div>

    <br/><br/>

    <div class="fd-icon-tab-bar" style="margin-top: 6rem;">
        <ul role="tablist" class="fd-icon-tab-bar__header">
            <li role="presentation" class="fd-icon-tab-bar__item">
                <a role="tab" class="fd-icon-tab-bar__tab" href="#section4-1" id="tab4-1">
                    <span class="fd-icon-tab-bar__tag">Section 1</span>
                </a>
            </li>
            <li role="presentation" class="fd-icon-tab-bar__item">
                <a role="tab" class="fd-icon-tab-bar__tab" href="#section4-2" aria-selected="true" id="tab4-2">
                    <span class="fd-icon-tab-bar__tag">Section 2</span>
                </a>
            </li>
            <li role="presentation" class="fd-icon-tab-bar__item">
                <a role="tab" class="fd-icon-tab-bar__tab" href="#" id="tab4-3">
                    <span class="fd-icon-tab-bar__tag">Section 3</span>
                </a>
            </li>
            <li role="presentation" class="fd-icon-tab-bar__item fd-icon-tab-bar__item--multi-click">
                <a role="tab" class="fd-icon-tab-bar__tab" aria-selected="true" id="tab4-4" tabindex="0">
                    <span class="fd-icon-tab-bar__tag">Section 4</span>
                </a>

                <div class="fd-popover fd-icon-tab-bar__popover">
                    <div class="fd-popover__control">
                        <div class="fd-icon-tab-bar__button-container">
                            <button class="fd-button fd-button--transparent  fd-icon-tab-bar__button" aria-controls="popoverAO4" aria-expanded="false" aria-haspopup="true" onclick="onPopoverClick('popoverAO4');" aria-label="open menu button">
                                <i class="sap-icon--slim-arrow-down"></i>
                            </button>
                        </div>
                    </div>
                    <div class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--right fd-icon-tab-bar__popover-body" aria-hidden="false" id="popoverAO4">
                        <ul class="fd-list fd-list--navigation fd-list--no-border fd-icon-tab-bar__list" role="list">
                            <li tabindex="-1" role="listitem" aria-level="1" class="fd-list__item fd-list__item--link fd-icon-tab-bar__list-item">
                                <a tabindex="0" class="fd-list__link fd-icon-tab-bar__list-link">
                                    <span class="fd-list__title">Subsection 1</span>
                                </a>
                            </li>
                            <li tabindex="-1" role="listitem" aria-level="1" class="fd-list__item fd-list__item--link fd-icon-tab-bar__list-item fd-icon-tab-bar__item--dnd-hovered">
                                <a tabindex="0" class="fd-list__link fd-icon-tab-bar__list-link">
                                    <span class="fd-list__title">Insert Into Subsection</span>
                                </a>
                            </li>
                            <li tabindex="-1" role="listitem" aria-level="1" class="fd-list__item fd-list__item--link fd-icon-tab-bar__list-item">
                                <a tabindex="0" class="fd-list__link fd-icon-tab-bar__list-link">
                                    <span class="fd-list__title">Subsection 3</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </li>
            <li role="presentation" class="fd-icon-tab-bar__item">
                <a role="tab" class="fd-icon-tab-bar__tab" href="#section4-4" id="tab4-5">
                    <span class="fd-icon-tab-bar__tag">Section 5</span>
                </a>
            </li>
        </ul>
        <section role="tabpanel" class="fd-icon-tab-bar__panel" id="section1" aria-labelledby="tab1">
            Section 1
        </section>
        <section role="tabpanel" class="fd-icon-tab-bar__panel" id="section2" aria-labelledby="tab2" hidden>
            Section 2
        </section>
        <section role="tabpanel" class="fd-icon-tab-bar__panel" id="section3" aria-labelledby="tab3" hidden>
            Section 3
        </section>
    </div>

    <br/><br/>
</div>
`,g=`<div class="fddocs-icon-tab-container" style="min-height: 100px;">
    <div class="fd-icon-tab-bar fd-icon-tab-bar--navigation fd-icon-tab-bar--navigation-flat fd-icon-tab-bar--md">
        <ul role="tablist" class="fd-icon-tab-bar__header">
            <li role="presentation" class="fd-icon-tab-bar__item">
                <a role="tab" class="fd-icon-tab-bar__tab" href="#" id="tab11">
                    <span class="fd-icon-tab-bar__tag">Section 1</span>
                </a>
            </li>
            <li role="presentation" class="fd-icon-tab-bar__item fd-icon-tab-bar__item--multi-click fd-icon-tab-bar__item--with-separator">
                <a role="tab" class="fd-icon-tab-bar__tab" aria-selected="true" id="tab12" tabindex="0">
                    <span class="fd-icon-tab-bar__tag">Section 2</span>
                </a>

                <div class="fd-popover fd-icon-tab-bar__popover">
                    <div class="fd-popover__control">
                        <div class="fd-icon-tab-bar__button-container">
                            <button class="fd-button fd-button--transparent  fd-icon-tab-bar__button" aria-label="open menu button">
                                <i class="sap-icon--slim-arrow-down"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </li>
            <li role="presentation" class="fd-icon-tab-bar__item fd-icon-tab-bar__item--with-separator">
                <a role="tab" class="fd-icon-tab-bar__tab" href="#" id="tab13">
                    <span class="fd-icon-tab-bar__tag">Section 3</span>
                </a>
            </li>
            <li role="presentation" class="fd-icon-tab-bar__item">
                <a role="tab" class="fd-icon-tab-bar__tab" href="#" id="tab14">
                    <span class="fd-icon-tab-bar__tag">Section 4</span>
                </a>
            </li>
        </ul>
    </div>
</div>
`,x=`<div class="fddocs-icon-tab-container" style="min-height: 600px;">
<h4>With Overflow</h4>
    <div class="fd-icon-tab-bar fd-icon-tab-bar--sm fd-icon-tab-bar--navigation" style="max-width: 400px;">
        <ul role="tablist" class="fd-icon-tab-bar__header">
            <li role="presentation" class="fd-icon-tab-bar__item">
                <a role="tab" class="fd-icon-tab-bar__tab" href="#" id="tab1">
                    <span class="fd-icon-tab-bar__tag">Section 1</span>
                </a>
            </li>
            <li role="presentation" class="fd-icon-tab-bar__item">
                <a role="tab" class="fd-icon-tab-bar__tab" href="#" aria-selected="true" id="tab2">
                    <span class="fd-icon-tab-bar__tag">Section 2</span>
                </a>
            </li>
            <li role="presentation" class="fd-icon-tab-bar__item">
                <a role="tab" class="fd-icon-tab-bar__tab" href="#" id="tab3">
                    <span class="fd-icon-tab-bar__tag">Section 3</span>
                </a>
            </li>
            <li role="presentation" class="fd-icon-tab-bar__item fd-icon-tab-bar__item--overflow" style="left: 20rem;">
                <button class="fd-icon-tab-bar__overflow">
                    <span class="fd-icon-tab-bar__overflow-text">More</span>
                    <i class="sap-icon--slim-arrow-down" role="presentation"></i>
                </button>
            </li>
        </ul>
    </div>
    <div style="height: 50px;"></div>
    <h4>With Multi Click Area</h4>
    <div class="fd-icon-tab-bar fd-icon-tab-bar--navigation fd-icon-tab-bar--md">
        <ul role="tablist" class="fd-icon-tab-bar__header">
            <li role="presentation" class="fd-icon-tab-bar__item">
                <a role="tab" class="fd-icon-tab-bar__tab" href="#" id="tabA1">
                    <span class="fd-icon-tab-bar__tag">Section 1</span>
                </a>
            </li>
            <li role="presentation" class="fd-icon-tab-bar__item fd-icon-tab-bar__item--multi-click">
                <a role="tab" class="fd-icon-tab-bar__tab" id="tabA2" tabindex="0">
                    <span class="fd-icon-tab-bar__tag">Section 2</span>
                </a>

                <div class="fd-popover fd-icon-tab-bar__popover">
                    <div class="fd-popover__control">
                        <div class="fd-icon-tab-bar__button-container">
                            <button class="fd-button fd-button--transparent fd-icon-tab-bar__button" aria-controls="popoverAO4" aria-expanded="false" aria-haspopup="true" onclick="onPopoverClick('popoverAO4');" aria-label="open menu button">
                                <i class="sap-icon--slim-arrow-down"></i>
                            </button>
                        </div>
                    </div>
                    <div class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--right fd-icon-tab-bar__popover-body" aria-hidden="false" id="popoverAO4">
                        <ul class="fd-list fd-list--navigation fd-list--no-border fd-icon-tab-bar__list" role="list">
                            <li tabindex="-1" role="listitem" aria-level="1" class="fd-list__item fd-list__item--link fd-icon-tab-bar__list-item">
                                <a tabindex="0" class="fd-list__link fd-icon-tab-bar__list-link">
                                    <span class="fd-list__title">Subsection 1</span>
                                </a>
                            </li>
                            <li tabindex="-1" role="listitem" aria-level="1" class="fd-list__item fd-list__item--link fd-icon-tab-bar__list-item">
                                <a tabindex="0" class="fd-list__link fd-icon-tab-bar__list-link">
                                    <span class="fd-list__title">Subsection 2</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </li>
            <li role="presentation" class="fd-icon-tab-bar__item">
                <a role="tab" class="fd-icon-tab-bar__tab" href="#" id="tabA3">
                    <span class="fd-icon-tab-bar__tag">Section 3</span>
                </a>
            </li>
            <li role="presentation" class="fd-icon-tab-bar__item fd-icon-tab-bar__item--multi-click">
                <a role="tab" class="fd-icon-tab-bar__tab" id="tabA4" tabindex="0">
                    <span class="fd-icon-tab-bar__tag">Section 4</span>
                </a>

                <div class="fd-popover fd-icon-tab-bar__popover">
                    <div class="fd-popover__control">
                        <div class="fd-icon-tab-bar__button-container">
                            <button class="fd-button fd-button--transparent fd-icon-tab-bar__button" aria-controls="popoverAaC" aria-expanded="false" aria-haspopup="true" onclick="onPopoverClick('popoverAaC');" aria-label="open menu button">
                                <i class="sap-icon--slim-arrow-down"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </li>
            <li role="presentation" class="fd-icon-tab-bar__item">
                <a role="tab" class="fd-icon-tab-bar__tab" href="#" id="tabA5">
                    <span class="fd-icon-tab-bar__tag">Section 5</span>
                </a>
            </li>
            <li role="presentation" class="fd-icon-tab-bar__item fd-icon-tab-bar__item--multi-click">
                <a role="tab" class="fd-icon-tab-bar__tab" aria-selected="true" id="tabA6" tabindex="0">
                    <span class="fd-icon-tab-bar__tag">Section 6</span>
                </a>

                <div class="fd-popover fd-icon-tab-bar__popover">
                    <div class="fd-popover__control">
                        <div class="fd-icon-tab-bar__button-container">
                            <button class="fd-button fd-button--transparent fd-icon-tab-bar__button" aria-controls="popoverAa1" aria-expanded="false" aria-haspopup="true" onclick="onPopoverClick('popoverAa1');" aria-label="open menu button">
                                <i class="sap-icon--slim-arrow-down"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </li>
            <li role="presentation" class="fd-icon-tab-bar__item">
                <a role="tab" class="fd-icon-tab-bar__tab" href="#" id="tab6">
                    <span class="fd-icon-tab-bar__tag">Section 7</span>
                </a>
            </li>
        </ul>
    </div>
    <div style="height: 120px;"></div>
    <h4>With Single Click Area</h4>
    <div class="fd-icon-tab-bar fd-icon-tab-bar--navigation fd-icon-tab-bar--xl">
        <ul role="tablist" class="fd-icon-tab-bar__header">
            <li role="presentation" class="fd-icon-tab-bar__item">
                <a role="tab" class="fd-icon-tab-bar__tab" href="#" id="tab7">
                    <span class="fd-icon-tab-bar__tag">Section 1</span>
                </a>
            </li>
            <li role="presentation" class="fd-icon-tab-bar__item fd-icon-tab-bar__item--single-click">
                <div class="fd-popover">
                <div class="fd-popover__control">
                    <a role="tab" class="fd-icon-tab-bar__tab" aria-selected="true" id="tab8" tabindex="0" aria-controls="popoverAO5" aria-expanded="true" aria-haspopup="true" onclick="onPopoverClick('popoverAO5');">
                    <div class="fd-icon-tab-bar__tab-container">
                        <span class="fd-icon-tab-bar__tag">Section 2</span>
                        <span class="fd-icon-tab-bar__arrow">
                            <i class="sap-icon--slim-arrow-down" role="presentation"></i>
                        </span>
                    </div>
                    </a>
                </div>
                <div class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--right fd-icon-tab-bar__popover-body" aria-hidden="false" id="popoverAO5">
                    <ul class="fd-list fd-list--navigation fd-list--no-border fd-icon-tab-bar__list" role="list">
                    <li tabindex="-1" role="listitem" aria-level="1" class="fd-list__item fd-list__item--link fd-icon-tab-bar__list-item">
                        <a tabindex="0" class="fd-list__link fd-icon-tab-bar__list-link">
                            <span class="fd-list__title">Subsection 1</span>
                        </a>
                    </li>
                    <li tabindex="-1" role="listitem" aria-level="1" class="fd-list__item fd-list__item--link fd-icon-tab-bar__list-item">
                        <a tabindex="0" class="fd-list__link fd-icon-tab-bar__list-link">
                            <span class="fd-list__title">Subsection 2</span>
                        </a>
                    </li>
                    </ul>
                </div>
                </div>
            </li>
            <li role="presentation" class="fd-icon-tab-bar__item">
                <a role="tab" class="fd-icon-tab-bar__tab" href="#" id="tab9">
                <span class="fd-icon-tab-bar__tag">Section 3</span>
                </a>
            </li>
            <li role="presentation" class="fd-icon-tab-bar__item fd-icon-tab-bar__item--single-click">
                <div class="fd-popover">
                    <div class="fd-popover__control">
                        <a role="tab" class="fd-icon-tab-bar__tab" id="tab10" tabindex="0" aria-expanded="true" aria-haspopup="true">
                        <div class="fd-icon-tab-bar__tab-container">
                            <span class="fd-icon-tab-bar__tag">Section 4</span>
                            <span class="fd-icon-tab-bar__arrow">
                                <i class="sap-icon--slim-arrow-down" role="presentation"></i>
                            </span>
                        </div>
                        </a>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</div>
`,w=`<h4>SM (1rem) paddings</h4>
<div class="fd-icon-tab-bar fd-icon-tab-bar--sm">
    <ul role="tablist" class="fd-icon-tab-bar__header">
        <li role="presentation" class="fd-icon-tab-bar__item">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#" id="tab1">
                <span class="fd-icon-tab-bar__tag">Section 1</span>
            </a>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#" aria-selected="true" id="tab2">
                <span class="fd-icon-tab-bar__tag">Section 2</span>
            </a>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#" id="tab3">
                <span class="fd-icon-tab-bar__tag">Section 3</span>
            </a>
        </li>
    </ul>
</div>
<br><br>
<h4>MD (2rem) paddings</h4>
<div class="fd-icon-tab-bar fd-icon-tab-bar--md">
    <ul role="tablist" class="fd-icon-tab-bar__header">
        <li role="presentation" class="fd-icon-tab-bar__item">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#" id="tab4">
                <span class="fd-icon-tab-bar__tag">Section 1</span>
            </a>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#" aria-selected="true" id="tab5">
                <span class="fd-icon-tab-bar__tag">Section 2</span>
            </a>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#" id="tab6">
                <span class="fd-icon-tab-bar__tag">Section 3</span>
            </a>
        </li>
    </ul>
</div>
<br><br>
<h4>LG (2rem) paddings</h4>
<div class="fd-icon-tab-bar fd-icon-tab-bar--lg">
    <ul role="tablist" class="fd-icon-tab-bar__header">
        <li role="presentation" class="fd-icon-tab-bar__item">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#" id="tab7">
                <span class="fd-icon-tab-bar__tag">Section 1</span>
            </a>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#" aria-selected="true" id="tab8">
                <span class="fd-icon-tab-bar__tag">Section 2</span>
            </a>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#" id="tab9">
                <span class="fd-icon-tab-bar__tag">Section 3</span>
            </a>
        </li>
    </ul>
</div>
<br><br>
<h4>XL (3rem) paddings</h4>
<div class="fd-icon-tab-bar fd-icon-tab-bar--xl">
    <ul role="tablist" class="fd-icon-tab-bar__header">
        <li role="presentation" class="fd-icon-tab-bar__item">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#" id="tab13">
                <span class="fd-icon-tab-bar__tag">Section 1</span>
            </a>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#" aria-selected="true" id="tab14">
                <span class="fd-icon-tab-bar__tag">Section 2</span>
            </a>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#" id="tab15">
                <span class="fd-icon-tab-bar__tag">Section 3</span>
            </a>
        </li>
    </ul>
</div>
<br><br>
<h4>XXL (3rem) paddings</h4>
<div class="fd-icon-tab-bar fd-icon-tab-bar--xxl">
    <ul role="tablist" class="fd-icon-tab-bar__header">
        <li role="presentation" class="fd-icon-tab-bar__item">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#" id="tab16">
                <span class="fd-icon-tab-bar__tag">Section 1</span>
            </a>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#" aria-selected="true" id="tab17">
                <span class="fd-icon-tab-bar__tag">Section 2</span>
            </a>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#" id="tab18">
                <span class="fd-icon-tab-bar__tag">Section 3</span>
            </a>
        </li>
    </ul>
</div>
`,k=`<div class="fd-icon-tab-bar fd-icon-tab-bar--responsive-paddings">
    <ul role="tablist" class="fd-icon-tab-bar__header">
        <li role="presentation" class="fd-icon-tab-bar__item">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#section11" id="tab1">
                <span class="fd-icon-tab-bar__tag">Section 1</span>
                <span class="fd-icon-tab-bar__badge"></span>
            </a>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#section12" aria-selected="true" id="tab2">
                <span class="fd-icon-tab-bar__tag">Section 2</span>
            </a>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#section13" id="tab3">
                <span class="fd-icon-tab-bar__tag">Section 3</span>
            </a>
        </li>
    </ul>
</div>
`,y=`<div class="fd-icon-tab-bar">
    <ul role="tablist" class="fd-icon-tab-bar__header">
        <li role="presentation" class="fd-icon-tab-bar__item">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#section11" id="tab1">
                <span class="fd-icon-tab-bar__tag">Section 1</span>
                <span class="fd-icon-tab-bar__badge"></span>
            </a>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#section12" aria-selected="true" id="tab2">
                <span class="fd-icon-tab-bar__tag">Section 2</span>
            </a>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#section13" id="tab3">
                <span class="fd-icon-tab-bar__tag">Section 3</span>
            </a>
        </li>
    </ul>
</div>

<br><br>
<div class="fd-icon-tab-bar">
    <ul role="tablist" class="fd-icon-tab-bar__header">
        <li role="presentation" class="fd-icon-tab-bar__item fd-icon-tab-bar__item--positive">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#section21" aria-selected="true" id="tab4">
                <span class="fd-icon-tab-bar__tag">Section 1</span>
                <span class="fd-icon-tab-bar__badge"></span>
            </a>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item fd-icon-tab-bar__item--negative">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#section22" aria-selected="true" id="tab5">
                <span class="fd-icon-tab-bar__tag">Section 2</span>
                <span class="fd-icon-tab-bar__badge"></span>
            </a>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item fd-icon-tab-bar__item--critical">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#section23" aria-selected="true" id="tab6">
                <span class="fd-icon-tab-bar__tag">Section 3</span>
                <span class="fd-icon-tab-bar__badge"></span>
            </a>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item fd-icon-tab-bar__item--informative">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#section24" aria-selected="true" id="tab7">
                <span class="fd-icon-tab-bar__tag">Section 4</span>
                <span class="fd-icon-tab-bar__badge"></span>
            </a>
        </li>
    </ul>
</div>

<br><br>
<div class="fd-icon-tab-bar fd-icon-tab-bar--counters">
    <ul role="tablist" class="fd-icon-tab-bar__header">
        <li role="presentation" class="fd-icon-tab-bar__item fd-icon-tab-bar__item--positive">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#section41" id="tab8">
                <span class="fd-icon-tab-bar__tag">Section 1</span>
                <span class="fd-icon-tab-bar__badge"></span>
            </a>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item fd-icon-tab-bar__item--negative">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#section42" aria-selected="true" id="tab9">
                <span class="fd-icon-tab-bar__counter">23</span>
                <span class="fd-icon-tab-bar__tag">Section 2</span>
                <span class="fd-icon-tab-bar__badge"></span>
            </a>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item fd-icon-tab-bar__item--critical">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#section43" id="tab10">
                <span class="fd-icon-tab-bar__counter">10</span>
                <span class="fd-icon-tab-bar__tag">Section 3</span>
                <span class="fd-icon-tab-bar__badge"></span>
            </a>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item fd-icon-tab-bar__item--informative">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#section44" id="tab11">
                <span class="fd-icon-tab-bar__counter">10</span>
                <span class="fd-icon-tab-bar__tag">Section 4</span>
                <span class="fd-icon-tab-bar__badge"></span>
            </a>
        </li>
    </ul>
</div>
<br><br>
<div class="fd-icon-tab-bar fd-icon-tab-bar--icon-only">
  <ul role="tablist" class="fd-icon-tab-bar__header">
    <li role="presentation" class="fd-icon-tab-bar__item fd-icon-tab-bar__item--positive">
      <a role="tab" class="fd-icon-tab-bar__tab" href="#" id="tab12">
        <div class="fd-icon-tab-bar__container">
          <span class="fd-icon-tab-bar__icon">
                        <i class="sap-icon--history" role="presentation"></i>
                    </span>
          <span class="fd-icon-tab-bar__badge"></span>
          <span class="fd-icon-tab-bar__counter">2</span>
        </div>
      </a>
    </li>
    <li role="presentation" class="fd-icon-tab-bar__item fd-icon-tab-bar__item--negative">
      <a role="tab" class="fd-icon-tab-bar__tab" href="#" aria-selected="true" id="tab13">
        <div class="fd-icon-tab-bar__container">
          <span class="fd-icon-tab-bar__icon">
                        <i class="sap-icon--card" role="presentation"></i>
                    </span>
          <span class="fd-icon-tab-bar__badge"></span>
          <span class="fd-icon-tab-bar__counter">23</span>
        </div>
      </a>
    </li>
    <li role="presentation" class="fd-icon-tab-bar__item fd-icon-tab-bar__item--critical">
      <a role="tab" class="fd-icon-tab-bar__tab" href="#" id="tab14">
        <div class="fd-icon-tab-bar__container">
          <span class="fd-icon-tab-bar__icon">
                <i class="sap-icon--cart" role="presentation"></i>
          </span>
          <span class="fd-icon-tab-bar__badge"></span>
          <span class="fd-icon-tab-bar__counter">10</span>
        </div>
      </a>
    </li>
    <li role="presentation" class="fd-icon-tab-bar__item fd-icon-tab-bar__item--informative">
      <a role="tab" class="fd-icon-tab-bar__tab" href="#" id="tab15">
        <div class="fd-icon-tab-bar__container">
          <span class="fd-icon-tab-bar__icon">
            <i class="sap-icon--cart" role="presentation"></i>
          </span>
          <span class="fd-icon-tab-bar__badge"></span>
          <span class="fd-icon-tab-bar__counter">10</span>
        </div>
      </a>
    </li>
  </ul>
</div>
`,S=`<div class="fddocs-icon-tab-container" style="min-height: 400px;">
    <div class="fd-icon-tab-bar fd-icon-tab-bar--md">
        <ul role="tablist" class="fd-icon-tab-bar__header">
            <li role="presentation" class="fd-icon-tab-bar__item">
                <a role="tab" class="fd-icon-tab-bar__tab" href="#" id="multiClick1">
                    <span class="fd-icon-tab-bar__tag">Section 1</span>
                    <span class="fd-icon-tab-bar__badge"></span>
                </a>
            </li>
            <li role="presentation" class="fd-icon-tab-bar__item fd-icon-tab-bar__item--multi-click">
                <a role="tab" class="fd-icon-tab-bar__tab" aria-selected="true" id="tab2" tabindex="0">
                    <span class="fd-icon-tab-bar__tag">Section 2</span>
                </a>

                <div class="fd-popover fd-icon-tab-bar__popover">
                    <div class="fd-popover__control">
                        <div class="fd-icon-tab-bar__button-container">
                            <button class="fd-button fd-button--transparent  fd-icon-tab-bar__button" aria-controls="popoverA3" aria-expanded="false" aria-haspopup="true" onclick="onPopoverClick('popoverA3');" aria-label="open menu button">
                                <i class="sap-icon--slim-arrow-down"></i>
                            </button>
                            <span class="fd-icon-tab-bar__badge"></span>
                        </div>
                    </div>
                    <div class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--right fd-icon-tab-bar__popover-body" aria-hidden="false" id="popoverA3">
                        <ul class="fd-list fd-list--navigation fd-list--no-border fd-icon-tab-bar__list" role="list">
                            <li tabindex="-1" class="fd-icon-tab-bar__icon-separator" role="presentation">
                                <span class="sap-icon--process"></span>
                            </li>
                            <li tabindex="-1" role="listitem" aria-level="1" class="fd-list__item fd-list__item--link fd-icon-tab-bar__list-item">
                                <a tabindex="0" class="fd-list__link fd-icon-tab-bar__list-link">
                                    <span class="fd-list__title">Subsection 1</span>
                                    <span class="fd-icon-tab-bar__badge"></span>
                                </a>
                            </li>
                            <li tabindex="-1" class="fd-icon-tab-bar__icon-separator" role="presentation">
                                <span class="sap-icon--process"></span>
                            </li>
                            <li tabindex="-1" role="listitem" aria-level="2" class="fd-list__item fd-list__item--link fd-icon-tab-bar__list-item">
                                <a tabindex="0" class="fd-list__link fd-icon-tab-bar__list-link is-focus">
                                    <span class="fd-list__title">Subsection 1.1 (focus)</span>
                                </a>
                            </li>
                            <li tabindex="-1" class="fd-icon-tab-bar__icon-separator" role="presentation">
                                <span class="sap-icon--process"></span>
                            </li>
                            <li tabindex="-1" role="listitem" aria-level="3" class="fd-list__item fd-list__item--link fd-icon-tab-bar__list-item">
                                <a tabindex="0" class="fd-list__link fd-icon-tab-bar__list-link is-hover">
                                    <span class="fd-list__title">Subsection 1.1.1 (hover)</span>
                                </a>
                            </li>
                            <li tabindex="-1" class="fd-icon-tab-bar__icon-separator" role="presentation">
                                <span class="sap-icon--process"></span>
                            </li>
                            <li tabindex="-1" role="listitem" aria-level="4" class="fd-list__item fd-list__item--link fd-icon-tab-bar__list-item">
                                <a tabindex="0" class="fd-list__link fd-icon-tab-bar__list-link">
                                    <span class="fd-list__title">Subsection 1.1.1.1</span>
                                </a>
                            </li>
                            <li tabindex="-1" class="fd-icon-tab-bar__icon-separator" role="presentation">
                                <span class="sap-icon--process"></span>
                            </li>
                            <li tabindex="-1" role="listitem" aria-level="5" class="fd-list__item fd-list__item--link fd-icon-tab-bar__list-item">
                                <a tabindex="0" class="fd-list__link fd-icon-tab-bar__list-link">
                                    <span class="fd-list__title">Subsection 1.1.1.1.1</span>
                                </a>
                            </li>
                            <li tabindex="-1" class="fd-icon-tab-bar__icon-separator" role="presentation">
                                <span class="sap-icon--process"></span>
                            </li>
                            <li tabindex="-1" role="listitem" aria-level="1" class="fd-list__item fd-list__item--link fd-icon-tab-bar__list-item">
                                <a tabindex="0" class="fd-list__link fd-icon-tab-bar__list-link">
                                    <span class="fd-list__title">Subsection 2</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </li>
            <li role="presentation" class="fd-icon-tab-bar__item fd-icon-tab-bar__item--multi-click">
                <a role="tab" class="fd-icon-tab-bar__tab" href="#" id="tab3">
                    <span class="fd-icon-tab-bar__tag">Section 3</span>
                </a>
                <div class="fd-popover fd-icon-tab-bar__popover">
                    <div class="fd-popover__control">
                        <div class="fd-icon-tab-bar__button-container">
                            <button class="fd-button fd-button--transparent fd-icon-tab-bar__button">
                                <i class="sap-icon--slim-arrow-down"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </li>
            <li role="presentation" class="fd-icon-tab-bar__item fd-icon-tab-bar__item--multi-click">
                <a role="tab" class="fd-icon-tab-bar__tab is-hover" href="#" id="tab4">
                    <span class="fd-icon-tab-bar__tag">Section 4 (hover)</span>
                </a>
                <div class="fd-popover fd-icon-tab-bar__popover">
                    <div class="fd-popover__control">

                        <div class="fd-icon-tab-bar__button-container">
                            <button class="fd-button fd-button--transparent fd-icon-tab-bar__button">
                                <i class="sap-icon--slim-arrow-down"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </li>
            <li role="presentation" class="fd-icon-tab-bar__item fd-icon-tab-bar__item--multi-click">
                <a role="tab" class="fd-icon-tab-bar__tab" href="#" id="tab4b">
                    <span class="fd-icon-tab-bar__tag">Section 5 (btn hover)</span>
                </a>
                <div class="fd-popover fd-icon-tab-bar__popover">
                    <div class="fd-popover__control">

                        <div class="fd-icon-tab-bar__button-container">
                            <button class="fd-button fd-button--transparent fd-icon-tab-bar__button is-hover">
                                <i class="sap-icon--slim-arrow-down"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </li>
            <li role="presentation" class="fd-icon-tab-bar__item fd-icon-tab-bar__item--multi-click">
                <a role="tab" class="fd-icon-tab-bar__tab is-focus" href="#" id="tab5">
                    <span class="fd-icon-tab-bar__tag">Section 6 (focus)</span>
                </a>
                <div class="fd-popover fd-icon-tab-bar__popover">
                    <div class="fd-popover__control">
                        <div class="fd-icon-tab-bar__button-container">
                            <button class="fd-button fd-button--transparent fd-icon-tab-bar__button is-focus">
                                <i class="sap-icon--slim-arrow-down"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </li>
            <li role="presentation" class="fd-icon-tab-bar__item fd-icon-tab-bar__item--multi-click">
                <a role="tab" class="fd-icon-tab-bar__tab" aria-selected="true" href="#" id="tab5b">
                    <span class="fd-icon-tab-bar__tag">Section 7 (selected, btn hover)</span>
                </a>
                <div class="fd-popover fd-icon-tab-bar__popover">
                    <div class="fd-popover__control">
                        <div class="fd-icon-tab-bar__button-container">
                            <button class="fd-button fd-button--transparent fd-icon-tab-bar__button is-hover">
                                <i class="sap-icon--slim-arrow-down"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </li>
            <li role="presentation" class="fd-icon-tab-bar__item fd-icon-tab-bar__item--multi-click">
                <a role="tab" class="fd-icon-tab-bar__tab" aria-selected="true" href="#" id="tab5c">
                    <span class="fd-icon-tab-bar__tag">Section 8 (selected)</span>
                </a>
                <div class="fd-popover fd-icon-tab-bar__popover">
                    <div class="fd-popover__control">
                        <div class="fd-icon-tab-bar__button-container">
                            <button class="fd-button fd-button--transparent fd-icon-tab-bar__button">
                                <i class="sap-icon--slim-arrow-down"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</div>
`,T=`<div class='fddocs-icon-tab-container' style="min-height: 800px;">
    <div class="fd-icon-tab-bar fd-icon-tab-bar--xl">
        <ul role="tablist" class="fd-icon-tab-bar__header">
            <li role="presentation" class="fd-icon-tab-bar__item">
                <a role="tab" class="fd-icon-tab-bar__tab" href="#" id="tab111">
                    <span class="fd-icon-tab-bar__tag">Section 1</span>
                    <span class="fd-icon-tab-bar__badge"></span>
                </a>
            </li>
            <li role="presentation" class="fd-icon-tab-bar__item fd-icon-tab-bar__item--single-click">
                <div class="fd-popover">
                    <div class="fd-popover__control">
                        <a role="tab" class="fd-icon-tab-bar__tab" tabindex="0" aria-selected="true" id="tab222" aria-controls="popoverA1" aria-expanded="true" aria-haspopup="true" onclick="onPopoverClick('popoverA1');">
                            <div class="fd-icon-tab-bar__tab-container">
                                <span class="fd-icon-tab-bar__tag">Section 2</span>
                                <span class="fd-icon-tab-bar__arrow">
                                    <i class="sap-icon--slim-arrow-down" role="presentation"></i>
                                </span>
                                <span class="fd-icon-tab-bar__badge"></span>
                            </div>
                        </a>
                    </div>
                    <div class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--right fd-icon-tab-bar__popover-body" aria-hidden="false" id="popoverA1">
                        <ul class="fd-list fd-list--navigation fd-list--no-border fd-icon-tab-bar__list" role="list">
                            <li tabindex="-1" role="listitem" aria-level="1" class="fd-list__item fd-list__item--link fd-icon-tab-bar__list-item">
                                <a tabindex="0" class="fd-list__link fd-icon-tab-bar__list-link">
                                    <span class="fd-list__title">Subsection 1</span>
                                    <span class="fd-icon-tab-bar__badge"></span>
                                </a>
                            </li>
                            <li tabindex="-1" role="listitem" aria-level="2" class="fd-list__item fd-list__item--link fd-icon-tab-bar__list-item">
                                <a tabindex="0" class="fd-list__link fd-icon-tab-bar__list-link">
                                    <span class="fd-list__title">Subsection 1.1</span>
                                </a>
                            </li>
                            <li tabindex="-1" role="listitem" aria-level="3" class="fd-list__item fd-list__item--link fd-icon-tab-bar__list-item">
                                <a tabindex="0" class="fd-list__link fd-icon-tab-bar__list-link">
                                    <span class="fd-list__title">Subsection 1.1.1</span>
                                    <span class="fd-icon-tab-bar__badge"></span>
                                </a>
                            </li>
                            <li tabindex="-1" role="listitem" aria-level="4" class="fd-list__item fd-list__item--link fd-icon-tab-bar__list-item">
                                <a tabindex="0" class="fd-list__link fd-icon-tab-bar__list-link">
                                    <span class="fd-list__title">Subsection 1.1.1.1</span>
                                </a>
                            </li>
                            <li tabindex="-1" role="listitem" aria-level="5" class="fd-list__item fd-list__item--link fd-icon-tab-bar__list-item">
                                <a tabindex="0" class="fd-list__link fd-icon-tab-bar__list-link">
                                    <span class="fd-list__title">Subsection 1.1.1.1.1</span>
                                </a>
                            </li>
                            <li tabindex="-1" role="listitem" aria-level="1" class="fd-list__item fd-list__item--link fd-icon-tab-bar__list-item">
                                <a tabindex="0" class="fd-list__link fd-icon-tab-bar__list-link">
                                    <span class="fd-list__title">Subsection 2</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </li>
            <li role="presentation" class="fd-icon-tab-bar__item fd-icon-tab-bar__item--single-click">
                <a role="tab" class="fd-icon-tab-bar__tab" href="#" id="tab333a">
                    <div class="fd-icon-tab-bar__tab-container">
                        <span class="fd-icon-tab-bar__tag">Section 3</span>
                        <span class="fd-icon-tab-bar__arrow">
                            <i class="sap-icon--slim-arrow-down" role="presentation"></i>
                        </span>
                    </div>
                </a>
            </li>
            <li role="presentation" class="fd-icon-tab-bar__item fd-icon-tab-bar__item--single-click">
                <a role="tab" class="fd-icon-tab-bar__tab is-hover" href="#" id="tab333b">
                    <div class="fd-icon-tab-bar__tab-container">
                        <span class="fd-icon-tab-bar__tag">Section 4 (hover)</span>
                        <span class="fd-icon-tab-bar__arrow">
                            <i class="sap-icon--slim-arrow-down" role="presentation"></i>
                        </span>
                    </div>
                </a>
            </li>
            <li role="presentation" class="fd-icon-tab-bar__item fd-icon-tab-bar__item--single-click">
                <a role="tab" class="fd-icon-tab-bar__tab is-focus" href="#" id="tab333c">
                    <div class="fd-icon-tab-bar__tab-container">
                        <span class="fd-icon-tab-bar__tag">Section 5 (focus)</span>
                        <span class="fd-icon-tab-bar__arrow">
                            <i class="sap-icon--slim-arrow-down" role="presentation"></i>
                        </span>
                    </div>
                </a>
            </li>
            <li role="presentation" class="fd-icon-tab-bar__item fd-icon-tab-bar__item--single-click">
                <div class="fd-popover">
                    <div class="fd-popover__control">
                        <a role="tab" class="fd-icon-tab-bar__tab" tabindex="0" aria-selected="true" id="tab222sef" aria-controls="popoverA1d" aria-expanded="true" aria-haspopup="true" onclick="onPopoverClick('popoverA1d');">
                            <div class="fd-icon-tab-bar__tab-container">
                                <span class="fd-icon-tab-bar__tag">Section 6</span>
                                <span class="fd-icon-tab-bar__arrow">
                                    <i class="sap-icon--slim-arrow-down" role="presentation"></i>
                                </span>
                                <span class="fd-icon-tab-bar__badge"></span>
                            </div>
                        </a>
                    </div>
                    <div class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--right fd-icon-tab-bar__popover-body" aria-hidden="false" id="popoverA1d">
                        <ul class="fd-list fd-list--navigation fd-list--no-border fd-icon-tab-bar__list" role="list">
                            <li class="fd-icon-tab-bar__line-separator" role="presentation" tabindex="-1"></li>
                            <li tabindex="-1" role="listitem" aria-level="1" class="fd-list__item fd-list__item--link fd-icon-tab-bar__list-item">
                                <a tabindex="0" class="fd-list__link fd-icon-tab-bar__list-link">
                                    <span class="fd-list__title">Subsection 1</span>
                                    <span class="fd-icon-tab-bar__badge"></span>
                                </a>
                            </li>
                            <li class="fd-icon-tab-bar__line-separator" role="presentation" tabindex="-1"></li>
                            <li tabindex="-1" role="listitem" aria-level="2" class="fd-list__item fd-list__item--link fd-icon-tab-bar__list-item">
                                <a tabindex="0" class="fd-list__link fd-icon-tab-bar__list-link">
                                    <span class="fd-list__title">Subsection 1.1</span>
                                </a>
                            </li>
                            <li class="fd-icon-tab-bar__line-separator" role="presentation" tabindex="-1"></li>
                            <li tabindex="-1" role="listitem" aria-level="3" class="fd-list__item fd-list__item--link fd-icon-tab-bar__list-item">
                                <a tabindex="0" class="fd-list__link fd-icon-tab-bar__list-link">
                                    <span class="fd-list__title">Subsection 1.1.1</span>
                                    <span class="fd-icon-tab-bar__badge"></span>
                                </a>
                            </li>
                            <li class="fd-icon-tab-bar__line-separator" role="presentation" tabindex="-1"></li>
                            <li tabindex="-1" role="listitem" aria-level="4" class="fd-list__item fd-list__item--link fd-icon-tab-bar__list-item">
                                <a tabindex="0" class="fd-list__link fd-icon-tab-bar__list-link">
                                    <span class="fd-list__title">Subsection 1.1.1.1</span>
                                </a>
                            </li>
                            <li class="fd-icon-tab-bar__line-separator" role="presentation" tabindex="-1"></li>
                            <li tabindex="-1" role="listitem" aria-level="5" class="fd-list__item fd-list__item--link fd-icon-tab-bar__list-item">
                                <a tabindex="0" class="fd-list__link fd-icon-tab-bar__list-link">
                                    <span class="fd-list__title">Subsection 1.1.1.1.1</span>
                                </a>
                            </li>
                            <li class="fd-icon-tab-bar__line-separator" role="presentation" tabindex="-1"></li>
                            <li tabindex="-1" role="listitem" aria-level="1" class="fd-list__item fd-list__item--link fd-icon-tab-bar__list-item">
                                <a tabindex="0" class="fd-list__link fd-icon-tab-bar__list-link">
                                    <span class="fd-list__title">Subsection 2</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </li>
        </ul>
    </div>

    <div style="height: 20rem;"></div>

     <div class='fd-icon-tab-bar fd-icon-tab-bar--icon'>
  <ul role='tablist' class='fd-icon-tab-bar__header'>
    <li role='presentation' class='fd-icon-tab-bar__item'>
      <a role='tab' class='fd-icon-tab-bar__tab' href='#' aria-selected='true' id='tab1'>
        <div class='fd-icon-tab-bar__container'>
          <span class='fd-icon-tab-bar__icon'>
                        <i class='sap-icon--filter' role='presentation'></i>
                    </span>
        </div>
        <div class='fd-icon-tab-bar__details'>
          <span class='fd-icon-tab-bar__label'>Description</span>
        </div>
      </a>
    </li>
    <li role='presentation' class='fd-icon-tab-bar__item'>
      <a role='tab' class='fd-icon-tab-bar__tab' href='#' id='tab2'>
        <div class='fd-icon-tab-bar__container'>
          <span class='fd-icon-tab-bar__icon'>
                        <i class='sap-icon--customer' role='presentation'></i>
                    </span>
        </div>
        <div class='fd-icon-tab-bar__details'>
          <span class='fd-icon-tab-bar__counter'>99</span>
          <span class='fd-icon-tab-bar__label'>Description</span>
        </div>
      </a>
    </li>
    <li role='presentation' class='fd-icon-tab-bar__item'>
      <a role='tab' class='fd-icon-tab-bar__tab' href='#' id='tab3'>
        <div class='fd-icon-tab-bar__container'>
          <span class='fd-icon-tab-bar__icon'>
                        <i class='sap-icon--chain-link' role='presentation'></i>
                    </span>
        </div>
        <div class='fd-icon-tab-bar__details'>
          <span class='fd-icon-tab-bar__counter'>56 of 123</span>
          <span class='fd-icon-tab-bar__label'>Description</span>
        </div>
      </a>
    </li>
    <li role='presentation' class='fd-icon-tab-bar__item fd-icon-tab-bar__item--overflow' style="left: 23rem;">
        <div class="fd-popover">
            <div class="fd-popover__control">
                <button class='fd-icon-tab-bar__overflow is-active'>
                    <span class='fd-icon-tab-bar__overflow-text'>More</span>
                    <i class='sap-icon--slim-arrow-down' role='presentation'></i>
                </button>
            </div>
                    <div class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--right fd-icon-tab-bar__popover-body" style='top: 2.3rem'>
             <ul role="list" class="fd-list fd-list--navigation fd-list--no-border fd-icon-tab-bar__list">
                <li role="listitem" tabindex="-1" class="fd-list__item fd-list__item--link fd-icon-tab-bar__list-item fd-icon-tab-bar__list-item--informative">
                <a tabindex="0" class="fd-list__link fd-icon-tab-bar__list-link">
                    <span class="fd-icon-tab-bar__list-item-icon-container">
                        <span class="fd-list__icon fd-icon-tab-bar__list-item-icon">
                            <i class="sap-icon--letter" role="presentation"></i>
                        </span>
                    </span>
                    <span class="fd-list__title fd-icon-tab-bar__list-item-title">Description</span>
                    <span class="fd-list__counter fd-icon-tab-bar__list-item-counter">(12)</span>
                </a>
                </li>
                                <li role="listitem" tabindex="-1" class="fd-list__item fd-list__item--link fd-icon-tab-bar__list-item">
                <a tabindex="0" class="fd-list__link fd-icon-tab-bar__list-link">
                    <span class="fd-icon-tab-bar__list-item-icon-container">
                        <span class="fd-list__icon fd-icon-tab-bar__list-item-icon">
                        <i class="sap-icon--activate" role="presentation"></i>
                        </span>
                    </span>
                    <span class="fd-list__title fd-icon-tab-bar__list-item-title">Description</span>
                    <span class="fd-list__counter fd-icon-tab-bar__list-item-counter">(227)</span>
                </a>
                </li>
                                <li role="listitem" tabindex="-1" class="fd-list__item fd-list__item--link fd-icon-tab-bar__list-item fd-icon-tab-bar__list-item--positive">
                <a tabindex="0" class="fd-list__link fd-icon-tab-bar__list-link">
                    <span class="fd-icon-tab-bar__list-item-icon-container">
                        <span class="fd-list__icon fd-icon-tab-bar__list-item-icon">
                        <i class="sap-icon--jam" role="presentation"></i>
                        </span>
                    </span>
                    <span class="fd-list__title fd-icon-tab-bar__list-item-title">Description</span>
                    <span class="fd-list__counter fd-icon-tab-bar__list-item-counter">(0)</span>
                </a>
                </li>
             </ul>
        </div>

        </div>
    </li>
  </ul>
</div>
</div>
`,A=`<div class="fddocs-icon-tab-container">

</div>

<h3>Regular</h3>
<div style="display: flex; gap: 1rem; margin-bottom: 2rem">
    <button class="fd-icon-tab-bar__overflow">
        <span class="fd-icon-tab-bar__overflow-text">+2</span>
        <i class="sap-icon--slim-arrow-down" role="presentation"></i>
    </button>
    <button class="fd-icon-tab-bar__overflow">
        <span class="fd-icon-tab-bar__overflow-text">More</span>
        <i class="sap-icon--slim-arrow-down" role="presentation"></i>
    </button>
</div>

<h3>Hover</h3>
<div style="display: flex; gap: 1rem; margin-bottom: 2rem">
    <button class="fd-icon-tab-bar__overflow is-hover">
        <span class="fd-icon-tab-bar__overflow-text">+2</span>
        <i class="sap-icon--slim-arrow-down" role="presentation"></i>
    </button>
    <button class="fd-icon-tab-bar__overflow is-hover">
        <span class="fd-icon-tab-bar__overflow-text">More</span>
        <i class="sap-icon--slim-arrow-down" role="presentation"></i>
    </button>
</div>

<h3>Active</h3>
<div style="display: flex; gap: 1rem; margin-bottom: 2rem">
    <button class="fd-icon-tab-bar__overflow is-active">
        <span class="fd-icon-tab-bar__overflow-text">+2</span>
        <i class="sap-icon--slim-arrow-down" role="presentation"></i>
    </button>
    <button class="fd-icon-tab-bar__overflow is-active">
        <span class="fd-icon-tab-bar__overflow-text">More</span>
        <i class="sap-icon--slim-arrow-down" role="presentation"></i>
    </button>
</div>

<h3>Focus</h3>
<div style="display: flex; gap: 1rem; margin-bottom: 2rem">
    <button class="fd-icon-tab-bar__overflow is-focus">
        <span class="fd-icon-tab-bar__overflow-text">+2</span>
        <i class="sap-icon--slim-arrow-down" role="presentation"></i>
    </button>
    <button class="fd-icon-tab-bar__overflow is-focus">
        <span class="fd-icon-tab-bar__overflow-text">More</span>
        <i class="sap-icon--slim-arrow-down" role="presentation"></i>
    </button>
</div>

<br /><br />

<div class="fd-icon-tab-bar fd-icon-tab-bar--process">
    <ul role="tablist" class="fd-icon-tab-bar__header fd-icon-tab-bar__header--left-offset">
        <li role="presentation" class="fd-icon-tab-bar__item fd-icon-tab-bar__item--overflow">
            <button class="fd-icon-tab-bar__overflow">
                <span class="fd-icon-tab-bar__overflow-text">+2</span>
                <i class="sap-icon--slim-arrow-down" role="presentation"></i>
            </button>
        </li>
        <li tabindex="-1" class="fd-icon-tab-bar__icon-separator" role="presentation">
            <span class="sap-icon--process"></span>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#" id="tab1">
                <span class="fd-icon-tab-bar__tag">Section 1</span>
                <span class="fd-icon-tab-bar__badge"></span>
            </a>
        </li>
        <li tabindex="-1" class="fd-icon-tab-bar__icon-separator" role="presentation">
            <span class="sap-icon--process"></span>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#" aria-selected="true" id="tab2">
                <span class="fd-icon-tab-bar__tag">Section 2</span>
            </a>
        </li>
        <li tabindex="-1" class="fd-icon-tab-bar__icon-separator" role="presentation">
            <span class="sap-icon--process"></span>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#" id="tab3">
                <span class="fd-icon-tab-bar__tag">Section 3</span>
            </a>
        </li>
        <li tabindex="-1" class="fd-icon-tab-bar__icon-separator" role="presentation">
            <span class="sap-icon--process"></span>
        </li>
        <li
            role="presentation"
            class="fd-icon-tab-bar__item fd-icon-tab-bar__item--overflow"
            style="left: 20rem"
        >
            <button class="fd-icon-tab-bar__overflow">
                <span class="fd-icon-tab-bar__overflow-text">+3</span>
                <i class="sap-icon--slim-arrow-down" role="presentation"></i>
            </button>
        </li>
    </ul>
</div>
<br /><br />
<div class="fd-icon-tab-bar">
    <ul role="tablist" class="fd-icon-tab-bar__header">
        <li role="presentation" class="fd-icon-tab-bar__item">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#" id="tab4">
                <span class="fd-icon-tab-bar__tag">Section 1</span>
                <span class="fd-icon-tab-bar__badge"></span>
            </a>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#" aria-selected="true" id="tab5">
                <span class="fd-icon-tab-bar__tag">Section 2</span>
            </a>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#" id="tab6">
                <span class="fd-icon-tab-bar__tag">Section 3</span>
            </a>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item fd-icon-tab-bar__item--overflow">
            <button class="fd-icon-tab-bar__overflow">
                <span class="fd-icon-tab-bar__overflow-text">More</span>
                <i class="sap-icon--slim-arrow-down" role="presentation"></i>
            </button>
        </li>
    </ul>
</div>`,I=`<div class="fd-icon-tab-bar fd-icon-tab-bar--filter">
    <ul role="tablist" class="fd-icon-tab-bar__header">
        <li role="presentation" class="fd-icon-tab-bar__item">
            <a role="tab" class="fd-icon-tab-bar__tab"  aria-selected="true" href="#" id="tab1">
                <div class="fd-icon-tab-bar__container fd-icon-tab-bar__container--filter">
                    <span class="fd-icon-tab-bar__filter-counter">ÇN</span>
                    <span class="fd-icon-tab-bar__filter-label">ProductsN</span>
                </div>
            </a>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#" id="tab2">
                <div class="fd-icon-tab-bar__container">
                    <span class="fd-icon-tab-bar__icon">
                        <i class="sap-icon--letter" role="presentation"></i>
                    </span>
                    <span class="fd-icon-tab-bar__badge"></span>
                    <span class="fd-icon-tab-bar__counter">2</span>
                </div>
                <div class="fd-icon-tab-bar__label">Ok</div>

            </a>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#" id="tab3">
                <div class="fd-icon-tab-bar__container">
                    <span class="fd-icon-tab-bar__icon">
                        <i class="sap-icon--activate" role="presentation"></i>
                    </span>
                    <span class="fd-icon-tab-bar__counter">23</span>
                </div>
                <div class="fd-icon-tab-bar__label">Heavy</div>
            </a>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#" id="tab4">
                <div class="fd-icon-tab-bar__container">
                    <span class="fd-icon-tab-bar__icon">
                        <i class="sap-icon--jam" role="presentation"></i>
                    </span>
                    <span class="fd-icon-tab-bar__counter">10</span>
                </div>
                <div class="fd-icon-tab-bar__label">Overweight</div>
            </a>
        </li>
    </ul>
</div>

<br><br>
<div class="fd-icon-tab-bar fd-icon-tab-bar--filter">
    <ul role="tablist" class="fd-icon-tab-bar__header">
        <li role="presentation" class="fd-icon-tab-bar__item">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#" id="tab9">
                <div class="fd-icon-tab-bar__container fd-icon-tab-bar__container--filter">
                    <span class="fd-icon-tab-bar__filter-counter">ÇN</span>
                    <span class="fd-icon-tab-bar__filter-label">ProductsN</span>
                </div>
            </a>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item fd-icon-tab-bar__item--negative">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#" id="tab10">
                <div class="fd-icon-tab-bar__container">
                    <span class="fd-icon-tab-bar__icon">
                        <i class="sap-icon--text-color" role="presentation"></i>
                    </span>
                    <span class="fd-icon-tab-bar__counter">2</span>
                </div>
                <div class="fd-icon-tab-bar__label">Ok</div>
            </a>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item fd-icon-tab-bar__item--critical">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#" aria-selected="true" id="tab11">
                <div class="fd-icon-tab-bar__container">
                    <span class="fd-icon-tab-bar__icon">
                        <i class="sap-icon--touch" role="presentation"></i>
                    </span>
                    <span class="fd-icon-tab-bar__counter">23</span>
                </div>
                <div class="fd-icon-tab-bar__label">Heavy</div>
            </a>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item fd-icon-tab-bar__item--positive">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#" id="tab12">
                <div class="fd-icon-tab-bar__container">
                    <span class="fd-icon-tab-bar__icon">
                        <i class="sap-icon--feedback" role="presentation"></i>
                    </span>
                    <span class="fd-icon-tab-bar__counter">10</span>
                </div>
                <div class="fd-icon-tab-bar__label">Overweight</div>
            </a>
        </li>
    </ul>
</div>`,C=`<div class="fd-icon-tab-bar fd-icon-tab-bar--icon fd-icon-tab-bar--process">
    <ul role="tablist" class="fd-icon-tab-bar__header">
        <li role="presentation" class="fd-icon-tab-bar__item">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#" aria-selected="true" id="tab1">
                <div class="fd-icon-tab-bar__container">
                    <span class="fd-icon-tab-bar__icon">
                        <i class="sap-icon--person-placeholder" role="presentation"></i>
                    </span>
                    <span class="fd-icon-tab-bar__badge"></span>
                </div>
                <div class="fd-icon-tab-bar__details">
                    <span class="fd-icon-tab-bar__counter">2</span>
                    <span class="fd-icon-tab-bar__label">Description</span>
                </div>
            </a>
            <span class="fd-icon-tab-bar__separator">
                <i class="sap-icon--process" role="presentation"></i>
            </span>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#" id="tab2">
                <div class="fd-icon-tab-bar__container">
                    <span class="fd-icon-tab-bar__icon">
                        <i class="sap-icon--paper-plane" role="presentation"></i>
                    </span>
                </div>
                <div class="fd-icon-tab-bar__details">
                    <span class="fd-icon-tab-bar__counter">2</span>
                    <span class="fd-icon-tab-bar__label">Description</span>
                </div>
            </a>
            <span class="fd-icon-tab-bar__separator">
                <i class="sap-icon--process" role="presentation"></i>
            </span>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#" id="tab3">
                <div class="fd-icon-tab-bar__container">
                    <span class="fd-icon-tab-bar__icon">
                        <i class="sap-icon--loan" role="presentation"></i>
                    </span>
                </div>
                <div class="fd-icon-tab-bar__details">
                    <span class="fd-icon-tab-bar__counter">2</span>
                    <span class="fd-icon-tab-bar__label">Description</span>
                </div>
            </a>
        </li>
    </ul>
</div>

<br><br>
<div class="fd-icon-tab-bar fd-icon-tab-bar--icon fd-icon-tab-bar--process">
    <ul role="tablist" class="fd-icon-tab-bar__header">
        <li role="presentation" class="fd-icon-tab-bar__item fd-icon-tab-bar__item--positive">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#" aria-selected="true" id="tab7">
                <div class="fd-icon-tab-bar__container">
                    <span class="fd-icon-tab-bar__icon">
                        <i class="sap-icon--nutrition-activity" role="presentation"></i>
                    </span>
                </div>
                <div class="fd-icon-tab-bar__details">
                    <span class="fd-icon-tab-bar__counter">2</span>
                    <span class="fd-icon-tab-bar__label">Description</span>
                </div>
            </a>
            <span class="fd-icon-tab-bar__separator">
                <i class="sap-icon--process" role="presentation"></i>
            </span>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item fd-icon-tab-bar__item--negative">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#" id="tab8">
                <div class="fd-icon-tab-bar__container">
                    <span class="fd-icon-tab-bar__icon">
                        <i class="sap-icon--vehicle-repair" role="presentation"></i>
                    </span>
                </div>
                <div class="fd-icon-tab-bar__details">
                    <span class="fd-icon-tab-bar__counter">2</span>
                    <span class="fd-icon-tab-bar__label">Description</span>
                </div>
            </a>
            <span class="fd-icon-tab-bar__separator">
                <i class="sap-icon--process" role="presentation"></i>
            </span>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item fd-icon-tab-bar__item--critical">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#" id="tab9">
                <div class="fd-icon-tab-bar__container">
                    <span class="fd-icon-tab-bar__icon">
                        <i class="sap-icon--palette" role="presentation"></i>
                    </span>
                </div>
                <div class="fd-icon-tab-bar__details">
                    <span class="fd-icon-tab-bar__counter">2</span>
                    <span class="fd-icon-tab-bar__label">Description</span>
                </div>
            </a>
        </li>
    </ul>
</div>

<br><br>
<div class="fd-icon-tab-bar fd-icon-tab-bar--process">
    <ul role="tablist" class="fd-icon-tab-bar__header">
        <li role="presentation" class="fd-icon-tab-bar__item">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#" id="tab10">
                <span class="fd-icon-tab-bar__tag">Section 1</span>
                <span class="fd-icon-tab-bar__badge"></span>
            </a>
            <span class="fd-icon-tab-bar__separator">
                <i class="sap-icon--process" role="presentation"></i>
            </span>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#" aria-selected="true" id="tab11">
                <span class="fd-icon-tab-bar__tag">Section 2</span>
            </a>
            <span class="fd-icon-tab-bar__separator">
                <i class="sap-icon--process" role="presentation"></i>
            </span>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#" id="tab12">
                <span class="fd-icon-tab-bar__tag">Section 3</span>
            </a>
        </li>
    </ul>
</div>
`,O=`<div class="fd-icon-tab-bar fd-icon-tab-bar--icon">
    <ul role="tablist" class="fd-icon-tab-bar__header">
        <li role="presentation" class="fd-icon-tab-bar__item">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#" aria-selected="true" id="1">
                <div class="fd-icon-tab-bar__container">
                    <span class="fd-icon-tab-bar__icon">
                        <i class="sap-icon--filter" role="presentation"></i>
                    </span>
                </div>
                <div class="fd-icon-tab-bar__details">
                    <span class="fd-icon-tab-bar__label">Description</span>
                </div>
            </a>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#" id="tab2">
                <div class="fd-icon-tab-bar__container">
                    <span class="fd-icon-tab-bar__icon">
                        <i class="sap-icon--customer" role="presentation"></i>
                    </span>
                </div>
                <div class="fd-icon-tab-bar__details">
                    <span class="fd-icon-tab-bar__counter">99</span>
                    <span class="fd-icon-tab-bar__label">Description</span>
                </div>
            </a>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#" id="tab3">
                <div class="fd-icon-tab-bar__container">
                    <span class="fd-icon-tab-bar__icon">
                        <i class="sap-icon--chain-link" role="presentation"></i>
                    </span>
                </div>
                <div class="fd-icon-tab-bar__details">
                    <span class="fd-icon-tab-bar__counter">56 of 123</span>
                    <span class="fd-icon-tab-bar__label">Description</span>
                </div>
            </a>
        </li>
    </ul>
</div>

<br><br>
<div class="fd-icon-tab-bar fd-icon-tab-bar--icon">
    <ul role="tablist" class="fd-icon-tab-bar__header">
        <li role="presentation" class="fd-icon-tab-bar__item fd-icon-tab-bar__item--positive">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#" aria-selected="true" id="tab7">
                <div class="fd-icon-tab-bar__container">
                    <span class="fd-icon-tab-bar__icon">
                        <i class="sap-icon--play" role="presentation"></i>
                    </span>
                </div>
                <div class="fd-icon-tab-bar__details">
                    <span class="fd-icon-tab-bar__counter">2</span>
                    <span class="fd-icon-tab-bar__label">Description</span>
                </div>
            </a>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item fd-icon-tab-bar__item--negative">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#" id="tab8">
                <div class="fd-icon-tab-bar__container">
                    <span class="fd-icon-tab-bar__icon">
                        <i class="sap-icon--unfavorite" role="presentation"></i>
                    </span>
                </div>
                <div class="fd-icon-tab-bar__details">
                    <span class="fd-icon-tab-bar__counter">2</span>
                    <span class="fd-icon-tab-bar__label">Description</span>
                </div>
            </a>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item fd-icon-tab-bar__item--critical">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#" id="tab9">
                <div class="fd-icon-tab-bar__container">
                    <span class="fd-icon-tab-bar__icon">
                        <i class="sap-icon--shipping-status" role="presentation"></i>
                    </span>
                </div>
                <div class="fd-icon-tab-bar__details">
                    <span class="fd-icon-tab-bar__counter">2</span>
                    <span class="fd-icon-tab-bar__label">Description</span>
                </div>
            </a>
        </li>
    </ul>
</div>
`,H=`<div class="fd-icon-tab-bar fd-icon-tab-bar--icon-only">
    <ul role="tablist" class="fd-icon-tab-bar__header">
        <li role="presentation" class="fd-icon-tab-bar__item fd-icon-tab-bar__item--positive">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#" id="tab1">
                <div class="fd-icon-tab-bar__container">
                    <span class="fd-icon-tab-bar__icon">
                        <i class="sap-icon--history" role="presentation"></i>
                    </span>
                    <span class="fd-icon-tab-bar__counter">2</span>
                </div>
            </a>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item fd-icon-tab-bar__item--negative">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#" aria-selected="true" id="tab2">
                <div class="fd-icon-tab-bar__container">
                    <span class="fd-icon-tab-bar__icon">
                        <i class="sap-icon--card" role="presentation"></i>
                    </span>
                    <span class="fd-icon-tab-bar__counter">23</span>
                </div>
            </a>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item fd-icon-tab-bar__item--critical">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#" id="tab3">
                <div class="fd-icon-tab-bar__container">
                    <span class="fd-icon-tab-bar__icon">
                        <i class="sap-icon--cart" role="presentation"></i>
                    </span>
                    <span class="fd-icon-tab-bar__counter">10</span>
                </div>
            </a>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item fd-icon-tab-bar__item--informative">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#" id="tab4">
                <div class="fd-icon-tab-bar__container">
                    <span class="fd-icon-tab-bar__icon">
                        <i class="sap-icon--cart" role="presentation"></i>
                    </span>
                    <span class="fd-icon-tab-bar__counter">10</span>
                </div>
            </a>
        </li>
    </ul>
</div>`,E=`<div class="fd-icon-tab-bar fd-icon-tab-bar--icon-only">
    <ul role="tablist" class="fd-icon-tab-bar__header">
        <li role="presentation" class="fd-icon-tab-bar__item">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#section1" id="tab1">
                <div class="fd-icon-tab-bar__container">
                    <span class="fd-icon-tab-bar__icon">
                        <i class="sap-icon--account" role="presentation"></i>
                    </span>
                    <span class="fd-icon-tab-bar__counter">2</span>
                </div>
            </a>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#section2" aria-selected="true" id="tab2">
                <div class="fd-icon-tab-bar__container">
                    <span class="fd-icon-tab-bar__icon">
                        <i class="sap-icon--product" role="presentation"></i>
                    </span>
                    <span class="fd-icon-tab-bar__counter">23</span>
                </div>
            </a>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#section3" id="tab3">
                <div class="fd-icon-tab-bar__container">
                    <span class="fd-icon-tab-bar__icon">
                        <i class="sap-icon--present" role="presentation"></i>
                    </span>
                    <span class="fd-icon-tab-bar__counter">10</span>
                </div>
            </a>
        </li>
    </ul>
    <section role="tabpanel" class="fd-icon-tab-bar__panel" id="section1" aria-labelledby="tab1">
        Section 1
    </section>
    <section role="tabpanel" class="fd-icon-tab-bar__panel" id="section2" aria-labelledby="tab2" hidden>
        Section 2
    </section>
    <section role="tabpanel" class="fd-icon-tab-bar__panel" id="section3" aria-labelledby="tab3" hidden>
        Section 3
    </section>
</div>
`,D=`<div class="fd-icon-tab-bar fd-icon-tab-bar--counters">
    <ul role="tablist" class="fd-icon-tab-bar__header">
        <li role="presentation" class="fd-icon-tab-bar__item">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#section1" id="tab1">
                <span class="fd-icon-tab-bar__tag">Info</span>
            </a>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#section2" aria-selected="true" id="tab2">
                <span class="fd-icon-tab-bar__counter">16</span>
                <span class="fd-icon-tab-bar__tag">Attachments</span>
            </a>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#section3" id="tab3">
                <span class="fd-icon-tab-bar__counter">42</span>
                <span class="fd-icon-tab-bar__tag">Approvals</span>
            </a>
        </li>
    </ul>
    <section role="tabpanel" class="fd-icon-tab-bar__panel" id="section1" aria-labelledby="tab1">
        Section 1
    </section>
    <section role="tabpanel" class="fd-icon-tab-bar__panel" id="section2" aria-labelledby="tab2" hidden>
        Section 2
    </section>
    <section role="tabpanel" class="fd-icon-tab-bar__panel" id="section3" aria-labelledby="tab3" hidden>
        Section 3
    </section>
</div>
`,N=`<div class="fd-icon-tab-bar">
    <ul role="tablist" class="fd-icon-tab-bar__header">
        <li role="presentation" class="fd-icon-tab-bar__item fd-icon-tab-bar__item--positive">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#section1" aria-selected="true" id="tab1">
            <span class="fd-icon-tab-bar__tag">Section 1</span>
            </a>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item fd-icon-tab-bar__item--negative">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#section2" aria-selected="true" id="tab2">
            <span class="fd-icon-tab-bar__tag">Section 2</span>
            </a>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item fd-icon-tab-bar__item--critical">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#section3" aria-selected="true" id="tab3">
            <span class="fd-icon-tab-bar__tag">Section 3</span>
            </a>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item fd-icon-tab-bar__item--informative">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#section4" aria-selected="true" id="tab4">
            <span class="fd-icon-tab-bar__tag">Section 4</span>
            </a>
        </li>
    </ul>
    <section role="tabpanel" class="fd-icon-tab-bar__panel" id="section1" aria-labelledby="tab1">Section 1</section>
    <section role="tabpanel" class="fd-icon-tab-bar__panel" id="section2" aria-labelledby="tab2" hidden>Section 2</section>
    <section role="tabpanel" class="fd-icon-tab-bar__panel" id="section3" aria-labelledby="tab3" hidden>Section 3</section>
    <section role="tabpanel" class="fd-icon-tab-bar__panel" id="section4" aria-labelledby="tab4" hidden>Section 4</section>
</div>
`,P=`<div class="fd-icon-tab-bar">
    <ul role="tablist" class="fd-icon-tab-bar__header">
        <li role="presentation" class="fd-icon-tab-bar__item">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#section1" id="tab1">
                <span class="fd-icon-tab-bar__tag">Info</span>
            </a>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#section2" aria-selected="true" id="tab2">
                <span class="fd-icon-tab-bar__tag">Attachments (16)</span>
            </a>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#section3" id="tab3">
                <span class="fd-icon-tab-bar__tag">Approvals (42)</span>
            </a>
        </li>
    </ul>
    <section role="tabpanel" class="fd-icon-tab-bar__panel" id="section1" aria-labelledby="tab1">
        Section 1
    </section>
    <section role="tabpanel" class="fd-icon-tab-bar__panel" id="section2" aria-labelledby="tab2" hidden>
        Section 2
    </section>
    <section role="tabpanel" class="fd-icon-tab-bar__panel" id="section3" aria-labelledby="tab3" hidden>
        Section 3
    </section>
</div>
`,B=`<h4>Text Only</h4>
<div class="fd-icon-tab-bar">
    <ul role="tablist" class="fd-icon-tab-bar__header">
        <li role="presentation" class="fd-icon-tab-bar__item fd-icon-tab-bar__item--closable">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#section1" id="tab1">
                <span class="fd-icon-tab-bar__tag">Info</span>
            </a>
            <div class="fd-icon-tab-bar__button-container">
                <button class="fd-button fd-button--transparent fd-icon-tab-bar__button" aria-label="close tab">
                    <i class="sap-icon--decline"></i>
                </button>
            </div>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item fd-icon-tab-bar__item--closable">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#section2" aria-selected="true" id="tab2">
                <span class="fd-icon-tab-bar__tag">Attachments (16)</span>
            </a>
            <div class="fd-icon-tab-bar__button-container">
                <button class="fd-button fd-button--transparent fd-icon-tab-bar__button" aria-label="close tab">
                    <i class="sap-icon--decline"></i>
                </button>
            </div>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item fd-icon-tab-bar__item--closable">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#section3" id="tab3">
                <span class="fd-icon-tab-bar__tag">Approvals (42)</span>
            </a>
            <div class="fd-icon-tab-bar__button-container">
                <button class="fd-button fd-button--transparent fd-icon-tab-bar__button" aria-label="close tab">
                    <i class="sap-icon--decline"></i>
                </button>
            </div>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item fd-icon-tab-bar__item--closable">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#section4" id="tab4">
                <span class="fd-icon-tab-bar__tag">Tab (btn hover)</span>
            </a>
            <div class="fd-icon-tab-bar__button-container">
                <button
                    class="fd-button fd-button--transparent fd-icon-tab-bar__button is-hover"
                    aria-label="close tab"
                >
                    <i class="sap-icon--decline"></i>
                </button>
            </div>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item fd-icon-tab-bar__item--closable">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#section4" id="tab5">
                <span class="fd-icon-tab-bar__tag">Tab (btn down with focus)</span>
            </a>
            <div class="fd-icon-tab-bar__button-container">
                <button
                    class="fd-button fd-button--transparent fd-icon-tab-bar__button is-focus is-active"
                    aria-label="close tab"
                >
                    <i class="sap-icon--decline"></i>
                </button>
            </div>
        </li>
    </ul>
</div>

<br /><br />
<h4>Icon</h4>
<div class="fd-icon-tab-bar fd-icon-tab-bar--icon">
    <ul role="tablist" class="fd-icon-tab-bar__header">
        <li role="presentation" class="fd-icon-tab-bar__item fd-icon-tab-bar__item--closable">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#" aria-selected="true" id="1">
                <div class="fd-icon-tab-bar__container">
                    <span class="fd-icon-tab-bar__icon">
                        <i class="sap-icon--filter" role="presentation"></i>
                    </span>
                </div>
                <div class="fd-icon-tab-bar__details">
                    <span class="fd-icon-tab-bar__label">Description</span>
                </div>
            </a>
            <div class="fd-icon-tab-bar__button-container">
                <button class="fd-button fd-button--transparent fd-icon-tab-bar__button" aria-label="close tab">
                    <i class="sap-icon--decline"></i>
                </button>
            </div>
        </li>
        <li
            role="presentation"
            class="fd-icon-tab-bar__item fd-icon-tab-bar__item--positive fd-icon-tab-bar__item--closable"
        >
            <a role="tab" class="fd-icon-tab-bar__tab" href="#" aria-selected="true" id="tab7">
                <div class="fd-icon-tab-bar__container">
                    <span class="fd-icon-tab-bar__icon">
                        <i class="sap-icon--play" role="presentation"></i>
                    </span>
                </div>
                <div class="fd-icon-tab-bar__details">
                    <span class="fd-icon-tab-bar__counter">2</span>
                    <span class="fd-icon-tab-bar__label">Description</span>
                </div>
            </a>
            <div class="fd-icon-tab-bar__button-container">
                <button class="fd-button fd-button--transparent fd-icon-tab-bar__button" aria-label="close tab">
                    <i class="sap-icon--decline"></i>
                </button>
            </div>
        </li>
        <li
            role="presentation"
            class="fd-icon-tab-bar__item fd-icon-tab-bar__item--negative fd-icon-tab-bar__item--closable"
        >
            <a role="tab" class="fd-icon-tab-bar__tab" href="#" id="tab8">
                <div class="fd-icon-tab-bar__container">
                    <span class="fd-icon-tab-bar__icon">
                        <i class="sap-icon--unfavorite" role="presentation"></i>
                    </span>
                </div>
                <div class="fd-icon-tab-bar__details">
                    <span class="fd-icon-tab-bar__counter">2</span>
                    <span class="fd-icon-tab-bar__label">Description</span>
                </div>
            </a>
            <div class="fd-icon-tab-bar__button-container">
                <button class="fd-button fd-button--transparent fd-icon-tab-bar__button" aria-label="close tab">
                    <i class="sap-icon--decline"></i>
                </button>
            </div>
        </li>
        <li
            role="presentation"
            class="fd-icon-tab-bar__item fd-icon-tab-bar__item--critical fd-icon-tab-bar__item--closable"
        >
            <a role="tab" class="fd-icon-tab-bar__tab" href="#" id="tab9">
                <div class="fd-icon-tab-bar__container">
                    <span class="fd-icon-tab-bar__icon">
                        <i class="sap-icon--shipping-status" role="presentation"></i>
                    </span>
                </div>
                <div class="fd-icon-tab-bar__details">
                    <span class="fd-icon-tab-bar__counter">2</span>
                    <span class="fd-icon-tab-bar__label">Description</span>
                </div>
            </a>
            <div class="fd-icon-tab-bar__button-container">
                <button class="fd-button fd-button--transparent fd-icon-tab-bar__button" aria-label="close tab">
                    <i class="sap-icon--decline"></i>
                </button>
            </div>
        </li>
    </ul>
</div>

<br /><br />
<h4>Icon Only</h4>
<div class="fd-icon-tab-bar fd-icon-tab-bar--icon-only">
    <ul role="tablist" class="fd-icon-tab-bar__header">
        <li role="presentation" class="fd-icon-tab-bar__item fd-icon-tab-bar__item--closable">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#section1" id="tab1">
                <div class="fd-icon-tab-bar__container">
                    <span class="fd-icon-tab-bar__icon">
                        <i class="sap-icon--account" role="presentation"></i>
                    </span>
                    <span class="fd-icon-tab-bar__counter">2</span>
                </div>
            </a>
            <div class="fd-icon-tab-bar__button-container">
                <button class="fd-button fd-button--transparent fd-icon-tab-bar__button" aria-label="close tab">
                    <i class="sap-icon--decline"></i>
                </button>
            </div>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item fd-icon-tab-bar__item--closable">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#section2" aria-selected="true" id="tab2">
                <div class="fd-icon-tab-bar__container">
                    <span class="fd-icon-tab-bar__icon">
                        <i class="sap-icon--product" role="presentation"></i>
                    </span>
                </div>
            </a>
            <div class="fd-icon-tab-bar__button-container">
                <button class="fd-button fd-button--transparent fd-icon-tab-bar__button" aria-label="close tab">
                    <i class="sap-icon--decline"></i>
                </button>
            </div>
        </li>
        <li role="presentation" class="fd-icon-tab-bar__item fd-icon-tab-bar__item--closable">
            <a role="tab" class="fd-icon-tab-bar__tab" href="#section3" id="tab3">
                <div class="fd-icon-tab-bar__container">
                    <span class="fd-icon-tab-bar__icon">
                        <i class="sap-icon--present" role="presentation"></i>
                    </span>
                </div>
            </a>
            <div class="fd-icon-tab-bar__button-container">
                <button class="fd-button fd-button--transparent fd-icon-tab-bar__button" aria-label="close tab">
                    <i class="sap-icon--decline"></i>
                </button>
            </div>
        </li>
    </ul>
</div>

<br /><br />
<h4>Single Click Area</h4>
<div class="fddocs-icon-tab-container" style="min-height: 100px">
    <div class="fd-icon-tab-bar">
        <ul role="tablist" class="fd-icon-tab-bar__header">
            <li
                role="presentation"
                class="fd-icon-tab-bar__item fd-icon-tab-bar__item--single-click fd-icon-tab-bar__item--closable"
            >
                <div class="fd-popover">
                    <div class="fd-popover__control">
                        <a
                            role="tab"
                            class="fd-icon-tab-bar__tab"
                            aria-selected="true"
                            id="tab8"
                            tabindex="0"
                            aria-controls="popoverITB1"
                            aria-expanded="true"
                            aria-haspopup="true"
                            onclick="onPopoverClick('popoverITB1');"
                        >
                            <div class="fd-icon-tab-bar__tab-container">
                                <span class="fd-icon-tab-bar__tag">Section 1</span>
                                <span class="fd-icon-tab-bar__arrow">
                                    <i class="sap-icon--slim-arrow-down" role="presentation"></i>
                                </span>
                            </div>
                        </a>
                    </div>
                    <div
                        class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--right fd-icon-tab-bar__popover-body"
                        aria-hidden="false"
                        id="popoverITB1"
                    >
                        <ul class="fd-list fd-list--navigation fd-list--no-border fd-icon-tab-bar__list" role="list">
                            <li
                                tabindex="-1"
                                role="listitem"
                                aria-level="1"
                                class="fd-list__item fd-list__item--link fd-icon-tab-bar__list-item fd-icon-tab-bar__list-item--closable"
                            >
                                <a tabindex="0" class="fd-list__link fd-icon-tab-bar__list-link">
                                    <span class="fd-list__title">Subsection 1</span>
                                </a>
                                <div class="fd-icon-tab-bar__button-container">
                                    <button
                                        class="fd-button fd-button--transparent fd-icon-tab-bar__button"
                                        aria-label="close tab"
                                    >
                                        <i class="sap-icon--decline"></i>
                                    </button>
                                </div>
                            </li>
                            <li
                                tabindex="-1"
                                role="listitem"
                                aria-level="2"
                                class="fd-list__item fd-list__item--link fd-icon-tab-bar__list-item fd-icon-tab-bar__list-item--closable"
                            >
                                <a tabindex="0" class="fd-list__link fd-icon-tab-bar__list-link">
                                    <span class="fd-list__title">Subsection 1.1</span>
                                </a>
                                <div class="fd-icon-tab-bar__button-container">
                                    <button
                                        class="fd-button fd-button--transparent fd-icon-tab-bar__button"
                                        aria-label="close tab"
                                    >
                                        <i class="sap-icon--decline"></i>
                                    </button>
                                </div>
                            </li>
                            <li
                                tabindex="-1"
                                role="listitem"
                                aria-level="1"
                                class="fd-list__item fd-list__item--link fd-icon-tab-bar__list-item fd-icon-tab-bar__list-item--closable"
                            >
                                <a tabindex="0" class="fd-list__link fd-icon-tab-bar__list-link">
                                    <span class="fd-list__title">Subsection 2</span>
                                </a>
                                <div class="fd-icon-tab-bar__button-container">
                                    <button
                                        class="fd-button fd-button--transparent fd-icon-tab-bar__button"
                                        aria-label="close tab"
                                    >
                                        <i class="sap-icon--decline"></i>
                                    </button>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="fd-icon-tab-bar__button-container">
                    <button class="fd-button fd-button--transparent fd-icon-tab-bar__button" aria-label="close tab">
                        <i class="sap-icon--decline"></i>
                    </button>
                </div>
            </li>
            <li
                role="presentation"
                class="fd-icon-tab-bar__item fd-icon-tab-bar__item--single-click fd-icon-tab-bar__item--closable"
            >
                <a role="tab" class="fd-icon-tab-bar__tab" href="#" id="tab2single">
                    <div class="fd-icon-tab-bar__tab-container">
                        <span class="fd-icon-tab-bar__tag">Section 2</span>
                        <span class="fd-icon-tab-bar__arrow">
                            <i class="sap-icon--slim-arrow-down" role="presentation"></i>
                        </span>
                    </div>
                </a>
                <div class="fd-icon-tab-bar__button-container">
                    <button class="fd-button fd-button--transparent fd-icon-tab-bar__button" aria-label="close tab">
                        <i class="sap-icon--decline"></i>
                    </button>
                </div>
            </li>
        </ul>
    </div>
</div>

<br /><br />
<h4>Multi Click Area</h4>
<div class="fd-icon-tab-bar">
    <ul role="tablist" class="fd-icon-tab-bar__header">
        <li
            role="presentation"
            class="fd-icon-tab-bar__item fd-icon-tab-bar__item--multi-click fd-icon-tab-bar__item--closable"
        >
            <a role="tab" class="fd-icon-tab-bar__tab" href="#" id="tab1multi">
                <span class="fd-icon-tab-bar__tag">Section 1</span>
            </a>
            <div class="fd-popover fd-icon-tab-bar__popover">
                <div class="fd-popover__control">
                    <div class="fd-icon-tab-bar__button-container">
                        <button class="fd-button fd-button--transparent fd-icon-tab-bar__button">
                            <i class="sap-icon--slim-arrow-down"></i>
                        </button>
                    </div>
                </div>
            </div>
            <div class="fd-icon-tab-bar__button-container">
                <button class="fd-button fd-button--transparent fd-icon-tab-bar__button" aria-label="close tab">
                    <i class="sap-icon--decline"></i>
                </button>
            </div>
        </li>
        <li
            role="presentation"
            class="fd-icon-tab-bar__item fd-icon-tab-bar__item--multi-click fd-icon-tab-bar__item--closable"
        >
            <a role="tab" class="fd-icon-tab-bar__tab" href="#" id="tab3multi">
                <span class="fd-icon-tab-bar__tag">Section 2</span>
            </a>
            <div class="fd-popover fd-icon-tab-bar__popover">
                <div class="fd-popover__control">
                    <div class="fd-icon-tab-bar__button-container">
                        <button class="fd-button fd-button--transparent fd-icon-tab-bar__button">
                            <i class="sap-icon--slim-arrow-down"></i>
                        </button>
                    </div>
                </div>
            </div>
            <div class="fd-icon-tab-bar__button-container">
                <button class="fd-button fd-button--transparent fd-icon-tab-bar__button" aria-label="close tab">
                    <i class="sap-icon--decline"></i>
                </button>
            </div>
        </li>
        <li
            role="presentation"
            class="fd-icon-tab-bar__item fd-icon-tab-bar__item--multi-click fd-icon-tab-bar__item--closable"
        >
            <a role="tab" class="fd-icon-tab-bar__tab" href="#" id="tab3multi" aria-selected="true">
                <span class="fd-icon-tab-bar__tag">Section 3</span>
            </a>
            <div class="fd-popover fd-icon-tab-bar__popover">
                <div class="fd-popover__control">
                    <div class="fd-icon-tab-bar__button-container">
                        <button class="fd-button fd-button--transparent fd-icon-tab-bar__button">
                            <i class="sap-icon--slim-arrow-down"></i>
                        </button>
                    </div>
                </div>
            </div>
            <div class="fd-icon-tab-bar__button-container">
                <button class="fd-button fd-button--transparent fd-icon-tab-bar__button" aria-label="close tab">
                    <i class="sap-icon--decline"></i>
                </button>
            </div>
        </li>
    </ul>
</div>

<br /><br />
<h4>Overflow</h4>

<div class="fddocs-icon-tab-container" style="min-height: 300px">
    <div class="fd-icon-tab-bar fd-icon-tab-bar--icon">
        <ul role="tablist" class="fd-icon-tab-bar__header">
            <li role="presentation" class="fd-icon-tab-bar__item fd-icon-tab-bar__item--closable">
                <a role="tab" class="fd-icon-tab-bar__tab" href="#" aria-selected="true" id="1">
                    <div class="fd-icon-tab-bar__container">
                        <span class="fd-icon-tab-bar__icon">
                            <i class="sap-icon--filter" role="presentation"></i>
                        </span>
                    </div>
                    <div class="fd-icon-tab-bar__details">
                        <span class="fd-icon-tab-bar__label">Description</span>
                    </div>
                </a>
                <div class="fd-icon-tab-bar__button-container">
                    <button class="fd-button fd-button--transparent fd-icon-tab-bar__button" aria-label="close tab">
                        <i class="sap-icon--decline"></i>
                    </button>
                </div>
            </li>
            <li
                role="presentation"
                class="fd-icon-tab-bar__item fd-icon-tab-bar__item--positive fd-icon-tab-bar__item--closable"
            >
                <a role="tab" class="fd-icon-tab-bar__tab" href="#" aria-selected="true" id="tab7">
                    <div class="fd-icon-tab-bar__container">
                        <span class="fd-icon-tab-bar__icon">
                            <i class="sap-icon--play" role="presentation"></i>
                        </span>
                    </div>
                    <div class="fd-icon-tab-bar__details">
                        <span class="fd-icon-tab-bar__counter">2</span>
                        <span class="fd-icon-tab-bar__label">Description</span>
                    </div>
                </a>
                <div class="fd-icon-tab-bar__button-container">
                    <button class="fd-button fd-button--transparent fd-icon-tab-bar__button" aria-label="close tab">
                        <i class="sap-icon--decline"></i>
                    </button>
                </div>
            </li>
            <li
                role="presentation"
                class="fd-icon-tab-bar__item fd-icon-tab-bar__item--negative fd-icon-tab-bar__item--closable"
            >
                <a role="tab" class="fd-icon-tab-bar__tab" href="#" id="tab8">
                    <div class="fd-icon-tab-bar__container">
                        <span class="fd-icon-tab-bar__icon">
                            <i class="sap-icon--unfavorite" role="presentation"></i>
                        </span>
                    </div>
                    <div class="fd-icon-tab-bar__details">
                        <span class="fd-icon-tab-bar__counter">2</span>
                        <span class="fd-icon-tab-bar__label">Description</span>
                    </div>
                </a>
                <div class="fd-icon-tab-bar__button-container">
                    <button class="fd-button fd-button--transparent fd-icon-tab-bar__button" aria-label="close tab">
                        <i class="sap-icon--decline"></i>
                    </button>
                </div>
            </li>
            <li
                role="presentation"
                class="fd-icon-tab-bar__item fd-icon-tab-bar__item--critical fd-icon-tab-bar__item--closable"
            >
                <a role="tab" class="fd-icon-tab-bar__tab" href="#" id="tab9">
                    <div class="fd-icon-tab-bar__container">
                        <span class="fd-icon-tab-bar__icon">
                            <i class="sap-icon--shipping-status" role="presentation"></i>
                        </span>
                    </div>
                    <div class="fd-icon-tab-bar__details">
                        <span class="fd-icon-tab-bar__counter">2</span>
                        <span class="fd-icon-tab-bar__label">Description</span>
                    </div>
                </a>
                <div class="fd-icon-tab-bar__button-container">
                    <button class="fd-button fd-button--transparent fd-icon-tab-bar__button" aria-label="close tab">
                        <i class="sap-icon--decline"></i>
                    </button>
                </div>
            </li>

            <li role="presentation" class="fd-icon-tab-bar__item fd-icon-tab-bar__item--overflow" style="left: 23rem">
                <div class="fd-popover">
                    <div class="fd-popover__control">
                        <button class="fd-icon-tab-bar__overflow is-active">
                            <span class="fd-icon-tab-bar__overflow-text">More</span>
                            <i class="sap-icon--slim-arrow-down" role="presentation"></i>
                        </button>
                    </div>
                    <div
                        class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--right fd-icon-tab-bar__popover-body"
                        style="top: 2.3rem"
                    >
                        <ul role="list" class="fd-list fd-list--navigation fd-list--no-border fd-icon-tab-bar__list">
                            <li
                                role="listitem"
                                tabindex="-1"
                                class="fd-list__item fd-list__item--link fd-icon-tab-bar__list-item fd-icon-tab-bar__list-item--informative fd-icon-tab-bar__list-item--closable"
                            >
                                <a tabindex="0" class="fd-list__link fd-icon-tab-bar__list-link">
                                    <span class="fd-icon-tab-bar__list-item-icon-container">
                                        <span class="fd-list__icon fd-icon-tab-bar__list-item-icon">
                                            <i class="sap-icon--letter" role="presentation"></i>
                                        </span>
                                    </span>
                                    <span class="fd-list__title fd-icon-tab-bar__list-item-title">Description</span>
                                    <span class="fd-list__counter fd-icon-tab-bar__list-item-counter">(12)</span>
                                </a>
                                <div class="fd-icon-tab-bar__button-container">
                                    <button
                                        class="fd-button fd-button--transparent fd-icon-tab-bar__button"
                                        aria-label="close tab"
                                    >
                                        <i class="sap-icon--decline"></i>
                                    </button>
                                </div>
                            </li>
                            <li
                                role="listitem"
                                tabindex="-1"
                                class="fd-list__item fd-list__item--link fd-icon-tab-bar__list-item fd-icon-tab-bar__list-item--closable"
                            >
                                <a tabindex="0" class="fd-list__link fd-icon-tab-bar__list-link">
                                    <span class="fd-icon-tab-bar__list-item-icon-container">
                                        <span class="fd-list__icon fd-icon-tab-bar__list-item-icon">
                                            <i class="sap-icon--activate" role="presentation"></i>
                                        </span>
                                    </span>
                                    <span class="fd-list__title fd-icon-tab-bar__list-item-title">Description</span>
                                    <span class="fd-list__counter fd-icon-tab-bar__list-item-counter">(227)</span>
                                </a>
                                <div class="fd-icon-tab-bar__button-container">
                                    <button
                                        class="fd-button fd-button--transparent fd-icon-tab-bar__button"
                                        aria-label="close tab"
                                    >
                                        <i class="sap-icon--decline"></i>
                                    </button>
                                </div>
                            </li>
                            <li
                                role="listitem"
                                tabindex="-1"
                                class="fd-list__item fd-list__item--link fd-icon-tab-bar__list-item fd-icon-tab-bar__list-item--positive fd-icon-tab-bar__list-item--closable"
                            >
                                <a tabindex="0" class="fd-list__link fd-icon-tab-bar__list-link">
                                    <span class="fd-icon-tab-bar__list-item-icon-container">
                                        <span class="fd-list__icon fd-icon-tab-bar__list-item-icon">
                                            <i class="sap-icon--jam" role="presentation"></i>
                                        </span>
                                    </span>
                                    <span class="fd-list__title fd-icon-tab-bar__list-item-title">Description</span>
                                    <span class="fd-list__counter fd-icon-tab-bar__list-item-counter">(0)</span>
                                </a>
                                <div class="fd-icon-tab-bar__button-container">
                                    <button
                                        class="fd-button fd-button--transparent fd-icon-tab-bar__button"
                                        aria-label="close tab"
                                    >
                                        <i class="sap-icon--decline"></i>
                                    </button>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</div>
`,U={title:"Components/Icon Tab Bar",parameters:{description:`
The Icon Tab Bar can be used for navigation within an object, or as a filter. Each tab of the component links to a different content area or view.

##Usage
**Use the icon tab bar if:**

- Your business objects need to show multiple facets at the same time.
- You want to allow the user to browse through these facets.
- You need a prominent or very visual filter on top of a list.
- You have clear-cut process steps that need to be visualized.

**Do not use the icon tab bar if:**

- You plan to use only a single tab.

##Semantic colors
Only use semantic colors if it is important for users to know that they need to take action (for example, to indicate errors or critical situations requiring action). Otherwise, use the neutral default colors. To add semantic color to a tab use a modifier class from the table below on \`fd-icon-tab-bar__item\` level.

| **Color** | **Modifier class** |
| :--------- | :---------- |
| positive &nbsp;&nbsp; | \`fd-icon-tab-bar__item--positive\` |
| negative &nbsp;&nbsp; | \`fd-icon-tab-bar__item--negative\` |
| critical &nbsp;&nbsp; | \`fd-icon-tab-bar__item--critical\` |
| informative &nbsp;&nbsp; | \`fd-icon-tab-bar__item--informative\` |

##Horizontal paddings
You can add horizontal paddings by applying a modifier class to the container. For responsive horizontal paddings (based on the screen size) add the \`fd-icon-tab-bar--responsive-paddings\` modifier class. In this case the left and right spacing will change as the screen size changes.

| **Size** | **Modifier class** |
| :--------- | :---------- |
| sm (1rem) &nbsp;&nbsp; | \`fd-icon-tab-bar--sm\` |
| md (2rem) &nbsp;&nbsp; | \`fd-icon-tab-bar--md\` |
| lg (2rem) &nbsp;&nbsp; | \`fd-icon-tab-bar--lg\` |
| xl (3rem) &nbsp;&nbsp; | \`fd-icon-tab-bar--xl\` |
| xxl (3rem) &nbsp;&nbsp; | \`fd-icon-tab-bar--xxl\` |

##Background
By default, the background for the Icon Tab Bar header and content is set to "solid". This will apply \`--sapObjectHeader_Background\` background color and \`--sapContent_HeaderShadow\` box-shadow to the header and \`--sapBackgroundColor\` to the container (panel). It can be changed to "translucent" or "transparent" using modifier classes. In translucent mode the header gets \`--sapObjectHeader_Background\` background color and the panel \`--sapGroup_ContentBackground\` background color.

| **Background** | **Modifier class** |
| :--------- | :---------- |
| solid &nbsp;&nbsp; | default |
| translucent &nbsp;&nbsp; | \`fd-icon-tab-bar--translucent\` |
| transparent &nbsp;&nbsp; | \`fd-icon-tab-bar--transparent\` |

<br><br><br>
      `,tags:["f3","theme","development"]}},a=()=>P;a.storyName="Text Only (Inline mode)";a.parameters={docs:{description:{story:"The text-only variant is one of the most common types. It allows longer labels, and can also display counters next to the text to indicate the number of items on the tab page. The labels of the tabs do not get truncated. The full text is always shown. As a result, you need to ensure that your labels do not become too long. They should still be easy to read on smaller screens. The control has the same look and feel in Cozy and Compact mode."}}};const d=()=>N;d.storyName="Text Only (Inline mode) Semantic Colors";const n=()=>D;n.storyName="Counters and Text";n.parameters={docs:{description:{story:"<code>NOTE: This is no longer recommended.</code> Counters can be shown on top of labels. In this case you need to apply the `fd-icon-tab-bar--counters` modifier class. <br> The control has the same look and feel in Cozy and Compact mode."}}};const _=()=>E;_.parameters={docs:{description:{story:"The Icon tabs are rounded tabs that can be populated with any icon. The labels in this case are omitted and counters are optional. You need to apply the `fd-icon-tab-bar--icon-only` modifier class for this type of tabs."}}};const p=()=>H;p.storyName="Icon Only Semantic Colors";const f=()=>O;f.parameters={docs:{description:{story:"To display Icon Tabs with labels and counters you need to apply the `fd-icon-tab-bar--icon` modifier class. The counters are optional and can be ommited. The label is always positioned at the bottom. If you decide to use labels, use them for all tabs. The badge is rendered at the top right hand corner of the icon container. Consider using shorter labels or text tabs (without icons), since text tabs cannot get truncated."}}};const m=()=>C;m.parameters={docs:{description:{story:"You can also use the tab bar to depict a process. In this case, each tab stands for one step. You need to add the `fd-icon-tab-bar--process` modifier class and a sibling html element with `fd-icon-tab-bar__separator` class to the tab."}}};const v=()=>I;v.parameters={docs:{description:{story:"The tab bar as a filter has two parts: <br>- An “all” tab on the left - shows the total number of items, and describes the type of item (for example, 189 Products).<br>-  Tabs for specific filters - the tab text indicates the filter attribute. It is recommended to show a counter on every tab.<br>You need to add the `fd-icon-tab-bar--filter` modifier class for this type of tabs."}}};const u=()=>A;u.parameters={docs:{description:{story:`Tabs can have an overflow to either sides of the control. Depending on if the order is fixed (process steps) or can be rearranged (tabs).
        For processes with a fixed order, an overflow to both sides is used. For tabs that can be rearranged, only one overflow will be displayed on the right side.`}}};const t=()=>T;t.storyName="Universal Icon Tab Bar Single Click Area";t.parameters={docs:{description:{story:"When there is only one click area per tab (also including tabs with sub-items), regular tabs get selected immediately after the click is released. Tabs with sub-items trigger the expansion of a menu (Popover) showing its sub-items. The parent tab title remains displayed when its child is select.\n        <br>\n        You need to apply the `fd-icon-tab-bar__item--single-click` modifier class to `fd-icon-tab-bar__item` element. The List component inside the Popover has an additional modifier class `fd-icon-tab-bar__list` to achieve the nesting (indentation) of the elements. The list menu can be borderless, with line separators (`fd-icon-tab-bar__line-separator`) or icon separators (`fd-icon-tab-bar__icon-separator`) "}}};const i=()=>S;i.storyName="Universal Icon Tab Bar Multi Click Area";i.parameters={docs:{description:{story:"In case of two click areas for tabs with sub-tabs, the behaviour for regular tabs (without sub-items) remains unchanged, like described above the tabs get selected immediately. Tabs with two click areas behave differently: when the main part of the tab is clicked, it is highlighted and then selected immediately. Clicking the second area opens a menu (Popover) containing the sub-items. Once a sub-item is clicked, the main tab is highlighted as selected. "}}};const s=()=>y;s.storyName="Badges";s.parameters={docs:{description:{story:"The Tab attention badge is applied as a visual eye-catcher to indicate a change within a Tab. <br>\n        The badge is a span element with `fd-icon-tab-bar__badge` class. It can be animated by adding an additional ` fd-icon-tab-bar__badge--animated` modifier class. In this case the badge appears for a few milliseconds and then disappears."}}};const e=()=>k;e.storyName="Responsive Paddings";e.parameters={docs:{description:{story:"For an Icon Tab Bar with responsive paddings that adjust based on the screen size add the `fd-icon-tab-bar--responsive-paddings` modifier class."}}};const o=()=>w;o.storyName="Sizes and Horizontal Paddings";o.parameters={docs:{description:{story:'You can set horizontal paddings by adding a modifier class and specifying the size of the paddings. Please refer to the "Paddings" section at the top of the page for the available sizes.'}}};const l=()=>x;l.storyName="Navigation Icon Tab Bar (Shell Navigation)";l.parameters={docs:{description:{story:`The Navigation Tab Bar is the main/default navigation displayed on the SAP Fiori launchpad home page. It offers the user an easy access to multiple pages per space. The background color of the Shell Navigation is connected the Home/Shell Header to properly differentiate the global shell navigation versus any application specific navigation. The Navigation Bar snaps to top and remains visible while scrolling. It is not visible in App view. <br>
        The implementation is based on UniversalIconTabBar with some different color parameters that are specific to Shell Bar. <br>
        If there are more Tabs than the screen can accommodate, the remaining Tabs move into an Overflow.`}}};const r=()=>g;r.storyName="Flat Navigation";r.parameters={docs:{description:{story:"The Flat Navigation offers the user an easy access to multiple pages per space.\n        As the ShellNavigation (Fiori 3), the Flat Navigation is the main/default navigation displayed on the SAP Fiori launchpad home page. It snaps to top and remains visible while scrolling and is not visible in App view.\n        The Flat Navigation Concept allows putting all entities of a single space directly into the first level of the Top Level Navigation Bar for direct access.\n        Add the `.fd-icon-tab-bar--navigation-flat` modifier class to `.fd-icon-tab-bar.fd-icon-tab-bar--navigation` to achieve the flat navigation look and feel. The items that have separators need to receive the `.fd-icon-tab-bar__item--with-separator` modifier class to `.fd-icon-tab-bar__item` class. This will append a vertical separator line on the right hand side of the item with an 1rem offset.\n        "}}};const c=()=>h;c.storyName="Tabs drag and drop";c.parameters={docs:{description:{story:`You can allow users to rearrange the tab order.
        If this feature is enabled, users can drag and drop tabs to reorder them, either directly on the tab bar or inside the overflow menu.
        It is also possible to drag and drop tabs from the tab bar to the overflow menu and vice versa.
        There're 4 classes for drag and drop:
        use \`fd-icon-tab-bar__item--dnd-preview\` to indicate the element that is being dragged;
        use \`fd-icon-tab-bar__item--dnd-hovered\` when dragging over an item. This class indicates that tab, htat is being dragged, can be inserted into the current one;
        \`fd-icon-tab-bar__item--dnd-separator\` adds a visual indicator before the tab, to which is applied, when element that is being dragged can be insterted before particular one.
        When used with the subtab, separator will be vertical;
        \`fd-icon-tab-bar__item--dnd-separator-end\` - same as above. Being applied after the tab, to which is applied

        `}}};const b=()=>B;b.storyName="Closable Tabs";b.parameters={docs:{description:{story:"For closable tabs add the `.fd-icon-tab-bar__item--closable` modifier class to the `.fd-icon-tab-bar__item`. The close button is placed inside a button container, responsible for the proper spacing between the elements.<br>Closable tabs can also be moved into the overflow. There the close button remains shown for each tab. The modifier class in this case is `.fd-icon-tab-bar__list-item--closable` added to the list item with base class `.fd-icon-tab-bar__list-item`.\n\n        "}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"() => textOnlyExampleHtml",...a.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"() => textOnlySemanticExampleHtml",...d.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"() => counterExampleHtml",...n.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:"() => iconOnlyExampleHtml",..._.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:"() => iconOnlySemanticExampleHtml",...p.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:"() => iconExampleHtml",...f.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"() => processExampleHtml",...m.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:"() => filterExampleHtml",...v.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:"() => overflowExampleHtml",...u.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"() => singleClickExampleHtml",...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"() => multiClickExampleHtml",...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"() => badgeExampleHtml",...s.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"() => respPaddingsExampleHtml",...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"() => paddingsExampleHtml",...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:"() => navigationExampleHtml",...l.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"() => navigationFlatExampleHtml",...r.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:"() => dragAndDropExampleHtml",...c.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:"() => textOnlyClosableExampleHtml",...b.parameters?.docs?.source}}};const W=["TextOnly","TextOnlySemantic","Counter","IconOnly","IconOnlySemantic","Icon","Process","Filter","Overflow","SingleClick","MultiClick","Badge","RespPaddings","Paddings","Navigation","NavigationFlat","DragAndDrop","TextOnlyClosable"];export{s as Badge,n as Counter,c as DragAndDrop,v as Filter,f as Icon,_ as IconOnly,p as IconOnlySemantic,i as MultiClick,l as Navigation,r as NavigationFlat,u as Overflow,o as Paddings,m as Process,e as RespPaddings,t as SingleClick,a as TextOnly,b as TextOnlyClosable,d as TextOnlySemantic,W as __namedExportsOrder,U as default};
