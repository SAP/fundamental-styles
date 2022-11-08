import '../../../src/side-nav.scss';
import '../../../src/_nested-list.scss';
import '../../../../styles/src/button.scss';
import '../../../../styles/src/icon.scss';
import '../../../../styles/src/popover.scss';
import '../../../../styles/src/input.scss';
import '../../../../styles/src/input-group.scss';

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
    }
};



export const CozyWideIcons = () => `<div class="fd-side-nav" style="max-height: 500px;">
    <nav class="fd-side-nav__main-navigation" aria-label="Main Menu">
        <ul class="fd-nested-list level-1">
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link" href="#">
                    <div class="fd-nested-list__link-container">
                        <i role="presentation" class="fd-nested-list__icon sap-icon--home"></i>
                        <span class="fd-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link is-selected" href="#">
                    <div class="fd-nested-list__link-container">
                        <i role="presentation" class="fd-nested-list__icon sap-icon--calendar"></i>
                        <span class="fd-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link" href="#">
                    <div class="fd-nested-list__link-container">
                        <i role="presentation" class="fd-nested-list__icon sap-icon--employee"></i>
                        <span class="fd-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link" href="#">
                    <div class="fd-nested-list__link-container">
                        <i role="presentation" class="fd-nested-list__icon sap-icon--activities"></i>
                        <span class="fd-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link" href="#">
                    <div class="fd-nested-list__link-container">
                        <i role="presentation" class="fd-nested-list__icon sap-icon--lightbulb"></i>
                        <span class="fd-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link" href="#">
                    <div class="fd-nested-list__link-container">
                        <i role="presentation" class="fd-nested-list__icon sap-icon--history"></i>
                        <span class="fd-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link" href="#">
                    <div class="fd-nested-list__link-container">
                        <i role="presentation" class="fd-nested-list__icon sap-icon--future"></i>
                        <span class="fd-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link" href="#">
                    <div class="fd-nested-list__link-container">
                        <i role="presentation" class="fd-nested-list__icon sap-icon--activities"></i>
                        <span class="fd-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link" href="#">
                    <div class="fd-nested-list__link-container">
                        <i role="presentation" class="fd-nested-list__icon sap-icon--lead"></i>
                        <span class="fd-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link" href="#">
                    <div class="fd-nested-list__link-container">
                        <i role="presentation" class="fd-nested-list__icon sap-icon--notes"></i>
                        <span class="fd-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link" href="#">
                    <div class="fd-nested-list__link-container">
                        <i role="presentation" class="fd-nested-list__icon sap-icon--map"></i>
                        <span class="fd-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link" href="#">
                    <div class="fd-nested-list__link-container">
                        <i role="presentation" class="fd-nested-list__icon sap-icon--log"></i>
                        <span class="fd-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link" href="#">
                    <div class="fd-nested-list__link-container">
                        <i role="presentation" class="fd-nested-list__icon sap-icon--phone"></i>
                        <span class="fd-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link" href="#">
                    <div class="fd-nested-list__link-container">
                        <i role="presentation" class="fd-nested-list__icon sap-icon--product"></i>
                        <span class="fd-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
        </ul>
    </nav>
    <nav class="fd-side-nav__utility" aria-label="Utility Menu">
        <ul class="fd-nested-list level-1">
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link" href="#">
                    <div class="fd-nested-list__link-container">
                        <i role="presentation" class="fd-nested-list__icon sap-icon--compare"></i>
                        <span class="fd-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link" href="#">
                    <div class="fd-nested-list__link-container">
                        <i role="presentation" class="fd-nested-list__icon sap-icon--chain-link"></i>
                        <span class="fd-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
        </ul>
    </nav>
</div>
`;

CozyWideIcons.storyName = 'Cosy Wide With Icon, 1 Level';

CozyWideIcons.parameters = {
    docs: {
        iframeHeight: 400,
        description: {
            story: `
        `
        }
    }
};

export const CozyWideTextOnly = () => `<div class="fd-side-nav">
    <nav class="fd-side-nav__main-navigation" aria-label="Main Menu">
        <ul class="fd-nested-list fd-nested-list--text-only level-1" aria-label="Main Menu">
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link" href="#">
                    <div class="fd-nested-list__link-container">
                        <span class="fd-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link is-selected" href="#">
                    <div class="fd-nested-list__link-container">
                        <span class="fd-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link" href="#">
                    <div class="fd-nested-list__link-container">
                        <span class="fd-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link" href="#">
                    <div class="fd-nested-list__link-container">
                        <span class="fd-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link" href="#">
                    <div class="fd-nested-list__link-container">
                        <span class="fd-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            
        </ul>
    </nav>
    <nav class="fd-side-nav__utility" aria-label="Utility Menu">
        <ul class="fd-nested-list fd-nested-list--text-only level-1" aria-label="Utility Menu">
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link" href="#">
                    <div class="fd-nested-list__link-container">
                        <span class="fd-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link" href="#">
                    <div class="fd-nested-list__link-container">
                        <span class="fd-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
        </ul>
    </nav>
</div>
`;

CozyWideTextOnly.storyName = 'Cosy Wide Text Only, 1 Level';

CozyWideTextOnly.parameters = {
    docs: {
        iframeHeight: 400,
        description: {
            story: '<b>Important: </b>This type of Side Navigation does not have <code>Narrow</code> variant.'
        }
    }
};

