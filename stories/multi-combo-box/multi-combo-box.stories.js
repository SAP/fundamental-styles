export default {
    title: 'Patterns/Multi ComboBox',
    parameters: {
        description: `
The multi-combo-box component is an opinionated composition of the \`input group\`, \`popover\`, \`checkbox\`, \`list\` and \`token\` components.
The \`popover\` is shared between the combobox and select components. Please see the \`select\` documentation for the complete list of modifiers,
That are also  supported by the \`combobox\` component.

\`Multi ComboBox\` allows users to enter multiple values which are displayed as a tokens. 
It provides an editable input field for filtering the list, and a dropdown menu with a list of the available options. 
If the entries are not validated by the application, users can also enter custom values. 
`,
        tags: ['f3', 'a11y', 'theme'],
        components: [
            'form-label',
            'popover',
            'radio',
            'title',
            'token',
            'input-group',
            'checkbox',
            'list',
            'button',
            'icon',
            'tokenizer',
            'dialog',
            'bar',
            'input',
            'layout-grid',
            'link'
        ]
    }
};

export const cozyAndCompact = () => `<div class="fd-container" style="height: 300px;">
    <div class="fd-row">
	<div class="fd-col fd-col--6">
        <label class="fd-form-label">
            Multi ComboBox Cozy Mode
        </label>
        <div class="fd-popover">
            <div class="fd-popover__control" role="combobox" aria-controls="F4GcX348a" aria-expanded="true" aria-haspopup="true">
                <div class="fd-input-group fd-input-group--control" tabindex="0">
                    <div class="fd-tokenizer">
                        <div class="fd-tokenizer__inner">
                            <span class="fd-token" role="button" tabindex="0">
                                <span class="fd-token__text">
                                    Apple
                                </span>
                                <button class="fd-token__close" aria-label="unselect option: apple"></button>
                            </span>
                            <span class="fd-token" role="button" tabindex="0">
                                <span class="fd-token__text">
                                    Orange
                                </span>
                                <button class="fd-token__close" aria-label="unselect option: Orange"></button>
                            </span>
                            <span class="fd-token" role="button" tabindex="0">
                                <span class="fd-token__text">
                                    Banana
                                </span>
                                <button class="fd-token__close" aria-label="unselect option: Banana"></button>
                            </span>
                            <input class="fd-input fd-input-group__input fd-tokenizer__input" aria-label="multi input cozy"/>
                        </div>
                    </div>
                    <span class="fd-input-group__addon fd-input-group__addon--button">
                        <button class="fd-input-group__button fd-button fd-button--transparent" aria-label="down arrow" aria-controls="F4GcX348a" aria-expanded="false" aria-haspopup="true">
                            <i class="sap-icon--navigation-down-arrow"></i>
                        </button>
                    </span>
                </div>
            </div>
            <div class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--dropdown fd-popover__body--dropdown-fill" aria-hidden="false" id="F4GcX348a">
            <div class="fd-popover__wrapper">
                <ul class="fd-list fd-list--multi-input" role="listbox" aria-multiselectable="true" aria-label="Fruits">
                    <li class="fd-list__item is-selected" role="option" tabindex="0">
                        <input type="checkbox" checked class="fd-checkbox fd-list__input" id="Ai4ez611"  tabindex="-1">
                        <label class="fd-checkbox__label fd-list__label" for="Ai4ez611">
                            <span class="fd-checkbox__text fd-list__title">
                                Apple
                            </span>
                        </label>
                    </li>
                    <li class="fd-list__item is-selected" role="option" tabindex="0">
                        <input type="checkbox" checked class="fd-checkbox fd-list__input" id="Ai4ez612"  tabindex="-1">
                        <label class="fd-checkbox__label fd-list__label" for="Ai4ez612">
                            <span class="fd-checkbox__text fd-list__title">
                                Orange
                            </span>
                        </label>
                    </li>
                    <li class="fd-list__item is-selected" role="option" tabindex="0">
                        <input type="checkbox" checked class="fd-checkbox fd-list__input" id="Ai4ez614" tabindex="-1">
                        <label class="fd-checkbox__label fd-list__label" for="Ai4ez614">
                            <span class="fd-checkbox__text fd-list__title">
                                Banana
                            </span>
                        </label>
                    </li>
                    <li class="fd-list__item" role="option" tabindex="0">
                        <input type="checkbox" class="fd-checkbox fd-list__input" id="Ai4ez615" tabindex="-1">
                        <label class="fd-checkbox__label fd-list__label" for="Ai4ez615">
                            <span class="fd-checkbox__text fd-list__title">
                                Kiwi
                            </span>
                        </label>
                    </li>
                    <li class="fd-list__item" role="option" tabindex="0">
                        <input type="checkbox" class="fd-checkbox fd-list__input" id="Ai4ez617" tabindex="-1">
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
    <div class="fd-col fd-col--6">
        <label class="fd-form-label">
            Multi ComboBox Compact Mode
        </label>

        <div class="fd-popover">
            <div class="fd-popover__control" role="combobox" aria-controls="F4GcX34a" aria-expanded="true" aria-haspopup="true">
                <div class="fd-input-group fd-input-group--control" tabindex="0">
                    <div class="fd-tokenizer fd-tokenizer--compact">
                        <div class="fd-tokenizer__inner">
                            <span class="fd-token fd-token--compact" role="button" tabindex="0">
                                <span class="fd-token__text">
                                    Apple
                                </span>
                                <button class="fd-token__close" aria-label="unselect option: Apple"></button>
                            </span>
                            <span class="fd-token fd-token--compact" role="button" tabindex="0">
                                <span class="fd-token__text">
                                    Orange
                                </span>
                                <button class="fd-token__close" aria-label="unselect option: Orange"></button>
                            </span>
                            <span class="fd-token fd-token--compact" role="button" tabindex="0">
                                <span class="fd-token__text">
                                    Banana
                                </span>
                                <button class="fd-token__close" aria-label="unselect option: Bannana"></button>
                            </span>
                            <input class="fd-input fd-input-group__input fd-input--compact fd-tokenizer__input" aria-label="Multi Input Sample" />
                        </div>
                    </div>
                    <span class="fd-input-group__addon fd-input-group__addon--button fd-input-group__addon--compact">
                        <button class="fd-input-group__button fd-button fd-button--transparent fd-button--compact" aria-controls="F4GcX34a" aria-expanded="false" aria-label="hidden button" aria-haspopup="true">
                            <i class="sap-icon--navigation-down-arrow"></i>
                        </button>
                    </span>
                </div>
            </div>
            <div class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--dropdown fd-popover__body--dropdown-fill" aria-hidden="false" id="F4GcX34a">
            <div class="fd-popover__wrapper">
                <ul class="fd-list fd-list--multi-input fd-list--compact"  role="listbox" aria-multiselectable="true" aria-label="Fruits">
                    <li class="fd-list__item is-selected" role="option" tabindex="0">
                        <input type="checkbox" checked class="fd-checkbox fd-checkbox--compact fd-list__input" id="Ai1ez611" tabindex="-1">
                        <label class="fd-checkbox__label fd-list__label" for="Ai1ez611">
                            <span class="fd-checkbox__text fd-list__title">
                                Apple
                            </span>
                        </label>
                    </li>
                    <li class="fd-list__item is-selected" role="option" tabindex="0">
                        <input type="checkbox" checked class="fd-checkbox fd-checkbox--compact fd-list__input" id="Ai2ez612" tabindex="-1">
                        <label class="fd-checkbox__label fd-list__label" for="Ai2ez612">
                            <span class="fd-checkbox__text fd-list__title">
                                Orange
                            </span>
                        </label>
                    </li>
                    <li class="fd-list__item is-selected" role="option" tabindex="0">
                        <input type="checkbox" checked class="fd-checkbox fd-checkbox--compact fd-list__input" id="Ai3ez614" tabindex="-1">
                        <label class="fd-checkbox__label fd-list__label" for="Ai3ez614">
                            <span class="fd-checkbox__text fd-list__title">
                                Banana
                            </span>
                        </label>
                    </li>
                    <li class="fd-list__item" role="option" tabindex="0">
                        <input type="checkbox" class="fd-checkbox fd-checkbox--compact fd-list__input" id="Ai8ez615" tabindex="-1">
                        <label class="fd-checkbox__label fd-list__label" for="Ai8ez615">
                            <span class="fd-checkbox__text fd-list__title">
                                Kiwi
                            </span>
                        </label>
                    </li>
                    <li class="fd-list__item" role="option" tabindex="0">
                        <input type="checkbox" class="fd-checkbox fd-checkbox--compact fd-list__input" id="AiHez617" tabindex="-1">
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
</div>
`;

