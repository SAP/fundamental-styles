import '../../../src/user-menu.scss';
import '../../../src/shellbar.scss';
import '../../../src/popover.scss';
import '../../../src/notification.scss';
import '../../../src/tabs.scss';
import '../../../src/avatar.scss';
import '../../../src/list.scss';
import '../../../src/input.scss';
import '../../../src/bar.scss';
import '../../../src/button.scss';
import '../../../src/icon.scss';
import '../../../src/title.scss';
import '../../../src/badge.scss';
import '../../../src/input-group.scss';
export default {
    title: 'Components/User Menu',
    parameters: {
        description: `The user menu can be used as a standalone component, linked to another component, or closely connected to the ShellBar.<br>
It displays an avatar button that triggers a Popover. The user menu can have multi-level navigation.
        `,
        tags: ['f3', 'theme']
    }
};

export const Default = () => `<div class="fddocs-container" style="margin-bottom: 550px">
    <div class="fd-popover fd-popover--right fd-user-menu">
        <div class="fd-popover__control">
            <span
                class="fd-avatar fd-avatar--s fd-avatar--circle fd-avatar--thumbnail"
                aria-controls="popoverA7"
                aria-expanded="true"
                aria-haspopup="true"
                aria-label="Avatar"
                style="background-image: url('assets/images/avatars/3.svg');"
                onclick="onPopoverClick('popoverA7');"
                role="button"
                tabindex="0"></span>
        </div>

        <div class="fd-popover__body fd-popover__body--right" aria-hidden="false" id="popoverA7">
            <div class="fd-user-menu__body fd-user-menu__body--default">
                <div class="fd-user-menu__subheader">
                    <h5 class="fd-user-menu__user-name">John Miller</h5>
                </div>

                <ul class="fd-list fd-list--navigation fd-list--navigation-indication fd-list--no-border" role="list">
                    <li tabindex="-1" role="listitem" class="fd-list__item fd-list__item--link">
                        <a tabindex="0" class="fd-list__link">
                            <i role="presentation" class="fd-list__icon sap-icon--time-account"></i>
                            <span class="fd-list__title">Recent Activity</span>
                        </a>
                    </li>
                    <li tabindex="-1" role="listitem" class="fd-list__item fd-list__item--link">
                        <a tabindex="0" class="fd-list__link">
                            <i role="presentation" class="fd-list__icon sap-icon--activity-individual"></i>
                            <span class="fd-list__title">Frequently Used</span>
                        </a>
                    </li>
                    <li tabindex="-1" role="listitem" class="fd-list__item fd-list__item--link">
                        <a tabindex="0" class="fd-list__link">
                            <i role="presentation" class="fd-list__icon sap-icon--detail-view"></i>
                            <span class="fd-list__title">Content Finder</span>
                        </a>
                    </li>
                    <li tabindex="-1" role="listitem" class="fd-list__item fd-list__item--link">
                        <a tabindex="0" class="fd-list__link">
                            <i role="presentation" class="fd-list__icon sap-icon--employee-lookup"></i>
                            <span class="fd-list__title">Proxy User</span>
                        </a>
                    </li>
                    <li tabindex="-1" role="listitem" class="fd-list__item fd-list__item--link">
                        <a tabindex="0" class="fd-list__link">
                            <i role="presentation" class="fd-list__icon sap-icon--role"></i>
                            <span class="fd-list__title">Proxy Role</span>
                        </a>
                    </li>
                    <li tabindex="-1" role="listitem" class="fd-list__item fd-list__item--link">
                        <a tabindex="0" class="fd-list__link">
                            <i role="presentation" class="fd-list__icon sap-icon--action-settings"></i>
                            <span class="fd-list__title">Settings</span>
                        </a>
                    </li>
                    <li tabindex="-1" role="listitem" class="fd-list__item fd-list__item--link">
                        <a tabindex="0" class="fd-list__link">
                            <i role="presentation" class="fd-list__icon sap-icon--marketing-campaign"></i>
                            <span class="fd-list__title">Sign Out</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>

    <div class="fd-popover fd-popover--right  fd-user-menu fd-user-menu--compact">
        <div class="fd-popover__control">
            <span
                class="fd-avatar fd-avatar--s fd-avatar--circle fd-avatar--thumbnail"
                aria-controls="popoverA7"
                aria-expanded="true"
                aria-haspopup="true"
                aria-label="Avatar"
                style="background-image: url('assets/images/avatars/3.svg');"
                onclick="onPopoverClick('popoverA7');"
                role="button"
                tabindex="0"></span>
        </div>

        <div class="fd-popover__body fd-popover__body--right" aria-hidden="false" id="popoverA7">
            <div class="fd-user-menu__body fd-user-menu__body--compact fd-user-menu__body--default">
                <div class="fd-user-menu__subheader">
                    <h5 class="fd-user-menu__user-name">John Miller</h5>
                </div>

                <ul class="fd-list fd-list--compact fd-list--navigation fd-list--navigation-indication fd-list--no-border" role="list">
                    <li tabindex="-1" role="listitem" class="fd-list__item fd-list__item--link">
                        <a tabindex="0" class="fd-list__link">
                            <i role="presentation" class="fd-list__icon sap-icon--time-account"></i>
                            <span class="fd-list__title">Recent Activity</span>
                        </a>
                    </li>
                    <li tabindex="-1" role="listitem" class="fd-list__item fd-list__item--link">
                        <a tabindex="0" class="fd-list__link">
                            <i role="presentation" class="fd-list__icon sap-icon--activity-individual"></i>
                            <span class="fd-list__title">Frequently Used</span>
                        </a>
                    </li>
                    <li tabindex="-1" role="listitem" class="fd-list__item fd-list__item--link">
                        <a tabindex="0" class="fd-list__link">
                            <i role="presentation" class="fd-list__icon sap-icon--detail-view"></i>
                            <span class="fd-list__title">Content Finder</span>
                        </a>
                    </li>
                    <li tabindex="-1" role="listitem" class="fd-list__item fd-list__item--link">
                        <a tabindex="0" class="fd-list__link">
                            <i role="presentation" class="fd-list__icon sap-icon--employee-lookup"></i>
                            <span class="fd-list__title">Proxy User</span>
                        </a>
                    </li>
                    <li tabindex="-1" role="listitem" class="fd-list__item fd-list__item--link">
                        <a tabindex="0" class="fd-list__link">
                            <i role="presentation" class="fd-list__icon sap-icon--role"></i>
                            <span class="fd-list__title">Proxy Role</span>
                        </a>
                    </li>
                    <li tabindex="-1" role="listitem" class="fd-list__item fd-list__item--link">
                        <a tabindex="0" class="fd-list__link">
                            <i role="presentation" class="fd-list__icon sap-icon--action-settings"></i>
                            <span class="fd-list__title">Settings</span>
                        </a>
                    </li>
                    <li tabindex="-1" role="listitem" class="fd-list__item fd-list__item--link">
                        <a tabindex="0" class="fd-list__link">
                            <i role="presentation" class="fd-list__icon sap-icon--marketing-campaign"></i>
                            <span class="fd-list__title">Sign Out</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>
`;

