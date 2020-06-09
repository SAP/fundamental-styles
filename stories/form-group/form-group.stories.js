import '../../dist/form-group.css';

export default {
    title: 'Components/Forms/FormGroup',
    parameters: {
        description: `
        Form groups are used to assemble form elements with labels, messages, and help containers.

        These components can be used alone. For example, the 'form__item' element with the label and control could be used without the full form group since not every form field will need error messages.`
    }
};

export const primary = () => `
    <div class="fd-form-group">
        <div class="fd-form-item">
            <label class="fd-form-label" for="input-1">Default input:</label>
            <input class="fd-input" type="text" id="input-1" placeholder="Field placeholder text">
        </div>
    </div>
`;

primary.storyName = 'Default';

export const compact = () => `
    <div class="fd-form-group">
        <div class="fd-form-item">
            <label class="fd-form-label" for="input-1b">Compact Input:</label>
            <input class="fd-input fd-input--compact" type="text" id="input-1b" placeholder="Field placeholder text">
        </div>
    </div>
`;

export const required = () => `
    <div class="fd-form-group">
        <div class="fd-form-item">
            <label class="fd-form-label fd-form-label--required" for="input-1c">Required Input:</label>
            <input class="fd-input" type="text" id="input-1c" placeholder="Field placeholder text">
        </div>
    </div>
`;
