import '../../dist/radio.css';
import '../../dist/title.css';

export default {
    title: 'Patterns/Multi Input',
    parameters: {
        description: `
The multi-input component is an opinionated composition of the \`input group\`, \`popover\`, \`checkbox\`, \`list\` and \`token\` components.
The \`popover\` is shared between the combobox and select components. Please see the \`select\` documentation for the complete list of modifiers,
That are also  supported by the \`combobox\` component.

\`Multi Input\` allows users to enter multiple values which are displayed as a tokens. 
It provides an editable input field for filtering the list, and a dropdown menu with a list of the available options. 
If the entries are not validated by the application, users can also enter custom values. 
`,
        tags: ['f3', 'a11y', 'theme']
    }
};

export const cozyAndCompact = () => `
<div style="display:flex;height:310px">
    <div style="display:flex;flex-direction:column;padding-right:1rem">
        <label class="fd-form-label">
            Multi Input Cozy Mode
        </label>
        <div class="fd-popover">
            <div class="fd-popover__control" aria-controls="F4GcX348a" aria-expanded="true" aria-haspopup="true">
                <div class="fd-input-group fd-input-group--control">
                    <div class="fd-tokenizer">
                        <div class="fd-tokenizer__inner">
                            <span class="fd-token" role="button">
                                <span class="fd-token__text">
                                    Apple
                                </span>
                                <button class="fd-token__close"></button>
                            </span>
                            <span class="fd-token" role="button">
                                <span class="fd-token__text">
                                    Orange
                                </span>
                                <button class="fd-token__close"></button>
                            </span>
                            <span class="fd-token" role="button">
                                <span class="fd-token__text">
                                    Kiwi
                                </span>
                                <button class="fd-token__close"></button>
                            </span>
                            <span class="fd-token" role="button">
                                <span class="fd-token__text">
                                    Banana
                                </span>
                                <button class="fd-token__close"></button>
                            </span>
                            <input class="fd-input fd-input-group__input fd-tokenizer__input" />
                        </div>
                    </div>
                    <span class="fd-input-group__addon fd-input-group__addon--button">
                        <button class="fd-input-group__button fd-button fd-button--transparent" aria-controls="F4GcX348a" aria-expanded="false" aria-haspopup="true">
                            <i class="sap-icon--value-help"></i>
                        </button>
                    </span>
                </div>
            </div>
            <div class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--dropdown fd-popover__body--dropdown-fill" aria-hidden="false" id="F4GcX348a">
            <div class="fd-popover__wrapper">
                <ul class="fd-list fd-list--multi-input">
                    <li class="fd-list__item is-selected" role="option">
                        <input type="checkbox" checked class="fd-checkbox fd-list__input" id="Ai4ez611">
                        <label class="fd-checkbox__label fd-list__label" for="Ai4ez611">
                            <span class="fd-checkbox__text fd-list__title">
                                Apple
                            </span>
                        </label>
                    </li>
                    <li class="fd-list__item is-selected" role="option">
                        <input type="checkbox" checked class="fd-checkbox fd-list__input" id="Ai4ez612">
                        <label class="fd-checkbox__label fd-list__label" for="Ai4ez612">
                            <span class="fd-checkbox__text fd-list__title">
                                Orange
                            </span>
                        </label>
                    </li>
                    <li class="fd-list__item is-selected" role="option">
                        <input type="checkbox" checked class="fd-checkbox fd-list__input" id="Ai4ez614">
                        <label class="fd-checkbox__label fd-list__label" for="Ai4ez614">
                            <span class="fd-checkbox__text fd-list__title">
                                Banana
                            </span>
                        </label>
                    </li>
                    <li class="fd-list__item is-selected" role="option">
                        <input type="checkbox" checked class="fd-checkbox fd-list__input" id="Ai4ez615">
                        <label class="fd-checkbox__label fd-list__label" for="Ai4ez615">
                            <span class="fd-checkbox__text fd-list__title">
                                Kiwi
                            </span>
                        </label>
                    </li>
                    <li class="fd-list__item" role="option">
                        <input type="checkbox" class="fd-checkbox fd-list__input" id="Ai4ez617">
                        <label class="fd-checkbox__label fd-list__label" for="Ai4ez617">
                            <span class="fd-checkbox__text fd-list__title">
                                Lemon
                            </span>
                        </label>
                    </li>
                </ul>
            </div>
            </div>
        </div>
    </div>
    <div style="display:flex;flex-direction:column">
        <label class="fd-form-label">
            Multi Input Compact Mode
        </label>

        <div class="fd-popover">
            <div class="fd-popover__control" aria-controls="F4GcX34a" aria-expanded="true" aria-haspopup="true">
                <div class="fd-input-group fd-input-group--control">
                    <div class="fd-tokenizer fd-tokenizer--compact">
                        <div class="fd-tokenizer__inner">
                            <span class="fd-token fd-token--compact" role="button">
                                <span class="fd-token__text">
                                    Apple
                                </span>
                                <button class="fd-token__close"></button>
                            </span>
                            <span class="fd-token fd-token--compact" role="button">
                                <span class="fd-token__text">
                                    Orange
                                </span>
                                <button class="fd-token__close"></button>
                            </span>
                            <span class="fd-token fd-token--compact" role="button">
                                <span class="fd-token__text">
                                    Banana
                                </span>
                                <button class="fd-token__close"></button>
                            </span>
                            <input class="fd-input fd-input-group__input fd-input--compact fd-tokenizer__input" />
                        </div>
                    </div>
                    <span class="fd-input-group__addon fd-input-group__addon--button fd-input-group__addon--compact">
                        <button class="fd-input-group__button fd-button fd-button--transparent fd-button--compact" aria-controls="F4GcX34a" aria-expanded="false" aria-haspopup="true">
                            <i class="sap-icon--value-help"></i>
                        </button>
                    </span>
                </div>
            </div>
            <div class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--dropdown fd-popover__body--dropdown-fill" aria-hidden="false" id="F4GcX34a">
            <div class="fd-popover__wrapper">
                <ul class="fd-list fd-list--multi-input fd-list--compact">
                    <li class="fd-list__item is-selected" role="option">
                        <input type="checkbox" checked class="fd-checkbox fd-checkbox--compact fd-list__input" id="Ai1ez611">
                        <label class="fd-checkbox__label fd-list__label" for="Ai1ez611">
                            <span class="fd-checkbox__text fd-list__title">
                                Apple
                            </span>
                        </label>
                    </li>
                    <li class="fd-list__item is-selected" role="option">
                        <input type="checkbox" checked class="fd-checkbox fd-checkbox--compact fd-list__input" id="Ai2ez612">
                        <label class="fd-checkbox__label fd-list__label" for="Ai2ez612">
                            <span class="fd-checkbox__text fd-list__title">
                                Orange
                            </span>
                        </label>
                    </li>
                    <li class="fd-list__item is-selected" role="option">
                        <input type="checkbox" checked class="fd-checkbox fd-checkbox--compact fd-list__input" id="Ai3ez614">
                        <label class="fd-checkbox__label fd-list__label" for="Ai3ez614">
                            <span class="fd-checkbox__text fd-list__title">
                                Banana
                            </span>
                        </label>
                    </li>
                    <li class="fd-list__item" role="option">
                        <input type="checkbox" class="fd-checkbox fd-checkbox--compact fd-list__input" id="Ai8ez615">
                        <label class="fd-checkbox__label fd-list__label" for="Ai8ez615">
                            <span class="fd-checkbox__text fd-list__title">
                                Kiwi
                            </span>
                        </label>
                    </li>
                    <li class="fd-list__item" role="option">
                        <input type="checkbox" class="fd-checkbox fd-checkbox--compact fd-list__input" id="AiHez617">
                        <label class="fd-checkbox__label fd-list__label" for="AiHez617">
                            <span class="fd-checkbox__text fd-list__title">
                                Lemon
                            </span>
                        </label>
                    </li>
                </ul>
            </div>
            </div>
        </div>
    </div>
</div>
`;