Default.parameters = {
    docs: {
        description: {
            story: ''
        }
    }
};

export const Shellbar = () => `<div style="height: 700px;">
    <div class="fd-shellbar">
        <div class="fd-shellbar__group fd-shellbar__group--product">
            <span class="fd-shellbar__logo">
                <img src="//unpkg.com/fundamental-styles/dist/images/sap-logo.png" srcset="//unpkg.com/fundamental-styles/dist/images/sap-logo@2x.png 1x, //unpkg.com/fundamental-styles/dist/images/sap-logo@3x.png 2x, //unpkg.com/fundamental-styles/dist/images/sap-logo@4x.png 3x" width="48" height="24" alt="SAP">
            </span>
            <div class="fd-shellbar__group fd-shellbar__group--actions">
                <div class="fd-shellbar__action">
                    <div class="fd-popover fd-popover--right fd-user-menu">
                        <div class="fd-popover__control">
                            <span
                                class="fd-avatar fd-avatar--xs fd-avatar--circle fd-avatar--thumbnail"
                                aria-controls="popoverA1"
                                aria-expanded="true"
                                aria-haspopup="true"
                                aria-label="Avatar"
                                style="background-image: url('assets/images/avatars/3.svg');"
                                onclick="onPopoverClick('popoverA1');"
                                role="button"
                                tabindex="0"></span>
                        </div>

                        <div class="fd-popover__body fd-popover__body--right" aria-hidden="false" id="popoverA1">
                            <div class="fd-user-menu__body">
                                <div class="fd-user-menu__header">
                                    <span
                                        class="fd-avatar fd-avatar--xs fd-avatar--circle fd-avatar--thumbnail"
                                        aria-label="Avatar"
                                        style="background-image: url('assets/images/avatars/1.svg');"></span>

                                    <span
                                        class="fd-avatar fd-avatar--xl fd-avatar--circle fd-avatar--thumbnail fd-user-menu__avatar"
                                        aria-label="Avatar"
                                        style="background-image: url('assets/images/avatars/3.svg');"></span>

                                    <button class="fd-button fd-button--transparent" aria-label="Product"><i class="sap-icon--grid"></i></button>
                                </div>

                                <div class="fd-user-menu__subheader">
                                    <div class="fd-user-menu__user-name">John Miller</div>
                                    <div class="fd-user-menu__user-role">User Experience Designer</div>
                                </div>

                                <ul class="fd-list fd-list--navigation fd-list--navigation-indication fd-list--no-border" role="list">
                                    <li tabindex="-1" role="listitem" class="fd-list__item fd-list__item--link">
                                        <a tabindex="0" class="fd-list__link">
                                            <i role="presentation" class="fd-list__icon sap-icon--time-account"></i>
                                            <span class="fd-list__title">Recent Activity</span>
                                        </a>
                                    </li>
                                    <li tabindex="-1" role="listitem" class="fd-list__item fd-list__item--link">
                                        <a tabindex="0" class="fd-list__link">
                                            <i role="presentation" class="fd-list__icon sap-icon--activity-individual"></i>
                                            <span class="fd-list__title">Frequently Used</span>
                                        </a>
                                    </li>
                                    <li tabindex="-1" role="listitem" class="fd-list__item fd-list__item--link">
                                        <a tabindex="0" class="fd-list__link">
                                            <i role="presentation" class="fd-list__icon sap-icon--detail-view"></i>
                                            <span class="fd-list__title">Content Finder</span>
                                        </a>
                                    </li>
                                    <li tabindex="-1" role="listitem" class="fd-list__item fd-list__item--link">
                                        <a tabindex="0" class="fd-list__link fd-list__link--navigation-indicator is-selected">
                                            <i role="presentation" class="fd-list__icon sap-icon--employee-lookup"></i>
                                            <span class="fd-list__title">Proxy User</span>
                                        </a>
                                    </li>
                                    <li tabindex="-1" role="listitem" class="fd-list__item fd-list__item--link">
                                        <a tabindex="0" class="fd-list__link fd-list__link--navigation-indicator">
                                            <i role="presentation" class="fd-list__icon sap-icon--role"></i>
                                            <span class="fd-list__title">Proxy Role</span>
                                        </a>
                                    </li>
                                    <li tabindex="-1" role="listitem" class="fd-list__item fd-list__item--link">
                                        <a tabindex="0" class="fd-list__link fd-list__link--navigation-indicator">
                                            <i role="presentation" class="fd-list__icon sap-icon--history"></i>
                                            <span class="fd-list__title">Delegate</span>

                                            <span class="fd-list__item-counter">
                                                <span class="fd-badge fd-badge--static" aria-label="Selected items">3</span>
                                            </span>
                                        </a>
                                    </li>
                                    <li tabindex="-1" role="listitem" class="fd-list__item fd-list__item--link">
                                        <a tabindex="0" class="fd-list__link">
                                            <i role="presentation" class="fd-list__icon sap-icon--sys-help"></i>
                                            <span class="fd-list__title">Help</span>
                                        </a>
                                    </li>
                                    <li tabindex="-1" role="listitem" class="fd-list__item fd-list__item--link">
                                        <a tabindex="0" class="fd-list__link">
                                            <i role="presentation" class="fd-list__icon sap-icon--action-settings"></i>
                                            <span class="fd-list__title">Settings</span>
                                        </a>
                                    </li>
                                    <li tabindex="-1" role="listitem" class="fd-list__item fd-list__item--link">
                                        <a tabindex="0" class="fd-list__link">
                                            <i role="presentation" class="fd-list__icon sap-icon--marketing-campaign"></i>
                                            <span class="fd-list__title">Give Feedback</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div class="fd-popover__body-footer">
                                <div class="fd-bar fd-bar--footer">
                                    <div class="fd-bar__right">
                                        <div class="fd-bar__element">
                                            <button class="fd-button fd-button--transparent">Sign Out</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
`;

