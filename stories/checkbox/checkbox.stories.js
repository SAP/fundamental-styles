import '../../dist/form-label.css';
import '../../dist/checkbox.css';
import '../../dist/fieldset.css';

export default {
    title: 'Components/Forms/Checkbox',
    parameters: {
        description: `A checkbox lets the user set a binary value such as “true/false”. When the user selects the checkbox, it toggles between:

- **Checked**: the state described by the checkbox text applies, or that the item has been chosen.
- **Un-checked**: the state described by the checkbox is not applied.
- **Tri-state**: a state that indicates it is neither checked nor unchecked. The main purpose of the tri-state is to represent a mixed selection of states of dependent input fields. If some (but not all) of the dependent fields are selected, the checkbox shows a partially selected state. This is only a visual state and can’t be achieved by a direct user interaction.

Note: With checkboxes, all options are visible, and the user can make one or more selections.  This component can be set to disabled as well as displayed in a row.

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
        tags: ['f3', 'a11y', 'theme'] }
};

const localStyles = `
<style>
    .checkbox-example-container > fieldset {
        max-width: 100%;
    }
</style>
`;

export const desktop = () => `
${localStyles}
<fieldset class="fd-fieldset">
    <legend class="fd-fieldset__legend">Compact Checkboxes</legend>
    <div class="fd-form-group">
        <div class="fd-form-item">
            <input type="checkbox" class="fd-checkbox fd-checkbox--compact" id="Ai4ez611c">
            <label class="fd-checkbox__label fd-checkbox__label--compact" for="Ai4ez611c">
                <span class="fd-checkbox__text">Apple</span>
            </label>
        </div>
        <div class="fd-form-item">
            <input type="checkbox" class="fd-checkbox fd-checkbox--compact" id="Ai4ez612c" checked>
            <label class="fd-checkbox__label fd-checkbox__label--compact" for="Ai4ez612c">
                <span class="fd-checkbox__text">Banana</span>
            </label>
        </div>
        <div class="fd-form-item">
            <input type="checkbox" class="fd-checkbox fd-checkbox--compact" id="Ai4ez622c" disabled>
            <label class="fd-checkbox__label fd-checkbox__label--compact" for="Ai4ez622c">
                <span class="fd-checkbox__text">Kiwi</span>
            </label>
        </div>
        <div class="fd-form-item">
            <input type="checkbox" class="fd-checkbox fd-checkbox--compact" id="Ai4ez632c"  checked disabled>
            <label class="fd-checkbox__label fd-checkbox__label--compact" for="Ai4ez632c">
                <span class="fd-checkbox__text">Lemon</span>
            </label>
        </div>
        <div class="fd-form-item">
            <input type="checkbox" class="fd-checkbox fd-checkbox--compact" id="Ai4ez613c">
            <label class="fd-checkbox__label fd-checkbox__label--compact" for="Ai4ez613c">
                <span class="fd-checkbox__text">All Fruits (TriState)</span>
            </label>
        </div>
        <div class="fd-form-item">
            <input type="checkbox" class="fd-checkbox fd-checkbox--compact" id="Ai4ez643c" disabled>
            <label class="fd-checkbox__label fd-checkbox__label--compact" for="Ai4ez643c">
                <span class="fd-checkbox__text">All Fruits (TriState)</span>
            </label>
        </div>
    </div>
</fieldset>
`;

desktop.storyName = 'Desktop';
desktop.parameters = {
    docs: {
        iframeHeight: 330,
        storyDescription: `A checkbox can be displayed in two different sizes desktop (compact) and mobile (default). 
The checkbox appears smaller and uses the <code>fd-checkbox\\_\\_label--compact</code> modifier class.
        `
    }
};

export const mobile = () => `
${localStyles}
<fieldset class="fd-fieldset">
    <legend class="fd-fieldset__legend">Cozy Checkboxes</legend>
    <div class="fd-form-group">
        <div class="fd-form-item">
            <input type="checkbox" class="fd-checkbox" id="Ai4ez611">
            <label class="fd-checkbox__label" for="Ai4ez611">
                <span class="fd-checkbox__text">Apple</span>
            </label>
        </div>
        <div class="fd-form-item">
            <input type="checkbox" class="fd-checkbox" id="Ai4ez612" checked>
            <label class="fd-checkbox__label" for="Ai4ez612">
                <span class="fd-checkbox__text">Banana</span>
            </label>
        </div>
        <div class="fd-form-item">
            <input type="checkbox" class="fd-checkbox" id="Ai4ez622" disabled>
            <label class="fd-checkbox__label" for="Ai4ez622">
                <span class="fd-checkbox__text">Kiwi</span>
            </label>
        </div>
        <div class="fd-form-item">
            <input type="checkbox" class="fd-checkbox" id="Ai4ez632"  checked disabled>
            <label class="fd-checkbox__label" for="Ai4ez632">
                <span class="fd-checkbox__text">Lemon</span>
            </label>
        </div>
        <div class="fd-form-item">
            <input type="checkbox" class="fd-checkbox" id="Ai4ez613">
            <label class="fd-checkbox__label" for="Ai4ez613">
                <span class="fd-checkbox__text">All Fruits (TriState)</span>
            </label>
        </div>
        <div class="fd-form-item">
            <input type="checkbox" class="fd-checkbox" id="Ai4ez643" disabled>
            <label class="fd-checkbox__label" for="Ai4ez643">
                <span class="fd-checkbox__text">All Fruits (TriState)</span>
            </label>
        </div>
    </div>
</fieldset>
`;

mobile.storyName = 'Mobile';
mobile.parameters = {
    docs: {
        iframeHeight: 330,
        storyDescription: `A checkbox can display larger so users can select options easier on a mobile screen. This is the default size of the checkbox.
        `
    }
};

export const inline = () => `
<fieldset class="fd-fieldset">
    <legend class="fd-fieldset__legend">Checkboxes inline</legend>
    <div class="fd-form-group fd-form-group--inline">
        <div class="fd-form-group__item fd-form-item">
            <input type="checkbox" class="fd-checkbox" id="Ai4ez617">
            <label class="fd-checkbox__label" for="Ai4ez617">
                <span class="fd-checkbox__text">Potatoes</span>
            </label>
        </div>
        <div class="fd-form-group__item fd-form-item">
            <input type="checkbox" class="fd-checkbox" id="Ai4ez618" checked>
            <label class="fd-checkbox__label" for="Ai4ez618">
                <span class="fd-checkbox__text">Tomatoes</span>
            </label>
        </div>
        <div class="fd-form-group__item fd-form-item">
            <input type="checkbox" class="fd-checkbox" id="Ai4ez619" disabled checked>
            <label class="fd-checkbox__label" for="Ai4ez619">
                <span class="fd-checkbox__text">Carrots</span>
            </label>
        </div>
    </div>
</fieldset>
`;

inline.storyName = 'Inline';
inline.parameters = {
    docs: {
        iframeHeight: 400,
        storyDescription: 'Checkboxes can display horizontally in a line. To display them this way, add the <code>fd-checkbox__label--inline</code> modifier class to the element.'
    }
};

export const states = () => `
${localStyles}
<div class="checkbox-example-container">
    <fieldset class="fd-fieldset">
        <legend class="fd-fieldset__legend">Checkboxes Error</legend>
        <div class="fd-form-group">
            <div class="fd-form-item">
                <input type="checkbox" class="fd-checkbox is-error" id="Ai4ez6119">
                <label class="fd-checkbox__label" for="Ai4ez6119">
                    <span class="fd-checkbox__text">Text Option</span>
                </label>
            </div>
            <div class="fd-form-item">
                <input type="checkbox" class="fd-checkbox is-error" id="Ai4ez6129" checked>
                <label class="fd-checkbox__label" for="Ai4ez6129">
                    <span class="fd-checkbox__text">Selected State</span>
                </label>
            </div>
            <div class="fd-form-item">
                <input type="checkbox" class="fd-checkbox is-error" id="Ai4ez613i1">
                <label class="fd-checkbox__label" for="Ai4ez613i1">
                    <span class="fd-checkbox__text">TriState Text</span>
                </label>
            </div>
        </div>
    </fieldset>

    <fieldset class="fd-fieldset">
        <legend class="fd-fieldset__legend">Checkboxes Success</legend>
        <div class="fd-form-group">
            <div class="fd-form-item">
                <input type="checkbox" class="fd-checkbox is-success" id="Ai4ez61192">
                <label class="fd-checkbox__label" for="Ai4ez61192">
                    <span class="fd-checkbox__text">Text Option</span>
                </label>
            </div>
            <div class="fd-form-item">
                <input type="checkbox" class="fd-checkbox is-success" id="Ai4ez61292" checked>
                <label class="fd-checkbox__label" for="Ai4ez61292">
                    <span class="fd-checkbox__text">Selected State</span>
                </label>
            </div>
            <div class="fd-form-item">
                <input type="checkbox" class="fd-checkbox is-success" id="Ai4ez613i2">
                <label class="fd-checkbox__label" for="Ai4ez613i2">
                    <span class="fd-checkbox__text">TriState Text</span>
                </label>
            </div>
        </div>
    </fieldset>

    <fieldset class="fd-fieldset">
        <legend class="fd-fieldset__legend">Checkboxes Warning</legend>
        <div class="fd-form-group">
            <div class="fd-form-item">
                <input type="checkbox" class="fd-checkbox is-warning" id="Ai4ez61193">
                <label class="fd-checkbox__label" for="Ai4ez61193">
                    <span class="fd-checkbox__text">Text Option</span>
                </label>
            </div>
            <div class="fd-form-item">
                <input type="checkbox" class="fd-checkbox is-warning" id="Ai4ez61293" checked>
                <label class="fd-checkbox__label" for="Ai4ez61293">
                    <span class="fd-checkbox__text">Selected State</span>
                </label>
            </div>
            <div class="fd-form-item">
                <input type="checkbox" class="fd-checkbox is-warning" id="Ai4ez613i3">
                <label class="fd-checkbox__label" for="Ai4ez613i3">
                    <span class="fd-checkbox__text">TriState Text</span>
                </label>
            </div>
        </div>
    </fieldset>

    <fieldset class="fd-fieldset">
        <legend class="fd-fieldset__legend">Checkboxes Information</legend>
        <div class="fd-form-group">
            <div class="fd-form-item">
                <input type="checkbox" class="fd-checkbox is-information" id="Ai4ez61194">
                <label class="fd-checkbox__label" for="Ai4ez61194">
                    <span class="fd-checkbox__text">Text Option</span>
                </label>
            </div>
            <div class="fd-form-item">
                <input type="checkbox" class="fd-checkbox is-information" id="Ai4ez61294" checked>
                <label class="fd-checkbox__label" for="Ai4ez61294">
                    <span class="fd-checkbox__text">Selected State</span>
                </label>
            </div>
            <div class="fd-form-item">
                <input type="checkbox" class="fd-checkbox is-information" id="Ai4ez613i4">
                <label class="fd-checkbox__label" for="Ai4ez613i4">
                    <span class="fd-checkbox__text">TriState Text</span>
                </label>
            </div>
        </div>
    </fieldset>

    <fieldset class="fd-fieldset">
        <legend class="fd-fieldset__legend">Checkboxes Disabled</legend>
        <div class="fd-form-group">
            <div class="fd-form-item">
                <input type="checkbox" class="fd-checkbox" id="Ai4ez61196" disabled>
                <label class="fd-checkbox__label" for="Ai4ez61196">
                    <span class="fd-checkbox__text">Text Option</span>
                </label>
            </div>
            <div class="fd-form-item">
                <input type="checkbox" class="fd-checkbox" id="Ai4ez61296" checked disabled>
                <label class="fd-checkbox__label" for="Ai4ez61296">
                    <span class="fd-checkbox__text">Selected State</span>
                </label>
            </div>
            <div class="fd-form-item">
                <input type="checkbox" class="fd-checkbox" id="Ai4ez613i6" disabled>
                <label class="fd-checkbox__label" for="Ai4ez613i6">
                    <span class="fd-checkbox__text">TriState Text</span>
                </label>
            </div>
        </div>
    </fieldset>
</div>
`;

states.storyName = 'States';
states.parameters = {
    docs: {
        iframeHeight: 400,
        storyDescription: `Checkboxes can display several interaction states to communicate semantic meaning to the users. To display different states, Add the classes below to the <code>fd-form-item</code>:

| States | Class |
| :----------------- | :------------------ |
| Error | <code>fd-checkbox is-error</code> |
| Success | <code>fd-checkbox is-success</code> |
| Warning | <code>fd-checkbox is-warning</code> |
| Information | <code>fd-checkbox is-information</code> |
| Disabled | <code>fd-checkbox is-disabled</code> |
`
    }
};

export const rtl = () => `
<fieldset class="fd-fieldset" dir="rtl">
    <legend class="fd-fieldset__legend">Checkboxes RTL Support</legend>
    <div class="fd-form-group">
        <div class="fd-form-item">
            <input type="checkbox" class="fd-checkbox" id="Ai4ez611tt">
            <label class="fd-checkbox__label" for="Ai4ez611tt">
                <span class="fd-checkbox__text">Text Option</span>
            </label>
        </div>
        <div class="fd-form-item">
            <input type="checkbox" class="fd-checkbox" id="Ai4ez612tt" checked>
            <label class="fd-checkbox__label" for="Ai4ez612tt">
                <span class="fd-checkbox__text">Selected State</span>
            </label>
        </div>
        <div class="fd-form-item">
            <input type="checkbox" class="fd-checkbox" id="Ai4ez613i7">
            <label class="fd-checkbox__label" for="Ai4ez613i7">
                <span class="fd-checkbox__text">TriState Text</span>
            </label>
        </div>
    </div>
</fieldset>
`;

rtl.storyName = 'RTL';
rtl.parameters = {
    docs: {
        iframeHeight: 200,
        storyDescription: 'Checkboxes can also be displayed from right to left on the screen so they may be used internationally.'
    }
};
