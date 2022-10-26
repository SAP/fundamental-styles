import 'fn/src/fn-form.scss';
import 'fn/src/fn-label.scss';
import 'fn/src/fn-input.scss';
import 'fn/src/fn-input-message.scss';
import 'fn/src/fn-nested-button.scss';
import 'fn/src/fn-radio.scss';
import 'fn/src/fn-checkbox.scss';
import 'fn/src/fn-step-input.scss';
import 'styles/src/icon.scss';

export default {
  title: 'Form',
  parameters: {
    description: `**Modifier classes for forms:**

| Style&nbsp;&nbsp;&nbsp;&nbsp;      | Modifier class                |
| ---------------------------------- | ----------------------------- |
| Horizontally aligned label and input &nbsp;&nbsp;&nbsp;&nbsp;| \`fn-form--horizontal\`|
| Required form label&nbsp;&nbsp;&nbsp;&nbsp;   | \`fn-label--required\`    |
| Required form label with the asterisk before&nbsp;&nbsp;&nbsp;&nbsp;   | \`fn-label--required-before\`      |

<br><br>

        `,
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
    <form class="fn-form" style="max-width: 25rem;">
        <div class="fn-form__item">
            <label class="fn-label" for="fname">First Name:</label>
            <div class="fn-input">
                <input class="fn-input__text-field" type="text" id="fname" name="fname" placeholder="Placeholder" />
                <div class="fn-input__border"></div>
            </div>
        </div>
        <div class="fn-form__item">
            <label class="fn-label fn-label--required" for="lname">Last Name:</label>
            <div class="fn-input">
                <input class="fn-input__text-field" type="text" id="lname" name="lname" placeholder="Placeholder" />
                <div class="fn-input__border"></div>
            </div>        
        </div>
        <div class="fn-form__item">
            <label class="fn-label fn-label--required-before" for="field-1">Required Before:</label>
            <div class="fn-input">
                <input class="fn-input__text-field" type="text" id="field-1" name="field-1" placeholder="Placeholder" />
                <div class="fn-input__border"></div>
            </div>        
        </div>
        <div class="fn-form__item fn-form__item--horizontal">
            <label class="fn-label" for="field-2">Horizontal:</label>
            <div class="fn-input">
                <input class="fn-input__text-field" type="text" id="field-2" name="field-2" placeholder="Placeholder" />
                <div class="fn-input__border"></div>
            </div>
        </div>
    </form>
`;
Primary.storyName = 'Input Form Items';
Primary.parameters = {
  docs: {
    description: {
      story: 'By default, form items will have their labels placed above the form input. This can be changed to a horizontal layout with the modifier class `fn-label--required`.<br/>Add the `fn-label--required` modifier to the form label for required forms. To place the required asterisk before the label text, use `fn-label--required-before`.'
    }
  }
};
export const InputStates = () => `${localStyles}
    <form class="fn-form" style="max-width: 25rem;">
        <div class="fn-form__item">
            <label class="fn-label" for="fname">First Name:</label>
            <div class="fn-form__control">
                <div class="fn-input fn-input--critical">
                    <input class="fn-input__text-field is-active" type="text" id="fname" name="fname" placeholder="Placeholder" />
                    <div class="fn-input__border"></div>
                </div>
                <div class="fn-input-message fn-input-message--critical">
                    <div class="fn-input-message__text">Input message</div>
                </div>
            </div>
        </div>
        <br><br>
        <div class="fn-form__item">
            <label class="fn-label fn-label--required" for="lname">Last Name:</label>
            <div class="fn-form__control">
                <div class="fn-input fn-input--positive">
                    <input class="fn-input__text-field is-active" type="text" id="lname" name="lname" placeholder="Placeholder" />
                    <div class="fn-input__border"></div>
                </div>
                <div class="fn-input-message fn-input-message--positive">
                    <div class="fn-input-message__text">Input message</div>
                </div>
            </div>
        </div>
        <br><br>
        <div class="fn-form__item">
            <label class="fn-label fn-label--required-before" for="field-1">Required Before:</label>
            <div class="fn-form__control">
                <div class="fn-input fn-input--negative">
                    <input class="fn-input__text-field is-active" type="text" id="field-1" name="field-1" placeholder="Placeholder" />
                    <div class="fn-input__border"></div>
                </div>   
                <div class="fn-input-message fn-input-message--negative">
                    <div class="fn-input-message__text">Input message</div>
                </div>    
            </div> 
        </div>
        <br><br>
        <div class="fn-form__item fn-form__item--horizontal">
            <label class="fn-label" for="field-2">Horizontal:</label>
            <div class="fn-form__control">
                <div class="fn-input fn-input--info">
                    <input class="fn-input__text-field is-active" type="text" id="field-2" name="field-2" placeholder="Placeholder" />
                    <div class="fn-input__border"></div>
                </div>
                <div class="fn-input-message fn-input-message--info">
                    <div class="fn-input-message__text">Input message</div>
                </div>
            </div>
        </div>
        <br><br>
    </form>
`;
InputStates.storyName = 'Input Form Items with Messages';
InputStates.parameters = {
  docs: {
    description: {
      story: ''
    }
  }
};
export const Multi = () => `${localStyles}
    <form class="fn-form" style="max-width: 25rem;">
        <div class="fn-form__item">
            <label class="fn-label" for="field-3">Form Multi-Input:</label>
            <div class="fn-input fn-input--multi-input" tabindex="0">
                <input class="fn-input__text-field" type="text" id="field-3" name="field-3" placeholder="Placeholder" tabindex="-1" />
                <div class="fn-input__border"></div>
                <button class="fn-nested-button fn-nested-button--absolute-right" aria-label="nested button" tabindex="-1">
                    <span class="sap-icon sap-icon--value-help"></span>
                </button>
            </div>
        </div>
        <div class="fn-form__item fn-form__item--horizontal">
            <label class="fn-label" for="field-4">Horizontal:</label>
            <div class="fn-input fn-input--multi-input" tabindex="0">
                <input class="fn-input__text-field" type="text" id="field-4" name="field-4" placeholder="Placeholder" tabindex="-1" />
                <div class="fn-input__border"></div>
                <button class="fn-nested-button fn-nested-button--absolute-right" aria-label="nested button" tabindex="-1">
                    <span class="sap-icon sap-icon--value-help"></span>
                </button>
            </div>
        </div>
    </form>
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
    <form class="fn-form" style="max-width: 25rem;">
        <div class="fn-form__item">
            <label class="fn-label" for="field-5">Form Step-Input:</label>
            <div class="fn-input fn-step-input" tabindex="0">
                <button class="fn-nested-button fn-nested-button--absolute-left" aria-label="subtract button" tabindex="-1">
                    <span class="sap-icon sap-icon--less"></span>
                </button>
                <input class="fn-input__text-field fn-step-input__text-field" type="number" id="field-5" name="field-5" value="42" tabindex="-1" />
                <div class="fn-input__border"></div>
                <button class="fn-nested-button fn-nested-button--absolute-right" aria-label="add button" tabindex="-1">
                    <span class="sap-icon sap-icon--add"></span>
                </button>
            </div>
        </div>
        <div class="fn-form__item fn-form__item--horizontal">
            <label class="fn-label" for="field-6">Horizontal Step-Input:</label>
            <div class="fn-input fn-step-input" tabindex="0">
                <button class="fn-nested-button fn-nested-button--absolute-left" aria-label="subtract button" tabindex="-1">
                    <span class="sap-icon sap-icon--less"></span>
                </button>
                <input class="fn-input__text-field fn-step-input__text-field" type="number" id="field-6" name="field-6" value="42" tabindex="-1" />
                <div class="fn-input__border"></div>
                <button class="fn-nested-button fn-nested-button--absolute-right" aria-label="add button" tabindex="-1">
                    <span class="sap-icon sap-icon--add"></span>
                </button>
            </div>
        </div>
    </form>
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
    <form class="fn-form" style="max-width: 25rem;">
        <div class="fn-form__item">
            <label class="fn-label fn-label">Checkbox Form Group:</label>
            <div class="fn-form__group">
                <div class="fn-checkbox" tabindex="0">
                    <input class="fn-checkbox__input" id="checkbox-1" name="checkbox-1" type="checkbox" tabindex="-1" aria-label="checkbox">
                    <span class="fn-checkbox__checkmark"></span>
                    <label class="fn-checkbox__label" for="checkbox-1">Checkbox Option 1</label>
                </div>
                <div class="fn-checkbox" tabindex="0">
                    <input class="fn-checkbox__input" id="checkbox-2" name="checkbox-2" type="checkbox" tabindex="-1" aria-label="checkbox">
                    <span class="fn-checkbox__checkmark"></span>
                    <label class="fn-checkbox__label">Checkbox Option 2</label>
                </div>
                <div class="fn-checkbox" tabindex="0">
                    <input class="fn-checkbox__input" id="checkbox-3" name="checkbox-3" type="checkbox" tabindex="-1" aria-label="checkbox">
                    <span class="fn-checkbox__checkmark"></span>
                    <label class="fn-checkbox__label">Checkbox Option 3</label>
                </div>
            </div>
        </div>
        <div class="fn-form__item">
            <label class="fn-label fn-label--required">Checkbox Form Group:</label>
            <div class="fn-form__group">
                <div class="fn-checkbox" tabindex="0">
                    <input class="fn-checkbox__input" id="checkbox-4" name="checkbox-4" type="checkbox" tabindex="-1" aria-label="checkbox">
                    <span class="fn-checkbox__checkmark"></span>
                    <label class="fn-checkbox__label" for="checkbox-4">Checkbox Option 1</label>
                </div>
                <div class="fn-checkbox" tabindex="0">
                    <input class="fn-checkbox__input" id="checkbox-5" name="checkbox-5" type="checkbox" tabindex="-1" aria-label="checkbox">
                    <span class="fn-checkbox__checkmark"></span>
                    <label class="fn-checkbox__label" for="checkbox-5">Checkbox Option 2</label>
                </div>
                <div class="fn-checkbox" tabindex="0">
                    <input class="fn-checkbox__input" id="checkbox-6" name="checkbox-6" type="checkbox" tabindex="-1" aria-label="checkbox">
                    <span class="fn-checkbox__checkmark"></span>
                    <label class="fn-checkbox__label" for="checkbox-6">Checkbox Option 3</label>
                </div>
            </div>
        </div>
        <div class="fn-form__item">
            <label class="fn-label fn-label--required-before">Checkbox Form Group:</label>
            <div class="fn-form__group">
                <div class="fn-checkbox" tabindex="0">
                    <input class="fn-checkbox__input" id="checkbox-7" name="checkbox-7" type="checkbox" tabindex="-1" aria-label="checkbox">
                    <span class="fn-checkbox__checkmark"></span>
                    <label class="fn-checkbox__label" for="checkbox-7">Checkbox Option 1</label>
                </div>
                <div class="fn-checkbox" tabindex="0">
                    <input class="fn-checkbox__input" id="checkbox-8" name="checkbox-8" type="checkbox" tabindex="-1" aria-label="checkbox">
                    <span class="fn-checkbox__checkmark"></span>
                    <label class="fn-checkbox__label" for="checkbox-8">Checkbox Option 2</label>
                </div>
                <div class="fn-checkbox" tabindex="0">
                    <input class="fn-checkbox__input" id="checkbox-9" name="checkbox-9" type="checkbox" tabindex="-1" aria-label="checkbox">
                    <span class="fn-checkbox__checkmark"></span>
                    <label class="fn-checkbox__label" for="checkbox-9">Checkbox Option 3</label>
                </div>
            </div>
        </div>
        <div class="fn-form__item fn-form__item--horizontal has-group">
            <label class="fn-label fn-label">Horizontal Checkbox Form Group:</label>
            <div class="fn-form__group">
                <div class="fn-checkbox" tabindex="0">
                    <input class="fn-checkbox__input" id="checkbox-10" name="checkbox-10" type="checkbox" tabindex="-1" aria-label="checkbox">
                    <span class="fn-checkbox__checkmark"></span>
                    <label class="fn-checkbox__label" for="checkbox-10">Checkbox Option 1</label>
                </div>
                <div class="fn-checkbox" tabindex="0">
                    <input class="fn-checkbox__input" id="checkbox-11" name="checkbox-11" type="checkbox" tabindex="-1" aria-label="checkbox">
                    <span class="fn-checkbox__checkmark"></span>
                    <label class="fn-checkbox__label" for="checkbox-11">Checkbox Option 2</label>
                </div>
                <div class="fn-checkbox" tabindex="0">
                    <input class="fn-checkbox__input" id="checkbox-12" name="checkbox-12" type="checkbox" tabindex="-1" aria-label="checkbox">
                    <span class="fn-checkbox__checkmark"></span>
                    <label class="fn-checkbox__label" for="checkbox-12">Checkbox Option 3</label>
                </div>
            </div>
        </div>
        <div class="fn-form__item fn-form__item--horizontal has-group">
            <label class="fn-label fn-label--required">Horizontal Checkbox Form Group:</label>
            <div class="fn-form__group">
                <div class="fn-checkbox" tabindex="0">
                    <input class="fn-checkbox__input" id="checkbox-13" name="checkbox-13" type="checkbox" tabindex="-1" aria-label="checkbox">
                    <span class="fn-checkbox__checkmark"></span>
                    <label class="fn-checkbox__label" for="checkbox-13">Checkbox Option 1</label>
                </div>
                <div class="fn-checkbox" tabindex="0">
                    <input class="fn-checkbox__input" id="checkbox-14" name="checkbox-14" type="checkbox" tabindex="-1" aria-label="checkbox">
                    <span class="fn-checkbox__checkmark"></span>
                    <label class="fn-checkbox__label" for="checkbox-14">Checkbox Option 2</label>
                </div>
                <div class="fn-checkbox" tabindex="0">
                    <input class="fn-checkbox__input" id="checkbox-15" name="checkbox-15" type="checkbox" tabindex="-1" aria-label="checkbox">
                    <span class="fn-checkbox__checkmark"></span>
                    <label class="fn-checkbox__label" for="checkbox-15">Checkbox Option 3</label>
                </div>
            </div>
        </div>
        <div class="fn-form__item fn-form__item--horizontal has-group">
            <label class="fn-label fn-label--required-before">Horizontal Checkbox Form Group:</label>
            <div class="fn-form__group">
                <div class="fn-checkbox" tabindex="0">
                    <input class="fn-checkbox__input" id="checkbox-16" name="checkbox-16" type="checkbox" tabindex="-1" aria-label="checkbox">
                    <span class="fn-checkbox__checkmark"></span>
                    <label class="fn-checkbox__label" for="checkbox-16">Checkbox Option 1</label>
                </div>
                <div class="fn-checkbox" tabindex="0">
                    <input class="fn-checkbox__input" id="checkbox-17" name="checkbox-17" type="checkbox" tabindex="-1" aria-label="checkbox">
                    <span class="fn-checkbox__checkmark"></span>
                    <label class="fn-checkbox__label" for="checkbox-17">Checkbox Option 2</label>
                </div>
                <div class="fn-checkbox" tabindex="0">
                    <input class="fn-checkbox__input" id="checkbox-18" name="checkbox-18" type="checkbox" tabindex="-1" aria-label="checkbox">
                    <span class="fn-checkbox__checkmark"></span>
                    <label class="fn-checkbox__label" for="checkbox-18">Checkbox Option 3</label>
                </div>
            </div>
        </div>
    </form>
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
    <form class="fn-form" style="max-width: 25rem;">
        <div class="fn-form__item">
            <span class="fn-label fn-label">Radio Form Group:</label>
            <div class="fn-form__group">
                <div class="fn-radio" tabindex="0">
                    <input class="fn-radio__input" id="radio-1" name="radio-1" type="radio" tabindex="-1" aria-label="radio">
                    <span class="fn-radio__checkmark"></span>
                    <label class="fn-radio__label" for="radio-1">Radio Option 1</label>
                </div>
                <div class="fn-radio" tabindex="0">
                    <input class="fn-radio__input" id="radio-2" name="radio-2" type="radio" tabindex="-1" aria-label="radio">
                    <span class="fn-radio__checkmark"></span>
                    <label class="fn-radio__label">Radio Option 2</label>
                </div>
                <div class="fn-radio" tabindex="0">
                    <input class="fn-radio__input" id="radio-3" name="radio-3" type="radio" tabindex="-1" aria-label="radio">
                    <span class="fn-radio__checkmark"></span>
                    <label class="fn-radio__label">Radio Option 3</label>
                </div>
            </div>
        </div>
        <div class="fn-form__item">
            <label class="fn-label fn-label--required">Radio Form Group:</label>
            <div class="fn-form__group">
                <div class="fn-radio" tabindex="0">
                    <input class="fn-radio__input" id="radio-4" name="radio-4" type="radio" tabindex="-1" aria-label="radio">
                    <span class="fn-radio__checkmark"></span>
                    <label class="fn-radio__label" for="radio-4">Radio Option 1</label>
                </div>
                <div class="fn-radio" tabindex="0">
                    <input class="fn-radio__input" id="radio-5" name="radio-5" type="radio" tabindex="-1" aria-label="radio">
                    <span class="fn-radio__checkmark"></span>
                    <label class="fn-radio__label" for="radio-5">Radio Option 2</label>
                </div>
                <div class="fn-radio" tabindex="0">
                    <input class="fn-radio__input" id="radio-6" name="radio-6" type="radio" tabindex="-1" aria-label="radio">
                    <span class="fn-radio__checkmark"></span>
                    <label class="fn-radio__label" for="radio-6">Radio Option 3</label>
                </div>
            </div>
        </div>
        <div class="fn-form__item">
            <label class="fn-label fn-label--required-before">Radio Form Group:</label>
            <div class="fn-form__group">
                <div class="fn-radio" tabindex="0">
                    <input class="fn-radio__input" id="radio-7" name="radio-7" type="radio" tabindex="-1" aria-label="radio">
                    <span class="fn-radio__checkmark"></span>
                    <label class="fn-radio__label" for="radio-7">Radio Option 1</label>
                </div>
                <div class="fn-radio" tabindex="0">
                    <input class="fn-radio__input" id="radio-8" name="radio-8" type="radio" tabindex="-1" aria-label="radio">
                    <span class="fn-radio__checkmark"></span>
                    <label class="fn-radio__label" for="radio-8">Radio Option 2</label>
                </div>
                <div class="fn-radio" tabindex="0">
                    <input class="fn-radio__input" id="radio-9" name="radio-9" type="radio" tabindex="-1" aria-label="radio">
                    <span class="fn-radio__checkmark"></span>
                    <label class="fn-radio__label" for="radio-9">Radio Option 3</label>
                </div>
            </div>
        </div>
        <div class="fn-form__item fn-form__item--horizontal has-group">
            <label class="fn-label fn-label">Horizontal Radio Form Group:</label>
            <div class="fn-form__group">
                <div class="fn-radio" tabindex="0">
                    <input class="fn-radio__input" id="radio-10" name="radio-10" type="radio" tabindex="-1" aria-label="radio">
                    <span class="fn-radio__checkmark"></span>
                    <label class="fn-radio__label" for="radio-10">Radio Option 1</label>
                </div>
                <div class="fn-radio" tabindex="0">
                    <input class="fn-radio__input" id="radio-11" name="radio-11" type="radio" tabindex="-1" aria-label="radio">
                    <span class="fn-radio__checkmark"></span>
                    <label class="fn-radio__label" for="radio-11">Radio Option 2</label>
                </div>
                <div class="fn-radio" tabindex="0">
                    <input class="fn-radio__input" id="radio-12" name="radio-12" type="radio" tabindex="-1" aria-label="radio">
                    <span class="fn-radio__checkmark"></span>
                    <label class="fn-radio__label" for="radio-12">Radio Option 3</label>
                </div>
            </div>
        </div>
        <div class="fn-form__item fn-form__item--horizontal has-group">
            <label class="fn-label fn-label--required">Horizontal Radio Form Group:</label>
            <div class="fn-form__group">
                <div class="fn-radio" tabindex="0">
                    <input class="fn-radio__input" id="radio-13" name="radio-13" type="radio" tabindex="-1" aria-label="radio">
                    <span class="fn-radio__checkmark"></span>
                    <label class="fn-radio__label" for="radio-13">Radio Option 1</label>
                </div>
                <div class="fn-radio" tabindex="0">
                    <input class="fn-radio__input" id="radio-14" name="radio-14" type="radio" tabindex="-1" aria-label="radio">
                    <span class="fn-radio__checkmark"></span>
                    <label class="fn-radio__label" for="radio-14">Radio Option 2</label>
                </div>
                <div class="fn-radio" tabindex="0">
                    <input class="fn-radio__input" id="radio-15" name="radio-15" type="radio" tabindex="-1" aria-label="radio">
                    <span class="fn-radio__checkmark"></span>
                    <label class="fn-radio__label" for="radio-15">Radio Option 3</label>
                </div>
            </div>
        </div>
        <div class="fn-form__item fn-form__item--horizontal has-group">
            <label class="fn-label fn-label--required-before">Horizontal Radio Form Group:</label>
            <div class="fn-form__group">
                <div class="fn-radio" tabindex="0">
                    <input class="fn-radio__input" id="radio-16" name="radio-16" type="radio" tabindex="-1" aria-label="radio">
                    <span class="fn-radio__checkmark"></span>
                    <label class="fn-radio__label" for="radio-16">Radio Option 1</label>
                </div>
                <div class="fn-radio" tabindex="0">
                    <input class="fn-radio__input" id="radio-17" name="radio-17" type="radio" tabindex="-1" aria-label="radio">
                    <span class="fn-radio__checkmark"></span>
                    <label class="fn-radio__label" for="radio-17">Radio Option 2</label>
                </div>
                <div class="fn-radio" tabindex="0">
                    <input class="fn-radio__input" id="radio-18" name="radio-18" type="radio" tabindex="-1" aria-label="radio">
                    <span class="fn-radio__checkmark"></span>
                    <label class="fn-radio__label" for="radio-18">Radio Option 3</label>
                </div>
            </div>
        </div>
    </form>
`;
RadioGroup.storyName = 'Radio Form Group';
RadioGroup.parameters = {
  docs: {
    description: {
      story: ''
    }
  }
};