export const asFormItem = () => `<div style="height: 300px;">
    <div class="fd-form-item">
    <div class="fd-popover">
        <div class="fd-popover__control" role="combobox" aria-controls="F4GcX348a" aria-expanded="true" aria-haspopup="true">
            <div class="fd-input-group fd-input-group--control" tabindex="0">
                <div class="fd-tokenizer">
                    <div class="fd-tokenizer__inner">
                        <span class="fd-token" role="button" tabindex="0">
                            <span class="fd-token__text">
                                Apple
                            </span>
                            <button class="fd-token__close" aria-label="unselect option: Apple"></button>
                        </span>
                        <span class="fd-token" role="button" tabindex="0">
                            <span class="fd-token__text">
                                Orange
                            </span>
                            <button class="fd-token__close" aria-label="unselect option: Orange"></button>
                        </span>
                        <span class="fd-token" role="button" tabindex="0">
                            <span class="fd-token__text">
                                Kiwi
                            </span>
                            <button class="fd-token__close" aria-label="unselect option: Kiwi"></button>
                        </span>
                        <span class="fd-token" role="button" tabindex="0">
                            <span class="fd-token__text">
                                Banana
                            </span>
                            <button class="fd-token__close" aria-label="unselect option: Banana"></button>
                        </span>
                        <input class="fd-input fd-input-group__input fd-tokenizer__input" aria-label="multi input sample as form item"/>
                    </div>
                </div>
                <span class="fd-input-group__addon fd-input-group__addon--button">
                    <button class="fd-input-group__button fd-button fd-button--transparent" aria-controls="F4GcX348a" aria-expanded="false" aria-label="down arrow" aria-haspopup="true">
                        <i class="sap-icon--navigation-down-arrow"></i>
                    </button>
                </span>
            </div>
        </div>
        <div class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--dropdown fd-popover__body--dropdown-fill" aria-hidden="false" id="F4GcX348a">
        <div class="fd-popover__wrapper">
            <ul class="fd-list fd-list--multi-input"  role="listbox" aria-multiselectable="true" aria-label="Fruits">
                <li class="fd-list__item is-selected" role="option" tabindex="0">
                    <input type="checkbox" checked class="fd-checkbox fd-list__input" id="Ai4ez611" tabindex="-1">
                    <label class="fd-checkbox__label fd-list__label" for="Ai4ez611">
                        <span class="fd-checkbox__text fd-list__title">
                            Apple
                        </span>
                    </label>
                </li>
                <li class="fd-list__item is-selected" role="option" tabindex="0">
                    <input type="checkbox" checked class="fd-checkbox fd-list__input" id="Ai4ez612" tabindex="-1">
                    <label class="fd-checkbox__label fd-list__label" for="Ai4ez612">
                        <span class="fd-checkbox__text fd-list__title">
                            Orange
                        </span>
                    </label>
                </li>
                <li class="fd-list__item is-selected" role="option" tabindex="0">
                    <input type="checkbox" checked class="fd-checkbox fd-list__input" id="Ai4ez614" tabindex="-1">
                    <label class="fd-checkbox__label fd-list__label" for="Ai4ez614">
                        <span class="fd-checkbox__text fd-list__title">
                            Banana
                        </span>
                    </label>
                </li>
                <li class="fd-list__item is-selected" role="option" tabindex="0">
                    <input type="checkbox" checked class="fd-checkbox fd-list__input" id="Ai4ez615" tabindex="-1">
                    <label class="fd-checkbox__label fd-list__label" for="Ai4ez615">
                        <span class="fd-checkbox__text fd-list__title">
                            Kiwi
                        </span>
                    </label>
                </li>
                <li class="fd-list__item" role="option" tabindex="0">
                    <input type="checkbox" class="fd-checkbox fd-list__input" id="Ai4ez617" tabindex="-1">
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
        storyDescription: `