cozyAndCompact.parameters = {
    docs: {
        iframeHeight: 350
    }
};

export const asFormItem = () =>`
<div style="height:310px">
    <div class="fd-form-item">
    <label class="fd-form-label">
        Multi Input as form item
    </label>
    <div class="fd-popover">
        <div class="fd-popover__control" aria-controls="F4GcX348a" aria-expanded="true" aria-haspopup="true">
            <div class="fd-input-group fd-input-group--control">
                <div class="fd-tokenizer">
                    <div class="fd-tokenizer__inner">
                        <span class="fd-token" role="button">
                            <span class="fd-token__text">
                                Apple
                            </span>
                            <button class="fd-token__close"></button>
                        </span>
                        <span class="fd-token" role="button">
                            <span class="fd-token__text">
                                Orange
                            </span>
                            <button class="fd-token__close"></button>
                        </span>
                        <span class="fd-token" role="button">
                            <span class="fd-token__text">
                                Kiwi
                            </span>
                            <button class="fd-token__close"></button>
                        </span>
                        <span class="fd-token" role="button">
                            <span class="fd-token__text">
                                Banana
                            </span>
                            <button class="fd-token__close"></button>
                        </span>
                        <input class="fd-input fd-input-group__input fd-tokenizer__input" />
                    </div>
                </div>
                <span class="fd-input-group__addon fd-input-group__addon--button">
                    <button class="fd-input-group__button fd-button fd-button--transparent" aria-controls="F4GcX348a" aria-expanded="false" aria-haspopup="true">
                        <i class="sap-icon--value-help"></i>
                    </button>
                </span>
            </div>
        </div>
        <div class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--dropdown fd-popover__body--dropdown-fill" aria-hidden="false" id="F4GcX348a">
        <div class="fd-popover__wrapper">
            <ul class="fd-list fd-list--multi-input">
                <li class="fd-list__item is-selected" role="option">
                    <input type="checkbox" checked class="fd-checkbox fd-list__input" id="Ai4ez611">
                    <label class="fd-checkbox__label fd-list__label" for="Ai4ez611">
                        <span class="fd-checkbox__text fd-list__title">
                            Apple
                        </span>
                    </label>
                </li>
                <li class="fd-list__item is-selected" role="option">
                    <input type="checkbox" checked class="fd-checkbox fd-list__input" id="Ai4ez612">
                    <label class="fd-checkbox__label fd-list__label" for="Ai4ez612">
                        <span class="fd-checkbox__text fd-list__title">
                            Orange
                        </span>
                    </label>
                </li>
                <li class="fd-list__item is-selected" role="option">
                    <input type="checkbox" checked class="fd-checkbox fd-list__input" id="Ai4ez614">
                    <label class="fd-checkbox__label fd-list__label" for="Ai4ez614">
                        <span class="fd-checkbox__text fd-list__title">
                            Banana
                        </span>
                    </label>
                </li>
                <li class="fd-list__item is-selected" role="option">
                    <input type="checkbox" checked class="fd-checkbox fd-list__input" id="Ai4ez615">
                    <label class="fd-checkbox__label fd-list__label" for="Ai4ez615">
                        <span class="fd-checkbox__text fd-list__title">
                            Kiwi
                        </span>
                    </label>
                </li>
                <li class="fd-list__item" role="option">
                    <input type="checkbox" class="fd-checkbox fd-list__input" id="Ai4ez617">
                    <label class="fd-checkbox__label fd-list__label" for="Ai4ez617">
                        <span class="fd-checkbox__text fd-list__title">
                            Lemon
                        </span>
                    </label>
                </li>
            </ul>
        </div>
        </div>
    </div>
    </div>
</div>
`;

