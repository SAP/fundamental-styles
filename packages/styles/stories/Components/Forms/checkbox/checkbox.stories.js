import '../../../../src/form-label.scss';
import '../../../../src/checkbox.scss';
import '../../../../src/fieldset.scss';
export default {
    title: 'Components/Forms/Checkbox',
    parameters: {
        description: `A checkbox lets the user set a binary value such as “true/false”. When the user selects the checkbox, it toggles between:

- **Checked**: the state described by the checkbox text applies, or that the item has been chosen.
- **Un-checked**: the state described by the checkbox is not applied.
- **Tri-state**: a state that indicates it is neither checked nor unchecked. JavaScript must be used to set the input's 'indeterminate' property to true. The main purpose of the tri-state is to represent a mixed selection of states of dependent input fields. If some (but not all) of the dependent fields are selected, the checkbox shows a partially selected state. This is only a visual state and can’t be achieved by a direct user interaction. In this example the indeterminate state is set on page load.

Note: With checkboxes, all options are visible, and the user can make one or more selections.

##Usage
**Use the checkbox if:**

- Only one option can be selected or deselected, for example to accept terms of use. Use it only if the meaning is obvious.
- A group or a list of options can be selected independently of each other.
- the options are displayed right away without any user interaction.
- An intermediate selection state (tri-state) is required when multiple sub-options are grouped under a parent option. The tri-state will represent that multiple (but not all) sub-options are selected in the list.

**Do not use the checkbox if:**

- The user needs to choose multiple options from a large list. Use a **Combo Box Input** instead.
- The user can choose only one option from a list. Use **Radio Buttons**, a **Select**, or a **List** instead.
- The user needs to perform instantaneous actions that do not need reviewing or confirming. Consider using a **Switch** instead.
- There is not enough space available on the screen. Use a **Combo Box** instead.
        `,
        tags: ['f3', 'a11y', 'theme']
    }
};

const localStyles = `
<style>
    .checkbox-example-container > fieldset {
        max-width: 100%;
    }
</style>
`;

export const Desktop = () => `
${localStyles}
<fieldset class="fd-fieldset">
    <legend class="fd-fieldset__legend">Desktop (compact) checkboxes</legend>
    <div class="fd-form-group">
        <div class="fd-form-item">
            <input type="checkbox" class="fd-checkbox fd-checkbox--compact" id="Ai4ez611c">
            <label class="fd-checkbox__label fd-checkbox__label--compact" for="Ai4ez611c">
                <div class="fd-checkbox__label-container">
                    <span class="fd-checkbox__text">Apple</span>
                </div>
            </label>
        </div>
        <div class="fd-form-item">
            <input type="checkbox" class="fd-checkbox fd-checkbox--compact" id="Ai4ez612c" checked>
            <label class="fd-checkbox__label fd-checkbox__label--compact" for="Ai4ez612c">
                <div class="fd-checkbox__label-container">
                    <span class="fd-checkbox__text">Banana</span>
                </div>
            </label>
        </div>
        <div class="fd-form-item">
            <input type="checkbox" class="fd-checkbox fd-checkbox--compact" id="Ai4ez622c" disabled>
            <label class="fd-checkbox__label fd-checkbox__label--compact" for="Ai4ez622c">
                <div class="fd-checkbox__label-container">
                    <span class="fd-checkbox__text">Kiwi</span>
                </div>
            </label>
        </div>
        <div class="fd-form-item">
            <input type="checkbox" class="fd-checkbox fd-checkbox--compact" id="Ai4ez632c"  checked disabled>
            <label class="fd-checkbox__label fd-checkbox__label--compact" for="Ai4ez632c">
                <div class="fd-checkbox__label-container">
                    <span class="fd-checkbox__text">Lemon</span>
                </div>
            </label>
        </div>
        <div class="fd-form-item">
            <input type="checkbox" class="fd-checkbox fd-checkbox--compact" id="Ai4ez613c">
            <label class="fd-checkbox__label fd-checkbox__label--compact" for="Ai4ez613c">
                <div class="fd-checkbox__label-container">
                    <span class="fd-checkbox__text">All Fruits (TriState)</span>
                </div>
            </label>
        </div>
        <div class="fd-form-item">
            <input type="checkbox" class="fd-checkbox fd-checkbox--compact" id="Ai4ez643c" disabled>
            <label class="fd-checkbox__label fd-checkbox__label--compact" for="Ai4ez643c">
                <div class="fd-checkbox__label-container">
                    <span class="fd-checkbox__text">All Fruits (TriState)</span>
                </div>
            </label>
        </div>
    </div>
</fieldset>
`;