Note that the popover body width is restricted to a max of 37.5rem to avoid readability issues in large-width popovers.
Applications are free to override this in their custom styles if needed and own any readability issues arising from this override.
`
    }
};

export const grouping = () => `<div style="height: 400px;">
    <div class="fd-popover">
        <div class="fd-popover__control" role="combobox" aria-controls="F4H8X34a" aria-expanded="true" aria-haspopup="true">
            <div class="fd-input-group fd-input-group--control"  tabindex="0">
                <div class="fd-tokenizer">
                    <div class="fd-tokenizer__inner">
                        <span class="fd-token" role="button" tabindex="0">
                            <span class="fd-token__text">
                                Apple
                            </span>
                            <button class="fd-token__close" aria-label="unselect option: Apple"></button>
                        </span>
                        <span class="fd-token" role="button" tabindex="0">
                            <span class="fd-token__text">
                                Orange
                            </span>
                            <button class="fd-token__close" aria-label="unselect option: Orange"></button>
                        </span>
                        <span class="fd-token" role="button" tabindex="0">
                            <span class="fd-token__text">
                                Kiwi
                            </span>
                            <button class="fd-token__close" aria-label="unselect option: Kiwi"></button>
                        </span>
                        <span class="fd-tokenizer__indicator">2 more</span> 
                        <input class="fd-input fd-input-group__input fd-tokenizer__input" aria-label="multi input sample as group item" />
                    </div>
                </div>
                <span class="fd-input-group__addon fd-input-group__addon--button">
                    <button class="fd-input-group__button fd-button fd-button--transparent" aria-label="down arrow" aria-controls="F4H8X34a" aria-expanded="false" aria-haspopup="true">
                        <i class="sap-icon--navigation-down-arrow"></i>
                    </button>
                </span>
            </div>
        </div>
        <div class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--dropdown fd-popover__body--dropdown-fill" aria-hidden="false" id="F4H8X34a">
        <div class="fd-popover__wrapper">
           <label class="fd-list__group-header" id="Fruits">
                Fruits
            </label>
            <ul class="fd-list fd-list--multi-input" role="listbox" aria-multiselectable="true" aria-label="Fruits">
                <li class="fd-list__item is-selected" role="option" tabindex="0">
                    <input type="checkbox" checked class="fd-checkbox fd-list__input" id="Ai1ez651" tabindex="-1">
                    <label class="fd-checkbox__label fd-list__label" for="Ai1ez651">
                        <span class="fd-checkbox__text fd-list__title">
                            Apple
                        </span>
                    </label>
                </li>
                <li class="fd-list__item is-selected" role="option" tabindex="0">
                    <input type="checkbox" checked class="fd-checkbox fd-list__input" id="Ai2ez652" tabindex="-1">
                    <label class="fd-checkbox__label fd-list__label" for="Ai2ez652">
                        <span class="fd-checkbox__text fd-list__title">
                            Orange
                        </span>
                    </label>
                </li>
                <li class="fd-list__item is-selected" role="option" tabindex="0">
                    <input type="checkbox" checked class="fd-checkbox fd-list__input" id="Ai3ez654" tabindex="-1">
                    <label class="fd-checkbox__label fd-list__label" for="Ai3ez654">
                        <span class="fd-checkbox__text fd-list__title">
                            Kiwi
                        </span>
                    </label>
                </li>
                <li class="fd-list__item" role="option" tabindex="0">
                    <input type="checkbox" class="fd-checkbox fd-list__input" id="Ai8ez655" tabindex="-1">
                    <label class="fd-checkbox__label fd-list__label" for="Ai8ez655">
                        <span class="fd-checkbox__text fd-list__title">
                            Banana
                        </span>
                    </label>
                </li>
                <li class="fd-list__item" role="option" tabindex="0">
                    <input type="checkbox" class="fd-checkbox fd-list__input" id="AiHez657" tabindex="-1">
                    <label class="fd-checkbox__label fd-list__label" for="AiHez657">
                        <span class="fd-checkbox__text fd-list__title">
                            Lemon
                        </span>
                    </label>
                </li>
            </ul>
            <label class="fd-list__group-header" id="selectMultipleVegsLabel">
                Vegetables
            </label>
            <ul class="fd-list fd-list--multi-input" role="listbox" aria-multiselectable="true" aria-label="selectMultipleVegsLabel">
                <li class="fd-list__item is-selected" role="option" tabindex="0">
                    <input type="checkbox" checked class="fd-checkbox fd-list__input" id="Ai8ez689" tabindex="-1">
                    <label class="fd-checkbox__label fd-list__label" for="Ai8ez689">
                        <span class="fd-checkbox__text fd-list__title">
                            Onion
                        </span>
                    </label>
                </li>
                <li class="fd-list__item is-selected" role="option" tabindex="0">
                    <input type="checkbox" checked class="fd-checkbox fd-list__input" id="Ai8ez685" tabindex="-1">
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
        storyDescription:
            'In cases where the list items need to be categorized into groups, it is possible to add headers for each category as seen below.'
    }
};

