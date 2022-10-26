import 'fn/src/fn-list.scss';
import 'styles/src/icon.scss';
import 'fn/src/fn-button.scss';
import 'fn/src/fn-checkbox.scss';
import 'fn/src/fn-object-status.scss';
import 'fn/src/fn-avatar.scss';

export default {
  title: 'List',
  parameters: {
    tags: []
  }
};
const localStyles = `
<style>
.docs-story {
    background: white;
}
</style>
`;
export const Primary = () => `${localStyles}
    <ul class="fn-list">
        <li class="fn-list__group-header">
            <span class="fn-list__text">Group Header</span>
        </li>
        <li class="fn-list__item" tabindex="0">
            <span class="fn-list__text">List Item</span>
        </li>
        <li class="fn-list__item" tabindex="0">
            <span class="fn-list__text">List Item With Buttons</span>
            <div class="fn-list__end-container">
                <button class="fn-button fn-button--icon-only fn-button--secondary">
                    <span class="sap-icon sap-icon--edit"></span>
                </button>
                <button class="fn-button fn-button--icon-only fn-button--secondary">
                    <span class="sap-icon sap-icon--decline"></span>
                </button>
            </div>
        </li>
        <li class="fn-list__item" tabindex="0">
            <span class="fn-list__text">List Item With Navigation Arrow</span>
            <div class="fn-list__end-container">
                <button class="fn-button fn-button--icon-only fn-button--layout">
                    <span class="sap-icon sap-icon--navigation-right-arrow"></span>
                </button>
            </div>
        </li>
        <li class="fn-list__group-header">
            <span class="fn-list__text--end">Selected: 1</span>
        </li>
        <li class="fn-list__item is-selected" tabindex="0">
            <span>Selected List Item</span>
        </li>
        <li class="fn-list__item" tabindex="0">
            <span class="fn-list__text">List Item with Text at the End</span>
            <div class="fn-list__end-container">
                <span>42</span>
            </div>
        </li>
        <li class="fn-list__item fn-list__item--info-bar" tabindex="0">
            <span class="fn-list__text">Info Text</span>
            <div class="fn-list__end-container">
                <button class="fn-button fn-button--icon-only fn-button--layout">
                    <span class="sap-icon sap-icon--decline"></span>
                </button>
            </div>
        </li>
        <li class="fn-list__item" tabindex="0">
            <span class="fn-list__icon sap-icon sap-icon--person-placeholder"></span>
            <span class="fn-list__text">List Item with Icon</span>
        </li>
        <li class="fn-list__item is-disabled" aria-disabled="true">
            <span>Disabled List Item</span>
        </li>
        <li class="fn-list__item fn-list__item--has-checkbox" tabindex="0">
                <div class="fn-checkbox" tabindex="0">
                    <input class="fn-checkbox__input" id="checkbox-1" name="checkbox-1" type="checkbox" tabindex="-1" aria-label="checkbox">
                    <span class="fn-checkbox__checkmark"></span>
                </div>
            <span class="fn-list__text">List Item with Checkbox</span>
        </li>
        <li class="fn-list__item fn-list__item--info-bar is-disabled" aria-disabled="true">
            <span class="fn-list__text">Disabled Info Bar</span>
            <div class="fn-list__end-container">
                <button class="fn-button fn-button--icon-only fn-button--layout">
                    <span class="sap-icon sap-icon--decline"></span>
                </button>
            </div>
        </li>
        <li class="fn-list__item fn-list__item--info-bar is-readonly" readonly>
            <span class="fn-list__text">Read Only Info Bar</span>
        </li>
    </ul>
`;
Primary.storyName = 'List';
Primary.parameters = {
  docs: {
    description: {
      story: 'This is the standard list where information is presented on 1 line.'
    }
  }
};
export const Byline = () => `${localStyles}
    <ul class="fn-list fn-list--byline">
        <li class="fn-list__item" tabindex="0">
            <div class="fn-list__start-container">
                <span class="fn-list__title">Byline List Item Title</span>
                <span class="fn-list__byline">List Item Byline</span>
            </div>
        </li>
        <li class="fn-list__item" tabindex="0">
            <div class="fn-avatar fn-list__avatar fn-avatar--circle fn-avatar--m fn-avatar--indigo">
                <div class="fn-avatar__initials">M</div>
            </div>
            <div class="fn-list__start-container">
                <span class="fn-list__title">Byline List Item with Avatar Title</span>
                <span class="fn-list__byline">List Item Byline</span>
            </div>
        </li>
        <li class="fn-list__item" tabindex="0">
            <div class="fn-list__start-container">
                <span class="fn-list__title">Byline List Item with Status Title</span>
                <div class="fn-object-status fn-object-status--byline fn-object-status--critical">
                    <span class="sap-icon sap-icon--status-critical"></span>
                    <div class="fn-object-status__text">Critical</div>
                </div>
            </div>
        </li>
        <li class="fn-list__item" tabindex="0">
            <div class="fn-list__start-container">
                <span class="fn-list__title">Byline List Item With Buttons Title</span>
                <span class="fn-list__byline">List Item Byline</span>
            </div>
            <div class="fn-list__end-container">
                <button class="fn-button fn-button--icon-only fn-button--secondary">
                    <span class="sap-icon sap-icon--edit"></span>
                </button>
                <button class="fn-button fn-button--icon-only fn-button--secondary">
                    <span class="sap-icon sap-icon--decline"></span>
                </button>
            </div>
        </li>
        <li class="fn-list__item" tabindex="0">
            <div class="fn-list__start-container">
                <span class="fn-list__title">Byline List Item With Number and Navigation Title</span>
                <span class="fn-list__byline">List Item Byline</span>
            </div>
            <div class="fn-list__end-container">
                <span>42</span>
                <button class="fn-button fn-button--icon-only fn-button--layout">
                    <span class="sap-icon sap-icon--navigation-right-arrow"></span>
                </button>
            </div>
        </li>
        <li class="fn-list__item" tabindex="0">
            <div class="fn-list__start-container">
                <span class="fn-list__title">Byline List Item with Navigation Arrow Title</span>
                <span class="fn-list__byline">List Item Byline</span>
            </div>
            <div class="fn-list__end-container">
                <button class="fn-button fn-button--icon-only fn-button--layout">
                    <span class="sap-icon sap-icon--navigation-right-arrow"></span>
                </button>
            </div>
        </li>
        <li class="fn-list__item is-selected" tabindex="0">
            <div class="fn-list__start-container">
                <span class="fn-list__title">Byline Selected List Item Title</span>
                <span class="fn-list__byline">List Item Byline</span>
            </div>
        </li>
        <li class="fn-list__item" tabindex="0">
            <div class="fn-list__start-container">
                <span class="fn-list__title">Byline List Item with Text at the End Title</span>
                <span class="fn-list__byline">List Item Byline</span>
            </div>
            <div class="fn-list__end-container">
                <span>42</span>
            </div>
        </li>
        <li class="fn-list__item" tabindex="0">
            <span class="fn-list__icon sap-icon sap-icon--person-placeholder"></span>
            <div class="fn-list__start-container">
                <span class="fn-list__title">Byline List Item with Icon Title</span>
                <span class="fn-list__byline">List Item Byline</span>
            </div>
        </li>
        <li class="fn-list__item is-disabled" aria-disabled="true">
            <div class="fn-list__start-container">
                <span class="fn-list__title">Disabled Byline List Item Title</span>
                <span class="fn-list__byline">List Item Byline</span>
            </div>
        </li>
        <li class="fn-list__item fn-list__item--has-checkbox" tabindex="0">
                <div class="fn-checkbox" tabindex="0">
                    <input class="fn-checkbox__input" id="checkbox-1" name="checkbox-1" type="checkbox" tabindex="-1" aria-label="checkbox">
                    <span class="fn-checkbox__checkmark"></span>
                </div>
                <div class="fn-list__start-container">
                    <span class="fn-list__title">Byline List Item with Checkbox Title</span>
                    <span class="fn-list__byline">List Item Byline</span>
                </div>
        </li>
    </ul>
`;
Byline.storyName = 'Byline List';
Byline.parameters = {
  docs: {
    description: {
      story: 'This is the byline list, where the list items are taller than the default list and information can be conveyed on two lines.'
    }
  }
};