asFormItem.parameters = {
    docs: {
        iframeHeight: 900,
        storyDescription: `
Note that the popover body width is restricted to a max of 37.5rem to avoid readability issues in large-width popovers.
Applications are free to override this in their custom styles if needed and own any readability issues arising from this override.
`
    }
};

export const grouping = () => `
<div style="height:450px">
    <div class="fd-popover">
        <div class="fd-popover__control" aria-controls="F4H8X34a" aria-expanded="true" aria-haspopup="true">
            <div class="fd-input-group fd-input-group--control">
                <div class="fd-tokenizer">
                    <div class="fd-tokenizer__inner">
                        <span class="fd-token" role="button">
                            <span class="fd-token__text">
                                Apple
                            </span>
                            <button class="fd-token__close"></button>
                        </span>
                        <span class="fd-token" role="button">
                            <span class="fd-token__text">
                                Orange
                            </span>
                            <button class="fd-token__close"></button>
                        </span>
                        <span class="fd-token" role="button">
                            <span class="fd-token__text">
                                Kiwi
                            </span>
                            <button class="fd-token__close"></button>
                        </span>
                        <span class="fd-tokenizer__indicator">2 more</span> 
                        <input class="fd-input fd-input-group__input fd-tokenizer__input" />
                    </div>
                </div>
                <span class="fd-input-group__addon fd-input-group__addon--button">
                    <button class="fd-input-group__button fd-button fd-button--transparent" aria-controls="F4H8X34a" aria-expanded="false" aria-haspopup="true">
                        <i class="sap-icon--value-help"></i>
                    </button>
                </span>
            </div>
        </div>
        <div class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--dropdown fd-popover__body--dropdown-fill" aria-hidden="false" id="F4H8X34a">
        <div class="fd-popover__wrapper">
            <ul class="fd-list fd-list--multi-input">
                <li class="fd-list__group-header">
                    Fruits
                </li>
                <li class="fd-list__item is-selected" role="option">
                    <input type="checkbox" checked class="fd-checkbox fd-list__input" id="Ai1ez651">
                    <label class="fd-checkbox__label fd-list__label" for="Ai1ez651">
                        <span class="fd-checkbox__text fd-list__title">
                            Apple
                        </span>
                    </label>
                </li>
                <li class="fd-list__item is-selected" role="option">
                    <input type="checkbox" checked class="fd-checkbox fd-list__input" id="Ai2ez652">
                    <label class="fd-checkbox__label fd-list__label" for="Ai2ez652">
                        <span class="fd-checkbox__text fd-list__title">
                            Orange
                        </span>
                    </label>
                </li>
                <li class="fd-list__item is-selected" role="option">
                    <input type="checkbox" checked class="fd-checkbox fd-list__input" id="Ai3ez654">
                    <label class="fd-checkbox__label fd-list__label" for="Ai3ez654">
                        <span class="fd-checkbox__text fd-list__title">
                            Kiwi
                        </span>
                    </label>
                </li>
                <li class="fd-list__item" role="option">
                    <input type="checkbox" class="fd-checkbox fd-list__input" id="Ai8ez655">
                    <label class="fd-checkbox__label fd-list__label" for="Ai8ez655">
                        <span class="fd-checkbox__text fd-list__title">
                            Banana
                        </span>
                    </label>
                </li>
                <li class="fd-list__item" role="option">
                    <input type="checkbox" class="fd-checkbox fd-list__input" id="AiHez657">
                    <label class="fd-checkbox__label fd-list__label" for="AiHez657">
                        <span class="fd-checkbox__text fd-list__title">
                            Lemon
                        </span>
                    </label>
                </li>
                <li class="fd-list__group-header">
                    Vegetables
                </li>
                <li class="fd-list__item is-selected" role="option">
                    <input type="checkbox" checked class="fd-checkbox fd-list__input" id="Ai8ez689">
                    <label class="fd-checkbox__label fd-list__label" for="Ai8ez689">
                        <span class="fd-checkbox__text fd-list__title">
                            Onion
                        </span>
                    </label>
                </li>
                <li class="fd-list__item is-selected" role="option">
                    <input type="checkbox" checked class="fd-checkbox fd-list__input" id="Ai8ez685">
                    <label class="fd-checkbox__label fd-list__label" for="Ai8ez685">
                        <span class="fd-checkbox__text fd-list__title">
                            Tomato
                        </span>
                    </label>
                </li>
            </ul>
        </div>
        </div>
    </div>
</div>
`;