export const matchPopoverBodySize = () => `<div style="height: 300px;">
    <div class="fd-popover">
        <div class="fd-popover__control" role="combobox" aria-controls="F4HGFHX34a" aria-expanded="true" aria-haspopup="true">
            <div class="fd-input-group fd-input-group--control" tabindex="0">
                <div class="fd-tokenizer">
                    <div class="fd-tokenizer__inner">
                        <span class="fd-token" role="button" tabindex="0">
                            <span class="fd-token__text">
                                Apple
                            </span>
                            <button class="fd-token__close" aria-label="unselect option: Apple"></button>
                        </span>
                        <span class="fd-token" role="button" tabindex="0">
                            <span class="fd-token__text">
                                Orange
                            </span>
                            <button class="fd-token__close" aria-label="unselect option: Orange"></button>
                        </span>
                        <span class="fd-token" role="button" tabindex="0">
                            <span class="fd-token__text">
                                Kiwi
                            </span>
                            <button class="fd-token__close" aria-label="unselect option: Kiwi"></button>
                        </span>
                        <span class="fd-tokenizer__indicator">2 more</span> 
                        <input class="fd-input fd-input-group__input fd-tokenizer__input"  aria-label="multi input sample popover size body"/>
                    </div>
                </div>
                <span class="fd-input-group__addon fd-input-group__addon--button">
                    <button class="fd-input-group__button fd-button fd-button--transparent" aria-label="down arrow" aria-controls="F4HGFHX34a" aria-expanded="false" aria-haspopup="true">
                        <i class="sap-icon--navigation-down-arrow"></i>
                    </button>
                </span>
            </div>
        </div>
        <div class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--dropdown" aria-hidden="false" id="F4HGFHX34a">
        <div class="fd-popover__wrapper">
            <ul class="fd-list fd-list--multi-input"  role="listbox" aria-multiselectable="true" aria-label="fruits">
                <li class="fd-list__item is-selected" role="option" tabindex="0">
                    <input type="checkbox" checked class="fd-checkbox fd-list__input" id="Ai124z651" tabindex="-1">
                    <label class="fd-checkbox__label fd-list__label" for="Ai124z651">
                        <span class="fd-checkbox__text fd-list__title">
                            Apple
                        </span>
                    </label>
                </li>
                <li class="fd-list__item is-selected" role="option" tabindex="0">
                    <input type="checkbox" checked class="fd-checkbox fd-list__input" id="Ai134z651" tabindex="-1">
                    <label class="fd-checkbox__label fd-list__label" for="Ai134z651">
                        <span class="fd-checkbox__text fd-list__title">
                            Orange
                        </span>
                    </label>
                </li>
                <li class="fd-list__item is-selected" role="option" tabindex="0">
                    <input type="checkbox" checked class="fd-checkbox fd-list__input" id="Ai1366z651" tabindex="-1">
                    <label class="fd-checkbox__label fd-list__label" for="Ai1366z651">
                        <span class="fd-checkbox__text fd-list__title">
                            Kiwi
                        </span>
                    </label>
                </li>
                <li class="fd-list__item" role="option" tabindex="0">
                    <input type="checkbox" class="fd-checkbox fd-list__input" id="Ai136gf51" tabindex="-1">
                    <label class="fd-checkbox__label fd-list__label" for="Ai136gf51">
                        <span class=" fd-checkbox__text fd-list__title">
                            Banana
                        </span>
                    </label>
                </li>
                <li class="fd-list__item" role="option" tabindex="0">
                    <input type="checkbox" class="fd-checkbox fd-list__input" id="Ai136ggfd" tabindex="-1">
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
        storyDescription: `