Desktop.parameters = {
    docs: {
        iframeHeight: 330,
        description: {
            story: `A checkbox can be displayed in two different sizes desktop (compact) and mobile (default).
On desktop screens, the checkbox appears smaller and uses the \`fd-checkbox__label--compact\` modifier class.
        `
        }
    }
};

export const Required = () => `
<fieldset class="fd-fieldset">
    <legend class="fd-fieldset__legend">Required checkbox</legend>
    <div class="fd-form-group">
        <div class="fd-form-item">
            <input type="checkbox" class="fd-checkbox fd-checkbox--compact" id="Ai4ez61rc">
            <label class="fd-checkbox__label fd-checkbox__label--compact fd-checkbox__label--required" for="Ai4ez61rc">
                <div class="fd-checkbox__label-container">
                    <span class="fd-checkbox__text">Required Checkbox</span>
                </div>
            </label>
        </div>
    </div>
</fieldset>
`;

Required.parameters = {
    docs: {
        iframeHeight: 330,
        description: {
            story: `To show that a checkbox input is required, use the \`fd-checkbox__label--required\` class.
        `
        }
    }
};

export const Mobile = () => `
${localStyles}
<fieldset class="fd-fieldset">
    <legend class="fd-fieldset__legend">Mobile checkboxes</legend>
    <div class="fd-form-group">
        <div class="fd-form-item">
            <input type="checkbox" class="fd-checkbox" id="Ai4ez611">
            <label class="fd-checkbox__label" for="Ai4ez611">
                <div class="fd-checkbox__label-container">
                    <span class="fd-checkbox__text">Apple</span>
                </div>
            </label>
        </div>
        <div class="fd-form-item">
            <input type="checkbox" class="fd-checkbox" id="Ai4ez612" checked>
            <label class="fd-checkbox__label" for="Ai4ez612">
                <div class="fd-checkbox__label-container">
                    <span class="fd-checkbox__text">Banana</span>
                </div>
            </label>
        </div>
        <div class="fd-form-item">
            <input type="checkbox" class="fd-checkbox" id="Ai4ez622" disabled>
            <label class="fd-checkbox__label" for="Ai4ez622">
                <div class="fd-checkbox__label-container">
                    <span class="fd-checkbox__text">Kiwi</span>
                </div>
            </label>
        </div>
        <div class="fd-form-item">
            <input type="checkbox" class="fd-checkbox" id="Ai4ez632"  checked disabled>
            <label class="fd-checkbox__label" for="Ai4ez632">
                <div class="fd-checkbox__label-container">
                    <span class="fd-checkbox__text">Lemon</span>
                </div>
            </label>
        </div>
        <div class="fd-form-item">
            <input type="checkbox" class="fd-checkbox" id="Ai4ez613">
            <label class="fd-checkbox__label" for="Ai4ez613">
                <div class="fd-checkbox__label-container">
                    <span class="fd-checkbox__text">All Fruits (TriState)</span>
                </div>
            </label>
        </div>
        <div class="fd-form-item">
            <input type="checkbox" class="fd-checkbox" id="Ai4ez643" disabled>
            <label class="fd-checkbox__label" for="Ai4ez643">
                <div class="fd-checkbox__label-container">
                    <span class="fd-checkbox__text">All Fruits (TriState)</span>
                </div>
            </label>
        </div>
    </div>
</fieldset>
`;

Mobile.parameters = {
    docs: {
        iframeHeight: 330,
        description: {
            story: `A checkbox can display larger so users can easily select options on a mobile screen. This is considered the default size for checkbox.
        `
        }
    }
};

