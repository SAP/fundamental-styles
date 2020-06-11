import '../../dist/form-label.css';
import '../../dist/checkbox.css';
import '../../dist/fieldset.css';

export default {
    title: 'Components/Forms/Checkbox',
    parameters: {
        description: `
A checkbox lets the user set a binary value (such as “true/false”). When the user clicks or taps the checkbox, it toggles between checked and unchecked. Checked means that the state described by the checkbox text applies, or that the item has been chosen.
With checkboxes, all options are visible and the user can make one or more selections. This component can be set disabled and also displayed in a row.

Use the check box if:

- Only one option can be selected or deselected, for example to accept terms of use. Use it only if the meaning is obvious.
- A group or a list of options can be selected independently of each other.
- All available options need to be displayed right away without any user interaction.
- An intermediate selection state (Tri-State) is required when multiple sub-options are grouped under a parent option. The Tri-State will represent that multiple (but not all) sub-options are selected in the list.

Do not use the checkbox control if:

- The user needs to choose multiple options from a large list. Use a multi-combo box instead.
- The user can choose only one option from a list. Use a radio buttons, a select, or a list instead.
- The user needs to perform instantaneous actions that do not need reviewing or confirming. Consider using the switch control instead.
- There is not enough space available on the screen. Use the combo box control instead.`,
        tags: ['f3', 'a11y', 'theme'] }
};

export const primary = () => `
<div style="display:flex;justify-content:space-between">
    <fieldset class="fd-fieldset">
        <legend class="fd-fieldset__legend">Cozy Checkboxes</legend>
        <div class="fd-form-group">
            <div class="fd-form-item">
                <input type="checkbox" class="fd-checkbox" id="Ai4ez611">
                <label class="fd-checkbox__label" for="Ai4ez611">
                    Apple
                </label>
            </div>
            <div class="fd-form-item">
                <input type="checkbox" class="fd-checkbox" id="Ai4ez612" checked>
                <label class="fd-checkbox__label" for="Ai4ez612">
                    Banana
                </label>
            </div>
            <div class="fd-form-item">
                <input type="checkbox" class="fd-checkbox" id="Ai4ez622" disabled>
                <label class="fd-checkbox__label" for="Ai4ez622">
                    Kiwi
                </label>
            </div>
            <div class="fd-form-item">
                <input type="checkbox" class="fd-checkbox" id="Ai4ez632"  checked disabled>
                <label class="fd-checkbox__label" for="Ai4ez632">
                    Lemon
                </label>
            </div>
            <div class="fd-form-item">
                <input type="checkbox" class="fd-checkbox" id="Ai4ez613">
                <label class="fd-checkbox__label" for="Ai4ez613">All Fruits (TriState)</label>
            </div>
            <div class="fd-form-item">
                <input type="checkbox" class="fd-checkbox" id="Ai4ez643" disabled>
                <label class="fd-checkbox__label" for="Ai4ez643">All Fruits (TriState)</label>
            </div>
        </div>
    </fieldset>
    <fieldset class="fd-fieldset">
        <legend class="fd-fieldset__legend">Compact Checkboxes</legend>
        <div class="fd-form-group">
            <div class="fd-form-item">
                <input type="checkbox" class="fd-checkbox fd-checkbox--compact" id="Ai4ez611c">
                <label class="fd-checkbox__label fd-checkbox__label--compact" for="Ai4ez611c">
                    Apple
                </label>
            </div>
            <div class="fd-form-item">
                <input type="checkbox" class="fd-checkbox fd-checkbox--compact" id="Ai4ez612c" checked>
                <label class="fd-checkbox__label fd-checkbox__label--compact" for="Ai4ez612c">
                    Banana
                </label>
            </div>
            <div class="fd-form-item">
                <input type="checkbox" class="fd-checkbox fd-checkbox--compact" id="Ai4ez622c" disabled>
                <label class="fd-checkbox__label fd-checkbox__label--compact" for="Ai4ez622c">
                    Kiwi
                </label>
            </div>
            <div class="fd-form-item">
                <input type="checkbox" class="fd-checkbox fd-checkbox--compact" id="Ai4ez632c"  checked disabled>
                <label class="fd-checkbox__label fd-checkbox__label--compact" for="Ai4ez632c">
                    Lemon
                </label>
            </div>
            <div class="fd-form-item">
                <input type="checkbox" class="fd-checkbox fd-checkbox--compact" id="Ai4ez613c">
                <label class="fd-checkbox__label fd-checkbox__label--compact" for="Ai4ez613c">All Fruits (TriState)</label>
            </div>
            <div class="fd-form-item">
                <input type="checkbox" class="fd-checkbox fd-checkbox--compact" id="Ai4ez643c" disabled>
                <label class="fd-checkbox__label fd-checkbox__label--compact" for="Ai4ez643c">All Fruits (TriState)</label>
            </div>
        </div>
    </fieldset>
</div>
`;

primary.storyName = 'Responsiveness';
primary.parameters = {
    docs: {
        iframeHeight: 330,
        storyDescription: 'A checkbox can appear in two different sizes. In `cozy` mode, it is bigger than it is in `compact` mode. This makes the checkbox easier to select on touch devices.'
    }
};

