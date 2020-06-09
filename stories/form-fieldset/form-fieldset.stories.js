import '../../dist/fieldset.css';
import '../../dist/form-item.css';
import '../../dist/form-group.css';
import '../../dist/checkbox.css';
import '../../dist/radio.css';

export default {
    title: 'Components/Forms/FieldSet',
    parameters: {
        description: `
        A fieldset is used to give semantic meaning to a group of elements inside a form (e.g. Billing or Shipping Address).
        Grouping fields together into a fieldset also provides styling and accessibility benefits.`
    }
};

export const checkboxGroups = () => `
    <fieldset class="fd-fieldset">
        <legend class="fd-fieldset__legend">Checkboxes</legend>
        <div class="fd-form-group">
            <div class="fd-form-item">
                <input type="checkbox" class="fd-checkbox" id="Ai4ez611">
                <label class="fd-checkbox__label" for="Ai4ez611">
                    Field label
                </label>
            </div>
            <div class="fd-form-item">
                <input type="checkbox" class="fd-checkbox" id="Ai4ez612" checked>
                <label class="fd-checkbox__label" for="Ai4ez612">
                    Selected State
                </label>
            </div>
            <div class="fd-form-item">
                <input type="checkbox" class="fd-checkbox" id="Ai4ez613">
                <label class="fd-checkbox__label" for="Ai4ez613">TriState Text</label>
            </div>
        </div>
    </fieldset>

    <fieldset class="fd-fieldset">
        <legend class="fd-fieldset__legend">Checkboxes disabled</legend>
        <div class="fd-form-group">
            <div class="fd-form-item">
                <input type="checkbox" class="fd-checkbox" id="Ai4ez614" disabled>
                <label class="fd-checkbox__label" for="Ai4ez614">
                    Field label
                </label>
            </div>
            <div class="fd-form-item">
                <input type="checkbox" class="fd-checkbox" id="Ai4ez615" disabled>
                <label class="fd-checkbox__label" for="Ai4ez615">
                    Field label
                </label>
            </div>
            <div class="fd-form-item">
                <input type="checkbox" class="fd-checkbox" id="Ai4ez616" disabled>
                <label class="fd-checkbox__label" for="Ai4ez616">
                    Field label
                </label>
            </div>
        </div>
    </fieldset>

    <fieldset class="fd-fieldset">
        <legend class="fd-fieldset__legend">Checkboxes inline</legend>
        <div class="fd-form-group fd-form-group--inline">
            <div class="fd-form-group__item fd-form-item">
                <input type="checkbox" class="fd-checkbox" id="Ai4ez617">
                <label class="fd-checkbox__label" for="Ai4ez617">
                    Field label
                </label>
            </div>
            <div class="fd-form-group__item fd-form-item">
                <input type="checkbox" class="fd-checkbox" id="Ai4ez618">
                <label class="fd-checkbox__label" for="Ai4ez618">
                    Field label
                </label>
            </div>
            <div class="fd-form-group__item fd-form-item">
                <input type="checkbox" class="fd-checkbox" id="Ai4ez619">
                <label class="fd-checkbox__label" for="Ai4ez619">
                    Field label
                </label>
            </div>
        </div>
    </fieldset>
`;

checkboxGroups.parameters = {
    docs: {
        iframeHeight: 450
    }
};

export const radioButtonGroups = () => `
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
                <input type="radio" class="fd-radio" id="pDidh7613" name="radio1">
                <label class="fd-radio__label" for="pDidh7613">
                    Field label
                </label>
            </div>
        </div>
    </fieldset>
`;

radioButtonGroups.parameters = {
    docs: {
        iframeHeight: 200,
        storyDescription: 'Radio button groups should always be grouped using fieldset for accessibility reasons.'
    }
};