The default length size of the popover body is often different from the text length. 
The body length can be adjusted to match the text length by adding the \`fd-popover__body--dropdown-fill\` class to the \`fd-popover__body\`.

This class has been added to all the \`Multi ComboBox\` examples above. 
In the example you can see how the \`Multi ComboBox\` component looks without the \`fd-popover__body--dropdown-fill\` modifier.
`
    }
};

export const readOnlyAndDisabled = () => `<div class="fd-container">
	<div class="fd-row">
		<div class="fd-col fd-col--6">
			<div class="fd-popover">
				<div class="fd-popover__control" role="combobox" aria-controls="F4GcX3X8a" aria-expanded="false" aria-haspopup="false">
					<div class="fd-input-group fd-input-group--control" readonly aria-readonly="true"  tabindex="0">
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
										<div class="fd-popover__control fd-input-group__control" aria-controls="F4GF5348a" aria-expanded="false" aria-haspopup="true" aria-label="multi combobox">
											<span class="fd-tokenizer__indicator" role="button">
												4 more
											</span>
										</div>
										<div class="fd-popover__body" aria-hidden="true" id="F4GF5348a">
										</div>
									</div>
								</span>
								<input class="fd-input fd-input-group__input fd-tokenizer__input" readonly aria-readonly="true"  aria-label="multi input readonly or disabled" />
							</div>
						</div>
					</div>
				</div>
			</div>
			</div>
			<div class="fd-col fd-col--6">
				<div class="fd-popover">
					<div class="fd-popover__control" role="combobox" aria-expanded="false" aria-haspopup="true" aria-disabled="true" disabled>
						<div class="fd-input-group fd-input-group--control"  aria-disabled="true" disabled  tabindex="0">
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
											<div class="fd-popover__control fd-input-group__control" aria-controls="F4GcX34Xa" aria-expanded="false" aria-haspopup="true" aria-label="multi combobox">
												<span class="fd-tokenizer__indicator" role="button>
													4 more
												</span>
											</div>
											<div class="fd-popover__body" aria-hidden="true" id="F4GcX34Xa">
											</div>
										</div>
									</span>
									<input class="fd-input fd-input-group__input fd-tokenizer__input"  aria-label="multi input read only or disabled"/>
								</div>
							</div>
							<span class="fd-input-group__addon fd-input-group__addon--button">
								<button tabindex="-1" class="fd-input-group__button fd-button fd-button--transparent" aria-label="down arrow">
									<i class="sap-icon--navigation-down-arrow"></i>
								</button>
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
`;

readOnlyAndDisabled.parameters = {
    docs: {
        storyDescription: `
To make the \`Multi ComboBox\` component read-only, the readonly attribute needs to be added to the \`fd-nput-group\` element.
This can also be done by using the \`.is-readonly\` class or \`aria-readonly="true"\` attribute.

To disable a \`Multi ComboBox\` component, the disabled attribute needs to be added to the \`fd-popover__control\` and the \`fd-input__control\` elements.
The disabled state can also be achieved by adding the \`.is-disabled\` class or the \`aria-disabled="true"\` attribute.
`
    }
};