export const inline = () => `
<fieldset class="fd-fieldset">
    <legend class="fd-fieldset__legend">Checkboxes inline</legend>
    <div class="fd-form-group fd-form-group--inline">
        <div class="fd-form-group__item fd-form-item">
            <input type="checkbox" class="fd-checkbox" id="Ai4ez617">
            <label class="fd-checkbox__label" for="Ai4ez617">
                Potatos
            </label>
        </div>
        <div class="fd-form-group__item fd-form-item">
            <input type="checkbox" class="fd-checkbox" id="Ai4ez618" checked>
            <label class="fd-checkbox__label" for="Ai4ez618">
                Tomatos
            </label>
        </div>
        <div class="fd-form-group__item fd-form-item">
            <input type="checkbox" class="fd-checkbox" id="Ai4ez619" disabled checked>
            <label class="fd-checkbox__label" for="Ai4ez619">
                Carrots
            </label>
        </div>
    </div>
</fieldset>
`;
inline.storyName = 'Checkboxes listed inline';

export const states = () => `
<div style="display:flex;justify-content:space-between;flex-wrap:wrap">
    <fieldset class="fd-fieldset">
        <legend class="fd-fieldset__legend">Checkboxes Error</legend>
        <div class="fd-form-group">
            <div class="fd-form-item">
                <input type="checkbox" class="fd-checkbox is-error" id="Ai4ez6119">
                <label class="fd-checkbox__label" for="Ai4ez6119">
                    Text Option
                </label>
            </div>
            <div class="fd-form-item">
                <input type="checkbox" class="fd-checkbox is-error" id="Ai4ez6129" checked>
                <label class="fd-checkbox__label" for="Ai4ez6129">
                    Selected State
                </label>
            </div>
            <div class="fd-form-item">
                <input type="checkbox" class="fd-checkbox is-error" id="Ai4ez613i1">
                <label class="fd-checkbox__label" for="Ai4ez613i1">
                    TriState Text
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
                    Text Option
                </label>
            </div>
            <div class="fd-form-item">
                <input type="checkbox" class="fd-checkbox is-success" id="Ai4ez61292" checked>
                <label class="fd-checkbox__label" for="Ai4ez61292">
                    Selected State
                </label>
            </div>
            <div class="fd-form-item">
                <input type="checkbox" class="fd-checkbox is-success" id="Ai4ez613i2">
                <label class="fd-checkbox__label" for="Ai4ez613i2">
                    TriState Text
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
                    Text Option
                </label>
            </div>
            <div class="fd-form-item">
                <input type="checkbox" class="fd-checkbox is-warning" id="Ai4ez61293" checked>
                <label class="fd-checkbox__label" for="Ai4ez61293">
                    Selected State
                </label>
            </div>
            <div class="fd-form-item">
                <input type="checkbox" class="fd-checkbox is-warning" id="Ai4ez613i3">
                <label class="fd-checkbox__label" for="Ai4ez613i3">
                    TriState Text
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
                    Text Option
                </label>
            </div>
            <div class="fd-form-item">
                <input type="checkbox" class="fd-checkbox is-information" id="Ai4ez61294" checked>
                <label class="fd-checkbox__label" for="Ai4ez61294">
                    Selected State
                </label>
            </div>
            <div class="fd-form-item">
                <input type="checkbox" class="fd-checkbox is-information" id="Ai4ez613i4">
                <label class="fd-checkbox__label" for="Ai4ez613i4">
                    TriState Text
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
                    Text Option
                </label>
            </div>
            <div class="fd-form-item">
                <input type="checkbox" class="fd-checkbox" id="Ai4ez61296" checked disabled>
                <label class="fd-checkbox__label" for="Ai4ez61296">
                    Selected State
                </label>
            </div>
            <div class="fd-form-item">
                <input type="checkbox" class="fd-checkbox" id="Ai4ez613i6" disabled>
                <label class="fd-checkbox__label" for="Ai4ez613i6">
                    TriState Text
                </label>
            </div>
        </div>
    </fieldset>
</div>
`;

states.storyName = 'Interaction States';
states.parameters = {
    docs: {
        iframeHeight: 400
    }
};

export const rtl = () => `
<fieldset class="fd-fieldset" dir="rtl">
    <legend class="fd-fieldset__legend">Checkboxes RTL Support</legend>
    <div class="fd-form-group">
        <div class="fd-form-item">
            <input type="checkbox" class="fd-checkbox" id="Ai4ez611tt">
            <label class="fd-checkbox__label" for="Ai4ez611tt">
                Text Option
            </label>
        </div>
        <div class="fd-form-item">
            <input type="checkbox" class="fd-checkbox" id="Ai4ez612tt" checked>
            <label class="fd-checkbox__label" for="Ai4ez612tt">
                Selected State
            </label>
        </div>
        <div class="fd-form-item">
            <input type="checkbox" class="fd-checkbox" id="Ai4ez613i7">
            <label class="fd-checkbox__label" for="Ai4ez613i7">
                TriState Text
            </label>
        </div>
    </div>
</fieldset>
`;

rtl.storyName = 'Checkboxes in RTL Mode';
rtl.parameters = {
    docs: {
        iframeHeight: 200
    }
};