export const DynamicWidth = () => `<div class="fd-side-nav fd-side-nav--dynamic-width" style="max-height: 500px;">
    <nav class="fd-side-nav__main-navigation" aria-label="Main Menu">
        <ul class="fd-nested-list level-1">
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link" href="#">
                    <div class="fd-nested-list__link-container">
                        <i role="presentation" class="fd-nested-list__icon sap-icon--home"></i>
                        <span class="fd-nested-list__title">Overview</span>
                    </div>
                </a>
            </li>
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link is-selected" href="#">
                    <div class="fd-nested-list__link-container">
                        <i role="presentation" class="fd-nested-list__icon sap-icon--calendar"></i>
                        <span class="fd-nested-list__title">Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
                    </div>
                </a>
            </li>
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link" href="#">
                    <div class="fd-nested-list__link-container">
                        <i role="presentation" class="fd-nested-list__icon sap-icon--employee"></i>
                        <span class="fd-nested-list__title">Sed do eiusmod tempor incididunt ut labore</span>
                    </div>
                </a>
            </li>
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link" href="#">
                    <div class="fd-nested-list__link-container">
                        <i role="presentation" class="fd-nested-list__icon sap-icon--activities"></i>
                        <span class="fd-nested-list__title">Nemo enim ipsam</span>
                    </div>
                </a>
            </li>
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link" href="#">
                    <div class="fd-nested-list__link-container">
                        <i role="presentation" class="fd-nested-list__icon sap-icon--lightbulb"></i>
                        <span class="fd-nested-list__title">Neque porro quisquam est, qui dolorem ipsum</span>
                    </div>
                </a>
            </li>
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link" href="#">
                    <div class="fd-nested-list__link-container">
                        <i role="presentation" class="fd-nested-list__icon sap-icon--history"></i>
                        <span class="fd-nested-list__title">Quis autem vel eum iure</span>
                    </div>
                </a>
            </li>
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link" href="#">
                    <div class="fd-nested-list__link-container">
                        <i role="presentation" class="fd-nested-list__icon sap-icon--future"></i>
                        <span class="fd-nested-list__title">Excepteur sint occaecat cupidatat</span>
                    </div>
                </a>
            </li>
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link" href="#">
                    <div class="fd-nested-list__link-container">
                        <i role="presentation" class="fd-nested-list__icon sap-icon--activities"></i>
                        <span class="fd-nested-list__title">Ut enim ad minima veniam</span>
                    </div>
                </a>
            </li>
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link" href="#">
                    <div class="fd-nested-list__link-container">
                        <i role="presentation" class="fd-nested-list__icon sap-icon--lead"></i>
                        <span class="fd-nested-list__title">Neque porro quisquam</span>
                    </div>
                </a>
            </li>
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link" href="#">
                    <div class="fd-nested-list__link-container">
                        <i role="presentation" class="fd-nested-list__icon sap-icon--notes"></i>
                        <span class="fd-nested-list__title">Excepteur sint occaecat cupidatat</span>
                    </div>
                </a>
            </li>
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link" href="#">
                    <div class="fd-nested-list__link-container">
                        <i role="presentation" class="fd-nested-list__icon sap-icon--map"></i>
                        <span class="fd-nested-list__title">Neque porro quisquam</span>
                    </div>
                </a>
            </li>
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link" href="#">
                    <div class="fd-nested-list__link-container">
                        <i role="presentation" class="fd-nested-list__icon sap-icon--log"></i>
                        <span class="fd-nested-list__title">Ut enim ad minima veniam</span>
                    </div>
                </a>
            </li>
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link" href="#">
                    <div class="fd-nested-list__link-container">
                        <i role="presentation" class="fd-nested-list__icon sap-icon--phone"></i>
                        <span class="fd-nested-list__title">Excepteur sint occaecat cupidatat</span>
                    </div>
                </a>
            </li>
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link" href="#">
                    <div class="fd-nested-list__link-container">
                        <i role="presentation" class="fd-nested-list__icon sap-icon--product"></i>
                        <span class="fd-nested-list__title">Ut enim ad minima veniam</span>
                    </div>
                </a>
            </li>
        </ul>
    </nav>
    <nav class="fd-side-nav__utility" aria-label="Utility Menu">
        <ul class="fd-nested-list level-1">
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link" href="#">
                    <div class="fd-nested-list__link-container">
                        <i role="presentation" class="fd-nested-list__icon sap-icon--compare"></i>
                        <span class="fd-nested-list__title">Duis aute irure dolor </span>
                    </div>
                </a>
            </li>
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link" href="#">
                    <div class="fd-nested-list__link-container">
                        <i role="presentation" class="fd-nested-list__icon sap-icon--chain-link"></i>
                        <span class="fd-nested-list__title">Neque porro quisquam</span>
                    </div>
                </a>
            </li>
        </ul>
    </nav>
</div>
`;

DynamicWidth.parameters = {
    docs: {
        iframeHeight: 400,
        description: {
            story: `Side Navigation can react dynamically to long label texts in navigational items. In such case the width of the Side Navigation is adapted by the longest label. The label does not wrap or truncate. Use the modifier class <code>.fd-side-nav--dynamic-width</code> for Side Navigation with dynamic width.

        `
        }
    }
};

