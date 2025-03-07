/* empty css               *//* empty css                 *//* empty css             *//* empty css              */const r=`<ul role="tree" aria-label="Root Tree" id="TREE1RTLND1" class="fd-tree fd-tree--no-data">
    <li role="treeitem" aria-level="1" class="fd-tree__item">
        <div class="fd-tree__item-container" tabindex="0">
            <div class="fd-tree__content">
                <span class="fd-tree__text">No data</span>
            </div>
        </div>
    </li>
</ul>
`,l=`<h3>Left multi-selection(Dependent Selections)</h3>
<ul role="tree" aria-label="Root Tree" id="TREESELL1" class="fd-tree expanded-level-1">
    <li role="treeitem" aria-level="1" aria-expanded="true" class="fd-tree__item">
        <div class="fd-tree__item-container is-selected" tabindex="0">
            <span class="fd-tree__expander is-expanded" aria-controls="TREESELL2" aria-haspopup="true" aria-label="Expand level 2" aria-expanded="true">
                <i class="fd-tree__icon sap-icon--navigation-down-arrow" role="presentation"></i>
            </span>
            <div class="fd-form-item">
                <input type="checkbox" checked class="fd-checkbox" id="Ai4ez1">
                <label tabindex="-1" aria-label="checkbox" class="fd-checkbox__label" for="Ai4ez1"><span class="fd-checkbox__checkmark" aria-hidden="true"></span></label>
            </div>
            <div class="fd-tree__content">
                <span class="fd-tree__text">Level 1</span>
            </div>
        </div>
        <ul role="group" class="fd-tree" id="TREESELL2" aria-hidden="false">
            <li role="treeitem" aria-level="2" class="fd-tree__item">
                <div class="fd-tree__item-container" tabindex="0">
                    <span class="fd-tree__expander" aria-label="Expander">
                        <i class="fd-tree__icon sap-icon--navigation-right-arrow" role="presentation"></i>
                    </span>
                    <div class="fd-form-item">
                        <input type="checkbox" class="fd-checkbox" id="Ai4ez2">
                        <label tabindex="-1" aria-label="checkbox" class="fd-checkbox__label" for="Ai4ez2">
                            <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                        </label>
                    </div>
                    <div class="fd-tree__content">
                        <span class="fd-tree__text">Level 2</span>
                    </div>
                </div>
            </li>
            <li role="treeitem" aria-level="2" class="fd-tree__item">
                <div class="fd-tree__item-container is-selected" tabindex="0">
                    <div class="fd-form-item">
                        <input type="checkbox" checked class="fd-checkbox" id="Ai4ez3">
                        <label tabindex="-1" aria-label="checkbox" class="fd-checkbox__label" for="Ai4ez3">
                            <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                        </label>
                    </div>
                    <div class="fd-tree__content">
                        <span class="fd-tree__text">Level 2</span>
                    </div>
                </div>
            </li>
            <li role="treeitem" aria-level="2" class="fd-tree__item">
                <div class="fd-tree__item-container" tabindex="0">
                    <div class="fd-form-item">
                        <input type="checkbox" class="fd-checkbox" id="Ai4ez4">
                        <label tabindex="-1" aria-label="checkbox" class="fd-checkbox__label" for="Ai4ez4">
                            <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                        </label>
                    </div>
                    <div class="fd-tree__content">
                        <span class="fd-tree__text">Level 2</span>
                    </div>
                </div>
            </li>
        </ul>
    </li>
    <li role="treeitem" aria-level="1" class="fd-tree__item">
        <div class="fd-tree__item-container" tabindex="0">
            <div class="fd-form-item">
                <input type="checkbox" class="fd-checkbox" id="Ai4ez5">
                <label tabindex="-1" aria-label="checkbox" class="fd-checkbox__label" for="Ai4ez5">
                    <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                </label>
            </div>
            <div class="fd-tree__content">
                <span class="fd-tree__text">Level 1</span>
            </div>
        </div>
    </li>
    <li role="treeitem" aria-level="1" class="fd-tree__item">
        <div class="fd-tree__item-container" tabindex="0">
            <div class="fd-form-item">
                <input type="checkbox" class="fd-checkbox" id="Ai4ez6">
                <label tabindex="-1" aria-label="checkbox" class="fd-checkbox__label" for="Ai4ez6">
                    <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                </label>
            </div>
            <div class="fd-tree__content">
                <span class="fd-tree__text">Level 1</span>
            </div>
        </div>
    </li>
</ul>

<br><br>

<h3>Right multi-selection</h3>

<ul role="tree" aria-label="Root Tree" id="TREESELCL1" class="fd-tree fd-tree--no-border expanded-level-1">
    <li role="treeitem" aria-level="1" aria-expanded="true" class="fd-tree__item">
        <div class="fd-tree__item-container is-selected" tabindex="0">
            <span class="fd-tree__expander is-expanded" aria-controls="TREESELCL2" aria-haspopup="true" aria-label="Expand level 2" aria-expanded="true">
                <i class="fd-tree__icon sap-icon--navigation-down-arrow" role="presentation"></i>
            </span>
            <div class="fd-tree__content">
                <span class="fd-tree__text">Level 1</span>
            </div>
            <div class="fd-form-item">
                <input type="checkbox" checked class="fd-checkbox" id="Ai4ezA">
                <label tabindex="-1" aria-label="checkbox" class="fd-checkbox__label" for="Ai4ezA">
                    <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                </label>
            </div>
        </div>
        <ul role="group" class="fd-tree" id="TREESELCL2" aria-hidden="false">
            <li role="treeitem" aria-level="2" class="fd-tree__item">
                <div class="fd-tree__item-container" tabindex="0">
                    <span class="fd-tree__expander" aria-label="Expander">
                        <i class="fd-tree__icon sap-icon--navigation-right-arrow" role="presentation"></i>
                    </span>
                    <div class="fd-tree__content">
                        <span class="fd-tree__text">Level 2</span>
                    </div>
                    <div class="fd-form-item">
                        <input type="checkbox" class="fd-checkbox" id="Ai4ezB">
                        <label tabindex="-1" aria-label="checkbox" class="fd-checkbox__label" for="Ai4ezB">
                            <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                        </label>
                    </div>
                </div>
            </li>
            <li role="treeitem" aria-level="2" class="fd-tree__item">
                <div class="fd-tree__item-container" tabindex="0">
                    <div class="fd-tree__content">
                        <span class="fd-tree__text">Level 2</span>
                    </div>
                    <div class="fd-form-item">
                        <input type="checkbox" class="fd-checkbox" id="Ai4ezC">
                        <label tabindex="-1" aria-label="checkbox" class="fd-checkbox__label" for="Ai4ezC">
                            <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                        </label>
                    </div>
                </div>
            </li>
            <li role="treeitem" aria-level="2" class="fd-tree__item">
                <div class="fd-tree__item-container" tabindex="0">
                    <div class="fd-tree__content">
                        <span class="fd-tree__text">Level 2</span>
                    </div>
                    <div class="fd-form-item">
                        <input type="checkbox" class="fd-checkbox" id="Ai4ezD">
                        <label tabindex="-1" aria-label="checkbox" class="fd-checkbox__label" for="Ai4ezD">
                            <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                        </label>
                    </div>
                </div>
            </li>
        </ul>
    </li>
    <li role="treeitem" aria-level="1" class="fd-tree__item">
        <div class="fd-tree__item-container is-selected" tabindex="0">
            <div class="fd-tree__content">
                <span class="fd-tree__text">Level 1</span>
            </div>
            <div class="fd-form-item">
                <input type="checkbox" checked class="fd-checkbox" id="Ai4ezEE">
                <label tabindex="-1" aria-label="checkbox" class="fd-checkbox__label" for="Ai4ezEE">
                    <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                </label>
            </div>
        </div>
    </li>
    <li role="treeitem" aria-level="1" class="fd-tree__item">
        <div class="fd-tree__item-container" tabindex="0">
            <div class="fd-tree__content">
                <span class="fd-tree__text">Level 1</span>
            </div>
            <div class="fd-form-item">
                <input type="checkbox" class="fd-checkbox" id="Ai4ezF">
                <label tabindex="-1" aria-label="checkbox" class="fd-checkbox__label" for="Ai4ezF">
                    <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                </label>
            </div>
        </div>
    </li>
</ul>

<br><br>

<h3>Left single selection</h3>

<ul role="tree" aria-label="Root Tree" id="TREESESSLL1" class="fd-tree expanded-level-1">
    <li role="treeitem" aria-level="1" aria-expanded="true" class="fd-tree__item">
        <div class="fd-tree__item-container is-selected" tabindex="0">
            <span class="fd-tree__expander is-expanded" aria-controls="TREESESSLL2" aria-haspopup="true" aria-label="Expand level 2" aria-expanded="true">
                <i class="fd-tree__icon sap-icon--navigation-down-arrow" role="presentation"></i>
            </span>
            <div class="fd-form-item">
                <input type="radio" class="fd-radio" id="pDidh761" name="radio1" checked>
                <label class="fd-radio__label" aria-label="radio button" for="pDidh761"></label>
            </div>
            <div class="fd-tree__content">
                <span class="fd-tree__text">Level 1</span>
            </div>
        </div>
        <ul role="group" class="fd-tree" id="TREESESSLL2" aria-hidden="false">
            <li role="treeitem" aria-level="2" class="fd-tree__item">
                <div class="fd-tree__item-container" tabindex="0">
                    <span class="fd-tree__expander" aria-label="Expander">
                        <i class="fd-tree__icon sap-icon--navigation-right-arrow" role="presentation"></i>
                    </span>
                    <div class="fd-form-item">
                        <input type="radio" class="fd-radio" id="pDidh7612" name="radio1">
                        <label class="fd-radio__label" aria-label="radio button" for="pDidh7612"></label>
                    </div>
                    <div class="fd-tree__content">
                        <span class="fd-tree__text">Level 2</span>
                    </div>
                </div>
            </li>
            <li role="treeitem" aria-level="2" class="fd-tree__item">
                <div class="fd-tree__item-container" tabindex="0">
                    <div class="fd-form-item">
                        <input type="radio" class="fd-radio" id="pDidh7613" name="radio1">
                        <label class="fd-radio__label" aria-label="radio button" for="pDidh7613"></label>
                    </div>
                    <div class="fd-tree__content">
                        <span class="fd-tree__text">Level 2</span>
                    </div>
                </div>
            </li>
            <li role="treeitem" aria-level="2" class="fd-tree__item">
                <div class="fd-tree__item-container" tabindex="0">
                    <div class="fd-form-item">
                        <input type="radio" class="fd-radio" id="pDidh764" name="radio3">
                        <label class="fd-radio__label" aria-label="radio button" for="pDidh764"></label>
                    </div>
                    <div class="fd-tree__content">
                        <span class="fd-tree__text">Level 2</span>
                    </div>
                </div>
            </li>
        </ul>
    </li>
    <li role="treeitem" aria-level="1" class="fd-tree__item">
        <div class="fd-tree__item-container" tabindex="0">
            <div class="fd-form-item">
            <input type="radio" class="fd-radio" id="pDidh76r4" name="radio3" disabled>
            <label class="fd-radio__label" aria-label="radio button" for="pDidh76r4"></label>
            </div>
            <div class="fd-tree__content">
                <span class="fd-tree__text">Level 1</span>
            </div>
        </div>
    </li>
    <li role="treeitem" aria-level="1" class="fd-tree__item">
        <div class="fd-tree__item-container" tabindex="0">
            <div class="fd-form-item">
                <input type="radio" class="fd-radio" id="pDidh764Y6" name="radio3" disabled>
                <label class="fd-radio__label" aria-label="radio button" for="pDidh764Y6"></label>
            </div>
            <div class="fd-tree__content">
                <span class="fd-tree__text">Level 1</span>
            </div>
        </div>
    </li>
</ul>


<h3>Tree multi selection(Independent Selections)</h3>

<ul class="fd-tree fd-tree--active fd-tree--independent-multi-selection expanded-level-1">
    <li role="treeitem" aria-level="1" aria-expanded="true" class="fd-tree__item">
        <div class="fd-tree__item-container is-selected" tabindex="0">
            <div class="fd-form-item">
                <input type="checkbox" checked class="fd-checkbox" id="Ai4ez1">
                <label tabindex="-1" aria-label="checkbox" class="fd-checkbox__label" for="Ai4ez1">
                    <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                </label>
            </div>
            <span class="fd-tree__expander is-expanded" aria-controls="TreeSelIndependent1" aria-haspopup="true" aria-label="Expand level 2" aria-expanded="true">
                <i class="fd-tree__icon sap-icon--navigation-down-arrow" role="presentation"></i>
            </span>
            <div class="fd-tree__content">
                <span class="fd-tree__text">Level 1</span>
            </div>
        </div>
        <ul role="group" class="fd-tree" id="TreeSelIndependent1" aria-hidden="false">
            <li role="treeitem" aria-level="2" class="fd-tree__item">
                <div class="fd-tree__item-container" tabindex="0">
                    <div class="fd-form-item">
                        <input type="checkbox" class="fd-checkbox" id="Ai4ez2">
                        <label tabindex="-1" aria-label="checkbox" class="fd-checkbox__label" for="Ai4ez2">
                            <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                        </label>
                    </div>
                    <span class="fd-tree__expander" aria-label="Expander">
                        <i class="fd-tree__icon sap-icon--navigation-right-arrow" role="presentation"></i>
                    </span>
                    <div class="fd-tree__content">
                        <span class="fd-tree__text">Level 2</span>
                    </div>
                </div>
            </li>
            <li role="treeitem" aria-level="2" class="fd-tree__item">
                <div class="fd-tree__item-container is-selected" tabindex="0">
                    <div class="fd-form-item">
                        <input type="checkbox" checked class="fd-checkbox" id="Ai4ez3">
                        <label tabindex="-1" aria-label="checkbox" class="fd-checkbox__label" for="Ai4ez3">
                            <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                        </label>
                    </div>
                    <div class="fd-tree__content">
                        <span class="fd-tree__text">Level 2</span>
                    </div>
                </div>
            </li>
            <li role="treeitem" aria-level="2" class="fd-tree__item">
                <div class="fd-tree__item-container" tabindex="0">
                    <div class="fd-form-item">
                        <input type="checkbox" class="fd-checkbox" id="Ai4ez4">
                        <label tabindex="-1" aria-label="checkbox" class="fd-checkbox__label" for="Ai4ez4">
                            <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                        </label>
                    </div>
                    <div class="fd-tree__content">
                        <span class="fd-tree__text">Level 2</span>
                    </div>
                </div>
            </li>
        </ul>
    </li>
    <li role="treeitem" aria-level="1" class="fd-tree__item">
        <div class="fd-tree__item-container" tabindex="0">
            <div class="fd-form-item">
                <input type="checkbox" class="fd-checkbox" id="Ai4ez5">
                <label tabindex="-1" aria-label="checkbox" class="fd-checkbox__label" for="Ai4ez5">
                    <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                </label>
            </div>
            <div class="fd-tree__content">
                <span class="fd-tree__text">Level 1</span>
            </div>
        </div>
    </li>
    <li role="treeitem" aria-level="1" class="fd-tree__item">
        <div class="fd-tree__item-container" tabindex="0">
            <div class="fd-form-item">
                <input type="checkbox" class="fd-checkbox" id="Ai4ez6">
                <label tabindex="-1" aria-label="checkbox" class="fd-checkbox__label" for="Ai4ez6">
                    <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                </label>
            </div>
            <div class="fd-tree__content">
                <span class="fd-tree__text">Level 1</span>
            </div>
        </div>
    </li>
</ul>

`,d=`<ul role="tree" aria-label="Root Tree" id="TREE6CL1" class="fd-tree expanded-level-6">
    <li role="treeitem" aria-level="1" aria-expanded="true" class="fd-tree__item">
        <div class="fd-tree__item-container fd-tree__item-container--active has-highlight-indicator has-highlight-indicator--success" tabindex="0">
            <span class="fd-tree__expander is-expanded" aria-controls="TREE6CL2" aria-haspopup="true" aria-label="Expand level 2" aria-expanded="true">
                <i class="fd-tree__icon sap-icon--navigation-down-arrow" role="presentation"></i>
            </span>
            <a href="https://sap.github.io/fundamental/" class="fd-tree__content">
                <span class="fd-tree__text">Level 1</span>
            </a>
            <i class="fd-tree__icon fd-tree__icon--navigation sap-icon--slim-arrow-right" role="presentation"></i>
        </div>
        <ul role="group" class="fd-tree" id="TREE6CL2" aria-hidden="false">
            <li role="treeitem" aria-level="2" aria-expanded="true" class="fd-tree__item">
                <div class="fd-tree__item-container has-highlight-indicator has-highlight-indicator--warning" tabindex="0">
                    <span class="fd-tree__expander is-expanded" aria-controls="TREE6CL3" aria-haspopup="true" aria-label="Expand level 3" aria-expanded="true">
                        <i class="fd-tree__icon sap-icon--navigation-down-arrow" role="presentation"></i>
                    </span>
                    <div class="fd-tree__content">
                        <span class="fd-tree__text">Level 2</span>
                    </div>
                </div>
                <ul role="group" class="fd-tree" id="TREE6CL3" aria-hidden="false">
                    <li role="treeitem" aria-level="3" aria-expanded="true" class="fd-tree__item">
                        <div class="fd-tree__item-container fd-tree__item-container--active has-highlight-indicator has-highlight-indicator--error" tabindex="0">
                            <span class="fd-tree__expander is-expanded" aria-controls="TREE6CL4" aria-haspopup="true" aria-label="Expand level 4" aria-expanded="true">
                                <i class="fd-tree__icon sap-icon--navigation-down-arrow" role="presentation"></i>
                            </span>
                            <a href="https://sap.github.io/fundamental/" class="fd-tree__content">
                                <span class="fd-tree__text">Level 3</span>
                            </a>
                            <i class="fd-tree__icon fd-tree__icon--navigation sap-icon--slim-arrow-right" role="presentation"></i>
                        </div>
                        <ul role="group" class="fd-tree" id="TREE6CL4" aria-hidden="false">
                            <li role="treeitem" aria-level="4" aria-expanded="true" class="fd-tree__item">
                                <div class="fd-tree__item-container has-highlight-indicator" tabindex="0">
                                    <span class="fd-tree__expander is-expanded" aria-controls="TREE6CL5" aria-haspopup="true" aria-label="Expand level 5" aria-expanded="true">
                                        <i class="fd-tree__icon sap-icon--navigation-down-arrow" role="presentation"></i>
                                    </span>
                                    <div class="fd-tree__content">
                                        <span class="fd-tree__text">Level 4</span>
                                    </div>
                                </div>
                                <ul role="group" class="fd-tree" id="TREE6CL5" aria-hidden="false">
                                    <li role="treeitem" aria-level="5" aria-expanded="true"  class="fd-tree__item">
                                        <div class="fd-tree__item-container" tabindex="0">
                                            <span class="fd-tree__expander is-expanded" aria-controls="TREE6CL6" aria-haspopup="true" aria-label="Expand level 6" aria-expanded="true">
                                                <i class="fd-tree__icon sap-icon--navigation-down-arrow" role="presentation"></i>
                                            </span>
                                            <div class="fd-tree__content">
                                                <span class="fd-tree__text">Level 5</span>
                                            </div>
                                        </div>
                                        <ul role="group" class="fd-tree" id="TREE6CL6" aria-hidden="false">
                                            <li role="treeitem" aria-level="6" aria-expanded="true" class="fd-tree__item">
                                                <div class="fd-tree__item-container" tabindex="0">
                                                    <span class="fd-tree__expander is-expanded" aria-controls="TREE6CL7" aria-haspopup="true" aria-label="Expand level 7" aria-expanded="true">
                                                        <i class="fd-tree__icon sap-icon--navigation-down-arrow" role="presentation"></i>
                                                    </span>
                                                    <div class="fd-tree__content">
                                                        <span class="fd-tree__text">Level 6</span>
                                                    </div>
                                                </div>
                                                <ul role="group" class="fd-tree" id="TREE6CL7" aria-hidden="false">
                                                    <li role="treeitem" aria-level="7" class="fd-tree__item">
                                                        <div class="fd-tree__item-container" tabindex="0">
                                                            <span class="fd-tree__expander" aria-label="Expander">
                                                                <i class="fd-tree__icon sap-icon--navigation-right-arrow" role="presentation"></i>
                                                            </span>
                                                            <div class="fd-tree__content">
                                                                <span class="fd-tree__text">Level 7</span>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li role="treeitem" aria-level="7" class="fd-tree__item">
                                                        <div class="fd-tree__item-container" tabindex="0">
                                                            <div class="fd-tree__content">
                                                                <span class="fd-tree__text">Level 7</span>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li role="treeitem" aria-level="6" class="fd-tree__item">
                                                <div class="fd-tree__item-container has-highlight-indicator" tabindex="0">
                                                    <div class="fd-tree__content">
                                                        <span class="fd-tree__text">Level 6</span>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </li>
                                    <li role="treeitem" aria-level="5" class="fd-tree__item">
                                        <div class="fd-tree__item-container has-highlight-indicator has-highlight-indicator--success" tabindex="0">
                                            <div class="fd-tree__content">
                                                <span class="fd-tree__text">Level 5</span>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                            <li role="treeitem" aria-level="4" class="fd-tree__item">
                                <div class="fd-tree__item-container fd-tree__item-container--active" tabindex="0">
                                    <a href="https://sap.github.io/fundamental/" class="fd-tree__content">
                                        <span class="fd-tree__text">Level 4</span>
                                    </a>
                                    <i class="fd-tree__icon fd-tree__icon--navigation sap-icon--slim-arrow-right" role="presentation"></i>
                                </div>
                            </li>
                        </ul>
                    </li>
                    <li role="treeitem" aria-level="3" class="fd-tree__item">
                        <div class="fd-tree__item-container fd-tree__item-container--active" tabindex="0">
                            <a href="https://sap.github.io/fundamental/" class="fd-tree__content">
                                <span class="fd-tree__text">Level 3</span>
                            </a>
                            <i class="fd-tree__icon fd-tree__icon--navigation sap-icon--slim-arrow-right" role="presentation"></i>
                        </div>
                    </li>
                </ul>
            </li>
            <li role="treeitem" aria-level="2" class="fd-tree__item">
                <div class="fd-tree__item-container" tabindex="0">
                    <div class="fd-tree__content">
                        <span class="fd-tree__text">Level 2</span>
                    </div>
                </div>
            </li>
        </ul>
    </li>
    <li role="treeitem" aria-level="1" class="fd-tree__item">
        <div class="fd-tree__item-container fd-tree__item-container--active has-highlight-indicator has-highlight-indicator--success is-navigated" tabindex="0">
            <a href="https://sap.github.io/fundamental/" class="fd-tree__content">
                <span class="fd-tree__text">Level 1</span>
            </a>
            <i class="fd-tree__icon fd-tree__icon--navigation sap-icon--slim-arrow-right" role="presentation"></i>
        </div>
    </li>
    <li role="treeitem" aria-level="1" class="fd-tree__item">
        <div class="fd-tree__item-container has-highlight-indicator has-highlight-indicator--success" tabindex="0">
            <a href="https://sap.github.io/fundamental/" class="fd-tree__content">
                <span class="fd-tree__text">Level 1</span>
            </a>
            <i class="fd-tree__icon fd-tree__icon--navigation sap-icon--slim-arrow-right" role="presentation"></i>
        </div>
    </li>
</ul>
`,o=`<ul role="tree" aria-label="Root Tree" id="TREE3L1" class="fd-tree expanded-level-3">
    <li role="treeitem" aria-level="1" aria-expanded="true" class="fd-tree__item">
        <div class="fd-tree__item-container has-highlight-indicator" tabindex="0">
            <span class="fd-tree__expander is-expanded" aria-controls="TREE3L2" aria-haspopup="true" aria-label="Expand level 2" aria-expanded="true">
                <i class="fd-tree__icon sap-icon--navigation-down-arrow" role="presentation"></i>
            </span>
            <div class="fd-tree__content">
                <span class="fd-tree__text">Level 1</span>
            </div>
        </div>
        <ul role="group" class="fd-tree" id="TREE3L2" aria-hidden="false">
            <li role="treeitem" aria-level="2" aria-expanded="true" class="fd-tree__item">
                <div class="fd-tree__item-container has-highlight-indicator has-highlight-indicator--warning" tabindex="0">
                    <span class="fd-tree__expander is-expanded" aria-controls="TREE3L3" aria-haspopup="true" aria-label="Expand level 3" aria-expanded="true">
                        <i class="fd-tree__icon sap-icon--navigation-down-arrow" role="presentation"></i>
                    </span>
                    <div class="fd-tree__content">
                        <span class="fd-tree__text">Level 2</span>
                    </div>
                </div>
                <ul role="group" class="fd-tree" id="TREE3L3" aria-hidden="false">
                    <li role="treeitem" aria-level="3" aria-expanded="true" class="fd-tree__item">
                        <div class="fd-tree__item-container has-highlight-indicator has-highlight-indicator--error" tabindex="0">
                            <span class="fd-tree__expander is-expanded" aria-controls="TREE3L4" aria-haspopup="true" aria-label="Expand level 4" aria-expanded="true">
                                <i class="fd-tree__icon sap-icon--navigation-down-arrow" role="presentation"></i>
                            </span>
                            <div class="fd-tree__content">
                                <span class="fd-tree__text">Level 3</span>
                            </div>
                        </div>
                        <ul role="group" class="fd-tree" id="TREE3L4" aria-hidden="false">
                            <li role="treeitem" aria-level="4" class="fd-tree__item">
                                <div class="fd-tree__item-container has-highlight-indicator has-highlight-indicator--success" tabindex="0">
                                    <span class="fd-tree__expander" aria-label="Expander">
                                        <i class="fd-tree__icon sap-icon--navigation-right-arrow" role="presentation"></i>
                                    </span>
                                    <div class="fd-tree__content">
                                        <span class="fd-tree__text">Level 4</span>
                                    </div>
                                </div>
                            </li>
                            <li role="treeitem" aria-level="4" class="fd-tree__item">
                                <div class="fd-tree__item-container" tabindex="0">
                                    <div class="fd-tree__content">
                                        <span class="fd-tree__text">Level 4</span>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </li>
                    <li role="treeitem" aria-level="3" class="fd-tree__item">
                        <div class="fd-tree__item-container" tabindex="0">
                            <div class="fd-tree__content">
                                <span class="fd-tree__text">Level 3</span>
                            </div>
                        </div>
                    </li>
                </ul>
            </li>
            <li role="treeitem" aria-level="2" class="fd-tree__item">
                <div class="fd-tree__item-container" tabindex="0">
                    <div class="fd-tree__content">
                        <span class="fd-tree__text">Level 2</span>
                    </div>
                </div>
            </li>
        </ul>
    </li>
    <li role="treeitem" aria-level="1" class="fd-tree__item">
        <div class="fd-tree__item-container" tabindex="0">
            <div class="fd-tree__content">
                <span class="fd-tree__text">Level 1</span>
            </div>
        </div>
    </li>
    <li role="treeitem" aria-level="1" class="fd-tree__item">
        <div class="fd-tree__item-container" tabindex="0">
            <div class="fd-tree__content">
                <span class="fd-tree__text">Level 1</span>
            </div>
        </div>
    </li>
</ul>
`,c=`<ul role="tree" aria-label="Root Tree" id="TREE2L1" class="fd-tree fd-tree--no-border expanded-level-2">
    <li role="treeitem" aria-level="1" aria-expanded="true" class="fd-tree__item">
        <div class="fd-tree__item-container" tabindex="0">
            <span class="fd-tree__expander is-expanded" aria-controls="TREE2L2" aria-haspopup="true" aria-label="Expand level 2" aria-expanded="true">
                <i class="fd-tree__icon sap-icon--navigation-down-arrow" role="presentation"></i>
            </span>
            <div class="fd-tree__content">
                <i class="fd-tree__icon sap-icon--e-care" role="presentation"></i>
                <span class="fd-tree__text">Level 1</span>
            </div>
            <button aria-label="Edit button" class="fd-button fd-button--transparent fd-tree__button">
                <i class="sap-icon--edit" role="presentation"></i>
            </button>
            <button aria-label="Delete button" class="fd-button fd-button--transparent fd-tree__button">
                <i class="sap-icon--decline" role="presentation"></i>
            </button>
        </div>
        <ul role="group" class="fd-tree" id="TREE2L2" aria-hidden="false">
            <li role="treeitem" aria-level="2" aria-expanded="true" class="fd-tree__item">
                <div class="fd-tree__item-container" tabindex="0">
                    <span class="fd-tree__expander is-expanded" aria-controls="TREE2L3" aria-haspopup="true" aria-label="Expand level 3" aria-expanded="true">
                        <i class="fd-tree__icon sap-icon--navigation-down-arrow" role="presentation"></i>
                    </span>
                    <div class="fd-tree__content">
                        <i class="fd-tree__icon sap-icon--account" role="presentation"></i>
                        <span class="fd-tree__text">Level 2</span>
                    </div>
                    <button aria-label="Edit button" class="fd-button fd-button--transparent fd-tree__button">
                        <i class="sap-icon--edit" role="presentation"></i>
                    </button>
                    <button aria-label="Delete button" class="fd-button fd-button--transparent fd-tree__button">
                        <i class="sap-icon--decline" role="presentation"></i>
                    </button>
                </div>
                <ul role="group" class="fd-tree" id="TREE2L3" aria-hidden="false">
                    <li role="treeitem" aria-level="3" class="fd-tree__item">
                        <div class="fd-tree__item-container" tabindex="0">
                            <span class="fd-tree__expander" aria-label="Expander">
                                <i class="fd-tree__icon sap-icon--navigation-right-arrow" role="presentation"></i>
                            </span>
                            <div class="fd-tree__content">
                                <i class="fd-tree__icon sap-icon--product" role="presentation"></i>
                                <span class="fd-tree__text">Level 3</span>
                            </div>
                            <button aria-label="Edit button" class="fd-button fd-button--transparent fd-tree__button">
                                <i class="sap-icon--edit" role="presentation"></i>
                            </button>
                            <button aria-label="Delete button" class="fd-button fd-button--transparent fd-tree__button">
                                <i class="sap-icon--decline" role="presentation"></i>
                            </button>
                        </div>
                    </li>
                    <li role="treeitem" aria-level="3" class="fd-tree__item">
                        <div class="fd-tree__item-container" tabindex="0">
                            <div class="fd-tree__content">
                                <i class="fd-tree__icon sap-icon--history" role="presentation"></i>
                                <span class="fd-tree__text">Level 3</span>
                            </div>
                            <button aria-label="Edit button" class="fd-button fd-button--transparent fd-tree__button">
                                <i class="sap-icon--edit" role="presentation"></i>
                            </button>
                            <button aria-label="Delete button" class="fd-button fd-button--transparent fd-tree__button">
                                <i class="sap-icon--decline" role="presentation"></i>
                            </button>
                        </div>
                    </li>
                </ul>
            </li>
            <li role="treeitem" aria-level="2" class="fd-tree__item">
                <div class="fd-tree__item-container" tabindex="0">
                    <div class="fd-tree__content">
                        <i class="fd-tree__icon sap-icon--competitor" role="presentation"></i>
                        <span class="fd-tree__text">Level 2</span>
                    </div>
                    <button aria-label="Edit button" class="fd-button fd-button--transparent fd-tree__button">
                        <i class="sap-icon--edit" role="presentation"></i>
                    </button>
                    <button aria-label="Delete button" class="fd-button fd-button--transparent fd-tree__button">
                        <i class="sap-icon--decline" role="presentation"></i>
                    </button>
                </div>
            </li>
        </ul>
    </li>
    <li role="treeitem" aria-level="1" class="fd-tree__item">
        <div class="fd-tree__item-container" tabindex="0">
            <div class="fd-tree__content">
                <i class="fd-tree__icon sap-icon--batch-payments" role="presentation"></i>
                <span class="fd-tree__text">Level 1</span>
            </div>
            <button aria-label="Edit button" class="fd-button fd-button--transparent fd-tree__button">
                <i class="sap-icon--edit" role="presentation"></i>
            </button>
            <button aria-label="Delete button" class="fd-button fd-button--transparent fd-tree__button">
                <i class="sap-icon--decline" role="presentation"></i>
            </button>
        </div>
    </li>
    <li role="treeitem" aria-level="1" class="fd-tree__item">
        <div class="fd-tree__item-container" tabindex="0">
            <div class="fd-tree__content">
                <i class="fd-tree__icon sap-icon--favorite" role="presentation"></i>
                <span class="fd-tree__text">Level 1</span>
            </div>
            <button aria-label="Edit button" class="fd-button fd-button--transparent fd-tree__button">
                <i class="sap-icon--edit" role="presentation"></i>
            </button>
            <button aria-label="Delete button" class="fd-button fd-button--transparent fd-tree__button">
                <i class="sap-icon--decline" role="presentation"></i>
            </button>
        </div>
    </li>
</ul>
`,_=`<ul role="tree" aria-label="Root Tree" id="TREE1L1" class="fd-tree expanded-level-1">
    <li role="treeitem" aria-level="1" aria-expanded="true" class="fd-tree__item">
        <div class="fd-tree__item-container" tabindex="0">
            <span class="fd-tree__expander is-expanded" aria-controls="TREE1L2" aria-haspopup="true" aria-label="Expand level 2" aria-expanded="true">
                <i class="fd-tree__icon sap-icon--navigation-down-arrow" role="presentation"></i>
            </span>
            <div class="fd-tree__content">
                <span class="fd-tree__text">Level 1</span>
            </div>
        </div>
        <ul role="group" class="fd-tree" id="TREE1L2" aria-hidden="false">
            <li role="treeitem" aria-level="2" class="fd-tree__item">
                <div class="fd-tree__item-container" tabindex="0">
                    <span class="fd-tree__expander" aria-label="Expander">
                        <i class="fd-tree__icon sap-icon--navigation-right-arrow" role="presentation"></i>
                    </span>
                    <div class="fd-tree__content">
                        <span class="fd-tree__text">Level 2</span>
                    </div>
                </div>
            </li>
            <li role="treeitem" aria-level="2" class="fd-tree__item">
                <div class="fd-tree__item-container" tabindex="0">
                    <div class="fd-tree__content">
                        <span class="fd-tree__text">Level 2</span>
                    </div>
                </div>
            </li>
            <li role="treeitem" aria-level="2" class="fd-tree__item">
                <div class="fd-tree__item-container" tabindex="0">
                    <div class="fd-tree__content">
                        <span class="fd-tree__text">Level 2</span>
                    </div>
                </div>
            </li>
        </ul>
    </li>
    <li role="treeitem" aria-level="1" class="fd-tree__item">
        <div class="fd-tree__item-container" tabindex="0">
            <div class="fd-tree__content">
                <span class="fd-tree__text">Level 1</span>
            </div>
        </div>
    </li>
    <li role="treeitem" aria-level="1" class="fd-tree__item">
        <div class="fd-tree__item-container" tabindex="0">
            <div class="fd-tree__content">
                <span class="fd-tree__text">Level 1 with very long text that does not wrap ... perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</span>
            </div>
        </div>
    </li>
    <li role="treeitem" aria-level="1" class="fd-tree__item">
        <div class="fd-tree__item-container" tabindex="0">
            <div class="fd-tree__content fd-tree__content--wrap">
                <span class="fd-tree__text">Level 1 with very long text and wrapping behaviour ... perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</span>
            </div>
        </div>
    </li>
</ul>`;const m={title:"Components/Tree",parameters:{description:`Tree allows the user to display and work with a hierarchical set of items. Trees are mostly used in the master list for a master-detail scenario using the **Flexible Column Layout** and in **Popovers** or **Dialogs**. In certain use cases, they can also be used in the **Dynamic Page Layout**.
        Items that contain additional items are called nodes, while items that do not contain any other items are called leaves. If available, a single top-most node is called a root node. Apart from the hierarchical structure of its nodes and leaves, a tree is quite similar to a **List**.

##Usage
**Use the tree if:**

- You need to display the key identifier of hierarchically structured items (for example in the first column of the **Flexible Column Layout**.
- Selecting one or more items out of a set of hierarchically structured items is a main use case.
- The hierarchy has a restricted number of levels (up to about 12, depending on the content) and items (around 200).
- You want to have only one implementation for all devices.


**Do not use the tree if:**

- The main use case is to select one item from a very small number of non-hierarchical items, without viewing additional details. In this case, a **Select** or **Combobox Input** might be more appropriate.
- Items are not structured hierarchically. Use a **List** instead.
- The hierarchy turns out to have only two levels. In this case, use a **grouped list**.
- The hierarchy turns out to be just a categorization based on several details of the item. In this case, an **an analytical table** provides multi-level grouping. Note that the analytical table is not fully responsive. It is only available for desktops and tablets, so you will need to take an adaptive approach by offering an additional UI for smartphones.

##Behaviour
The tree is like a list containing hierarchical data. It acts as a container for items, with the possibility to expand and collapse nodes. The tree changes the indentation per level dynamically when the user expands a node, based on number of levels currently showing.
The root tree contains a \`expanded-level-*\` class which keeps track of the current expanded level. The indentation rules are the same for compact and cozy mode.

The default behaviour of the list item is that it does not wrap. To enable wrapping, add the \`fd-tree__content--wrap\` modifier class to the \`fd-tree__content\` element.


##States
By default, tree items are not interactive; however, there are a few ways to add states (hover, selected, active) depending on the status of the items.

State | Modifier/Class | Description
:----- | :-------------- | :-----------------
Active | \`fd-tree--active\` | If all tree items are navigable, add the modifier class to the main element.
Active | \`fd-tree__item-container--active\`&nbsp;&nbsp;&nbsp; | If only certain tree items are navigable, add the modifier class to the container.
Selected | \`is-selected\` | If tree items contain single and multiple selection (radio buttons and checkboxes), add the class to the container.
Navigated&nbsp;&nbsp;&nbsp; | \`is-navigated\` | If a certain tree item has been previously navigated, add the class to the container.

<br>
`,tags:["f3","a11y","theme","development"]}},t=()=>_;t.parameters={docs:{description:{story:"\nThe primary tree component displays level 1 expanded to show level 2, which is indented by 1.5rem. Only the root tree (ul element) needs to have the `expanded-level-*` modifier class to indicate which level is currently expanded."}}};const n=()=>c;n.parameters={docs:{description:{story:"\nTree can be displayed without borders. To remove the borders from the first level items, add the `fd-tree--no-border` modifier class to the root tree. Additionally, tree list items can display actions, which are added as children of the `fd-tree__item-container` class.\n\n####Icons\nIcons can be added before and/or after the text as children of the `fd-tree__content` class.\n        "}}};const e=()=>o;e.storyName="Highlight indicators";e.parameters={docs:{description:{story:`
Tree can display highlight indicators on tree items to indicate a status. In this example, each level indents by 0.5rem more than the previous level. For example, level 2 indents by 0.5, level 3 by 1rem and level 4 by 1.5rem (up to level 6).


To display tree items with highlight indicators, add the \`has-highlight-indicator--*\` modifier class to the \`fd-tree__item-container\` element.

**The semantic states of highlight indicators are:**

State | Modifier class
:------ | :------------------
Default | \` has-highlight-indicator\`
Error | \` has-highlight-indicator--error\`
Success | \` has-highlight-indicator--success\`
Warning | \` has-highlight-indicator--warning\`

`}}};const i=()=>d;i.parameters={docs:{description:{story:"\nTree can be displayed with navigation links by anchoring the `href` attribute with the `fd-tree__content` class. If only a subset of the tree items is navigable, you should indicate them with navigation arrows.\n\n####Navigation arrows\nTo display navigation arrows in tree items, create an element with `fd-tree__icon` and `fd-tree__icon--navigation` classes inside `fd-tree__item-container` with the `fd-tree__item-container--active` modifier class applied.\n\n**If all items are navigable:** Do not display arrows at all. In this case, add the `fd-tree--active` modifier class to the root tree. This will add states (hover, selected, active) to all tree items.\n\n**If an item has been navigated:** When a user has navigated to an item but has since moved onto another item, you can indicate that it has been navigated to by adding the `is-navigated` class to the `fd-tree__item-container` element.\n\n**Note:** In this example, each level indents by 0.25rem more than the previous level (up to level 12).\n\n"}}};const s=()=>l;s.parameters={docs:{description:{story:"\nTree can be displayed with checkboxes, allowing the user to select multiple items. To display selected tree items, add the `is-selected` class to the `fd-tree__item-container` element.\n\n####Form items\nForm items can be added before or after the `fd-tree__content` element. The `fd-tree__form-item ` class must be added together with the `fd-form-item` element.\n\n- Multi-selection: use **Checkboxes**\n- Single selection: use **Radio buttons**\n\n"}}};const a=()=>r;a.storyName="No data";a.parameters={docs:{description:{story:"\nIf there is no data to display, add the `fd-tree--no-data` modifier class to the root tree.\n"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"() => primaryExampleHtml",...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"() => borderlessExampleHtml",...n.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"() => highlightIndicatorsExampleHtml",...e.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"() => navigableExampleHtml",...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"() => selectionExampleHtml",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"() => treeWithNoDataExampleHtml",...a.parameters?.docs?.source}}};const b=["Primary","Borderless","HighlightIndicators","Navigable","Selection","TreeWithNoData"];export{n as Borderless,e as HighlightIndicators,i as Navigable,t as Primary,s as Selection,a as TreeWithNoData,b as __namedExportsOrder,m as default};
