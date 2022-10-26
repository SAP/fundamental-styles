import '../../../../src/radio.scss';
import '../../../../src/form-label.scss';
import '../../../../src/fieldset.scss';
import '../../../../src/form-group.scss';
export default {
    title: 'Components/Forms/Radio',
    parameters: {
        description: `
Radio buttons provide users with a set of mutually exclusive options. They allow a user to select only one option from two or more choices. Each option is represented by a radio button. Consequently, radio buttons only work in groups.

Use the radio button if:

- You need to help users choose quickly between at least two clearly different choices.

Do not use the radio button if:

- You need to offer the user the option of multiple selection. In this case, use checkboxes instead because radio buttons are for single-selection contexts only.
- You need to present more than 8 options. Use a dropdown box or list view.
In special cases, there are only two mutually exclusive options. Combine them into a single checkbox or switch. For example, use a checkbox for “I agree” (for example, to terms and conditions) instead of two radio buttons for “I agree” and “I don’t agree”.
- The options are numbers with fixed steps. Use a slider control.
`,
        tags: ['f3', 'a11y', 'theme']
    }
};

export const Primary = () => `<div style="display:flex;justify-content:space-between">
    <fieldset class="fd-fieldset" id="radio1">
        <legend class="fd-fieldset__legend">Radio Buttons Cozy Mode</legend>
        <div class="fd-form__group">
            <div class="fd-form-item">
                <input type="radio" class="fd-radio" id="pDidh761" name="radio1" checked>
                <label class="fd-radio__label" for="pDidh761">
                    Field label
                </label>
            </div>
            <div class="fd-form-item">
                <input type="radio" class="fd-radio" id="pDidh7612" name="radio1">
                <label class="fd-radio__label" for="pDidh7612">
                    Field label
                </label>
            </div>
            <div class="fd-form-item">
                <input type="radio" class="fd-radio" id="pDidh764" name="radio3" disabled>
                <label class="fd-radio__label" for="pDidh764">
                    Field label (disabled)
                </label>
            </div>
        </div>
    </fieldset>
    <fieldset class="fd-fieldset" id="radio2">
        <legend class="fd-fieldset__legend">Radio Buttons Compact Mode</legend>
        <div class="fd-form-group">
            <div class="fd-form-item">
                <input type="radio" class="fd-radio fd-radio--compact" id="pDidh76111" name="radio2" checked>
                <label class="fd-radio__label" for="pDidh76111">
                    Field label
                </label>
            </div>
            <div class="fd-form-item">
                <input type="radio" class="fd-radio fd-radio--compact" id="pDidh761211" name="radio2">
                <label class="fd-radio__label" for="pDidh761211">
                    Field label
                </label>
            </div>
            <div class="fd-form-item">
                <input type="radio" class="fd-radio fd-radio--compact" id="pDidh76131133" name="radio2" disabled>
                <label class="fd-radio__label" for="pDidh76131133">
                    Field label (disabled)
                </label>
            </div>
        </div>
    </fieldset>
</div>
`;

Primary.storyName = 'Responsiveness';
Primary.parameters = {
    docs: {
        iframeHeight: 250,
        description: {
            story: 'A radio button can appear in two different sizes. In `cozy` mode, it is bigger than it is in `compact` mode. This makes the checkbox easier to select on touch devices.'
        }
    }
};

export const Inline = () => `<fieldset class="fd-fieldset" id="radio4">
    <legend class="fd-fieldset__legend">Inline Radio buttons</legend>
        <div class="fd-form-group fd-form-group--inline">
            <div class="fd-form-item">
                <input type="radio" class="fd-radio" id="pDidh767" name="radio4" checked>
                <label class="fd-radio__label" for="pDidh767">
                    Field label
                </label>
            </div>
            <div class="fd-form-item">
                <input type="radio" class="fd-radio" id="pDidh7618" name="radio4" >
                <label class="fd-radio__label" for="pDidh7618">
                    Field label
                </label>
            </div>
            <div class="fd-form-item">
                <input type="radio" class="fd-radio" id="pDidh7619" name="radio4">
                <label class="fd-radio__label" for="pDidh7619">
                    Field label
                </label>
            </div>
        </div>
</fieldset>
`;

Inline.parameters = {
    docs: {
        description: {
            story: `
Try to align radio buttons vertically instead of horizontally, especially for long labels. Horizontal alignment is harder to read and localize. Consider horizontal alignment in cases of one-word labels, such as in the background color settings example above.

In forms, always align radio buttons vertically instead of horizontally as the length of the labels may vary for different languages.

Do not put two radio button groups right next to each other as it is difficult to determine which buttons belong to which group. Use group labels and padding to separate them.
`
        }
    }
};