grouping.parameters = {
    docs: {
        iframeHeight: 500,
        storyDescription: 'In cases where the list items need to be categorized into groups, it is possible to add headers for each category as seen below.'
    }
};

export const matchPopoverBodySize = () => `
<div style="height:270px">
    <div class="fd-popover">
        <div class="fd-popover__control" aria-controls="F4HGFHX34a" aria-expanded="true" aria-haspopup="true">
            <div class="fd-input-group fd-input-group--control">
                <div class="fd-tokenizer">
                    <div class="fd-tokenizer__inner">
                        <span class="fd-token" role="button">
                            <span class="fd-token__text">
                                Apple
                            </span>
                            <button class="fd-token__close"></button>
                        </span>
                        <span class="fd-token" role="button">
                            <span class="fd-token__text">
                                Orange
                            </span>
                            <button class="fd-token__close"></button>
                        </span>
                        <span class="fd-token" role="button">
                            <span class="fd-token__text">
                                Kiwi
                            </span>
                            <button class="fd-token__close"></button>
                        </span>
                        <span class="fd-tokenizer__indicator">2 more</span> 
                        <input class="fd-input fd-input-group__input fd-tokenizer__input" />
                    </div>
                </div>
                <span class="fd-input-group__addon fd-input-group__addon--button">
                    <button class="fd-input-group__button fd-button fd-button--transparent" aria-controls="F4HGFHX34a" aria-expanded="false" aria-haspopup="true">
                        <i class="sap-icon--value-help"></i>
                    </button>
                </span>
            </div>
        </div>
        <div class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--dropdown" aria-hidden="false" id="F4HGFHX34a">
        <div class="fd-popover__wrapper">
            <ul class="fd-list fd-list--multi-input">
                <li class="fd-list__item is-selected" role="option">
                    <input type="checkbox" checked class="fd-checkbox fd-list__input" id="Ai124z651">
                    <label class="fd-checkbox__label fd-list__label" for="Ai124z651">
                        <span class="fd-checkbox__text fd-list__title">
                            Apple
                        </span>
                    </label>
                </li>
                <li class="fd-list__item is-selected" role="option">
                    <input type="checkbox" checked class="fd-checkbox fd-list__input" id="Ai134z651">
                    <label class="fd-checkbox__label fd-list__label" for="Ai134z651">
                        <span class="fd-checkbox__text fd-list__title">
                            Orange
                        </span>
                    </label>
                </li>
                <li class="fd-list__item is-selected" role="option">
                    <input type="checkbox" checked class="fd-checkbox fd-list__input" id="Ai1366z651">
                    <label class="fd-checkbox__label fd-list__label" for="Ai1366z651">
                        <span class="fd-checkbox__text fd-list__title">
                            Kiwi
                        </span>
                    </label>
                </li>
                <li class="fd-list__item" role="option">
                    <input type="checkbox" class="fd-checkbox fd-list__input" id="Ai136gf51">
                    <label class="fd-checkbox__label fd-list__label" for="Ai136gf51">
                        <span class=" fd-checkbox__text fd-list__title">
                            Banana
                        </span>
                    </label>
                </li>
                <li class="fd-list__item" role="option">
                    <input type="checkbox" class="fd-checkbox fd-list__input" id="Ai136ggfd">
                    <label class="fd-checkbox__label fd-list__label" for="Ai136ggfd">
                        <span class="fd-checkbox__text fd-list__title">
                            Lemon
                        </span>
                    </label>
                </li>
            </ul>
        </div>
        </div>
    </div>
</div>
`;