export const CosyWideTextOnlyLevels = () => `<div class="fd-side-nav">
    <nav class="fd-side-nav__main-navigation" aria-label="Main Menu">
        <ul class="fd-nested-list fd-nested-list--text-only level-1">
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link" href="#">
                    <div class="fd-nested-list__link-container">
                        <span class="fd-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link" href="#">
                    <div class="fd-nested-list__link-container">
                        <span class="fd-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fd-nested-list__item">
                <button class="fd-nested-list__link" aria-expanded="true" aria-label="Expand Level 2">
                    <div class="fd-nested-list__link-container">
                        <span class="fd-nested-list__title">Level 1 Item</span>
                        <i class="fd-nested-list__arrow sap-icon--navigation-down-arrow" role="presentation"></i>
                    </div>
                </button>
                <ul class="fd-nested-list level-2" aria-hidden="false">
                    <li class="fd-nested-list__item">
                        <button class="fd-nested-list__link is-selected" aria-expanded="true" aria-label="Expand Level 3">
                            <div class="fd-nested-list__link-container">
                                <span class="fd-nested-list__title">Level 2 Item</span>
                                <i class="fd-nested-list__arrow sap-icon--navigation-down-arrow" role="presentation"></i>
                            </div>
                        </button>
                        <ul class="fd-nested-list level-3" aria-hidden="false">
                            <li class="fd-nested-list__item">
                                <a class="fd-nested-list__link" href="#">
                                    <div class="fd-nested-list__link-container">
                                        <span class="fd-nested-list__title">Level 3 Item</span>
                                    </div>
                                </a>
                            </li>
                            <li class="fd-nested-list__item">
                                <a class="fd-nested-list__link" href="#">
                                    <div class="fd-nested-list__link-container">
                                        <span class="fd-nested-list__title">Level 3 Item</span>
                                    </div>
                                </a>
                            </li>
                            <li class="fd-nested-list__item">
                                <a class="fd-nested-list__link is-selected" href="#">
                                    <div class="fd-nested-list__link-container">
                                        <span class="fd-nested-list__title">Level 3 Item</span>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li class="fd-nested-list__item">
                        <a class="fd-nested-list__link" href="#">
                            <div class="fd-nested-list__link-container">
                                <span class="fd-nested-list__title">Level 2 Item</span>
                            </div>
                        </a>
                    </li>
                    <li class="fd-nested-list__item">
                        <a class="fd-nested-list__link" href="#">
                            <div class="fd-nested-list__link-container">
                                <span class="fd-nested-list__title">Level 3 Item</span>
                            </div>
                        </a>
                    </li>
                </ul>
            </li>
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link" href="#">
                    <div class="fd-nested-list__link-container">
                        <span class="fd-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link" href="#">
                    <div class="fd-nested-list__link-container">
                        <span class="fd-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
        </ul>
    </nav>
    <nav class="fd-side-nav__utility" aria-label="Utility Menu">
        <ul class="fd-nested-list fd-nested-list--text-only level-1" aria-label="Utility Menu">
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link" href="#">
                    <div class="fd-nested-list__link-container">
                        <span class="fd-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link" href="#">
                    <div class="fd-nested-list__link-container">
                        <span class="fd-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
        </ul>
    </nav>
</div>
`;

CosyWideTextOnlyLevels.storyName = 'Cosy Wide Text Only, 3 Levels';

CosyWideTextOnlyLevels.parameters = {
    docs: {
        iframeHeight: 400,
        description: {
            story: `<b>Important: </b>This type of Side Navigation does not have <code>Narrow</code> variant.
        `
        }
    }
};

export const CosyWideIconsLevels = () => `<div class="fd-side-nav">
    <nav class="fd-side-nav__main-navigation" aria-label="Main Menu">
        <ul class="fd-nested-list level-1" aria-labelledby="EX400H1">
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link" href="#">
                    <div class="fd-nested-list__link-container">
                        <i role="presentation" class="fd-nested-list__icon sap-icon--home"></i>
                        <span class="fd-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link" href="#">
                    <div class="fd-nested-list__link-container">
                        <i role="presentation" class="fd-nested-list__icon sap-icon--map"></i>
                        <span class="fd-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fd-nested-list__item">
                <button class="fd-nested-list__link" aria-expanded="true" aria-label="Expand Level 2">
                    <div class="fd-nested-list__link-container">
                        <i role="presentation" class="fd-nested-list__icon sap-icon--calendar"></i>
                        <span class="fd-nested-list__title">Level 1 Item</span>
                        <i class="fd-nested-list__arrow sap-icon--navigation-down-arrow" role="presentation"></i>
                    </div>
                </button>
                <ul class="fd-nested-list level-2" aria-hidden="false">
                    <li class="fd-nested-list__item">
                        <button class="fd-nested-list__link is-selected" aria-expanded="true" aria-label="Expand Level 3">
                            <div class="fd-nested-list__link-container">
                                <span class="fd-nested-list__title">Level 2 Item</span>
                                <i class="fd-nested-list__arrow sap-icon--navigation-down-arrow" role="presentation"></i>
                            </div>
                        </button>
                        <ul class="fd-nested-list level-3" aria-hidden="false">
                            <li class="fd-nested-list__item">
                                <a class="fd-nested-list__link" href="#">
                                    <div class="fd-nested-list__link-container">
                                        <span class="fd-nested-list__title">Level 3 Item</span>
                                    </div>
                                </a>
                            </li>
                            <li class="fd-nested-list__item">
                                <a class="fd-nested-list__link is-selected" href="#">
                                    <div class="fd-nested-list__link-container">
                                        <span class="fd-nested-list__title">Level 3 Item</span>
                                    </div>
                                </a>
                            </li>
                            <li class="fd-nested-list__item">
                                <a class="fd-nested-list__link" href="#">
                                    <div class="fd-nested-list__link-container">
                                        <span class="fd-nested-list__title">Level 3 Item</span>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li class="fd-nested-list__item">
                        <a class="fd-nested-list__link" href="#">
                            <div class="fd-nested-list__link-container">
                                <span class="fd-nested-list__title">Level 2 Item</span>
                            </div>
                        </a>
                    </li>
                    <li class="fd-nested-list__item">
                        <a class="fd-nested-list__link" href="#">
                            <div class="fd-nested-list__link-container">
                                <span class="fd-nested-list__title">Level 2 Item</span>
                            </div>
                        </a>
                    </li>
                </ul>
            </li>
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link" href="#">
                    <div class="fd-nested-list__link-container">
                        <i role="presentation" class="fd-nested-list__icon sap-icon--activities"></i>
                        <span class="fd-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
        </ul>
    </nav>
    <nav class="fd-side-nav__utility" aria-label="Utility Menu">
        <ul class="fd-nested-list level-1" aria-label="Utility Menu">
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link" href="#">
                    <div class="fd-nested-list__link-container">
                        <i role="presentation" class="fd-nested-list__icon sap-icon--compare"></i>
                        <span class="fd-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link" href="#">
                    <div class="fd-nested-list__link-container">
                        <i role="presentation" class="fd-nested-list__icon sap-icon--chain-link"></i>
                        <span class="fd-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
        </ul>
    </nav>
</div>
`;