Shellbar.parameters = {
    docs: {
        description: {
            story: 'The user menu button is typically displayed within a Shellbar on the far-right side.'
        }
    }
};

export const Navigation = () => `<div class="fddocs-container" style="margin-bottom: 650px">
    <div class="fd-popover fd-popover--right fd-user-menu">
        <div class="fd-popover__control">
            <span
                class="fd-avatar fd-avatar--s fd-avatar--circle fd-avatar--thumbnail"
                aria-controls="popoverA4"
                aria-expanded="true"
                aria-haspopup="true"
                aria-label="Avatar"
                style="background-image: url('assets/images/avatars/3.svg');"
                onclick="onPopoverClick('popoverA4');"
                role="button"
                tabindex="0"></span>
        </div>

        <div class="fd-popover__body fd-popover__body--right" aria-hidden="false" id="popoverA4">
            <div class="fd-user-menu__body">
                <div class="fd-user-menu__header">
                    <span
                        class="fd-avatar fd-avatar--xs fd-avatar--circle fd-avatar--thumbnail"
                        aria-label="Avatar"
                        style="background-image: url('assets/images/avatars/1.svg');"></span>

                    <span
                        class="fd-avatar fd-avatar--xl fd-avatar--circle fd-avatar--thumbnail fd-user-menu__avatar"
                        aria-label="Avatar"
                        style="background-image: url('assets/images/avatars/3.svg');"></span>

                    <button class="fd-button fd-button--transparent" aria-label="Product"><i class="sap-icon--grid"></i></button>
                </div>

                <div class="fd-user-menu__subheader">
                    <div class="fd-user-menu__user-name">John Miller</div>
                    <div class="fd-user-menu__user-role">User Experience Designer</div>
                </div>

                <ul class="fd-list fd-list--navigation fd-list--navigation-indication fd-list--no-border" role="list">
                    <li tabindex="-1" role="listitem" class="fd-list__item fd-list__item--link">
                        <a tabindex="0" class="fd-list__link">
                            <i role="presentation" class="fd-list__icon sap-icon--time-account"></i>
                            <span class="fd-list__title">Recent Activity</span>
                        </a>
                    </li>
                    <li tabindex="-1" role="listitem" class="fd-list__item fd-list__item--link">
                        <a tabindex="0" class="fd-list__link">
                            <i role="presentation" class="fd-list__icon sap-icon--activity-individual"></i>
                            <span class="fd-list__title">Frequently Used</span>
                        </a>
                    </li>
                    <li tabindex="-1" role="listitem" class="fd-list__item fd-list__item--link">
                        <a tabindex="0" class="fd-list__link">
                            <i role="presentation" class="fd-list__icon sap-icon--detail-view"></i>
                            <span class="fd-list__title">Content Finder</span>
                        </a>
                    </li>
                    <li tabindex="-1" role="listitem" class="fd-list__item fd-list__item--link">
                        <a tabindex="0" class="fd-list__link fd-list__link--navigation-indicator">
                            <i role="presentation" class="fd-list__icon sap-icon--employee-lookup"></i>
                            <span class="fd-list__title">Proxy User</span>
                        </a>
                    </li>
                    <li tabindex="-1" role="listitem" class="fd-list__item fd-list__item--link">
                        <a tabindex="0" class="fd-list__link fd-list__link--navigation-indicator is-selected">
                            <i role="presentation" class="fd-list__icon sap-icon--role"></i>
                            <span class="fd-list__title">Proxy Role</span>
                        </a>
                    </li>
                    <li tabindex="-1" role="listitem" class="fd-list__item fd-list__item--link">
                        <a tabindex="0" class="fd-list__link fd-list__link--navigation-indicator">
                            <i role="presentation" class="fd-list__icon sap-icon--history"></i>
                            <span class="fd-list__title">Delegate</span>

                            <span class="fd-list__item-counter">
                                <span class="fd-badge fd-badge--static" aria-label="Selected items">3</span>
                            </span>
                        </a>
                    </li>
                    <li tabindex="-1" role="listitem" class="fd-list__item fd-list__item--link">
                        <a tabindex="0" class="fd-list__link">
                            <i role="presentation" class="fd-list__icon sap-icon--sys-help"></i>
                            <span class="fd-list__title">Help</span>
                        </a>
                    </li>
                    <li tabindex="-1" role="listitem" class="fd-list__item fd-list__item--link">
                        <a tabindex="0" class="fd-list__link">
                            <i role="presentation" class="fd-list__icon sap-icon--action-settings"></i>
                            <span class="fd-list__title">Settings</span>
                        </a>
                    </li>
                    <li tabindex="-1" role="listitem" class="fd-list__item fd-list__item--link">
                        <a tabindex="0" class="fd-list__link">
                            <i role="presentation" class="fd-list__icon sap-icon--marketing-campaign"></i>
                            <span class="fd-list__title">Give Feedback</span>
                        </a>
                    </li>
                </ul>
            </div>

            <div class="fd-popover__body-footer">
                <div class="fd-bar fd-bar--footer">
                    <div class="fd-bar__right">
                        <div class="fd-bar__element">
                            <button class="fd-button fd-button--transparent">Sign Out</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="fd-popover fd-popover--right fd-user-menu">
        <div class="fd-popover__control">
            <span
                class="fd-avatar fd-avatar--s fd-avatar--circle fd-avatar--thumbnail"
                aria-controls="popoverA5"
                aria-expanded="true"
                aria-haspopup="true"
                aria-label="Avatar"
                style="background-image: url('assets/images/avatars/3.svg');"
                onclick="onPopoverClick('popoverA5');"
                role="button"
                tabindex="0"></span>
        </div>

        <div class="fd-popover__body fd-popover__body--right" aria-hidden="false" id="popoverA5">
            <div class="fd-popover__body-header">
                <div class="fd-bar fd-bar--cozy fd-bar--header-with-subheader">
                    <div class="fd-bar__left">
                        <div class="fd-bar__element">
                            <button aria-label="go back" class="fd-button fd-button--transparent">
                                <i class="sap-icon--navigation-left-arrow"></i>
                            </button>
                        </div>

                        <div class="fd-bar__element">Proxy Roles</div>
                    </div>
                </div>

                <div class="fd-bar fd-bar--subheader">
                    <div class="fd-bar__middle">
                        <div class="fd-input-group">
                            <input class="fd-input fd-input--compact fd-input-group__input" type="text" id="aqwsde118" name="" aria-label="Search" placeholder="Search">
                            <span class="fd-input-group__addon fd-input-group__addon--button fd-input-group__addon--compact">
                                <button class="fd-input-group__button fd-button fd-button--icon fd-button--transparent fd-button--compact" aria-label="Search">
                                    <i class="sap-icon--search"></i>
                                </button>
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="fd-user-menu__body fd-user-menu__body--no-padding">
                <ul class="fd-list fd-list--byline fd-list--navigation" role="list">
                    <li role="listitem" tabindex="-1" class="fd-list__item fd-list__item--link">
                        <a tabindex="0" class="fd-list__link" href="#">
                            <span class="fd-list__thumbnail">
                                <i role="presentation" class="sap-icon--customer-history"></i>
                            </span>
                            <div class="fd-list__content">
                                <div class="fd-list__title">Design Manager</div>
                                <div class="fd-list__byline">Proxy role</div>
                            </div>
                        </a>
                    </li>
                    <li role="listitem" tabindex="-1" class="fd-list__item fd-list__item--link is-selected">
                        <a tabindex="0" class="fd-list__link" href="#">
                            <span class="fd-list__thumbnail">
                                <i role="presentation" class="sap-icon--role"></i>
                            </span>
                            <div class="fd-list__content">
                                <div class="fd-list__title">Design Lead</div>
                                <div class="fd-list__byline">Current Proxy role</div>
                            </div>
                        </a>
                    </li>
                    <li role="listitem" tabindex="-1" class="fd-list__item fd-list__item--link">
                        <a tabindex="0" class="fd-list__link" href="#">
                            <span class="fd-list__thumbnail">
                                <i role="presentation" class="sap-icon--employee"></i>
                            </span>
                            <div class="fd-list__content">
                                <div class="fd-list__title">User Experience Designer</div>
                                <div class="fd-list__byline">Actual Role</div>
                            </div>
                        </a>
                    </li>
                    <li role="listitem" tabindex="-1" class="fd-list__item fd-list__item--link">
                        <a tabindex="0" class="fd-list__link" href="#">
                            <span class="fd-list__thumbnail">
                                <i role="presentation" class="sap-icon--customer-history"></i>
                            </span>
                            <div class="fd-list__content">
                                <div class="fd-list__title">Design Intern</div>
                                <div class="fd-list__byline">Proxy role</div>
                            </div>
                        </a>
                    </li>
                    <li role="listitem" tabindex="-1" class="fd-list__item fd-list__item--link">
                        <a tabindex="0" class="fd-list__link" href="#">
                            <span class="fd-list__thumbnail">
                                <i role="presentation" class="sap-icon--customer-history"></i>
                            </span>
                            <div class="fd-list__content">
                                <div class="fd-list__title">Design Contractor</div>
                                <div class="fd-list__byline">Proxy role</div>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>

            <div class="fd-popover__body-footer">
                <div class="fd-bar fd-bar--footer">
                    <div class="fd-bar__right">
                        <div class="fd-bar__element">
                            <button class="fd-button fd-button--transparent">Select</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
`;