matchPopoverBodySize.parameters = {
    docs: {
        iframeHeight: 300,
        storyDescription: `
The default length size of the popover body is often different from the text length. 
The body length can be adjusted to match the text length by adding the \`fd-popover__body--dropdown-fill\` class to the \`fd-popover__body\`.

This class has been added to all the \`Multi Input\` examples above. 
In the example you can see how the \`Multi Input\` component looks without the \`fd-popover__body--dropdown-fill\` modifier.
`
    }
};

export const readOnlyAndDisabled = () => `
<div style="display:flex;height:80px;">
    <div class="fd-popover" style="display:flex;flex-direction:column;padding-right:1rem">
        <div class="fd-popover__control" aria-controls="F4GcX3X8a" aria-expanded="false" aria-haspopup="false">
            <div class="fd-input-group fd-input-group--control" readonly aria-readonly="true">
                <div class="fd-tokenizer fd-tokenizer--readonly">
                    <div class="fd-tokenizer__inner">
                        <span class="fd-token fd-token--readonly" role="button">
                            <span class="fd-token__text">
                                Bibendum
                            </span>
                        </span>
                        <span class="fd-token fd-token--readonly" role="button">
                            <span class="fd-token__text">
                                Lorem
                            </span>
                        </span>
                        <span class="fd-token fd-token--readonly" role="button">
                            <span class="fd-token__text">
                                Dolor
                            </span>
                        </span>
                        <span class="fd-token fd-token--readonly" role="button">
                            <span class="fd-token__text">
                                Filter
                            </span>
                        </span>
                        <span class="fd-token fd-token--readonly">
                            <span class="fd-token__text">
                                Lorem
                            </span>
                        </span>
                        <span class="fd-tokenizer__indicator">
                            <div class="fd-popover">
                                <div class="fd-popover__control fd-input-group__control" aria-controls="F4GF5348a" aria-expanded="false" aria-haspopup="true">
                                    <a href="#" class="fd-link">
                                        4 more
                                    </a>
                                </div>
                                <div class="fd-popover__body" aria-hidden="true" id="F4GF5348a">
                                    <nav class="fd-menu" id="">
                                        <ul class="fd-menu__list fd-menu__list--no-shadow">
                                            <li class="fd-menu__item">
                                                <a href="#" class="fd-menu__link">
                                                    <span class="fd-menu__title">Option 1</span>
                                                </a>
                                            </li>
                                            <li class="fd-menu__item">
                                                <a href="#" class="fd-menu__link">
                                                    <span class="fd-menu__title">Option 2</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </span>
                        <input class="fd-input fd-input-group__input fd-tokenizer__input" readonly aria-readonly="true" />
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="fd-popover" style="display:flex;flex-direction:column">
        <div class="fd-popover__control" aria-expanded="false" aria-haspopup="true" aria-disabled="true" disabled>
            <div class="fd-input-group fd-input-group--control"  aria-disabled="true" disabled>
                <div class="fd-tokenizer">
                    <div class="fd-tokenizer__inner">
                        <span class="fd-token fd-token--readonly" role="button">
                            <span class="fd-token__text">
                                Bibendum
                            </span>
                        </span>
                        <span class="fd-token fd-token--readonly" role="button">
                            <span class="fd-token__text">
                                Lorem
                            </span>
                        </span>
                        <span class="fd-token fd-token--readonly" role="button">
                            <span class="fd-token__text">
                                Dolor
                            </span>
                        </span>
                        <span class="fd-token fd-token--readonly" role="button">
                            <span class="fd-token__text">
                                Filter
                            </span>
                        </span>
                        <span class="fd-token fd-token--readonly">
                            <span class="fd-token__text">
                                Lorem
                            </span>
                        </span>
                        <span class="fd-tokenizer__indicator">
                            <div class="fd-popover">
                                <div class="fd-popover__control fd-input-group__control" aria-controls="F4GcX34Xa" aria-expanded="false" aria-haspopup="true">
                                    <a href="#" class="fd-link">
                                        4 more
                                    </a>
                                </div>
                                <div class="fd-popover__body" aria-hidden="true" id="F4GcX34Xa">
                                    <nav class="fd-menu" id="">
                                        <ul class="fd-menu__list fd-menu__list--no-shadow">
                                            <li class="fd-menu__item">
                                                <a href="#" class="fd-menu__link">
                                                    <span class="fd-menu__title">Option 1</span>
                                                </a>
                                            </li>
                                            <li class="fd-menu__item">
                                                <a href="#" class="fd-menu__link">
                                                    <span class="fd-menu__title">Option 2</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </span>
                        <input class="fd-input fd-input-group__input fd-tokenizer__input" />
                    </div>
                </div>
                <span class="fd-input-group__addon fd-input-group__addon--button">
                    <button tabindex="-1" class="fd-input-group__button fd-button fd-button--transparent">
                        <i class="sap-icon--value-help"></i>
                    </button>
                </span>
            </div>
        </div>
    </div>
</div>
`;