export const Inline = () => `<fieldset class="fd-fieldset">
    <legend class="fd-fieldset__legend">Inline checkboxes</legend>
    <div class="fd-form-group fd-form-group--inline">
        <div class="fd-form-item">
            <input type="checkbox" class="fd-checkbox" id="Ai4ez617">
            <label class="fd-checkbox__label" for="Ai4ez617">
                <div class="fd-checkbox__label-container">
                    <span class="fd-checkbox__text">Potatoes</span>
                </div>
            </label>
        </div>
        <div class="fd-form-item">
            <input type="checkbox" class="fd-checkbox" id="Ai4ez618" checked>
            <label class="fd-checkbox__label" for="Ai4ez618">
                <div class="fd-checkbox__label-container">
                    <span class="fd-checkbox__text">Tomatoes</span>
                </div>
            </label>
        </div>
        <div class="fd-form-item">
            <input type="checkbox" class="fd-checkbox" id="Ai4ez619" disabled checked>
            <label class="fd-checkbox__label" for="Ai4ez619">
                <div class="fd-checkbox__label-container">
                    <span class="fd-checkbox__text">Carrots</span>
                </div>
            </label>
        </div>
    </div>
</fieldset>
`;

Inline.parameters = {
    docs: {
        iframeHeight: 400,
        description: {
            story: 'Checkboxes can display horizontally in a line. To display them this way, add the `fd-checkbox__label--inline` modifier class to the element.'
        }
    }
};