Navigation.storyName = 'In-Place Navigation';

Navigation.parameters = {
    docs: {
        description: {
            story: `The User menu can be used for items that can be further grouped under a level but not always visible to the user.<br>
        Follow the same template for the sub-navigation as you would for a normal menu. The same Popover body and footer work for the sub-navigation items too.
`
        }
    }
};

export const ThirdPartyContent = () => `<div class="fddocs-container" style="margin-bottom: 700px">
    <div class="fd-popover fd-popover--right fd-user-menu">
        <div class="fd-popover__control">
            <span
                class="fd-avatar fd-avatar--s fd-avatar--circle fd-avatar--thumbnail"
                aria-controls="popoverA5"
                aria-expanded="true"
                aria-haspopup="true"
                aria-label="Avatar"
                style="background-image: url('assets/images/avatars/3.svg');"
                onclick="onPopoverClick('popoverA5');"
                role="button"
                tabindex="0"></span>
        </div>

        <div class="fd-popover__body fd-popover__body--right" aria-hidden="false" id="popoverA5">
            <div class="fd-user-menu__body">
                <div class="fd-user-menu__header">
                    <span
                        class="fd-avatar fd-avatar--xs fd-avatar--circle fd-avatar--thumbnail"
                        aria-label="Avatar"
                        style="background-image: url('assets/images/avatars/1.svg');"></span>

                    <span
                        class="fd-avatar fd-avatar--xl fd-avatar--circle fd-avatar--thumbnail fd-user-menu__avatar"
                        aria-label="Avatar"
                        style="background-image: url('assets/images/avatars/3.svg');"></span>

                    <button class="fd-button fd-button--transparent" aria-label="Product"><i class="sap-icon--grid"></i></button>
                </div>

                <div class="fd-user-menu__subheader">
                    <div class="fd-user-menu__user-name">John Miller</div>
                    <div class="fd-user-menu__user-role">User Experience Designer</div>
                </div>

                <ul class="fd-list fd-list--navigation fd-list--navigation-indication fd-list--no-border" role="list">
                    <li tabindex="-1" role="listitem" class="fd-list__item fd-list__item--link">
                        <a tabindex="0" class="fd-list__link">
                            <i role="presentation" class="fd-list__icon sap-icon--time-account"></i>
                            <span class="fd-list__title">Recent Activity</span>
                        </a>
                    </li>
                    <li tabindex="-1" role="listitem" class="fd-list__item fd-list__item--link">
                        <a tabindex="0" class="fd-list__link">
                            <i role="presentation" class="fd-list__icon sap-icon--activity-individual"></i>
                            <span class="fd-list__title">Frequently Used</span>
                        </a>
                    </li>
                    <li tabindex="-1" role="listitem" class="fd-list__item fd-list__item--link">
                        <a tabindex="0" class="fd-list__link">
                            <i role="presentation" class="fd-list__icon sap-icon--detail-view"></i>
                            <span class="fd-list__title">Content Finder</span>
                        </a>
                    </li>
                    <li tabindex="-1" role="listitem" class="fd-list__item fd-list__item--link">
                        <a tabindex="0" class="fd-list__link fd-list__link--navigation-indicator">
                            <i role="presentation" class="fd-list__icon sap-icon--employee-lookup"></i>
                            <span class="fd-list__title">Proxy User</span>
                        </a>
                    </li>
                    <li tabindex="-1" role="listitem" class="fd-list__item fd-list__item--link">
                        <a tabindex="0" class="fd-list__link fd-list__link--navigation-indicator">
                            <i role="presentation" class="fd-list__icon sap-icon--role"></i>
                            <span class="fd-list__title">Proxy Role</span>
                        </a>
                    </li>
                    <li tabindex="-1" role="listitem" class="fd-list__item fd-list__item--link">
                        <a tabindex="0" class="fd-list__link fd-list__link--navigation-indicator is-selected">
                            <i role="presentation" class="fd-list__icon sap-icon--ui-notifications"></i>
                            <span class="fd-list__title">Notifications</span>

                            <span class="fd-list__item-counter">
                                <span class="fd-badge fd-badge--static" aria-label="Selected items">3</span>
                            </span>
                        </a>
                    </li>
                    <li tabindex="-1" role="listitem" class="fd-list__item fd-list__item--link">
                        <a tabindex="0" class="fd-list__link">
                            <i role="presentation" class="fd-list__icon sap-icon--sys-help"></i>
                            <span class="fd-list__title">Help</span>
                        </a>
                    </li>
                    <li tabindex="-1" role="listitem" class="fd-list__item fd-list__item--link">
                        <a tabindex="0" class="fd-list__link">
                            <i role="presentation" class="fd-list__icon sap-icon--action-settings"></i>
                            <span class="fd-list__title">Settings</span>
                        </a>
                    </li>
                    <li tabindex="-1" role="listitem" class="fd-list__item fd-list__item--link">
                        <a tabindex="0" class="fd-list__link">
                            <i role="presentation" class="fd-list__icon sap-icon--marketing-campaign"></i>
                            <span class="fd-list__title">Give Feedback</span>
                        </a>
                    </li>
                </ul>
            </div>

            <div class="fd-popover__body-footer">
                <div class="fd-bar fd-bar--footer">
                    <div class="fd-bar__right">
                        <div class="fd-bar__element">
                            <button class="fd-button fd-button--transparent">Sign Out</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="fd-popover fd-popover--right fd-user-menu">
        <div class="fd-popover__control">
            <span
                class="fd-avatar fd-avatar--s fd-avatar--circle fd-avatar--thumbnail"
                aria-controls="popoverA6"
                aria-expanded="true"
                aria-haspopup="true"
                aria-label="Avatar"
                style="background-image: url('assets/images/avatars/3.svg');"
                onclick="onPopoverClick('popoverA6');"
                role="button"
                tabindex="0"></span>
        </div>

        <div class="fd-popover__body fd-popover__body--right" aria-hidden="false" id="popoverA6">
            <div class="fd-popover__body-header">
                <div class="fd-bar fd-bar--cozy fd-bar--header-with-subheader">
                    <div class="fd-bar__left">
                        <div class="fd-bar__element">
                            <button aria-label="go back" class="fd-button fd-button--transparent">
                                <i class="sap-icon--navigation-left-arrow"></i>
                            </button>
                        </div>

                        <div class="fd-bar__element">Notifications</div>
                    </div>
                </div>
            </div>

            <div class="fd-user-menu__body fd-user-menu__body--no-padding">
                <div class="fd-notification fd-notification--group">
                    <ul class="fd-tabs fd-tabs--s fd-notification--tabs" role="tablist">
                        <li class="fd-tabs__item" role="tab" aria-controls="userMenuT1" aria-selected="true">
                            <a class="fd-tabs__link" href="#userMenuT1">
                                <span class="fd-tabs__tag">By Date</span>
                            </a>
                        </li>
                        <li class="fd-tabs__item" role="tab" aria-controls="userMenuT2">
                            <a class="fd-tabs__link" href="#userMenuT2">
                                <span class="fd-tabs__tag">By Type</span>
                            </a>
                        </li>
                        <li class="fd-tabs__item" role="tab" aria-controls="userMenuT3">
                            <a class="fd-tabs__link" href="#userMenuT3">
                                <span class="fd-tabs__tag">By Priority</span>
                            </a>
                        </li>
                    </ul>
                    <div class="fd-tabs__panel" aria-expanded="true" id="userMenuT1" role="tabpanel">
                        <div class="fd-notification__group-header">
                            <button role="button" aria-label="arrow-down-button" class="fd-button fd-button--compact fd-button--transparent">
                                <i class="sap-icon--slim-arrow-down"></i>
                            </button>
                            <div class="fd-notification__content">
                                <div class="fd-notification__header">
                                    <h2 class="fd-notification__title fd-notification__title--unread">Last 24 Hours (3)</h2>
                                </div>
                            </div>
                            <div class="fd-notification__actions">
                                <button class="fd-button fd-button--transparent fd-button--compact fd-notification__actions--dismiss" aria-label="Close">
                                    <i class="sap-icon--decline"></i>
                                </button>
                            </div>
                        </div>
                        <div class="fd-notification__body">
                            <span class="fd-avatar fd-avatar--xs fd-avatar--circle fd-avatar--thumbnail" style="background-image: url('/assets/images/avatars/3.svg')" role="img"aria-label="John Doe"></span>
                            <div class="fd-notification__content">
                                <div class="fd-notification__header">
                                    <div class="fd-notification__indicator fd-notification__indicator--success"></div>
                                    <h2 class="fd-notification__title fd-notification__title--unread">Notification title</h2>
                                </div>
                                <p class="fd-notification__paragraph">Notification Description</p>
                                <p class="fd-notification__footer">
                                    <span class="fd-notification__footer-content">John Doe</span>
                                    <span class="fd-notification__separator"></span>
                                    <span class="fd-notification__footer-content">Yesterday</span>
                                </p>
                            </div>
                            <div class="fd-notification__actions">
                                <button class="fd-button fd-button--transparent fd-button--compact fd-notification__actions--dismiss" aria-label="Close">
                                    <i class="sap-icon--decline"></i>
                                </button>
                            </div>
                        </div>
                        <div class="fd-notification__body">
                            <span class="fd-avatar fd-avatar--xs fd-avatar--circle fd-avatar--thumbnail" style="background-image: url('/assets/images/avatars/3.svg')" role="img"aria-label="John Doe"></span>
                            <div class="fd-notification__content">
                                <div class="fd-notification__header">
                                    <div class="fd-notification__indicator fd-notification__indicator--success"></div>
                                    <h2 class="fd-notification__title fd-notification__title--unread">Notification title</h2>
                                </div>
                                <p class="fd-notification__paragraph">Notification Description</p>
                                <p class="fd-notification__footer">
                                    <span class="fd-notification__footer-content">John Doe</span>
                                    <span class="fd-notification__separator"></span>
                                    <span class="fd-notification__footer-content">Yesterday</span>
                                </p>
                            </div>
                            <div class="fd-notification__actions">
                                <button class="fd-button fd-button--transparent fd-button--compact fd-notification__actions--dismiss" aria-label="Close">
                                    <i class="sap-icon--decline"></i>
                                </button>
                            </div>
                        </div>
                        <div class="fd-notification__body">
                            <span class="fd-avatar fd-avatar--xs fd-avatar--circle fd-avatar--thumbnail" style="background-image: url('/assets/images/avatars/3.svg')" role="img"aria-label="John Doe"></span>
                            <div class="fd-notification__content">
                                <div class="fd-notification__header">
                                    <div class="fd-notification__indicator fd-notification__indicator--success"></div>
                                    <h2 class="fd-notification__title fd-notification__title--unread">Notification title</h2>
                                </div>
                                <p class="fd-notification__paragraph">Notification Description</p>
                                <p class="fd-notification__footer">
                                    <span class="fd-notification__footer-content">John Doe</span>
                                    <span class="fd-notification__separator"></span>
                                    <span class="fd-notification__footer-content">Yesterday</span>
                                </p>
                            </div>
                            <div class="fd-notification__actions">
                                <button class="fd-button fd-button--transparent fd-button--compact fd-notification__actions--dismiss" aria-label="Close">
                                    <i class="sap-icon--decline"></i>
                                </button>
                            </div>
                        </div>

                        <div class="fd-notification__group-header">
                            <button role="button" aria-label="arrow-down-button" class="fd-button fd-button--compact fd-button--transparent">
                                <i class="sap-icon--slim-arrow-down"></i>
                            </button>
                            <div class="fd-notification__content">
                                <div class="fd-notification__header">
                                    <h2 class="fd-notification__title fd-notification__title--unread">This Week (42)</h2>
                                </div>
                            </div>
                            <div class="fd-notification__actions">
                                <button class="fd-button fd-button--transparent fd-button--compact fd-notification__actions--dismiss" aria-label="Close">
                                    <i class="sap-icon--decline"></i>
                                </button>
                            </div>
                        </div>

                        <div class="fd-notification__body">
                            <span class="fd-avatar fd-avatar--xs fd-avatar--circle fd-avatar--thumbnail" style="background-image: url('/assets/images/avatars/3.svg')" role="img"aria-label="John Doe"></span>
                            <div class="fd-notification__content">
                                <div class="fd-notification__header">
                                    <div class="fd-notification__indicator fd-notification__indicator--success"></div>
                                    <h2 class="fd-notification__title fd-notification__title--unread">Notification title</h2>
                                </div>
                                <p class="fd-notification__paragraph">Notification Description</p>
                                <p class="fd-notification__footer">
                                    <span class="fd-notification__footer-content">John Doe</span>
                                    <span class="fd-notification__separator"></span>
                                    <span class="fd-notification__footer-content">Yesterday</span>
                                </p>
                            </div>
                            <div class="fd-notification__actions">
                                <button class="fd-button fd-button--transparent fd-button--compact fd-notification__actions--dismiss" aria-label="Close">
                                    <i class="sap-icon--decline"></i>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div class="fd-tabs__panel" aria-expanded="false" id="userMenuT2" role="tabpanel">
                        <div class="fd-notification__group-header">
                            <button role="button" aria-label="arrow-down-button" class="fd-button fd-button--compact fd-button--transparent">
                                <i class="sap-icon--slim-arrow-down"></i>
                            </button>
                            <div class="fd-notification__content">
                                <div class="fd-notification__header">
                                    <h2 class="fd-notification__title fd-notification__title--unread">Last 24 Hours (2)</h2>
                                </div>
                            </div>
                            <div class="fd-notification__actions">
                                <button class="fd-button fd-button--transparent fd-button--compact fd-notification__actions--dismiss" aria-label="Close">
                                    <i class="sap-icon--decline"></i>
                                </button>
                            </div>
                        </div>

                        <div class="fd-notification__body">
                            <span class="fd-avatar fd-avatar--xs fd-avatar--circle fd-avatar--thumbnail" style="background-image: url('/assets/images/avatars/3.svg')" role="img"aria-label="John Doe"></span>
                            <div class="fd-notification__content">
                                <div class="fd-notification__header">
                                    <div class="fd-notification__indicator fd-notification__indicator--success"></div>
                                    <h2 class="fd-notification__title fd-notification__title--unread">Notification title</h2>
                                </div>
                                <p class="fd-notification__paragraph">Notification Description</p>
                                <p class="fd-notification__footer">
                                    <span class="fd-notification__footer-content">John Doe</span>
                                    <span class="fd-notification__separator"></span>
                                    <span class="fd-notification__footer-content">Yesterday</span>
                                </p>
                            </div>
                            <div class="fd-notification__actions">
                                <button class="fd-button fd-button--transparent fd-button--compact fd-notification__actions--dismiss" aria-label="Close">
                                    <i class="sap-icon--decline"></i>
                                </button>
                            </div>
                        </div>

                        <div class="fd-notification__body">
                            <span class="fd-avatar fd-avatar--xs fd-avatar--circle fd-avatar--thumbnail" style="background-image: url('/assets/images/avatars/3.svg')" role="img"aria-label="John Doe"></span>
                            <div class="fd-notification__content">
                                <div class="fd-notification__header">
                                    <div class="fd-notification__indicator fd-notification__indicator--success"></div>
                                    <h2 class="fd-notification__title fd-notification__title--unread">Notification title</h2>
                                </div>
                                <p class="fd-notification__paragraph">Notification Description</p>
                                <p class="fd-notification__footer">
                                    <span class="fd-notification__footer-content">John Doe</span>
                                    <span class="fd-notification__separator"></span>
                                    <span class="fd-notification__footer-content">Yesterday</span>
                                </p>
                            </div>
                            <div class="fd-notification__actions">
                                <button class="fd-button fd-button--transparent fd-button--compact fd-notification__actions--dismiss" aria-label="Close">
                                    <i class="sap-icon--decline"></i>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div class="fd-tabs__panel" aria-expanded="false" id="userMenuT3" role="tabpanel">
                        <div class="fd-notification__group-header">
                            <button role="button" aria-label="arrow-down-button" class="fd-button fd-button--compact fd-button--transparent">
                                <i class="sap-icon--slim-arrow-down"></i>
                            </button>
                            <div class="fd-notification__content">
                                <div class="fd-notification__header">
                                    <h2 class="fd-notification__title fd-notification__title--unread">Last 24 Hours (1)</h2>
                                </div>
                            </div>
                            <div class="fd-notification__actions">
                                <button class="fd-button fd-button--transparent fd-button--compact fd-notification__actions--dismiss" aria-label="Close">
                                    <i class="sap-icon--decline"></i>
                                </button>
                            </div>
                        </div>
                        <div class="fd-notification__body">
                            <span class="fd-avatar fd-avatar--xs fd-avatar--circle fd-avatar--thumbnail" style="background-image: url('/assets/images/avatars/3.svg')" role="img"aria-label="John Doe"></span>
                            <div class="fd-notification__content">
                                <div class="fd-notification__header">
                                    <div class="fd-notification__indicator fd-notification__indicator--success"></div>
                                    <h2 class="fd-notification__title fd-notification__title--unread">Notification title</h2>
                                </div>
                                <p class="fd-notification__paragraph">Notification Description</p>
                                <p class="fd-notification__footer">
                                    <span class="fd-notification__footer-content">John Doe</span>
                                    <span class="fd-notification__separator"></span>
                                    <span class="fd-notification__footer-content">Yesterday</span>
                                </p>
                            </div>
                            <div class="fd-notification__actions">
                                <button class="fd-button fd-button--transparent fd-button--compact fd-notification__actions--dismiss" aria-label="Close">
                                    <i class="sap-icon--decline"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
`;