readOnlyAndDisabled.parameters = {
    docs: {
        iframeHeight: 100,
        storyDescription: `
To make the \`Multi Input\` component read-only, the readonly attribute needs to be added to the \`fd-nput-group\` element.
This can also be done by using the \`.is-readonly\` class or \`aria-readonly="true"\` attribute.

To disable a \`Multi Input\` component, the disabled attribute needs to be added to the \`fd-popover__control\` and the \`fd-input__control\` elements.
The disabled state can also be achieved by adding the \`.is-disabled\` class or the \`aria-disabled="true"\` attribute.
`
    }
};

export const semantic = () => `
<div style="height:300px">
<div class="fd-popover">
    <div class="fd-popover__control fd-input-group__control" aria-controls="F4GcKJH8a" aria-expanded="true" aria-haspopup="true">
        <div class="fd-input-group fd-input-group--control is-success">
            <div class="fd-tokenizer">
                 <div class="fd-tokenizer__inner">
                     <span class="fd-token" role="button">
                         <span class="fd-token__text">
                             Apple
                         </span>
                         <button class="fd-token__close"></button>
                     </span>
                     <span class="fd-token" role="button">
                         <span class="fd-token__text">
                             Orange
                         </span>
                         <button class="fd-token__close"></button>
                     </span>
                     <span class="fd-token" role="button">
                         <span class="fd-token__text">
                             Kiwi
                         </span>
                         <button class="fd-token__close"></button>
                     </span>
                     <span class="fd-tokenizer__indicator">4 more</span> 
                     <input class="fd-input fd-input-group__input fd-tokenizer__input" />
                 </div>
            </div>
            <span class="fd-input-group__addon fd-input-group__addon--button">
                <button class="fd-input-group__button fd-button fd-button--transparent" aria-controls="F4GcKJH8a" aria-expanded="false" aria-haspopup="true">
                    <i class="sap-icon--value-help"></i>
                </button>
            </span>
        </div>
    </div>
    <div class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--dropdown fd-popover__body--dropdown-fill" aria-hidden="false" id="F4GcKJH8a">
      <div class="fd-popover__wrapper">
        <ul class="fd-list fd-list--multi-input fd-list--has-message">
            <li class="fd-list__message fd-list__message--success">Success Message</li>
             <li class="fd-list__item is-selected" role="option">
                <input type="checkbox" checked class="fd-checkbox fd-list__input" id="AGi4ez611">
                <label class="fd-checkbox__label fd-list__label" for="AGi4ez611">
                    <span class="fd-checkbox__text fd-list__title">
                        Apple
                    </span>
                </label>
            </li>
             <li class="fd-list__item is-selected" role="option">
                <input type="checkbox" checked class="fd-checkbox fd-list__input" id="Ai4Fez612">
                <label class="fd-checkbox__label fd-list__label" for="Ai4Fez612">
                    <span class="fd-checkbox__text fd-list__title">Orange</span>
                </label>
            </li>
             <li class="fd-list__item is-selected" role="option">
                <input type="checkbox" checked class="fd-checkbox fd-list__input" id="Ai4eGz614">
                <label class="fd-checkbox__label fd-list__label" for="Ai4eGz614">
                    <span class="fd-checkbox__text fd-list__title">Kiwi</span>
                </label>
            </li>
             <li class="fd-list__item" role="option">
                <input type="checkbox" class="fd-checkbox fd-list__input" id="Ai4egh614">
                <label class="fd-checkbox__label fd-list__label" for="Ai4egh614">
                    <span class="fd-checkbox__text fd-list__title">Banana</span>
                </label>
            </li>
             <li class="fd-list__item" role="option">
                <input type="checkbox" class="fd-checkbox fd-list__input" id="jdFffsd3">
                <label class="fd-checkbox__label fd-list__label" for="jdFffsd3">
                    <span class="fd-checkbox__text fd-list__title">Lemon</span>
                </label>
            </li>
        </ul>
    </div>
  </div>
</div>
<span class="fd-form-message fd-form-message--static fd-form-message--success">Success message</span>
</div>
`;