CosyWideIconsLevels.storyName = 'Cosy Wide With Icons, 3 Levels';

CosyWideIconsLevels.parameters = {
    docs: {
        iframeHeight: 550,
        description: {
            story: `
        `
        }
    }
};

export const CompactWideIcons = () => `<div class="fd-side-nav fd-side-nav--compact">
    <nav class="fd-side-nav__main-navigation" aria-label="Main Menu">
        <ul class="fd-nested-list fd-nested-list--compact level-1" aria-labelledby="EX500H1">
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link" href="#">
                    <div class="fd-nested-list__link-container">
                        <i role="presentation" class="fd-nested-list__icon sap-icon--home"></i>
                        <span class="fd-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link" href="#">
                    <div class="fd-nested-list__link-container">
                        <i role="presentation" class="fd-nested-list__icon sap-icon--map"></i>
                        <span class="fd-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fd-nested-list__item">
                <button class="fd-nested-list__link is-selected" aria-expanded="false" aria-label="Expand Level 2">
                    <div class="fd-nested-list__link-container">
                        <i role="presentation" class="fd-nested-list__icon sap-icon--calendar"></i>
                        <span class="fd-nested-list__title">Level 1 Item</span>
                        <i class="fd-nested-list__arrow sap-icon--navigation-right-arrow" role="presentation"></i>
                    </div>
                </button>

                <ul class="fd-nested-list level-2" aria-hidden="true">
                    <li class="fd-nested-list__item">
                        <a class="fd-nested-list__link" href="#">
                            <div class="fd-nested-list__link-container">
                                <span class="fd-nested-list__title">Level 2 Item</span>
                            </div>
                        </a>
                    </li>
                    <li class="fd-nested-list__item">
                        <a class="fd-nested-list__link" href="#">
                            <div class="fd-nested-list__link-container">
                                <span class="fd-nested-list__title">Level 2 Item</span>
                            </div>
                        </a>
                    </li>
                    <li class="fd-nested-list__item">
                        <a class="fd-nested-list__link" href="#">
                            <div class="fd-nested-list__link-container">
                                <span class="fd-nested-list__title">Level 2 Item</span>
                            </div>
                        </a>
                    </li>
                </ul>
            </li>
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link" href="#">
                    <div class="fd-nested-list__link-container">
                        <i role="presentation" class="fd-nested-list__icon sap-icon--activities"></i>
                        <span class="fd-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
        </ul>
    </nav>
    <nav class="fd-side-nav__utility" aria-label="Utility Menu">
        <ul class="fd-nested-list fd-nested-list--compact level-1" aria-label="Utility Menu">
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link" href="#">
                    <div class="fd-nested-list__link-container">
                        <i role="presentation" class="fd-nested-list__icon sap-icon--compare"></i>
                        <span class="fd-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link" href="#">
                    <div class="fd-nested-list__link-container">
                        <i role="presentation" class="fd-nested-list__icon sap-icon--chain-link"></i>
                        <span class="fd-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
        </ul>
    </nav>
</div>
`;

CompactWideIcons.storyName = 'Compact Wide With Icons, Level 2 Collapsed';

CompactWideIcons.parameters = {
    docs: {
        iframeHeight: 550,
        description: {
            story: `For compact Side Navigation apply the <code>.fd-side-nav--compact</code> modifier class with <code>.fd-side-nav</code> base class, and <code>.fd-nested-list--compact</code> modifier class with <code>.fd-nested-list</code> base class.
        `
        }
    }
};

