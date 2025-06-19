import inlineExampleHtml from "./inline.example.html?raw";
import requiredExampleHtml from "./required.example.html?raw";
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
    tags: []
  }
};
const localStyles = `
<style>
    .checkbox-example-container > fieldset {
        max-width: 100%;
    }
</style>
`;
export const Required = () => requiredExampleHtml;
Required.parameters = {
  docs: {
   description: {
      story: `To show that a checkbox input is required, use the \`fd-checkbox__label--required\` class.
        `
    }
  }
};
export const Default = () => `
${localStyles}
<fieldset class="fd-fieldset">
    <legend class="fd-fieldset__legend">Checkbox</legend>
    <div class="fd-form-group">
        <div class="fd-form-item">
            <input type="checkbox" class="fd-checkbox" id="Ai4ez611">
            <label class="fd-checkbox__label" for="Ai4ez611">
                <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                <span class="fd-checkbox__label-container">
                    <span class="fd-checkbox__text">Normal State</span>
                </span>
            </label>
        </div>
        <div class="fd-form-item">
            <input type="checkbox" class="fd-checkbox" id="Ai4ez611hov">
            <label class="fd-checkbox__label is-hover" for="Ai4ez611hov">
                <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                <span class="fd-checkbox__label-container">
                    <span class="fd-checkbox__text">Hover State</span>
                </span>
            </label>
        </div>
        <div class="fd-form-item">
            <input type="checkbox" class="fd-checkbox" id="Ai4ez612" checked>
            <label class="fd-checkbox__label" for="Ai4ez612">
                <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                <span class="fd-checkbox__label-container">
                    <span class="fd-checkbox__text">Selected/Checked State</span>
                </span>
            </label>
        </div>
        <div class="fd-form-item">
            <input type="checkbox" class="fd-checkbox" id="Ai4ez622" disabled aria-disabled="true">
            <label class="fd-checkbox__label" for="Ai4ez622">
                <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                <span class="fd-checkbox__label-container">
                    <span class="fd-checkbox__text">Disabled State</span>
                </span>
            </label>
        </div>
        <div class="fd-form-item">
            <input type="checkbox" class="fd-checkbox" id="Ai4ez632" checked disabled aria-disabled="true">
            <label class="fd-checkbox__label" for="Ai4ez632">
                <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                <span class="fd-checkbox__label-container">
                    <span class="fd-checkbox__text">Selected/Checked Disabled State</span>
                </span>
            </label>
        </div>
        <div class="fd-form-item">
            <input type="checkbox" class="fd-checkbox" id="Ai4ez613">
            <label class="fd-checkbox__label" for="Ai4ez613">
                <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                <span class="fd-checkbox__label-container">
                    <span class="fd-checkbox__text">Tri-State</span>
                </span>
            </label>
        </div>
        <div class="fd-form-item">
            <input type="checkbox" class="fd-checkbox" id="Ai4ez643" disabled aria-disabled="true">
            <label class="fd-checkbox__label" for="Ai4ez643">
                <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                <span class="fd-checkbox__label-container">
                    <span class="fd-checkbox__text">Tri-State Disabled</span>
                </span>
            </label>
        </div>
    </div>
</fieldset>
`;
Default.parameters = {
  docs: {}
};
export const Inline = () => inlineExampleHtml;
Inline.parameters = {
  docs: {
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
                    <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                    <span class="fd-checkbox__label-container">
                        <span class="fd-checkbox__text">Error Regular Stat</span>
                    </span>
                </label>
            </div>
            <div class="fd-form-item">
                <input type="checkbox" class="fd-checkbox is-error" id="Ai4ez6119hov">
                <label class="fd-checkbox__label is-hover" for="Ai4ez6119hov">
                    <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                    <span class="fd-checkbox__label-container">
                        <span class="fd-checkbox__text">Error Hover Stat</span>
                    </span>
                </label>
            </div>
            <div class="fd-form-item">
                <input type="checkbox" class="fd-checkbox is-error" id="Ai4ez6129" checked>
                <label class="fd-checkbox__label" for="Ai4ez6129">
                    <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                    <span class="fd-checkbox__label-container">
                        <span class="fd-checkbox__text">Error Selected State</span>
                    </span>
                </label>
            </div>
            <div class="fd-form-item">
                <input type="checkbox" class="fd-checkbox is-error" id="Ai4ez613i1">
                <label class="fd-checkbox__label" for="Ai4ez613i1">
                    <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                    <span class="fd-checkbox__label-container">
                        <span class="fd-checkbox__text">Error Tri-State</span>
                    </span>
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
                    <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                    <span class="fd-checkbox__label-container">
                        <span class="fd-checkbox__text">Success Regular State</span>
                    </span>
                </label>
            </div>
            <div class="fd-form-item">
                <input type="checkbox" class="fd-checkbox is-success" id="Ai4ez61192hov">
                <label class="fd-checkbox__label is-hover" for="Ai4ez61192hov">
                    <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                    <span class="fd-checkbox__label-container">
                        <span class="fd-checkbox__text">Success Hover State</span>
                    </span>
                </label>
            </div>
            <div class="fd-form-item">
                <input type="checkbox" class="fd-checkbox is-success" id="Ai4ez61292" checked>
                <label class="fd-checkbox__label" for="Ai4ez61292">
                    <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                    <span class="fd-checkbox__label-container">
                        <span class="fd-checkbox__text">Success Selected State</span>
                    </span>
                </label>
            </div>
            <div class="fd-form-item">
                <input type="checkbox" class="fd-checkbox is-success" id="Ai4ez613i2">
                <label class="fd-checkbox__label" for="Ai4ez613i2">
                    <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                    <span class="fd-checkbox__label-container">
                        <span class="fd-checkbox__text">Success Tri-State</span>
                    </span>
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
                    <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                    <span class="fd-checkbox__label-container">
                        <span class="fd-checkbox__text">Warning Regular State</span>
                    </span>
                </label>
            </div>
            <div class="fd-form-item">
                <input type="checkbox" class="fd-checkbox is-warning" id="Ai4ez61193hov">
                <label class="fd-checkbox__label is-hover" for="Ai4ez61193hov">
                    <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                    <span class="fd-checkbox__label-container">
                        <span class="fd-checkbox__text">Warning Hover State</span>
                    </span>
                </label>
            </div>
            <div class="fd-form-item">
                <input type="checkbox" class="fd-checkbox is-warning" id="Ai4ez61293" checked>
                <label class="fd-checkbox__label" for="Ai4ez61293">
                    <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                    <span class="fd-checkbox__label-container">
                        <span class="fd-checkbox__text">Warning Selected State</span>
                    </span>
                </label>
            </div>
            <div class="fd-form-item">
                <input type="checkbox" class="fd-checkbox is-warning" id="Ai4ez613i3">
                <label class="fd-checkbox__label" for="Ai4ez613i3">
                    <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                    <span class="fd-checkbox__label-container">
                        <span class="fd-checkbox__text">Warning Tri-State</span>
                    </span>
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
                    <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                    <span class="fd-checkbox__label-container">
                        <span class="fd-checkbox__text">Information Regular State</span>
                    </span>
                </label>
            </div>
            <div class="fd-form-item">
                <input type="checkbox" class="fd-checkbox is-information" id="Ai4ez61194hov">
                <label class="fd-checkbox__label is-hover" for="Ai4ez61194hov">
                    <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                    <span class="fd-checkbox__label-container">
                        <span class="fd-checkbox__text">Information Hover State</span>
                    </span>
                </label>
            </div>
            <div class="fd-form-item">
                <input type="checkbox" class="fd-checkbox is-information" id="Ai4ez61294" checked>
                <label class="fd-checkbox__label" for="Ai4ez61294">
                    <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                    <span class="fd-checkbox__label-container">
                        <span class="fd-checkbox__text">Information Checked State</span>
                    </span>
                </label>
            </div>
            <div class="fd-form-item">
                <input type="checkbox" class="fd-checkbox is-information" id="Ai4ez613i4">
                <label class="fd-checkbox__label" for="Ai4ez613i4">
                    <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                    <span class="fd-checkbox__label-container">
                        <span class="fd-checkbox__text">Information Tri-State</span>
                    </span>
                </label>
            </div>
        </div>
    </fieldset>

    <fieldset class="fd-fieldset">
        <legend class="fd-fieldset__legend">Disabled checkboxes</legend>
        <div class="fd-form-group">
            <div class="fd-form-item">
                <input type="checkbox" class="fd-checkbox" id="Ai4ez61196" disabled aria-disabled="true">
                <label class="fd-checkbox__label" for="Ai4ez61196">
                    <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                    <span class="fd-checkbox__label-container">
                        <span class="fd-checkbox__text">Text Option</span>
                    </span>
                </label>
            </div>
            <div class="fd-form-item">
                <input type="checkbox" class="fd-checkbox" id="Ai4ez61296" checked disabled aria-disabled="true">
                <label class="fd-checkbox__label" for="Ai4ez61296">
                    <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                    <span class="fd-checkbox__label-container">
                        <span class="fd-checkbox__text">Selected State</span>
                    </span>
                </label>
            </div>
            <div class="fd-form-item">
                <input type="checkbox" class="fd-checkbox" id="Ai4ez613i6" disabled aria-disabled="true">
                <label class="fd-checkbox__label" for="Ai4ez613i6">
                    <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                    <span class="fd-checkbox__label-container">
                        <span class="fd-checkbox__text">TriState Text</span>
                    </span>
                </label>
            </div>
        </div>
    </fieldset>

    <fieldset class="fd-fieldset">
        <legend class="fd-fieldset__legend">Readonly checkboxes</legend>
        <div class="fd-form-group">
            <div class="fd-form-item">
                <input type="checkbox" class="fd-checkbox is-readonly" id="Ai4ez611967" aria-readonly="true" aria-description="This checkbox is read-only and cannot be changed." onclick="return false;">
                <label class="fd-checkbox__label" for="Ai4ez611967">
                    <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                    <span class="fd-checkbox__label-container">
                        <span class="fd-checkbox__text">Read Only Regular State</span>
                    </span>
                </label>
            </div>
            <div class="fd-form-item">
                <input type="checkbox" class="fd-checkbox is-readonly" id="Ai4ez611967hov" aria-readonly="true" aria-description="This checkbox is read-only and cannot be changed." onclick="return false;">
                <label class="fd-checkbox__label is-hover" for="Ai4ez611967hov">
                    <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                    <span class="fd-checkbox__label-container">
                        <span class="fd-checkbox__text">Read Only Hover State</span>
                    </span>
                </label>
            </div>
            <div class="fd-form-item">
                <input type="checkbox" class="fd-checkbox is-readonly" id="Ai4ez61296cc" checked aria-readonly="true" aria-description="This checkbox is read-only and cannot be changed." onclick="return false;">
                <label class="fd-checkbox__label" for="Ai4ez61296cc">
                    <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                    <span class="fd-checkbox__label-container">
                        <span class="fd-checkbox__text">Read Only Checked State</span>
                    </span>
                </label>
            </div>
            <div class="fd-form-item">
                <input type="checkbox" class="fd-checkbox is-readonly" id="Ai4ez613i6cc" aria-readonly="true" aria-description="This checkbox is read-only and cannot be changed." onclick="return false;">
                <label class="fd-checkbox__label" for="Ai4ez613i6cc">
                    <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                    <span class="fd-checkbox__label-container">
                        <span class="fd-checkbox__text">Read Only Tri-State</span>
                    </span>
                </label>
            </div>
        </div>
    </fieldset>
</div>
`;
States.parameters = {
  docs: {
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
export const TextTruncation = () => `
${localStyles}
<fieldset class="fd-fieldset">
    <legend class="fd-fieldset__legend">Truncation Options</legend>
    <div class="fd-form-group">
        <div class="fd-form-item">
            <input type="checkbox" class="fd-checkbox" id="Ai4ez611lw">
            <label class="fd-checkbox__label" for="Ai4ez611lw" style="max-width: 400px;">
                <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                <span class="fd-checkbox__label-container">
                    <span class="fd-checkbox__text">Apple ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </span>
                </span>
            </label>
        </div>
        <div class="fd-form-item">
            <input type="checkbox" class="fd-checkbox" id="Ai4ez612lw" checked>
            <label class="fd-checkbox__label fd-checkbox__label--wrap" for="Ai4ez612lw" style="max-width: 400px;">
                <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                <span class="fd-checkbox__label-container">
                    <span class="fd-checkbox__text">Banana ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
                </span>
            </label>
        </div>
        <div class="fd-form-item">
            <input type="checkbox" class="fd-checkbox" id="Ai4ez612lwtop" checked>
            <label class="fd-checkbox__label fd-checkbox__label--wrap-top-aligned" for="Ai4ez612lwtop" style="max-width: 400px;">
                <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                <span class="fd-checkbox__label-container">
                    <span class="fd-checkbox__text">Banana ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
                </span>
            </label>
        </div>
    </div>
</fieldset>
`;
TextTruncation.parameters = {
  docs: {
   description: {
      story: `By default, long checkbox label truncates with ellipsis. For this behaviour no modifier class is needed. For checkbox label that wraps on a new line to show the entire content, use \`.fd-checkbox__label--wrap\` modifier class applied with \`.fd-checkbox__label\`. Keep in mind that for this to work <b>max-width</b> should be set on the label. For a <b>top-left aligned</b> label use the \`.fd-checkbox__label--wrap-top-aligned\` modifier class.
        `
    }
  }
};

