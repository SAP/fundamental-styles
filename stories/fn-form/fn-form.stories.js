export default {
    title: 'Experimental/Form',
    parameters: {
        description: `**Modifier classes for forms:**

| Style&nbsp;&nbsp;&nbsp;&nbsp;      | Modifier class                |
| ---------------------------------- | ----------------------------- |
| Horizontally aligned label and input &nbsp;&nbsp;&nbsp;&nbsp;| \`fn-form--horizontal\`|
| Required form label&nbsp;&nbsp;&nbsp;&nbsp;   | \`fn-form__label--required\`    |
| Required form label with the asterisk before&nbsp;&nbsp;&nbsp;&nbsp;   | \`fn-form__label--required-before\`      |

<br><br>

        `,
        components: ['fn-form', 'fn-input', 'fn-nested-button', 'fn-radio', 'fn-checkbox', 'fn-step-input', 'fn-select', 'fn-combobox', 'fn-multi-input', 'icon']
    }
};

const localStyles = `
<style>

</style>
`;

export const Primary = () => `${localStyles}
    <div class="fn-form" style="max-width: 25rem;">
        <div class="fn-form-item">
            <span class="fn-form__label">Form Input:</span>
            <div class="fn-input">
                <input class="fn-input__text-field" type="text" id="field-1" placeholder="Placeholder" />
                <div class="fn-input__border"></div>
            </div>
        </div>
        <div class="fn-form-item">
            <span class="fn-form__label fn-form__label--required">Required Input:</span>
            <div class="fn-input">
                <input class="fn-input__text-field" type="text" id="field-1" placeholder="Placeholder" />
                <div class="fn-input__border"></div>
            </div>        
        </div>
        <div class="fn-form-item">
            <span class="fn-form__label fn-form__label--required-before">Required Before:</span>
            <div class="fn-input">
                <input class="fn-input__text-field" type="text" id="field-1" placeholder="Placeholder" />
                <div class="fn-input__border"></div>
            </div>        
        </div>
        <div class="fn-form-item fn-form-item--horizontal">
            <span class="fn-form__label">Horizontal:</span>
            <div class="fn-input">
                <input class="fn-input__text-field" type="text" id="field-1" placeholder="Placeholder" />
                <div class="fn-input__border"></div>
            </div>        
        </div>
    </div>
`;

Primary.storyName = 'Input Form Items';

Primary.parameters = {
    docs: {
        description: {
            story: 'By default, form items will have their labels placed above the form input. This can be changed to a horizontal layout with the modifier class `fn-form__label--required`.<br/>Add the `fn-form__label--required` modifier to the form label for required forms. To place the required asterisk before the label text, use `fn-form__label--required-before`.'
        }
    }
};

export const Multi = () => `${localStyles}
    <div class="fn-form" style="max-width: 25rem;">
        <div class="fn-form-item">
            <span class="fn-form__label">Form Multi-Input:</span>
            <div class="fn-input fn-input--multi-input" tabindex="0">
                <input class="fn-input__text-field" type="text" id="field-1" placeholder="Placeholder" tabindex="-1" />
                <div class="fn-input__border"></div>
                <button class="fn-nested-button fn-nested-button--absolute-right" aria-label="nested button" tabindex="-1">
                    <span class="sap-icon sap-icon--value-help"></span>
                </button>
            </div>
        </div>
        <div class="fn-form-item fn-form-item--horizontal">
            <span class="fn-form__label">Horizontal:</span>
            <div class="fn-input fn-input--multi-input" tabindex="0">
                <input class="fn-input__text-field" type="text" id="field-1" placeholder="Placeholder" tabindex="-1" />
                <div class="fn-input__border"></div>
                <button class="fn-nested-button fn-nested-button--absolute-right" aria-label="nested button" tabindex="-1">
                    <span class="sap-icon sap-icon--value-help"></span>
                </button>
            </div>
        </div>
    </div>
`;

Multi.storyName = 'Multi-Input Form Item';

Multi.parameters = {
    docs: {
        description: {
            story: ''
        }
    }
};