export const CosyNarrow = () => `<div class="fd-side-nav fd-side-nav--narrow">
    <nav class="fd-side-nav__main-navigation">
        <ul class="fd-nested-list level-1">
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link" href="#" aria-label="Level 1 Item">
                    <div class="fd-nested-list__link-container">
                        <i role="presentation" class="fd-nested-list__icon sap-icon--home"></i>
                        <span class="fd-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link" href="#" aria-label="Level 1 Item">
                    <div class="fd-nested-list__link-container">
                        <i role="presentation" class="fd-nested-list__icon sap-icon--map"></i>
                        <span class="fd-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fd-nested-list__item fd-popover">
                <button class="fd-nested-list__link fd-popover__control is-selected" aria-expanded="false" aria-label="Expand Level 2">
                    <div class="fd-nested-list__link-container">
                        <i role="presentation" class="fd-nested-list__icon sap-icon--calendar"></i>
                        <span class="fd-nested-list__title">Level 1 Item</span>
                        <i class="fd-nested-list__arrow sap-icon--navigation-right-arrow" role="presentation"></i>
                    </div>
                </button>
            </li>
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link" href="#" aria-label="Level 1 Item">
                    <div class="fd-nested-list__link-container">
                        <i role="presentation" class="fd-nested-list__icon sap-icon--activities"></i>
                        <span class="fd-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link" href="#" aria-label="Level 1 Item">
                    <div class="fd-nested-list__link-container">
                        <i role="presentation" class="fd-nested-list__icon sap-icon--bar-chart"></i>
                        <span class="fd-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
        </ul>
    </nav>
    <nav class="fd-side-nav__utility">
        <ul class="fd-nested-list level-1">
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link" href="#" aria-label="Level 1 Item">
                    <div class="fd-nested-list__link-container">
                        <i role="presentation" class="fd-nested-list__icon sap-icon--compare"></i>
                        <span class="fd-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link" href="#" aria-label="Level 1 Item">
                    <div class="fd-nested-list__link-container">
                        <i role="presentation" class="fd-nested-list__icon sap-icon--chain-link"></i>
                        <span class="fd-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
        </ul>
    </nav>
</div>
`;

CosyNarrow.storyName = 'Cosy Narrow, Levels 2 and 3 in Popover Hidden';

CosyNarrow.parameters = {
    docs: {
        iframeHeight: 500,
        description: {
            story: `For <code>Narrow</code> variant of Side Navigation apply <code>.fd-side-nav--narrow</code> modifier class to <code>.fd-side-nav</code> base class.
        `
        }
    }
};

export const CosyNarrowOverflow = () => `<div class="fd-side-nav fd-side-nav--narrow">
    <nav class="fd-side-nav__main-navigation">
        <button class="fd-button fd-button--transparent fd-side-nav__button" aria-label="Move up"><i class="sap-icon--navigation-up-arrow"></i></button>
        <ul class="fd-nested-list level-1">
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link" href="#" aria-label="Level 1 Item">
                    <div class="fd-nested-list__link-container">
                        <i role="presentation" class="fd-nested-list__icon sap-icon--home"></i>
                        <span class="fd-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link" href="#" aria-label="Level 1 Item">
                    <div class="fd-nested-list__link-container">
                        <i role="presentation" class="fd-nested-list__icon sap-icon--map"></i>
                        <span class="fd-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fd-nested-list__item fd-popover">
                <button class="fd-nested-list__link fd-popover__control is-selected" aria-expanded="false" aria-label="Expand Level 2">
                    <div class="fd-nested-list__link-container">
                        <i role="presentation" class="fd-nested-list__icon sap-icon--calendar"></i>
                        <span class="fd-nested-list__title">Level 1 Item</span>
                        <i class="fd-nested-list__arrow sap-icon--navigation-right-arrow" role="presentation"></i>
                    </div>
                </button>
            </li>
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link" href="#" aria-label="Level 1 Item">
                    <div class="fd-nested-list__link-container">
                        <i role="presentation" class="fd-nested-list__icon sap-icon--activities"></i>
                        <span class="fd-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link" href="#" aria-label="Level 1 Item">
                    <div class="fd-nested-list__link-container">
                        <i role="presentation" class="fd-nested-list__icon sap-icon--bar-chart"></i>
                        <span class="fd-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
        </ul>
        <button class="fd-button fd-button--transparent fd-side-nav__button" aria-label="Move up"><i class="sap-icon--navigation-down-arrow"></i></button>
    </nav>
    <nav class="fd-side-nav__utility">
        <ul class="fd-nested-list level-1">
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link" href="#" aria-label="Level 1 Item">
                    <div class="fd-nested-list__link-container">
                        <i role="presentation" class="fd-nested-list__icon sap-icon--compare"></i>
                        <span class="fd-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link" href="#" aria-label="Level 1 Item">
                    <div class="fd-nested-list__link-container">
                        <i role="presentation" class="fd-nested-list__icon sap-icon--chain-link"></i>
                        <span class="fd-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
        </ul>
    </nav>
</div>
`;

CosyNarrowOverflow.storyName = 'Cosy Narrow with Vertical Overflow Behaviour, Levels 2 and 3 in Popover Hidden';