export const semantic = () => `<div style="height: 300px;">
<div class="fd-popover">
    <div class="fd-popover__control fd-input-group__control" role="combobox" aria-controls="F4GcKJH8a" aria-expanded="true" aria-haspopup="true" aria-label="multi combobox">
        <div class="fd-input-group fd-input-group--control is-success"  tabindex="0">
            <div class="fd-tokenizer">
                 <div class="fd-tokenizer__inner">
                     <span class="fd-token" role="button" tabindex="0">
                         <span class="fd-token__text">
                             Apple
                         </span>
                         <button class="fd-token__close" aria-label="unselect option: Apple"></button>
                     </span>
                     <span class="fd-token" role="button" tabindex="0">
                         <span class="fd-token__text">
                             Orange
                         </span>
                         <button class="fd-token__close" aria-label="unselect option: Orange"></button>
                     </span>
                     <span class="fd-token" role="button" tabindex="0">
                         <span class="fd-token__text">
                             Kiwi
                         </span>
                         <button class="fd-token__close" aria-label="unselect option: Kiwi"></button>
                     </span>
                     <span class="fd-tokenizer__indicator">4 more</span> 
                     <input class="fd-input fd-input-group__input fd-tokenizer__input"  aria-label="multi input semantic" />
                 </div>
            </div>
            <span class="fd-input-group__addon fd-input-group__addon--button">
                <button class="fd-input-group__button fd-button fd-button--transparent" aria-label="down arrow" aria-controls="F4GcKJH8a" aria-expanded="false" aria-haspopup="true">
                    <i class="sap-icon--navigation-down-arrow"></i>
                </button>
            </span>
        </div>
    </div>
    <div class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--dropdown fd-popover__body--dropdown-fill" aria-hidden="false" id="F4GcKJH8a">
      <div class="fd-popover__wrapper">
        <ul class="fd-list fd-list--multi-input fd-list--has-message"  role="listbox" aria-multiselectable="true" aria-label="Fruits">
            <li class="fd-list__message fd-list__message--success" role="option">Success Message</li>
             <li class="fd-list__item is-selected" role="option" tabindex="0">
                <input type="checkbox" checked class="fd-checkbox fd-list__input" id="AGi4ez611" tabindex="-1">
                <label class="fd-checkbox__label fd-list__label" for="AGi4ez611">
                    <span class="fd-checkbox__text fd-list__title">
                        Apple
                    </span>
                </label>
            </li>
             <li class="fd-list__item is-selected" role="option">
                <input type="checkbox" checked class="fd-checkbox fd-list__input" id="Ai4Fez612" tabindex="-1">
                <label class="fd-checkbox__label fd-list__label" for="Ai4Fez612">
                    <span class="fd-checkbox__text fd-list__title">Orange</span>
                </label>
            </li>
             <li class="fd-list__item is-selected" role="option">
                <input type="checkbox" checked class="fd-checkbox fd-list__input" id="Ai4eGz614" tabindex="-1">
                <label class="fd-checkbox__label fd-list__label" for="Ai4eGz614">
                    <span class="fd-checkbox__text fd-list__title">Kiwi</span>
                </label>
            </li>
             <li class="fd-list__item" role="option">
                <input type="checkbox" class="fd-checkbox fd-list__input" id="Ai4egh614" tabindex="-1">
                <label class="fd-checkbox__label fd-list__label" for="Ai4egh614">
                    <span class="fd-checkbox__text fd-list__title">Banana</span>
                </label>
            </li>
             <li class="fd-list__item" role="option">
                <input type="checkbox" class="fd-checkbox fd-list__input" id="jdFffsd3" tabindex="-1">
                <label class="fd-checkbox__label fd-list__label" for="jdFffsd3">
                    <span class="fd-checkbox__text fd-list__title">Lemon</span>
                </label>
            </li>
        </ul>
    </div>
  </div>
</div>
</div>
`;

semantic.parameters = {
    docs: {
        storyDescription: `
For a complete list of states supported by the \`Multi ComboBox\` component, please see the documentation for the form or select components.

The semantic mode can be used to modify the combobox component by adding one of 
\`is-error\` | \`is-success\` | \`is-warning\` | \`is-information\` classes into \`fd-input-group\` element. 
To add text in the \`body\` of the component, simply include your text in the \`fd-list__message\` under the \`ul\` element.`
    }
};