semantic.parameters = {
    docs: {
        iframeHeight: 350,
        storyDescription: `
For a complete list of states supported by the \`Multi Input\` component, please see the documentation for the form or select components.

The semantic mode can be used to modify the combobox component by adding one of 
\`is-error\` | \`is-success\` | \`is-warning\` | \`is-information\` classes into \`fd-input-group\` element. 
To add text in the \`body\` of the component, simply include your text in the \`fd-list__message\` under the \`ul\` element.`
    }
};

export const mobileMode = () => `
<div class="fd-dialog fd-dialog-docs-static fd-select-docs-max-height fd-dialog--active" id="select-dialog-example">
    <div class="fd-dialog__content">
        <header class="fd-dialog__header fd-bar fd-bar--header-with-subheader">
            <div class="fd-bar__left">
                <div class="fd-bar__element">
                    <h3 class="fd-title fd-title--h5">
                        Select Ingredient
                    </h3>
                </div>
            </div>
            <div class="fd-bar__right">
                <div class="fd-bar__element">
                    <button class="fd-button fd-button--transparent" aria-label="close">
                        <i class="sap-icon--decline"></i>
                    </button>
                </div>
            </div>
        </header>
        <div class="fd-dialog__subheader fd-bar fd-bar--cozy fd-bar--subheader">
            <div class="fd-bar__middle">
                <div class="fd-bar__element">
                    <div class="fd-input-group">
                        <div class="fd-tokenizer">
                             <div class="fd-tokenizer__inner">
                                 <span class="fd-token" role="button">
                                     <span class="fd-token__text">
                                         Apple
                                     </span>
                                     <button class="fd-token__close"></button>
                                 </span>
                                 <span class="fd-token" role="button">
                                     <span class="fd-token__text">
                                         Orange
                                     </span>
                                     <button class="fd-token__close"></button>
                                 </span>
                                 <span class="fd-token" role="button">
                                     <span class="fd-token__text">
                                         Kiwi
                                     </span>
                                     <button class="fd-token__close"></button>
                                 </span>
                                 <span class="fd-tokenizer__indicator">4 more</span> 
                                 <input class="fd-input fd-input-group__input fd-tokenizer__input" />
                             </div>
                         </div>
                        <span class="fd-input-group__addon fd-input-group__addon--button">
                            <button class="fd-input-group__button fd-button fd-button--transparent">
                                <i class="sap-icon--value-help"></i>
                            </button>
                        </span>
                    </div>
                </div>
                <div class="fd-bar__element">
                    <button class="fd-button fd-button--transparent">
                        <i class="sap-icon--multiselect-all"></i>
                    </button>
                </div>
            </div>
        </div>
        <div class="fd-dialog__body fd-dialog__body--no-vertical-padding">
             <ul class="fd-list fd-list--multi-input fd-list--has-message">
                <li class="fd-list__message fd-list__message--success">Success Message</li>
                <li class="fd-list__item is-selected" role="option">
                     <input type="checkbox" checked class="fd-checkbox  fd-list__input" id="GGi4ez641">
                     <label class="fd-checkbox__label fd-list__label" for="GGi4ez641">
                         <span class="fd-checkbox__text fd-list__title">
                             Apple
                         </span>
                     </label>
                 </li>
                  <li class="fd-list__item is-selected" role="option">
                     <input type="checkbox" checked class="fd-checkbox  fd-list__input" id="Ai4FGFG612">
                     <label class="fd-checkbox__label fd-list__label" for="Ai4FGFG612">
                         <span class="fd-checkbox__text fd-list__title">Orange</span>
                     </label>
                 </li>
                  <li class="fd-list__item is-selected" role="option">
                     <input type="checkbox" checked class="fd-checkbox  fd-list__input" id="Ai4e88614">
                     <label class="fd-checkbox__label fd-list__label" for="Ai4e88614">
                         <span class="fd-checkbox__text fd-list__title">Kiwi</span>
                     </label>
                 </li>
                  <li class="fd-list__item" role="option">
                     <input type="checkbox" class="fd-checkbox  fd-list__input" id="Ai4egh6024">
                     <label class="fd-checkbox__label fd-list__label" for="Ai4egh6024">
                         <span class="fd-checkbox__text fd-list__title">Banana</span>
                     </label>
                 </li>
                  <li class="fd-list__item" role="option">
                     <input type="checkbox" class="fd-checkbox  fd-list__input" id="7gJHdsad">
                     <label class="fd-checkbox__label fd-list__label" for="7gJHdsad">
                         <span class="fd-checkbox__text fd-list__title">Lemon</span>
                     </label>
                 </li>
             </ul>
        </div>
       <footer class="fd-dialog__footer fd-bar fd-bar--cozy fd-bar--footer">
            <div class="fd-bar__right">
                <div class="fd-bar__element">
                    <button class="fd-button fd-button--emphasized fd-dialog__decisive-button">OK</button>
                </div>
            </div>
        </footer>
    </div>
</div>
`;