export const CosyNarrowPopover = () => `<div style="height: 500px;">
<div class="fd-popover">
    <div class="fd-popover__control">
    </div>

    <nav class="fd-side-nav__popover-body fd-popover__body fd-popover__body--no-arrow"">
            <ul class="fd-nested-list level-2">
                <li class="fd-nested-list__item fd-nested-list__item--header">
                    <h3 class="fd-nested-list__link">
                        <div class="fd-nested-list__link-container">
                            <span class="fd-nested-list__title">Sales</span>
                        </div>
                    </h3>
                </li>
                <li class="fd-nested-list__item">
                    <a class="fd-nested-list__link" href="#">
                        <div class="fd-nested-list__link-container">
                            <span class="fd-nested-list__title">Level 2 Item</span>
                        </div>
                    </a>
                </li>
                <li class="fd-nested-list__item">
                    <button class="fd-nested-list__link is-selected" aria-expanded="true" aria-label="Expand Level 3">
                        <div class="fd-nested-list__link-container">
                            <span class="fd-nested-list__title">Level 2 Item</span>
                            <i class="fd-nested-list__arrow sap-icon--navigation-down-arrow" role="presentation"></i>
                        </div>
                    </button>
                    <ul class="fd-nested-list level-3" aria-hidden="false">
                            <li class="fd-nested-list__item">
                                <a class="fd-nested-list__link" href="#">
                                    <div class="fd-nested-list__link-container">
                                        <span class="fd-nested-list__title">Level 3 Item</span>
                                    </div>
                                </a>
                            </li>
                            <li class="fd-nested-list__item">
                                <a class="fd-nested-list__link" href="#">
                                    <div class="fd-nested-list__link-container">
                                        <span class="fd-nested-list__title">Level 3 Item</span>
                                    </div>
                                </a>
                            </li>
                            <li class="fd-nested-list__item">
                                <a class="fd-nested-list__link" href="#">
                                    <div class="fd-nested-list__link-container">
                                        <span class="fd-nested-list__title">Level 3 Item</span>
                                    </div>
                                </a>
                            </li>
                        </ul>
                </li>
                <li class="fd-nested-list__item">
                    <a class="fd-nested-list__link" href="#">
                        <div class="fd-nested-list__link-container">
                            <span class="fd-nested-list__title">Level 2 Item</span>
                        </div>
                    </a>
                </li>
                <li class="fd-nested-list__item">
                    <a class="fd-nested-list__link" href="#">
                        <div class="fd-nested-list__link-container">
                            <span class="fd-nested-list__title">Level 2 Item</span>
                        </div>
                    </a>
                </li>
            </ul>
        </nav>
    </div>
</div>
`;

CosyNarrowPopover.parameters = {
    docs: {
        iframeHeight: 1000,
        description: {
            story: `
        `
        }
    }
};

export const CosyNarrowPopoverDynamicWidth = () => `<div style="height: 500px;">
<div class="fd-popover">
    <div class="fd-popover__control">
    </div>

    <nav class="fd-side-nav__popover-body fd-side-nav__popover-body--dynamic-width fd-popover__body fd-popover__body--no-arrow"">
            <ul class="fd-nested-list level-2">
                <li class="fd-nested-list__item fd-nested-list__item--header">
                    <h3 class="fd-nested-list__link">
                        <div class="fd-nested-list__link-container">
                            <span class="fd-nested-list__title">Sales</span>
                        </div>
                    </h3>
                </li>
                <li class="fd-nested-list__item">
                    <a class="fd-nested-list__link" href="#">
                        <div class="fd-nested-list__link-container">
                            <span class="fd-nested-list__title">Level 2 Item</span>
                        </div>
                    </a>
                </li>
                <li class="fd-nested-list__item">
                    <button class="fd-nested-list__link is-selected" aria-expanded="true" aria-label="Expand Level 3">
                        <div class="fd-nested-list__link-container">
                            <span class="fd-nested-list__title">Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
                            <i class="fd-nested-list__arrow sap-icon--navigation-down-arrow" role="presentation"></i>
                        </div>
                    </button>
                    <ul class="fd-nested-list level-3" aria-hidden="false">
                            <li class="fd-nested-list__item">
                                <a class="fd-nested-list__link" href="#">
                                    <div class="fd-nested-list__link-container">
                                        <span class="fd-nested-list__title">Level 3 Item</span>
                                    </div>
                                </a>
                            </li>
                            <li class="fd-nested-list__item">
                                <a class="fd-nested-list__link" href="#">
                                    <div class="fd-nested-list__link-container">
                                        <span class="fd-nested-list__title">Level 3 Item</span>
                                    </div>
                                </a>
                            </li>
                            <li class="fd-nested-list__item">
                                <a class="fd-nested-list__link" href="#">
                                    <div class="fd-nested-list__link-container">
                                        <span class="fd-nested-list__title">Level 3 Item</span>
                                    </div>
                                </a>
                            </li>
                        </ul>
                </li>
                <li class="fd-nested-list__item">
                    <a class="fd-nested-list__link" href="#">
                        <div class="fd-nested-list__link-container">
                            <span class="fd-nested-list__title">Level 2 Item</span>
                        </div>
                    </a>
                </li>
                <li class="fd-nested-list__item">
                    <a class="fd-nested-list__link" href="#">
                        <div class="fd-nested-list__link-container">
                            <span class="fd-nested-list__title">Level 2 Item</span>
                        </div>
                    </a>
                </li>
            </ul>
        </nav>
    </div>
</div>
`;

CosyNarrowPopoverDynamicWidth.storyName = 'Cosy Narrow Popover with Dynamic Width';

CosyNarrowPopoverDynamicWidth.parameters = {
    docs: {
        iframeHeight: 1000,
        description: {
            story: `Side Navigation Popover can react dynamically to long label texts in navigational items. In such case the width of the Side Navigation Popover is adapted by the longest label. The label does not wrap or truncate. Use the modifier class <code>.fd-side-nav__popover-body--dynamic-width</code> modifier class with <code>.fd-side-nav__popover-body</code> base class for Side Navigation Popover with dynamic width.
        `
        }
    }
};