export const mobileMode = () => `<div class="fd-dialog fd-dialog-docs-static fd-select-docs-max-height fd-dialog--active" id="select-dialog-example">
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
                    <div class="fd-input-group" tabindex="0">
                        <div class="fd-tokenizer">
                             <div class="fd-tokenizer__inner">
                                 <span class="fd-token" role="button" tabindex="0">
                                     <span class="fd-token__text">
                                         Apple
                                     </span>
                                     <button class="fd-token__close" aria-label="unselect option: Apple"></button>
                                 </span>
                                 <span class="fd-token" role="button" tabindex="0">
                                     <span class="fd-token__text">
                                         Orange
                                     </span>
                                     <button class="fd-token__close" aria-label="unselect option: Orange"></button>
                                 </span>
                                 <span class="fd-token" role="button" tabindex="0">
                                     <span class="fd-token__text">
                                         Kiwi
                                     </span>
                                     <button class="fd-token__close" aria-label="unselect option: Kiwi"></button>
                                 </span>
                                 <span class="fd-tokenizer__indicator">4 more</span> 
                                 <input class="fd-input fd-input-group__input fd-tokenizer__input"  aria-label="multi input mobile mode" />
                             </div>
                         </div>
                        <span class="fd-input-group__addon fd-input-group__addon--button">
                            <button class="fd-input-group__button fd-button fd-button--transparent" aria-label="down arrow">
                                <i class="sap-icon--navigation-down-arrow"></i>
                            </button>
                        </span>
                    </div>
                </div>
                <div class="fd-bar__element">
                    <button class="fd-button fd-button--transparent" aria-label="multi combobox mobilmode button">
                        <i class="sap-icon--multiselect-all"></i>
                    </button>
                </div>
            </div>
        </div>
        <div class="fd-dialog__body fd-dialog__body--no-vertical-padding">
             <ul class="fd-list fd-list--multi-input fd-list--has-message"  role="listbox" aria-multiselectable="true" aria-label="Fruits">
                <li class="fd-list__message fd-list__message--success" role="option">Success Message</li>
                <li class="fd-list__item is-selected" role="option" tabindex="0">
                     <input type="checkbox" checked class="fd-checkbox  fd-list__input" id="GGi4ez641" tabindex="-1">
                     <label class="fd-checkbox__label fd-list__label" for="GGi4ez641">
                         <span class="fd-checkbox__text fd-list__title">
                             Apple
                         </span>
                     </label>
                 </li>
                  <li class="fd-list__item is-selected" role="option" tabindex="0">
                     <input type="checkbox" checked class="fd-checkbox  fd-list__input" id="Ai4FGFG612" tabindex="-1">
                     <label class="fd-checkbox__label fd-list__label" for="Ai4FGFG612">
                         <span class="fd-checkbox__text fd-list__title">Orange</span>
                     </label>
                 </li>
                  <li class="fd-list__item is-selected" role="option" tabindex="0">
                     <input type="checkbox" checked class="fd-checkbox  fd-list__input" id="Ai4e88614" tabindex="-1">
                     <label class="fd-checkbox__label fd-list__label" for="Ai4e88614">
                         <span class="fd-checkbox__text fd-list__title">Kiwi</span>
                     </label>
                 </li>
                  <li class="fd-list__item" role="option" tabindex="0">
                     <input type="checkbox" class="fd-checkbox  fd-list__input" id="Ai4egh6024" tabindex="-1">
                     <label class="fd-checkbox__label fd-list__label" for="Ai4egh6024">
                         <span class="fd-checkbox__text fd-list__title">Banana</span>
                     </label>
                 </li>
                  <li class="fd-list__item" role="option" tabindex="0">
                     <input type="checkbox" class="fd-checkbox  fd-list__input" id="7gJHdsad" tabindex="-1">
                     <label class="fd-checkbox__label fd-list__label" for="7gJHdsad">
                         <span class="fd-checkbox__text fd-list__title">Lemon</span>
                     </label>
                 </li>
             </ul>
        </div>
       <footer class="fd-dialog__footer fd-bar fd-bar--cozy fd-bar--footer">
            <div class="fd-bar__right">
                <div class="fd-bar__element">
                    <button class="fd-button fd-button--emphasized">OK</button>
                </div>
            </div>
        </footer>
    </div>
</div>
`;

mobileMode.parameters = {
    docs: {
        storyDescription: `
For mobile devices, or tablets, Multi ComboBox component should be displayed in fullscreen mode.
So instead of using popover and dropdown, it should be wrapped in \`dialog\` and \`bar\` components.`
    }
};

export const filtering = () => ` <div style="height: 250px;">
<div class="fd-popover">
    <div class="fd-popover__control" role="combobox" aria-controls="F4GcX348aB" aria-expanded="true" aria-haspopup="true">
        <div class="fd-input-group fd-input-group--control" tabindex="0">
            <div class="fd-tokenizer">
                <div class="fd-tokenizer__inner">
                    <span class="fd-token" role="button" tabindex="0">
                        <span class="fd-token__text">
                            Apple
                        </span>
                        <button class="fd-token__close" aria-label="unselect option: Apple"></button>
                    </span>
                    <span class="fd-token" role="button" tabindex="0">
                        <span class="fd-token__text">
                            Orange
                        </span>
                        <button class="fd-token__close" aria-label="unselect option: Orange"></button>
                    </span>
                    <span class="fd-token" role="button" tabindex="0">
                        <span class="fd-token__text">
                            Banana
                        </span>
                        <button class="fd-token__close" aria-label="unselect option: Banana"></button>
                    </span>
                    <input class="fd-input fd-input-group__input fd-tokenizer__input" value="A"  aria-label="multi input paramnetric"/>
                </div>
            </div>
            <span class="fd-input-group__addon fd-input-group__addon--button">
                <button class="fd-input-group__button fd-button fd-button--transparent" aria-label="down arrow" aria-controls="F4GcX348aB" aria-expanded="false" aria-haspopup="true">
                    <i class="sap-icon--navigation-down-arrow"></i>
                </button>
            </span>
        </div>
    </div>
    <div class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--dropdown fd-popover__body--dropdown-fill" aria-hidden="false" id="F4GcX348aB">
        <ul class="fd-list fd-list--multi-input"  role="listbox"  aria-multiselectable="true" aria-label="Fruits">
             <li class="fd-list__item is-selected" role="option" tabindex="0">
                <input type="checkbox" checked class="fd-checkbox fd-list__input" id="Ai4ez611A" tabindex="-1">
                <label class="fd-checkbox__label fd-list__label" for="Ai4ez611A">
                    <span class="fd-checkbox__text fd-list__title">
                        <b>A</b>pple
                    </span>
                </label>
            </li>
             <li class="fd-list__item is-selected" role="option" tabindex="0">
                <input type="checkbox" checked class="fd-checkbox fd-list__input" id="Ai4ez612A" tabindex="-1">
                <label class="fd-checkbox__label fd-list__label" for="Ai4ez612A">
                    <span class="fd-list__title">
                        Or<b>a</b>nge
                    </span>
                </label>
            </li>
             <li class="fd-list__item is-selected" role="option" tabindex="0">
                <input type="checkbox" checked class="fd-checkbox fd-list__input" id="Ai4ez614A" tabindex="-1">
                <label class="fd-checkbox__label fd-list__label" for="Ai4ez614A">
                    <span class="fd-list__title">
                        B<b>a</b>nana
                    </span>
                </label>
            </li>
        </ul>
        <span class="fd-list__footer fd-list__footer--right">
        <a class="fd-link" role="button" >Show All</a>
        </span>
    </div
</div>
</div>
`;