export const Step = () => `${localStyles}
    <div class="fn-form" style="max-width: 25rem;">
        <div class="fn-form-item">
            <span class="fn-form__label">Form Step-Input:</span>
            <div class="fn-input fn-step-input" tabindex="0">
                <button class="fn-nested-button fn-nested-button--absolute-left" aria-label="subtract button" tabindex="-1">
                    <span class="sap-icon sap-icon--less"></span>
                </button>
                <input class="fn-input__text-field fn-step-input__text-field" type="number" id="field-1" value="42" tabindex="-1" />
                <div class="fn-input__border"></div>
                <button class="fn-nested-button fn-nested-button--absolute-right" aria-label="add button" tabindex="-1">
                    <span class="sap-icon sap-icon--add"></span>
                </button>
            </div>
        </div>
        <div class="fn-form-item fn-form-item--horizontal">
            <span class="fn-form__label">Horizontal Step-Input:</span>
            <div class="fn-input fn-step-input" tabindex="0">
                <button class="fn-nested-button fn-nested-button--absolute-left" aria-label="subtract button" tabindex="-1">
                    <span class="sap-icon sap-icon--less"></span>
                </button>
                <input class="fn-input__text-field fn-step-input__text-field" type="number" id="field-1" value="42" tabindex="-1" />
                <div class="fn-input__border"></div>
                <button class="fn-nested-button fn-nested-button--absolute-right" aria-label="add button" tabindex="-1">
                    <span class="sap-icon sap-icon--add"></span>
                </button>
            </div>
        </div>
    </div>
`;

Step.storyName = 'Step-Input Form Item';

Step.parameters = {
    docs: {
        description: {
            story: ''
        }
    }
};

export const CheckboxGroup = () => `${localStyles}
    <div class="fn-form" style="max-width: 25rem;">
        <div class="fn-form-item">
            <span class="fn-form__label fn-form__label">Checkbox Form Group:</span>
            <div class="fn-form__group">
                <div class="fn-checkbox" tabindex="0">
                    <input class="fn-checkbox__input" type="checkbox" tabindex="-1" aria-label="checkbox">
                    <span class="fn-checkbox__checkmark"></span>
                    <span class="fn-checkbox__label">Checkbox Option 1</span>
                </div>
                <div class="fn-checkbox" tabindex="0">
                    <input class="fn-checkbox__input" type="checkbox" tabindex="-1" aria-label="checkbox">
                    <span class="fn-checkbox__checkmark"></span>
                    <span class="fn-checkbox__label">Checkbox Option 2</span>
                </div>
                <div class="fn-checkbox" tabindex="0">
                    <input class="fn-checkbox__input" type="checkbox" tabindex="-1" aria-label="checkbox">
                    <span class="fn-checkbox__checkmark"></span>
                    <span class="fn-checkbox__label">Checkbox Option 3</span>
                </div>
            </div>
        </div>
        <div class="fn-form-item">
            <span class="fn-form__label fn-form__label--required">Checkbox Form Group:</span>
            <div class="fn-form__group">
                <div class="fn-checkbox" tabindex="0">
                    <input class="fn-checkbox__input" type="checkbox" tabindex="-1" aria-label="checkbox">
                    <span class="fn-checkbox__checkmark"></span>
                    <span class="fn-checkbox__label">Checkbox Option 1</span>
                </div>
                <div class="fn-checkbox" tabindex="0">
                    <input class="fn-checkbox__input" type="checkbox" tabindex="-1" aria-label="checkbox">
                    <span class="fn-checkbox__checkmark"></span>
                    <span class="fn-checkbox__label">Checkbox Option 2</span>
                </div>
                <div class="fn-checkbox" tabindex="0">
                    <input class="fn-checkbox__input" type="checkbox" tabindex="-1" aria-label="checkbox">
                    <span class="fn-checkbox__checkmark"></span>
                    <span class="fn-checkbox__label">Checkbox Option 3</span>
                </div>
            </div>
        </div>
        <div class="fn-form-item">
            <span class="fn-form__label fn-form__label--required-before">Checkbox Form Group:</span>
            <div class="fn-form__group">
                <div class="fn-checkbox" tabindex="0">
                    <input class="fn-checkbox__input" type="checkbox" tabindex="-1" aria-label="checkbox">
                    <span class="fn-checkbox__checkmark"></span>
                    <span class="fn-checkbox__label">Checkbox Option 1</span>
                </div>
                <div class="fn-checkbox" tabindex="0">
                    <input class="fn-checkbox__input" type="checkbox" tabindex="-1" aria-label="checkbox">
                    <span class="fn-checkbox__checkmark"></span>
                    <span class="fn-checkbox__label">Checkbox Option 2</span>
                </div>
                <div class="fn-checkbox" tabindex="0">
                    <input class="fn-checkbox__input" type="checkbox" tabindex="-1" aria-label="checkbox">
                    <span class="fn-checkbox__checkmark"></span>
                    <span class="fn-checkbox__label">Checkbox Option 3</span>
                </div>
            </div>
        </div>
        <div class="fn-form-item fn-form-item--horizontal has-group">
            <span class="fn-form__label fn-form__label">Horizontal Checkbox Form Group:</span>
            <div class="fn-form__group">
                <div class="fn-checkbox" tabindex="0">
                    <input class="fn-checkbox__input" type="checkbox" tabindex="-1" aria-label="checkbox">
                    <span class="fn-checkbox__checkmark"></span>
                    <span class="fn-checkbox__label">Checkbox Option 1</span>
                </div>
                <div class="fn-checkbox" tabindex="0">
                    <input class="fn-checkbox__input" type="checkbox" tabindex="-1" aria-label="checkbox">
                    <span class="fn-checkbox__checkmark"></span>
                    <span class="fn-checkbox__label">Checkbox Option 2</span>
                </div>
                <div class="fn-checkbox" tabindex="0">
                    <input class="fn-checkbox__input" type="checkbox" tabindex="-1" aria-label="checkbox">
                    <span class="fn-checkbox__checkmark"></span>
                    <span class="fn-checkbox__label">Checkbox Option 3</span>
                </div>
            </div>
        </div>
        <div class="fn-form-item fn-form-item--horizontal has-group">
            <span class="fn-form__label fn-form__label--required">Horizontal Checkbox Form Group:</span>
            <div class="fn-form__group">
                <div class="fn-checkbox" tabindex="0">
                    <input class="fn-checkbox__input" type="checkbox" tabindex="-1" aria-label="checkbox">
                    <span class="fn-checkbox__checkmark"></span>
                    <span class="fn-checkbox__label">Checkbox Option 1</span>
                </div>
                <div class="fn-checkbox" tabindex="0">
                    <input class="fn-checkbox__input" type="checkbox" tabindex="-1" aria-label="checkbox">
                    <span class="fn-checkbox__checkmark"></span>
                    <span class="fn-checkbox__label">Checkbox Option 2</span>
                </div>
                <div class="fn-checkbox" tabindex="0">
                    <input class="fn-checkbox__input" type="checkbox" tabindex="-1" aria-label="checkbox">
                    <span class="fn-checkbox__checkmark"></span>
                    <span class="fn-checkbox__label">Checkbox Option 3</span>
                </div>
            </div>
        </div>
        <div class="fn-form-item fn-form-item--horizontal has-group">
            <span class="fn-form__label fn-form__label--required-before">Horizontal Checkbox Form Group:</span>
            <div class="fn-form__group">
                <div class="fn-checkbox" tabindex="0">
                    <input class="fn-checkbox__input" type="checkbox" tabindex="-1" aria-label="checkbox">
                    <span class="fn-checkbox__checkmark"></span>
                    <span class="fn-checkbox__label">Checkbox Option 1</span>
                </div>
                <div class="fn-checkbox" tabindex="0">
                    <input class="fn-checkbox__input" type="checkbox" tabindex="-1" aria-label="checkbox">
                    <span class="fn-checkbox__checkmark"></span>
                    <span class="fn-checkbox__label">Checkbox Option 2</span>
                </div>
                <div class="fn-checkbox" tabindex="0">
                    <input class="fn-checkbox__input" type="checkbox" tabindex="-1" aria-label="checkbox">
                    <span class="fn-checkbox__checkmark"></span>
                    <span class="fn-checkbox__label">Checkbox Option 3</span>
                </div>
            </div>
        </div>
    </div>
`;