export const CompactNarrow = () => `<div class="fd-side-nav fd-side-nav--compact fd-side-nav--narrow">
    <nav class="fd-side-nav__main-navigation">
        <ul class="fd-nested-list fd-nested-list--compact level-1">
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link" href="#" aria-label="Level 1 Item">
                    <div class="fd-nested-list__link-container">
                        <i role="presentation" class="fd-nested-list__icon sap-icon--home"></i>
                        <span class="fd-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link" href="#" aria-label="Level 1 Item">
                    <div class="fd-nested-list__link-container">
                        <i role="presentation" class="fd-nested-list__icon sap-icon--map"></i>
                        <span class="fd-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fd-nested-list__item fd-popover">
                <button class="fd-nested-list__link fd-popover__control is-selected" aria-expanded="false" aria-label="Expand Level 2">
                    <div class="fd-nested-list__link-container">
                        <i role="presentation" class="fd-nested-list__icon sap-icon--calendar"></i>
                        <span class="fd-nested-list__title">Level 1 Item</span>
                        <i class="fd-nested-list__arrow sap-icon--navigation-right-arrow" role="presentation"></i>
                    </div>
                </button>
            </li>
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link" href="#" aria-label="Level 1 Item">
                    <div class="fd-nested-list__link-container">
                        <i role="presentation" class="fd-nested-list__icon sap-icon--activities"></i>
                        <span class="fd-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link" href="#" aria-label="Level 1 Item">
                    <div class="fd-nested-list__link-container">
                        <i role="presentation" class="fd-nested-list__icon sap-icon--bar-chart"></i>
                        <span class="fd-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
        </ul>
    </nav>
    <nav class="fd-side-nav__utility">
        <ul class="fd-nested-list fd-nested-list--compact level-1" aria-label="Utility Menu">
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link" href="#" aria-label="Level 1 Item">
                    <div class="fd-nested-list__link-container">
                        <i role="presentation" class="fd-nested-list__icon sap-icon--compare"></i>
                        <span class="fd-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link" href="#" aria-label="Level 1 Item">
                    <div class="fd-nested-list__link-container">
                        <i role="presentation" class="fd-nested-list__icon sap-icon--chain-link"></i>
                        <span class="fd-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
        </ul>
    </nav>
</div>
`;

CompactNarrow.parameters = {
    docs: {
        iframeHeight: 500,
        description: {
            story: `For <code>Narrow</code> variant of Side Navigation in compact mode apply <code>.fd-side-nav--narrow</code> and <code>.fd-side-nav--compact</code> modifier classed to <code>.fd-side-nav</code> base class.
`
        }
    }
};

export const CompactNarrowOverflow = () => `<div class="fd-side-nav fd-side-nav--compact fd-side-nav--narrow">
    <nav class="fd-side-nav__main-navigation">
        <button class="fd-button fd-button--transparent fd-button--compact fd-side-nav__button" aria-label="Move up"><i class="sap-icon--navigation-up-arrow"></i></button>
        <ul class="fd-nested-list fd-nested-list--compact level-1">
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link" href="#" aria-label="Level 1 Item">
                    <div class="fd-nested-list__link-container">
                        <i role="presentation" class="fd-nested-list__icon sap-icon--home"></i>
                        <span class="fd-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link" href="#" aria-label="Level 1 Item">
                    <div class="fd-nested-list__link-container">
                        <i role="presentation" class="fd-nested-list__icon sap-icon--map"></i>
                        <span class="fd-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fd-nested-list__item fd-popover">
                <button class="fd-nested-list__link fd-popover__control is-selected" aria-expanded="false" aria-label="Expand Level 2">
                    <div class="fd-nested-list__link-container">
                        <i role="presentation" class="fd-nested-list__icon sap-icon--calendar"></i>
                        <span class="fd-nested-list__title">Level 1 Item</span>
                        <i class="fd-nested-list__arrow sap-icon--navigation-right-arrow" role="presentation"></i>
                    </div>
                </button>
            </li>
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link" href="#" aria-label="Level 1 Item">
                    <div class="fd-nested-list__link-container">
                        <i role="presentation" class="fd-nested-list__icon sap-icon--activities"></i>
                        <span class="fd-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link" href="#" aria-label="Level 1 Item">
                    <div class="fd-nested-list__link-container">
                        <i role="presentation" class="fd-nested-list__icon sap-icon--bar-chart"></i>
                        <span class="fd-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
        </ul>
        <button class="fd-button fd-button--transparent fd-button--compact fd-side-nav__button" aria-label="Move up"><i class="sap-icon--navigation-down-arrow"></i></button>
    </nav>
    <nav class="fd-side-nav__utility">
        <ul class="fd-nested-list fd-nested-list--compact level-1">
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link" href="#" aria-label="Level 1 Item">
                    <div class="fd-nested-list__link-container">
                        <i role="presentation" class="fd-nested-list__icon sap-icon--compare"></i>
                        <span class="fd-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link" href="#" aria-label="Level 1 Item">
                    <div class="fd-nested-list__link-container">
                        <i role="presentation" class="fd-nested-list__icon sap-icon--chain-link"></i>
                        <span class="fd-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
        </ul>
    </nav>
</div>
`;