mobileMode.parameters = {
    docs: {
        iframeHeight: 450,
        storyDescription: `
For mobile devices, or tablets, multi input component should be displayed in fullscreen mode.
So instead of using popover and dropdown, it should be wrapped in \`dialog\` and \`bar\` components.`
    }
};

export const filtering = () => `
<div class="fd-popover">
    <div class="fd-popover__control" aria-controls="F4GcX348aB" aria-expanded="true" aria-haspopup="true">
        <div class="fd-input-group fd-input-group--control">
            <div class="fd-tokenizer">
                <div class="fd-tokenizer__inner">
                    <span class="fd-token" role="button">
                        <span class="fd-token__text">
                            Apple
                        </span>
                        <button class="fd-token__close"></button>
                    </span>
                    <span class="fd-token" role="button">
                        <span class="fd-token__text">
                            Orange
                        </span>
                        <button class="fd-token__close"></button>
                    </span>
                    <span class="fd-token" role="button">
                        <span class="fd-token__text">
                            Banana
                        </span>
                        <button class="fd-token__close"></button>
                    </span>
                    <input class="fd-input fd-input-group__input fd-tokenizer__input" value="A" />
                </div>
            </div>
            <span class="fd-input-group__addon fd-input-group__addon--button">
                <button class="fd-input-group__button fd-button fd-button--transparent" aria-controls="F4GcX348aB" aria-expanded="false" aria-haspopup="true">
                    <i class="sap-icon--value-help"></i>
                </button>
            </span>
        </div>
    </div>
    <div class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--dropdown fd-popover__body--dropdown-fill" aria-hidden="false" id="F4GcX348aB">
        <ul class="fd-list fd-list--multi-input">
             <li class="fd-list__item is-selected" role="option">
                <input type="checkbox" checked class="fd-checkbox fd-list__input" id="Ai4ez611A">
                <label class="fd-checkbox__label fd-list__label" for="Ai4ez611A">
                    <span class="fd-checkbox__text fd-list__title">
                        <b>A</b>pple
                    </span>
                </label>
            </li>
             <li class="fd-list__item is-selected" role="option">
                <input type="checkbox" checked class="fd-checkbox fd-list__input" id="Ai4ez612A">
                <label class="fd-checkbox__label fd-list__label" for="Ai4ez612A">
                    <span class="fd-list__title">
                        Or<b>a</b>nge
                    </span>
                </label>
            </li>
             <li class="fd-list__item is-selected" role="option">
                <input type="checkbox" checked class="fd-checkbox fd-list__input" id="Ai4ez614A">
                <label class="fd-checkbox__label fd-list__label" for="Ai4ez614A">
                    <span class="fd-list__title">
                        B<b>a</b>nana
                    </span>
                </label>
            </li>
        </ul>
        <span class="fd-list__footer">
          <a class="fd-link" href="#">Show All</a>
        </span>
    </div>
</div>
`;

filtering.parameters = {
    docs: {
        iframeHeight: 300,
        storyDescription: `
The user can filter selectable options by typing in the input. A button with the text "Show All" should be displayed, that when clicked, will clear the text in the input and show all options in the list.`
    }
};