filtering.parameters = {
    docs: {
        storyDescription: `
The user can filter selectable options by typing in the input. A button with the text "Show All" should be displayed, that when clicked, will clear the text in the input and show all options in the list.`
    }
};

export const twoColumnComboBox = () => ` <div style="height: 250px;">
<div class="fd-popover">
    <div class="fd-popover__control" role="combobox" aria-controls="F4GcX348aB" aria-expanded="true" aria-haspopup="true">
        <div class="fd-input-group fd-input-group--control" tabindex="0">
            <div class="fd-tokenizer">
                <div class="fd-tokenizer__inner">
                    <span class="fd-token" role="button" tabindex="0">
                        <span class="fd-token__text">
                            Apple
                        </span>
                        <button class="fd-token__close" aria-label="unselect option: Apple"></button>
                    </span>
                    <span class="fd-token" role="button" tabindex="0">
                        <span class="fd-token__text">
                            Orange
                        </span>
                        <button class="fd-token__close" aria-label="unselect option: Orange"></button>
                    </span>
                    <span class="fd-token" role="button" tabindex="0">
                        <span class="fd-token__text">
                            Banana
                        </span>
                        <button class="fd-token__close" aria-label="unselect option: Banana"></button>
                    </span>
                    <input class="fd-input fd-input-group__input fd-tokenizer__input" value="A"  aria-label="multi input with two column" />
                </div>
            </div>
            <span class="fd-input-group__addon fd-input-group__addon--button">
                <button class="fd-input-group__button fd-button fd-button--transparent" aria-label="down arrow" aria-controls="F4GcX348aB" aria-expanded="false" aria-haspopup="true">
                    <i class="sap-icon--navigation-down-arrow"></i>
                </button>
            </span>
        </div>
    </div>
    <div class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--dropdown fd-popover__body--dropdown-fill" aria-hidden="false" id="F4GcX348aB">
        <ul class="fd-list fd-list--multi-input"  role="listbox" aria-multiselectable="true" aria-label="Fruits">
             <li class="fd-list__item is-selected" role="option" tabindex="0">
                <input type="checkbox" checked class="fd-checkbox fd-list__input" id="Ai4ez611Ay" tabindex="-1">
                <label class="fd-checkbox__label fd-list__label" for="Ai4ez611Ay">
                    <span class="fd-checkbox__text fd-list__title">
                        <b>A</b>pple
                    </span>
					 <span class="fd-list__secondary">A1</span>
                </label>
            </li>
			<li class="fd-list__item" role="option" tabindex="0">
                <input type="checkbox" class="fd-checkbox fd-list__input" id="Ai4ez611Aq" tabindex="-1">
                <label class="fd-checkbox__label fd-list__label" for="Ai4ez611Aq">
                    <span class="fd-checkbox__text fd-list__title">
                        <b>A</b>pple
                    </span>
					 <span class="fd-list__secondary">A2</span>
                </label>
            </li>
             <li class="fd-list__item is-selected" role="option" tabindex="0">
                <input type="checkbox" checked class="fd-checkbox fd-list__input" id="Ai4ez612A" tabindex="-1">
                <label class="fd-checkbox__label fd-list__label" for="Ai4ez612A">
                    <span class="fd-list__title">
                        Or<b>a</b>nge
                    </span>
					 <span class="fd-list__secondary">A2</span>
                </label>
            </li>
             <li class="fd-list__item is-selected" role="option" tabindex="0">
                <input type="checkbox" checked class="fd-checkbox fd-list__input" id="Ai4ez614A" tabindex="-1">
                <label class="fd-checkbox__label fd-list__label" for="Ai4ez614A">
                    <span class="fd-list__title">
                        B<b>a</b>nana
                    </span>
					 <span class="fd-list__secondary">A3</span>
                </label>
            </li>
			<li class="fd-list__item" role="option" tabindex="0">
                <input type="checkbox" class="fd-checkbox fd-list__input" id="Ai4ez611Av" tabindex="-1">
                <label class="fd-checkbox__label fd-list__label" for="Ai4ez611Av">
                    <span class="fd-checkbox__text fd-list__title">
                        Or<b>a</b>nge
                    </span>
					 <span class="fd-list__secondary">A3</span>
                </label>
            </li>
        </ul>
        <span class="fd-list__footer fd-list__footer--right">
        <a class="fd-link" role="button" >Show All</a>
        </span>
    </div
</div>
</div>
`;

twoColumnComboBox.parameters = {
    docs: {
        storyDescription: `
The user can filter selectable having 2 options by typing in the input. A button with the text "Show All" should be displayed, that when clicked, will clear the text in the input and show all options in the list.`
    }
};