export const InteractionStates = () => `<div style="display:flex;justify-content:space-between">
    <fieldset class="fd-fieldset" id="radio5">
        <legend class="fd-fieldset__legend">Interaction States</legend>
        <div class="fd-form-group">
            <div class="fd-form-item">
                <input type="radio" class="fd-radio" id="iSpDidh761" name="radio5" checked>
                <label class="fd-radio__label" for="iSpDidh761">
                    Field label
                </label>
            </div>
            <div class="fd-form-item">
                <input type="radio" class="fd-radio is-success" id="iSpDidh7612" name="radio5">
                <label class="fd-radio__label" for="iSpDidh7612">
                    Field label
                </label>
            </div>
            <div class="fd-form-item">
                <input type="radio" class="fd-radio is-error" id="iSpDidh7613" name="radio5">
                <label class="fd-radio__label" for="iSpDidh7613">
                    Field label
                </label>
            </div>
            <div class="fd-form-item">
                <input type="radio" class="fd-radio is-warning" id="iSpDidh7614" name="radio5">
                <label class="fd-radio__label" for="iSpDidh7614">
                    Field label
                </label>
            </div>
            <div class="fd-form-item">
                <input type="radio" class="fd-radio is-information" id="iSpDidh7615" name="radio5">
                <label class="fd-radio__label" for="iSpDidh7615">
                    Field label
                </label>
            </div>
            <div class="fd-form-item">
                <input type="radio" class="fd-radio" id="iSpDidh7611" name="radio5" disabled>
                <label class="fd-radio__label" for="iSpDidh7611">
                    Field label (disabled)
                </label>
            </div>
            <div class="fd-form-item">
                <input type="radio" class="fd-radio is-success" id="iSpDidh76121" name="radio5" disabled>
                <label class="fd-radio__label" for="iSpDidh76121">
                    Field label (disabled)
                </label>
            </div>
            <div class="fd-form-item">
                <input type="radio" class="fd-radio is-error" id="iSpDidh76131" name="radio5" disabled>
                <label class="fd-radio__label" for="iSpDidh76131">
                    Field label (disabled)
                </label>
            </div>
            <div class="fd-form-item">
                <input type="radio" class="fd-radio is-warning" id="iSpDidh76141" name="radio5" disabled>
                <label class="fd-radio__label" for="iSpDidh76141">
                    Field label (disabled)
                </label>
            </div>
            <div class="fd-form-item">
                <input type="radio" class="fd-radio is-information" id="iSpDidh76151" name="radio5" disabled>
                <label class="fd-radio__label" for="iSpDidh76151">
                    Field label (disabled)
                </label>
            </div>
        </div>
    </fieldset>
    <fieldset class="fd-fieldset" id="radio6">
        <legend class="fd-fieldset__legend">Interaction States Compact Mode</legend>
        <div class="fd-form-group">
            <div class="fd-form-item">
                <input type="radio" class="fd-radio fd-radio--compact" id="iSpDidh7619" name="radio6" checked>
                <label class="fd-radio__label" for="iSpDidh7619">
                    Field label
                </label>
            </div>
            <div class="fd-form-item">
                <input type="radio" class="fd-radio fd-radio--compact is-success" id="iSpDidh76129" name="radio6">
                <label class="fd-radio__label" for="iSpDidh76129">
                    Field label
                </label>
            </div>
            <div class="fd-form-item">
                <input type="radio" class="fd-radio fd-radio--compact is-error" id="iSpDidh76139" name="radio6">
                <label class="fd-radio__label" for="iSpDidh76139">
                    Field label
                </label>
            </div>
            <div class="fd-form-item">
                <input type="radio" class="fd-radio fd-radio--compact is-warning" id="iSpDidh76149" name="radio6">
                <label class="fd-radio__label" for="iSpDidh76149">
                    Field label
                </label>
            </div>
            <div class="fd-form-item">
                <input type="radio" class="fd-radio fd-radio--compact is-information" id="iSpDidh76159" name="radio6">
                <label class="fd-radio__label" for="iSpDidh76159">
                    Field label
                </label>
            </div>
            <div class="fd-form-item">
                <input type="radio" class="fd-radio fd-radio--compact" id="iSpDidh76193" name="radio6" disabled>
                <label class="fd-radio__label" for="iSpDidh76193">
                    Field label (disabled)
                </label>
            </div>
            <div class="fd-form-item">
                <input type="radio" class="fd-radio fd-radio--compact is-success" id="iSpDidh761293" name="radio6" disabled>
                <label class="fd-radio__label" for="iSpDidh761293">
                    Field label (disabled)
                </label>
            </div>
            <div class="fd-form-item">
                <input type="radio" class="fd-radio fd-radio--compact is-error" id="iSpDidh761393" name="radio6" disabled>
                <label class="fd-radio__label" for="iSpDidh761393">
                    Field label (disabled)
                </label>
            </div>
            <div class="fd-form-item">
                <input type="radio" class="fd-radio fd-radio--compact is-warning" id="iSpDidh761493" name="radio6" disabled>
                <label class="fd-radio__label" for="iSpDidh761493">
                    Field label (disabled)
                </label>
            </div>
            <div class="fd-form-item">
                <input type="radio" class="fd-radio fd-radio--compact is-information" id="iSpDidh761593" name="radio6" disabled>
                <label class="fd-radio__label" for="iSpDidh761593">
                    Field label (disabled)
                </label>
            </div>
        </div>
    </fieldset>
</div>
`;

InteractionStates.parameters = {
    docs: {
        iframeHeight: 550,
        description: {
            story: 'A radio button can have different states that affect its appearance value states, such as “error” or “warning”, which are indicated using semantic colors'
        }
    }
};