CompactNarrowOverflow.storyName = 'Compact Narrow with Vertical Overflow Behaviour, Levels 2 and 3 in Popover Hidden';

export const CompactNarrowPopover = () => `<div style="height: 300px;">
<div class="fd-popover">
    <div class="fd-popover__control">
    </div>

    <nav class="fd-side-nav__popover-body fd-popover__body fd-popover__body--no-arrow"">
            <ul class="fd-nested-list fd-nested-list--compact level-2">
                <li class="fd-nested-list__item fd-nested-list__item--header">
                    <h3 class="fd-nested-list__link">
                        <div class="fd-nested-list__link-container">
                            <span class="fd-nested-list__title">Sales</span>
                        </div>
                    </h3>
                </li>
                <li class="fd-nested-list__item">
                    <a class="fd-nested-list__link" href="#">
                        <div class="fd-nested-list__link-container">
                            <span class="fd-nested-list__title">Level 2 Item</span>
                        </div>
                    </a>
                </li>
                <li class="fd-nested-list__item">
                    <button class="fd-nested-list__link is-selected" aria-expanded="true" aria-label="Expand Level 3">
                        <div class="fd-nested-list__link-container">
                            <span class="fd-nested-list__title">Level 2 Item</span>
                            <i class="fd-nested-list__arrow sap-icon--navigation-down-arrow" role="presentation"></i>
                        </div>
                    </button>
                    <ul class="fd-nested-list level-3" aria-hidden="false">
                            <li class="fd-nested-list__item">
                                <a class="fd-nested-list__link" href="#">
                                    <div class="fd-nested-list__link-container">
                                        <span class="fd-nested-list__title">Level 3 Item</span>
                                    </div>
                                </a>
                            </li>
                            <li class="fd-nested-list__item">
                                <a class="fd-nested-list__link" href="#">
                                    <div class="fd-nested-list__link-container">
                                        <span class="fd-nested-list__title">Level 3 Item</span>
                                    </div>
                                </a>
                            </li>
                            <li class="fd-nested-list__item">
                                <a class="fd-nested-list__link" href="#">
                                    <div class="fd-nested-list__link-container">
                                        <span class="fd-nested-list__title">Level 3 Item</span>
                                    </div>
                                </a>
                            </li>
                        </ul>
                </li>
                <li class="fd-nested-list__item">
                    <a class="fd-nested-list__link" href="#">
                        <div class="fd-nested-list__link-container">
                            <span class="fd-nested-list__title">Level 2 Item</span>
                        </div>
                    </a>
                </li>
                <li class="fd-nested-list__item">
                    <a class="fd-nested-list__link" href="#">
                        <div class="fd-nested-list__link-container">
                            <span class="fd-nested-list__title">Level 2 Item</span>
                        </div>
                    </a>
                </li>
            </ul>
        </nav>
    </div>
</div>
`;

export const CozyWideIconsSearch = () => `<div class="fd-side-nav" style="max-height: 500px;">
    <nav class="fd-side-nav__main-navigation" aria-label="Main Menu">
        <div class="fd-input-group fd-side-nav__input-group">
            <input class="fd-input fd-input-group__input" type="text" placeholder="Filter">
            <span class="fd-input-group__addon fd-input-group__addon--button">
                    <button class="fd-input-group__button fd-button fd-button--icon fd-button--transparent" aria-label="Search">
                        <i class="sap-icon--search"></i>
                    </button>
                </span>
        </div>
        <ul class="fd-nested-list level-1">
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link" href="#">
                    <div class="fd-nested-list__link-container">
                        <i role="presentation" class="fd-nested-list__icon sap-icon--home"></i>
                        <span class="fd-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link is-selected" href="#">
                    <div class="fd-nested-list__link-container">
                        <i role="presentation" class="fd-nested-list__icon sap-icon--calendar"></i>
                        <span class="fd-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link" href="#">
                    <div class="fd-nested-list__link-container">
                        <i role="presentation" class="fd-nested-list__icon sap-icon--employee"></i>
                        <span class="fd-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link" href="#">
                    <div class="fd-nested-list__link-container">
                        <i role="presentation" class="fd-nested-list__icon sap-icon--activities"></i>
                        <span class="fd-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link" href="#">
                    <div class="fd-nested-list__link-container">
                        <i role="presentation" class="fd-nested-list__icon sap-icon--lightbulb"></i>
                        <span class="fd-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
        </ul>
    </nav>
    <nav class="fd-side-nav__utility" aria-label="Utility Menu">
        <ul class="fd-nested-list level-1">
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link" href="#">
                    <div class="fd-nested-list__link-container">
                        <i role="presentation" class="fd-nested-list__icon sap-icon--compare"></i>
                        <span class="fd-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
            <li class="fd-nested-list__item">
                <a class="fd-nested-list__link" href="#">
                    <div class="fd-nested-list__link-container">
                        <i role="presentation" class="fd-nested-list__icon sap-icon--chain-link"></i>
                        <span class="fd-nested-list__title">Level 1 Item</span>
                    </div>
                </a>
            </li>
        </ul>
    </nav>
</div>
`;

CozyWideIconsSearch.storyName = 'Cosy Wide With Icon and Filter Integration, 1 Level';

CozyWideIconsSearch.parameters = {
    docs: {
        iframeHeight: 400,
        description: {
            story: `
        `
        }
    }
};
