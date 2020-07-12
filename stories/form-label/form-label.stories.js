import '../../dist/form-item.css';
import '../../dist/input.css';

export default {
    title: 'Components/Forms/Form Label',
    parameters: {
        description: `
        A form-label is used to identify form elements such as form-input, checkbox and radio. Best practice is to use this element as a child of form-item.`,
        tags: ['f3', 'a11y', 'theme']
    }
};

export const primary = () => `
    <div class="fd-form-item">
        <label class="fd-form-label" for="input-1">Default input:</label>
        <input class="fd-input" type="text" id="input-1" placeholder="Field placeholder text">
    </div>
`;

primary.storyName = 'Default';

export const required = () => `
    <div class="fd-form-item">
        <label class="fd-form-label fd-form-label--required" for="input-1c">Required Input:</label>
        <input class="fd-input" type="text" id="input-1c" placeholder="Field placeholder text">
    </div>
`;

export const disabled = () => `
    <div class="fd-form-item">
        <label class="fd-form-label" for="input-05">Disabled Input:</label>
        <input class="fd-input" type="text" id="input-05" disabled placeholder="Field placeholder text">
    </div>
`;