ThirdPartyContent.storyName = '3rd Party Content';
ThirdPartyContent.parameters = {
    docs: {
        description: {
            story: 'User menu displays a sub-navigation component which is populated with data through a 3rd party. '
        }
    }
};

export const Compact = () => `<div class="fddocs-container" style="margin-bottom: 550px">
    <div class="fd-popover fd-popover--right  fd-user-menu fd-user-menu--compact">
        <div class="fd-popover__control">
            <span
                class="fd-avatar fd-avatar--s fd-avatar--circle fd-avatar--thumbnail"
                aria-controls="popoverA7"
                aria-expanded="true"
                aria-haspopup="true"
                aria-label="Avatar"
                style="background-image: url('assets/images/avatars/3.svg');"
                onclick="onPopoverClick('popoverA7');"
                role="button"
                tabindex="0"></span>
        </div>

        <div class="fd-popover__body fd-popover__body--right" aria-hidden="false" id="popoverA7">
            <div class="fd-user-menu__body fd-user-menu__body--compact">
                <div class="fd-user-menu__header">
                    <span
                        class="fd-avatar fd-avatar--xs fd-avatar--circle fd-avatar--thumbnail"
                        aria-label="Avatar"
                        style="background-image: url('assets/images/avatars/1.svg');"></span>

                    <span
                        class="fd-avatar fd-avatar--xl fd-avatar--circle fd-avatar--thumbnail fd-user-menu__avatar"
                        aria-label="Avatar"
                        style="background-image: url('assets/images/avatars/3.svg');"></span>

                    <button class="fd-button fd-button--transparent" aria-label="Product"><i class="sap-icon--grid"></i></button>
                </div>

                <div class="fd-user-menu__subheader">
                    <div class="fd-user-menu__user-name">John Miller</div>
                    <div class="fd-user-menu__user-role">User Experience Designer</div>
                </div>

                <ul class="fd-list fd-list--compact fd-list--navigation fd-list--navigation-indication fd-list--no-border" role="list">
                    <li tabindex="-1" role="listitem" class="fd-list__item fd-list__item--link">
                        <a tabindex="0" class="fd-list__link">
                            <i role="presentation" class="fd-list__icon sap-icon--time-account"></i>
                            <span class="fd-list__title">Recent Activity</span>
                        </a>
                    </li>
                    <li tabindex="-1" role="listitem" class="fd-list__item fd-list__item--link">
                        <a tabindex="0" class="fd-list__link">
                            <i role="presentation" class="fd-list__icon sap-icon--activity-individual"></i>
                            <span class="fd-list__title">Frequently Used</span>
                        </a>
                    </li>
                    <li tabindex="-1" role="listitem" class="fd-list__item fd-list__item--link">
                        <a tabindex="0" class="fd-list__link">
                            <i role="presentation" class="fd-list__icon sap-icon--detail-view"></i>
                            <span class="fd-list__title">Content Finder</span>
                        </a>
                    </li>
                    <li tabindex="-1" role="listitem" class="fd-list__item fd-list__item--link">
                        <a tabindex="0" class="fd-list__link fd-list__link--navigation-indicator">
                            <i role="presentation" class="fd-list__icon sap-icon--employee-lookup"></i>
                            <span class="fd-list__title">Proxy User</span>
                        </a>
                    </li>
                    <li tabindex="-1" role="listitem" class="fd-list__item fd-list__item--link">
                        <a tabindex="0" class="fd-list__link fd-list__link--navigation-indicator is-selected">
                            <i role="presentation" class="fd-list__icon sap-icon--role"></i>
                            <span class="fd-list__title">Proxy Role</span>
                        </a>
                    </li>
                    <li tabindex="-1" role="listitem" class="fd-list__item fd-list__item--link">
                        <a tabindex="0" class="fd-list__link fd-list__link--navigation-indicator">
                            <i role="presentation" class="fd-list__icon sap-icon--history"></i>
                            <span class="fd-list__title">Delegate</span>

                            <span class="fd-list__item-counter">
                                <span class="fd-badge fd-badge--static" aria-label="Selected items">3</span>
                            </span>
                        </a>
                    </li>
                    <li tabindex="-1" role="listitem" class="fd-list__item fd-list__item--link">
                        <a tabindex="0" class="fd-list__link">
                            <i role="presentation" class="fd-list__icon sap-icon--sys-help"></i>
                            <span class="fd-list__title">Help</span>
                        </a>
                    </li>
                    <li tabindex="-1" role="listitem" class="fd-list__item fd-list__item--link">
                        <a tabindex="0" class="fd-list__link">
                            <i role="presentation" class="fd-list__icon sap-icon--action-settings"></i>
                            <span class="fd-list__title">Settings</span>
                        </a>
                    </li>
                    <li tabindex="-1" role="listitem" class="fd-list__item fd-list__item--link">
                        <a tabindex="0" class="fd-list__link">
                            <i role="presentation" class="fd-list__icon sap-icon--marketing-campaign"></i>
                            <span class="fd-list__title">Give Feedback</span>
                        </a>
                    </li>
                </ul>
            </div>

            <div class="fd-popover__body-footer">
                <div class="fd-bar fd-bar--footer">
                    <div class="fd-bar__right">
                        <div class="fd-bar__element">
                            <button class="fd-button fd-button--compact fd-button--transparent">Sign Out</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="fd-popover fd-popover--right fd-user-menu fd-user-menu--compact">
        <div class="fd-popover__control">
            <span
                class="fd-avatar fd-avatar--s fd-avatar--circle fd-avatar--thumbnail"
                aria-controls="popoverA5"
                aria-expanded="true"
                aria-haspopup="true"
                aria-label="Avatar"
                style="background-image: url('assets/images/avatars/3.svg');"
                onclick="onPopoverClick('popoverA5');"
                role="button"
                tabindex="0"></span>
        </div>

        <div class="fd-popover__body fd-popover__body--right" aria-hidden="false" id="popoverA5">
            <div class="fd-popover__body-header">
                <div class="fd-bar fd-bar--cozy fd-bar--header-with-subheader">
                    <div class="fd-bar__left">
                        <div class="fd-bar__element">
                            <button aria-label="go back" class="fd-button fd-button--transparent fd-button--compact">
                                <i class="sap-icon--navigation-left-arrow"></i>
                            </button>
                        </div>

                        <div class="fd-bar__element">Proxy Roles</div>
                    </div>
                </div>

                <div class="fd-bar fd-bar--subheader">
                    <div class="fd-bar__middle">
                        <div class="fd-input-group">
                            <input class="fd-input fd-input--compact fd-input-group__input" type="text" id="aqwsde118" name="" aria-label="Search" placeholder="Search">
                            <span class="fd-input-group__addon fd-input-group__addon--button fd-input-group__addon--compact">
                                <button class="fd-input-group__button fd-button fd-button--icon fd-button--transparent fd-button--compact" aria-label="Search">
                                    <i class="sap-icon--search"></i>
                                </button>
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="fd-user-menu__body fd-user-menu__body--no-padding">
                <ul class="fd-list fd-list--byline fd-list--compact fd-list--navigation" role="list">
                    <li role="listitem" tabindex="-1" class="fd-list__item fd-list__item--link">
                        <a tabindex="0" class="fd-list__link" href="#">
                            <span class="fd-list__thumbnail">
                                <i role="presentation" class="sap-icon--customer-history"></i>
                            </span>
                            <div class="fd-list__content">
                                <div class="fd-list__title">Design Manager</div>
                                <div class="fd-list__byline">Proxy role</div>
                            </div>
                        </a>
                    </li>
                    <li role="listitem" tabindex="-1" class="fd-list__item fd-list__item--link is-selected">
                        <a tabindex="0" class="fd-list__link" href="#">
                            <span class="fd-list__thumbnail">
                                <i role="presentation" class="sap-icon--role"></i>
                            </span>
                            <div class="fd-list__content">
                                <div class="fd-list__title">Design Lead</div>
                                <div class="fd-list__byline">Current Proxy role</div>
                            </div>
                        </a>
                    </li>
                    <li role="listitem" tabindex="-1" class="fd-list__item fd-list__item--link">
                        <a tabindex="0" class="fd-list__link" href="#">
                            <span class="fd-list__thumbnail">
                                <i role="presentation" class="sap-icon--employee"></i>
                            </span>
                            <div class="fd-list__content">
                                <div class="fd-list__title">User Experience Designer</div>
                                <div class="fd-list__byline">Actual Role</div>
                            </div>
                        </a>
                    </li>
                    <li role="listitem" tabindex="-1" class="fd-list__item fd-list__item--link">
                        <a tabindex="0" class="fd-list__link" href="#">
                            <span class="fd-list__thumbnail">
                                <i role="presentation" class="sap-icon--customer-history"></i>
                            </span>
                            <div class="fd-list__content">
                                <div class="fd-list__title">Design Intern</div>
                                <div class="fd-list__byline">Proxy role</div>
                            </div>
                        </a>
                    </li>
                    <li role="listitem" tabindex="-1" class="fd-list__item fd-list__item--link">
                        <a tabindex="0" class="fd-list__link" href="#">
                            <span class="fd-list__thumbnail">
                                <i role="presentation" class="sap-icon--customer-history"></i>
                            </span>
                            <div class="fd-list__content">
                                <div class="fd-list__title">Design Contractor</div>
                                <div class="fd-list__byline">Proxy role</div>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>

            <div class="fd-popover__body-footer">
                <div class="fd-bar fd-bar--footer">
                    <div class="fd-bar__right">
                        <div class="fd-bar__element">
                            <button class="fd-button fd-button--transparent fd-button--compact">Select</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
`;

Compact.parameters = {
    docs: {
        description: {
            story: 'User menu can be displayed in compact mode by adding the `--compact` modifier to the `fd-user-menu` component as well as the `fd-user-menu__body`.'
        }
    }
};
