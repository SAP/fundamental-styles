/* empty css               *//* empty css             *//* empty css                *//* empty css              *//* empty css                    */const ps={title:"Components/Cx Side Navigation",parameters:{description:`The Side Navigation can display structures of up to three levels.
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
- Third level items do not display an icon and are indented by 2 rem (32px)`,tags:["cx","theme"]}},s=()=>`<div class="fdx-side-nav" style="max-height: 500px;">
    <nav class="fdx-side-nav__main-navigation" aria-label="Main Menu">
        <ul class="fdx-nested-list level-1">
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--home"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link is-selected" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--calendar"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--employee"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--activities"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--lightbulb"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--history"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--future"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--activities"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--lead"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--notes"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--map"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--log"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--phone"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--product"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
        </ul>
    </nav>
    <nav class="fdx-side-nav__utility" aria-label="Utility Menu">
        <ul class="fdx-nested-list level-1">
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--compare"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--chain-link"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
        </ul>
    </nav>
</div>
`;s.storyName="Cosy Wide With Icon, 1 Level";s.parameters={docs:{story:{iframeHeight:400},description:{story:`
        `}}};const e=()=>`<div class="fdx-side-nav">
    <nav class="fdx-side-nav__main-navigation" aria-label="Main Menu">
        <ul class="fdx-nested-list fdx-nested-list--text-only level-1" aria-label="Main Menu">
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link is-selected" href="#">
                    <div class="fdx-nested-list__link-container">
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            
        </ul>
    </nav>
    <nav class="fdx-side-nav__utility" aria-label="Utility Menu">
        <ul class="fdx-nested-list fdx-nested-list--text-only level-1" aria-label="Utility Menu">
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
        </ul>
    </nav>
</div>
`;e.storyName="Cosy Wide Text Only, 1 Level";e.parameters={docs:{story:{iframeHeight:400},description:{story:"<b>Important: </b>This type of Side Navigation does not have <code>Narrow</code> variant."}}};const o=()=>`<div class="fdx-side-nav fdx-side-nav--dynamic-width" style="max-height: 500px;">
    <nav class="fdx-side-nav__main-navigation" aria-label="Main Menu">
        <ul class="fdx-nested-list level-1">
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--home"></i>
                        <span class="fdx-nested-list__title">Overview</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link is-selected" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--calendar"></i>
                        <span class="fdx-nested-list__title">Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--employee"></i>
                        <span class="fdx-nested-list__title">Sed do eiusmod tempor incididunt ut labore</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--activities"></i>
                        <span class="fdx-nested-list__title">Nemo enim ipsam</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--lightbulb"></i>
                        <span class="fdx-nested-list__title">Neque porro quisquam est, qui dolorem ipsum</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--history"></i>
                        <span class="fdx-nested-list__title">Quis autem vel eum iure</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--future"></i>
                        <span class="fdx-nested-list__title">Excepteur sint occaecat cupidatat</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--activities"></i>
                        <span class="fdx-nested-list__title">Ut enim ad minima veniam</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--lead"></i>
                        <span class="fdx-nested-list__title">Neque porro quisquam</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--notes"></i>
                        <span class="fdx-nested-list__title">Excepteur sint occaecat cupidatat</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--map"></i>
                        <span class="fdx-nested-list__title">Neque porro quisquam</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--log"></i>
                        <span class="fdx-nested-list__title">Ut enim ad minima veniam</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--phone"></i>
                        <span class="fdx-nested-list__title">Excepteur sint occaecat cupidatat</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--product"></i>
                        <span class="fdx-nested-list__title">Ut enim ad minima veniam</span>
                    </div>
                </a>
            </li>
        </ul>
    </nav>
    <nav class="fdx-side-nav__utility" aria-label="Utility Menu">
        <ul class="fdx-nested-list level-1">
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--compare"></i>
                        <span class="fdx-nested-list__title">Duis aute irure dolor </span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--chain-link"></i>
                        <span class="fdx-nested-list__title">Neque porro quisquam</span>
                    </div>
                </a>
            </li>
        </ul>
    </nav>
</div>
`;o.parameters={docs:{story:{iframeHeight:400},description:{story:`Side Navigation can react dynamically to long label texts in navigational items. In such case the width of the Side Navigation is adapted by the longest label. The label does not wrap or truncate. Use the modifier class <code>.fdx-side-nav--dynamic-width</code> for Side Navigation with dynamic width.

        `}}};const i=()=>`<div class="fdx-side-nav">
    <nav class="fdx-side-nav__main-navigation" aria-label="Main Menu">
        <ul class="fdx-nested-list fdx-nested-list--text-only level-1">
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <button class="fdx-nested-list__link" aria-expanded="true" aria-label="Expand Level 2">
                    <div class="fdx-nested-list__link-container">
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                        <i class="fdx-nested-list__arrow sap-icon--navigation-down-arrow" role="presentation"></i>
                    </div>
                </button>
                <ul class="fdx-nested-list level-2" aria-hidden="false">
                    <li class="fdx-nested-list__item">
                        <button class="fdx-nested-list__link is-selected" aria-expanded="true" aria-label="Expand Level 3">
                            <div class="fdx-nested-list__link-container">
                                <span class="fdx-nested-list__title">Level 2 Item</span>
                                <i class="fdx-nested-list__arrow sap-icon--navigation-down-arrow" role="presentation"></i>
                            </div>
                        </button>
                        <ul class="fdx-nested-list level-3" aria-hidden="false">
                            <li class="fdx-nested-list__item">
                                <a class="fdx-nested-list__link" href="#">
                                    <div class="fdx-nested-list__link-container">
                                        <span class="fdx-nested-list__title">Level 3 Item</span>
                                    </div>
                                </a>
                            </li>
                            <li class="fdx-nested-list__item">
                                <a class="fdx-nested-list__link" href="#">
                                    <div class="fdx-nested-list__link-container">
                                        <span class="fdx-nested-list__title">Level 3 Item</span>
                                    </div>
                                </a>
                            </li>
                            <li class="fdx-nested-list__item">
                                <a class="fdx-nested-list__link is-selected" href="#">
                                    <div class="fdx-nested-list__link-container">
                                        <span class="fdx-nested-list__title">Level 3 Item</span>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li class="fdx-nested-list__item">
                        <a class="fdx-nested-list__link" href="#">
                            <div class="fdx-nested-list__link-container">
                                <span class="fdx-nested-list__title">Level 2 Item</span>
                            </div>
                        </a>
                    </li>
                    <li class="fdx-nested-list__item">
                        <a class="fdx-nested-list__link" href="#">
                            <div class="fdx-nested-list__link-container">
                                <span class="fdx-nested-list__title">Level 3 Item</span>
                            </div>
                        </a>
                    </li>
                </ul>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
        </ul>
    </nav>
    <nav class="fdx-side-nav__utility" aria-label="Utility Menu">
        <ul class="fdx-nested-list fdx-nested-list--text-only level-1" aria-label="Utility Menu">
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
        </ul>
    </nav>
</div>
`;i.storyName="Cosy Wide Text Only, 3 Levels";i.parameters={docs:{story:{iframeHeight:400},description:{story:`<b>Important: </b>This type of Side Navigation does not have <code>Narrow</code> variant.
        `}}};const n=()=>`<div class="fdx-side-nav">
    <nav class="fdx-side-nav__main-navigation" aria-label="Main Menu">
        <ul class="fdx-nested-list level-1" aria-labelledby="EX400H1">
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--home"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--map"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <button class="fdx-nested-list__link" aria-expanded="true" aria-label="Expand Level 2">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--calendar"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                        <i class="fdx-nested-list__arrow sap-icon--navigation-down-arrow" role="presentation"></i>
                    </div>
                </button>
                <ul class="fdx-nested-list level-2" aria-hidden="false">
                    <li class="fdx-nested-list__item">
                        <button class="fdx-nested-list__link is-selected" aria-expanded="true" aria-label="Expand Level 3">
                            <div class="fdx-nested-list__link-container">
                                <span class="fdx-nested-list__title">Level 2 Item</span>
                                <i class="fdx-nested-list__arrow sap-icon--navigation-down-arrow" role="presentation"></i>
                            </div>
                        </button>
                        <ul class="fdx-nested-list level-3" aria-hidden="false">
                            <li class="fdx-nested-list__item">
                                <a class="fdx-nested-list__link" href="#">
                                    <div class="fdx-nested-list__link-container">
                                        <span class="fdx-nested-list__title">Level 3 Item</span>
                                    </div>
                                </a>
                            </li>
                            <li class="fdx-nested-list__item">
                                <a class="fdx-nested-list__link is-selected" href="#">
                                    <div class="fdx-nested-list__link-container">
                                        <span class="fdx-nested-list__title">Level 3 Item</span>
                                    </div>
                                </a>
                            </li>
                            <li class="fdx-nested-list__item">
                                <a class="fdx-nested-list__link" href="#">
                                    <div class="fdx-nested-list__link-container">
                                        <span class="fdx-nested-list__title">Level 3 Item</span>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li class="fdx-nested-list__item">
                        <a class="fdx-nested-list__link" href="#">
                            <div class="fdx-nested-list__link-container">
                                <span class="fdx-nested-list__title">Level 2 Item</span>
                            </div>
                        </a>
                    </li>
                    <li class="fdx-nested-list__item">
                        <a class="fdx-nested-list__link" href="#">
                            <div class="fdx-nested-list__link-container">
                                <span class="fdx-nested-list__title">Level 2 Item</span>
                            </div>
                        </a>
                    </li>
                </ul>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--activities"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
        </ul>
    </nav>
    <nav class="fdx-side-nav__utility" aria-label="Utility Menu">
        <ul class="fdx-nested-list level-1" aria-label="Utility Menu">
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--compare"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--chain-link"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
        </ul>
    </nav>
</div>
`;n.storyName="Cosy Wide With Icons, 3 Levels, Collapse Only";n.parameters={docs:{story:{iframeHeight:550},description:{story:`
        `}}};const l=()=>`<div class="fdx-side-nav">
    <nav class="fdx-side-nav__main-navigation" aria-label="Main Menu">
        <ul class="fdx-nested-list level-1" aria-labelledby="EX400H1">
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--home"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--map"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <div class="fdx-nested-list__link" aria-expanded="true" aria-label="Expand Level 2">
                    <a class="fdx-nested-list__link-container" href="#">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--calendar"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </a>
                    <button class="fdx-nested-list__button">
                        <i class="sap-icon--navigation-down-arrow" role="presentation"></i>
                    </button>
                </div>
                <ul class="fdx-nested-list level-2" aria-hidden="false">
                    <li class="fdx-nested-list__item">
                        <div class="fdx-nested-list__link is-selected" aria-expanded="true" aria-label="Expand Level 3">
                            <a class="fdx-nested-list__link-container" href="#">
                                <span class="fdx-nested-list__title">Level 2 Item</span>
                            </a>
                            <button class="fdx-nested-list__button">
                                <i class="sap-icon--navigation-down-arrow" role="presentation"></i>
                            </button>
                        </div>
                        <ul class="fdx-nested-list level-3" aria-hidden="false">
                            <li class="fdx-nested-list__item">
                                <a class="fdx-nested-list__link" href="#">
                                    <div class="fdx-nested-list__link-container">
                                        <span class="fdx-nested-list__title">Level 3 Item</span>
                                    </div>
                                </a>
                            </li>
                            <li class="fdx-nested-list__item">
                                <a class="fdx-nested-list__link is-selected" href="#">
                                    <div class="fdx-nested-list__link-container">
                                        <span class="fdx-nested-list__title">Level 3 Item</span>
                                    </div>
                                </a>
                            </li>
                            <li class="fdx-nested-list__item">
                                <a class="fdx-nested-list__link" href="#">
                                    <div class="fdx-nested-list__link-container">
                                        <span class="fdx-nested-list__title">Level 3 Item</span>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li class="fdx-nested-list__item">
                        <a class="fdx-nested-list__link" href="#">
                            <div class="fdx-nested-list__link-container">
                                <span class="fdx-nested-list__title">Level 2 Item</span>
                            </div>
                        </a>
                    </li>
                    <li class="fdx-nested-list__item">
                        <a class="fdx-nested-list__link" href="#">
                            <div class="fdx-nested-list__link-container">
                                <span class="fdx-nested-list__title">Level 2 Item</span>
                            </div>
                        </a>
                    </li>
                </ul>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--activities"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
        </ul>
    </nav>
    <nav class="fdx-side-nav__utility" aria-label="Utility Menu">
        <ul class="fdx-nested-list level-1" aria-label="Utility Menu">
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--compare"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--chain-link"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
        </ul>
    </nav>
</div>
`;l.storyName="Cosy Wide With Icons, 3 Levels, Navigation and Collapse";l.parameters={docs:{story:{iframeHeight:550},description:{story:`
        `}}};const t=()=>`<div class="fdx-side-nav fdx-side-nav--compact">
    <nav class="fdx-side-nav__main-navigation" aria-label="Main Menu">
        <ul class="fdx-nested-list fdx-nested-list--compact level-1" aria-labelledby="EX500H1">
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--home"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--map"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <button class="fdx-nested-list__link is-selected" aria-expanded="false" aria-label="Expand Level 2">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--calendar"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                        <i class="fdx-nested-list__arrow sap-icon--navigation-right-arrow" role="presentation"></i>
                    </div>
                </button>

                <ul class="fdx-nested-list level-2" aria-hidden="true">
                    <li class="fdx-nested-list__item">
                        <a class="fdx-nested-list__link" href="#">
                            <div class="fdx-nested-list__link-container">
                                <span class="fdx-nested-list__title">Level 2 Item</span>
                            </div>
                        </a>
                    </li>
                    <li class="fdx-nested-list__item">
                        <a class="fdx-nested-list__link" href="#">
                            <div class="fdx-nested-list__link-container">
                                <span class="fdx-nested-list__title">Level 2 Item</span>
                            </div>
                        </a>
                    </li>
                    <li class="fdx-nested-list__item">
                        <a class="fdx-nested-list__link" href="#">
                            <div class="fdx-nested-list__link-container">
                                <span class="fdx-nested-list__title">Level 2 Item</span>
                            </div>
                        </a>
                    </li>
                </ul>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--activities"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
        </ul>
    </nav>
    <nav class="fdx-side-nav__utility" aria-label="Utility Menu">
        <ul class="fdx-nested-list fdx-nested-list--compact level-1" aria-label="Utility Menu">
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--compare"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--chain-link"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
        </ul>
    </nav>
</div>
`;t.storyName="Compact Wide With Icons, Level 2 Collapsed";t.parameters={docs:{story:{iframeHeight:550},description:{story:`For compact Side Navigation apply the <code>.fdx-side-nav--compact</code> modifier class with <code>.fdx-side-nav</code> base class, and <code>.fdx-nested-list--compact</code> modifier class with <code>.fdx-nested-list</code> base class.
        `}}};const a=()=>`<div class="fdx-side-nav fdx-side-nav--compact">
    <nav class="fdx-side-nav__main-navigation" aria-label="Main Menu">
        <ul class="fdx-nested-list fdx-nested-list--compact level-1" aria-labelledby="EX500H1">
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--home"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--map"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <div class="fdx-nested-list__link is-selected" aria-expanded="false" aria-label="Expand Level 2">
                    <a class="fdx-nested-list__link-container" href="#">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--calendar"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </a>
                    <button class="fdx-nested-list__button">
                        <i class="sap-icon--navigation-right-arrow" role="presentation"></i>
                    </button>
                </div>

                <ul class="fdx-nested-list level-2" aria-hidden="true">
                    <li class="fdx-nested-list__item">
                        <a class="fdx-nested-list__link" href="#">
                            <div class="fdx-nested-list__link-container">
                                <span class="fdx-nested-list__title">Level 2 Item</span>
                            </div>
                        </a>
                    </li>
                    <li class="fdx-nested-list__item">
                        <a class="fdx-nested-list__link" href="#">
                            <div class="fdx-nested-list__link-container">
                                <span class="fdx-nested-list__title">Level 2 Item</span>
                            </div>
                        </a>
                    </li>
                    <li class="fdx-nested-list__item">
                        <a class="fdx-nested-list__link" href="#">
                            <div class="fdx-nested-list__link-container">
                                <span class="fdx-nested-list__title">Level 2 Item</span>
                            </div>
                        </a>
                    </li>
                </ul>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--activities"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
        </ul>
    </nav>
    <nav class="fdx-side-nav__utility" aria-label="Utility Menu">
        <ul class="fdx-nested-list fdx-nested-list--compact level-1" aria-label="Utility Menu">
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--compare"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--chain-link"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
        </ul>
    </nav>
</div>
`;a.storyName="Compact Wide With Icons, Level 2 Collapsed, Navigation and Collapse";a.parameters={docs:{story:{iframeHeight:550},description:{story:`For compact Side Navigation apply the <code>.fdx-side-nav--compact</code> modifier class with <code>.fdx-side-nav</code> base class, and <code>.fdx-nested-list--compact</code> modifier class with <code>.fdx-nested-list</code> base class.
        `}}};const d=()=>`<div class="fdx-side-nav fdx-side-nav--narrow">
    <nav class="fdx-side-nav__main-navigation">
        <ul class="fdx-nested-list level-1">
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#" aria-label="Level 1 Item">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--home"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#" aria-label="Level 1 Item">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--map"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item fd-popover">
                <button class="fdx-nested-list__link fd-popover__control is-selected" aria-expanded="false" aria-label="Expand Level 2">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--calendar"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                        <i class="fdx-nested-list__arrow sap-icon--navigation-right-arrow" role="presentation"></i>
                    </div>
                </button>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#" aria-label="Level 1 Item">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--activities"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#" aria-label="Level 1 Item">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--bar-chart"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
        </ul>
    </nav>
    <nav class="fdx-side-nav__utility">
        <ul class="fdx-nested-list level-1">
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#" aria-label="Level 1 Item">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--compare"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#" aria-label="Level 1 Item">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--chain-link"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
        </ul>
    </nav>
</div>
`;d.storyName="Cosy Narrow, Levels 2 and 3 in Popover Hidden";d.parameters={docs:{story:{iframeHeight:500},description:{story:`For <code>Narrow</code> variant of Side Navigation apply <code>.fdx-side-nav--narrow</code> modifier class to <code>.fdx-side-nav</code> base class.
        `}}};const f=()=>`<div class="fdx-side-nav fdx-side-nav--narrow">
    <nav class="fdx-side-nav__main-navigation">
        <button class="fd-button fd-button--standard fdx-side-nav__button" aria-label="Move up"><i class="sap-icon--navigation-up-arrow"></i></button>
        <ul class="fdx-nested-list level-1">
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#" aria-label="Level 1 Item">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--home"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#" aria-label="Level 1 Item">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--map"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item fd-popover">
                <button class="fdx-nested-list__link fd-popover__control is-selected" aria-expanded="false" aria-label="Expand Level 2">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--calendar"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                        <i class="fdx-nested-list__arrow sap-icon--navigation-right-arrow" role="presentation"></i>
                    </div>
                </button>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#" aria-label="Level 1 Item">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--activities"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#" aria-label="Level 1 Item">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--bar-chart"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
        </ul>
        <button class="fd-button fd-button--standard fdx-side-nav__button" aria-label="Move up"><i class="sap-icon--navigation-down-arrow"></i></button>
    </nav>
    <nav class="fdx-side-nav__utility">
        <ul class="fdx-nested-list level-1">
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#" aria-label="Level 1 Item">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--compare"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#" aria-label="Level 1 Item">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--chain-link"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
        </ul>
    </nav>
</div>
`;f.storyName="Cosy Narrow with Vertical Overflow Behaviour, Levels 2 and 3 in Popover Hidden";const r=()=>`<h3>Level 1 Header</h3>
<div style="height: 500px;">
<div class="fd-popover">
    <div class="fd-popover__control">
    </div>

    <nav class="fdx-side-nav__popover-body fd-popover__body fd-popover__body--no-arrow"">
            <ul class="fdx-nested-list level-2">
                <li class="fdx-nested-list__item fdx-nested-list__item--header">
                    <h3 class="fdx-nested-list__link">
                        <div class="fdx-nested-list__link-container">
                            <span class="fdx-nested-list__title">Sales</span>
                        </div>
                    </h3>
                </li>
                <li class="fdx-nested-list__item">
                    <a class="fdx-nested-list__link" href="#">
                        <div class="fdx-nested-list__link-container">
                            <span class="fdx-nested-list__title">Level 2 Item</span>
                        </div>
                    </a>
                </li>
                <li class="fdx-nested-list__item">
                    <button class="fdx-nested-list__link is-selected" aria-expanded="true" aria-label="Expand Level 3">
                        <div class="fdx-nested-list__link-container">
                            <span class="fdx-nested-list__title">Level 2 Item</span>
                            <i class="fdx-nested-list__arrow sap-icon--navigation-down-arrow" role="presentation"></i>
                        </div>
                    </button>
                    <ul class="fdx-nested-list level-3" aria-hidden="false">
                            <li class="fdx-nested-list__item">
                                <a class="fdx-nested-list__link" href="#">
                                    <div class="fdx-nested-list__link-container">
                                        <span class="fdx-nested-list__title">Level 3 Item</span>
                                    </div>
                                </a>
                            </li>
                            <li class="fdx-nested-list__item">
                                <a class="fdx-nested-list__link" href="#">
                                    <div class="fdx-nested-list__link-container">
                                        <span class="fdx-nested-list__title">Level 3 Item</span>
                                    </div>
                                </a>
                            </li>
                            <li class="fdx-nested-list__item">
                                <a class="fdx-nested-list__link" href="#">
                                    <div class="fdx-nested-list__link-container">
                                        <span class="fdx-nested-list__title">Level 3 Item</span>
                                    </div>
                                </a>
                            </li>
                        </ul>
                </li>
                <li class="fdx-nested-list__item">
                    <a class="fdx-nested-list__link" href="#">
                        <div class="fdx-nested-list__link-container">
                            <span class="fdx-nested-list__title">Level 2 Item</span>
                        </div>
                    </a>
                </li>
                <li class="fdx-nested-list__item">
                    <a class="fdx-nested-list__link" href="#">
                        <div class="fdx-nested-list__link-container">
                            <span class="fdx-nested-list__title">Level 2 Item</span>
                        </div>
                    </a>
                </li>
            </ul>
        </nav>
    </div>
</div>

<h3>Level 1 Navigation</h3>
<div style="height: 500px;">
<div class="fd-popover">
    <div class="fd-popover__control">
    </div>

    <nav class="fdx-side-nav__popover-body fd-popover__body fd-popover__body--no-arrow"">
            <ul class="fdx-nested-list level-2">
                <li class="fdx-nested-list__item fdx-nested-list__item--header">
                    <a class="fdx-nested-list__link">
                        <div class="fdx-nested-list__link-container">
                            <span class="fdx-nested-list__title">Sales</span>
                        </div>
                    </a>
                </li>
                <li class="fdx-nested-list__item">
                    <a class="fdx-nested-list__link" href="#">
                        <div class="fdx-nested-list__link-container">
                            <span class="fdx-nested-list__title">Level 2 Item</span>
                        </div>
                    </a>
                </li>
                <li class="fdx-nested-list__item">
                    <button class="fdx-nested-list__link is-selected" aria-expanded="true" aria-label="Expand Level 3">
                        <div class="fdx-nested-list__link-container">
                            <span class="fdx-nested-list__title">Level 2 Item</span>
                            <i class="fdx-nested-list__arrow sap-icon--navigation-down-arrow" role="presentation"></i>
                        </div>
                    </button>
                    <ul class="fdx-nested-list level-3" aria-hidden="false">
                            <li class="fdx-nested-list__item">
                                <a class="fdx-nested-list__link" href="#">
                                    <div class="fdx-nested-list__link-container">
                                        <span class="fdx-nested-list__title">Level 3 Item</span>
                                    </div>
                                </a>
                            </li>
                            <li class="fdx-nested-list__item">
                                <a class="fdx-nested-list__link" href="#">
                                    <div class="fdx-nested-list__link-container">
                                        <span class="fdx-nested-list__title">Level 3 Item</span>
                                    </div>
                                </a>
                            </li>
                            <li class="fdx-nested-list__item">
                                <a class="fdx-nested-list__link" href="#">
                                    <div class="fdx-nested-list__link-container">
                                        <span class="fdx-nested-list__title">Level 3 Item</span>
                                    </div>
                                </a>
                            </li>
                        </ul>
                </li>
                <li class="fdx-nested-list__item">
                    <a class="fdx-nested-list__link" href="#">
                        <div class="fdx-nested-list__link-container">
                            <span class="fdx-nested-list__title">Level 2 Item</span>
                        </div>
                    </a>
                </li>
                <li class="fdx-nested-list__item">
                    <a class="fdx-nested-list__link" href="#">
                        <div class="fdx-nested-list__link-container">
                            <span class="fdx-nested-list__title">Level 2 Item</span>
                        </div>
                    </a>
                </li>
            </ul>
        </nav>
    </div>
</div>
`;r.parameters={docs:{story:{iframeHeight:1e3},description:{story:`
        `}}};const _=()=>`<div style="height: 500px;">
<div class="fd-popover">
    <div class="fd-popover__control">
    </div>

    <nav class="fdx-side-nav__popover-body fdx-side-nav__popover-body--dynamic-width fd-popover__body fd-popover__body--no-arrow"">
            <ul class="fdx-nested-list level-2">
                <li class="fdx-nested-list__item fdx-nested-list__item--header">
                    <h3 class="fdx-nested-list__link">
                        <div class="fdx-nested-list__link-container">
                            <span class="fdx-nested-list__title">Sales</span>
                        </div>
                    </h3>
                </li>
                <li class="fdx-nested-list__item">
                    <a class="fdx-nested-list__link" href="#">
                        <div class="fdx-nested-list__link-container">
                            <span class="fdx-nested-list__title">Level 2 Item</span>
                        </div>
                    </a>
                </li>
                <li class="fdx-nested-list__item">
                    <button class="fdx-nested-list__link is-selected" aria-expanded="true" aria-label="Expand Level 3">
                        <div class="fdx-nested-list__link-container">
                            <span class="fdx-nested-list__title">Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
                            <i class="fdx-nested-list__arrow sap-icon--navigation-down-arrow" role="presentation"></i>
                        </div>
                    </button>
                    <ul class="fdx-nested-list level-3" aria-hidden="false">
                            <li class="fdx-nested-list__item">
                                <a class="fdx-nested-list__link" href="#">
                                    <div class="fdx-nested-list__link-container">
                                        <span class="fdx-nested-list__title">Level 3 Item</span>
                                    </div>
                                </a>
                            </li>
                            <li class="fdx-nested-list__item">
                                <a class="fdx-nested-list__link" href="#">
                                    <div class="fdx-nested-list__link-container">
                                        <span class="fdx-nested-list__title">Level 3 Item</span>
                                    </div>
                                </a>
                            </li>
                            <li class="fdx-nested-list__item">
                                <a class="fdx-nested-list__link" href="#">
                                    <div class="fdx-nested-list__link-container">
                                        <span class="fdx-nested-list__title">Level 3 Item</span>
                                    </div>
                                </a>
                            </li>
                        </ul>
                </li>
                <li class="fdx-nested-list__item">
                    <a class="fdx-nested-list__link" href="#">
                        <div class="fdx-nested-list__link-container">
                            <span class="fdx-nested-list__title">Level 2 Item</span>
                        </div>
                    </a>
                </li>
                <li class="fdx-nested-list__item">
                    <a class="fdx-nested-list__link" href="#">
                        <div class="fdx-nested-list__link-container">
                            <span class="fdx-nested-list__title">Level 2 Item</span>
                        </div>
                    </a>
                </li>
            </ul>
        </nav>
    </div>
</div>
`;_.storyName="Cosy Narrow Popover with Dynamic Width";_.parameters={docs:{story:{iframeHeight:1e3},description:{story:`Side Navigation Popover can react dynamically to long label texts in navigational items. In such case the width of the Side Navigation Popover is adapted by the longest label. The label does not wrap or truncate. Use the modifier class <code>.fdx-side-nav__popover-body--dynamic-width</code> modifier class with <code>.fdx-side-nav__popover-body</code> base class for Side Navigation Popover with dynamic width.
        `}}};const x=()=>`<div class="fdx-side-nav fdx-side-nav--compact fdx-side-nav--narrow">
    <nav class="fdx-side-nav__main-navigation">
        <ul class="fdx-nested-list fdx-nested-list--compact level-1">
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#" aria-label="Level 1 Item">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--home"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#" aria-label="Level 1 Item">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--map"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item fd-popover">
                <button class="fdx-nested-list__link fd-popover__control is-selected" aria-expanded="false" aria-label="Expand Level 2">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--calendar"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                        <i class="fdx-nested-list__arrow sap-icon--navigation-right-arrow" role="presentation"></i>
                    </div>
                </button>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#" aria-label="Level 1 Item">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--activities"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#" aria-label="Level 1 Item">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--bar-chart"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
        </ul>
    </nav>
    <nav class="fdx-side-nav__utility">
        <ul class="fdx-nested-list fdx-nested-list--compact level-1" aria-label="Utility Menu">
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#" aria-label="Level 1 Item">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--compare"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#" aria-label="Level 1 Item">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--chain-link"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
        </ul>
    </nav>
</div>
`;x.parameters={docs:{story:{iframeHeight:500},description:{story:`For <code>Narrow</code> variant of Side Navigation in compact mode apply <code>.fdx-side-nav--narrow</code> and <code>.fdx-side-nav--compact</code> modifier classed to <code>.fdx-side-nav</code> base class.
`}}};const v=()=>`<div class="fdx-side-nav fdx-side-nav--compact fdx-side-nav--narrow">
    <nav class="fdx-side-nav__main-navigation">
        <button class="fd-button fd-button--standard fd-button--compact fdx-side-nav__button" aria-label="Move up"><i class="sap-icon--navigation-up-arrow"></i></button>
        <ul class="fdx-nested-list fdx-nested-list--compact level-1">
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#" aria-label="Level 1 Item">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--home"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#" aria-label="Level 1 Item">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--map"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item fd-popover">
                <button class="fdx-nested-list__link fd-popover__control is-selected" aria-expanded="false" aria-label="Expand Level 2">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--calendar"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                        <i class="fdx-nested-list__arrow sap-icon--navigation-right-arrow" role="presentation"></i>
                    </div>
                </button>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#" aria-label="Level 1 Item">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--activities"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#" aria-label="Level 1 Item">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--bar-chart"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
        </ul>
        <button class="fd-button fd-button--standard fd-button--compact fdx-side-nav__button" aria-label="Move up"><i class="sap-icon--navigation-down-arrow"></i></button>
    </nav>
    <nav class="fdx-side-nav__utility">
        <ul class="fdx-nested-list fdx-nested-list--compact level-1">
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#" aria-label="Level 1 Item">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--compare"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#" aria-label="Level 1 Item">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--chain-link"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
        </ul>
    </nav>
</div>
`;v.storyName="Compact Narrow with Vertical Overflow Behaviour, Levels 2 and 3 in Popover Hidden";const p=()=>`<div style="height: 300px;">
<div class="fd-popover">
    <div class="fd-popover__control">
    </div>

    <nav class="fdx-side-nav__popover-body fd-popover__body fd-popover__body--no-arrow"">
            <ul class="fdx-nested-list fdx-nested-list--compact level-2">
                <li class="fdx-nested-list__item fdx-nested-list__item--header">
                    <h3 class="fdx-nested-list__link">
                        <div class="fdx-nested-list__link-container">
                            <span class="fdx-nested-list__title">Sales</span>
                        </div>
                    </h3>
                </li>
                <li class="fdx-nested-list__item">
                    <a class="fdx-nested-list__link" href="#">
                        <div class="fdx-nested-list__link-container">
                            <span class="fdx-nested-list__title">Level 2 Item</span>
                        </div>
                    </a>
                </li>
                <li class="fdx-nested-list__item">
                    <button class="fdx-nested-list__link is-selected" aria-expanded="true" aria-label="Expand Level 3">
                        <div class="fdx-nested-list__link-container">
                            <span class="fdx-nested-list__title">Level 2 Item</span>
                            <i class="fdx-nested-list__arrow sap-icon--navigation-down-arrow" role="presentation"></i>
                        </div>
                    </button>
                    <ul class="fdx-nested-list level-3" aria-hidden="false">
                            <li class="fdx-nested-list__item">
                                <a class="fdx-nested-list__link" href="#">
                                    <div class="fdx-nested-list__link-container">
                                        <span class="fdx-nested-list__title">Level 3 Item</span>
                                    </div>
                                </a>
                            </li>
                            <li class="fdx-nested-list__item">
                                <a class="fdx-nested-list__link" href="#">
                                    <div class="fdx-nested-list__link-container">
                                        <span class="fdx-nested-list__title">Level 3 Item</span>
                                    </div>
                                </a>
                            </li>
                            <li class="fdx-nested-list__item">
                                <a class="fdx-nested-list__link" href="#">
                                    <div class="fdx-nested-list__link-container">
                                        <span class="fdx-nested-list__title">Level 3 Item</span>
                                    </div>
                                </a>
                            </li>
                        </ul>
                </li>
                <li class="fdx-nested-list__item">
                    <a class="fdx-nested-list__link" href="#">
                        <div class="fdx-nested-list__link-container">
                            <span class="fdx-nested-list__title">Level 2 Item</span>
                        </div>
                    </a>
                </li>
                <li class="fdx-nested-list__item">
                    <a class="fdx-nested-list__link" href="#">
                        <div class="fdx-nested-list__link-container">
                            <span class="fdx-nested-list__title">Level 2 Item</span>
                        </div>
                    </a>
                </li>
            </ul>
        </nav>
    </div>
</div>
`,c=()=>`<div class="fdx-side-nav" style="max-height: 500px;">
    <nav class="fdx-side-nav__main-navigation" aria-label="Main Menu">
        <div class="fd-input-group fdx-side-nav__input-group">
            <input class="fd-input fd-input-group__input" type="text" placeholder="Filter">
            <span class="fd-input-group__addon fd-input-group__addon--button">
                    <button class="fd-input-group__button fd-button fd-button--icon fd-button--transparent" aria-label="Search">
                        <i class="sap-icon--search"></i>
                    </button>
                </span>
        </div>
        <ul class="fdx-nested-list level-1">
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--home"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link is-selected" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--calendar"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--employee"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--activities"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--lightbulb"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
        </ul>
    </nav>
    <nav class="fdx-side-nav__utility" aria-label="Utility Menu">
        <ul class="fdx-nested-list level-1">
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--compare"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--chain-link"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
        </ul>
    </nav>
</div>
`;c.storyName="Cosy Wide With Icon and Filter Integration, 1 Level";c.parameters={docs:{story:{iframeHeight:400},description:{story:`
        `}}};var m,k,u;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`() => \`<div class="fdx-side-nav" style="max-height: 500px;">
    <nav class="fdx-side-nav__main-navigation" aria-label="Main Menu">
        <ul class="fdx-nested-list level-1">
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--home"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link is-selected" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--calendar"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--employee"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--activities"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--lightbulb"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--history"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--future"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--activities"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--lead"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--notes"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--map"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--log"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--phone"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--product"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
        </ul>
    </nav>
    <nav class="fdx-side-nav__utility" aria-label="Utility Menu">
        <ul class="fdx-nested-list level-1">
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--compare"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--chain-link"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
        </ul>
    </nav>
</div>
\``,...(u=(k=s.parameters)==null?void 0:k.docs)==null?void 0:u.source}}};var h,L,b;e.parameters={...e.parameters,docs:{...(h=e.parameters)==null?void 0:h.docs,source:{originalSource:`() => \`<div class="fdx-side-nav">
    <nav class="fdx-side-nav__main-navigation" aria-label="Main Menu">
        <ul class="fdx-nested-list fdx-nested-list--text-only level-1" aria-label="Main Menu">
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link is-selected" href="#">
                    <div class="fdx-nested-list__link-container">
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            
        </ul>
    </nav>
    <nav class="fdx-side-nav__utility" aria-label="Utility Menu">
        <ul class="fdx-nested-list fdx-nested-list--text-only level-1" aria-label="Utility Menu">
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
        </ul>
    </nav>
</div>
\``,...(b=(L=e.parameters)==null?void 0:L.docs)==null?void 0:b.source}}};var I,y,g;o.parameters={...o.parameters,docs:{...(I=o.parameters)==null?void 0:I.docs,source:{originalSource:`() => \`<div class="fdx-side-nav fdx-side-nav--dynamic-width" style="max-height: 500px;">
    <nav class="fdx-side-nav__main-navigation" aria-label="Main Menu">
        <ul class="fdx-nested-list level-1">
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--home"></i>
                        <span class="fdx-nested-list__title">Overview</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link is-selected" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--calendar"></i>
                        <span class="fdx-nested-list__title">Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--employee"></i>
                        <span class="fdx-nested-list__title">Sed do eiusmod tempor incididunt ut labore</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--activities"></i>
                        <span class="fdx-nested-list__title">Nemo enim ipsam</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--lightbulb"></i>
                        <span class="fdx-nested-list__title">Neque porro quisquam est, qui dolorem ipsum</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--history"></i>
                        <span class="fdx-nested-list__title">Quis autem vel eum iure</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--future"></i>
                        <span class="fdx-nested-list__title">Excepteur sint occaecat cupidatat</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--activities"></i>
                        <span class="fdx-nested-list__title">Ut enim ad minima veniam</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--lead"></i>
                        <span class="fdx-nested-list__title">Neque porro quisquam</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--notes"></i>
                        <span class="fdx-nested-list__title">Excepteur sint occaecat cupidatat</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--map"></i>
                        <span class="fdx-nested-list__title">Neque porro quisquam</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--log"></i>
                        <span class="fdx-nested-list__title">Ut enim ad minima veniam</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--phone"></i>
                        <span class="fdx-nested-list__title">Excepteur sint occaecat cupidatat</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--product"></i>
                        <span class="fdx-nested-list__title">Ut enim ad minima veniam</span>
                    </div>
                </a>
            </li>
        </ul>
    </nav>
    <nav class="fdx-side-nav__utility" aria-label="Utility Menu">
        <ul class="fdx-nested-list level-1">
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--compare"></i>
                        <span class="fdx-nested-list__title">Duis aute irure dolor </span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--chain-link"></i>
                        <span class="fdx-nested-list__title">Neque porro quisquam</span>
                    </div>
                </a>
            </li>
        </ul>
    </nav>
</div>
\``,...(g=(y=o.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var w,M,N;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`() => \`<div class="fdx-side-nav">
    <nav class="fdx-side-nav__main-navigation" aria-label="Main Menu">
        <ul class="fdx-nested-list fdx-nested-list--text-only level-1">
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <button class="fdx-nested-list__link" aria-expanded="true" aria-label="Expand Level 2">
                    <div class="fdx-nested-list__link-container">
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                        <i class="fdx-nested-list__arrow sap-icon--navigation-down-arrow" role="presentation"></i>
                    </div>
                </button>
                <ul class="fdx-nested-list level-2" aria-hidden="false">
                    <li class="fdx-nested-list__item">
                        <button class="fdx-nested-list__link is-selected" aria-expanded="true" aria-label="Expand Level 3">
                            <div class="fdx-nested-list__link-container">
                                <span class="fdx-nested-list__title">Level 2 Item</span>
                                <i class="fdx-nested-list__arrow sap-icon--navigation-down-arrow" role="presentation"></i>
                            </div>
                        </button>
                        <ul class="fdx-nested-list level-3" aria-hidden="false">
                            <li class="fdx-nested-list__item">
                                <a class="fdx-nested-list__link" href="#">
                                    <div class="fdx-nested-list__link-container">
                                        <span class="fdx-nested-list__title">Level 3 Item</span>
                                    </div>
                                </a>
                            </li>
                            <li class="fdx-nested-list__item">
                                <a class="fdx-nested-list__link" href="#">
                                    <div class="fdx-nested-list__link-container">
                                        <span class="fdx-nested-list__title">Level 3 Item</span>
                                    </div>
                                </a>
                            </li>
                            <li class="fdx-nested-list__item">
                                <a class="fdx-nested-list__link is-selected" href="#">
                                    <div class="fdx-nested-list__link-container">
                                        <span class="fdx-nested-list__title">Level 3 Item</span>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li class="fdx-nested-list__item">
                        <a class="fdx-nested-list__link" href="#">
                            <div class="fdx-nested-list__link-container">
                                <span class="fdx-nested-list__title">Level 2 Item</span>
                            </div>
                        </a>
                    </li>
                    <li class="fdx-nested-list__item">
                        <a class="fdx-nested-list__link" href="#">
                            <div class="fdx-nested-list__link-container">
                                <span class="fdx-nested-list__title">Level 3 Item</span>
                            </div>
                        </a>
                    </li>
                </ul>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
        </ul>
    </nav>
    <nav class="fdx-side-nav__utility" aria-label="Utility Menu">
        <ul class="fdx-nested-list fdx-nested-list--text-only level-1" aria-label="Utility Menu">
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
        </ul>
    </nav>
</div>
\``,...(N=(M=i.parameters)==null?void 0:M.docs)==null?void 0:N.source}}};var C,E,S;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`() => \`<div class="fdx-side-nav">
    <nav class="fdx-side-nav__main-navigation" aria-label="Main Menu">
        <ul class="fdx-nested-list level-1" aria-labelledby="EX400H1">
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--home"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--map"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <button class="fdx-nested-list__link" aria-expanded="true" aria-label="Expand Level 2">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--calendar"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                        <i class="fdx-nested-list__arrow sap-icon--navigation-down-arrow" role="presentation"></i>
                    </div>
                </button>
                <ul class="fdx-nested-list level-2" aria-hidden="false">
                    <li class="fdx-nested-list__item">
                        <button class="fdx-nested-list__link is-selected" aria-expanded="true" aria-label="Expand Level 3">
                            <div class="fdx-nested-list__link-container">
                                <span class="fdx-nested-list__title">Level 2 Item</span>
                                <i class="fdx-nested-list__arrow sap-icon--navigation-down-arrow" role="presentation"></i>
                            </div>
                        </button>
                        <ul class="fdx-nested-list level-3" aria-hidden="false">
                            <li class="fdx-nested-list__item">
                                <a class="fdx-nested-list__link" href="#">
                                    <div class="fdx-nested-list__link-container">
                                        <span class="fdx-nested-list__title">Level 3 Item</span>
                                    </div>
                                </a>
                            </li>
                            <li class="fdx-nested-list__item">
                                <a class="fdx-nested-list__link is-selected" href="#">
                                    <div class="fdx-nested-list__link-container">
                                        <span class="fdx-nested-list__title">Level 3 Item</span>
                                    </div>
                                </a>
                            </li>
                            <li class="fdx-nested-list__item">
                                <a class="fdx-nested-list__link" href="#">
                                    <div class="fdx-nested-list__link-container">
                                        <span class="fdx-nested-list__title">Level 3 Item</span>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li class="fdx-nested-list__item">
                        <a class="fdx-nested-list__link" href="#">
                            <div class="fdx-nested-list__link-container">
                                <span class="fdx-nested-list__title">Level 2 Item</span>
                            </div>
                        </a>
                    </li>
                    <li class="fdx-nested-list__item">
                        <a class="fdx-nested-list__link" href="#">
                            <div class="fdx-nested-list__link-container">
                                <span class="fdx-nested-list__title">Level 2 Item</span>
                            </div>
                        </a>
                    </li>
                </ul>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--activities"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
        </ul>
    </nav>
    <nav class="fdx-side-nav__utility" aria-label="Utility Menu">
        <ul class="fdx-nested-list level-1" aria-label="Utility Menu">
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--compare"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--chain-link"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
        </ul>
    </nav>
</div>
\``,...(S=(E=n.parameters)==null?void 0:E.docs)==null?void 0:S.source}}};var U,W,q;l.parameters={...l.parameters,docs:{...(U=l.parameters)==null?void 0:U.docs,source:{originalSource:`() => \`<div class="fdx-side-nav">
    <nav class="fdx-side-nav__main-navigation" aria-label="Main Menu">
        <ul class="fdx-nested-list level-1" aria-labelledby="EX400H1">
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--home"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--map"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <div class="fdx-nested-list__link" aria-expanded="true" aria-label="Expand Level 2">
                    <a class="fdx-nested-list__link-container" href="#">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--calendar"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </a>
                    <button class="fdx-nested-list__button">
                        <i class="sap-icon--navigation-down-arrow" role="presentation"></i>
                    </button>
                </div>
                <ul class="fdx-nested-list level-2" aria-hidden="false">
                    <li class="fdx-nested-list__item">
                        <div class="fdx-nested-list__link is-selected" aria-expanded="true" aria-label="Expand Level 3">
                            <a class="fdx-nested-list__link-container" href="#">
                                <span class="fdx-nested-list__title">Level 2 Item</span>
                            </a>
                            <button class="fdx-nested-list__button">
                                <i class="sap-icon--navigation-down-arrow" role="presentation"></i>
                            </button>
                        </div>
                        <ul class="fdx-nested-list level-3" aria-hidden="false">
                            <li class="fdx-nested-list__item">
                                <a class="fdx-nested-list__link" href="#">
                                    <div class="fdx-nested-list__link-container">
                                        <span class="fdx-nested-list__title">Level 3 Item</span>
                                    </div>
                                </a>
                            </li>
                            <li class="fdx-nested-list__item">
                                <a class="fdx-nested-list__link is-selected" href="#">
                                    <div class="fdx-nested-list__link-container">
                                        <span class="fdx-nested-list__title">Level 3 Item</span>
                                    </div>
                                </a>
                            </li>
                            <li class="fdx-nested-list__item">
                                <a class="fdx-nested-list__link" href="#">
                                    <div class="fdx-nested-list__link-container">
                                        <span class="fdx-nested-list__title">Level 3 Item</span>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li class="fdx-nested-list__item">
                        <a class="fdx-nested-list__link" href="#">
                            <div class="fdx-nested-list__link-container">
                                <span class="fdx-nested-list__title">Level 2 Item</span>
                            </div>
                        </a>
                    </li>
                    <li class="fdx-nested-list__item">
                        <a class="fdx-nested-list__link" href="#">
                            <div class="fdx-nested-list__link-container">
                                <span class="fdx-nested-list__title">Level 2 Item</span>
                            </div>
                        </a>
                    </li>
                </ul>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--activities"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
        </ul>
    </nav>
    <nav class="fdx-side-nav__utility" aria-label="Utility Menu">
        <ul class="fdx-nested-list level-1" aria-label="Utility Menu">
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--compare"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--chain-link"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
        </ul>
    </nav>
</div>
\``,...(q=(W=l.parameters)==null?void 0:W.docs)==null?void 0:q.source}}};var H,O,T;t.parameters={...t.parameters,docs:{...(H=t.parameters)==null?void 0:H.docs,source:{originalSource:`() => \`<div class="fdx-side-nav fdx-side-nav--compact">
    <nav class="fdx-side-nav__main-navigation" aria-label="Main Menu">
        <ul class="fdx-nested-list fdx-nested-list--compact level-1" aria-labelledby="EX500H1">
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--home"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--map"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <button class="fdx-nested-list__link is-selected" aria-expanded="false" aria-label="Expand Level 2">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--calendar"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                        <i class="fdx-nested-list__arrow sap-icon--navigation-right-arrow" role="presentation"></i>
                    </div>
                </button>

                <ul class="fdx-nested-list level-2" aria-hidden="true">
                    <li class="fdx-nested-list__item">
                        <a class="fdx-nested-list__link" href="#">
                            <div class="fdx-nested-list__link-container">
                                <span class="fdx-nested-list__title">Level 2 Item</span>
                            </div>
                        </a>
                    </li>
                    <li class="fdx-nested-list__item">
                        <a class="fdx-nested-list__link" href="#">
                            <div class="fdx-nested-list__link-container">
                                <span class="fdx-nested-list__title">Level 2 Item</span>
                            </div>
                        </a>
                    </li>
                    <li class="fdx-nested-list__item">
                        <a class="fdx-nested-list__link" href="#">
                            <div class="fdx-nested-list__link-container">
                                <span class="fdx-nested-list__title">Level 2 Item</span>
                            </div>
                        </a>
                    </li>
                </ul>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--activities"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
        </ul>
    </nav>
    <nav class="fdx-side-nav__utility" aria-label="Utility Menu">
        <ul class="fdx-nested-list fdx-nested-list--compact level-1" aria-label="Utility Menu">
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--compare"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--chain-link"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
        </ul>
    </nav>
</div>
\``,...(T=(O=t.parameters)==null?void 0:O.docs)==null?void 0:T.source}}};var P,F,X;a.parameters={...a.parameters,docs:{...(P=a.parameters)==null?void 0:P.docs,source:{originalSource:`() => \`<div class="fdx-side-nav fdx-side-nav--compact">
    <nav class="fdx-side-nav__main-navigation" aria-label="Main Menu">
        <ul class="fdx-nested-list fdx-nested-list--compact level-1" aria-labelledby="EX500H1">
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--home"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--map"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <div class="fdx-nested-list__link is-selected" aria-expanded="false" aria-label="Expand Level 2">
                    <a class="fdx-nested-list__link-container" href="#">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--calendar"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </a>
                    <button class="fdx-nested-list__button">
                        <i class="sap-icon--navigation-right-arrow" role="presentation"></i>
                    </button>
                </div>

                <ul class="fdx-nested-list level-2" aria-hidden="true">
                    <li class="fdx-nested-list__item">
                        <a class="fdx-nested-list__link" href="#">
                            <div class="fdx-nested-list__link-container">
                                <span class="fdx-nested-list__title">Level 2 Item</span>
                            </div>
                        </a>
                    </li>
                    <li class="fdx-nested-list__item">
                        <a class="fdx-nested-list__link" href="#">
                            <div class="fdx-nested-list__link-container">
                                <span class="fdx-nested-list__title">Level 2 Item</span>
                            </div>
                        </a>
                    </li>
                    <li class="fdx-nested-list__item">
                        <a class="fdx-nested-list__link" href="#">
                            <div class="fdx-nested-list__link-container">
                                <span class="fdx-nested-list__title">Level 2 Item</span>
                            </div>
                        </a>
                    </li>
                </ul>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--activities"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
        </ul>
    </nav>
    <nav class="fdx-side-nav__utility" aria-label="Utility Menu">
        <ul class="fdx-nested-list fdx-nested-list--compact level-1" aria-label="Utility Menu">
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--compare"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--chain-link"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
        </ul>
    </nav>
</div>
\``,...(X=(F=a.parameters)==null?void 0:F.docs)==null?void 0:X.source}}};var D,z,B;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`() => \`<div class="fdx-side-nav fdx-side-nav--narrow">
    <nav class="fdx-side-nav__main-navigation">
        <ul class="fdx-nested-list level-1">
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#" aria-label="Level 1 Item">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--home"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#" aria-label="Level 1 Item">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--map"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item fd-popover">
                <button class="fdx-nested-list__link fd-popover__control is-selected" aria-expanded="false" aria-label="Expand Level 2">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--calendar"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                        <i class="fdx-nested-list__arrow sap-icon--navigation-right-arrow" role="presentation"></i>
                    </div>
                </button>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#" aria-label="Level 1 Item">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--activities"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#" aria-label="Level 1 Item">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--bar-chart"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
        </ul>
    </nav>
    <nav class="fdx-side-nav__utility">
        <ul class="fdx-nested-list level-1">
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#" aria-label="Level 1 Item">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--compare"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#" aria-label="Level 1 Item">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--chain-link"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
        </ul>
    </nav>
</div>
\``,...(B=(z=d.parameters)==null?void 0:z.docs)==null?void 0:B.source}}};var Q,V,j;f.parameters={...f.parameters,docs:{...(Q=f.parameters)==null?void 0:Q.docs,source:{originalSource:`() => \`<div class="fdx-side-nav fdx-side-nav--narrow">
    <nav class="fdx-side-nav__main-navigation">
        <button class="fd-button fd-button--standard fdx-side-nav__button" aria-label="Move up"><i class="sap-icon--navigation-up-arrow"></i></button>
        <ul class="fdx-nested-list level-1">
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#" aria-label="Level 1 Item">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--home"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#" aria-label="Level 1 Item">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--map"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item fd-popover">
                <button class="fdx-nested-list__link fd-popover__control is-selected" aria-expanded="false" aria-label="Expand Level 2">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--calendar"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                        <i class="fdx-nested-list__arrow sap-icon--navigation-right-arrow" role="presentation"></i>
                    </div>
                </button>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#" aria-label="Level 1 Item">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--activities"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#" aria-label="Level 1 Item">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--bar-chart"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
        </ul>
        <button class="fd-button fd-button--standard fdx-side-nav__button" aria-label="Move up"><i class="sap-icon--navigation-down-arrow"></i></button>
    </nav>
    <nav class="fdx-side-nav__utility">
        <ul class="fdx-nested-list level-1">
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#" aria-label="Level 1 Item">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--compare"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#" aria-label="Level 1 Item">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--chain-link"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
        </ul>
    </nav>
</div>
\``,...(j=(V=f.parameters)==null?void 0:V.docs)==null?void 0:j.source}}};var A,G,J;r.parameters={...r.parameters,docs:{...(A=r.parameters)==null?void 0:A.docs,source:{originalSource:`() => \`<h3>Level 1 Header</h3>
<div style="height: 500px;">
<div class="fd-popover">
    <div class="fd-popover__control">
    </div>

    <nav class="fdx-side-nav__popover-body fd-popover__body fd-popover__body--no-arrow"">
            <ul class="fdx-nested-list level-2">
                <li class="fdx-nested-list__item fdx-nested-list__item--header">
                    <h3 class="fdx-nested-list__link">
                        <div class="fdx-nested-list__link-container">
                            <span class="fdx-nested-list__title">Sales</span>
                        </div>
                    </h3>
                </li>
                <li class="fdx-nested-list__item">
                    <a class="fdx-nested-list__link" href="#">
                        <div class="fdx-nested-list__link-container">
                            <span class="fdx-nested-list__title">Level 2 Item</span>
                        </div>
                    </a>
                </li>
                <li class="fdx-nested-list__item">
                    <button class="fdx-nested-list__link is-selected" aria-expanded="true" aria-label="Expand Level 3">
                        <div class="fdx-nested-list__link-container">
                            <span class="fdx-nested-list__title">Level 2 Item</span>
                            <i class="fdx-nested-list__arrow sap-icon--navigation-down-arrow" role="presentation"></i>
                        </div>
                    </button>
                    <ul class="fdx-nested-list level-3" aria-hidden="false">
                            <li class="fdx-nested-list__item">
                                <a class="fdx-nested-list__link" href="#">
                                    <div class="fdx-nested-list__link-container">
                                        <span class="fdx-nested-list__title">Level 3 Item</span>
                                    </div>
                                </a>
                            </li>
                            <li class="fdx-nested-list__item">
                                <a class="fdx-nested-list__link" href="#">
                                    <div class="fdx-nested-list__link-container">
                                        <span class="fdx-nested-list__title">Level 3 Item</span>
                                    </div>
                                </a>
                            </li>
                            <li class="fdx-nested-list__item">
                                <a class="fdx-nested-list__link" href="#">
                                    <div class="fdx-nested-list__link-container">
                                        <span class="fdx-nested-list__title">Level 3 Item</span>
                                    </div>
                                </a>
                            </li>
                        </ul>
                </li>
                <li class="fdx-nested-list__item">
                    <a class="fdx-nested-list__link" href="#">
                        <div class="fdx-nested-list__link-container">
                            <span class="fdx-nested-list__title">Level 2 Item</span>
                        </div>
                    </a>
                </li>
                <li class="fdx-nested-list__item">
                    <a class="fdx-nested-list__link" href="#">
                        <div class="fdx-nested-list__link-container">
                            <span class="fdx-nested-list__title">Level 2 Item</span>
                        </div>
                    </a>
                </li>
            </ul>
        </nav>
    </div>
</div>

<h3>Level 1 Navigation</h3>
<div style="height: 500px;">
<div class="fd-popover">
    <div class="fd-popover__control">
    </div>

    <nav class="fdx-side-nav__popover-body fd-popover__body fd-popover__body--no-arrow"">
            <ul class="fdx-nested-list level-2">
                <li class="fdx-nested-list__item fdx-nested-list__item--header">
                    <a class="fdx-nested-list__link">
                        <div class="fdx-nested-list__link-container">
                            <span class="fdx-nested-list__title">Sales</span>
                        </div>
                    </a>
                </li>
                <li class="fdx-nested-list__item">
                    <a class="fdx-nested-list__link" href="#">
                        <div class="fdx-nested-list__link-container">
                            <span class="fdx-nested-list__title">Level 2 Item</span>
                        </div>
                    </a>
                </li>
                <li class="fdx-nested-list__item">
                    <button class="fdx-nested-list__link is-selected" aria-expanded="true" aria-label="Expand Level 3">
                        <div class="fdx-nested-list__link-container">
                            <span class="fdx-nested-list__title">Level 2 Item</span>
                            <i class="fdx-nested-list__arrow sap-icon--navigation-down-arrow" role="presentation"></i>
                        </div>
                    </button>
                    <ul class="fdx-nested-list level-3" aria-hidden="false">
                            <li class="fdx-nested-list__item">
                                <a class="fdx-nested-list__link" href="#">
                                    <div class="fdx-nested-list__link-container">
                                        <span class="fdx-nested-list__title">Level 3 Item</span>
                                    </div>
                                </a>
                            </li>
                            <li class="fdx-nested-list__item">
                                <a class="fdx-nested-list__link" href="#">
                                    <div class="fdx-nested-list__link-container">
                                        <span class="fdx-nested-list__title">Level 3 Item</span>
                                    </div>
                                </a>
                            </li>
                            <li class="fdx-nested-list__item">
                                <a class="fdx-nested-list__link" href="#">
                                    <div class="fdx-nested-list__link-container">
                                        <span class="fdx-nested-list__title">Level 3 Item</span>
                                    </div>
                                </a>
                            </li>
                        </ul>
                </li>
                <li class="fdx-nested-list__item">
                    <a class="fdx-nested-list__link" href="#">
                        <div class="fdx-nested-list__link-container">
                            <span class="fdx-nested-list__title">Level 2 Item</span>
                        </div>
                    </a>
                </li>
                <li class="fdx-nested-list__item">
                    <a class="fdx-nested-list__link" href="#">
                        <div class="fdx-nested-list__link-container">
                            <span class="fdx-nested-list__title">Level 2 Item</span>
                        </div>
                    </a>
                </li>
            </ul>
        </nav>
    </div>
</div>
\``,...(J=(G=r.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var K,R,Y;_.parameters={..._.parameters,docs:{...(K=_.parameters)==null?void 0:K.docs,source:{originalSource:`() => \`<div style="height: 500px;">
<div class="fd-popover">
    <div class="fd-popover__control">
    </div>

    <nav class="fdx-side-nav__popover-body fdx-side-nav__popover-body--dynamic-width fd-popover__body fd-popover__body--no-arrow"">
            <ul class="fdx-nested-list level-2">
                <li class="fdx-nested-list__item fdx-nested-list__item--header">
                    <h3 class="fdx-nested-list__link">
                        <div class="fdx-nested-list__link-container">
                            <span class="fdx-nested-list__title">Sales</span>
                        </div>
                    </h3>
                </li>
                <li class="fdx-nested-list__item">
                    <a class="fdx-nested-list__link" href="#">
                        <div class="fdx-nested-list__link-container">
                            <span class="fdx-nested-list__title">Level 2 Item</span>
                        </div>
                    </a>
                </li>
                <li class="fdx-nested-list__item">
                    <button class="fdx-nested-list__link is-selected" aria-expanded="true" aria-label="Expand Level 3">
                        <div class="fdx-nested-list__link-container">
                            <span class="fdx-nested-list__title">Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
                            <i class="fdx-nested-list__arrow sap-icon--navigation-down-arrow" role="presentation"></i>
                        </div>
                    </button>
                    <ul class="fdx-nested-list level-3" aria-hidden="false">
                            <li class="fdx-nested-list__item">
                                <a class="fdx-nested-list__link" href="#">
                                    <div class="fdx-nested-list__link-container">
                                        <span class="fdx-nested-list__title">Level 3 Item</span>
                                    </div>
                                </a>
                            </li>
                            <li class="fdx-nested-list__item">
                                <a class="fdx-nested-list__link" href="#">
                                    <div class="fdx-nested-list__link-container">
                                        <span class="fdx-nested-list__title">Level 3 Item</span>
                                    </div>
                                </a>
                            </li>
                            <li class="fdx-nested-list__item">
                                <a class="fdx-nested-list__link" href="#">
                                    <div class="fdx-nested-list__link-container">
                                        <span class="fdx-nested-list__title">Level 3 Item</span>
                                    </div>
                                </a>
                            </li>
                        </ul>
                </li>
                <li class="fdx-nested-list__item">
                    <a class="fdx-nested-list__link" href="#">
                        <div class="fdx-nested-list__link-container">
                            <span class="fdx-nested-list__title">Level 2 Item</span>
                        </div>
                    </a>
                </li>
                <li class="fdx-nested-list__item">
                    <a class="fdx-nested-list__link" href="#">
                        <div class="fdx-nested-list__link-container">
                            <span class="fdx-nested-list__title">Level 2 Item</span>
                        </div>
                    </a>
                </li>
            </ul>
        </nav>
    </div>
</div>
\``,...(Y=(R=_.parameters)==null?void 0:R.docs)==null?void 0:Y.source}}};var Z,$,ss;x.parameters={...x.parameters,docs:{...(Z=x.parameters)==null?void 0:Z.docs,source:{originalSource:`() => \`<div class="fdx-side-nav fdx-side-nav--compact fdx-side-nav--narrow">
    <nav class="fdx-side-nav__main-navigation">
        <ul class="fdx-nested-list fdx-nested-list--compact level-1">
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#" aria-label="Level 1 Item">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--home"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#" aria-label="Level 1 Item">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--map"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item fd-popover">
                <button class="fdx-nested-list__link fd-popover__control is-selected" aria-expanded="false" aria-label="Expand Level 2">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--calendar"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                        <i class="fdx-nested-list__arrow sap-icon--navigation-right-arrow" role="presentation"></i>
                    </div>
                </button>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#" aria-label="Level 1 Item">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--activities"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#" aria-label="Level 1 Item">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--bar-chart"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
        </ul>
    </nav>
    <nav class="fdx-side-nav__utility">
        <ul class="fdx-nested-list fdx-nested-list--compact level-1" aria-label="Utility Menu">
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#" aria-label="Level 1 Item">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--compare"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#" aria-label="Level 1 Item">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--chain-link"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
        </ul>
    </nav>
</div>
\``,...(ss=($=x.parameters)==null?void 0:$.docs)==null?void 0:ss.source}}};var es,is,ns;v.parameters={...v.parameters,docs:{...(es=v.parameters)==null?void 0:es.docs,source:{originalSource:`() => \`<div class="fdx-side-nav fdx-side-nav--compact fdx-side-nav--narrow">
    <nav class="fdx-side-nav__main-navigation">
        <button class="fd-button fd-button--standard fd-button--compact fdx-side-nav__button" aria-label="Move up"><i class="sap-icon--navigation-up-arrow"></i></button>
        <ul class="fdx-nested-list fdx-nested-list--compact level-1">
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#" aria-label="Level 1 Item">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--home"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#" aria-label="Level 1 Item">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--map"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item fd-popover">
                <button class="fdx-nested-list__link fd-popover__control is-selected" aria-expanded="false" aria-label="Expand Level 2">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--calendar"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                        <i class="fdx-nested-list__arrow sap-icon--navigation-right-arrow" role="presentation"></i>
                    </div>
                </button>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#" aria-label="Level 1 Item">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--activities"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#" aria-label="Level 1 Item">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--bar-chart"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
        </ul>
        <button class="fd-button fd-button--standard fd-button--compact fdx-side-nav__button" aria-label="Move up"><i class="sap-icon--navigation-down-arrow"></i></button>
    </nav>
    <nav class="fdx-side-nav__utility">
        <ul class="fdx-nested-list fdx-nested-list--compact level-1">
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#" aria-label="Level 1 Item">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--compare"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#" aria-label="Level 1 Item">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--chain-link"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
        </ul>
    </nav>
</div>
\``,...(ns=(is=v.parameters)==null?void 0:is.docs)==null?void 0:ns.source}}};var ls,ts,as;p.parameters={...p.parameters,docs:{...(ls=p.parameters)==null?void 0:ls.docs,source:{originalSource:`() => \`<div style="height: 300px;">
<div class="fd-popover">
    <div class="fd-popover__control">
    </div>

    <nav class="fdx-side-nav__popover-body fd-popover__body fd-popover__body--no-arrow"">
            <ul class="fdx-nested-list fdx-nested-list--compact level-2">
                <li class="fdx-nested-list__item fdx-nested-list__item--header">
                    <h3 class="fdx-nested-list__link">
                        <div class="fdx-nested-list__link-container">
                            <span class="fdx-nested-list__title">Sales</span>
                        </div>
                    </h3>
                </li>
                <li class="fdx-nested-list__item">
                    <a class="fdx-nested-list__link" href="#">
                        <div class="fdx-nested-list__link-container">
                            <span class="fdx-nested-list__title">Level 2 Item</span>
                        </div>
                    </a>
                </li>
                <li class="fdx-nested-list__item">
                    <button class="fdx-nested-list__link is-selected" aria-expanded="true" aria-label="Expand Level 3">
                        <div class="fdx-nested-list__link-container">
                            <span class="fdx-nested-list__title">Level 2 Item</span>
                            <i class="fdx-nested-list__arrow sap-icon--navigation-down-arrow" role="presentation"></i>
                        </div>
                    </button>
                    <ul class="fdx-nested-list level-3" aria-hidden="false">
                            <li class="fdx-nested-list__item">
                                <a class="fdx-nested-list__link" href="#">
                                    <div class="fdx-nested-list__link-container">
                                        <span class="fdx-nested-list__title">Level 3 Item</span>
                                    </div>
                                </a>
                            </li>
                            <li class="fdx-nested-list__item">
                                <a class="fdx-nested-list__link" href="#">
                                    <div class="fdx-nested-list__link-container">
                                        <span class="fdx-nested-list__title">Level 3 Item</span>
                                    </div>
                                </a>
                            </li>
                            <li class="fdx-nested-list__item">
                                <a class="fdx-nested-list__link" href="#">
                                    <div class="fdx-nested-list__link-container">
                                        <span class="fdx-nested-list__title">Level 3 Item</span>
                                    </div>
                                </a>
                            </li>
                        </ul>
                </li>
                <li class="fdx-nested-list__item">
                    <a class="fdx-nested-list__link" href="#">
                        <div class="fdx-nested-list__link-container">
                            <span class="fdx-nested-list__title">Level 2 Item</span>
                        </div>
                    </a>
                </li>
                <li class="fdx-nested-list__item">
                    <a class="fdx-nested-list__link" href="#">
                        <div class="fdx-nested-list__link-container">
                            <span class="fdx-nested-list__title">Level 2 Item</span>
                        </div>
                    </a>
                </li>
            </ul>
        </nav>
    </div>
</div>
\``,...(as=(ts=p.parameters)==null?void 0:ts.docs)==null?void 0:as.source}}};var ds,_s,cs;c.parameters={...c.parameters,docs:{...(ds=c.parameters)==null?void 0:ds.docs,source:{originalSource:`() => \`<div class="fdx-side-nav" style="max-height: 500px;">
    <nav class="fdx-side-nav__main-navigation" aria-label="Main Menu">
        <div class="fd-input-group fdx-side-nav__input-group">
            <input class="fd-input fd-input-group__input" type="text" placeholder="Filter">
            <span class="fd-input-group__addon fd-input-group__addon--button">
                    <button class="fd-input-group__button fd-button fd-button--icon fd-button--transparent" aria-label="Search">
                        <i class="sap-icon--search"></i>
                    </button>
                </span>
        </div>
        <ul class="fdx-nested-list level-1">
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--home"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link is-selected" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--calendar"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--employee"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--activities"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--lightbulb"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
        </ul>
    </nav>
    <nav class="fdx-side-nav__utility" aria-label="Utility Menu">
        <ul class="fdx-nested-list level-1">
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--compare"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fdx-nested-list__item">
                <a class="fdx-nested-list__link" href="#">
                    <div class="fdx-nested-list__link-container">
                        <i role="presentation" class="fdx-nested-list__icon sap-icon--chain-link"></i>
                        <span class="fdx-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
        </ul>
    </nav>
</div>
\``,...(cs=(_s=c.parameters)==null?void 0:_s.docs)==null?void 0:cs.source}}};const ms=["CozyWideIcons","CozyWideTextOnly","DynamicWidth","CosyWideTextOnlyLevels","CosyWideIconsLevels","CosyWideIconsLevelsMultiClick","CompactWideIcons","CompactWideIconsNavCollapse","CosyNarrow","CosyNarrowOverflow","CosyNarrowPopover","CosyNarrowPopoverDynamicWidth","CompactNarrow","CompactNarrowOverflow","CompactNarrowPopover","CozyWideIconsSearch"];export{x as CompactNarrow,v as CompactNarrowOverflow,p as CompactNarrowPopover,t as CompactWideIcons,a as CompactWideIconsNavCollapse,d as CosyNarrow,f as CosyNarrowOverflow,r as CosyNarrowPopover,_ as CosyNarrowPopoverDynamicWidth,n as CosyWideIconsLevels,l as CosyWideIconsLevelsMultiClick,i as CosyWideTextOnlyLevels,s as CozyWideIcons,c as CozyWideIconsSearch,e as CozyWideTextOnly,o as DynamicWidth,ms as __namedExportsOrder,ps as default};
//# sourceMappingURL=cx-side-navigation.stories-831ae753.js.map