CheckboxGroup.storyName = 'Checkbox Form Group';

CheckboxGroup.parameters = {
    docs: {
        description: {
            story: 'When using toggle-style inputs such as the checkbox or radio buttons, options within the same form item must be placed in a `fn-form__group` container.'
        }
    }
};

export const RadioGroup = () => `${localStyles}
    <div class="fn-form" style="max-width: 22rem;">
        <div class="fn-form-item">
            <span class="fn-form__label fn-form__label">Radio Form Group:</span>
            <div class="fn-form__group">
                <div class="fn-radio" tabindex="0">
                    <input class="fn-radio__input" type="radio" tabindex="-1" aria-label="radio">
                    <span class="fn-radio__checkmark"></span>
                    <span class="fn-radio__label">Radio Option 1</span>
                </div>
                <div class="fn-radio" tabindex="0">
                    <input class="fn-radio__input" type="radio" tabindex="-1" aria-label="radio">
                    <span class="fn-radio__checkmark"></span>
                    <span class="fn-radio__label">Radio Option 2</span>
                </div>
                <div class="fn-radio" tabindex="0">
                    <input class="fn-radio__input" type="radio" tabindex="-1" aria-label="radio">
                    <span class="fn-radio__checkmark"></span>
                    <span class="fn-radio__label">Radio Option 3</span>
                </div>
            </div>
        </div>
        <div class="fn-form-item">
            <span class="fn-form__label fn-form__label--required">Radio Form Group:</span>
            <div class="fn-form__group">
                <div class="fn-radio" tabindex="0">
                    <input class="fn-radio__input" type="radio" tabindex="-1" aria-label="radio">
                    <span class="fn-radio__checkmark"></span>
                    <span class="fn-radio__label">Radio Option 1</span>
                </div>
                <div class="fn-radio" tabindex="0">
                    <input class="fn-radio__input" type="radio" tabindex="-1" aria-label="radio">
                    <span class="fn-radio__checkmark"></span>
                    <span class="fn-radio__label">Radio Option 2</span>
                </div>
                <div class="fn-radio" tabindex="0">
                    <input class="fn-radio__input" type="radio" tabindex="-1" aria-label="radio">
                    <span class="fn-radio__checkmark"></span>
                    <span class="fn-radio__label">Radio Option 3</span>
                </div>
            </div>
        </div>
        <div class="fn-form-item">
            <span class="fn-form__label fn-form__label--required-before">Radio Form Group:</span>
            <div class="fn-form__group">
                <div class="fn-radio" tabindex="0">
                    <input class="fn-radio__input" type="radio" tabindex="-1" aria-label="radio">
                    <span class="fn-radio__checkmark"></span>
                    <span class="fn-radio__label">Radio Option 1</span>
                </div>
                <div class="fn-radio" tabindex="0">
                    <input class="fn-radio__input" type="radio" tabindex="-1" aria-label="radio">
                    <span class="fn-radio__checkmark"></span>
                    <span class="fn-radio__label">Radio Option 2</span>
                </div>
                <div class="fn-radio" tabindex="0">
                    <input class="fn-radio__input" type="radio" tabindex="-1" aria-label="radio">
                    <span class="fn-radio__checkmark"></span>
                    <span class="fn-radio__label">Radio Option 3</span>
                </div>
            </div>
        </div>
        <div class="fn-form-item fn-form-item--horizontal has-group">
            <span class="fn-form__label fn-form__label">Horizontal Radio Form Group:</span>
            <div class="fn-form__group">
                <div class="fn-radio" tabindex="0">
                    <input class="fn-radio__input" type="radio" tabindex="-1" aria-label="radio">
                    <span class="fn-radio__checkmark"></span>
                    <span class="fn-radio__label">Radio Option 1</span>
                </div>
                <div class="fn-radio" tabindex="0">
                    <input class="fn-radio__input" type="radio" tabindex="-1" aria-label="radio">
                    <span class="fn-radio__checkmark"></span>
                    <span class="fn-radio__label">Radio Option 2</span>
                </div>
                <div class="fn-radio" tabindex="0">
                    <input class="fn-radio__input" type="radio" tabindex="-1" aria-label="radio">
                    <span class="fn-radio__checkmark"></span>
                    <span class="fn-radio__label">Radio Option 3</span>
                </div>
            </div>
        </div>
        <div class="fn-form-item fn-form-item--horizontal has-group">
            <span class="fn-form__label fn-form__label--required">Horizontal Radio Form Group:</span>
            <div class="fn-form__group">
                <div class="fn-radio" tabindex="0">
                    <input class="fn-radio__input" type="radio" tabindex="-1" aria-label="radio">
                    <span class="fn-radio__checkmark"></span>
                    <span class="fn-radio__label">Radio Option 1</span>
                </div>
                <div class="fn-radio" tabindex="0">
                    <input class="fn-radio__input" type="radio" tabindex="-1" aria-label="radio">
                    <span class="fn-radio__checkmark"></span>
                    <span class="fn-radio__label">Radio Option 2</span>
                </div>
                <div class="fn-radio" tabindex="0">
                    <input class="fn-radio__input" type="radio" tabindex="-1" aria-label="radio">
                    <span class="fn-radio__checkmark"></span>
                    <span class="fn-radio__label">Radio Option 3</span>
                </div>
            </div>
        </div>
        <div class="fn-form-item fn-form-item--horizontal has-group">
            <span class="fn-form__label fn-form__label--required-before">Horizontal Radio Form Group:</span>
            <div class="fn-form__group">
                <div class="fn-radio" tabindex="0">
                    <input class="fn-radio__input" type="radio" tabindex="-1" aria-label="radio">
                    <span class="fn-radio__checkmark"></span>
                    <span class="fn-radio__label">Radio Option 1</span>
                </div>
                <div class="fn-radio" tabindex="0">
                    <input class="fn-radio__input" type="radio" tabindex="-1" aria-label="radio">
                    <span class="fn-radio__checkmark"></span>
                    <span class="fn-radio__label">Radio Option 2</span>
                </div>
                <div class="fn-radio" tabindex="0">
                    <input class="fn-radio__input" type="radio" tabindex="-1" aria-label="radio">
                    <span class="fn-radio__checkmark"></span>
                    <span class="fn-radio__label">Radio Option 3</span>
                </div>
            </div>
        </div>
    </div>
`;

RadioGroup.storyName = 'Radio Form Group';

RadioGroup.parameters = {
    docs: {
        description: {
            story: ''
        }
    }
};