export const DisplayOnly = () => `
${localStyles}
<fieldset class="fd-fieldset">
    <legend class="fd-fieldset__legend">Display Only</legend>
    <div class="fd-form-group">
        <div class="fd-form-item">
            <input type="checkbox" class="fd-checkbox is-display" id="Ai4ez611lwdo" aria-description="This checkbox is in display only mode.">
            <label class="fd-checkbox__label" for="Ai4ez611lwdo" style="max-width: 400px;">
                <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                <span class="fd-checkbox__label-container">
                    <span class="fd-checkbox__text">Unchecked Icon</span>
                </span>
            </label>
        </div>
        <div class="fd-form-item">
            <input type="checkbox" class="fd-checkbox is-display" id="Ai4ez612lwdo" checked aria-description="This checkbox is in display only mode.">
            <label class="fd-checkbox__label" for="Ai4ez612lwdo" style="max-width: 400px;">
                <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                <span class="fd-checkbox__label-container">
                    <span class="fd-checkbox__text">Checked Icon</span>
                </span>
            </label>
        </div>
        <div class="fd-form-item">
            <input type="checkbox" class="fd-checkbox is-display" id="Ai4ez614ldo" aria-description="This checkbox is in display only mode.">
            <label class="fd-checkbox__label" for="Ai4ez614ldo" style="max-width: 400px;">
                <span class="fd-checkbox__checkmark" aria-hidden="true"></span>
                <span class="fd-checkbox__label-container">
                    <span class="fd-checkbox__text">Tri-state</span>
                </span>
            </label>
        </div>
    </div>
</fieldset>
`;
DisplayOnly.parameters = {
  docs: {
   description: {
      story: `In the Display Only Mode, the checkbox is replaced by two icons to represent the checked and unchecked states. The control becomes a simple icon. <br>Add the <code>.is-display</code> modifier class to <code>.fd-checkbox</code> for Display Only Mode.
        `
    }
  }
};