export const States = () => `
${localStyles}
<div class="checkbox-example-container">
    <fieldset class="fd-fieldset">
        <legend class="fd-fieldset__legend">Error checkboxes</legend>
        <div class="fd-form-group">
            <div class="fd-form-item">
                <input type="checkbox" class="fd-checkbox is-error" id="Ai4ez6119">
                <label class="fd-checkbox__label" for="Ai4ez6119">
                    <div class="fd-checkbox__label-container">
                        <span class="fd-checkbox__text">Text Option</span>
                    </div>
                </label>
            </div>
            <div class="fd-form-item">
                <input type="checkbox" class="fd-checkbox is-error" id="Ai4ez6129" checked>
                <label class="fd-checkbox__label" for="Ai4ez6129">
                    <div class="fd-checkbox__label-container">
                        <span class="fd-checkbox__text">Selected State</span>
                    </div>
                </label>
            </div>
            <div class="fd-form-item">
                <input type="checkbox" class="fd-checkbox is-error" id="Ai4ez613i1">
                <label class="fd-checkbox__label" for="Ai4ez613i1">
                    <div class="fd-checkbox__label-container">
                        <span class="fd-checkbox__text">TriState Text</span>
                    </div>
                </label>
            </div>
        </div>
    </fieldset>

    <fieldset class="fd-fieldset">
        <legend class="fd-fieldset__legend">Success checkboxes</legend>
        <div class="fd-form-group">
            <div class="fd-form-item">
                <input type="checkbox" class="fd-checkbox is-success" id="Ai4ez61192">
                <label class="fd-checkbox__label" for="Ai4ez61192">
                    <div class="fd-checkbox__label-container">
                        <span class="fd-checkbox__text">Text Option</span>
                    </div>
                </label>
            </div>
            <div class="fd-form-item">
                <input type="checkbox" class="fd-checkbox is-success" id="Ai4ez61292" checked>
                <label class="fd-checkbox__label" for="Ai4ez61292">
                    <div class="fd-checkbox__label-container">
                        <span class="fd-checkbox__text">Selected State</span>
                    </div>
                </label>
            </div>
            <div class="fd-form-item">
                <input type="checkbox" class="fd-checkbox is-success" id="Ai4ez613i2">
                <label class="fd-checkbox__label" for="Ai4ez613i2">
                    <div class="fd-checkbox__label-container">
                        <span class="fd-checkbox__text">TriState Text</span>
                    </div>
                </label>
            </div>
        </div>
    </fieldset>

    <fieldset class="fd-fieldset">
        <legend class="fd-fieldset__legend">Warning checkboxes</legend>
        <div class="fd-form-group">
            <div class="fd-form-item">
                <input type="checkbox" class="fd-checkbox is-warning" id="Ai4ez61193">
                <label class="fd-checkbox__label" for="Ai4ez61193">
                    <div class="fd-checkbox__label-container">
                        <span class="fd-checkbox__text">Text Option</span>
                    </div>
                </label>
            </div>
            <div class="fd-form-item">
                <input type="checkbox" class="fd-checkbox is-warning" id="Ai4ez61293" checked>
                <label class="fd-checkbox__label" for="Ai4ez61293">
                    <div class="fd-checkbox__label-container">
                        <span class="fd-checkbox__text">Selected State</span>
                    </div>
                </label>
            </div>
            <div class="fd-form-item">
                <input type="checkbox" class="fd-checkbox is-warning" id="Ai4ez613i3">
                <label class="fd-checkbox__label" for="Ai4ez613i3">
                    <div class="fd-checkbox__label-container">
                        <span class="fd-checkbox__text">TriState Text</span>
                    </div>
                </label>
            </div>
        </div>
    </fieldset>

    <fieldset class="fd-fieldset">
        <legend class="fd-fieldset__legend">Information checkboxes</legend>
        <div class="fd-form-group">
            <div class="fd-form-item">
                <input type="checkbox" class="fd-checkbox is-information" id="Ai4ez61194">
                <label class="fd-checkbox__label" for="Ai4ez61194">
                    <div class="fd-checkbox__label-container">
                        <span class="fd-checkbox__text">Text Option</span>
                    </div>
                </label>
            </div>
            <div class="fd-form-item">
                <input type="checkbox" class="fd-checkbox is-information" id="Ai4ez61294" checked>
                <label class="fd-checkbox__label" for="Ai4ez61294">
                    <div class="fd-checkbox__label-container">
                        <span class="fd-checkbox__text">Selected State</span>
                    </div>
                </label>
            </div>
            <div class="fd-form-item">
                <input type="checkbox" class="fd-checkbox is-information" id="Ai4ez613i4">
                <label class="fd-checkbox__label" for="Ai4ez613i4">
                    <div class="fd-checkbox__label-container">
                        <span class="fd-checkbox__text">TriState Text</span>
                    </div>
                </label>
            </div>
        </div>
    </fieldset>

    <fieldset class="fd-fieldset">
        <legend class="fd-fieldset__legend">Disabled checkboxes</legend>
        <div class="fd-form-group">
            <div class="fd-form-item">
                <input type="checkbox" class="fd-checkbox" id="Ai4ez61196" disabled>
                <label class="fd-checkbox__label" for="Ai4ez61196">
                    <div class="fd-checkbox__label-container">
                        <span class="fd-checkbox__text">Text Option</span>
                    </div>
                </label>
            </div>
            <div class="fd-form-item">
                <input type="checkbox" class="fd-checkbox" id="Ai4ez61296" checked disabled>
                <label class="fd-checkbox__label" for="Ai4ez61296">
                    <div class="fd-checkbox__label-container">
                        <span class="fd-checkbox__text">Selected State</span>
                    </div>
                </label>
            </div>
            <div class="fd-form-item">
                <input type="checkbox" class="fd-checkbox" id="Ai4ez613i6" disabled>
                <label class="fd-checkbox__label" for="Ai4ez613i6">
                    <div class="fd-checkbox__label-container">
                        <span class="fd-checkbox__text">TriState Text</span>
                    </div>
                </label>
            </div>
        </div>
    </fieldset>

    <fieldset class="fd-fieldset">
        <legend class="fd-fieldset__legend">Readonly checkboxes</legend>
        <div class="fd-form-group">
            <div class="fd-form-item">
                <input type="checkbox" class="fd-checkbox" id="Ai4ez611967" readonly>
                <label class="fd-checkbox__label" for="Ai4ez611967">
                    <div class="fd-checkbox__label-container">
                        <span class="fd-checkbox__text">Text Option</span>
                    </div>
                </label>
            </div>
            <div class="fd-form-item">
                <input type="checkbox" class="fd-checkbox" id="Ai4ez61296cc" checked readonly>
                <label class="fd-checkbox__label" for="Ai4ez61296cc">
                    <div class="fd-checkbox__label-container">
                        <span class="fd-checkbox__text">Selected State</span>
                    </div>
                </label>
            </div>
            <div class="fd-form-item">
                <input type="checkbox" class="fd-checkbox" id="Ai4ez613i6cc" readonly>
                <label class="fd-checkbox__label" for="Ai4ez613i6cc">
                    <div class="fd-checkbox__label-container">
                        <span class="fd-checkbox__text">TriState Text</span>
                    </div>
                </label>
            </div>
        </div>
    </fieldset>
</div>
`;

States.parameters = {
    docs: {
        iframeHeight: 400,
        description: {
            story: `Checkboxes can display several interaction states to communicate semantic meaning to the users. To display different states, add the classes below to the \`fd-form-item\`:

| States | Class |
| :----------------- | :------------------ |
| Error | \`fd-checkbox is-error\` |
| Success | \`fd-checkbox is-success\` |
| Warning | \`fd-checkbox is-warning\` |
| Information | \`fd-checkbox is-information\` |
| Disabled | \`fd-checkbox is-disabled\` |
`
        }
    }
};
